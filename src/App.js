import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react'

function App() {
  let petDetails = [
   { name: 'Buddy',
    age: 2},
    {
      name: 'bruno',
      age: 3
    },
    {
      name: 'tuffy',
      age: 1
    }
]

let [pet, setPet] = useState(petDetails)

const sortArr = ()=>{
  let pet1 =pet.sort((a, b)=>(
    a.age > b.age ? 1 : -1
  ));
  console.log(pet1);
  setPet([...pet1])
  console.log(pet);
  // console.log('hi');
}

// sortArr()
  return (
    <div className="App">
     <table>
      <th>
        <tr key="">
        <td>name</td>
        <td>age</td>
        </tr>
      </th>
      <tbody>
        {pet && pet.map((ele)=>(
          <tr key={ele.age}>
          <td>{ele.name}</td>
          <td>{ele.age}</td>
          </tr>
        ))}  
      </tbody>
     </table>
     <button onClick = {
      sortArr
  }>sort</button>
    </div>
  );
}

export default App;
