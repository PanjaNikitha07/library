import "./App.css";
import Navbar from "./components/Navbar";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import UserRegister from "./pages/UserRegister";
import Users from "./pages/admin-routes/Users"
import AddUser from "./pages/admin-routes/AddUser";
import AddBook from "./pages/admin-routes/AddBook";
import AdminRegister from "./pages/AdminRegister";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
import PrivateRoute from "./components/PrivateRoute";
import CategoriesTable from "./pages/CategoriesTable";
import SideBar from "./pages/user-routes/SideBar";
import AdminHome from "./pages/admin-routes/AdminHome";
import AdminBooks from "./pages/admin-routes/AdminBooks";
import { ToastContainer } from 'react-toastify';
import UserHome from "./pages/user-routes/UserHome";
import UserDashboard from "./pages/user-routes/UserDashboard";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import AdminDashboard from "./pages/admin-routes/AdminDashboard";
import UserBooks from "./pages/user-routes/UserBooks";
import StaffLogin from "./pages/StaffLogin";
import TopBar from "./pages/user-routes/TopBar";
import Cart from "./pages/user-routes/Cart";
import IssuedBooks from "./pages/user-routes/IssuedBooks";
import IssueBooks from "./pages/admin-routes/IssueBooks";
import AdminAboutUs from "./pages/admin-routes/AdminAboutUs";
import UserAboutUs from "./pages/user-routes/UserAboutUs";
function App() 
{

  
  return (
    <div className="App">
       
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      
        <Navbar />
        
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/categories" element={<Categories/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/adminLogin" element={<AdminLogin/>} />
          <Route path="/staffLogin" element={<StaffLogin/>} />
          <Route path='/adminRegister' element={<AdminRegister/>} />
          <Route exact path="/userLogin" element={<UserLogin/>} />
          <Route path='/userRegister' element={<UserRegister/>} />
          <Route path='/categoriesTable' element={<CategoriesTable/>} />
          <Route path ='/adminDashboard' element={<AdminDashboard/>}  /> 
          <Route path = "/sidebar" element={<SideBar/>}/>
          <Route path = "/userHome" element={<UserHome/>}/>
          <Route path = "/topbar" element={<TopBar/>}/>
          <Route path="/userBooks" element={<UserBooks/>}/> 
          {/* <Route path="/userCart" element={<UserCart/>}/> */}
          <Route path = "/adminHome" element={<AdminHome/>}/>
          <Route path="/adminBooks" element={<AdminBooks/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/issuedBooks" element={<IssuedBooks/>}/>
          <Route path="/issueBooks" element={<IssueBooks/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/addUser" element={<AddUser/>}/>
          <Route path="/addBook" element={<AddBook/>}/>
          <Route path="/adminTopbar" element={<SideBar/>} />
          <Route path="/adminAboutUs" element={<AdminAboutUs/>} />
          <Route path="/userAboutUs" element={<UserAboutUs/>} />
          <Route path='/user' element={<PrivateRoute/>}>
          <Route path='dashboard' element={<UserDashboard/>} >
          
         </Route>   
         <Route path='userBooks' element={<UserBooks/>} />
          <Route path='profile-info' element={<ProfileInfo/>} />

          </Route>
          
          </Routes>
        
        
      
    </div> 
  );
}

export default App;