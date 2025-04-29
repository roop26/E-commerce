const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');

const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')
const contactRouter = require('./routers/contactRouter')
const reviewRouter = require('./routers/reviewRouter')
const orderRouter = require('./routers/orderRouter')
const paydetailRouter = require('./routers/paydetailRouter')
const razorpayRouter = require('./routers/razorpayRouter')

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(express.json())

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/review', reviewRouter);
app.use('/paydetail', paydetailRouter);
app.use('/contact', contactRouter);
app.use('/order', orderRouter);
app.use('/pay', razorpayRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
