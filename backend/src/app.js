// create server

const express = require("express");
const cookieparser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes')
const foodRoutes = require("./routes/food.routes");
const cors = require("cors");

const orderRoutes  = require("./routes/order.routes")


const app = express();

app.use(cors({
    origin: "http://localhost:5173", // frontend
    credentials: true               // cookies allow
}));



app.use(cookieparser());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("hello world")
})
app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);



app.use("/api/orders", orderRoutes);

module.exports = app;