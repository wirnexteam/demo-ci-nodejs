const sum = (a, b) => {
  if (a === undefined || a === null || b === undefined || b === null) {
    throw new Error('Wrong params');
  }
  return parseInt(a) + parseInt(b);
};

module.exports = {
  sum,
};
