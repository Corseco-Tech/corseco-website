'use client';

import React from 'react';
import { Box, Container, Stack, Grid, Card, Title, Text, Group, Badge, Avatar, Divider } from '@mantine/core';
import { IconUsers, IconMapPin, IconBuilding, IconAward, IconQuote } from '@tabler/icons-react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface BoardAdvisor {
  id: number;
  name: string;
  designation: string;
  image: string;
}

const data: TeamMember[] = [
  {
    id: 1,
    name: "Sachin Dubeydi",
    designation: "CFO",
    image: "/images/sachin.png"
  },
  {
    id: 3,
    name: "Jorlin Rafarero",
    designation: "Partner, Canada",
    image: "/images/jorlin-rafaero.jpg"
  },
  {
    id: 4,
    name: "Kayode Bamidele",
    designation: "Product Designer",
    image: "/images/kayode.png"
  },
];

const boardofadvisors: BoardAdvisor[] = [
  {
    id: 1,
    name: "Spondon Dey",
    designation: "Chief Executive Officer of AT&T Innovation Network, AT&T",
    image: "/images/spandan.png"
  },
  {
    id: 2,
    name: "Jitendra Srivastava",
    designation: "Bluewaterworks",
    image: "/images/jitendra.jpg"
  },
  {
    id: 4,
    name: "Adarsh Jain",
    designation: "CEO, Proact AI",
    image: "/images/adarsh.png"
  },
  {
    id: 5,
    name: "Kumar Ranagarajan",
    designation: "CEO, Slang Labs",
    image: "/images/kumar.png"
  },
  {
    id: 6,
    name: "Siddhartha Chauahan",
    designation: "Calsys India Pvt. Ltd.",
    image: "/images/siddartha.jpeg"
  },
  {
    id: 7,
    name: "Aditya Pratap Singh",
    designation: "Barclays",
    image: "/images/aditya.jpeg"
  },
  {
    id: 8,
    name: "AI Venture Lab",
    designation: "INSEAD x AI Venture Lab",
    image: "/images/AI_VENTURE_LAB.png"
  }
];

