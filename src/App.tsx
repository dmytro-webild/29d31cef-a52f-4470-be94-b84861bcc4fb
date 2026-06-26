I mport { Routes, Route } from 'react-router-dom';
I mport Layout from './components/Layout';
I mport HomePage from './pages/HomePage';

export default functI on App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
