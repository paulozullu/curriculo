import React from 'react';
import { Box, Grid, Card, CardContent, Typography, useTheme } from '@mui/material';
import { School } from '@mui/icons-material';
import { SectionTitle } from '../common';
import type { Education } from '../../types';

interface EducationListProps {
  education: Education[];
}

export const EducationList: React.FC<EducationListProps> = ({ education }) => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ mb: 6 }}>
      <SectionTitle title="Formação Acadêmica" icon={<School fontSize="large" />} />

      <Grid container spacing={3}>
        {education.map((edu) => (
          <Grid key={edu.id} size={{ xs: 12, md: 6, lg: 4 }}>
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
                    mb: 1,
                  }}
                >
                  {edu.institution}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                  }}
                >
                  {edu.degree && `${edu.degree} em `}{edu.field}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  📅 {edu.period}
                </Typography>

                {edu.status && (
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      color: theme.palette.warning.main,
                      fontStyle: 'italic',
                    }}
                  >
                    {edu.status}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
