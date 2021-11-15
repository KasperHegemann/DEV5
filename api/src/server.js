const express = require('express');
const app = require('./index');



const PORT = 8888;


app.listen(PORT, () => {
    console.log(`running at localhost:${PORT}`);
});

//niets meer toevoegen