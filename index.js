var raspPingRead = require('bindings')('pingReadExtension');
module.exports = raspPingRead;

// module.exports = { 
//     pingReadExt: require('bindings')('pingReadExtension')
// };

// module.exports = {
//     pingReadExt: require('bindings')('pingReadExtension'),
//     sonarFactory: require('bindings')('sonarFactory')
// };