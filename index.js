import { userRouter, express } from './controller/usersController.js'
import { productRouter } from './controller/ProductsController.js'
import cors from 'cors'
import path from 'path'
// Create an express app
const app = express()
const port = +process.env.PORT || 4000
// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true
    }),
    cors()
)
app.get('^/$|/NodeEOMP', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/index.html'))
})
app.get('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource not found'
    })
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})


// import { userRouter, express } from "./controller/usersController.js";
// import { productRouter} from  "./controller/ProductsController.js";
// import cookieParser from "cookie-parser";
// import {errorHandling} from "./middleware/errorHandler.js"
// import path from "path"
// import cors from "cors"
// import {config} from "dotenv"
// config()
// const app = express()
// const port = +process.env.PORT ||4000
// app.use((req, res, next) =>{
//   res.header("Access-control-Allow-Origin", "*");
//   res.header("Access-control-Allow-Credentials", "true");
//   res.header("Access-control-Allow-Methods", "*");
//   res.header("Access-control-Request-Methods", "*");
//   res.header("Access-control-Allow-Headers", "*");
//   res.header("Access-control-Expose-Headers", "Authorization");
//   next()
// })
// app.use(
//     express.static('./static'),
//     express.json(),
//     express.urlencoded({
//         extended: true,
//     }),
//     cookieParser(),
//     cors()
// )
// app.get('^/$|/node_app', (req, res) => {
//     res.status(200).sendfile(path.join(__dirname, './static/index.html'))
// })
// app.use('/users', userRouter)
// app.use('/products', productRouter)
// app.use(errorHandling)
// app.listen(port, ()=>{
//     console.log(`Server is running on port ${port}`)
// })
