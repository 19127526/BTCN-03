import {dirname} from "path";
import {fileURLToPath} from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
export default function (app) {

    app.get('/', function (req, res ){
        let x=req.query.x||0
        let y=req.query.y||0
        let noti=req.query.noti||0;
        const z=req.query.z||0
        if(z==="cong"){
            console.log(z)
            x=parseFloat(x)
            y=parseFloat(y)
            res.render('index',{
                x:x,
                y:y,
                ketqua:x+y,
                noti:noti
            })
        }
        else if(z==="tru"){
            res.render('index',{
                x:x,
                y:y,
                ketqua:x-y,
                noti:noti
            })
        }
        else if(z==="nhan"){
            res.render('index',{
                x:x,
                y:y,
                ketqua:x*y,
                noti:noti
            })
        }
        else if(z==="chia"){
            res.render('index',{
                x:x,
                y:y,
                ketqua:x/y,
                noti:noti
            })
        }
        else
        {
            res.render('index',{
                x:x,
                y:y,
                noti:noti
            })
        }

    });



    app.get('/err', function (req, res ){
        throw new Error('Error!')
    });


    app.use(function (freq, res, next) {
        res.render('404',{layout:false});
    });


}