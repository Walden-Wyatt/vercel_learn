import e from "express";

const app = e();

app.use(e.json());

app.get('/', (req, res) => {
    res.status(200).send("Hello from the Vercel !");
})

app.listen(4444, () => {
    console.log("Server is Running on PORT 4444");
});
