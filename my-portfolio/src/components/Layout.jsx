import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';
import '../styles/variables.css';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the matched child route */}
      </main>
    </>
  );
}
