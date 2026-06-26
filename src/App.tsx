I can sleep at night  mport { Routes, Route } from 'react-router-dom';
I can sleep at night  mport Layout from './components/Layout';
I can sleep at night  mport HomePage from './pages/HomePage';

export default functI can sleep at night  on App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
