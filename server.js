import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/get-recommendations', async (req, res) => {
    try {
        const { category, preferences } = req.body;

        const recommendationText = `Here are your personalized recommendations for ${category} based on "${preferences}":\n\n1. Top Career Path: Data Science & Machine Learning Engineer focusing on Python workflows.\n2. Key Tooling: Master pandas, scikit-learn, and advanced statistical modeling.\n3. Actionable Next Step: Build and deploy a complete end-to-end project to showcase in your portfolio!`;

        res.json({ result: recommendationText });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;