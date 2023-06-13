import { useState } from 'react';
import'./components/Header.css';
import UserInfo from './components/UserInfo';

const list = ['Teste nome',"10/10/10","teste@teste.com"];

const list1 = [
  {
    name: 'Teste nome',
    birthday: '10/10/10',
    email: "teste@teste.com"
},
{
    name: 'Teste nome 2',
    birthday: '10/10/10',
    email: "teste2@teste.com"
},
{
    name: 'Teste nome 3',
    birthday: '10/10/10',
    email: "teste3@teste.com"
},
];

function App() {
  return (
    <div className="App">
      <div className="App-header">
      </div> 
        <div className='print'>
          <UserInfo items={list1}/>
        </div>
      </div>
  );
}

export default App;
