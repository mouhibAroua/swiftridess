const express = require('express')
const company = require('./models/company')
const users = require('./models/users')
const cars = require('./models/vehicles')
const chat = require('./models/chat')
const feedback = require('./models/feedback')
const userHasCars = require('./models/user_carss')
const userRoutes=require('./routes/usersRoute.js')
const companyRoutes=require('./routes/companyRoute.js')

const PORT = 3000
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))



app.use('/api',userRoutes)
app.use('/api',companyRoutes)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})