import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import NavBar from './pages/NavBar';
import React from 'react';
import SectionFive from './pages/SectionFive';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <SectionFive/>
    </>
  );

  // // cara bikin state: const [(state), (function)]
  // // jika ada data yang berubah itu ditampung di state
  // const [counter, setCount] = React.useState(0);
  // const increase = () => setCount(counter + 1);
  // const decrease = () => setCount(counter - 1);

  // return(
  //   <div style={{ display: "flex",
  //                 justifyContent: "center",
  //                 alignItems: "center",
  //                 flexDirection: "column"}}>
  //     <h1>Counter App</h1>
  //     {counter}
  //     <div>
  //       <button onClick={increase}>+</button>
  //       <button onClick={decrease}>-</button>
  //     </div>
  //   </div>
  // )
}

export default App;
