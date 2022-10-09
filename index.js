const server = require('./server.js');

const port = process.env.PORT || 6868



//run server
server.listen(port, () => {
    console.log(`\n***_Server Reporting for Duty on port: ${port}_***\n`);
    
})