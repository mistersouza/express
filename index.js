express = require('express');
PORT = 3000;
app = express();

app.get('/', (request, response, next) => (response.send('Hello World!')));
app.listen(3000, () => console.log(`Server is running on http://localhost:${PORT}`));