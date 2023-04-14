import { Route, Routes } from 'react-router-dom';
import MainPage from 'src/pages/mainPage';
import NotFoundPage from 'src/pages/notFoundPage';
import Layout from '../layout';

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
