const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');

const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')
const contactRouter = require('./routers/contactRouter')
const reviewRouter = require('./routers/reviewRouter')
const orderRouter = require('./routers/orderRouter')
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/review', reviewRouter);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
