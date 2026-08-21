const express = require("express");
// const {users} = require("../data/users.json");
// const router = express.Router();
//const {books} = require("./data/books.json");

const userRouter = require("./routes/users.js");
const booksRouter = require("./routes/books.js");

const app = express();
const PORT = 8081;
app.use(express.json());

app.get("/", (req, res)=>{ 
  res.status(200).json({ //we can use send as well but we cant use multiple data when use send
    message: "Server is up and running :-)",
    data: "hey"
  });
});

app.use("/users", userRouter);
app.use("/books", booksRouter);

app.get("/*splat", (req,res)=>{ 
  res.status(404).json({ 
    message: "This root doesn't exist"
  });
});

app.listen(PORT, ()=>{ 
    console.log(`Server is running at port ${PORT}`);
});