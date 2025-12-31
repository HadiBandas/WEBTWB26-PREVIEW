
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from './components/ui/PageHero';
import { SEOHead } from './components/ui/SEOHead';
import { trackPageView } from './utils/analytics';

export function PrivacyPage() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];

    useEffect(() => {
        trackPageView('/privacy', 'Privacy Policy | Taman Wisata Bougenville');
    }, []);

    const content = {
        id: (
            <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">1. Pendahuluan</h3>
                    <p>
                        Selamat datang di Taman Wisata Bougenville. Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda.
                        Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda ketika Anda mengunjungi situs web kami atau menggunakan layanan kami.
                    </p>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h3>
                    <p className="mb-4">Kami dapat mengumpulkan informasi berikut:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, dan informasi identitas lainnya yang Anda berikan saat melakukan reservasi atau menghubungi kami.</li>
                        <li><strong>Informasi Reservasi:</strong> Tanggal menginap, preferensi kamar, dan permintaan khusus.</li>
                        <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, dan data penggunaan situs web (cookies) untuk meningkatkan pengalaman pengguna.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">3. Penggunaan Informasi</h3>
                    <p className="mb-4">Kami menggunakan informasi Anda untuk:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Memproses reservasi dan pembayaran Anda.</li>
                        <li>Menghubungi Anda terkait konfirmasi pesanan atau perubahan layanan.</li>
                        <li>Mengirimkan informasi promosi atau buletin (jika Anda berlangganan).</li>
                        <li>Meningkatkan kualitas layanan dan situs web kami.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">4. Perlindungan Data</h3>
                    <p>
                        Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda dari akses yang tidak sah,
                        penggunaan yang salah, kehilangan, atau kerusakan.
                    </p>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">5. Berbagi Informasi</h3>
                    <p>
                        Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya membagikan informasi jika diperlukan oleh hukum
                        atau untuk penyedia layanan pihak ketiga yang membantu operasional kami (misalnya, pemrosesan pembayaran), dengan kewajiban kerahasiaan yang ketat.
                    </p>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">6. Hubungi Kami</h3>
                    <p>
                        Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:<br />
                        Email: reservation@bougenville.com<br />
                        Telepon: +62 812 3456 7890
                    </p>
                </section>
            </div>
        ),
        en: (
            <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">1. Introduction</h3>
                    <p>
                        Welcome to Taman Wisata Bougenville. We value your privacy and are committed to protecting your personal information.
                        This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
                    </p>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">2. Information We Collect</h3>
                    <p className="mb-4">We may collect the following information:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and other identity information you provide when making a reservation or contacting us.</li>
                        <li><strong>Reservation Information:</strong> Dates of stay, room preferences, and special requests.</li>
                        <li><strong>Technical Information:</strong> IP address, browser type, and website usage data (cookies) to improve user experience.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">3. Use of Information</h3>
                    <p className="mb-4">We use your information to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Process your reservations and payments.</li>
                        <li>Contact you regarding booking confirmations or service changes.</li>
                        <li>Send promotional information or newsletters (if you opted in).</li>
                        <li>Improve the quality of our services and website.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">4. Data Protection</h3>
                    <p>
                        We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access,
                        misuse, loss, or damage.
                    </p>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">5. Information Sharing</h3>
                    <p>
                        We do not sell or rent your personal information to third parties. We only share information if required by law
                        or with third-party service providers who assist our operations (e.g., payment processing), under strict confidentiality obligations.
                    </p>
                </section>

                <section>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">6. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:<br />
                        Email: reservation@bougenville.com<br />
                        Phone: +62 812 3456 7890
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
                title={t('footer.privacyPolicy') + ' | Taman Wisata Bougenville'}
                description="Privacy Policy and Data Protection practices of Taman Wisata Bougenville."
                canonical="https://tamanwisatabougenville.com/privacy"
            />

            <PageHero
                title={t('footer.privacyPolicy')}
                subtitle={lang === 'id' ? 'Komitmen kami untuk melindungi data Anda' : 'Our commitment to protecting your data'}
                backgroundImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070"
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
