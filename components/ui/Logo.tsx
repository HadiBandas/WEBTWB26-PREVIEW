import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'default' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto", variant = 'default' }) => {
    return (
        <img
            src="/images/logo-twb.png"
            alt="Taman Wisata Bougenville Logo"
            className={`${className} object-contain ${variant === 'white' ? 'brightness-0 invert' : ''} transition-all duration-300`}
            width={120} // Approximate width to prevent layout shift initially
            height={40}  // Approximate height
        />
    );
};
