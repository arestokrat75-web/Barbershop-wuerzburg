import React from 'react';

const features = [
    'Kompletter Quellcode (React & Tailwind CSS)',
    'Einrichtung Ihrer WhatsApp-Nummer',
    'Anbindung an Ihren Google Kalender',
    'Hosting-Unterstützung',
    'SEO-Optimierung',
];

export default function Vorteile() {
    return (
        <section id="vorteile" className="relative py-24 md:py-32 bg-barber-surface/30">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                            LIEFERUMFANG & VORTEILE
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-6">
                            Warum bei mir
                            <br />
                            <span className="text-gradient-gold">kaufen?</span>
                        </h2>
                        <p className="text-barber-text-muted text-lg leading-relaxed mb-10">
                            Ich liefere keine "Baustelle", sondern ein schlüsselfertiges System.
                            Sie geben mir Ihre Daten, und wenige Tage später ist Ihr Salon digital auf Profi-Niveau.
                        </p>

                        <ul className="space-y-4">
                            {features.map((f, i) => (
                                <li key={i} className="flex items-center gap-4 text-barber-text">
                                    <div className="w-6 h-6 rounded-full bg-barber-gold/20 flex items-center justify-center text-barber-gold flex-shrink-0">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-lg">{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="bg-barber-surface rounded-2xl p-10 border border-barber-border gold-glow relative z-10">
                            <h3 className="font-serif text-2xl font-bold mb-6 text-barber-gold italic">Interesse?</h3>
                            <p className="text-barber-text text-xl leading-relaxed mb-8">
                                "Schreiben Sie mir eine Nachricht mit Ihren Fragen! Ich erstelle für Sie eine hochmoderne, voll funktionsfähige Landingpage."
                            </p>
                            <a
                                href="#buchen"
                                className="inline-block px-8 py-4 bg-gradient-gold text-barber-black font-bold rounded shadow-lg hover:shadow-barber-gold/30 transition-all"
                            >
                                JETZT ANFRAGEN
                            </a>
                        </div>
                        {/* Decorative background circle */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-barber-gold/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-barber-gold/5 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
