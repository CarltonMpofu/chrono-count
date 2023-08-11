require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); 
app.use(express.static("public"));

mongoose.set("strictQuery", false);

// Connect to database
// mongoose.connect('mongodb://127.0.0.1:27017/birthdayDB');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})

// Create model
const birthdaySchema = new mongoose.Schema({title: String, date:String});
const Birthday = mongoose.model("Birthday", birthdaySchema);

// Root route
app.get("/", async function(req, res)
{
    try
    {   
        const days = await Birthday.find({});
        if(days)
        {
            res.render("index", {user_days: days});
        }
    }
    catch(error)
    {
        res.send(error)
    }   
});


// Go to page for adding birthdays
app.get("/add-day", function(req, res)
{
    res.render("addDay");
});

// Create a new birthday
app.post("/add-day", async function(req, res)
{
    const title = req.body.title;
    const date = req.body.date;

    try
    {
        const newBirthday = new Birthday({title: title, date:date});
        await newBirthday.save();
        res.redirect("/");
    }
    catch(error)
    {
        res.send(error);
    }

});

// app.listen(3000, function(){
//     console.log("Server running on port 3000");
// });
