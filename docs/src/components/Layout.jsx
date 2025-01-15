import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import './Layout.css';
import '../styles/variables.css';

export default function Layout() {
  const location = useLocation();
  
  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </>
  );
}