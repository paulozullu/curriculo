import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Link, useTheme } from '@mui/material';
import { Folder, OpenInNew } from '@mui/icons-material';
import { SectionTitle, SkillChips } from '../common';
import { useLanguage, translations } from '../../i18n';
import type { Project } from '../../types';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box component="section" sx={{ mb: 6 }}>
      <SectionTitle title={t.projects} icon={<Folder fontSize="large" />} />

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid key={project.id} size={{ xs: 12, md: 6 }}>
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
                  {project.name}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    📅 {project.period}
                  </Typography>
                  {project.association && (
                    <Typography variant="body2" color="text.secondary">
                      🏢 {project.association}
                    </Typography>
                  )}
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, textAlign: 'justify' }}
                >
                  {project.description}
                </Typography>

                {project.urls && project.urls.length > 0 && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 2 }}>
                    {project.urls.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          fontSize: '0.85rem',
                          textDecoration: 'none',
                          color: theme.palette.primary.main,
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        <OpenInNew sx={{ fontSize: '1rem' }} />
                        {link.label}
                      </Link>
                    ))}
                  </Box>
                )}

                {project.skills.length > 0 && (
                  <SkillChips skills={project.skills} />
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
