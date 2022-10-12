import {useState, useCallback} from 'react';
import UseEffectComponent from './component/UseEffectComponent';
import  UseCallback  from './component/UseCallback';
// import UseMemo from './component/UseMemo';

function App() {
  const[fname, handleUpdateFirstName] = useState('');//
  const [users, updateUsers] = useState([]);//this is the way of writing a useState using array
  const returnedState = useState('');
  // console.log('KW101',lname[0])
  const lastName = returnedState[0];//
  const updateLastName = returnedState[1];//this is another way to write useState

  const handleOnClick = () => {
    const updateArray = [...users, {fname, lastName}]
    updateUsers(updateArray)
  }

  // useEffect(() =>{
  //     if(fname.length >10){
  //       alert('WoW')
  //     }
  // }, fname)

  const handleUpdateCount = useCallback(() => {
    handleUpdateCount(count+1)
    //updateCount(0+1)
  }, {count})

  const handleUpdateCount1 = () => {
    handleUpdateCount1(count+1)
  }

  return (
    <div>
      <input type={'text'} onChange={(e) => handleUpdateFirstName(e.target.value)} />
      {/* <button onClick = {handleOnClick}>Add User</button>
      <p>Hello {fname}{returnedState[0]}</p>
      <p>
       Users:
        {
          users.map(item => <p>{item.fname} {item.lastName}</p>)
        }
      </p> */}
      {/* {fname && <UseEffectComponent fname={fname} />} */}
      <div><button onClick={handleUpdateCount1}>Update Count</button></div>
      <UseCallback count={count} handleUpdateCount={handleUpdateCount}/>
      {/* <UseMemo count={ count }/> */}
    </div>
  );
}

export default App;
