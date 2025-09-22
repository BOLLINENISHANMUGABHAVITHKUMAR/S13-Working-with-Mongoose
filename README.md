# Node.js Course - S13 Working with Mongoose

Practice code for Section 13 - Working with Mongoose, part of the course "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)" by Maximilian Schwarzmüller.

This project covers:
- Setting up and configuring Mongoose as an ODM _(Object Data Modeling)_ library for MongoDB
- Defining schemas and models to structure MongoDB collections
- Applying built-in validation rules on schema fields
- Working with instance and static methods on models
- Using queries and Mongoose helpers to perform **CRUD** operations
- Creating and handling relationships between documents _(references and population)_
- Managing environment variables for connection configuration
- Running MongoDB locally with Docker Compose and connecting to MongoDB Atlas for production

# Project type
- Independently implemented while following a Node.js course, writing all functionalities from scratch and extending the project with personal improvements.

## Tech Stack
- Node.js
- Express.js
- JavaScript (ES6+)
- Mongoose
- MongoDB Atlas
- Docker
- dotenv
- Nodemon
  
# How to Run

### 1) Clone the repo
```bash
git clone https://github.com/S13-Working-with-Mongoose
cd ./S13-Working-with-Mongoose
```

---

### 2) Environment variables

#### 2.1) Copy the example file
```bash
cp .env.example .env
```
> Note: **`USE_MONGODB_ATLAS`** variable must be set to _`false`_

---

## 3) Run the app via Docker (already installed)

#### 1. Make sure your Docker app is running

#### 2. Start MongoDB with Docker Compose
   ```bash
   npm run db:start
   ```
   - Creates database `shop` with `docker compose up -d`

#### 3. Install dependencies
   ```bash
   npm install
   ```

#### 4. Run the app
```bash
node .\app.js
```

#### 5. Stop the container
   ```bash
   npm run db:down
   ```
> Runs `docker compose down -v`

#### 5. Reset database (remove data + re-run init scripts)
   ```bash
   npm run db:reset
   ```
> Runs `docker compose down -v && docker compose up -d`

---

## Testing DB Connection
A helper script is included to quickly test DB connectivity

```bash
npm run test:db
```
> Runs `node scripts/test-db.cjs`

Expected output:
```

===== DB connection OK =====
--- Product data: --- [
  {
    _id: new ObjectId('68c5a0d9f45e62ed9233c5d3'),
    title: 'Physical picture of a kitty',
    price: 0.99,
    description: 'kitty',
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/002/098/203/small/silver-tabby-cat-sitting-on-green-background-free-photo.jpg',
    userId: new ObjectId('68c59cebf2b7f6e17ff9ea08')
  },
  {
    _id: new ObjectId('68c32686af5c529e81421f78'),
    title: 'A book!',
    price: 12.99,
    description: 'Funny-colored',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDXr4is7-bVjWtE-TI4q-l0jHX0SPN4_4Uw&s',
    userId: new ObjectId('68c59cebf2b7f6e17ff9ea08')
  },
  {
    _id: new ObjectId('68c32686af5c529e814266e1'),
    title: 'Red apple',
    price: 2.99,
    description: 'Do not combine with a pen',
    imageUrl: 'https://i5.walmartimages.com/seo/Fresh-Red-Delicious-Apple-Each_7320e63a-de46-4a16-9b8c-526e15219a12_3.e557c1ad9973e1f76f512b34950243a3.jpeg',
    userId: new ObjectId('68c59cebf2b7f6e17ff9ea08')
  },
  {
    _id: new ObjectId('68c495a27829b9cab975da81'),
    title: 'Pen',
    price: 249.99,
    description: 'Pure prestige',
    imageUrl: 'https://www.faber-castell.pl/-/media/Products/Product-Repository/Miscellaneous-ballpoint-pens/24-24-05-Ballpoint-pen/143499-Ballpoint-Pen-Basic-M-black/Images/143499_0_PM99.ashx?bc=ffffff&as=0&h=900&w=900&sc_lang=pl-PL&hash=0552B329890216C4F517A47B7B261E90',
    userId: new ObjectId('68c49525baa988da36319592')
  }
]
--- "Logged-in" user data: --- [
  {
    cart: { items: [] },
    _id: new ObjectId('68c59cebf2b7f6e17ff9ea08'),
    name: 'Igor',
    email: 'test@example.com'
  }
]
--- User data: --- [
  {
    cart: { items: [] },
    _id: new ObjectId('68c59cebf2b7f6e17ff9ea08'),
    name: 'Igor',
    email: 'test@example.com'
  },
  {
    cart: { items: [] },
    _id: new ObjectId('68c49525baa988da36319592'),
    name: 'Ben',
    email: 'yees@example.com'
  }
]

```

---

## NPM Scripts

- **`npm start` / `node .\app.js`** → start the Node app
- **`npm run test:db`** → run DB connectivity test (`scripts/test-db.mjs`)
- **`npm run db:up`** → start MongoDB container in background
- **`npm run db:down`** → stop MongoDB container
- **`npm run db:reset`** → reset database (drop volume + re-init)

---

## Notes
- `.env` is ignored by Git; only `.env.example` is committed
- **`USE_MONGODB_ATLAS`** in `.env` variable must be set to _`false`_
