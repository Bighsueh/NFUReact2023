# React Hook之介紹  
## 1.何謂Hook  
可以在function中使用states的一個作法
## 2.使用原因
方便管理componet，hook能夠幫你把componet拆分為更小的function
## 3.使用規則
在撰寫code之前有一些關於hook的規定必須要先理解
* 只能在React Function Componet或者是自定義的hook中使用，且不能夠在一般的Javascript Function中使用
* 只能在React Function Componet最上層直接呼叫，不能在條件式、迴圈或巢狀式內呼叫hook，React使用這個規則來保證每次render時呼叫hook的順序都是一樣的  
## 4.常見的使用方法
* useState  
使用hook需要宣告這一行敘述
```
 const [state,setState] = useState(初值)
```
* setState  
用於設定參數的數值
```
 setState(state)
```
* useEffect  
useEffect裡面的內容只會在re-rendering之後才會執行
```
useEffect(()=>{},[])
```
## 5.Code  
/index.js
```
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

```
## 6.補充資料  
[自定義hook](https://zh-hant.legacy.reactjs.org/docs/hooks-custom.html)  
