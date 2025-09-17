'use client';

import React from 'react';
import { Box, Container, Stack, Grid, Card, Title, Text, Group, Badge, Button, List, ThemeIcon } from '@mantine/core';
import { IconShield, IconEye, IconFileCheck, IconClock, IconAlertTriangle, IconCheck, IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';

interface Feature {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  title: string;
  description: string;
  color: string;
}

const ForensicAnalysis: React.FC = () => {
  const features: Feature[] = [
    {
      icon: IconEye,
      title: "Altered Images Detection",
      description: "Detects Photoshop edits, clones, cut/paste operations with 99% accuracy",
      color: "blue"
    },
    {
      icon: IconFileCheck,
      title: "Metadata Analysis",
      description: "Identifies inconsistent GPS, timestamps, and filename metadata",
      color: "green"
    },
    {
      icon: IconAlertTriangle,
      title: "Recycled Photo Detection",
      description: "Spots resubmitted or recycled photos from past shipments",
      color: "orange"
    },
    {
      icon: IconShield,
      title: "Physical Tampering",
      description: "Detects signs of physical tampering on packaging or products",
      color: "red"
    }
  ];

  const benefits: string[] = [
    "99% accuracy in fraud detection",
    "Real-time analysis and reporting",
    "Comprehensive metadata verification",
    "AI-powered image forensics",
    "Instant tampering alerts",
    "Audit trail for compliance"
  ];

    return (
    <Box>
      {/* Hero Section */}
      <Box style={{ paddingTop: '6rem', paddingBottom: '4rem', backgroundColor: 'var(--corseco-light-bg)' }}>
        <Container size="xl">
          <Stack gap="xl" align="center">
            <Badge size="lg" variant="light" color="red" style={{ marginBottom: '1rem' }}>
              AI-Powered Forensics
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
              Forensic Analysis
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
              Corseco&apos;s forensic AI analyzes photos and files for signs of manipulation, 
              fraud, or tampering—offering you full transparency on what&apos;s real and what&apos;s not.
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
                src="/assets/forensic-analysis.png"
                alt="Forensic Analysis"
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
                  Our forensic analysis provides comprehensive fraud detection with 
                  industry-leading accuracy and real-time processing.
                </Text>

                <List
                  spacing="md"
                  size="lg"
                  icon={
                    <ThemeIcon color="green" size={24} radius="xl">
                      <IconCheck size={16} />
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
                        backgroundColor: 'var(--mantine-color-red-0)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconShield size={24} color="var(--mantine-color-red-6)" />
                    </Box>
                    <Box>
                      <Text fw={600} size="lg" style={{ color: '#1e293b' }}>
                        Fraud Detection
                      </Text>
                      <Text size="sm" c="dimmed">
                        Real-time analysis
                      </Text>
                    </Box>
                  </Group>
                  
                  <Text size="sm" style={{ color: '#64748b', lineHeight: '1.5' }}>
                    Advanced AI algorithms detect even the most sophisticated image 
                    manipulations and metadata inconsistencies in real-time.
                  </Text>
                  
                  <Group justify="space-between" mt="md">
                    <Badge size="sm" variant="light" color="red">
                      Live Processing
                    </Badge>
                    <Text size="xs" c="dimmed">
                      Updated 2 min ago
                    </Text>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Target Audience Section */}
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
              Who Is It For?
            </Title>
            
            <Card
              p="xl"
              radius="xl"
              shadow="sm"
              style={{
                maxWidth: '800px',
                border: '1px solid var(--corseco-soft-grey)',
                backgroundColor: 'var(--corseco-light-bg)'
              }}
            >
              <Stack gap="md">
                <Group>
                  <ThemeIcon color="blue" size={40} radius="xl">
                    <IconEye size={20} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={600} size="lg" style={{ color: '#1e293b' }}>
                      High-Value Shipments
                    </Text>
                    <Text size="sm" c="dimmed">
                      Perfect for valuable goods and sensitive cargo
                    </Text>
                  </Box>
                </Group>
                
                <Text size="lg" style={{ color: '#64748b', lineHeight: '1.6' }}>
                  Anyone dealing with high-value shipments, frequent disputes, or supplier-side 
                  data you can&apos;t fully trust. Our forensic analysis ensures complete transparency 
                  and fraud protection for your most critical trade operations.
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
              Ready to Detect Fraud?
            </Title>
            <Text 
              size="xl" 
              style={{ 
                color: 'var(--corseco-soft-grey)',
                maxWidth: '600px'
              }}
            >
              Protect your shipments with AI-powered forensic analysis. 
              Get instant fraud detection and complete transparency.
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

export default ForensicAnalysis;
