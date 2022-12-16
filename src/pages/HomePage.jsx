import Header from '../components/header/Header';
import LoggedHome from '../components/loggedHome/LoggedHome';
import NotLoggedHome from '../components/notLoggedHome/NotLoggedHome';

function HomePage(props) {
  let id = localStorage.getItem('idToken');
  return (
    <>
      <Header />
      {id && <LoggedHome />}
      {!id && <NotLoggedHome />}
    </>
  );
}
export default HomePage;
