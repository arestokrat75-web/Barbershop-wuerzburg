import React from 'react';

const highlights = [
    {
        id: 1,
        title: 'Intelligentes 4-Schritte-Buchungssystem',
        desc: 'Kunden werden intuitiv durch Service-Wahl, Mitarbeiter-Wahl, Datum & Zeit und Kontaktdaten geführt.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'WhatsApp-Direkt-Benachrichtigung',
        desc: 'Sofortige Benachrichtigung auf Ihr Handy mit allen Details. Einfach antworten und der Termin steht.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Google Kalender Synchronisation',
        desc: 'Echtzeit-Prüfung verhindert Doppelbuchungen. Private Termine blockieren automatisch die Webseite.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Premium Design „Dark Gold Edition“',
        desc: 'Edles Design mit Gold-Akzenten, optimiert für Mobile-First und höchste Performance.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'Keine monatlichen Gebühren!',
        desc: 'Vergessen Sie teure Abos. Nach der Einrichtung entstehen keine laufenden Systemkosten.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function Highlights() {
    return (
        <section id="highlights" className="relative py-24 md:py-32 bg-barber-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                        DIE HIGHLIGHTS IM ÜBERBLICK
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-6">
                        Was diese Webseite
                        <br />
                        <span className="text-gradient-gold">besonders macht</span>
                    </h2>
                    <p className="text-barber-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
                        Im Gegensatz zu billigen Baukasten-Seiten ist dieses System maßgeschneidert und hoch performant.
                        Es ist darauf ausgelegt, Besucher direkt in Kunden zu verwandeln.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((item, i) => (
                        <div
                            key={item.id}
                            className="group relative bg-barber-surface rounded-xl p-8 border border-barber-border hover:border-barber-gold/40 transition-all duration-500 hover:gold-glow"
                        >
                            <div className="w-14 h-14 rounded-lg bg-barber-gold/10 flex items-center justify-center text-barber-gold mb-6 group-hover:bg-barber-gold/20 transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-barber-gold transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-barber-text-muted leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
