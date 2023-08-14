const express = require("express");
const app = express(); // express fonksiyonunu çağırarak nesne oluşturuluyor

app.set('view engine', 'ejs');
app.use(express.static('public'));

const port = 3000;

// Routes
app.get('/', (req, res) => {
    res.status(200).render("index", { page_name: "index" });
});
app.get('/about', (req, res) => {
    res.render('about', { page_name: 'about' }); // Sayfa adını veri olarak iletiyoruz
});




app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
});
