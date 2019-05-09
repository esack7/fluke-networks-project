module.exports = {
  calculateSumCarryOver: arr => (arr.length * 9).toString().length,
  createCalcArray: arr =>
    arr.map(ele =>
      ele
        .toString()
        .split("e")[0]
        .split("")
        .filter(str => {
          if (str !== ".") return str;
          return null;
        })
        .map(strInt => parseInt(strInt, 10))
    )
};
