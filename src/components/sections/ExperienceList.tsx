import React from 'react';
import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';
import { Work } from '@mui/icons-material';
import { SectionTitle, SkillChips } from '../common';
import type { Experience } from '../../types';

interface ExperienceListProps {
  experiences: Experience[];
}

export const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  const theme = useTheme();

  const renderNestedRole = (role: Omit<Experience, 'company' | 'isNested' | 'nestedRoles'>) => (
    <Box
      key={role.id}
      sx={{
        pl: 3,
        py: 2,
        borderLeft: `2px solid ${theme.palette.primary.light}`,
        mb: 2,
        '&:last-child': { mb: 0 },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 600,
        }}
      >
        {role.role}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 0.5, mb: 1 }}>
        <Typography variant="body2" color="text.secondary">
          📅 {role.period} · {role.duration}
        </Typography>
        {role.location && (
          <Typography variant="body2" color="text.secondary">
            📍 {role.location}
          </Typography>
        )}
      </Box>

      {role.description.length > 0 && (
        <Box component="ul" sx={{ pl: 2, my: 1 }}>
          {role.description.map((item, index) => (
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
      )}

      {role.skills.length > 0 && (
        <Box sx={{ mt: 1.5 }}>
          <SkillChips skills={role.skills} />
        </Box>
      )}
    </Box>
  );

  const renderExperience = (experience: Experience) => (
    <Card
      key={experience.id}
      elevation={0}
      sx={{
        mb: 3,
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
          variant="h5"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 700,
            mb: experience.isNested ? 0.5 : 1,
          }}
        >
          {experience.company}
        </Typography>

        {!experience.isNested && experience.role && (
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            {experience.role}
          </Typography>
        )}

        {!experience.isNested && (
          <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 0.5, mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                📅 {experience.period} · {experience.duration}
              </Typography>
              {experience.location && (
                <Typography variant="body2" color="text.secondary">
                  📍 {experience.location}
                </Typography>
              )}
            </Box>

            {experience.description.length > 0 && (
              <Box component="ul" sx={{ pl: 2, my: 1 }}>
                {experience.description.map((item, index) => (
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
            )}

            {experience.skills.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <SkillChips skills={experience.skills} />
              </Box>
            )}
          </>
        )}

        {experience.isNested && experience.nestedRoles && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              📅 {experience.period} · {experience.duration}
            </Typography>
            {experience.nestedRoles.map(renderNestedRole)}
          </Box>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Box component="section" sx={{ mb: 6 }}>
      <SectionTitle title="Experiência Profissional" icon={<Work fontSize="large" />} />
      {experiences.map(renderExperience)}
    </Box>
  );
};
