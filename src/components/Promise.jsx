const steps = [
    {
        num: '01',
        title: 'Du erzählst',
        desc: 'Zeig uns Bilder, beschreibe deinen Wunsch – wir hören zu, bevor die Schere ansetzt.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Wir beraten',
        desc: '5 Minuten Vorab-Beratung inklusive: Übergangshöhe, Länge oben, Konturen – alles wird geklärt.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Wir liefern',
        desc: 'Erst wenn du zustimmst, starten wir. Das Ergebnis: Genau der Schnitt, den du dir vorgestellt hast.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function Promise() {
    return (
        <section id="versprechen" className="relative py-24 md:py-32 bg-barber-black">
            {/* Top divider */}
            <div className="section-divider mb-16" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                        Unser Versprechen
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-6">
                        Wir schneiden nicht „unser Ding",
                        <br />
                        <span className="text-gradient-gold">sondern hören dir genau zu.</span>
                    </h2>
                    <p className="text-barber-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                        Bei MAX beginnt kein Schnitt ohne eine persönliche Beratung. Dein Wunsch ist unser Auftrag – nicht umgekehrt.
                    </p>
                </div>

                {/* 3-Step Process */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div
                            key={step.num}
                            className="group relative bg-barber-surface rounded-xl p-8 border border-barber-border hover:border-barber-gold/40 transition-all duration-500 hover:gold-glow"
                        >
                            {/* Step number */}
                            <span className="absolute top-6 right-6 text-5xl font-serif font-bold text-barber-border group-hover:text-barber-gold/10 transition-colors duration-500">
                                {step.num}
                            </span>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-lg bg-barber-gold/10 flex items-center justify-center text-barber-gold mb-6 group-hover:bg-barber-gold/20 transition-colors duration-300">
                                {step.icon}
                            </div>

                            <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-barber-gold transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-barber-text-muted leading-relaxed text-sm">
                                {step.desc}
                            </p>

                            {/* Bottom gold accent line */}
                            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-barber-gold/0 to-transparent group-hover:via-barber-gold/40 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
