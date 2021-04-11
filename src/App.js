import { Feed } from './Feed'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Login } from './Login'
import './App.css'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue();
 
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <>
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
          </div>
        </>)
      }
    </div>
  );
}

export default App;
