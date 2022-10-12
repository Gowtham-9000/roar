import {Link} from 'react-router-dom'

const Home = () => {
     return(
        <div>
            Home page
           <p>
            <Link to="/login">Go to Login</Link>
           </p>
        </div>
     )
}

export default Home;