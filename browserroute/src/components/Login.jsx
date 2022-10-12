import { Link, useLocation } from "react-router-dom";

const Login = () => {
    const name = 'Gowtham'
    const lName = 'Sai'
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userName = params.get('userName')
    const lastName = params.get('lName')
    console.log('KW101',location )
    return(
        <div> 
            Please Login {userName} {lastName}
        <Link to={`/signup/${name}/${lName}`}>Go to Sign Up </Link>
        
        </div>
    )
}

export default Login;