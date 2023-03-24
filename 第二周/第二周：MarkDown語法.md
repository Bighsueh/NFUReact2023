# 第二周：MarkDown語法
## Markdown是甚麼
Markdown 是一種輕量級標記語言，它使用簡單的標記語法來實現文本的格式化，包括標題、列表、鏈接、圖像等等。Markdown 的目的是使文本編寫更加容易，讓文本的內容和結構更加清晰，同時保持純文本的格式，方便在不同平台和應用程序中進行共享和編輯。

Markdown 被廣泛應用於寫作、文檔、博客、郵件和討論區等場合。Markdown 的語法簡單易學，並且具有平台無關性和可讀性，因此它成為了眾多寫作者的首選工具。許多網站和應用程序也支持 Markdown，例如 GitHub、Stack Overflow、Slack 等等。

Markdown 語法的特點是以簡單的方式實現文本格式化，通常使用純文本編輯器進行編寫。例如，使用 # 符號可以標記標題，使用 * 符號可以標記列表項目。Markdown 的語法還可以嵌入 HTML 代碼，進一步擴展了其功能。總之，Markdown 是一種簡單易學的標記語言，可用於實現文本格式化和排版，並且廣泛應用於各種文本編輯和共享場合。 -ChatGPT 2023.03
## Markdown語法
[Markdown文件](https://markdown.tw/)
## 字體大小
```
    # h1
    ## h2
    ### h3
    #### h4
    ##### h5
    ###### h6
    h1,h2會自動加上底線
```
# h1
## h2
### h3
#### h4
##### h5
###### h6
---
## 換行  
在字後面加上兩個空格

## 斜體  
``` 
*字字字* 
```  
*字字字*  

---  
## 粗體  
``` 
**字字字**  
```  
**字字字**  

---  
## 粗斜體  
``` 
***字字字*** 
```  
***字字字***  

---  
## 清單(有編號)  
``` 
1. 內容1
2. 內容2
3. 內容3
```  
1. 內容1
2. 內容2
3. 內容3  

---  
## 清單(沒編號)  
``` 
* 內容1
* 內容2
* 內容3
```  
``` 
- 內容1
- 內容2
- 內容3
```  
* 內容1
* 內容2
* 內容3

---  
## 引用  
``` 
> 今天天氣晴
```  
> 今天天氣晴

---  
## 水平線
```
--- #至少要三個-才會構成水平線
```
---  

## 超連結   
```
[虎科首頁](https://www.nfu.edu.tw/zh/)
```  
[虎科首頁](https://www.nfu.edu.tw/zh/)  

---
## 圖片
```
![LineGroup](https://raw.githubusercontent.com/Bighsueh/NFUReact2023/main/LineGroup.jpg)
```
![LineGroup](https://raw.githubusercontent.com/Bighsueh/NFUReact2023/main/LineGroup.jpg)  

---
## 程式碼1
```
    ```
    str = "hello world";
    ```
```
```
str = "hello world";
```

## 程式碼2
```
    `str = "hello world"`;
```
`str = "hello world"`;

---
## 表格
```  
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1, Column 1 | Row 1, Column 2 | Row 1, Column 3 |
| Row 2, Column 1 | Row 2, Column 2 | Row 2, Column 3 |
```  
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1, Column 1 | Row 1, Column 2 | Row 1, Column 3 |
| Row 2, Column 1 | Row 2, Column 2 | Row 2, Column 3 |

