# React Native簡介
##  (一) React Native是甚麼
### 1. React Native簡介
* React Native是一個由Facebook開發的開源框架，用於使用JavaScript和React來建立原生移動應用程式。它允許開發者使用相同的程式碼來建立iOS和Android應用程式，並提供接近原生性能的使用者體驗。
### 2. React Native的優點
* 跨平台開發：React Native可在多個平台上運行，節省了開發人員分別編寫iOS和Android應用程式的時間和精力。
* 更好的快速迭代和開發效率：React Native具有熟悉的React語法和模組化的物件系統，使開發速度更快且易於維護。
* 原生性能：React Native應用程式可以實現接近原生應用程式的性能，因為它使用原生UI物件並透過JavaScript執行緒將其與JavaScript代碼進行連接。
* 熱重載（Hot Reloading）：React Native支援熱重載，使開發者可以即時查看修改後的結果，無需重新編譯程式，但缺點是性能會較差。
* 豐富的生態系統：React Native擁有龐大的第三方套件，可以快速構建功能豐富的應用程式。
### 3. React Native的特性
* 物件導向：React Native使用物件作為應用程式開發的基本單位，物件可以被重複使用並組合成複雜的介面。
* 虛擬DOM（Virtual DOM）：React Native使用虛擬DOM來優化UI的更新效能，僅更新需要更改的部分，提高了應用程式的效能。
* 即時更新：React Native支援即時更新，開發人員可以在應用程式運行時進行代碼的更新，無需重新提交到應用商店。
### 4. React Native與React的關係
React Native與React有著密切的關係，它們都是由Facebook開發並共享了相似的開發模式和語法。React Native基於React的核心思想，但是React Native專注於構建移動應用程式，而React則專注於網頁應用程式。React Native使用了React的物件模型和一部分語法，但它具體上使用了不同的底層物件和API，以適應移動平台的需求。React Native讓開發者能夠以熟悉的React開發模式和語法來構建原生移動應用程式，同時利用React Native的原生物件和性能優化來提供更好的用戶體驗。值得一提的是，React Native並非完全取代了原生開發，而是提供了一個替代方案，特別適用於需要快速開發並跨平台運行的場景。開發者可以根據項目需求選擇原生開發或React Native開發，甚至可以在同一個應用程式中混合使用原生物件和React Native物件。總之，React Native是一個能夠使用JavaScript和React來開發跨平台移動應用程式的框架。它具有許多優點，包括跨平台開發、快速迭代和開發效率、原生性能、熱重載以及豐富的生態系統。通過物件導向的開發方式和虛擬DOM的優化，React Native提供了一個強大且易於使用的工具，使開發者能夠快速構建高品質的原生移動應用程式。
##  (二) React Native環境設定
[官方參考文件](https://reactnative.dev/docs/environment-setup?package-manager=npm&guide=native)  
[影片教學](https://www.youtube.com/watch?v=6tEV6H07Fd8&ab_channel=ComputerBerry)
### 1. 安裝Node.js和npm
為了開始React Native的開發，需要先安裝Node.js和npm（Node Package Manager）。Node.js是一個運行JavaScript的平台，而npm則是Node.js的套件管理器，用於安裝和管理React Native相關的依賴套件。
### 2. 安裝React Native命令行工具
React Native提供了一個命令行工具（Command Line Interface，CLI），用於創建、運行和打包React Native應用程式。安裝React Native CLI工具可以方便地使用React Native相關的開發工作流程。
### 3. 配置Android開發環境
如果打算開發Android應用程式，需要配置Android開發環境。這包括安裝Java Development Kit（JDK）、Android Studio和設置相應的環境變數。
#### 進行React Native開發前，必須先完成這些環境設定。安裝Node.js和npm提供了開發React Native所需的基礎工具，安裝React Native CLI工具則方便了React Native開發的命令行操作。而配置Android和iOS開發環境則允許開發者在相應的平台上進行React Native應用程式的測試和部署。
##  (三) React Native物件的創建和使用
### 1. React Native物件概述
React Native基於物件導向的開發模式，物件是應用程式開發的基本單位。在這部分中，將介紹React Native物件的概念，包括功能物件和外觀物件，並解釋它們如何協同工作來構建應用程式的使用者介面。

### 2. 創建React Native物件
將介紹如何創建React Native物件，包括物件的建立方式、屬性的設定。這將使開發者能夠根據應用程式的需求創建可重用且可組合的物件。

### 3. 使用物件構建UI介面
將說明如何使用React Native物件來構建應用程式的使用者介面。這包括使用物件的屬性和狀態（State）來定義動態的UI元素，以及使用Flexbox佈局來調整物件的位置和大小。

### 4. React Native的常用套件庫
React Native擁有豐富的第三方套件庫，可以加速應用程式的開發過程。將介紹一些常用的物件庫，如React Navigation用於導航、React Native Elements提供預製的UI元素等，並示範如何使用這些物件庫來快速構建功能豐富的應用程式。
### 掌握React Native組件的創建和使用是開發React Native應用程式的核心能力。了解React Native組件的概念和創建過程，以及熟悉如何使用組件構建UI介面和組件的生命週期，將有助於開發者快速構建出具有交互性和美觀的應用程式。同時，利用React Native的常用組件庫可以提高開發效率，並使應用程式的功能更加豐富和多樣化。