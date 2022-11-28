import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '#/layouts/default';

//* --- Pages --- *//
import Tricks from './pages/tricks/tricks';

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Tricks />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
