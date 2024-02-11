import express from 'express';
import { DataSource } from 'typeorm';
import userRoutes from './src/routes/userRoutes';
import 'reflect-metadata';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Load routes
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  console.log('Requête GET reçue sur /');
  res.send('Hello, World!');
});

// Create DataSource instance using options from ormconfig.json
//const dataSource = new DataSource({
  // Retrieve options from the parsed ormconfig.json file
 // ...require('./ormconfig.json'),
//});

async function start() {
  try {
    // Load entities, migrations, and subscribers as specified in ormconfig.json
    //await dataSource.initialize();

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);

    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

start();
