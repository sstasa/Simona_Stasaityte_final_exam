import { Route } from 'react-router-dom';
import { useAuthCtx } from './../store/AuthContext';
import LoginPage from '../pages/LoginPage';

function ProtectedRoute({ children, ...restOfProps }) {
  const { isUserLoggedIn } = useAuthCtx();
  return (
    <Route {...restOfProps}>{isUserLoggedIn ? children : <LoginPage />}</Route>
  );
}
export default ProtectedRoute;
