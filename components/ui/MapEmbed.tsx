import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export interface MapEmbedProps {
    latitude?: number;
    longitude?: number;
    address?: string;
    googleMapsUrl?: string;
    embedUrl?: string;
}

export function MapEmbed({
    latitude = -7.1167,
    longitude = 107.6333,
    address = 'Jl. Gn. Puntang, Bandung, West Java, Indonesia',
    googleMapsUrl = 'https://maps.google.com/?q=Gunung+Puntang+Bandung',
    embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.128003025725!2d107.59929007499817!3d-7.11116149289234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6894c112337e61%3A0x419a9e315767c74!2sTaman%20Wisata%20Bougenville!5e0!3m2!1sid!2sid!4v1764727296351!5m2!1sid!2sid'
}: MapEmbedProps) {

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Map Embed */}
            <div className="relative h-96 bg-gray-100">
                <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Taman Wisata Bougenville Location"
                    className="w-full h-full"
                />
            </div>

            {/* Address Info */}
            <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-forest mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600 leading-relaxed">{address}</p>
                    </div>
                </div>

                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-forest-dark text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-forest transition-colors group"
                >
                    <Navigation size={18} />
                    <span>Get Directions</span>
                </a>
            </div>
        </div>
    );
}
