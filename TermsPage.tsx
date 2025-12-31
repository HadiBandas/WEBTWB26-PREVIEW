
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from './components/ui/PageHero';
import { SEOHead } from './components/ui/SEOHead';
import { trackPageView } from './utils/analytics';

export function TermsPage() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];

    useEffect(() => {
        trackPageView('/terms', 'Terms of Service | Taman Wisata Bougenville');
    }, []);

    const content = {
        id: (
            <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">1. Ketentuan Umum</h3>
                    <p>
                        Dengan mengakses dan menggunakan situs web serta layanan Taman Wisata Bougenville, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini.
                        Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, mohon untuk tidak menggunakan layanan kami.
                    </p>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">2. Reservasi dan Pembayaran</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Semua reservasi bergantung pada ketersediaan kamar/villa.</li>
                        <li>Pembayaran uang muka (down payment) mungkin diperlukan untuk mengamankan pesanan Anda.</li>
                        <li>Pelunasan pembayaran harus dilakukan sesuai dengan instruksi yang diberikan saat konfirmasi reservasi.</li>
                        <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya, namun tidak akan mempengaruhi reservasi yang telah dikonfirmasi.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">3. Pembatalan dan Pengembalian Dana</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Kebijakan pembatalan bervariasi tergantung pada jenis tarif dan promosi yang dipesan. Silakan merujuk pada konfirmasi pesanan Anda untuk detail spesifik.</li>
                        <li>Pembatalan yang dilakukan dalam waktu tertentu sebelum kedatangan mungkin dikenakan biaya pembatalan.</li>
                        <li>Pengembalian dana (jika berlaku) akan diproses sesuai dengan metode pembayaran asli dalam waktu yang wajar.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">4. Peraturan Tamu</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Tamu wajib menjaga ketertiban dan ketenangan demi kenyamanan tamu lain.</li>
                        <li>Dilarang melakukan kegiatan ilegal, membawa obat-obatan terlarang, atau senjata berbahaya ke area resort.</li>
                        <li>Kerusakan properti yang disebabkan oleh tamu akan dikenakan biaya penggantian.</li>
                        <li>Waktu Check-in adalah 14:00 WIB dan Check-out adalah 12:00 WIB, kecuali disepakati lain.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">5. Tanggung Jawab</h3>
                    <p>
                        Taman Wisata Bougenville tidak bertanggung jawab atas kehilangan atau kerusakan barang berharga milik tamu yang tidak dititipkan di kotak deposit keamanan (jika tersedia)
                        atau kelalaian pribadi tamu. Kami juga tidak bertanggung jawab atas cedera yang disebabkan oleh kelalaian tamu atau pelanggaran peraturan keselamatan resort.
                    </p>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">6. Hukum yang Mengatur</h3>
                    <p>
                        Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan di yurisdiksi pengadilan Indonesia.
                    </p>
                </section>
            </div>
        ),
        en: (
            <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">1. General Terms</h3>
                    <p>
                        By accessing and using the Taman Wisata Bougenville website and services, you agree to be bound by these Terms and Conditions.
                        If you do not agree with any part of these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">2. Reservations and Payment</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>All reservations are subject to room/villa availability.</li>
                        <li>A down payment may be required to secure your booking.</li>
                        <li>Full payment must be settled according to the instructions provided at booking confirmation.</li>
                        <li>Prices are subject to change without prior notice, but will not affect confirmed reservations.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">3. Cancellation and Refunds</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Cancellation policies vary depending on the rate plan and promotion booked. Please refer to your booking confirmation for specific details.</li>
                        <li>Cancellations made within a certain period prior to arrival may incur a cancellation fee.</li>
                        <li>Refunds (if applicable) will be processed to the original payment method within a reasonable timeframe.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">4. Guest Rules</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Guests are required to maintain order and quiet for the comfort of other guests.</li>
                        <li>Illegal activities, carrying illegal drugs, or dangerous weapons are strictly prohibited on resort premises.</li>
                        <li>Property damage caused by guests will be subject to replacement costs.</li>
                        <li>Check-in time is 14:00 WIB and Check-out is 12:00 WIB, unless agreed otherwise.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">5. Liability</h3>
                    <p>
                        Taman Wisata Bougenville is not liable for loss or damage to guest valuables not stored in safety deposit boxes (if available)
                        or due to guest negligence. We are also not liable for injuries caused by guest negligence or violation of resort safety rules.
                    </p>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">6. Governing Law</h3>
                    <p>
                        These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising shall be resolved in the jurisdiction of Indonesian courts.
                    </p>
                </section>
            </div>
        )
    };

    // Fallback to English for other languages
    const displayContent = lang === 'id' ? content.id : content.en;

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={t('footer.termsOfService') + ' | Taman Wisata Bougenville'}
                description="Terms and Conditions of usage and stay at Taman Wisata Bougenville."
                canonical="https://tamanwisatabougenville.com/terms"
            />

            <PageHero
                title={t('footer.termsOfService')}
                subtitle={lang === 'id' ? 'Syarat dan Ketentuan layanan kami' : 'Terms and Conditions of our service'}
                backgroundImage="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070"
                overlay="dark"
            />

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-8 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-sm animate-fade-in-up">
                        {displayContent}
                    </div>
                </div>
            </section>
        </div>
    );
}
