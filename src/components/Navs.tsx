import { Link } from 'react-router-dom';
import AppTitle from './AppTitle';
import { ROUTES } from '../utils/routes';


export default function Navs() {
  return (
    <nav>
      <AppTitle
        subtitle={"A simple PWA. Developed with React."}
      />
      {
        ROUTES.length && (
          <ul>
            {
              ROUTES.map(route => (
                <li key={route.to}>
                  <Link to={route.to}>{route.text}</Link>
                </li>
              ))
            }
          </ul>
        )
      }
    </nav>

  );
}
