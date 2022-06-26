import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import Login from './pages/Login';
import Register from './components/Register';
import Faq from './pages/Faq';
import Onboard from './pages/Onboard';
import Fund from './pages/Fund';
import Status from './pages/Status';
import Adminlogin from './pages/Adminlogin';
import { Layout_Admin } from './components/Layout_Admin';
import Navbar_Admin from './components/Navbar_Admin';
import AdminDashboard from './components/AdminDashboard';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="faq" element={<Faq />} />
            <Route path="loggedin/status" element={<Status />} />
            <Route path="loggedin/onboard" element={<Onboard />} />
            <Route path="loggedin/Fund" element={<Fund />} />
          </Route>

          <Route path="/admin" element={<Layout_Admin />}>
            <Route index element={<Adminlogin />}></Route>
            <Route path="dashboard" element={<AdminDashboard />}></Route>
          </Route>

          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
