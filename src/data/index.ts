export { resumeData } from './resumeData';
export { resumeDataEn } from './resumeData.en';

import type { Language } from '../i18n';
import type { ResumeData } from '../types';
import { resumeData } from './resumeData';
import { resumeDataEn } from './resumeData.en';

export const getResumeData = (language: Language): ResumeData => {
  return language === 'en' ? resumeDataEn : resumeData;
};
