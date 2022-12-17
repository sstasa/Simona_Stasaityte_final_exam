import Form from '../components/form/Form';
import Header from '../components/header/Header';
import { useUser } from '../helpers/UserContext';
import PleaseLoginPage from './pleaseLoginPage/PleaseLoginPage';

function RegisterPage(props) {
  const user = useUser();
  return (
    <div>
      {user.isUserLoggedIn ? (
        <>
          <PleaseLoginPage />
        </>
      ) : (
        <>
          <Header />
          <Form type='register' />;
        </>
      )}
    </div>
  );
}
export default RegisterPage;
