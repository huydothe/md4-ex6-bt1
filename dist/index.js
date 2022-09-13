"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const multer_1 = __importDefault(require("multer"));
const port = 3000;
const app = (0, express_1.default)();
const upload = (0, multer_1.default)();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.get('/login', (req, res) => {
    res.render('login');
});
let user = {
    username: 'huydothe1999@gmail.com',
    password: '110699'
};
app.post('/login', upload.none(), (req, res, next) => {
    console.log(req.body);
    if (req.body.username === user.username && req.body.password === user.password)
        next('route');
    else
        next();
}, (req, res, next) => {
    res.render('denied');
});
app.post('/login', (req, res, next) => {
    res.render('success', { data: user });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map