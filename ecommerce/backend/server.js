const express=require('express');
const cookieParser=require('cookie-parser');
// Add after other route imports


// Add cron job setup at the bottom before mongoose.connect
require('./cron/jobs');
const mongoose=require('mongoose');
const fileUpload = require('express-fileupload');

require('dotenv').config();
const app=express();

const port=5000;

app.use(fileUpload({
    useTempFiles: true
}));

app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.json({msg:"This is example"})
})

app.listen(port,()=>{
    console.log("Server is Running ...");
})

//routes
app.use('/user',require('./routes/useRoute'));
app.use('/api',require('./routes/categoryRoute'));
app.use('/api',require('./routes/productRoute'));
app.use('/api',require('./routes/upload'));
app.use('/api', require('./routes/activityRoute'));
//connect MongoDb
app.use('/api', require('./routes/testActivityRoute'));
const URI=process.env.MONGODB_URL;

console.log(URI);
mongoose.connect(URI)
.then(()=>{
    console.log("MongoDB Connected");
}).catch(err=>{
    console.log(err);
})


