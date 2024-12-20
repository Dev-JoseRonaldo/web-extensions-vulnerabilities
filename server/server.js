const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-password', (req, res) => {
    const { password } = req.body;
    console.log(`Senha recebida: ${password}`);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
