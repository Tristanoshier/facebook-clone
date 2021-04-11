import './css/main.css';
import { Feed } from './Components/Feed/Feed';
import { Header } from './Components/Layout/Header';
import { Sidebar } from './Components/Layout/Sidebar';
import { Login } from './Components/Auth/Login';
import { useStateValue } from './StateManagement/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
 
  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
      <>
          <Header />
          <div className='app-body'>
            <Sidebar />
            <Feed />
          </div>
        </>)
      }
    </div>
  );
}

export default App;
