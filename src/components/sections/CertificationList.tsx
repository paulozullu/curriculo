import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  Chip,
  Button,
} from '@mui/material';
import { VerifiedUser, ExpandMore, ExpandLess } from '@mui/icons-material';
import { SectionTitle, SkillChips } from '../common';
import type { Certification } from '../../types';

interface CertificationListProps {
  certifications: Certification[];
}

const INITIAL_DISPLAY_COUNT = 6;

export const CertificationList: React.FC<CertificationListProps> = ({ certifications }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const displayedCertifications = expanded
    ? certifications
    : certifications.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMore = certifications.length > INITIAL_DISPLAY_COUNT;

  return (
    <Box component="section" sx={{ mb: 6 }}>
      <SectionTitle title="Certificações" icon={<VerifiedUser fontSize="large" />} />

      <Grid container spacing={3}>
        {displayedCertifications.map((cert) => (
          <Grid key={cert.id} size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
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
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  {cert.name}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Chip
                    label={cert.issuer}
                    size="small"
                    sx={{
                      backgroundColor: theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.08)',
                      color: theme.palette.text.secondary,
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {cert.date}
                  </Typography>
                </Box>

                {cert.skills.length > 0 && (
                  <Box sx={{ mt: 1.5 }}>
                    <SkillChips skills={cert.skills} />
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {hasMore && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button
            onClick={() => setExpanded(!expanded)}
            endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
            sx={{
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark'
                  ? 'rgba(92, 156, 229, 0.1)'
                  : 'rgba(92, 156, 229, 0.08)',
              },
            }}
          >
            {expanded
              ? 'Mostrar menos'
              : `Ver mais ${certifications.length - INITIAL_DISPLAY_COUNT} certificações`}
          </Button>
        </Box>
      )}
    </Box>
  );
};
