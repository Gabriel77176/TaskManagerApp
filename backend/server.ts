import express from 'express';

const app = express();
const port = 3000;

// Route de santé pour le healthcheck
app.get('/health', (req, res) => res.sendStatus(200));

// ... autres routes ...

// Important: Écouter sur 0.0.0.0 pour Docker
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});