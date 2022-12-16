import { Link } from 'react-router-dom';
import Header from '../components/header/Header';

function HomePage(props) {
  let id = localStorage.getItem('idToken');
  let email = localStorage.getItem('email');
  return (
    <>
      <Header />
      {id && (
        <div>
          <h2>Welcome back {email}!</h2>
          <h3>What would you like to do?</h3>
          <button>
            <Link to='/addshop'>Add a new shop</Link>
          </button>
          <button>
            <Link to='/shops'>View all shops</Link>
          </button>
        </div>
      )}
      {!id && <div>pls login</div>}
    </>
  );
}
export default HomePage;
