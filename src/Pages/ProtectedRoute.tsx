import { Navigate,Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const ProtectedRoute = () => {

    const user=useSelector((state:RootState)=>state.user.isSignedIn)


   if (user){
    return <Outlet />
   }else{
    return <Navigate to="/" replace />
   }

   
}
 
export default ProtectedRoute;