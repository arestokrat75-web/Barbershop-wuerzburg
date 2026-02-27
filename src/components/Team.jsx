const team = [
    {
        name: 'Max Keller',
        role: 'Gründer & Master Barber',
        specialty: 'Klassische Schnitte & Fade-Techniken',
        bio: '12 Jahre Erfahrung. Max hat MAX Barber mit einer Mission gegründet: jedem Mann den Haarschnitt zu geben, den er sich wirklich wünscht.',
        img: '/barber-1.png',
    },
    {
        name: 'Leon Hartmann',
        role: 'Senior Barber',
        specialty: 'Moderne Styles & Bartdesign',
        bio: '8 Jahre Erfahrung. Leons kreative Bartformungen und Skin Fades sind in Würzburg legendär.',
        img: '/barber-2.png',
    },
    {
        name: 'Viktor Brandt',
        role: 'Grooming Spezialist',
        specialty: 'Hot-Towel Rasur & Gesichtsbehandlung',
        bio: '15 Jahre Erfahrung. Viktor verwandelt jeden Besuch in ein Premium-Wellness-Erlebnis.',
        img: '/barber-3.png',
    },
];

export default function Team() {
    return (
        <section id="team" className="relative py-24 md:py-32 bg-barber-surface">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                        Unser Team
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-6">
                        Deine Auszeit in der
                        <br />
                        <span className="text-gradient-gold">Würzburger Altstadt.</span>
                    </h2>
                    <p className="text-barber-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                        Bei uns bist du kein Kunde auf einem Fließband – du bist ein Gast, der persönlich betreut wird.
                        Drei Spezialisten, eine Philosophie: Perfektion.
                    </p>
                </div>

                {/* Team grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="group relative bg-barber-black rounded-xl overflow-hidden border border-barber-border hover:border-barber-gold/30 transition-all duration-500 hover:gold-glow"
                        >
                            {/* Image */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-barber-black via-barber-black/30 to-transparent" />

                                {/* Gold accent line at top */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>

                            {/* Info */}
                            <div className="p-6 -mt-8 relative z-10">
                                <span className="text-barber-gold text-xs font-semibold tracking-wider uppercase">
                                    {member.role}
                                </span>
                                <h3 className="font-serif text-2xl font-bold mt-1 mb-1 group-hover:text-barber-gold transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-barber-gold-dark text-sm font-medium mb-3 italic">
                                    {member.specialty}
                                </p>
                                <p className="text-barber-text-muted text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
