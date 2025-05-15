const express = require(express);
const app = express();
const path = require('path');

app.use(express.static(__dirname));

const PORT = 5600;

app.listen(PORT, () => {
    console.log(`Server işə düşdü: http://127.0.0.1:${PORT}`);
})