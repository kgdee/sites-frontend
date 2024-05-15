import Home from "./pages/Home";
import store from './redux/store'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import SignIn from "./pages/SignIn"
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Thankyou from "./pages/Thankyou";

function App() {

  const Layout = () => {

    return (
      <div className="overflow-x-hidden min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<Register />} />
            <Route path="thankyou" element={<Thankyou />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </Provider>
  );
}

export default App;
