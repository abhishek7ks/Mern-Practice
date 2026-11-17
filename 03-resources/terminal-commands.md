# 💻 Developer Terminal Cheat Sheet (PowerShell & Bash)

> **Pro Tip:** Terminal mein kisi bhi file ya folder ke shuru ke 2–3 letters likh kar **`Tab`** dabao — poora naam apne aap complete ho jayega.

---

## 1. Folder Navigation & Screen Clean

*PowerShell aur Bash (Linux/Mac) dono mein yeh commands 100% same hain.*

| Command | Kaam (Action) | Example |
| :--- | :--- | :--- |
| `pwd` | Check karo abhi kis folder ke andar ho | `pwd` |
| `ls` | Current folder ki saari files aur sub-folders dekho | `ls` |
| `cd <folder>` | Kisi folder ke andar jaane ke liye | `cd "5. Strings — Q116–Q140"` |
| `cd ..` | Ek folder peeche (baahar) aane ke liye | `cd ..` |
| `cd \` | Seedha root drive (`C:\`) par jaane ke liye | `cd \` |
| `cls` / `clear` | Terminal screen saaf karne ke liye | `cls` |

---

## 2. Files & Folders Banana / Delete Karna

| Kaam (Action) | PowerShell (Windows) | Bash (Git Bash / Linux) |
| :--- | :--- | :--- |
| **Naya folder banana** | `mkdir "folder-name"` | `mkdir "folder-name"` |
| **Nayi file banana** | `ni q116.js` | `touch q116.js` |
| **File VS Code mein kholna** | `code q116.js` | `code q116.js` |
| **File delete karna** | `rm q116.js` | `rm q116.js` |
| **Folder delete karna** | `rm -r folder-name` | `rm -rf folder-name` |
| **File copy karna** | `cp source.js dest.js` | `cp source.js dest.js` |
| **File move / rename karna** | `mv old.js new.js` | `mv old.js new.js` |

---

## 3. Bulk Files Automation (Ek Saath Multiple Files Banana)

* **PowerShell (Windows Default):**

  ```powershell
  116..140 | % { ni "q\$_.js" }
  ```
