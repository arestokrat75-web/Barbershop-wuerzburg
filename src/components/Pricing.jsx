const services = [
    {
        name: 'Klassischer Haarschnitt',
        desc: 'Waschen, Schneiden, Styling – alles inklusive.',
        price: '35',
        includes: ['Haarwäsche', 'Beratung', 'Schnitt', 'Styling'],
        popular: false,
    },
    {
        name: 'Haarschnitt & Bartpflege',
        desc: 'Dein Komplett-Paket: Schnitt + professionelle Bartformung.',
        price: '50',
        includes: ['Haarwäsche', 'Beratung', 'Schnitt', 'Bartformung', 'Hot-Towel', 'Styling'],
        popular: true,
    },
    {
        name: 'Bartpflege & Rasur',
        desc: 'Traditionelle Hot-Towel Rasur mit Premium-Produkten.',
        price: '25',
        includes: ['Bartwäsche', 'Hot-Towel', 'Bartformung', 'Bartöl-Pflege'],
        popular: false,
    },
    {
        name: 'Premium Grooming',
        desc: 'Das ultimative Erlebnis: Alles inklusive plus Gesichtsbehandlung.',
        price: '70',
        includes: ['Haarwäsche', 'Schnitt', 'Bartpflege', 'Hot-Towel Rasur', 'Gesichtsmaske', 'Styling'],
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="preise" className="relative py-24 md:py-32 bg-barber-black">
            <div className="section-divider mb-16" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                        Preisliste
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-6">
                        Ehrliches Handwerk zu
                        <br />
                        <span className="text-gradient-gold">transparenten Festpreisen.</span>
                    </h2>
                    <p className="text-barber-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                        Keine versteckten Kosten, keine Überraschungen an der Kasse.
                        Waschen und Styling sind bei uns <strong className="text-barber-text">immer inklusive</strong>.
                    </p>
                </div>

                {/* Price cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-xl p-6 border transition-all duration-500 hover:gold-glow flex flex-col ${s.popular
                                    ? 'bg-barber-surface-light border-barber-gold/40 gold-glow'
                                    : 'bg-barber-surface border-barber-border hover:border-barber-gold/30'
                                }`}
                        >
                            {/* Popular badge */}
                            {s.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="px-4 py-1 text-xs font-bold text-barber-black bg-gradient-gold rounded-full tracking-wider uppercase">
                                        Beliebt
                                    </span>
                                </div>
                            )}

                            {/* Name & Price */}
                            <h3 className="font-serif text-lg font-bold mb-1 group-hover:text-barber-gold transition-colors duration-300">
                                {s.name}
                            </h3>
                            <p className="text-barber-text-muted text-sm mb-5">{s.desc}</p>

                            <div className="mb-6">
                                <span className="text-4xl font-serif font-bold text-gradient-gold">€{s.price}</span>
                            </div>

                            {/* Includes */}
                            <ul className="space-y-2.5 mb-8 flex-1">
                                {s.includes.map((item, j) => (
                                    <li key={j} className="flex items-center gap-2.5 text-sm text-barber-text-muted">
                                        <svg className="w-4 h-4 text-barber-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#buchen"
                                className={`block text-center py-3 rounded font-semibold text-sm transition-all duration-300 ${s.popular
                                        ? 'bg-gradient-gold text-barber-black hover:shadow-lg hover:shadow-barber-gold/30 hover:-translate-y-0.5'
                                        : 'border border-barber-gold/30 text-barber-gold hover:bg-barber-gold/10'
                                    }`}
                            >
                                Jetzt buchen
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
