import './../App.css';

import { FirstComponent } from './Assignment/Ass1/first';
import { SecondComponent } from './Assignment/Ass2/second';
import { ThirdComponent } from './Assignment/Ass3/third';
import {FourComponent} from './Assignment/Ass4/four';

export function App(){
  const persons = [
    {name: 'Greeshma', email:"greesh2002@gmail.com"},
    {name: 'Alan', email:"alanbiju@outlook.com"},
    {name: 'Mathew', email:"mathew@gmail.com"},
    {name: 'Jancy', email:'jancyjaya12@gmail.com'}
  ]

  return(
    <div>
      {persons.map((person)=><FirstComponent name={person.name} email={person.email}/>)}
    </div>
    
  )
}