import { Routes, Route } from 'react-router-dom';
import Welcome from '@/pages/Welcome/Welcome';
import NotFound from '@/pages/NotFound/NotFound';


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route
        path="/:lang/*"
        element={
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
