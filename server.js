import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3300;

// __dirname is not available in ES modules, so we need to construct it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files under the /brainrot prefix
app.use('/brainrot', express.static(path.join(__dirname, 'dist')));

// Handle all other routes by serving the main index.html file
app.get('/brainrot/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
