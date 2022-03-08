import express from "express";
import morgan from 'morgan';
import activate_locals_middleware from "./middlewares/locals.mdw.js";
import activate_view_middleware from "./middlewares/view.mdw.js";
import activate_route_middleware from "./middlewares/routes.mdw.js";


const app=express();
const port = 3000

app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));


activate_locals_middleware(app)
activate_view_middleware(app)
activate_route_middleware(app)

app.listen(port,function (){
    console.log(`Example app listening on port at http://localhost:${port}`)
});