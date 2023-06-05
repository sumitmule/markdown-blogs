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

![image](https://github.com/sumitmule/markdown-blogs/assets/111048440/dc4c200c-ba70-4cb2-8ae0-754cce21e84e)

<br>

![image](https://github.com/sumitmule/markdown-blogs/assets/111048440/0ded43f3-26f7-4158-a34b-35a5d9d13595)

<br> 

### Things implemented in this project :
- getting more familiar with express.js
- learned about MVC model and its folder structure
- use of markdown format to display articles

> The website can be improved by implementing login functionality and more personalized features for users. 👨🏻‍💻
