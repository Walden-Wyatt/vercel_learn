import e from "express";
import router from "./routes/routes";

const app = e();

app.use(e.json());
app.use(router);

// app.get('/', (req, res) => {
//     res.status(200).send("Hello from the Vercel !");
// });

// app.get("/home", (req, res) => {
//     res.status(200).send("This is home page")
// });

// app.post("/login", (req, res) => {
//     res.status(201).send("Login successful !")
// });

app.listen(4444, () => {
    console.log("Server is Running on PORT 4444");
});
