//Examen PrograMovil
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const reviewRoutes = require('./routes/reviewRoutes');

app.use(cors());
app.use(express.json());
app.use('/reviews', reviewRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

const supabase = require('./supabaseClient');