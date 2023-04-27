// 使用useState useEffect時需要先增加
import {React,useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Count()
{
  // 設定useState之參數
  const [qty, setQty] = useState(1);
  // 要更改qty的值需要透過setQty來設定
  const increase = () =>{setQty(qty+1)}
  const decrease = () =>{setQty(qty-1)}
  useEffect(() => {
    document.title = qty
  });
  return(
  <div className='container'>
    <button onClick={decrease}>減少</button>
    <span>{qty}</span>
    <button onClick={increase}>增加</button>
  </div>
  
  );
}
root.render(
  <Count/>

);

reportWebVitals();
