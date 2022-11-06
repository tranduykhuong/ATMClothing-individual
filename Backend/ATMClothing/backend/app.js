const express = require('express');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const servicesRoutes = require('./routes/serviceRoutes');
const addressRouter = require('./routes/addressRoutes');
const searchRoutes = require('./routes/searchRoutes');

const limiter = rateLimit({
  // limiter is now become a middleware function
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try this again in an hour!',
}); // define how many requests per IP we are going to allow in a certain of time

const app = express();
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({ limit: '10mb' }));

// ROUTES
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/carts', cartRouter)
app.use('/api/v1/orders', orderRoutes)
app.use('/api/v1/services', servicesRoutes)
app.use('/api/v1/addresses', addressRouter)
app.use('/api/v1/search', searchRoutes)

module.exports = app;
