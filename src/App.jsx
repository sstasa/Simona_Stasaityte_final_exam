import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import AddShopPage from './pages/AddShopPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopsPage from './pages/ShopsPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <ProtectedRoute path='/addshop'>
          <AddShopPage />
        </ProtectedRoute>
        <ProtectedRoute path='/shops'>
          <ShopsPage />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
