require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const productRoutes = require('./routes/productRoutes');
const panierRoutes = require('./routes/panierRoutes');

// const verifyToken  = require('./middlewares/authMiddleware.js');
const db = require("../server/models/index.js");
const app = express();




app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.use('/api/products', productRoutes);
app.use('/api/panier', panierRoutes);



app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API');
});


// app.use(verifyToken);


const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});



// const express = require('express');
// const routes = require('./routes/productRoutes');
// const cors = require ('cors')

// const app = express();

// app.use(express.json());

// app.use('/api', routes);
// app.use (cors())

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// // require('dotenv').config();
// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const morgan = require('morgan');
// // const { sequelize } = require('./models');
// // const productRoutes = require('./routes/productRoutes');
// // const authRoutes = require('./routes/authRoutes');
// // const verifyToken = require('./middlewares/authMiddleware.js');

// // const app = express();

// // app.use(morgan('dev'));
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(cors());
// // app.use(express.json());

// // app.use('/api/products', productRoutes);
// // app.use('/api/auth', authRoutes);

// // app.get('/', (req, res) => {
// //   res.send('Welcome to the E-commerce API');
// // });

// // app.use(verifyToken);

// // const PORT = process.env.PORT || 3000;
// // sequelize.sync().then(() => {
// //   app.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// //   });
// // });
// // app.listen(3000, () => {
// //   console.log('Server is running on port 3000');
// // });
