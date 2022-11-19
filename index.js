import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

//PER RICHIESTE POST CON BODy using json data
dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use('/', usersRoutes)


app.get('/', (req, res)=> {
    console.log('hello node')
    res.send('hello home')
})
app.listen(process.env.PORT, () => {
    console.log('Server running on port 5001')
})