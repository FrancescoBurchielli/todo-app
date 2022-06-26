import { useRoutes, BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;
import { AuthProvider } from './context/AuthContext'
import { SignIn } from './pages/SignIn';
import {routes} from './routes/routes';


const App = () => {
    const routeResult = useRoutes(routes);
    return routeResult    
}

const AppWrapper = () => {
  return (
    
    <Router>
      <AuthProvider>
        <App/>
      </AuthProvider>      
    </Router>    
   
  );
};


export default AppWrapper;

