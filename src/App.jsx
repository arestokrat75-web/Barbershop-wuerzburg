import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promise from './components/Promise';
import Hygiene from './components/Hygiene';
import Pricing from './components/Pricing';
import Team from './components/Team';
import StylingSupport from './components/StylingSupport';
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
                    <Promise />
                </div>

                <div className="reveal">
                    <Hygiene />
                </div>

                <div className="reveal">
                    <Pricing />
                </div>

                <div className="reveal">
                    <Team />
                </div>

                <div className="reveal">
                    <StylingSupport />
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
