var app = require('express')();
var server = require('http').Server(app);
var port = process.env.PORT || 1337;
var io = require('socket.io')(server);
app.use(require('body-parser')());
app.
server.listen(port);
var missions = [
    {
        id: 0,
        name: 'MISSION Microsoft Azure',
        descr: 'Survey?',
        details: '',
        logo: 'images/ben.png'
    },
    {
        id: 1,
        name: 'MISSION Elon Musk',
        descr: 'AMA (Q/A)',
        details: '',
        logo: 'images/max.png'
    },
    {
        id: 2,
        name: 'MISSION Startup Weekend',
        descr: '2 Questions',
        details: '',
        logo: 'images/adam.jpg'
    },
    {
        id: 3,
        name: 'MISSION UAE',
        descr: 'Expo 2020 New Ideas!',
        details: '',
        logo: 'images/perry.png'
    },
    {
        id: 4,
        name: 'MISSION Mastermind',
        descr: 'Standford University',
        details: '',
        logo: 'images/mike.png'
    },
    {
        id: 5,
        name: 'MISSION YCombinator',
        descr: 'Live AMA with Sam Altiman',
        details: '',
        logo: 'images/ben.png'
    },
    {
        id: 6,
        name: 'MISSION TechCrunch UAE',
        descr: 'VR/AR Event Paid-Testing',
        details: '',
        logo: 'images/max.png'
    },
    {
        id: 7,
        name: 'MISSION Bayt CTO',
        descr: 'New Position',
        details: '',
        logo: 'images/adam.jpg'
    },
    {
        id: 8,
        name: 'MISSION Dubai Comicon',
        descr: 'How could we improve!',
        details: '',
        logo: 'images/perry.png'
    },
    {
        id: 9,
        name: 'MISSION HBO',
        descr: 'New TV Show? What do you think of the script?',
        details: '',
        logo: 'images/mike.png'
    }
];

app.get('/', function(req, res) {
    res.json({ messg: "Hello World" });
});
app.get('/missions', function(req, res) {
    res.json({ data: missions });
});
app.post('/missions', function(req, res) {
    missions = req.body.data;
    res.json(missions);
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        socket.emit(msg);
        console.log('message: ' + msg);
    });
});

io.set('transports', ['websocket', 'xhr-polling', 'jsonp-polling', 'htmlfile', 'flashsocket']);
io.set('origins', '*:*');
