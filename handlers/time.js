'use strict';

const dateTimeService = require('../services/dateTimeService');


module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello World, the current time is ${dateTimeService.getCurrentTime()}.`,
    }),
  };

  callback(null, response);
};
