import express, {ErrorRequestHandler} from 'express';
import 'express-async-errors'
import {json} from "body-parser";

import {currentUserRouter} from "./routes/current-user";
import {signInRouter} from "./routes/sign-in";
import {signOutRouter} from "./routes/sign-out";
import {signUpRouter} from "./routes/sign-up";
import {errorHandler} from "./middleware/error-handler";
import {NotFoundError} from "./errors/not-found-error";

const app = express();
app.use(json());



app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);


app.all("*",async (req,res,next)=>{

    throw new NotFoundError();
})


app.use(errorHandler as ErrorRequestHandler);


app.listen(3000, () => {
    console.log('Server(Auth Service) 3000');
});