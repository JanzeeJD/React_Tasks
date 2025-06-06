import './../Ass2/second.css'
import {useState} from 'react';

export const SecondComponent =()=>{
  const [count, setCount] = useState(1);
  const increase = ()=> {
    setCount(count+1);
  }
  const decrease = ()=> {
    setCount(prev => prev > 0 ? prev - 1 : 0);
  }
  const multiply = () =>{
    setCount (count*2)
  };
 return(
  <div className='counter'>
    <h1 className='number'>{count}</h1>
    <button className='minus' onClick={decrease}> - </button>
    <button className='multiply' onClick={multiply}> * 2 </button>
    <button className='plus' onClick={increase}> + </button>
    <button className='reset' onClick={()=>setCount(1)}> Reset </button>

  </div>
 )
}