import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/storeConfig';
import NotFound from './pages/NotFound';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import Header from './components/Header';
import './assets/styles/App.css';

const App = () => (
  <Provider store={store}>
    <main>
      <Header />
      <Routes>
        <Route index element={<BooksPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </Provider>
);

export default App;
