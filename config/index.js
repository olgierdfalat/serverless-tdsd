'use strict';
const url = require('url');
var urljoin = require('url-join');

module.exports = {
  hostUrl: process.env.HOST_URL || 'https://cu5c3r1kwa.execute-api.eu-central-1.amazonaws.com',
  env: process.env.STAGE || 'dev',
  getUrl(...subPaths) {
    return urljoin(this.hostUrl, this.env, subPaths);
  }
};