'use client';

import React from 'react';
import { Box, Container, Stack, Grid, Card, Title, Text, Group, Button, Badge } from '@mantine/core';
import { IconShield, IconTrendingUp, IconUsers, IconPlayerPlay, IconArrowRight } from '@tabler/icons-react';

const HeroSection = () => {
  const stats = [
    { value: '99%', label: 'Detection Accuracy', color: 'blue' },
    { value: '75%', label: 'Time Reduction', color: 'green' },
    { value: '500+', label: 'Companies Served', color: 'purple' },
  ];

  return (
    <Box
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container size="xl" style={{ width: '100%' }}>
        <Grid gutter="xl" align="center">
          {/* Left Column - Content */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="xl">
              <Badge size="lg" variant="light" color="blue">
                AI-Powered Quality Verification
              </Badge>
              
              <Title
                order={1}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: '#0f172a',
                  marginBottom: '1rem'
                }}
              >
                Trust Passport for{' '}
                <Text
                  component="span"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Global Trade
                </Text>
              </Title>
              
              <Text
                size="xl"
                style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  maxWidth: '500px'
                }}
              >
                Complete AI-powered platform with quality control, GPS verification, document authentication, 
                and certificate validation. All features integrated in one unified solution.
              </Text>
              
              <Group gap="md" wrap="wrap">
                <Button
                  size="lg"
                  rightSection={<IconArrowRight size={20} />}
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                    border: 'none',
                    padding: '1rem 2rem',
                    fontSize: '1.125rem',
                    fontWeight: '600'
                  }}
                  onClick={() => window.location.href = '/booking'}
                >
                  Book a Demo
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  leftSection={<IconPlayerPlay size={20} />}
                  style={{
                    borderColor: '#0ea5e9',
                    color: '#0ea5e9',
                    padding: '1rem 2rem',
                    fontSize: '1.125rem',
                    fontWeight: '600'
                  }}
                  onClick={() => window.open('https://www.youtube.com/embed/KSQMGyjN5DI', '_blank')}
                >
                  Watch Demo
                </Button>
              </Group>
              
              {/* Stats */}
              <Group gap="xl" mt="2rem">
                {stats.map((stat, index) => (
                  <Box key={index} style={{ textAlign: 'center' }}>
                    <Text 
                      size="2rem" 
                      fw={700} 
                      c={stat.color}
                      style={{ lineHeight: '1' }}
                    >
                      {stat.value}
                    </Text>
                    <Text size="sm" c="dimmed" fw={500}>
                      {stat.label}
                    </Text>
                  </Box>
                ))}
              </Group>
            </Stack>
          </Grid.Col>

          {/* Right Column - Visual Cards */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="md">
              {/* Main Feature Card */}
              <Card
                p="xl"
                radius="xl"
                shadow="lg"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="feature-card"
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
                      <IconShield size={24} color="var(--mantine-color-blue-6)" />
                    </Box>
                    <Box>
                      <Text fw={600} size="lg" style={{ color: '#1e293b' }}>
                        Unified Platform
                      </Text>
                      <Text size="sm" c="dimmed">
                        All features integrated
                      </Text>
                    </Box>
                  </Group>
                  
                  <Text size="sm" style={{ color: '#64748b', lineHeight: '1.5' }}>
                    Complete AI-powered platform with quality control, GPS verification, 
                    document authentication, and certificate validation in one solution.
                  </Text>
                  
                  <Group justify="space-between" mt="md">
                    <Badge size="sm" variant="light" color="green">
                      Live Processing
                    </Badge>
                    <Text size="xs" c="dimmed">
                      Updated 2 min ago
                    </Text>
                  </Group>
                </Stack>
              </Card>

              {/* Secondary Cards */}
              <Grid gutter="md">
                <Grid.Col span={6}>
                  <Card
                    p="lg"
                    radius="lg"
                    shadow="sm"
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      height: '100%'
                    }}
                    className="secondary-card"
                  >
                    <Stack gap="sm">
                      <Group>
                        <Box
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            backgroundColor: 'var(--mantine-color-green-0)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <IconTrendingUp size={20} color="var(--mantine-color-green-6)" />
                        </Box>
                        <Text fw={600} size="md" style={{ color: '#1e293b' }}>
                          GPS Verification
                        </Text>
                      </Group>
                      <Text size="xs" c="dimmed">
                        Location proof
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
                
                <Grid.Col span={6}>
                  <Card
                    p="lg"
                    radius="lg"
                    shadow="sm"
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      height: '100%'
                    }}
                    className="secondary-card"
                  >
                    <Stack gap="sm">
                      <Group>
                        <Box
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            backgroundColor: 'var(--mantine-color-purple-0)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <IconUsers size={20} color="var(--mantine-color-purple-6)" />
                        </Box>
                        <Text fw={600} size="md" style={{ color: '#1e293b' }}>
                          Document Auth
                        </Text>
                      </Group>
                      <Text size="xs" c="dimmed">
                        Certificate validation
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
              </Grid>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

    </Box>
  );
};

export default HeroSection;