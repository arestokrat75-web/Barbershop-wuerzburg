import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Vorteile from './components/Vorteile';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
    // Scroll reveal observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-barber-black text-barber-text">
            <Navbar />

            <main>
                <Hero />

                <div className="reveal">
                    <Highlights />
                </div>

                <div className="reveal">
                    <Vorteile />
                </div>

                <div className="reveal">
                    <Gallery />
                </div>

                <div className="reveal">
                    <Pricing />
                </div>

                <div className="reveal">
                    <Testimonials />
                </div>

                <div className="reveal">
                    <Booking />
                </div>
            </main>

            <Footer />
        </div>
    );
}
