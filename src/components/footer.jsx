'use client';

import React from 'react';
import { Box, Container, Grid, Stack, Group, Text, Divider, Badge, Anchor } from '@mantine/core';
import { IconBrandLinkedin, IconBrandTwitter, IconBrandFacebook, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { label: 'AI Quality Control', href: '/forensic-analysis' },
      { label: 'Certificate Validation', href: '/certificate-check' },
      { label: 'Trust Passport', href: '/trust-passport' },
      { label: 'GPS Location Verification', href: '/location-proof' },
      { label: 'Custom Integrations', href: '/custom-integrations' },
      { label: 'Trade Intelligence AI', href: '/mettrade-ai' },
      { label: 'Shelf IQ', href: '/shelf-iq' },
    ],
    industries: [
      { label: 'Scrap & Metals', href: '/scrapandmetals' },
      { label: 'Furniture', href: '/furniture' },
      { label: 'Construction', href: '/construction' },
      { label: 'Retail', href: '/retail' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contactus' },
    ],
    support: [
      { label: 'Help Center', href: '/helpcenter' },
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Status', href: '/status' },
    ],
  };

  const contactInfo = {
    email: 'hello@corseco.tech',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  };

  const socialLinks = [
    { href: 'https://linkedin.com/company/corseco', icon: IconBrandLinkedin },
    { href: 'https://twitter.com/corseco', icon: IconBrandTwitter },
    { href: 'https://facebook.com/corseco', icon: IconBrandFacebook },
  ];

  const FooterLink = ({ href, children }) => (
    <Anchor
      href={href}
      size="sm"
      className="footer-link"
    >
      {children}
    </Anchor>
  );

  const ContactItem = ({ icon: Icon, text }) => (
    <Group gap="sm">
      <Icon size={18} className="contact-icon" />
      <Text size="sm" className="contact-text">
        {text}
      </Text>
    </Group>
  );

  const SocialLink = ({ href, icon: Icon }) => (
    <Anchor href={href} className="social-link">
      <Icon size={20} />
    </Anchor>
  );

  return (
    <Box className="footer-container">
      <Container size="xl" py="3rem">
        <Grid gutter="xl">
          {/* Company Info */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg">
              <Group>
                <Logo className="footer-logo" />
              </Group>
                
                <Group gap="md">
                <Badge size="lg" variant="light" className="footer-badge">
                  Trust & Quality
                </Badge>
                <Badge size="lg" variant="light" className="footer-badge-secondary">
                  AI-Powered
                </Badge>
              </Group>
              
              <Stack gap="sm" mt="md">
                <ContactItem icon={IconMail} text={contactInfo.email} />
                <ContactItem icon={IconPhone} text={contactInfo.phone} />
                <ContactItem icon={IconMapPin} text={contactInfo.location} />
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Platform Features */}
          <Grid.Col span={{ base: 6, md: 2 }}>
            <Stack gap="md">
              <Text size="lg" fw={600} className="footer-section-title">
                Platform Features
              </Text>
              {footerLinks.solutions.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </Stack>
          </Grid.Col>

          {/* Industries */}
          <Grid.Col span={{ base: 6, md: 2 }}>
            <Stack gap="md">
              <Text size="lg" fw={600} className="footer-section-title">
                Industries
              </Text>
              {footerLinks.industries.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </Stack>
          </Grid.Col>

          {/* Company */}
          <Grid.Col span={{ base: 6, md: 2 }}>
            <Stack gap="md">
              <Text size="lg" fw={600} className="footer-section-title">
                Company
              </Text>
              {footerLinks.company.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </Stack>
          </Grid.Col>

          {/* Support */}
          <Grid.Col span={{ base: 6, md: 2 }}>
            <Stack gap="md">
              <Text size="lg" fw={600} className="footer-section-title">
                Support
              </Text>
              {footerLinks.support.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      <Divider className="footer-divider" />

      {/* Bottom Footer */}
      <Container size="xl" py="1.5rem">
        <Group justify="space-between" align="center" wrap="wrap">
          <Text size="sm" className="footer-copyright">
            © {currentYear} Corseco Technologies. All rights reserved.
          </Text>
          
          <Group gap="md">
            {socialLinks.map((social, index) => (
              <SocialLink key={index} href={social.href} icon={social.icon} />
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  );
};

export default Footer;