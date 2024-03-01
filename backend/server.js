import  express  from "express";

const app = express();


app.get( '/' , (req,res) =>{
    res.send('lests go');
});

app.get( '/api/jokes' , (req,res) =>{
    const jokes = [
        {
            id:1,
            title:"mast joke mara"
        },
        {
            id:2,
            title:"ye hass re kutrya"
        },
        {
            id:3,
            title:"Ha ha Ha Ha"
        },
    ]
    res.send(jokes);
});
const port = process.env.PORT|| 3000;

app.listen( port, ()  =>{
    console.log(`server runnig at : ${port}` );
})