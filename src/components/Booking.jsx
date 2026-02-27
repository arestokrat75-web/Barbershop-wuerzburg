import { useState } from 'react';

const serviceOptions = [
    'Klassischer Haarschnitt – €35',
    'Haarschnitt & Bartpflege – €50',
    'Bartpflege & Rasur – €25',
    'Premium Grooming – €70',
];

export default function Booking() {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', service: '', date: '', time: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        Buch jetzt deinen Termin – persönliche Beratung inklusive, garantiert.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Form (3 cols) */}
                    <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-barber-text-muted mb-2">
                                    Dein Name *
                                </label>
                                <input
                                    type="text" id="name" name="name" required
                                    value={formData.name} onChange={handleChange}
                                    placeholder="Max Mustermann"
                                    className="w-full px-4 py-3 bg-barber-surface border border-barber-border rounded-lg text-barber-text placeholder:text-barber-text-dim focus:outline-none focus:border-barber-gold/50 focus:ring-1 focus:ring-barber-gold/20 transition-all duration-300"
                                />
                            </div>
                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-barber-text-muted mb-2">
                                    Telefon *
                                </label>
                                <input
                                    type="tel" id="phone" name="phone" required
                                    value={formData.phone} onChange={handleChange}
                                    placeholder="+49 931 1234567"
                                    className="w-full px-4 py-3 bg-barber-surface border border-barber-border rounded-lg text-barber-text placeholder:text-barber-text-dim focus:outline-none focus:border-barber-gold/50 focus:ring-1 focus:ring-barber-gold/20 transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-barber-text-muted mb-2">
                                E-Mail
                            </label>
                            <input
                                type="email" id="email" name="email"
                                value={formData.email} onChange={handleChange}
                                placeholder="deine@email.de"
                                className="w-full px-4 py-3 bg-barber-surface border border-barber-border rounded-lg text-barber-text placeholder:text-barber-text-dim focus:outline-none focus:border-barber-gold/50 focus:ring-1 focus:ring-barber-gold/20 transition-all duration-300"
                            />
                        </div>

                        {/* Service */}
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-barber-text-muted mb-2">
                                Gewünschte Service *
                            </label>
                            <select
                                id="service" name="service" required
                                value={formData.service} onChange={handleChange}
                                className="w-full px-4 py-3 bg-barber-surface border border-barber-border rounded-lg text-barber-text focus:outline-none focus:border-barber-gold/50 focus:ring-1 focus:ring-barber-gold/20 transition-all duration-300 appearance-none cursor-pointer"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23C8A55C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center',
                                    backgroundSize: '20px',
                                }}
                            >
                                <option value="" disabled>Leistung auswählen…</option>
                                {serviceOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            {/* Date */}
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-barber-text-muted mb-2">
                                    Wunschtermin *
                                </label>
                                <input
                                    type="date" id="date" name="date" required
                                    value={formData.date} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-barber-surface border border-barber-border rounded-lg text-barber-text focus:outline-none focus:border-barber-gold/50 focus:ring-1 focus:ring-barber-gold/20 transition-all duration-300"
                                />
                            </div>
                            {/* Time */}
                            <div>
                                <label htmlFor="time" className="block text-sm font-medium text-barber-text-muted mb-2">
                                    Uhrzeit
                                </label>
                                <input
                                    type="time" id="time" name="time"
                                    value={formData.time} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-barber-surface border border-barber-border rounded-lg text-barber-text focus:outline-none focus:border-barber-gold/50 focus:ring-1 focus:ring-barber-gold/20 transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-barber-text-muted mb-2">
                                Nachricht (optional)
                            </label>
                            <textarea
                                id="message" name="message" rows="3"
                                value={formData.message} onChange={handleChange}
                                placeholder="Besondere Wünsche, Referenzbilder etc."
                                className="w-full px-4 py-3 bg-barber-surface border border-barber-border rounded-lg text-barber-text placeholder:text-barber-text-dim focus:outline-none focus:border-barber-gold/50 focus:ring-1 focus:ring-barber-gold/20 transition-all duration-300 resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full sm:w-auto btn-shimmer px-10 py-4 text-barber-black font-bold text-base tracking-wide rounded-lg"
                        >
                            {submitted ? '✓ Anfrage gesendet!' : 'TERMIN ANFRAGEN'}
                        </button>

                        {submitted && (
                            <p className="text-barber-gold text-sm mt-3 animate-fade-in">
                                Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei dir.
                            </p>
                        )}
                    </form>

                    {/* Sidebar info (2 cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Address */}
                        <div className="bg-barber-surface rounded-xl p-6 border border-barber-border">
                            <h3 className="font-serif text-lg font-bold mb-4 text-barber-gold">Salon</h3>
                            <div className="space-y-3 text-sm text-barber-text-muted">
                                <div className="flex gap-3">
                                    <svg className="w-5 h-5 text-barber-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-barber-text font-medium">MAX Barber</p>
                                        <p>Domstraße 15</p>
                                        <p>97070 Würzburg</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <svg className="w-5 h-5 text-barber-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <p>+49 931 1234567</p>
                                </div>
                                <div className="flex gap-3">
                                    <svg className="w-5 h-5 text-barber-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>info@maxbarber-wuerzburg.de</p>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-barber-surface rounded-xl p-6 border border-barber-border">
                            <h3 className="font-serif text-lg font-bold mb-4 text-barber-gold">Öffnungszeiten</h3>
                            <div className="space-y-2 text-sm">
                                {[
                                    ['Mo – Fr', '09:00 – 19:00'],
                                    ['Samstag', '09:00 – 16:00'],
                                    ['Sonntag', 'Geschlossen'],
                                ].map(([day, hours]) => (
                                    <div key={day} className="flex justify-between">
                                        <span className="text-barber-text-muted">{day}</span>
                                        <span className={hours === 'Geschlossen' ? 'text-barber-text-dim' : 'text-barber-text font-medium'}>{hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick trust */}
                        <div className="bg-barber-surface rounded-xl p-6 border border-barber-border">
                            <h3 className="font-serif text-lg font-bold mb-3 text-barber-gold">Warum MAX?</h3>
                            <ul className="space-y-2">
                                {[
                                    '5 Min. Vorab-Beratung garantiert',
                                    'Alle Preise inklusive Waschen & Styling',
                                    'Höchste Hygiene-Standards',
                                    'Pünktlich – immer',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-sm text-barber-text-muted">
                                        <svg className="w-4 h-4 text-barber-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
