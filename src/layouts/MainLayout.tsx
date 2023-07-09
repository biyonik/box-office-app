import { Outlet } from 'react-router-dom';
import Navs from '../components/Navs';



export default function MainLayout() {
  return (
    <div className="App">
      <Navs />
      <Outlet />
    </div>
  );
}
