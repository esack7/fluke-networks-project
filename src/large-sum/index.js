const { data } = require("./numbers-data");

module.exports = () => {
  let sum = 0;
  let iteration = 0;
  const calcArray = data.map(ele =>
    ele
      .toString()
      .split("e")[0]
      .split("")
      .filter(str => {
        if (str !== ".") return str;
        return null;
      })
      .map(strInt => parseInt(strInt, 10))
  );

  while (sum < 10000000000000) {
    for (let i = 0; i < calcArray.length; i += 1) {
      sum += calcArray[i][iteration];
    }
    console.log(sum);
    iteration += 1;
    sum *= 10;
  }
  console.log(iteration);
  return Math.floor(sum / 10000);
};