const AboutUs: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        style={{
          backgroundImage: "url('/assets/about-us-image.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '500px',
          borderRadius: '40px',
          marginTop: '5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)',
            display: 'flex',
            alignItems: 'center',
            padding: '4rem'
          }}
        >
          <Container size="xl">
            <Stack gap="lg">
              <Title
                order={1}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: '800',
                  color: 'white',
                  lineHeight: '1.1'
                }}
              >
                About us
              </Title>
              <Text
                size="xl"
                style={{
                  color: 'white',
                  maxWidth: '66%',
                  lineHeight: '1.5',
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)'
                }}
              >
                AI-driven QC for global shipments, Instantly verify goods, documents and locations - no delays, no uncertainty.
              </Text>
            </Stack>
          </Container>
        </Box>
      </Box>

      {/* Mission Statement */}
      <Container size="xl" py="4rem">
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
            Precision. Trust. Verified.
          </Title>
          <Text
            size="xl"
            style={{
              color: '#64748b',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: '1.6'
            }}
          >
            At Corseco Tech, we&apos;re redefining global shipment verification with the power of artificial intelligence. 
            Our mission is simple: eliminate guesswork from quality control and replace it with instant, automated proof. 
            In a world where speed, integrity, and traceability matter more than ever, Corseco Tech delivers AI-driven 
            solutions that ensure your shipments meet the highest standards—every time.
          </Text>
        </Stack>
      </Container>

      {/* Stats Section */}
      <Box style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
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
              By the numbers
            </Title>
            <Grid gutter="xl" style={{ width: '100%' }}>
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <Card p="xl" radius="xl" shadow="sm" style={{ textAlign: 'center', backgroundColor: 'white' }}>
                  <Stack gap="md" align="center">
                    <Box
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        backgroundColor: '#e0f2fe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconUsers size={28} color="#0284c7" />
                    </Box>
                    <Text size="2.5rem" fw={700} style={{ color: '#0284c7' }}>10,000+</Text>
                    <Text size="lg" style={{ color: '#64748b' }}>Customers</Text>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <Card p="xl" radius="xl" shadow="sm" style={{ textAlign: 'center', backgroundColor: 'white' }}>
                  <Stack gap="md" align="center">
                    <Box
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        backgroundColor: '#dcfce7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconMapPin size={28} color="#16a34a" />
                    </Box>
                    <Text size="2.5rem" fw={700} style={{ color: '#16a34a' }}>5</Text>
                    <Text size="lg" style={{ color: '#64748b' }}>Offices across the globe</Text>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <Card p="xl" radius="xl" shadow="sm" style={{ textAlign: 'center', backgroundColor: 'white' }}>
                  <Stack gap="md" align="center">
                    <Box
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        backgroundColor: '#f3e8ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconBuilding size={28} color="#9333ea" />
                    </Box>
                    <Text size="2.5rem" fw={700} style={{ color: '#9333ea' }}>100+</Text>
                    <Text size="lg" style={{ color: '#64748b' }}>Employees</Text>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Team Section */}
      <Container size="xl" py="4rem">
        <Stack gap="xl">
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
                  Meet the Innovators
                </Title>
                <Text
                  size="lg"
                  style={{
                    color: '#64748b',
                    lineHeight: '1.6'
                  }}
                >
                  Result-driven, customer-focused, analytical and articulate Senior Product/Project Manager with ~13 years 
                  of experience in Product & Program Management for product delivery on B2B and B2C Platform, Process Consulting 
                  Ai/ML computer vision, Specialist in Agile Methodology, Quality Management, Category Management and P&L Management.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Stack gap="md" align="center">
                <Card
                  p="lg"
                  radius="xl"
                  shadow="lg"
                  style={{
                    backgroundColor: 'white',
                    border: '4px solid #f1f5f9',
                    maxWidth: '400px'
                  }}
                >
                  <Image
                    src="/images/vivek.png"
                    alt="Vivek Singh"
                    width={400}
                    height={400}
                    style={{ borderRadius: '14px' }}
                  />
                </Card>
                <Stack gap="xs" align="center">
                  <Text size="xl" fw={600} style={{ color: '#1e293b' }}>
                    Vivek Singh
                  </Text>
                  <Text size="lg" style={{ color: '#64748b' }}>
                    CEO & Founder
                  </Text>
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>

          {/* Team Members */}
          <Title
            order={3}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '600',
              textAlign: 'center',
              color: '#1e293b',
              marginTop: '3rem'
            }}
          >
            Our Team
          </Title>
          <Grid gutter="xl">
            {data.map((member) => (
              <Grid.Col key={member.id} span={{ base: 12, sm: 6, lg: 4 }}>
                <Card
                  p="xl"
                  radius="xl"
                  shadow="sm"
                  style={{
                    height: '100%',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease'
                  }}
                  className="team-card"
                >
                  <Stack gap="md" align="center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      style={{ borderRadius: '14px' }}
                    />
                    <Stack gap="xs" align="center">
                      <Text size="xl" fw={600} style={{ color: '#1e293b' }}>
                        {member.name}
                      </Text>
                      <Text size="md" style={{ color: '#64748b' }}>
                        {member.designation}
                      </Text>
                    </Stack>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>

      {/* Board of Advisors */}
      <Box style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
        <Container size="xl">
          <Stack gap="xl">
            <Title
              order={2}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: '700',
                textAlign: 'center',
                color: '#1e293b'
              }}
            >
              Board of Advisors
            </Title>
     <Marquee speed={50} gradient={false} pauseOnHover={true}>
              <Group gap="lg" style={{ padding: '0 1rem' }}>
                {boardofadvisors.map((advisor) => (
                  <Card
                    key={advisor.id}
                    p="lg"
                    radius="xl"
                    shadow="sm"
                    style={{
                      width: '300px',
                      height: '400px',
                      border: '1px solid #e2e8f0',
                      backgroundColor: 'white',
                      transition: 'all 0.3s ease'
                    }}
                    className="advisor-card"
                  >
                    <Stack gap="md" style={{ height: '100%' }}>
                      <Box
                        style={{
                          height: '200px',
                          borderRadius: '14px',
                          overflow: 'hidden',
                          backgroundColor: '#f8fafc'
                        }}
                      >
                        <Image
                          src={advisor.image}
                          alt={advisor.name}
                          width={300}
                          height={200}
                          style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                          }}
                        />
                      </Box>
                      <Stack gap="xs" style={{ flex: 1 }}>
                        <Text size="lg" fw={600} style={{ color: '#1e293b' }}>
                          {advisor.name}
                        </Text>
                        <Text size="sm" style={{ color: '#64748b', lineHeight: '1.4' }}>
                          {advisor.designation}
                        </Text>
                      </Stack>
                    </Stack>
                  </Card>
                ))}
              </Group>
</Marquee>
          </Stack>
        </Container>
      </Box>

    </Box>
  );
};

export default AboutUs;
