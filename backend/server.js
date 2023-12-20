const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const routes=require('./routes/TodoRoute')
const uri = "mongodb+srv://msoram7377:Oram4531md@cluster0.p1f46hy.mongodb.net/";

app.use(express.json());
app.use(cors());
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

    app.use(routes)



app.listen(3000,()=>{
    console.log("Server listening at 3000...")
})
