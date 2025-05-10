const express =require('express');
const proverbsRoutes = require('./routes/proverbs');
const app= express(); 
const PORT = 300;

app.use(express.json());
app.use('/proverbs',proverbsRoutes);

app.listen(PORT,() => {
    console.log('Server is running at http://localhost: ${PORT}');
})