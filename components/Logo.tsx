import React from 'react';

interface LogoProps {
  className?: string;
  white?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", white = false, size = 'md' }) => {
  const wordmarkUrl = "https://firebasestorage.googleapis.com/v0/b/websitey-9f8e4.firebasestorage.app/o/Educator.svg?alt=media&token=423e9fc5-b827-4ff6-8778-51a7343890e2";
  
  // Adjusted for "smaller on mobile" but using full logo
  const heightClasses = {
    sm: "h-[14px] md:h-[18px]",
    md: "h-[20px] md:h-[26px]",
    lg: "h-[32px] md:h-[48px]"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={wordmarkUrl} 
        alt="educater." 
        className={`${heightClasses[size]} w-auto object-contain transition-all duration-300 ${white ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};

export default Logo;