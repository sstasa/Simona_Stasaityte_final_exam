import AddShopForm from '../components/addShopForm/AddShopForm';
import Header from '../components/header/Header';
import { useUser } from '../helpers/UserContext';
import PleaseLoginPage from './pleaseLoginPage/PleaseLoginPage';

function AddShopPage(props) {
  const user = useUser();
  return (
    <div>
      {user.isUserLoggedIn ? (
        <>
          <Header />
          <AddShopForm />
        </>
      ) : (
        <PleaseLoginPage />
      )}
    </div>
  );
}
export default AddShopPage;
