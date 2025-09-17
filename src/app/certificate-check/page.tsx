'use client';

import React from 'react';
import { Box, Container, Stack, Grid, Card, Title, Text, Group, Badge, Button, List, ThemeIcon } from '@mantine/core';
import { IconCertificate, IconShield, IconFileCheck, IconClock, IconDatabase, IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';

interface Feature {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  title: string;
  description: string;
  color: string;
}

const CertificateCheck: React.FC = () => {
  const features: Feature[] = [
    {
      icon: IconCertificate,
      title: "Certificate Verification",
      description: "Verifies authenticity of certificates like FSC, PEFC, CE, ISO",
      color: "blue"
    },
    {
      icon: IconDatabase,
      title: "Database Validation",
      description: "Checks against issuer databases or validation APIs",
      color: "green"
    },
    {
      icon: IconShield,
      title: "Fraud Detection",
      description: "Detects expired, doctored, or reused certificates",
      color: "red"
    },
    {
      icon: IconFileCheck,
      title: "Shipment Linking",
      description: "Links each certificate to its associated shipment",
      color: "purple"
    }
  ];

  const benefits: string[] = [
    "100% compliance verification",
    "Real-time certificate validation",
    "Automated fraud detection",
    "Global standards compliance",
    "Audit trail for documentation",
    "Instant verification results"
  ];

  const certificateTypes: string[] = [
    "FSC (Forest Stewardship Council)",
    "PEFC (Programme for the Endorsement of Forest Certification)",
    "CE (Conformité Européenne)",
    "ISO 9001/14001",
    "OHSAS 18001",
    "BSCI (Business Social Compliance Initiative)"
  ];

    return (
    <Box>
      {/* Hero Section */}
      <Box style={{ paddingTop: '6rem', paddingBottom: '4rem', backgroundColor: 'var(--corseco-light-bg)' }}>
        <Container size="xl">
          <Stack gap="xl" align="center">
            <Badge size="lg" variant="light" color="blue" style={{ marginBottom: '1rem' }}>
              Automated Verification
            </Badge>
            
            <Title
              order={1}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: '800',
                textAlign: 'center',
                color: 'var(--corseco-navy)',
                lineHeight: '1.1'
              }}
            >
              Certificate Check
            </Title>
            
            <Text
              size="xl"
              style={{
                textAlign: 'center',
                color: 'var(--corseco-slate)',
                maxWidth: '800px',
                lineHeight: '1.6'
              }}
            >
              Automatically validate certificates submitted by suppliers or manufacturers 
              to ensure they&apos;re real, unexpired, and compliant with global standards.
            </Text>

            <Box
              style={{
                width: '100%',
                maxWidth: '1000px',
                height: '460px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)'
              }}
            >
              <Image
                src="/assets/certificate-check.png"
                alt="Certificate Check"
                width={1000}
                height={460}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <Container size="xl">
          <Stack gap="xl">
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                textAlign: 'center',
                color: '#1e293b'
              }}
            >
              What It Does
            </Title>
            
            <Grid gutter="xl">
              {features.map((feature, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 3 }}>
                  <Card
                    p="xl"
                    radius="xl"
                    shadow="sm"
                    style={{
                      height: '100%',
                      border: '1px solid var(--corseco-soft-grey)',
                      transition: 'all 0.3s ease'
                    }}
                    className="feature-card"
                  >
                    <Stack gap="md" align="center" style={{ textAlign: 'center' }}>
                      <Box
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '16px',
                          backgroundColor: `var(--mantine-color-${feature.color}-0)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <feature.icon 
                          size={28} 
                          color={`var(--mantine-color-${feature.color}-6)`}
                        />
                      </Box>
                      
                      <Title order={4} style={{ color: '#1e293b', fontWeight: '600' }}>
                        {feature.title}
                      </Title>
                      
                      <Text size="sm" style={{ color: '#64748b', lineHeight: '1.6' }}>
                        {feature.description}
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box style={{ padding: '4rem 0', backgroundColor: 'var(--corseco-light-bg)' }}>
        <Container size="xl">
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Stack gap="lg">
                <Title
                  order={2}
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: '700',
                    color: '#1e293b'
                  }}
                >
                  Key Benefits
                </Title>
                
                <Text size="lg" style={{ color: '#64748b', lineHeight: '1.6' }}>
                  Our certificate verification ensures complete compliance with global 
                  standards and eliminates the risk of fraudulent documentation.
                </Text>

                <List
                  spacing="md"
                  size="lg"
                  icon={
                    <ThemeIcon color="green" size={24} radius="xl">
                      <IconShield size={16} />
                    </ThemeIcon>
                  }
                >
                  {benefits.map((benefit, index) => (
                    <List.Item key={index} style={{ color: '#64748b' }}>
                      {benefit}
                    </List.Item>
                  ))}
                </List>
              </Stack>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Card
                p="xl"
                radius="xl"
                shadow="lg"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0'
                }}
              >
                <Stack gap="md">
                  <Group>
                    <Box
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--mantine-color-blue-0)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconCertificate size={24} color="var(--mantine-color-blue-6)" />
                    </Box>
                    <Box>
                      <Text fw={600} size="lg" style={{ color: '#1e293b' }}>
                        Certificate Validation
                      </Text>
                      <Text size="sm" c="dimmed">
                        Real-time verification
                      </Text>
                    </Box>
                  </Group>
                  
                  <Text size="sm" style={{ color: '#64748b', lineHeight: '1.5' }}>
                    Advanced AI algorithms verify certificate authenticity against 
                    official databases and detect any signs of tampering or fraud.
                  </Text>
                  
                  <Group justify="space-between" mt="md">
                    <Badge size="sm" variant="light" color="blue">
                      Live Verification
                    </Badge>
                    <Text size="xs" c="dimmed">
                      Updated 1 min ago
                    </Text>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Supported Certificates */}
      <Box style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <Container size="xl">
          <Stack gap="xl" align="center">
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                textAlign: 'center',
                color: '#1e293b'
              }}
            >
              Supported Certificates
            </Title>
            
            <Grid gutter="md" style={{ width: '100%' }}>
              {certificateTypes.map((cert, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                  <Card
                    p="lg"
                    radius="lg"
                    shadow="sm"
                    style={{
                      border: '1px solid var(--corseco-soft-grey)',
                      backgroundColor: 'var(--corseco-light-bg)',
                      textAlign: 'center'
                    }}
                  >
                    <Group justify="center" gap="sm">
                      <IconCertificate size={20} color="var(--mantine-color-blue-6)" />
                      <Text fw={500} style={{ color: '#1e293b' }}>
                        {cert}
                      </Text>
                    </Group>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Target Audience Section */}
      <Box style={{ padding: '4rem 0', backgroundColor: 'var(--corseco-light-bg)' }}>
        <Container size="xl">
          <Stack gap="xl" align="center">
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                textAlign: 'center',
                color: '#1e293b'
              }}
            >
              Who Is It For?
            </Title>
            
            <Card
              p="xl"
              radius="xl"
              shadow="sm"
              style={{
                maxWidth: '800px',
                border: '1px solid var(--corseco-soft-grey)',
                backgroundColor: 'white'
              }}
            >
              <Stack gap="md">
                <Group>
                  <ThemeIcon color="blue" size={40} radius="xl">
                    <IconFileCheck size={20} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={600} size="lg" style={{ color: '#1e293b' }}>
                      Compliance Teams
                    </Text>
                    <Text size="sm" c="dimmed">
                      Perfect for sustainability and compliance verification
                    </Text>
                  </Box>
                </Group>
                
                <Text size="lg" style={{ color: '#64748b', lineHeight: '1.6' }}>
                  Brands, importers, and sustainability teams that require verified sourcing 
                  documentation. Our certificate verification ensures complete compliance 
                  with global standards and eliminates documentation fraud.
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        style={{ 
          background: 'linear-gradient(135deg, var(--corseco-navy) 0%, var(--corseco-slate) 100%)',
          padding: '4rem 0',
          color: 'white'
        }}
      >
        <Container size="xl">
          <Stack gap="xl" align="center" style={{ textAlign: 'center' }}>
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                color: 'white'
              }}
            >
              Ensure Certificate Compliance
            </Title>
            <Text 
              size="xl" 
              style={{ 
                color: 'var(--corseco-soft-grey)',
                maxWidth: '600px'
              }}
            >
              Automate certificate verification and eliminate compliance risks. 
              Get instant validation and fraud detection.
            </Text>
            
            <Group gap="md" mt="lg">
              <Button
                size="lg"
                rightSection={<IconArrowRight size={20} />}
                style={{
                  backgroundColor: 'var(--corseco-emerald)',
                  border: 'none',
                  padding: '1rem 2rem'
                }}
                onClick={() => window.location.href = '/booking'}
              >
                Book a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                style={{
                  borderColor: 'var(--corseco-slate)',
                  color: 'white',
                  padding: '1rem 2rem'
                }}
                onClick={() => window.location.href = '/contactus'}
              >
                Learn More
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default CertificateCheck;
