# 第二周：Git觀念
## Git觀念

![Git架構](https://s4.itho.me/sites/default/files/images/708-%E5%B0%81%E9%9D%A2-P29-600-1.png)  
[圖源-ithome](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ithome.com.tw%2Fnews%2F95283&psig=AOvVaw3E5JQHFqlVuIoiZf0kePAv&ust=1679728599693000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDn2eWC9P0CFQAAAAAdAAAAABAE)  

### Git是甚麼
Git 是一種版本控制系統，它用於追蹤文件的更改，並協調多個人之間的工作。Git 常用於軟件開發，但也可以用於管理任何種類的文件。Git 是一個分散式版本控制系統，這意味著每個開發者都可以在本地存儲完整的 Git 存儲庫。Git 允許開發者在本地進行更改，然後將這些更改推送到遠程存儲庫中，或者從遠程存儲庫中拉取更改到本地。  

Git 使用分支來管理代碼庫的不同版本。每個分支代表一個不同的開發方向或特性。當開發人員需要創建一個新特性或修復錯誤時，他們可以在分支上進行這些更改，而不影響主要分支或其他分支。一旦更改完成並經過測試，開發人員可以合併分支，將更改應用到主要代碼庫中。 -ChatGPT 2023.03


---
### Git三大區塊
1. Working Directory
2. Staging Area
3. Repository

---
### Git常用語法
* `git init`  
建立 git
* `git clone`  
複製遠端repository到本地端上  
* `git status`  
查看本地端git狀態  
* `git commit -m "commit內容"`  
將異動資料從Working Directory 提交(commit)到 Staging Area，並設定commit message  
* `git push`  
將已經Commit的資料推送(push)到遠端的repository  
* `git status`  
查看本地端未commit檔案的異動狀態  
* `git fetsh`  
更新遠端Repository的異動資訊  
* `git log`  
查看git commit 紀錄及訊息  
* `git checkout [HASH]`
切換到指定的commit

### Merge, Rebase, Branch參考資料
1. [Git Merge Branch](https://www.maxlist.xyz/2020/05/02/git-merge-rebase/)  
2. [Git Branch](https://ithelp.ithome.com.tw/articles/10231008)  

---
### Github 是甚麼
GitHub 是一個基於 Git 的代碼托管平台，它提供了一個雲端存儲庫來存儲軟件代碼、文檔、圖像、數據等各種數字內容。GitHub 通過提供一個 Web 界面，讓開發者和開源社區可以方便地共享、協作和控制版本。GitHub 是世界上最大的代碼托管平台之一，擁有超過 4000 萬用戶和 1000 萬存儲庫，並且一直是開源軟件開發的重要基礎。 -ChatGPT 2023.03

### Github Fork是甚麼
GitHub 的 fork 功能允許用戶複製別人的repository到自己的帳戶中，並且在自己的帳戶中進行修改和更新。

1. 複製repository:  
    複製其他用戶的repository  

2. 修改repository:  
    在不更改其他用戶的原始碼的情況下更改repository

3. 保持同步:  
    將自己的repository與其他用戶的repository保持同步
    
4. 發送合併請求:  
    將自己的repository同步到原始碼擁有者的repository




