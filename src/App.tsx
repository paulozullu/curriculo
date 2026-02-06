import { ThemeProvider } from './theme';
import { LanguageProvider, useLanguage } from './i18n';
import { ResumeLayout } from './layouts';
import { getResumeData } from './data';

function ResumeApp() {
  const { language } = useLanguage();
  const data = getResumeData(language);
  return <ResumeLayout data={data} />;
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ResumeApp />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
