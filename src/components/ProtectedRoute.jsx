import { Route } from 'react-router-dom';
import PleaseLoginPage from '../pages/pleaseLoginPage/PleaseLoginPage';
import { useAuthCtx } from './../store/AuthContext';

function ProtectedRoute({ children, ...restOfProps }) {
  const { isUserLoggedIn } = useAuthCtx();
  return (
    <Route {...restOfProps}>
      {isUserLoggedIn ? children : <PleaseLoginPage />}
    </Route>
  );
}
export default ProtectedRoute;
