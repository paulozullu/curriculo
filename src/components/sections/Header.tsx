import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  Avatar,
  Stack,
  Link,
} from '@mui/material';
import {
  DarkMode,
  LightMode,
  LinkedIn,
  GitHub,
  LocationOn,
} from '@mui/icons-material';
import { useThemeContext } from '../../theme';
import type { PersonalInfo } from '../../types';
import headerBg from '../../assets/header-bg.jpg';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeContext();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <Box
      component="header"
      sx={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'rgba(13, 27, 42, 0.85)'
            : 'rgba(92, 156, 229, 0.75)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
          }}
        >
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
            aria-label="Alternar tema"
          >
            {mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Avatar
            sx={{
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              fontSize: { xs: '2.5rem', md: '3rem' },
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: '4px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontWeight: 600,
            }}
          >
            {getInitials(personalInfo.name)}
          </Avatar>

          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, flex: 1 }}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontSize: { xs: '2rem', md: '2.75rem' },
                mb: 1,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              {personalInfo.name}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                mb: 2,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              {personalInfo.title}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              alignItems={{ xs: 'center', sm: 'flex-start' }}
              sx={{ flexWrap: 'wrap' }}
            >
              {personalInfo.location && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LocationOn sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 20 }} />
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    {personalInfo.location}
                  </Typography>
                </Box>
              )}

              {personalInfo.linkedin && (
                <Link
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  <LinkedIn sx={{ fontSize: 20 }} />
                  <Typography variant="body2">LinkedIn</Typography>
                </Link>
              )}

              {personalInfo.github && (
                <Link
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  <GitHub sx={{ fontSize: 20 }} />
                  <Typography variant="body2">GitHub</Typography>
                </Link>
              )}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
