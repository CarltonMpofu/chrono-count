const express = require("express");
const mongoose = require("mongoose");
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); 
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/birthdayDB');

const birthdaySchema = new mongoose.Schema({title: String, date:String});

const Birthday = mongoose.model("Birthday", birthdaySchema);

app.get("/", async function(req, res)
{
    try
    {
        const days = await Birthday.find({});
        if(days)
        {
            // days.forEach(day => {
            //     console.log(day);
                
            // });
            res.render("index", {user_days: days});
        }
    }
    catch(error)
    {
        console.log(error)
    }

    

    
    
});

app.get("/add-day", function(req, res)
{
    res.render("addDay");
});

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

app.listen(3000, function(){
    console.log("Server running on port 3000");
});
