/**
 * Google Analytics 4 Utility Functions
 * 
 * Setup:
 * 1. Add VITE_GA4_ID to .env.local
 * 2. Initialize GA4 in index.html
 * 3. Use these functions to track events
 */

// Type-safe event tracking
export interface AnalyticsEvent {
    action: string;
    category: string;
    label?: string;
    value?: number;
}

// Check if GA4 is loaded
const isGA4Loaded = (): boolean => {
    return typeof window !== 'undefined' && typeof (window as any).gtag === 'function';
};

/**
 * Track page view
 * Automatically called on route changes
 */
export const trackPageView = (url: string, title: string) => {
    if (!isGA4Loaded()) return;

    (window as any).gtag('event', 'page_view', {
        page_path: url,
        page_title: title,
    });
};

/**
 * Track custom event
 * 
 * Example:
 * trackEvent({
 *   action: 'click',
 *   category: 'booking',
 *   label: 'Forest House',
 *   value: 1
 * })
 */
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
    if (!isGA4Loaded()) return;

    (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};

/**
 * Track booking initiation
 */
export const trackBookingStart = (villaName: string) => {
    trackEvent({
        action: 'booking_start',
        category: 'engagement',
        label: villaName,
    });
};

/**
 * Track WhatsApp booking click
 */
export const trackWhatsAppBooking = (villaName: string) => {
    trackEvent({
        action: 'whatsapp_booking',
        category: 'conversion',
        label: villaName,
    });
};

/**
 * Track phone call click
 */
export const trackPhoneClick = () => {
    trackEvent({
        action: 'phone_click',
        category: 'engagement',
        label: 'Contact',
    });
};

/**
 * Track social media click
 */
export const trackSocialClick = (platform: string) => {
    trackEvent({
        action: 'social_click',
        category: 'engagement',
        label: platform,
    });
};

/**
 * Track villa view
 */
export const trackVillaView = (villaName: string) => {
    trackEvent({
        action: 'villa_view',
        category: 'engagement',
        label: villaName,
    });
};

/**
 * Track search/filter usage
 */
export const trackSearch = (searchTerm: string) => {
    trackEvent({
        action: 'search',
        category: 'engagement',
        label: searchTerm,
    });
};

/**
 * Track language change
 */
export const trackLanguageChange = (language: string) => {
    trackEvent({
        action: 'language_change',
        category: 'engagement',
        label: language,
    });
};

/**
 * Facebook Pixel tracking (optional)
 */
export const trackFBPixelPageView = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'PageView');
    }
};

export const trackFBPixelEvent = (eventName: string, data?: any) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', eventName, data);
    }
};
