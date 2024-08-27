import './App.css';
import Button from './Button';
import React, { useState } from 'react';

function App() {
  const name = "Thanawat Klomkliew";
  const [count, setCount] = useState(0);

  const employee = [
    { name: "AAA", email: "aaa@gmail.com", age: 19 },
    { name: "BBB", email: "bbb@gmail.com", age: 20 },
    { name: "CCC", email: "ccc@gmail.com", age: 21 }
  ];
  console.log(employee);

  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button>


      <ul>
        {employee.map((em, index) => (
          <li key={index}>
            ชื่อพนักงาน : {em.name} | อีเมล์ : {em.email} | อายุ : {em.age}
          </li>
        ))}
      </ul>
      <h1>
        Hello {name}
      </h1>
      <h5>
        <Button text="OK" />
        <Button text="Remove" />
      </h5>
    </div>
  );
}

export default App;
