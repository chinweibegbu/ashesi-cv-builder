import express from 'express';

// Import middleware libraries
import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from 'errorhandler';
import morgan from 'morgan';

// Import app routers
import userRouter from './routers/user-router.js';
import cvRouter from './routers/cv-router.js';

// Create Express app
const app = express();
const PORT = process.env.PORT || 3005;

// Setup middleware
app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler());
app.use(morgan('tiny'));

// Connect app routers
app.use('/api/users', userRouter);
app.use('/api/:userId/cv', cvRouter);

// Running the Express server
const appLink = PORT === 10000 ? "https://zuri-chinwe-stage2.onrender.com" : "http://localhost" ;
app.listen(PORT, () => console.log(`Server running at: ${appLink} on port ${PORT}`));