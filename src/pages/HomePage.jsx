import Header from '../components/header/Header';
import LoggedHome from '../components/loggedHome/LoggedHome';
import NotLoggedHome from '../components/notLoggedHome/NotLoggedHome';
import { useUser } from '../helpers/UserContext';

function HomePage(props) {
  const user = useUser();
  return (
    <>
      <Header />
      {user.isUserLoggedIn && <LoggedHome />}
      {!user.isUserLoggedIn && <NotLoggedHome />}
    </>
  );
}
export default HomePage;
