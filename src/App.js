import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react'

function App() {
  const petDetails = [
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
const [pet, setPet] = useState(petDetails)
useEffect(() => {
  return () => {
    pet
  };
}, []);

function sortArr(pet){
  pet.sort((a, b)=>(
    a.age > b.age ? 1 : -1
  ));
  setPet(pet)
  console.log(petDetails);
  console.log('hi');
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
        {petDetails && petDetails.map((ele)=>(
          <tr key={ele.age}>
          <td>{ele.name}</td>
          <td>{ele.age}</td>
          </tr>
        ))}  
      </tbody>
     </table>
     <button onClick = {()=>(
      sortArr(petDetails)
  )}>sort</button>
    </div>
  );
}

export default App;
