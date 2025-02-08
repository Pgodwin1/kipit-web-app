import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/landingPage/Home";
import axios from "axios";
import { userAtom } from "./recoil/userAtom";
import { useRecoilValue } from "recoil";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard/main";
import UserProfile from "./pages/Profile";
import Savings from "./pages/Savings";
import CreateSavings from "./pages/CreateSavings";
import Investment from "./pages/Investment";
import { ToastContainer } from "react-toastify";
import ChangePassword from "./pages/ChangePassword";
import PersonalDetails from "./pages/PersonalDetails";
import CreateInvestment from "./pages/CreateInvestment";
import Viewinvestment from "./components/ViewInvestment";
import Withdraw from "./components/Withdraw";
import ViewSavings from "./components/ViewSavings";
import AddMoney from "./components/AddMoney";
// axios.defaults.baseURL = process.env.REACT_APP_DEV_API_BASE_URL;

function App() {
  const user = useRecoilValue(userAtom);
  const isAuthenticated = user && Object.keys(user).length !== 0;
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/account"
            element={
              isAuthenticated ? <UserProfile /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/savings"
            element={isAuthenticated ? <Savings /> : <Navigate to="/login" />}
          />
          <Route
            path="/create-savings"
            element={
              isAuthenticated ? <CreateSavings /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/investment"
            element={
              isAuthenticated ? <Investment /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/change-password"
            element={
              isAuthenticated ? <ChangePassword /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/personal-details"
            element={
              isAuthenticated ? <PersonalDetails /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/create-investment"
            element={
              isAuthenticated ? <CreateInvestment /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/investmentdetail/:id"
            element={
              isAuthenticated ? <Viewinvestment /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/withdraw"
            element={
              isAuthenticated ? <Withdraw /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/savings/:id"
            element={
              isAuthenticated ? <ViewSavings /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/addmoney"
            element={
              isAuthenticated ? <AddMoney /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
