const express = require("express");
const app = express(); // express fonksiyonunu çağırarak nesne oluşturuluyor

const port = 3000;

app.get('/', (req, res) => {
    res.send('Merhaba, Express!');
});

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
});
