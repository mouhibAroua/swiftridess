const express = require('express')
console.log("test");
const company = require('./models/company')
const users = require('./models/users')
const cars = require('./models/vehicles')
const chat = require('./models/chat')
const feedback = require('./models/feedback')
const userHasCars = require('./models/user_carss')
const Cart =require ('./models/cart.js')
const product = require ('./models/product.js')
const userRoutes=require('./routes/usersRoute.js')
const companyRoutes=require('./routes/companyRoute.js')
const loginRoutes=require ('./routes/loginRoute.js')
const signupRoutes=require('./routes/singupRoute.js')
const loginRouterUser=require('./routes/LoginRouteUser.js')
const signupRouterUser=require('./routes/SignupRouteUser.js')
const CartRouter=require('./routes/RoutesCart');
const prodRouter = require('./routes/RoutsProduct.js')
const PORT = 3000
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))


//user routes
app.use('/api',loginRouterUser)
app.use('/api',signupRouterUser)
app.use('/api/cart',CartRouter)
app.use('/api/products',prodRouter)
//company routes
app.use('/api',loginRoutes)
app.use('/api',signupRoutes)


app.use('/api',userRoutes)
app.use('/api',companyRoutes)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})