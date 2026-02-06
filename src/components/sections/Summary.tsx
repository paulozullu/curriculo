import React from 'react';
import { Box, Typography, useTheme, Paper } from '@mui/material';
import { Person } from '@mui/icons-material';
import { SectionTitle } from '../common';
import { useLanguage, translations } from '../../i18n';

interface SummaryProps {
  summary: string;
}

export const Summary: React.FC<SummaryProps> = ({ summary }) => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  const paragraphs = summary.split('\n\n');

  return (
    <Box component="section" sx={{ mb: 6 }}>
      <SectionTitle title={t.aboutMe} icon={<Person fontSize="large" />} />

      <Paper
        elevation={0}
        sx={{
          p: 4,
          backgroundColor: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.03)'
            : 'rgba(92, 156, 229, 0.04)',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 3,
          borderLeft: `4px solid ${theme.palette.primary.main}`,
        }}
      >
        {paragraphs.map((paragraph, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: index < paragraphs.length - 1 ? 2 : 0,
              textAlign: 'justify',
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </Paper>
    </Box>
  );
};
