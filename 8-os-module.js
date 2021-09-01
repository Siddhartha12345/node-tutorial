const os = require('os');

// info about current user
const user = os.userInfo();
console.log("The current user information is :");
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// Other OS module functionalities
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};
console.log("OS information:");
console.log(currentOS);