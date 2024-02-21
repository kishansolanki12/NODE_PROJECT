require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const colors = require('colors');

const Admin = require('./routes/adminRoute/admin.routes');
const User = require('./routes/userRoute/user.routes');
const userProduct = require('./routes/userRoute/product.user.routes');
const adminProduct = require('./routes/adminRoute/product.admin.routes');
const Favorite = require('./routes/userRoute/favorite.user.routes');
const Cart = require('./routes/userRoute/cart.user.routes');
const cartAdmin = require('./routes/adminRoute/cart.admin.routes');
const Order = require('./routes/userRoute/order.user.routes');

const port = process.env.PORT;
const dbUrl = process.env.MONGO_URL;

app.use(express.json());

app.use('/api/admin', Admin);
app.use('/api/admin/product',adminProduct);
app.use('/api/admin/cart',cartAdmin);

app.use('/api/user', User);
app.use('/api/user/product',userProduct);
app.use('/api/user/favorite',Favorite);
app.use('/api/user/cart',Cart);
app.use('/api/user/cart/order',Order);


app.listen(port, () => {
    mongoose.connect(dbUrl)
        .then(console.log("Database connected"))
        .catch(err => console.log(err));
    console.log("Server is start....".rainbow);
});
