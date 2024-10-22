express = require('express');
hogan = require('hogan-middleware')
path = require('path');

PORT = 3000;
app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hogan.__express);

app.get('/', (request, response, next) => (response.send('Hello World!')));
app.get('/about', (request, response, next) => (response.json({ message: 'About page' })));

app.get('/home', (request, response, next) => {
    response.render('home', null);
});
app.listen(3000, () => console.log(`Server is running on http://localhost:${PORT}`));