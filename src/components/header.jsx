'use client';
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Shield, Zap, Globe, Users, HelpCircle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const headerRef = useRef(null)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
   
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const navItems = [
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
  ]

  const DropdownMenu = ({ items, isOpen }) => {
    if (!isOpen) return null

    return (
      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            {item.icon && <item.icon size={18} />}
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
    </div>
  )
  }
  
  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image 
              src="/logo/corsecologo.png" 
              height={60} 
              width={120} 
              alt="Corseco.tech" 
              className="h-12 w-auto"
            />
      </div>
      
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
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
                    href={item.href}
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
        </Link>
                )}
                {item.dropdown && (
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
              onClick={() => router.push('/booking')}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book a Demo
        </button>
      </div>
      
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
  
              {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                  <div>
                    <button 
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                      >
                        {item.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                    </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
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
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                        </Link>
                    )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
        router.push('/booking')
                    closeMobileMenu()
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg"
                >
                  Book a Demo
                </button>
      </div>  
            </div>
          </div>
        )}
    </div>
    </header>
  )
}

export default Header
