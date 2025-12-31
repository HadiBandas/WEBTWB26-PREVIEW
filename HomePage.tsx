import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Users, MapPin } from 'lucide-react';

// Import real villas from constants
import { VILLAS } from './constants';

// Import new conversion-optimized components
import { VideoHero } from './components/ui/VideoHero';
import { StickyBookingBar } from './components/ui/StickyBookingBar';
import { TrustBadges } from './components/ui/TrustBadges';
import BookingForm from './components/BookingForm';

// Import SEO components
import { SEOHead } from './components/ui/SEOHead';
import { OrganizationSchema, LocalBusinessSchema } from './components/ui/StructuredData';
import { trackPageView } from './utils/analytics';
import { optimizeImage } from './utils/imageOptimizer';

export function HomePage() {
    const { t, i18n } = useTranslation();
    // Track current image index for each villa
    const [villaImageIndices, setVillaImageIndices] = useState<{ [key: string]: number }>({});

    // Track page view on mount
    useEffect(() => {
        trackPageView(window.location.pathname, 'Home | Taman Wisata Bougenville');
    }, []);

    const handleViewVilla = (villaId: string) => {
        window.dispatchEvent(new CustomEvent('navigate-villa', { detail: villaId }));
    };

    const handleNavigateToVillas = () => {
        window.dispatchEvent(new CustomEvent('navigate', { detail: 'villas' }));
    };

    const handleBookNow = () => {
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(t('home.whatsapp.inquiry'))}`, '_blank');
    };

    const handlePrevImage = (villaId: string, totalImages: number) => {
        setVillaImageIndices(prev => ({
            ...prev,
            [villaId]: ((prev[villaId] || 0) - 1 + totalImages) % totalImages
        }));
    };

    const handleNextImage = (villaId: string, totalImages: number) => {
        setVillaImageIndices(prev => ({
            ...prev,
            [villaId]: ((prev[villaId] || 0) + 1) % totalImages
        }));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* SEO Meta Tags */}
            <SEOHead
                title={t('home.seo.title')}
                description={t('home.seo.description')}
                keywords={t('home.seo.keywords')}
                ogImage="https://tamanwisatabougenville.com/images/og-home.jpg"
                ogUrl="https://tamanwisatabougenville.com"
            />

            {/* Structured Data for Organization & Local Business */}
            <OrganizationSchema />
            <LocalBusinessSchema />

            {/* Hero Section */}
            <VideoHero
                fallbackImage={optimizeImage("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070", 1920)}
                headline={t('home.hero.headline')}
                subheadline={t('home.hero.subheadline')}
                ctaText={t('home.hero.cta')}
                trustText={t('home.hero.trust')}
                scrollText={t('home.hero.scroll')}
                onPrimaryCTA={() => {
                    // Optional: Keep this empty if we rely on the widget
                }}
                onSecondaryCTA={() => {
                    // Smooth scroll to villas section
                    const villasSection = document.querySelector('#featured-villas');
                    if (villasSection) {
                        villasSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            />

            {/* Sticky Booking Bar - Secondary Persistence */}
            <StickyBookingBar lang={i18n.language.split('-')[0] as 'id' | 'en' | 'zh' | 'de'} />

            {/* Welcome Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8">
                        <MapPin size={14} className="text-gray-400" />
                        <span className="text-xs text-gray-500 uppercase tracking-widest">{t('home.location')}</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mb-6 tracking-wide">
                        {t('home.welcomeTitle')}
                    </h2>
                    <div className="w-16 h-px bg-gold/40 mx-auto mb-10"></div>
                    <p className="text-gray-600 leading-loose text-base md:text-lg max-w-2xl mx-auto font-light">
                        {t('home.welcomeDesc')}
                    </p>
                </div>
            </section>

            {/* Featured Villas */}
            <section id="featured-villas" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gold text-sm font-bold tracking-widest uppercase mb-2 block">{t('home.featuredVillasLabel')}</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-forest-dark">{t('home.featuredVillasTitle')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {VILLAS.slice(0, 3).map((villa, index) => {
                            const images = villa.image
                                ? [villa.image, 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1600', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600']
                                : ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600', 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1600', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600'];

                            const currentIndex = villaImageIndices[villa.id] || 0;

                            return (
                                <div key={villa.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={optimizeImage(images[currentIndex], 600)}
                                            alt={`${villa.name} - Image ${currentIndex + 1}`}
                                            width="600"
                                            height="400"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest-dark rounded-sm">
                                            {villa.category}
                                        </div>

                                        {/* Arrows */}
                                        <button
                                            aria-label="Previous image"
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={(e) => { e.stopPropagation(); handlePrevImage(villa.id, images.length); }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-900">
                                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <button
                                            aria-label="Next image"
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={(e) => { e.stopPropagation(); handleNextImage(villa.id, images.length); }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-900">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="font-serif text-2xl text-forest-dark mb-2">{villa.name}</h3>
                                        <p className="text-gray-500 text-sm mb-6 line-clamp-2 font-light">
                                            {typeof villa.description === 'string'
                                                ? villa.description
                                                : (villa.description[i18n.language.split('-')[0] as 'id' | 'en' | 'zh' | 'de'] || villa.description.id)}
                                        </p>

                                        <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <Users size={16} className="text-gold" />
                                                <span>{villa.capacity}</span>
                                            </div>
                                            {villa.area && (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-gold font-serif">m²</span>
                                                    <span>{villa.area} m²</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className="text-gold" />
                                                <span>{t('home.mountainView')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                        <div>
                                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">{t('home.fromPrice')}</span>
                                            <span className="text-forest-dark font-serif text-lg">
                                                Rp {villa.priceWeekday?.toLocaleString('id-ID')}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => handleViewVilla(villa.id)}
                                            className="px-6 py-2 bg-forest-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-forest transition-colors rounded-sm"
                                        >
                                            {t('home.viewDetails')}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-16">
                        <button
                            onClick={handleNavigateToVillas}
                            className="inline-block border border-forest-dark text-forest-dark px-10 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-forest-dark hover:text-white transition-all duration-300"
                        >
                            {t('home.viewAllVillas')}
                        </button>
                    </div>
                </div>
            </section >

            {/* Trust Badges */}
            < TrustBadges />



            {/* Experiences Grid */}
            < section className="py-20 md:py-28 bg-gray-50" >
                <div className="container mx-auto px-6 md:px-8 max-w-7xl">
                    <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900 text-center mb-10 md:mb-16">
                        {t('home.experiencesTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {[
                            { img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200', titleKey: 'experiences.nature', descKey: 'experiences.natureDesc' },
                            { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200', titleKey: 'experiences.picnic', descKey: 'experiences.picnicDesc' },
                            { img: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200', titleKey: 'experiences.waterfall', descKey: 'experiences.waterfallDesc' },
                            { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200', titleKey: 'experiences.stargazing', descKey: 'experiences.stargazingDesc' }
                        ].map((exp, i) => (
                            <div
                                key={i}
                                onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'facility' }))}
                                className="relative h-80 md:h-96 overflow-hidden rounded-sm cursor-pointer group"
                            >
                                <img
                                    src={optimizeImage(exp.img, 800)}
                                    alt={t(exp.titleKey)}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">{t(exp.titleKey)}</h3>
                                    <p className="text-white/80 text-sm tracking-wide font-light">{t(exp.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
}
