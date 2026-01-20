import React from 'react';
import { Box, Container, useTheme } from '@mui/material';
import {
  Header,
  Summary,
  ExperienceList,
  EducationList,
  CertificationList,
  ProjectList,
  Skills,
  Footer,
} from '../components';
import type { ResumeData } from '../types';

interface ResumeLayoutProps {
  data: ResumeData;
}

export const ResumeLayout: React.FC<ResumeLayoutProps> = ({ data }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Header personalInfo={data.personalInfo} />

      <Container
        component="main"
        maxWidth="lg"
        sx={{
          py: { xs: 4, md: 6 },
          flex: 1,
        }}
      >
        <Summary summary={data.summary} />
        <Skills skillCategories={data.skillCategories} />
        <ExperienceList experiences={data.experiences} />
        <EducationList education={data.education} />
        <CertificationList certifications={data.certifications} />
        <ProjectList projects={data.projects} />
      </Container>

      <Footer />
    </Box>
  );
};
