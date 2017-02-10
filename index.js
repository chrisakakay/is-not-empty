'use strict';

module.exports.object = obj => {
    return (obj !== undefined && obj !== '' && obj !== null && obj.constructor === Object && Object.keys(obj).length > 0);
};

module.exports.array = arr => {
    return (arr !== undefined && arr !== '' && arr !== null && arr.constructor === Array && arr.length > 0);
};

