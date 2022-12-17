import Header from '../components/header/Header';
import { useUser } from '../helpers/UserContext';
import PleaseLoginPage from './pleaseLoginPage/PleaseLoginPage';
function ShopsPage(props) {
  const user = useUser();

  return (
    <div>
      {user.isUserLoggedIn ? (
        <>
          <Header />
          <div>hello</div>
        </>
      ) : (
        <PleaseLoginPage />
      )}
    </div>
  );
}
export default ShopsPage;
