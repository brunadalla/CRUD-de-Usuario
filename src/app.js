import express from "express";
import "dotenv/config"

const app = express();
app.use(express.json());
    
const PORT = process.env.PORT || 3000   

app.get('/', (req, res) => {
    return res
    .status(200)
    .json({
        message: "está funcionando"
    })
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
});

export default app