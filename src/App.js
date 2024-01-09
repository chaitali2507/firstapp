import logo from './logo.svg';
import './App.css';
import './demo.css';
import test from './test.module.css';
import styled from 'styled-components';

const heading={
  color:'green',
  backgroundColor:'violet'
}

const Btn=styled.button
`
padding:20px;
border:none;
background-color:#003366;
color:white
`

function App() {
  return (
    <div className="App">
      inline css
      <h1 style={{color:'red',backgroundColor:'yellow'}}>Good Morning</h1>
      internal css
      <h1 style={heading}>Good Morning</h1>

      <h1 className='title'>title</h1>

      <p className={test.disc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos esse error, obcaecati quae ducimus officiis temporibus enim nobis veritatis. Qui dolorum temporibus harum sed illum dicta. Veritatis, sapiente sequi.
      </p>
      <Btn>Click To Action</Btn> 

      <img src={require('./image/res12.webp')} width={200} alt="" />

    </div>
  );
}

export default App;
