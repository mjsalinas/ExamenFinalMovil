const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const reviewRoutes = require('./routes/reviewRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
