

//here we will be having callback functions


const defaultRoute = (req, res) => {
    res.status(200).send("Hello from the Vercel !");
}


const homeRoute = (req, res) => {
    res.status(200).send("This is Home Route !");
}


const loginRoute = (req, res) => {
    res.status(201).send("Login Route from vercel !");
}

export { defaultRoute, homeRoute, loginRoute };
