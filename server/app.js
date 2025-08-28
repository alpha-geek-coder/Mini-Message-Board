import express from 'express';

import path from 'path';
import {indexRouter} from './routes/indexRouter.js';
import {messageRouter} from './routes/messageRouter.js';

// Step 1: Initialize app
const app = express();


const viewPath = path.join(process.cwd(), '..', "views");
app.set("views", viewPath);
app.set('view engine', 'ejs');

app.use(express.static('../public'))
app.use(express.urlencoded({ extended: true }));


// Step 2: Listen to port
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server started! listening on port ${PORT}`);
}
);

// Step 3 : Define routers

app.use('/message', messageRouter)
app.use("/", indexRouter);

// Step 4: Catch all global error handler


app.use((err, req, res, next) => {
  console.error(err.stack); // Log the stack trace
  res.status(404).render("404", { title: "404", error: err });
});