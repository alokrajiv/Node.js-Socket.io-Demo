var app = require('express')();
var server = require('http').Server(app);
var port = process.env.PORT || 1337;
var io = require('socket.io')(server);
app.use(require('body-parser')());
server.listen(port);
var missions = [
    {
        id: 0,
        name: 'MISSION Microsoft Azure',
        descr: 'Survey?',
        logo: 'images/ben.png'
    },
    {
        id: 1,
        name: 'MISSION Elon Musk',
        descr: 'AMA (Q/A)',
        logo: 'images/max.png'
    },
    {
        id: 2,
        name: 'MISSION Startup Weekend',
        descr: '2 Questions',
        logo: 'images/adam.jpg'
    },
    {
        id: 3,
        name: 'MISSION UAE',
        descr: 'Expo 2020 New Ideas!',
        logo: 'images/perry.png'
    },
    {
        id: 4,
        name: 'MISSION Mastermind',
        descr: 'Standford University',
        logo: 'images/mike.png'
    },
    {
        id: 5,
        name: 'MISSION YCombinator',
        descr: 'Live AMA with Sam Altiman',
        logo: 'images/ben.png'
    },
    {
        id: 6,
        name: 'MISSION TechCrunch UAE',
        descr: 'VR/AR Event Paid-Testing',
        logo: 'images/max.png'
    },
    {
        id: 7,
        name: 'MISSION Bayt CTO',
        descr: 'New Position',
        logo: 'images/adam.jpg'
    },
    {
        id: 8,
        name: 'MISSION Dubai Comicon',
        descr: 'How could we improve!',
        logo: 'images/perry.png'
    },
    {
        id: 9,
        name: 'MISSION HBO',
        descr: 'New TV Show? What do you think of the script?',
        logo: 'images/mike.png'
    }
];

app.get('/', function(req, res) {
    res.json({messg: 'HELLO WORLD'});
});
app.get('/missions', function(req, res) {
    res.json({ data: missions });
});
app.post('/missions', function(req, res) {
    missions = req.body.data;
    res.json(missions);
});

io.on('connection', function(socket) {
    socket.on('channel1', function(data) {
        socket.broadcast.emit('channel1', data);
    });
});
