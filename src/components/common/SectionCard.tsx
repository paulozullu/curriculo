import React from 'react';
import { Card, CardContent, Typography, Box, Chip, useTheme } from '@mui/material';

interface SectionCardProps {
  title?: string;
  subtitle?: string;
  period?: string;
  location?: string;
  description?: string | string[];
  skills?: string[];
  children?: React.ReactNode;
  elevation?: number;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  title,
  subtitle,
  period,
  location,
  description,
  skills = [],
  children,
  elevation = 0,
}) => {
  const theme = useTheme();

  const renderDescription = () => {
    if (!description) return null;

    if (Array.isArray(description)) {
      return (
        <Box component="ul" sx={{ pl: 2, my: 1 }}>
          {description.map((item, index) => (
            <Typography
              key={index}
              component="li"
              variant="body2"
              color="text.secondary"
              sx={{ mb: 0.5 }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      );
    }

    return (
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {description}
      </Typography>
    );
  };

  return (
    <Card
      elevation={elevation}
      sx={{
        mb: 2,
        backgroundColor: theme.palette.mode === 'dark'
          ? 'rgba(255, 255, 255, 0.03)'
          : 'rgba(92, 156, 229, 0.04)',
        border: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 8px 24px rgba(0, 0, 0, 0.3)'
            : '0 8px 24px rgba(92, 156, 229, 0.15)',
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {title && (
          <Typography
            variant="h5"
            component="h3"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 500,
            }}
          >
            {subtitle}
          </Typography>
        )}

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            mt: 0.5,
            mb: 1,
          }}
        >
          {period && (
            <Typography variant="body2" color="text.secondary">
              📅 {period}
            </Typography>
          )}
          {location && (
            <Typography variant="body2" color="text.secondary">
              📍 {location}
            </Typography>
          )}
        </Box>

        {renderDescription()}

        {children}

        {skills.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
            {skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                size="small"
                sx={{
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(92, 156, 229, 0.2)'
                    : 'rgba(92, 156, 229, 0.12)',
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(92, 156, 229, 0.3)'
                      : 'rgba(92, 156, 229, 0.2)',
                  },
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
