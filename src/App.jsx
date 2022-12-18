import { Toaster } from 'react-hot-toast';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { UserProvider } from './helpers/UserContext';
import AddShopPage from './pages/AddShopPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import ShopsPage from './pages/ShopsPage';

function App() {
  return (
    <div className='App'>
      <div>
        <Toaster gutter={-45} />
      </div>
      <Switch>
        <UserProvider>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/addshop'>
            <AddShopPage />
          </Route>
          <Route path='/shops'>
            <ShopsPage />
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </UserProvider>
      </Switch>
    </div>
  );
}

export default App;
