var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(require('body-parser')());
server.listen(8080);
var missions = [
            {
                id: 0,
                name: 'MISSION Sparrow',
                descr: 'You on your way?',
                details: 'DETAILS',
                logo: 'images/ben.png'
            },
            {
                id: 1,
                name: 'MISSION Lynx',
                descr: 'Hey, it\'s me',
                details: 'DETAILS',
                logo: 'images/max.png'
            },
            {
                id: 2,
                name: 'MISSION Bradleyson',
                descr: 'I should buy a boat',
                details: 'DETAILS',
                logo: 'images/adam.jpg'
            },
            {
                id: 3,
                name: 'MISSION Governor',
                descr: 'Look at my mukluks!',
                details: 'DETAILS',
                logo: 'images/perry.png'
            },
            {
                id: 4,
                name: 'MISSION Harrington',
                descr: 'This is wicked good ice cream.',
                details: 'DETAILS',
                logo: 'images/mike.png'
            },
            {
                id: 5,
                name: 'MISSION Sparrow',
                descr: 'You on your way?',
                details: 'DETAILS',
                logo: 'images/ben.png'
            },
            {
                id: 6,
                name: 'MISSION Lynx',
                descr: 'Hey, it\'s me',
                details: 'DETAILS',
                logo: 'images/max.png'
            },
            {
                id: 7,
                name: 'MISSION Bradleyson',
                descr: 'I should buy a boat',
                details: 'DETAILS',
                logo: 'images/adam.jpg'
            },
            {
                id: 8,
                name: 'MISSION Governor',
                descr: 'Look at my mukluks!',
                details: 'DETAILS',
                logo: 'images/perry.png'
            },
            {
                id: 9,
                name: 'MISSION Harrington',
                descr: 'This is wicked good ice cream.',
                details: 'DETAILS',
                logo: 'images/mike.png'
            }
        ];
        
app.get('/missions', function (req, res) {
  res.json({data: missions});
});
app.post('/missions', function (req, res) {
    missions = req.body.data;
    res.json(missions);
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

     