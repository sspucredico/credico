# **Встановленн & Розгортання проету** 
Встановити [VSCode](https://code.visualstudio.com/), [Git](https://git-scm.com/), [Node.js](https://nodejs.org/uk)

* Відкрити термінал в якійсь директорії та ввести 
    ``` 
    git clone git@github.com:sspucredico/sspucredico.github.io.git 
    ```
* В обраній директорії з'явиться папка **sspucredico.github.io**
* Викликати контекстне меню на директорії **sspucredico.github.io** > **Відкрити за допомогою VSCode**
* Відкрити інтегрований термінал **"CTRL + SHIFT +~"**
    ```
    npm install 
    ```
* **Внести змінити**

* Выдкрити інтерфейс GIT **"CTRL + SHIFT + G"**
    * Ввести коротке повідомлення яке характерезую внесені зміни 
    * Натиснути **Commit**
    * Натиснути **Sync Changes**
    * Авторизуватися на **GitHub**
* Перейти в інтегрований термінал та ввести 
    ```
    npm run deploy
    ```

# **Зміни**

Генерує лише за такою структурою: 3 Шаблона, кожен має 2 локалізації

## Файли:
    Примітка: Імена фалйлів завязані "жорстко", тобто можна міняти вміст, але не ім'я та розширення файла

### Дирикторія з наборами данних
    src/api/offline
    
Перелік файлів

```
    diploma.json
    parti.json
    mentor.json
```

### Дирикторія з зображеннями 
    src/api/offline/img  
    
Перелік файлів

```
    certmentor_EN.jpg
    certmentor_UA.jpg
    certpart_UA.jpeg
    certpart_EN.jpeg
    diploma_UA.jpeg
    diploma_EN.jpeg
```

### Конфігурація: 
    src/api/configuration.js

```javascript
    export const title = "Credico" // Назва
    export const configuration =  {
        participant: { //Шаблони [ certpart_UA.jpeg , certpart_EN.jpeg ]
            title: "Викладачам", //Назва пакету - буде відображатись на основній сторінці як тип ("Викладачам" / "Учасникам" / "Переможцям")
            mapping: {
                ua: { // Українська локалізація
                    nameUA: { // Назва поля в JSON з якого взяти данні (Чутливе до регістру)
                        pos: [0, 1080], // Позиція [x, y] (0, 0) - верхній лівий кут
                        fontsize: 150,  // Розмір шрифту
                        centerX: true,  // Відцентрувати по X
                        centerY: true    // Відцентрувати по X
                    }
                    ,
                    {
                        // ...
                    }
                },
                en : { // Англійська локалізація
                    // ...
                }
            }
        },
        mentor: { // Шаблони [ certmentor_EN.jpeg , certmentor_EN.jpeg ]
            // ...
        },
        diploma: { // Шаблони [ diploma_UA.jpeg , diploma_EN.jpeg ]
            // ...
        }
    }
```
