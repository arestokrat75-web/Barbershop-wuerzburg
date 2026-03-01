const galleryImages = [
    { id: 1, src: 'barber-1.png', title: 'Moderner Fade-Schnitt' },
    { id: 2, src: 'barber-2.png', title: 'Präziser Bartschnitt' },
    { id: 3, src: 'barber-3.png', title: 'Klassisches Styling' },
    { id: 4, src: 'https://images.unsplash.com/photo-1621605815841-28d645d5a23c?q=80&w=2070&auto=format&fit=crop', title: 'Premium Service' },
    { id: 5, src: 'https://images.unsplash.com/photo-1599351431202-1e0f01344451?q=80&w=2159&auto=format&fit=crop', title: 'Texturierter Look' },
    { id: 6, src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop', title: 'Vintage Barber Style' },
    { id: 7, src: 'https://images.unsplash.com/photo-1512690196162-7c97262c5735?q=80&w=2070&auto=format&fit=crop', title: 'Nassrasur-Meisterschaft' },
    { id: 8, src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop', title: 'Styling & Finish' },
    { id: 9, src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop', title: 'Detailarbeit' },
];

export default function Gallery() {
    return (
        <section id="galerie" className="py-24 bg-barber-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 reveal">
                    <span className="text-barber-gold text-sm font-semibold tracking-[0.25em] uppercase">
                        Portfolio
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4">
                        Unsere <span className="text-gradient-gold">Meisterwerke</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((img, index) => (
                        <div
                            key={img.id}
                            className="reveal group relative aspect-[4/5] overflow-hidden rounded-2xl border border-barber-border bg-barber-surface shadow-2xl transition-all duration-500 hover:border-barber-gold/50"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <img
                                src={img.src.startsWith('http') ? img.src : `${import.meta.env.BASE_URL}${img.src}`}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-barber-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <p className="text-barber-gold font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {img.title}
                                </p>
                                <div className="h-1 w-12 bg-barber-gold mt-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-barber-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
