// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Home from './components/Home';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import User from './components/User';
// import Error from './components/Error';
// import React from 'react';

// function App(){
//   return(
//      <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/signUp' element={<SignUp/>} />
//         <Route path='/login' element={<Login/>} />
//         <Route path='/*' element={<Error/>} />
//       </Routes>
//       </BrowserRouter>
//      </div>
//   );
// }

// export default App;


import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import User from './components/User';
import Error from './components/Error';
import React from 'react';

const App = () => {
    return (
      <div>
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/signUp/:firstName/:lastName' element={<Signup />} />
       <Route path='/login' element={<Login />} />
       <Route path='/user' element={<User />} />
       <Route path='/*' element={<Error />} />
       </Routes>
       </BrowserRouter>
      </div>
     );
  }
 


export default App;