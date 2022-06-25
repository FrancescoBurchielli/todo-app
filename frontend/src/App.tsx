import { useRoutes, BrowserRouter as Router } from 'react-router-dom' ;
import {routes} from './routes/routes';


const App = () => {
    const routeResult = useRoutes(routes);
    return routeResult    
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};


export default AppWrapper;

