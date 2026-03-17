import { useTranslation } from 'react-i18next'; // ajouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import useEasterEgg from './hooks/useEasterEgg';
import './index.css';

function App() {
  const { t } = useTranslation(); // ajouter

  useEasterEgg('Ctrl+Shift+K', () => {
    console.log(`%c${t('easterEgg.message')}`, 'color: #0A2472; font-size: 16px; font-weight: bold;');
    console.log(`%c${t('easterEgg.contact')}`, 'color: #00C9B7; font-size: 14px;');
  });

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow pt-20 container mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/competences" element={<SkillsPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;