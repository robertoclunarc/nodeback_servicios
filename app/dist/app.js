"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//rutas
const compras_routes_1 = __importDefault(require("./routes/compras/compras.routes"));
//Inicialitizations 
const app = express_1.default();
app.set("port", process.env.PORT || 3000);
const fetch = require("node-fetch");
//middleeares
app.use(morgan_1.default("dev"));
//app.use(express.urlencoded({extended: false}));
app.use(express_1.default.json());
app.use(cors_1.default());
//app.use(async (req, resp, next) => {
//console.log('Time:', Date.now());
//resp.set('X-XSS-Protection', "0");
//console.log("headers : ", JSON.stringify(req.headers));
//const f_response = await fetch(`https://jsonplaceholder.typicode.com/posts`); 
//const f_response = await fetch(`http://localhost:3000/api/auth/verify`);
//console.log("Resp", JSON.stringify(f_response));  
//req.header('Access-Control-Expose-Headers');
//req.body = {json:"auth"}; 
//next();
//})
//rutas
app.use(compras_routes_1.default);
app.get("/", (req, resp) => {
    resp.send("Server http ON!");
});
app.listen(app.get("port"));
console.log("Server express on port:", app.get("port"));