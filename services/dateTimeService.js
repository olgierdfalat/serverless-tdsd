'use strict';

module.exports = {
  getCurrentDate() {
    return new Date().toDateString();
  },

  getCurrentTime() {
    return new Date().toTimeString();
  }
};