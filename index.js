const express=require('express');
const quotes=require('./store/quotes')
const app=express();

//console.log(quotes);
//Routes
app.get("/",(req,res)=>{
    res.status(200).sendFile(__dirname+ '/views/home.html');
    //console.log("Hello World");

})

app.get("/quotes/random",(req,res)=>{
    res.status(200).json(quotes[Math.floor(Math.random()*quotes.length)]);

})

app.get("/quotes",(req,res)=>{
    res.status(200).json(quotes);

})

app.get("/quotes/search",(req,res)=>{
    const serach=req.query.author;
    const filteredQuotes=quotes.filter((quote)=>{
        return quote.quotes.toLowerCase().includes(serach.toLowerCase())||quote.author.toLowerCase().includes(serach.toLowerCase())

    });
    res.status(200).json(filteredQuotes);
})


/**
 * APP CONFIG
 */
app.listen(3000,()=>{
    console.log("Server connected to 3000 port");
});