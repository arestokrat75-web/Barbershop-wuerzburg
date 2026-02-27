import { google } from 'googleapis';

export default async function handler(req, res) {
    const { date } = req.query; // Format: YYYY-MM-DD

    if (!date) {
        return res.status(400).json({ error: 'Date is required' });
    }

    // PLACEHOLDERS for Environment Variables
    const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

    if (!CLIENT_EMAIL || !PRIVATE_KEY || !CALENDAR_ID) {
        return res.status(500).json({ error: 'Calendar configuration missing' });
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

        const response = await calendar.freebusy.query({
            requestBody: {
                timeMin,
                timeMax,
                items: [{ id: CALENDAR_ID }],
            },
        });

        const busySlots = response.data.calendars[CALENDAR_ID].busy;
        res.status(200).json({ busy: busySlots });
    } catch (error) {
        console.error('Google Calendar API error:', error);
        res.status(500).json({ error: 'Failed to fetch calendar data' });
    }
}
