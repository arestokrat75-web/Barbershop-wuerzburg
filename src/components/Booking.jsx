import { useState, useMemo } from 'react';

const serviceOptions = [
    'Klassischer Haarschnitt – €35',
    'Haarschnitt & Bartpflege – €50',
    'Bartpflege & Rasur – €25',
    'Premium Grooming – €70',
];

const daysOfWeek = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const months = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
];

export default function Booking() {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', service: '', date: null, time: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Generate time slots (9:00 - 19:00 in 15min steps)
    const timeSlotsArray = useMemo(() => {
        const slots = [];
        for (let hour = 9; hour < 19; hour++) {
            for (let min = 0; min < 60; min += 15) {
                const h = hour.toString().padStart(2, '0');
                const m = min.toString().padStart(2, '0');
                slots.push(`${h}:${m}`);
            }
        }
        return slots;
    }, []);

    // Calendar logic
    const calendarDays = useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];
        // Pad start
        for (let i = 0; i < firstDay; i++) days.push(null);
        // Month days
        for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
        return days;
    }, [currentMonth]);

    const isToday = (date) => {
        if (!date) return false;
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const isSelected = (date) => {
        if (!date || !formData.date) return false;
        return date.getTime() === formData.date.getTime();
    };

    const handleDateSelect = (date) => {
        if (!date) return;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (date < today) return; // Disable past dates
        setFormData({ ...formData, date });
    };

    const changeMonth = (offset) => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.date || !formData.time) {
            alert('Bitte wähle einen Termin und eine Uhrzeit aus.');
            return;
        }
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="buchen" className="relative py-24 md:py-32 bg-barber-black">
            <div className="section-divider mb-16" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                        Termin vereinbaren
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-6">
                        Bereit für deinen
                        <br />
                        <span className="text-gradient-gold">besten Haarschnitt?</span>
                    </h2>
                    <p className="text-barber-text-muted text-lg max-w-2xl mx-auto">
                        Wähle deinen Wunschtermin direkt in unserem interaktiven Kalender.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Form (3 cols) */}
                    <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
                        {/* 1. Personal Info */}
                        <div className="space-y-5">
                            <h3 className="text-barber-gold text-sm font-bold uppercase tracking-wider border-b border-barber-border pb-2">1. Kontaktdaten</h3>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-medium text-barber-text-muted uppercase mb-2">Dein Name *</label>
                                    <input
                                        type="text" name="name" required
                                        value={formData.name} onChange={handleChange}
                                        placeholder="Max Mustermann"
                                        className="w-full px-4 py-3 bg-barber-surface border border-barber-border rounded text-barber-text focus:border-barber-gold/50 focus:ring-1 focus:ring-barber-gold/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-barber-text-muted uppercase mb-2">Telefon *</label>
                                    <input
                                        type="tel" name="phone" required
                                        value={formData.phone} onChange={handleChange}
                                        placeholder="+49 931 12345"
                                        className="w-full px-4 py-3 bg-barber-surface border border-barber-border rounded text-barber-text focus:border-barber-gold/50 focus:ring-1 focus:ring-barber-gold/20 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 2. Service Selection */}
                        <div className="space-y-4">
                            <h3 className="text-barber-gold text-sm font-bold uppercase tracking-wider border-b border-barber-border pb-2">2. Service</h3>
                            <div className="grid md:grid-cols-2 gap-3">
                                {serviceOptions.map((opt) => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, service: opt })}
                                        className={`px-4 py-3 rounded text-sm text-left border transition-all ${formData.service === opt
                                                ? 'bg-barber-gold/10 border-barber-gold text-barber-gold'
                                                : 'bg-barber-surface border-barber-border text-barber-text-muted hover:border-barber-gold/50'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 3. Date Selection (Calendar) */}
                        <div className="space-y-4">
                            <h3 className="text-barber-gold text-sm font-bold uppercase tracking-wider border-b border-barber-border pb-2">3. Datum & Uhrzeit</h3>

                            <div className="bg-barber-surface border border-barber-border rounded-xl p-6">
                                {/* Calendar Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <button
                                        type="button" onClick={() => changeMonth(-1)}
                                        className="p-2 hover:text-barber-gold transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    <h4 className="font-serif text-lg font-bold">{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h4>
                                    <button
                                        type="button" onClick={() => changeMonth(1)}
                                        className="p-2 hover:text-barber-gold transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>

                                {/* Calendar Grid */}
                                <div className="grid grid-cols-7 gap-1 mb-2">
                                    {daysOfWeek.map(d => (
                                        <div key={d} className="text-center text-[10px] uppercase tracking-widest text-barber-text-dim font-bold py-2">{d}</div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-7 gap-1">
                                    {calendarDays.map((date, i) => {
                                        const past = date && date < new Date().setHours(0, 0, 0, 0);
                                        const sun = date && date.getDay() === 0;
                                        const disabled = !date || past || sun;

                                        return (
                                            <button
                                                key={i}
                                                type="button"
                                                disabled={disabled}
                                                onClick={() => handleDateSelect(date)}
                                                className={`aspect-square flex items-center justify-center rounded text-sm transition-all ${!date ? 'invisible' :
                                                        isSelected(date) ? 'bg-barber-gold text-barber-black font-bold scale-110 shadow-lg shadow-barber-gold/20' :
                                                            disabled ? 'text-barber-text-dim/20 cursor-not-allowed' :
                                                                isToday(date) ? 'text-barber-gold border border-barber-gold/30 font-bold' :
                                                                    'text-barber-text-muted hover:bg-barber-gold/10 hover:text-barber-gold'
                                                    }`}
                                            >
                                                {date?.getDate()}
                                            </button>
                                        );
                                    })}
                                </div>
                                <p className="text-[10px] text-barber-text-dim mt-4 uppercase tracking-tighter">Sonntags geschlossen</p>
                            </div>

                            {/* Time Slots */}
                            {formData.date && (
                                <div className="animate-fade-in space-y-4">
                                    <p className="text-xs font-medium text-barber-text-muted uppercase">Verfügbare Uhrzeiten am {formData.date.toLocaleDateString('de-DE')}</p>
                                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                                        {timeSlotsArray.map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, time })}
                                                className={`py-2 rounded text-xs transition-all border ${formData.time === time
                                                        ? 'bg-barber-gold border-barber-gold text-barber-black font-bold'
                                                        : 'bg-barber-surface border-barber-border text-barber-text-muted hover:border-barber-gold/40'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 4. Message */}
                        <div className="space-y-3">
                            <h3 className="text-barber-gold text-sm font-bold uppercase tracking-wider border-b border-barber-border pb-2">4. Nachricht</h3>
                            <textarea
                                name="message" rows="3"
                                value={formData.message} onChange={handleChange}
                                placeholder="Besondere Wünsche oder Anmerkungen..."
                                className="w-full px-4 py-3 bg-barber-surface border border-barber-border rounded text-barber-text placeholder:text-barber-text-dim focus:border-barber-gold/50 focus:ring-1 focus:ring-barber-gold/20 outline-none transition-all resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full sm:w-auto btn-shimmer px-10 py-4 text-barber-black font-bold text-base tracking-wide rounded-lg"
                        >
                            {submitted ? '✓ Anfrage gesendet!' : 'TERMIN JETZT ANFRAGEN'}
                        </button>

                        {submitted && (
                            <div className="p-4 bg-barber-gold/10 border border-barber-gold/30 rounded-lg animate-fade-in">
                                <p className="text-barber-gold text-sm font-medium">
                                    Vielen Dank, {formData.name.split(' ')[0]}! Wir haben deine Anfrage für den {formData.date.toLocaleDateString('de-DE')} um {formData.time} Uhr erhalten. Wir bestätigen den Termin in Kürze per Telefon oder E-Mail.
                                </p>
                            </div>
                        )}
                    </form>

                    {/* Sidebar info (2 cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-barber-surface rounded-xl p-8 border border-barber-border relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-barber-gold/5 -mr-16 -mt-16 rounded-full blur-2xl group-hover:bg-barber-gold/10 transition-all duration-700" />
                            <h3 className="font-serif text-2xl font-bold mb-6 text-barber-gold">MAX Barber</h3>
                            <div className="space-y-6 text-sm text-barber-text-muted">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded bg-barber-black border border-barber-border flex items-center justify-center text-barber-gold">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-barber-text font-bold mb-1">Salon Würzburg</p>
                                        <p>Domstraße 15, 97070 Würzburg</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded bg-barber-black border border-barber-border flex items-center justify-center text-barber-gold">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-barber-text font-bold mb-1">Rückfragen?</p>
                                        <p>+49 931 1234567</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-barber-surface rounded-xl p-8 border border-barber-border">
                            <h3 className="font-serif text-xl font-bold mb-6 text-barber-gold">Öffnungszeiten</h3>
                            <div className="space-y-4 text-sm">
                                {[
                                    ['Mo – Fr', '09:00 – 19:00'],
                                    ['Samstag', '09:00 – 16:00'],
                                    ['Sonntag', 'Geschlossen'],
                                ].map(([day, hours]) => (
                                    <div key={day} className="flex justify-between border-b border-barber-border/30 pb-3 last:border-0 last:pb-0">
                                        <span className="text-barber-text-muted">{day}</span>
                                        <span className={hours === 'Geschlossen' ? 'text-barber-text-dim' : 'text-barber-text font-bold'}>{hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
