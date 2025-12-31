import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from './components/ui/PageHero';
import { MapEmbed } from './components/ui/MapEmbed';
import { StickyBookingCTA } from './components/ui/StickyBookingCTA';
import { Car, Plane, Clock, MapPin, Navigation, ArrowRight } from 'lucide-react';
import { SEOHead } from './components/ui/SEOHead';
import { StructuredData } from './components/ui/StructuredData';
import { trackPageView } from './utils/analytics';

export function LocationPage() {
    const { t } = useTranslation();
    const handleBookingClick = () => {
        const booking = document.getElementById('booking');
        if (booking) {
            booking.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.open('https://wa.me/6281234567890?text=I would like to make a reservation', '_blank');
        }
    };

    useEffect(() => {
        trackPageView('/location', 'Location | Taman Wisata Bougenville');
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={t('location.title') + ' | Taman Wisata Bougenville'}
                description={t('location.subtitle')}
                canonical="https://tamanwisatabougenville.com/location"
            />
            <StructuredData
                type="LocalBusiness"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Place",
                    "name": "Taman Wisata Bougenville",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Jl. Gunung Puntang, Desa Ciwidey",
                        "addressLocality": "Bandung",
                        "addressRegion": "West Java",
                        "postalCode": "40228",
                        "addressCountry": "ID"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "-7.1167",
                        "longitude": "107.6333"
                    },
                    "url": "https://tamanwisatabougenville.com/location",
                    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
                }}
            />
            <PageHero
                title="Find Us"
                subtitle="Your mountain sanctuary awaits. Only 2 hours from Jakarta."
                backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
                overlay="dark"
                ctaPrimary={{
                    text: 'Get Directions',
                    onClick: () => {
                        window.open('https://maps.google.com/?q=Gunung+Puntang+Bandung', '_blank');
                    }
                }}
            />

            {/* Travel Times */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">Perjalanan Anda</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 tracking-wide">
                            Travel Times & Directions
                        </h2>
                        <div className="w-24 h-px bg-gold/60 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-24">
                        <div className="text-center p-10 bg-gray-50 rounded-sm hover:-translate-y-2 transition-transform duration-300 group animate-fade-in-up delay-100">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-md transition-all">
                                <Car size={32} className="text-gray-400 group-hover:text-forest transition-colors" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-4">From Jakarta</h3>
                            <p className="text-5xl font-serif font-light text-forest mb-4">2 Hours</p>
                            <p className="text-sm text-gray-500 tracking-wide uppercase">Via Tol Cipularang (120 km)</p>
                        </div>

                        <div className="text-center p-10 bg-gray-50 rounded-sm hover:-translate-y-2 transition-transform duration-300 group animate-fade-in-up delay-200">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-md transition-all">
                                <Plane size={32} className="text-gray-400 group-hover:text-forest transition-colors" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-4">From Bandung Airport</h3>
                            <p className="text-5xl font-serif font-light text-forest mb-4">45 Mins</p>
                            <p className="text-sm text-gray-500 tracking-wide uppercase">Husein Sastranegara (25 km)</p>
                        </div>

                        <div className="text-center p-10 bg-gray-50 rounded-sm hover:-translate-y-2 transition-transform duration-300 group animate-fade-in-up delay-300">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-md transition-all">
                                <MapPin size={32} className="text-gray-400 group-hover:text-forest transition-colors" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-4">From Bandung City</h3>
                            <p className="text-5xl font-serif font-light text-forest mb-4">30 Mins</p>
                            <p className="text-sm text-gray-500 tracking-wide uppercase">Via Jl. Soreang (18 km)</p>
                        </div>
                    </div>

                    {/* Detailed Directions */}
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in-up delay-400">
                        <div className="space-y-12">
                            <div className="relative pl-8 border-l border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-forest border-4 border-white shadow-sm"></div>
                                <h4 className="font-serif text-2xl text-gray-900 mb-6">From Jakarta</h4>
                                <ol className="space-y-4 text-gray-600 text-lg font-light leading-relaxed">
                                    <li className="flex gap-4">
                                        <span className="font-medium text-forest">01.</span>
                                        <span>Take Tol Cipularang heading towards Bandung</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-medium text-forest">02.</span>
                                        <span>Exit at Tol Kopo (Exit No. 126)</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-medium text-forest">03.</span>
                                        <span>Turn right onto Jl. Soekarno-Hatta</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-medium text-forest">04.</span>
                                        <span>Continue to Jl. Soreang & follow signs to Gunung Puntang</span>
                                    </li>
                                </ol>
                                <p className="text-sm text-gray-500 mt-6 font-medium tracking-wide flex items-center gap-2">
                                    <Clock size={16} />
                                    Estimated time: 2 hours | Distance: ±120 km
                                </p>
                            </div>

                            <div className="relative pl-8 border-l border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-forest border-4 border-white shadow-sm"></div>
                                <h4 className="font-serif text-2xl text-gray-900 mb-6">From Bandung City Center</h4>
                                <ol className="space-y-4 text-gray-600 text-lg font-light leading-relaxed">
                                    <li className="flex gap-4">
                                        <span className="font-medium text-forest">01.</span>
                                        <span>Head south on Jl. Soekarno-Hatta</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-medium text-forest">02.</span>
                                        <span>Turn onto Jl. Soreang & continue straight</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-medium text-forest">03.</span>
                                        <span>Follow mountain road signs to Ciwidey/Puntang</span>
                                    </li>
                                </ol>
                                <p className="text-sm text-gray-500 mt-6 font-medium tracking-wide flex items-center gap-2">
                                    <Clock size={16} />
                                    Estimated time: 30-40 minutes | Distance: ±18 km
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-900 text-white p-10 md:p-12 rounded-sm self-start">
                            <h4 className="font-serif text-2xl mb-8 flex items-center gap-3">
                                <Navigation size={24} className="text-gold" />
                                {t('location.directions')}
                            </h4>
                            <ul className="space-y-6 text-white/80 text-base font-light leading-relaxed">
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0"></span>
                                    <span>Road to resort is paved but includes mountain curves—drive carefully</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0"></span>
                                    <span>GPS coordinates: -7.1167, 107.6333 (most accurate)</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0"></span>
                                    <span>Best navigation apps: Google Maps or Waze</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0"></span>
                                    <span>Mobile signal: Strong 4G coverage (all major providers)</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0"></span>
                                    <span>Free parking available for all guests</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="py-24 md:py-32 bg-gray-50">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">Peta Lokasi</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 tracking-wide">
                            Our Location
                        </h2>
                        <div className="w-24 h-px bg-gold/60 mx-auto"></div>
                    </div>

                    <div className="max-w-6xl mx-auto shadow-2xl rounded-sm overflow-hidden border-4 border-white animate-fade-in-up delay-100">
                        <div className="h-[600px] w-full">
                            <MapEmbed
                                address="Jl. Gunung Puntang, Desa Ciwidey, Kab. Bandung, Jawa Barat 40228, Indonesia"
                                googleMapsUrl="https://maps.google.com/?q=Gunung+Puntang+Bandung"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Attractions */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">Wisata Sekitar</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 tracking-wide">
                            Nearby Attractions
                        </h2>
                        <div className="w-24 h-px bg-gold/60 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-7xl mx-auto">
                        <div className="group cursor-pointer animate-fade-in-up delay-100">
                            <div className="overflow-hidden rounded-sm mb-6 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800"
                                    alt="Kawah Putih"
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="font-serif text-2xl text-gray-900 mb-2 group-hover:text-forest transition-colors">Kawah Putih</h4>
                            <p className="text-xs text-forest font-medium uppercase tracking-[0.2em] mb-4">20 mins drive | 12 km</p>
                            <p className="text-gray-600 text-base font-light leading-relaxed">
                                Iconic white crater lake with stunning turquoise waters. Perfect for photography and nature walks.
                            </p>
                        </div>

                        <div className="group cursor-pointer animate-fade-in-up delay-200">
                            <div className="overflow-hidden rounded-sm mb-6 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
                                    alt="Ranca Upas"
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="font-serif text-2xl text-gray-900 mb-2 group-hover:text-forest transition-colors">Ranca Upas</h4>
                            <p className="text-xs text-forest font-medium uppercase tracking-[0.2em] mb-4">15 mins drive | 10 km</p>
                            <p className="text-gray-600 text-base font-light leading-relaxed">
                                Deer conservation area and camping ground. Great for family activities and interacting with nature.
                            </p>
                        </div>

                        <div className="group cursor-pointer animate-fade-in-up delay-300">
                            <div className="overflow-hidden rounded-sm mb-6 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"
                                    alt="Situ Patenggang"
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="font-serif text-2xl text-gray-900 mb-2 group-hover:text-forest transition-colors">Situ Patenggang</h4>
                            <p className="text-xs text-forest font-medium uppercase tracking-[0.2em] mb-4">25 mins drive | 15 km</p>
                            <p className="text-gray-600 text-base font-light leading-relaxed">
                                Beautiful mountain lake surrounded by tea plantations, offering boat rentals and local strawberry farms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <StickyBookingCTA onBookClick={handleBookingClick} />
        </div>
    );
}
