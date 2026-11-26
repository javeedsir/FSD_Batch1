
import express from 'express'
const app = express();
const PORT = 3000;
app.all('/user', function (req, res) {
    console.log(`${req.method} request received`);
    res.send(`Handled ${req.method} request`);
});
app.listen(PORT, function () {
    console.log(`Server listening on PORT ${PORT}`);
});
