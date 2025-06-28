//Examen PrograMovil
const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

const reviewRoutes = require('./routes/reviewRoutes');

dotenv.config();

app.use(cors());
app.use(express.json());


app.use('/reviews', reviewRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
