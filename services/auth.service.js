const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const usersService = require("./users.service");

passport.use(
  "signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, cb) => {
      const user = await usersService.findByUsername(username);
      if (user) {
        return cb(new Error("Ya existe el nombre de usuario"), false);
      } else {
        const newUser = await usersService.create({
          username,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null),
          name: req.body.name,
          email: req.body.email,
          avatar: req.body.avatar,
        });
        return cb(null, newUser);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(async (username, password, cb) => {
    const user = await usersService.findByUsername(username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      cb(new Error("Datos incorrectos"), false);
    } else {
      return cb(null, user);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, { username: user.username, name: user.name, avatar: user.avatar });
});

passport.deserializeUser(async (usr, cb) => {
  try {
    const user = await usersService.findByUsername(usr.username);
    return cb(null, user);
  } catch (error) {
    return cb(error, false);
  }
});


module.exports = passport;