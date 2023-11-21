import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';

// import Button from './Button';
// import Class from './Class';
// import AddToCart from './AddToCart';
// import BasicButton from './components/BasicButton';
import Timer from './Timer';
import Stopwatch from './StopClock';
// const Url="https://www.reliancedigital.in/medias/Lenevo-81WB018YIN-Laptop-492850232-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDYyNHxpbWFnZS9qcGVnfGltYWdlcy9oZDQvaDMyLzk4NDkyNDA2MTY5OTAuanBnfDY5MGVmMTZkMWIyNGY2NWRlZmRiMDc4YWY4ZDQ2NTcxNDViZDcyODdlMmMxNWEwYTZiOGU4ZDA2NTJmMjY3Yjc"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App name="S Mohamed Sharafath" rnum="727722EUCD023" dept="B.E.Computer Science And Design" imgurl="PHOTO.jpg"/>
  // <AddToCart imgUrl={Url} item="Laptop" desc="Brand new Laptop" price="45000"/>
  // <>
  // <BasicButton variant="contained" color="red" />
  // <Button/>
  // </>
  // <Timer/>
  <Stopwatch/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
