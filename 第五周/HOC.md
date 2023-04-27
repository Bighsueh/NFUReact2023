# 第五週:HOC介紹&範例(BLACKPINK按讚按紐)
全名Higher Order Component，將原本component的一部分function獨立出來做成另外一個component，讓其他component要用到這個function的功能時可以更加方便  
概念  
![flowchart](images/picturecp.png)
流程圖  
![flowchart](images/flowchart.png)
## 1. 建立一個react專案  
[如何建立react專案](https://github.com/Bighsueh/NFUReact2023/blob/main/%E7%AC%AC%E4%B8%89%E5%91%A8/%E7%AC%AC%E4%B8%89%E5%91%A8%EF%BC%9A%E9%96%8B%E5%A7%8B%E5%BB%BA%E7%AB%8BReact%E5%B0%88%E6%A1%88%20.md)  

---  
## 2. 主畫面設置  
 因為預設index.js是render App.js的畫面，所以把App.js作為主畫面
### (1) 在src裡面建立兩個component(Person1,Person2)
### (2) App.js的標題、兩個component
### (3) import Person1跟Person2  
 ![APP.js](images/likey2.png)
---  
## 3. Person1,Person2內容 
  標題跟一個按紐  
  ![Person1](images/likey3.png)  
  
  畫面 按鈕按不會有反應  
  
  ![Person1](images/likey3.5.png) 
---  
## 4. 設定按紐
設定兩個props，likey(數值)以及setlikey(function)，設likey的初始值為1  
設定一個function叫handleIncrease，內容是setlikey這個function為likey+1  
設定按紐。按一下執行handleIncrease  
將標題的數字改為likey的value  
![NewPerson1](images/likey4.png)  

畫面  

![image4.5](images/likey4.5.png)
---  
## 5. 建立HOC檔案 
src裡面新增一個component(HOC.js)  
把會重複用到的component(設定likey、setlikey)丟到HOC裡面  
回傳handleIncrease這個function以及likey的值  
![HOC](images/likey5.png)
## 6. 修改Person1&2  
把原component定義參數那段程式碼刪掉
將在HOC設定好的likey與handleIncrease作為Person1的輸出  
輸出畫面改為經過HOC的Person1 function  
![HOC](images/likey6.png)
## 7. 隨意增加新的component
增加兩個新的component  
畫面  
![image7](images/likey7.png)

參考資料： [HOC example](https://www.youtube.com/watch?v=J5P0q7EROfw)
