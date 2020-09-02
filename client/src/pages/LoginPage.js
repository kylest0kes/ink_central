import React from 'react';
// import Login from '../components/Login';
// import API from '../utils/API';
import LoginHeroSlider from '../components/LoginHeroSlider'

export default function LoginPage(props) {
    // const [userState, setUserState] = useState({
    //     username: "",
    //     password: "",
    //     error: "",
    //     display: false,
    //     redirect: "/",
    //     loggedIn: true
    // })

    // const login = e => {
    //     e.preventDefault();
    //     API.login({
    //         username: userState.username.toLowerCase(),
    //         password: userState.password
    //     })
    //     .then(res => {
    //         if (res.data.message) {
    //           setUserState({
    //             error: res.data.message
    //           });
    //         } else {
    //           console.log("login successful")
    //           props.isAuthorized();
    //           setUserState({ ...userState, loggedIn: true })
    //         }
    //       })
    //       .catch(err => {
    //         console.log(err);
    //         setUserState({ error: "A server error has occured." });
    //       });
    
    //     setUserState({ password: "" });
    // }

    // const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     setUserState({
    //         ...userState,
    //       [name]: value.trim()
    //     });
    //   };
    
    return (
        <div>
          <LoginHeroSlider isAuthorized={props.isAuthorized}/>
            {/* <Login 
                login={login}
                handleInputChange={handleInputChange}
                username={userState.username}
                password={userState.password}
            />  */}
        </div>
    )
}
