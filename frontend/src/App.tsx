import { useRoutes, BrowserRouter as Router } from 'react-router-dom' ;
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from 'styled-components';
import {routes} from './routes/routes';
import { defaultTheme } from './styles/themes';


const App = () => {
    const routeResult = useRoutes(routes);
    return routeResult    
}

const AppWrapper = () => {
  return (
    
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <App/>
        </AuthProvider>    
      </ThemeProvider>  
    </Router>    
   
  );
};


export default AppWrapper;

