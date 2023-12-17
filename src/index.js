const express = require ("express");
const mongoose = require("mongoose");
require ("dotenv").config();
const userRoutes = require ("./routes/users");
const movieRoutes = require ("./routes/movies");
const preferencesRoutes = require ("./routes/preferences");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use('/api', userRoutes );
app.use('/api', movieRoutes);
app.use('/api', preferencesRoutes);

//routes
app.get('/', (req,res) => 
    res.send('Welcome to Prime ESIC API')
)

//mongoose connection
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("Connected to MongoDB Atlas")).catch ((error) => console.error(error));

app.listen(port, () => console.log("Server listening on port ", port));
