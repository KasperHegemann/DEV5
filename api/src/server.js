const express = require('express');
const api = require('./index');



const PORT = 8888;


api.listen(PORT, () => {
    console.log(`running at localhost:${PORT}`);
});

//niets meer toevoegen