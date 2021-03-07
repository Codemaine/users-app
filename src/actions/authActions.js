import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  


export const signup = (user) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase
        .createUser(user)
        .then((UserCreds) => {
            console.log("User created successfully", UserCreds);
        })
        .catch((err) =>  Toast.fire({
            icon: 'error',
            title: err.message
          }));
        };
};

export const loginUser = (details) => {
    console.log(details);
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        console.log(firebase);
        firebase
        .login(details)
        .then(() => {
            console.log("User created successfully");
            useHistory().push('/')
        })
        .catch((err) =>  Toast.fire({
            icon: 'error',
            title: err.message
          }));
        };
};
export const logout = () => {
    return(dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.logout()
    }
}