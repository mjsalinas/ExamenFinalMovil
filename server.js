const express = require('express');
const cors = require('cors');
const app = express();
const reviewRoutes = require('./routes/reviewRoutes');

app.use(cors());
app.use(express.json());


app.use('/reviews', require('./routes/reviewRoutes'));
app.use('/auth', require('./routes/authRoutes'));

//ProyectoJesus
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

