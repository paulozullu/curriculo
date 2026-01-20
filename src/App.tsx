import { ThemeProvider } from './theme';
import { ResumeLayout } from './layouts';
import { resumeData } from './data';

function App() {
  return (
    <ThemeProvider>
      <ResumeLayout data={resumeData} />
    </ThemeProvider>
  );
}

export default App;
