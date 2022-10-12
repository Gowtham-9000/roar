import {useEffect} from 'react';

const UseEffectComponent = ({fname}) => {

   useEffect(() =>{
     console.log('Behaves Like Component Did Mount');
     return () => {
        console.log('Behaves Like Component will UnMount ')
        }
   }, [])

    useEffect(() =>{
        console.log('Behaves Like Component Did Update');
      }, [fname])

    //   useEffect(() =>{
    //     console.log('Always calling');
    //   })//whenever we want call it everytime.

    return(
        <div>
            Hello From UseEffectComponent
        </div>
    )
}

export default UseEffectComponent;