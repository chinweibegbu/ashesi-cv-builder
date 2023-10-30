import express from 'express';
import bodyParser from 'body-parser';

// Initialising Express router
const router = express.Router();

// Creating app routes
// router.get('/', getCVs);
// router.get('/:id', getCVById);
// router.post('/', createCV);
// router.patch('/:id', updateCVById);
// router.delete('/:id', deleteCVById);

// Create Express app
const app = express();
const PORT = process.env.PORT || 3005;

// Middleware set
app.use(bodyParser.json());

// Connect main application router
app.use('/api', router);

// Running the Express server
const appLink = PORT === 10000 ? "https://zuri-chinwe-stage2.onrender.com" : "http://localhost" ;
app.listen(PORT, () => console.log(`Server running at: ${appLink} on port ${PORT}`));