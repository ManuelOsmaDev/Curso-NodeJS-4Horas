const eventEmitter = require('events');

const customEvent  = new eventEmitter();

customEvent.on('response', (data) => {
    console.log("reciivdo");
    console.log(data);
})

customEvent.emit('response', "hello world");
customEvent.emit('response', "GOOOO");
customEvent.emit('response', 120102);
customEvent.emit('response', {
    name:"manuel",
    age:20
});