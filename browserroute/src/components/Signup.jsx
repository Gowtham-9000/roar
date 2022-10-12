// import {Link} from 'react-router-dom'

// const SignUP = () =>{
//     return(
//         <div>
//             SignUp
//             <p>
//                 <Link to="/home">Go to Home</Link>
//             </p>
//         </div>
//     )
// }

// export default SignUp;

import { Link, useParams, NavLink } from "react-router-dom";

const Signup = () => {
    const params = useParams();
    console.log('KW101', params)
    return(
        <div>Signup
        <p>
            {params.firstName} {params.lastName} wants to sign up
        <Link to="/">Go To Home </Link>
        </p>
        <p> <NavLink style={({isActive}) => {
            return isActive ? {color:'red'} : {color:'green', textDecoration:'overline'}
        }} to={{
                pathname:"/Login",
                search:`?userName=${params.firstName}&lName=${params.lastName}`
        }}>Go To Login </NavLink></p>
        </div>
    )
}

export default Signup;