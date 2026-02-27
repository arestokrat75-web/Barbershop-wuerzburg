import { google } from 'googleapis';

export default async function handler(req, res) {
    const { date, master } = req.query; // Format: YYYY-MM-DD

    if (!date) {
        return res.status(400).json({ error: 'Date is required' });
    }

    // CALENDAR ID MAPPING (Placeholders for env variables)
    const masterCalendars = {
        'max': process.env.GOOGLE_CALENDAR_MAX,
        'leon': process.env.GOOGLE_CALENDAR_LEON,
        'viktor': process.env.GOOGLE_CALENDAR_VIKTOR,
    };

    const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!CLIENT_EMAIL || !PRIVATE_KEY) {
        return res.status(500).json({ error: 'Google Auth configuration missing' });
    }

    const auth = new google.auth.JWT(
        CLIENT_EMAIL,
        null,
        PRIVATE_KEY,
        ['https://www.googleapis.com/auth/calendar.readonly']
    );

    const calendar = google.calendar({ version: 'v3', auth });

    try {
        const timeMin = new Date(`${date}T00:00:00Z`).toISOString();
        const timeMax = new Date(`${date}T23:59:59Z`).toISOString();

        let calendarIds = [];
        if (master && masterCalendars[master]) {
            calendarIds = [masterCalendars[master]];
        } else {
            // If 'any' or invalid master, check all calendars
            calendarIds = Object.values(masterCalendars).filter(Boolean);
        }

        if (calendarIds.length === 0) {
            return res.status(200).json({ busy: [] });
        }

        const response = await calendar.freebusy.query({
            requestBody: {
                timeMin,
                timeMax,
                items: calendarIds.map(id => ({ id })),
            },
        });

        const busyData = response.data.calendars;

        if (calendarIds.length === 1) {
            // Single master: return their busy slots
            res.status(200).json({ busy: busyData[calendarIds[0]].busy });
        } else {
            // Multi-master (Egal): return slots where EVERYONE is busy
            // For simplicity in this demo, we return all busy slots from all calendars
            // A more complex logic would find intervals where no calendar is free.
            // Here we just return the raw data and let the frontend or a helper refine it.
            const allBusy = Object.values(busyData).flatMap(c => c.busy);
            res.status(200).json({ busy: allBusy, multi: true });
        }
    } catch (error) {
        console.error('Google Calendar API error:', error);
        res.status(500).json({ error: 'Failed to fetch calendar data' });
    }
}
