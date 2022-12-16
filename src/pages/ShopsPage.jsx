import Header from '../components/header/Header';
import PleaseLoginPage from './pleaseLoginPage/PleaseLoginPage';
function ShopsPage(props) {
  let id = localStorage.getItem('idToken');
  let email = localStorage.getItem('email');

  return (
    <div>
      {!id ? (
        <PleaseLoginPage />
      ) : (
        <>
          <Header />
          <div>hello {email}</div>
        </>
      )}
    </div>
  );
}
export default ShopsPage;
