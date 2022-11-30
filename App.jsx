import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import QuestionAns from "./components/QuestionAns";


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Search } from "@material-ui/icons";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProductList" element={<ProductList/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/QuestionAns" element={<QuestionAns/>}/>
        

        


      </Routes>
    </Router>

    </>
  )
         
};


export default App;