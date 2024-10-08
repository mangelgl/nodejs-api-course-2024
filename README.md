# Endpoint API in NodeJS

## Website Documentation

- <https://mangelgl.github.io/devmaga-api/>
- Postman: <https://documenter.getpostman.com/view/23289394/2sAXjDcuG7>

## Usage

- Rename the file `env.template` to `.env` and change environment variables.
- [Install dependencies](#install-dependencies)
- [Run the Application](#run-the-application)

## Install Dependencies

```bash
npm i
```

## Run the Application

Once dependencies have installed, run the following command:

```bash
npm run dev
```

## Seeders

To fill the database with data, run the following command:

```bash
node seeder --import
```

You can use the flag `-i` too.

To destroy the data, run the following command:

```bash
node seeder --delete
```

You can use the flag `-d` too.

## Commit Content

1. Initial Express setup
2. Using Express Routes
3. Creating Controller Methods to Routes
4. Intro to Middlewares
5. Connecting to Mongo Atlas Database & Paintint Colors on console logs
6. Creating first Model
7. Create Bootcamp - POST
8. Fetching Bootcamps - GET
9. Updating & Deleting Bootcamps - PUT & DELETE
10. Error handling
11. Async/Await Middleware
12. Slugify the name for url for better SEO
13. GeoJSON
14. Database Seeders
15. Get Bootcamps By Radius - GET
16. Advanced Filtering
17. Select, Sort & Pagination
18. Course Model & Seeder
19. Course Routes & Controller
20. Populate, Virtuals & Cascade Delete
21. Add, Update & Delete Course - POST PUT PATCH
22. Aggregate - Calculating Average Course Cost
23. File Uploads
24. Advanced Results (Select, Pagination, Sorting) in Middleware
25. User Model & Register & Encryption Password
26. JWT
27. USer Login
28. Sending JWT Token to Browser Cookies
29. Protect Routes with Auth Middleware
30. Role Authorization
31. Bootcamp & User Relationship
32. Bootcamp & Courses Ownership
33. Reset password Feature
34. Update User Details
35. Users (Admin) CRUD Feature
36. Parameterized environment variables
37. Review Model & Controller
38. Logout to Clear Token Cookie
39. Prevent NoSQL Injection & Sanitize Data
40. XSS Protection & Security Headers
41. Rate limiting, HPP & CORS
42. Postman Documentation & Docgen

## NPM Packages

- express - <https://www.npmjs.com/package/express>
- dotenv - <https://www.npmjs.com/package/dotenv>
- morgan - <https://www.npmjs.com/package/morgan>
- mongoose - <https://www.npmjs.com/package/mongoose>
- colors - <https://www.npmjs.com/package/colors>
- slugify - <https://www.npmjs.com/package/slugify>
- node-geocoder - <https://www.npmjs.com/package/node-geocoder>
- fileupload - <https://www.npmjs.com/package/express-fileupload>
- bcryptjs - <https://www.npmjs.com/package/bcryptjs>
- jsonwebtoken - <https://www.npmjs.com/package/jsonwebtoken>
- cookie-parser - <https://www.npmjs.com/package/cookie-parser>
- nodemailer - <https://www.npmjs.com/package/nodemailer>
- express-mongo-sanitize - <https://www.npmjs.com/package/express-mongo-sanitize>
- helmet - <https://helmetjs.github.io/>
- xss-clean - <https://www.npmjs.com/package/xss-clean>
- express-rate-limit - <https://www.npmjs.com/package/express-rate-limit>
- hpp - <https://www.npmjs.com/package/hpp>
- cors - <https://www.npmjs.com/package/cors>
- docgen - <https://github.com/thedevsaddam/docgen>

## Information Links

- Async/Await Middlewares in Express - <https://www.acuriousanimal.com/blog/20180315/express-async-middleware>
- Mongoose Radius Filtering - <https://www.mongodb.com/docs/manual/reference/operator/query/centerSphere/>
- Mongoose Quantity Filtering - <https://www.mongodb.com/docs/manual/reference/operator/query/gt/>
- Mongoose Select Fields - <https://mongoosejs.com/docs/queries>
- JSON Web Token Debugger - <https://jwt.io>
- Fake SMTP Server for Mails - <https://mailtrap.io/>
- Hacking NodeJS and MongoDB (NoSQL Injection) - <https://blog.websecurify.com/2014/08/hacking-nodejs-and-mongodb>
