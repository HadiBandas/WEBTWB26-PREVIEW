import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageSwitcherProps {
    currentLang: string;
    onLanguageChange: (lang: string) => void;
}

const LANGUAGES = [
    { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
];

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = LANGUAGES.find((lang) => lang.code === currentLang) || LANGUAGES[0];

    const handleSelect = (code: string) => {
        onLanguageChange(code);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
                <Globe size={18} className="text-gray-700" />
                <span className="text-sm font-medium hidden md:inline">{currentLanguage.flag}</span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu */}
                        <motion.div
                            className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 min-w-[200px]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {LANGUAGES.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleSelect(lang.code)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${currentLang === lang.code ? 'bg-gray-50 font-semibold' : ''
                                        }`}
                                >
                                    <span className="text-xl">{lang.flag}</span>
                                    <span className="text-sm">{lang.label}</span>
                                    {currentLang === lang.code && (
                                        <span className="ml-auto text-forest">✓</span>
                                    )}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
