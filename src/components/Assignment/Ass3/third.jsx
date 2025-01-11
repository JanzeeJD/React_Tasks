import './../Ass3/third.css'
import { useState, useEffect} from 'react'
import axios from 'axios';

export const ThirdComponent = () =>{
 const [counter, setCounter] = useState(6);
 const [user, setUser] = useState({});
 

 useEffect(()=>{
  const fetchDetail = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${counter}`);
      if (response?.data?.id) {
        setUser(response.data);
      }
    } catch (err) {
      console.error("Failed to fetch user data", err);
    }
  }
  
  fetchDetail()
 },[counter])
  
 const increment = ()=>{
    setCounter(counter+1);
  }
  const decrement = () =>{
    setCounter(prev => prev > 1 ? prev - 1 : 1);
  }
  return(
    <div className='main'>
      <h1>{counter}</h1>
      <div className='name'>
      <h2>{user.name || "Loading..."}</h2>
      <p>{user.email || ""}</p>
      </div>
      <button className='action button-spacing' onClick={increment}>+</button> <br />
      <button className='action' onClick={decrement}>-</button>
    </div>
  )
}