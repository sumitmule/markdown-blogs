# Markdown Blogs
A blogging website📄 with MongoDB connectivity that supports Markdown format and CRUD operations on the blogs

The website has a simple interface. The home page shows all articles on the website. Users can Create new articles, Edit and Delete previously created articles.
For convinient blogging experience the site supports Markdown format to write blogs. 📰📜

### Tech/Frameworks used : 

> The **MVC model** (model-view-controller) was used for this project.

1. Language : HTML, CSS, Javascript
2. Library :
      - express : for server and routing
      - nodemon
      - ejs : as a view engine
      - mongoose : to connect to MongoDB
      - marked : to convert markdown to html
      - slugify : to create slugs for articles (to avoid use of random ids)
      - method-override : to use DELETE/PUT with a form
      - dompurify , jsdom : to purify the markdown sent from user (check for manually added html)
3. Database : MongoDB

### Screenshots :

![image](https://github.com/sumitmule/markdown-blogs/assets/111048440/ab9f440b-adb2-43bb-8553-5a60f668a0e2)

<br>

![image](https://github.com/sumitmule/markdown-blogs/assets/111048440/77c6305e-a64b-4877-9d6f-9e60c47e6c31)

<br> 

### Things implemented in this project :
- getting more familiar with express.js
- learned about MVC model and its folder structure
- use of markdown format to display articles

> The website can be improved by implementing login functionality and more personalized features for users. 👨🏻‍💻
