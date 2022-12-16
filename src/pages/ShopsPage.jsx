import Header from '../components/header/Header';
import PleaseLoginPage from './pleaseLoginPage/PleaseLoginPage';
function ShopsPage(props) {
  let id = localStorage.getItem('idToken');

  return (
    <div>
      {!id ? (
        <PleaseLoginPage />
      ) : (
        <>
          <Header />
          <div>hello</div>
        </>
      )}
    </div>
  );
}
export default ShopsPage;
