import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/header';
import CoktailsPage from './Pages/Cocktails';
import LoginModal from './components/LoginModal';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import ProtectedRoute from './Pages/ProtectedRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {parseUserFromLocalStorage} from './Features/userSlice';
import SingleCocktail from './Pages/singleCocktailPage';


function App() {

  const showModal=useSelector((state:RootState)=>state.user.showModal)

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(parseUserFromLocalStorage());
  },[])


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      {showModal&&(
		 <LoginModal />
	   )}
      <Routes>
        <Route path="/" element={<Home/>} />
        
<Route element={<ProtectedRoute/>}>
  <Route path="/cocktails" element={<CoktailsPage/>} />
  <Route path="/:id" element={<SingleCocktail/>}/>
</Route>

      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
