import { useState, useEffect } from 'react';

const navLinks = [
    { href: '#hero', label: 'Start' },
    { href: '#highlights', label: 'Highlights' },
    { href: '#vorteile', label: 'Vorteile' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#preise', label: 'Preise' },
    { href: '#buchen', label: 'System-Demo' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'glass-dark border-b border-barber-border shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-2 group">
                        <span className="text-3xl font-serif font-bold tracking-wider text-gradient-gold">
                            MAX
                        </span>
                        <span className="text-xs font-sans uppercase tracking-[0.35em] text-barber-text-muted group-hover:text-barber-gold transition-colors duration-300">
                            Barber
                        </span>
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="relative text-sm font-medium text-barber-text-muted hover:text-barber-gold transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-barber-gold after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA desktop */}
                    <a
                        href="#buchen"
                        className="hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-semibold text-barber-black bg-gradient-gold rounded hover:shadow-lg hover:shadow-barber-gold/20 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Termin buchen
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
                        aria-label="Menü öffnen"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-barber-gold transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-barber-gold transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-barber-gold transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileOpen ? 'visible' : 'invisible'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setMobileOpen(false)}
                />
                {/* Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-72 bg-barber-surface border-l border-barber-border transition-transform duration-500 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col items-start pt-24 px-8 gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-lg font-medium text-barber-text-muted hover:text-barber-gold transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="w-full h-px bg-barber-border mt-2" />
                        <a
                            href="#buchen"
                            onClick={() => setMobileOpen(false)}
                            className="w-full text-center px-6 py-3 text-sm font-semibold text-barber-black bg-gradient-gold rounded hover:shadow-lg transition-all duration-300"
                        >
                            System-Demo
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
