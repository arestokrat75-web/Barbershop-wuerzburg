const tips = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2m0 2a2 2 0 012 2v1a2 2 0 01-2 2 2 2 0 01-2-2V6a2 2 0 012-2zm0 10v2m0-2a2 2 0 01-2-2V9h4v3a2 2 0 01-2 2zm10 2v2m0-2a2 2 0 002-2v-1a2 2 0 00-2-2 2 2 0 00-2 2v1a2 2 0 002 2zM17 4V2m0 2a2 2 0 012 2v1a2 2 0 01-2 2 2 2 0 01-2-2V6a2 2 0 012-2z" />
            </svg>
        ),
        title: 'Richtig Föhnen',
        desc: 'Wir zeigen dir die Technik: Mit der richtigen Föhnrichtung sitzt der Look auch am nächsten Morgen.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: 'Produkt-Empfehlung',
        desc: 'Zu jedem Schnitt bekommst du eine persönliche Empfehlung für Produkte, die zu deinem Haartyp passen.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Pflege-Rhythmus',
        desc: 'Wir erstellen deinen individuellen Schnitt-Rhythmus, damit dein Style immer on point bleibt.',
    },
];

export default function StylingSupport() {
    return (
        <section id="styling" className="relative py-24 md:py-32 bg-barber-black">
            <div className="section-divider mb-16" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Right content first on mobile, left on desktop */}
                    <div className="order-2 lg:order-1">
                        <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                            Styling-Support
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-6">
                            Der Look, der auch nach
                            <br />
                            <span className="text-gradient-gold">der ersten Wäsche noch sitzt.</span>
                        </h2>
                        <p className="text-barber-text-muted text-lg leading-relaxed mb-10">
                            Ein großartiger Schnitt nützt wenig, wenn du ihn zu Hause nicht reproduzieren kannst.
                            Deshalb bekommst du bei uns nicht nur den perfekten Look –
                            sondern auch das Know-how, ihn zu halten.
                        </p>

                        {/* Tips */}
                        <div className="space-y-6">
                            {tips.map((tip, i) => (
                                <div
                                    key={i}
                                    className="group flex gap-5 p-4 rounded-xl bg-barber-surface border border-barber-border hover:border-barber-gold/30 transition-all duration-400"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-barber-gold/10 flex items-center justify-center text-barber-gold flex-shrink-0 group-hover:bg-barber-gold/20 transition-colors duration-300">
                                        {tip.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg font-bold mb-1 group-hover:text-barber-gold transition-colors duration-300">
                                            {tip.title}
                                        </h3>
                                        <p className="text-barber-text-muted text-sm leading-relaxed">{tip.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left: decorative quote block */}
                    <div className="order-1 lg:order-2 flex items-center justify-center">
                        <div className="relative max-w-sm">
                            <div className="absolute -top-6 -left-4 text-8xl font-serif text-barber-gold/15 select-none leading-none">„</div>
                            <div className="bg-barber-surface rounded-2xl p-10 border border-barber-border gold-glow">
                                <p className="font-serif text-2xl text-barber-text italic leading-relaxed mb-6">
                                    Wir entlassen keinen Kunden ohne ihm zu zeigen, wie er seinen Style zu Hause nachstylen kann.
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img src="/barber-1.png" alt="Max Keller" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-barber-gold font-semibold text-sm">Max Keller</p>
                                        <p className="text-barber-text-dim text-xs">Gründer, MAX Barber</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-4 text-8xl font-serif text-barber-gold/15 select-none leading-none rotate-180">„</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
