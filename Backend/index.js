const express = require('express')
const connectToDatabase = require('./db.js')
const cors = require('cors')
const app = express()
const port = 5000
connectToDatabase();

app.use(cors());

app.use(express.json());

app.use('/api/', require('./Routes/User.js') )
app.use('/api/admin', require('./Routes/Admin.js') )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})