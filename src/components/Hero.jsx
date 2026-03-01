export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image + dark overlay */}
            <div className="absolute inset-0">
                <img
                    src={`${import.meta.env.BASE_URL}hero-bg.png`}
                    alt="MAX Barber Premium Barbershop"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-barber-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>

            {/* Gold accent lines */}
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-barber-gold/20 to-transparent ml-8 hidden lg:block" />
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-barber-gold/20 to-transparent mr-8 hidden lg:block" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Tagline */}
                <div className="animate-fade-in mb-6">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.3em] uppercase text-barber-gold border border-barber-gold/30 rounded-full">
                        Premium Barbershop · Würzburg
                    </span>
                </div>

                {/* Headline */}
                <h1 className="animate-fade-in-up font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    <span className="text-barber-text">🚀 Premium Webseite – </span>
                    <br />
                    <span className="text-gradient-gold">Komplettsystem inkl. </span>
                    <br />
                    <span className="text-gradient-gold text-3xl sm:text-4xl">Termin-Kalender & WhatsApp-Synchronisiert.</span>
                </h1>

                {/* Subline */}
                <p className="animate-fade-in opacity-0 [animation-delay:0.4s] text-barber-text-muted text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                    Bieten Sie Ihren Kunden ein erstklassiges Erlebnis – nicht nur eine einfache Webseite.
                    Ich erstelle für Sie eine hochmoderne, voll funktionsfähige Landingpage für Ihre Nische.
                </p>

                {/* CTA */}
                <div className="animate-fade-in opacity-0 [animation-delay:0.6s] flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#buchen"
                        className="btn-shimmer px-10 py-4 text-barber-black font-bold text-base tracking-wide rounded shadow-lg"
                    >
                        TERMIN BUCHEN
                    </a>
                    <a
                        href="#preise"
                        className="group flex items-center gap-2 px-8 py-4 text-barber-text-muted hover:text-barber-gold transition-colors duration-300 text-base"
                    >
                        Preise ansehen
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                <div className="w-6 h-10 border-2 border-barber-gold/40 rounded-full flex items-start justify-center p-1.5">
                    <div className="w-1 h-2.5 bg-barber-gold rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
