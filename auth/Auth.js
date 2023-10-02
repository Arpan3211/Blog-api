export const authPage = (req, res, next) => {
    const { username, password } = req.body;
    if (username === "arpan" && password === "arpan") {
        return next();
    } else {
        res.status(500).json({ error: "Invalid Username or Password" });
    }
};
