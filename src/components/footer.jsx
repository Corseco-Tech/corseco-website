'use client';

import React from 'react';
import { Box, Container, Grid, Stack, Group, Text, TextInput, Button, Divider, Badge, Anchor } from '@mantine/core';
import { IconBrandLinkedin, IconBrandTwitter, IconBrandFacebook, IconMail, IconPhone, IconMapPin, IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';

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

    return (
    <Box style={{ backgroundColor: '#0f172a', color: 'white' }}>
      {/* Main Footer Content */}
      <Container size="xl" py="4rem">
        <Grid gutter="xl">
          {/* Company Info */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg">
              <Group>
                <Image 
                  src="/logo/corsecologo.png" 
                  alt="Corseco Logo" 
                  width={180} 
                  height={80}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </Group>
              
              <Text size="lg" style={{ color: '#94a3b8', lineHeight: '1.6', maxWidth: '300px' }}>
                AI-powered trust passport for physical goods and trade. Delivering transparency, 
                quality verification, and forensic analysis for global commerce.
              </Text>
              
              <Group gap="md">
                <Badge size="lg" variant="light" color="blue">
                  Trust & Quality
                </Badge>
                <Badge size="lg" variant="light" color="green">
                  AI-Powered
                </Badge>
              </Group>
              
              {/* Contact Info */}
              <Stack gap="sm" mt="md">
                <Group gap="sm">
                  <IconMail size={18} color="#64748b" />
                  <Text size="sm" style={{ color: '#94a3b8' }}>
                    hello@corseco.tech
                  </Text>
                </Group>
                <Group gap="sm">
                  <IconPhone size={18} color="#64748b" />
                  <Text size="sm" style={{ color: '#94a3b8' }}>
                    +1 (555) 123-4567
                  </Text>
                </Group>
                <Group gap="sm">
                  <IconMapPin size={18} color="#64748b" />
                  <Text size="sm" style={{ color: '#94a3b8' }}>
                    San Francisco, CA
                  </Text>
                </Group>
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Platform Features */}
          <Grid.Col span={{ base: 6, md: 2 }}>
            <Stack gap="md">
              <Text size="lg" fw={600} style={{ color: 'white' }}>
                Platform Features
              </Text>
              {footerLinks.solutions.map((link, index) => (
                <Anchor
                  key={index}
                  href={link.href}
                  size="sm"
                  style={{ 
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  className="footer-link"
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          {/* Industries */}
          <Grid.Col span={{ base: 6, md: 2 }}>
            <Stack gap="md">
              <Text size="lg" fw={600} style={{ color: 'white' }}>
                Industries
              </Text>
              {footerLinks.industries.map((link, index) => (
                <Anchor
                  key={index}
                  href={link.href}
                  size="sm"
                  style={{ 
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  className="footer-link"
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          {/* Company */}
          <Grid.Col span={{ base: 6, md: 2 }}>
            <Stack gap="md">
              <Text size="lg" fw={600} style={{ color: 'white' }}>
                Company
              </Text>
              {footerLinks.company.map((link, index) => (
                <Anchor
                  key={index}
                  href={link.href}
                  size="sm"
                  style={{ 
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  className="footer-link"
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          {/* Support */}
          <Grid.Col span={{ base: 6, md: 2 }}>
            <Stack gap="md">
              <Text size="lg" fw={600} style={{ color: 'white' }}>
                Support
              </Text>
              {footerLinks.support.map((link, index) => (
                <Anchor
                  key={index}
                  href={link.href}
                  size="sm"
                  style={{ 
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  className="footer-link"
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Newsletter Signup */}
        <Box
          style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: '#1e293b',
            borderRadius: '1rem',
            border: '1px solid #334155'
          }}
        >
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack gap="sm">
                <Text size="xl" fw={600} style={{ color: 'white' }}>
                  Stay Updated
                </Text>
                <Text size="sm" style={{ color: '#94a3b8' }}>
                  Get the latest updates on AI-powered quality verification and trade insights.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Group gap="sm">
                <TextInput
                  placeholder="Enter your email"
                  size="md"
                  style={{ flex: 1 }}
                  styles={{
                    input: {
                      backgroundColor: '#0f172a',
                      border: '1px solid #334155',
                      color: 'white',
                    }
                  }}
                />
                <Button
                  size="md"
                  rightSection={<IconArrowRight size={16} />}
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                    border: 'none'
                  }}
                >
                  Subscribe
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Box>
      </Container>

      <Divider color="#334155" />

      {/* Bottom Footer */}
      <Container size="xl" py="2rem">
        <Group justify="space-between" align="center" wrap="wrap">
          <Text size="sm" style={{ color: '#64748b' }}>
            © {currentYear} Corseco Technologies. All rights reserved.
          </Text>
          
          <Group gap="md">
            <Text size="sm" style={{ color: '#64748b' }}>
              Privacy Policy
            </Text>
            <Text size="sm" style={{ color: '#64748b' }}>
              Terms of Service
            </Text>
            <Text size="sm" style={{ color: '#64748b' }}>
              Cookie Policy
            </Text>
          </Group>
          
          <Group gap="md">
            <Anchor
              href="https://linkedin.com/company/corseco"
              style={{ color: '#64748b' }}
              className="social-link"
            >
              <IconBrandLinkedin size={20} />
            </Anchor>
            <Anchor
              href="https://twitter.com/corseco"
              style={{ color: '#64748b' }}
              className="social-link"
            >
              <IconBrandTwitter size={20} />
            </Anchor>
            <Anchor
              href="https://facebook.com/corseco"
              style={{ color: '#64748b' }}
              className="social-link"
            >
              <IconBrandFacebook size={20} />
            </Anchor>
          </Group>
        </Group>
      </Container>

    </Box>
  );
};

export default Footer;