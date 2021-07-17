import express from 'express'
import mongoose from 'mongoose'
import Cards from './model/dbCards.js'
import cors from 'cors'

// App config
const app = express()
const port = process.env.PORT || 8000
const connectionURL = "mongodb+srv://dbMichael:mongopassword1234@cluster0.d8vlg.mongodb.net/tinderdb?retryWrites=true&w=majority"

// Add middleware 
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

// DB configuration
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})



// API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('Tinder API')
})

app.post('/tinder/cards', (req, res) => {
    const dbCard = new Cards (req.body)
    dbCard.save((err, card) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(card)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err)
        res.status(500).send(err)
        else
        res.status(200).send(data)
    })
})

// Listener configuration
app.listen(port, () => {
    console.log(`Tinder API listening on port ${port}`)
})
