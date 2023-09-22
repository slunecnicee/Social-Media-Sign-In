import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { onSignIn,onSignOut } from '../Features/userSlice';

const StyledHeader = styled.header`
height: 100px;
width: 100%;
background-color: #A2B2EE;
padding-top: 20px;
display:flex;
justify-content: space-between;
align-items:center;


& nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 20px;
}


button{
    min-width: 5rem;
    max-width: 8rem;
    height: 2.5rem;
    border-radius:10px;
    margin-right: 20px;
    border:none;
    background-color:#c6ceed;
    color:#333;
    font-weight:bold;
    cursor:pointer;
    &:hover {
        box-shadow: 0 0 20px #333;
    }
}

a{
    color: #333;
  text-decoration: none;
  padding: 10px;
  margin-right: 10px;

  &.active {
    font-weight: bold;
    color: #06b806;
    text-shadow:0 0 10px whitesmoke;
  }  
}

p{
    color: #106691;
    text-shadow:0 0 8px white;
    font-weight:bold;
    font-size:1.8rem;
}

`;
const StyledUl = styled.ul`
display: flex;
justify-content: center;
gap: 50px;
font-size:1.3rem;
& li {
    list-style-type: none;

}

@media screen and  (max-width: 600px) {
    gap: 10px;
}
  
`

const Header = () => {

const dispatch=useDispatch();

const userName=useSelector((state:RootState)=>state.user.name);
const isSignedIn=useSelector((state:RootState)=>state.user.isSignedIn);


const handleSignIn= ()=>{
dispatch(onSignIn());
}
const handleSignOut= ()=>{
dispatch(onSignOut());
}

    return ( 

        <StyledHeader>
        <nav>
            <StyledUl>
               <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "link")} to='/'>Home</NavLink>
                </li>
               <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "link")} to='/cocktails'>Cocktails</NavLink>
                </li>

            </StyledUl>
        </nav>
        {isSignedIn?<p>Welcome {userName}</p>:null}
         {isSignedIn?<button onClick={handleSignOut}>Sign Out</button>:<button onClick={handleSignIn}>Sign In</button>}
           
      
    </StyledHeader>
     );
}
 
export default Header;