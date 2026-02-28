import { useState, useMemo, useEffect } from 'react';

const serviceOptions = [
    { name: 'Klassischer Haarschnitt', price: '35€', duration: '30 Min' },
    { name: 'Haarschnitt & Bartpflege', price: '50€', duration: '60 Min' },
    { name: 'Bartpflege & Rasur', price: '25€', duration: '30 Min' },
    { name: 'Premium Grooming', price: '70€', duration: '90 Min' },
];

const masters = [
    { id: 'max', name: 'Max Keller', role: 'Master Barber', img: 'barber-1.png' },
    { id: 'leon', name: 'Leon Hartmann', role: 'Senior Barber', img: 'barber-2.png' },
    { id: 'viktor', name: 'Viktor Brandt', role: 'Grooming Spezialist', img: 'barber-3.png' },
];

const daysOfWeek = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const months = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
];

export default function Booking() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: null,
        master: null,
        date: null,
        time: '',
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [busySlots, setBusySlots] = useState([]);
    const [loadingAvailability, setLoadingAvailability] = useState(false);

    // Fetch busy slots when date changes
    useEffect(() => {
        if (!formData.date) return;

        const fetchAvailability = async () => {
            setLoadingAvailability(true);
            try {
                const year = formData.date.getFullYear();
                const month = (formData.date.getMonth() + 1).toString().padStart(2, '0');
                const day = formData.date.getDate().toString().padStart(2, '0');
                const dateParam = `${year}-${month}-${day}`;
                const masterParam = formData.master?.id || 'any';

                const response = await fetch(`${import.meta.env.BASE_URL}api/get-busy-slots?date=${dateParam}&master=${masterParam}`);
                const data = await response.json();
                if (data.busy) {
                    setBusySlots(data.busy);
                }
            } catch (err) {
                console.error("Availability fetch failed:", err);
            } finally {
                setLoadingAvailability(false);
            }
        };

        fetchAvailability();
    }, [formData.date]);

    // Time slots (9:00 - 19:00, 15min)
    const timeSlotsArray = useMemo(() => {
        const slots = [];
        for (let hour = 9; hour < 19; hour++) {
            for (let min = 0; min < 60; min += 15) {
                const timeStr = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;

                // Check if this time overlaps with any busy slot
                const isBusy = busySlots.some(busy => {
                    const busyStart = new Date(busy.start);
                    const busyEnd = new Date(busy.end);
                    const slotTime = new Date(formData.date);
                    slotTime.setHours(hour, min, 0, 0);

                    return slotTime >= busyStart && slotTime < busyEnd;
                });

                if (!isBusy) {
                    slots.push(timeStr);
                }
            }
        }
        return slots;
    }, [busySlots, formData.date]);

    // Calendar logic
    const calendarDays = useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const days = [];
        for (let i = 0; i < firstDay; i++) days.push(null);
        for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
        return days;
    }, [currentMonth]);

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare WhatsApp message
        const phone = "38269568067"; // WhatsApp number from user
        const dateStr = formData.date?.toLocaleDateString('de-DE');
        const message = `*Neue Buchung - MAX Barber*%0A%0A` +
            `*Kunde:* ${formData.name}%0A` +
            `*Telefon:* ${formData.phone}%0A` +
            `*Service:* ${formData.service?.name}%0A` +
            `*Meister:* ${formData.master?.name}%0A` +
            `*Termin:* ${dateStr}, ${formData.time} Uhr%0A%0A` +
            `*Nachricht:* ${formData.message || 'Keine'}`;

        const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

        setSubmitted(true);

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        setTimeout(() => {
            setSubmitted(false);
            setStep(1);
            setFormData({ service: null, master: null, date: null, time: '', name: '', phone: '', email: '', message: '' });
        }, 5000);
    };

    return (
        <section id="buchen" className="relative py-24 md:py-32 bg-barber-black min-h-[800px]">
            <div className="section-divider mb-16" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                        Reservierung
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-4">
                        Termin <span className="text-gradient-gold">buchen</span>
                    </h2>

                    {/* Step Indicator */}
                    {!submitted && (
                        <div className="flex items-center justify-center gap-2 mt-8">
                            {[1, 2, 3, 4].map((s) => (
                                <div
                                    key={s}
                                    className={`h-1 transition-all duration-500 rounded-full ${s <= step ? 'w-8 bg-barber-gold' : 'w-4 bg-barber-border'}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="max-w-3xl mx-auto">
                    {submitted ? (
                        <div className="bg-barber-surface border border-barber-gold/30 rounded-2xl p-12 text-center animate-fade-in">
                            <div className="w-20 h-20 bg-barber-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-barber-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-3xl font-bold mb-4">Anfrage gesendet!</h3>
                            <p className="text-barber-text-muted text-lg mb-8">
                                Vielen Dank, {formData.name}! Wir haben deine Buchung für den {formData.date?.toLocaleDateString('de-DE')} um {formData.time} Uhr erhalten.
                                <br />Wir bestätigen deinen Termin in Kürze.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-barber-gold font-bold hover:underline"
                            >
                                Zurück zur Startseite
                            </button>
                        </div>
                    ) : (
                        <div className="bg-barber-surface border border-barber-border rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden transition-all duration-500">

                            {/* STEP 1: SERVICE */}
                            {step === 1 && (
                                <div className="animate-fade-in-right">
                                    <h3 className="font-serif text-2xl font-bold mb-6">Wähle deinen Service</h3>
                                    <div className="grid gap-4">
                                        {serviceOptions.map((opt) => (
                                            <button
                                                key={opt.name}
                                                onClick={() => { setFormData({ ...formData, service: opt }); handleNext(); }}
                                                className={`flex items-center justify-between p-5 rounded-xl border transition-all text-left group ${formData.service?.name === opt.name
                                                    ? 'bg-barber-gold/10 border-barber-gold'
                                                    : 'bg-barber-black border-barber-border hover:border-barber-gold/50'
                                                    }`}
                                            >
                                                <div>
                                                    <p className="font-bold text-lg group-hover:text-barber-gold transition-colors">{opt.name}</p>
                                                    <p className="text-sm text-barber-text-dim">{opt.duration}</p>
                                                </div>
                                                <div className="text-barber-gold font-bold text-xl">{opt.price}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: MASTER */}
                            {step === 2 && (
                                <div className="animate-fade-in-right">
                                    <button onClick={handleBack} className="text-barber-gold flex items-center gap-2 mb-6 hover:translate-x-[-4px] transition-transform">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                        Zurück zum Service
                                    </button>
                                    <h3 className="font-serif text-2xl font-bold mb-4">Wähle deinen Meister</h3>
                                    <p className="text-barber-text-dim mb-8 text-sm">Wer soll dich betreuen?</p>

                                    <div className="grid gap-6">
                                        {masters.map((m) => (
                                            <button
                                                key={m.id}
                                                onClick={() => { setFormData({ ...formData, master: m }); handleNext(); }}
                                                className={`flex items-center gap-6 p-4 rounded-xl border transition-all text-left ${formData.master?.id === m.id
                                                    ? 'bg-barber-gold/10 border-barber-gold'
                                                    : 'bg-barber-black border-barber-border hover:border-barber-gold/50'
                                                    }`}
                                            >
                                                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
                                                    <img src={`${import.meta.env.BASE_URL}${m.img}`} alt={m.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-lg">{m.name}</p>
                                                    <p className="text-barber-gold text-xs font-semibold uppercase tracking-wider">{m.role}</p>
                                                </div>
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => { setFormData({ ...formData, master: { name: 'Egal' } }); handleNext(); }}
                                            className="p-4 rounded-xl border border-dashed border-barber-border text-center hover:border-barber-gold transition-all"
                                        >
                                            Egal (Erster verfügbarer Mitarbeiter)
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: CALENDAR & TIME */}
                            {step === 3 && (
                                <div className="animate-fade-in-right">
                                    <button onClick={handleBack} className="text-barber-gold flex items-center gap-2 mb-6 hover:translate-x-[-4px] transition-transform">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                        Zurück zum Meister
                                    </button>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Calendar */}
                                        <div className="space-y-4">
                                            <h3 className="font-serif text-xl font-bold">Datum wählen</h3>
                                            <div className="bg-barber-black border border-barber-border rounded-xl p-4">
                                                <div className="flex items-center justify-between mb-4">
                                                    <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}>
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                    </button>
                                                    <span className="font-bold text-sm">{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                                                    <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}>
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                    </button>
                                                </div>
                                                <div className="grid grid-cols-7 text-center text-[10px] text-barber-text-dim font-bold mb-2">
                                                    {daysOfWeek.map(d => <div key={d}>{d}</div>)}
                                                </div>
                                                <div className="grid grid-cols-7 gap-1">
                                                    {calendarDays.map((date, i) => {
                                                        const isPast = date && date < new Date().setHours(0, 0, 0, 0);
                                                        const isSun = date && date.getDay() === 0;
                                                        const active = date && formData.date?.getTime() === date.getTime();
                                                        return (
                                                            <button
                                                                key={i} type="button"
                                                                disabled={!date || isPast || isSun}
                                                                onClick={() => setFormData({ ...formData, date, time: '' })}
                                                                className={`aspect-square text-xs rounded transition-all ${!date ? 'invisible' :
                                                                    active ? 'bg-barber-gold text-barber-black font-bold' :
                                                                        (isPast || isSun) ? 'opacity-10 cursor-not-allowed' :
                                                                            'hover:bg-barber-gold/20'
                                                                    }`}
                                                            >
                                                                {date?.getDate()}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Time Slots */}
                                        <div className="space-y-4">
                                            <h3 className="font-serif text-xl font-bold">Uhrzeit</h3>
                                            <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar grid grid-cols-3 gap-2">
                                                {!formData.date ? (
                                                    <div className="col-span-3 text-sm text-barber-text-dim text-center py-10 italic">Datum wählen für verfügbare Zeiten.</div>
                                                ) : (
                                                    timeSlotsArray.map(t => (
                                                        <button
                                                            key={t}
                                                            onClick={() => setFormData({ ...formData, time: t })}
                                                            className={`py-2 text-xs rounded border transition-all ${formData.time === t
                                                                ? 'bg-barber-gold border-barber-gold text-barber-black font-bold'
                                                                : 'bg-barber-black border-barber-border text-barber-text-muted hover:border-barber-gold/40'
                                                                }`}
                                                        >
                                                            {t}
                                                        </button>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {formData.date && formData.time && (
                                        <button
                                            onClick={handleNext}
                                            className="w-full mt-8 btn-shimmer py-4 text-barber-black font-bold tracking-widest rounded-lg"
                                        >
                                            WEITER ZU MEINEN ADTEN
                                        </button>
                                    )}
                                </div>
                            )}

                            {/* STEP 4: CONTACT */}
                            {step === 4 && (
                                <form onSubmit={handleSubmit} className="animate-fade-in-right space-y-6">
                                    <button type="button" onClick={handleBack} className="text-barber-gold flex items-center gap-2 mb-6 hover:translate-x-[-4px] transition-transform">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                        Zurück zur Zeitwahl
                                    </button>

                                    <h3 className="font-serif text-2xl font-bold mb-6">Persönliche Informationen</h3>

                                    <div className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <input
                                                type="text" required placeholder="Dein Name *"
                                                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-5 py-4 bg-barber-black border border-barber-border rounded-xl text-barber-text placeholder:text-barber-text-dim outline-none focus:border-barber-gold/50"
                                            />
                                            <input
                                                type="tel" required placeholder="Telefonnummer *"
                                                value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-5 py-4 bg-barber-black border border-barber-border rounded-xl text-barber-text placeholder:text-barber-text-dim outline-none focus:border-barber-gold/50"
                                            />
                                        </div>
                                        <input
                                            type="email" placeholder="E-Mail Adresse"
                                            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-5 py-4 bg-barber-black border border-barber-border rounded-xl text-barber-text placeholder:text-barber-text-dim outline-none focus:border-barber-gold/50"
                                        />
                                        <textarea
                                            placeholder="Nachricht (Optional)" rows="3"
                                            value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-5 py-4 bg-barber-black border border-barber-border rounded-xl text-barber-text placeholder:text-barber-text-dim outline-none focus:border-barber-gold/50 resize-none"
                                        />
                                    </div>

                                    <div className="p-4 bg-barber-black/50 border border-barber-border rounded-xl space-y-2 text-sm">
                                        <p className="flex justify-between">
                                            <span className="text-barber-text-dim">Service:</span>
                                            <span className="text-barber-gold">{formData.service?.name}</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span className="text-barber-text-dim">Meister:</span>
                                            <span className="text-barber-gold">{formData.master?.name}</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span className="text-barber-text-dim">Termin:</span>
                                            <span className="text-barber-gold">{formData.date?.toLocaleDateString('de-DE')}, {formData.time} Uhr</span>
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full btn-shimmer py-5 text-barber-black font-bold tracking-[0.2em] rounded-xl shadow-gold"
                                    >
                                        JETZT VERBINDLICH BUCHEN
                                    </button>
                                </form>
                            )}

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
