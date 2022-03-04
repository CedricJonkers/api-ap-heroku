const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://modest-blackwell-89fc3c.netlify.app/'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('This api works.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
