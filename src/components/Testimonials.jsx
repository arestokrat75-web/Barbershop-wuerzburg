const reviews = [
    {
        name: 'Lukas M.',
        service: 'Haarschnitt & Bartpflege',
        rating: 5,
        text: '„Endlich ein Barber, der zuerst fragt und dann schneidet. Max hat sich 10 Minuten Zeit genommen, um genau zu verstehen, was ich will. Ergebnis: Perfekt. Nie wieder woanders."',
        date: 'vor 2 Wochen',
    },
    {
        name: 'Tobias K.',
        service: 'Klassischer Haarschnitt',
        rating: 5,
        text: '„Die Hygiene hier ist auf einem anderen Level. Alles wird vor meinen Augen desinfiziert. Als jemand mit empfindlicher Haut ist das Gold wert. Dazu pünktlich auf die Minute – top!"',
        date: 'vor 1 Monat',
    },
    {
        name: 'Stefan R.',
        service: 'Premium Grooming',
        rating: 5,
        text: '„Keine versteckten Kosten, keine Überraschungen. Was auf der Karte steht, wird gezahlt. Die Hot-Towel Rasur ist das beste Erlebnis, das Würzburg zu bieten hat. Absolute Empfehlung."',
        date: 'vor 3 Wochen',
    },
];

function Stars({ count }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(count)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-barber-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="bewertungen" className="relative py-24 md:py-32 bg-barber-surface">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                        Kundenstimmen
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-6">
                        Was unsere Kunden
                        <br />
                        <span className="text-gradient-gold">in Würzburg sagen.</span>
                    </h2>
                    <p className="text-barber-text-muted text-lg max-w-2xl mx-auto">
                        Echte Bewertungen von echten Gästen – ungefiltert und ehrlich.
                    </p>
                </div>

                {/* Review cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <div
                            key={i}
                            className="group relative bg-barber-black rounded-xl p-8 border border-barber-border hover:border-barber-gold/30 transition-all duration-500 hover:gold-glow"
                        >
                            {/* Decorative quote */}
                            <span className="absolute top-4 right-6 text-6xl font-serif text-barber-gold/10 leading-none select-none group-hover:text-barber-gold/20 transition-colors duration-500">
                                "
                            </span>

                            {/* Stars */}
                            <Stars count={r.rating} />

                            {/* Text */}
                            <p className="mt-5 mb-6 text-barber-text text-sm leading-relaxed italic">
                                {r.text}
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-barber-text text-sm">{r.name}</p>
                                    <p className="text-barber-text-dim text-xs">{r.service}</p>
                                </div>
                                <span className="text-barber-text-dim text-xs">{r.date}</span>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-barber-gold/0 to-transparent group-hover:via-barber-gold/40 transition-all duration-500" />
                        </div>
                    ))}
                </div>

                {/* Trust indicator */}
                <div className="mt-12 flex items-center justify-center gap-4 text-barber-text-muted text-sm">
                    <div className="flex items-center gap-1">
                        <Stars count={5} />
                        <span className="ml-2 font-semibold text-barber-text">4.9</span>
                    </div>
                    <span>·</span>
                    <span>Durchschnitt aus 120+ Bewertungen</span>
                </div>
            </div>
        </section>
    );
}
