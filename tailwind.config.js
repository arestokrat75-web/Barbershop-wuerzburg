/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'barber-black': '#0A0A0A',
                'barber-surface': '#141414',
                'barber-surface-light': '#1A1A1A',
                'barber-gold': '#C8A55C',
                'barber-gold-light': '#E0BE7A',
                'barber-gold-dark': '#9E7E3A',
                'barber-border': '#1F1F1F',
                'barber-text': '#FFFFFF',
                'barber-text-muted': '#9CA3AF',
                'barber-text-dim': '#6B7280',
            },
            fontFamily: {
                'serif': ['Playfair Display', 'Georgia', 'serif'],
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in-delay': 'fadeIn 0.8s ease-out 0.3s forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'pulse-gold': 'pulseGold 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                pulseGold: {
                    '0%, 100%': { boxShadow: '0 0 15px rgba(200, 165, 92, 0.3)' },
                    '50%': { boxShadow: '0 0 30px rgba(200, 165, 92, 0.6)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
    plugins: [],
}
