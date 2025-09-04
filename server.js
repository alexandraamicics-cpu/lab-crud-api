const express = require('express');
const app = express();
const courseRoutes = require('./routes/courseRoutes');

// ✅ Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/courses', courseRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
