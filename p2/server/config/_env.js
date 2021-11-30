const { NODE_ENV } = process.env;
if (NODE_ENV === 'development') {
  const path = require('path');
  require('dotenv')
    .config({ path: path.resolve(process.cwd(), 'config', '.env') });
} else if (NODE_ENV === 'test') {
  const path = require('path');
  require('dotenv')
    .config({ path: path.resolve(process.cwd(), 'config', '.env') });
} else if (NODE_ENV !== 'production') {
  console
    .error("You forgot to specify a NODE_ENV before running.");
}