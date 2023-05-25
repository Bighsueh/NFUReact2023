# 第二周：ES6語法
## 宣告變數
* 傳統宣告變數  
```
var str = "hello world";
```   
* ES6新增的方法
```
let str = "hello world";
const url = "http://www.nfu.edu.tw";
```

* 範例程式碼：
```
for (let i=0; i<3; i++){
    console.log(i);
}
```
---
## 字串相加
* 傳統字串相加
```
let start = "你好，我是";
let name = "薛阿君";
let end = "很高興認識你";

let result = start + name + "，" + end + "。";

console.log(result); //你好，我是薛阿君，很高興認識你。
```  
* ES6字串相加
```
let name = "薛阿君";

let result = `你好，我是${name}很高興認識你。`

console.log(result); //你好，我是薛阿君，很高興認識你。
```  
---  
## 箭頭函式
* 傳統函式
```
var morningCall = function(someone) {
  return someone + '，起床了';
}
```

* ES6箭頭函式  
```
var morningCall = (someone) => {
  return someone + '，起床了';
}
```
或  
```
var morningCall = (someone) => someone + '，起床了';
```  

--- 
## 物件函式縮寫 
* ES5  
```  
let car = {
    name: 'car';
    function: function(){
        console.log('叭叭叭');
    }
}
```  
* ES6  
```
let car = {
    name: 'car';
    function(){
        console.log('叭叭叭');
    }
}
```
---
## 陣列複製
* 一般的複製，傳址
```
arrA = [1,2,3];
arrB = arrA;
arrB[0] = 4;

console.log(arrA); //[4,2,3]
```
* ES6新增的複製，傳值
```
arrA = [1,2,3];
arrB = [...arrA];

arrB[0] = 4;
console.log(arrA); //[1,2,3]
```
--- 
## 陣列組合
* ES5
```
let arrA = ['甲','乙','丙','丁'];
let arrB = ['子','丑','寅','卯'];

let arrAll = arrA.concat(arrB);
```
* ES6
```
let arrA = ['甲','乙','丙','丁'];
let arrB = ['子','丑','寅','卯'];

let arrAll = [...arrA,...arrB];
```
--- 
## 物件組合
```
const breakfast1 = {
    name:'大冰奶',
    price: 30,
    type:'去冰',
}

const breakfast2 = {
    name:'蛋餅',
    price: 35,
}

const allBreakfast = {...breakfast1,...breakfast2};
```

---  
## 多個或不定長度參數
```
function todayInMyStomach(date,...drink){
    result = `
        日期: ${date},
        喝過的飲料: ${drink}
    `;
    console.log(result);
}

todayInMyStomach('2023-03-24','多多綠茶','太妃紅茶','熟成紅茶','荔枝甚麼的')
```
---
## 解構
* ES5
```
let mountains = ['合歡山','阿里山'];

let nantou = mountains[0];
let chiayi = mountains[1];
``` 
* ES6
```
let mountains = ['合歡山','阿里山'];
let [nantou,chiayi] = mountains;
```
---  
## 物件及陣列的解構賦值
* 陣列的解構賦值 (依照"順序"賦值)
```
breakfast = ['蛋餅',35];
let [name,price] = breakfast;
```
* 物件的解構賦值 (依照"名稱"賦值)
```
let breakfast = {
    name:'蛋餅',
    price: 35,
}
let {price,name} = breakfast;
```
