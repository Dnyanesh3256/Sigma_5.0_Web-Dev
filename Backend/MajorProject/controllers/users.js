const User = require("../models/user.js");

module.exports.signupForm = (req, res) => {
    res.render(("users/signup.ejs"));
}

module.exports.signup = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        let newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch(err){
        req.flash("error", "The user of this username already exists!");
        res.redirect("/signup");
    }
}

module.exports.loginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }

        req.flash("success", "You are logged out now!");
        res.redirect("/listings");
    });
}