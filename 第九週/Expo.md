[很讚的教學影片 14hr](https://www.youtube.com/watch?v=AkEnidfZnCU&t=9000s&ab_channel=SonnySangha)
## 我們要做甚麼：
1. install expo & create project
2. 建立畫面(screens)
3. 加入Google Map
4. install Redux

## Expo環境設定
參考文件：[Expo dev](https://expo.dev/)   
### install expo
```
npm i -g expo-cli
```  
### 確認 expo 登入狀態
```
npx expo whoami
```
### 註冊 expo
```
npx expo register
```
### 登入 expo   
```
npx expo login
```

---  
## Expo 專案建置
```
npx create-expo-app my-app
```
---
## 啟動 Expo 專案
### 切換到專案的資料夾  
```
cd my-app/
```
### 啟動專案(local host)
```
npx expo start
```
### 啟動專案(remote)
```
npx expo start --tunnel
```
---  

## 建立畫面(Screens)
*推薦順便安裝VS Code套件：dsznajder.es7-react-js-snippets  

1. 建立資料夾``` screens/```
2. 建立``` screens/HomeScreen.js```  
3. 編輯```  HomeScreen.js ``` 的內容
```
//輸入 rnfes 按下tab可以快速完成程式樣板
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
```
4. 這時候將```HomeScreen```import進```App.js```
```
import HomeScreen from './screens/HomeScreen';
```
```
<HomeScreen/>
```
5. 再將```HomeScreen()```的內容改為  
```
    <View>
      <Text>HomeScreen</Text>
    </View>
```
6. 我們會發現```<Text>HomeScreen</Text>```的字超級上面，可能會被瀏海擋到，這時候可以改為使用```<SafeAreaView>```來避免這個問題
```
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
```
7. 接下來我們來導入樣式庫```tailwind.js```  
Github: [jaredh159/tailwind-react-native-classnames](https://github.com/jaredh159/tailwind-react-native-classnames)  
參考資料：[Tailwind 官方文件](https://tailwindcss.com/)  
參考資料：[Tailwind Playgroud](https://codepen.io/isksz/pen/vQyBqY)  
```
import tw from 'twrnc';
```
```
<SafeAreaView>
      <Text style={[tw`text-red-500 p-10`]}>HomeScreen</Text>
</SafeAreaView>
```
* 當然你也可以同時導入字定義的樣式
```
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={[tw`text-red-500 p-10`,styles.text]}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    }
})
```
---  
## Google Map
### install 
```
npx expo install react-native-maps
```
### 載入套件
```
import MapView from 'react-native-maps';
```
### 使用套件
```
<MapView style={styles.map} /> 
```

---
## install Redux：
參考文件：[Getting Started with Redux](https://redux.js.org/introduction/getting-started)  

terminal install  
```
npm install react-redux
npm install @reduxjs/toolkit
```
在```App.js```中加入
```
import { Provider } from 'react-redux';
import { store } from './store';
```
並對```<View>```做出以下調整
```
    <Provider store={store}>
      <View style={styles.container}>
      <Text>第一個React Expo!!!!</Text>
      <StatusBar style="auto" />
      </View>
    </Provider>
```
建立```store.js```並在裡面加入
```
import {configureStore} from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

export const store = configureStore({
    reducer:{
        nav: navReducer,
    },

});

export default store;
```
建立```slices/navSlice.js```並在裡面加入
```
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;

    
```
到這邊就完成基本的redux import了  

---




