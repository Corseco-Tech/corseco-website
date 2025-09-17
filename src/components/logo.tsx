'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface LogoProps {
    className?: string;
    onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  const router = useRouter();

  const handleClick = (): void => {
    if (onClick) {
      onClick();
    } else {
      router.push('/');
    }
  };

  return (
    <div 
      className={`flex items-center gap-1 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <Image 
        src="/logo/corseco.png" 
        height={60} 
        width={120} 
        alt="Corseco.tech" 
        className="h-12 w-auto"
      />
      <div className="flex flex-col space-y-0">
        <span className="text-white font-bold text-xl leading-none">CORSECO</span>
        <span className="text-white font-bold text-xs leading-none mt-0">TECH</span>
      </div>
    </div>
  );
};

export default Logo;
