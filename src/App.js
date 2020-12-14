import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '123456',
  'gender' : '남자',
  'job' : '정의로운도둑'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김민식',
  'birthday' : '950404',
  'gender' : '남자',
  'job' : '개발자'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '심청이',
  'birthday' : '940229',
  'gender' : '여자',
  'job' : '효녀'
}
]

class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); }) }
      </div>
    );
  }
}

export default App;
