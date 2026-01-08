import "dotenv/config";

import express from 'express';
import rootRouter from "@routes/index";

const PORT: number = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.json());
app.use('/api', rootRouter);

app.get('/', (req, res) => {
    console.log(req.query);
    
    res.status(200).json(
        'Сервер работает'
    )
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
