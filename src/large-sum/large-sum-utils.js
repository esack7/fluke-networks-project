module.exports = {
  calculateSumCarryOver: arr => (arr.length * 9).toString().length,
  createCalcArray: arr =>
    arr.map(ele =>
      ele
        .split("")
        .map(strInt => parseInt(strInt, 10))
    )
};
