module.exports = {
  default: {
    require: ["./features/step_definitions/*.js", "./support/hooks.js"],
    format: ["progress"],
    publishQuiet: true,
  },
};