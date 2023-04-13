import { Route, Routes } from 'react-router-dom';
import MainPage from 'src/pages/MainPage';
import NotFoundPage from 'src/pages/NotFoundPage';
import Layout from '../Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
