const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000

app.use(express.static('views'));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname = "./views/partials")

app.get('/download', function(req, res){
    const file = __dirname + '/files/catalog.docx'; // путь к файлу, который нужно скачать
    res.download(file); // отправляем файл в качестве ответа
});

app.use("/about", function(request, response){
    response.render("about.hbs");
});

app.use("/contact", function(request, response){
    response.render("contact.hbs");
});

app.use("/galery", function(request, response){
    response.render("galery.hbs");
});

app.use("/", function(request, response){
    response.render("index.hbs")
});

app.listen(port, () => console.log (`Сервер запущен на ${port} хосте!`));