import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import Header from './components/Header';

const App = () => (
  <main>
    <Header />
    <Routes>
      <Route index element={<BooksPage />} />
      <Route path="categories" element={<CategoriesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default App;
