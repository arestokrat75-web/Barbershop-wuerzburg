const standards = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Desinfizierte Werkzeuge',
        desc: 'Jedes Werkzeug wird nach jedem Kunden professionell desinfiziert und sterilisiert – ohne Ausnahme.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Frische Handtücher',
        desc: 'Für jeden Kunden ein frisches, warmes Handtuch. Kein Wiederverwenden, kein Kompromiss.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: 'Hautfreundliche Produkte',
        desc: 'Wir verwenden ausschließlich dermatologisch getestete Premium-Produkte für empfindliche Haut.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: 'Sauberer Arbeitsplatz',
        desc: 'Zwischen jedem Kunden wird der gesamte Arbeitsplatz gründlich gereinigt und vorbereitet.',
    },
];

export default function Hygiene() {
    return (
        <section id="hygiene" className="relative py-24 md:py-32 bg-barber-surface">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: text */}
                    <div>
                        <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                            Hygiene & Sicherheit
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-6">
                            Sicherheit, die man sieht:
                            <br />
                            <span className="text-gradient-gold">Unser Hygiene-Standard.</span>
                        </h2>
                        <p className="text-barber-text-muted text-lg leading-relaxed mb-8">
                            Deine Gesundheit ist keine Option, sondern unsere Grundlage.
                            Bei uns kannst du dich zurücklehnen – wir kümmern uns um den Rest.
                        </p>

                        {/* Trust badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-3 bg-barber-gold/10 border border-barber-gold/20 rounded-lg">
                            <svg className="w-5 h-5 text-barber-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-barber-gold text-sm font-medium">
                                100 % dokumentierte Reinigungsabläufe
                            </span>
                        </div>
                    </div>

                    {/* Right: grid of standards */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {standards.map((item, i) => (
                            <div
                                key={i}
                                className="group bg-barber-black rounded-xl p-6 border border-barber-border hover:border-barber-gold/30 transition-all duration-400 hover:gold-glow"
                            >
                                <div className="w-12 h-12 rounded-lg bg-barber-gold/10 flex items-center justify-center text-barber-gold mb-4 group-hover:bg-barber-gold/20 transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-barber-gold transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-barber-text-muted text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
