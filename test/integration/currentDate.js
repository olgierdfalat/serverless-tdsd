'use strict';

const chai = require('chai');
const rp = require('request-promise');
const chaiString = require('chai-string');
chai.use(chaiString);
const expect = chai.expect;

const config = require('./../../config');

describe('currentDate endpoint', () => {
  it('should return current date', () => {
    const url = config.getUrl('currentDate');
    const options = {
      url,
      json: true
    };
    console.log('requesting:', url);
    return rp.get(options).then(res => {
      console.log('res', res);
      expect(res.message).to.startsWith('Hello, the current date is');
    })
  });
});