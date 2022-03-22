const express = require('express');
const app = express();

app.listen(3000, () => console.log('Port 3000 - Listen'));

app.get('/hello', (req, res) => {
    res.send('Hello Friend.');
});