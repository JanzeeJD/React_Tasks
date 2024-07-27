import './../Ass3/third.css'
import { useState, useEffect} from 'react'
import axios from 'axios';

export const ThirdComponent = () =>{
 const [counter, setCounter] = useState(6);
 const [user, setUser] = useState({});
 

 useEffect(()=>{
  const fetchDetail = async()=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${counter}`)
    setUser(response.data)
    console.log(response.data);
  }
  fetchDetail()
 },[counter])
  
 const increment = ()=>{
    setCounter(counter+1);
  }
  const decrement = () =>{
    setCounter(counter-1);
  }
  return(
    <div className='main'>
      <h1>{counter}</h1>
      <div className='name'>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <button className='action' onClick={increment}>+</button> <br />
      <button className='action' onClick={decrement}>-</button>
    </div>
  )
}