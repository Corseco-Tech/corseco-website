'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Shield, Zap, Globe, Users, HelpCircle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './logo';

interface NavItem {
    name: string;
    href?: string;
    dropdown?: boolean;
    items?: NavItem[];
    icon?: React.ComponentType<{ size: number }>;
}

interface DropdownMenuProps {
    items: NavItem[];
    isOpen: boolean;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
   
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (dropdown: string): void => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = (): void => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems: NavItem[] = [
    {
      name: 'Platform Features',
      dropdown: true,
      items: [
        { name: 'AI Quality Control', href: '/forensic-analysis', icon: Shield },
        { name: 'Certificate Validation', href: '/certificate-check', icon: Zap },
        { name: 'Trust Passport', href: '/trust-passport', icon: Globe },
        { name: 'GPS Location Verification', href: '/location-proof', icon: Users },
        { name: 'Custom Integrations', href: '/custom-integrations', icon: Shield },
        { name: 'Trade Intelligence AI', href: '/mettrade-ai', icon: Zap },
        { name: 'Shelf IQ', href: '/shelf-iq', icon: Globe },
      ]
    },
    {
      name: 'Industries',
      dropdown: true,
      items: [
        { name: 'Scrap & Metals', href: '/scrapandmetals' },
        { name: 'Furniture', href: '/furniture' },
        { name: 'Construction', href: '/construction' },
        { name: 'Retail', href: '/retail' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contactus' },
    { name: 'Help Center', href: '/helpcenter' },
  ];

  const handleDemoClick = (): void => {
    router.push('/booking');
    closeMobileMenu();
  };

  const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, isOpen }) => {
    if (!isOpen) return null;

    return (
      <div className="absolute top-full left-0 mt-2 w-64 rounded-xl shadow-lg py-2 z-50" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href || '#'}
            className="flex items-center gap-3 px-4 py-3 transition-colors duration-200 hover:bg-muted"
            style={{ color: 'var(--foreground)' }}
            onClick={closeMobileMenu}
          >
            {item.icon && <item.icon size={18} />}
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    );
  };
  
  return (
    <header 
      ref={headerRef}
      className={`header-container ${isScrolled ? 'header-scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />
      
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-1 px-3 py-2 transition-colors duration-200 font-medium"
                    style={{ color: 'var(--white)' }}
                  >
                    {item.name}
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="px-3 py-2 transition-colors duration-200 font-medium"
                    style={{ color: 'var(--white)' }}
                  >
                    {item.name}
                  </Link>
                )}
                {item.dropdown && item.items && (
                  <DropdownMenu 
                    items={item.items} 
                    isOpen={activeDropdown === item.name} 
                  />
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleDemoClick}
              className="cta-button"
            >
              Book a Demo
            </button>
          </div>
      
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ color: 'var(--white)' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
  
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 shadow-lg border-t" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                  <div>
                    <button 
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors duration-200 font-medium"
                        style={{ color: 'var(--white)' }}
                      >
                        {item.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                    </button>
                      {activeDropdown === item.name && item.items && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href || '#'}
                              className="flex items-center gap-3 px-3 py-2 transition-colors duration-200"
                              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                              onClick={closeMobileMenu}
                            >
                              {subItem.icon && <subItem.icon size={16} />}
                              {subItem.name}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="block px-3 py-2 transition-colors duration-200 font-medium"
                      style={{ color: 'var(--white)' }}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                    )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t mobile-cta-border">
                <button
                  onClick={handleDemoClick}
                  className="w-full cta-button mobile-cta-button"
                >
                  Book a Demo
                </button>
              </div>  
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
