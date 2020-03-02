const { getDaysLeft } = require("../src/index");

module.exports = {
  result: "",
  targetDate: null,

  setTargetDate: d => {
    this.targetDate = d;
  },

  compareDates: () => {
    this.result = getDaysLeft(this.targetDate) > 1 ? "OK" : "ABORT";
  }
};
