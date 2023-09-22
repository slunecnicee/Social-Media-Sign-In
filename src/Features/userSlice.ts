import { createSlice } from "@reduxjs/toolkit";

const staticPassword = "Aa12345";


const initialState={
    name:'',
    password:'',
    isSignedIn:false,
    showModal:false,
    errorMessage:''

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        onNameChange: (state, action) => {
           state.name=action.payload;
        },
        onPasswordChange: (state, action) => {
           state.password=action.payload;
        },

        onLogIn:(state)=>{
          if(state.password===staticPassword){
            state.isSignedIn=true;
            state.showModal=false;
          }else{
            state.errorMessage="Wrong password";
          }
          localStorage.setItem('user', JSON.stringify({ isSignedIn: state.isSignedIn, name: state.name }));
        },
        onCloseModal:(state)=>{
            state.showModal=false;
        },

        onSignIn:(state)=>{
            state.showModal=true;
        },

        onSignOut:(state)=>{
            state.isSignedIn=false;
            localStorage.removeItem('user');
        },

        parseUserFromLocalStorage: (state) => {
            const loggedUser = localStorage.getItem("user");
            if (loggedUser) {
              const parsedUser = JSON.parse(loggedUser);
              state.isSignedIn = parsedUser.isSignedIn;
              state.name = parsedUser.name;
            }
          },
        }
    
})


export default userSlice.reducer;
export const {onNameChange,onPasswordChange,onLogIn,onCloseModal,onSignIn,onSignOut,parseUserFromLocalStorage} = userSlice.actions;