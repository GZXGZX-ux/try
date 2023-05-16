const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({
  path: './config.env',
});

const port = process.env.PORT;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}...`);
});
