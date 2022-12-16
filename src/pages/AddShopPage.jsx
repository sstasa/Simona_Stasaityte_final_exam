import AddShopForm from '../components/addShopForm/AddShopForm';
import Header from '../components/header/Header';
import PleaseLoginPage from './pleaseLoginPage/PleaseLoginPage';

function AddShopPage(props) {
  let id = localStorage.getItem('idToken');
  return (
    <div>
      {!id ? (
        <PleaseLoginPage />
      ) : (
        <>
          <Header />
          <AddShopForm />
        </>
      )}
    </div>
  );
}
export default AddShopPage;
