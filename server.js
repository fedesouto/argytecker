const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const { default: mongoose } = require("mongoose");
const passport = require("passport");
const {mongodb_uri,session_secret} = require('./config')
const tasksRouter = require("./routes/tasks.routes");
const authRouter = require("./routes/auth.routes");
const uiRouter = require("./routes/ui.routes");
const isLoggedIn = require("./middlewares/auth.middleware");
const SQLiteStore = require("connect-sqlite3")(session);

const morgan = require("morgan");

const app = express();

app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    store: new SQLiteStore(),
    secret: session_secret,
    saveUninitialized: false,
    resave: false,
    rolling: true,
    cookie: {
        maxAge: 100000
    }, 
}))
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/img", express.static("img"))
app.get("*", isLoggedIn)
app.use('/', uiRouter)
app.use("/api/tasks", tasksRouter);
app.use(express.static("public"));



mongoose.connect(mongodb_uri).then(payload => {
    console.log('connected to DB!')
    app.listen(8080, () => console.log("server listening!"));
})
