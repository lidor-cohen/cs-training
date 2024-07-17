function capitalize(str) {
  return str != "" ? str[0].toUpperCase() + str.substring(1) : "";
}

function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },

  substract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return b !== 0 ? a / b : null;
  },
};

function caesarCipher(str, shift) {
  let newString = "";
  shift = shift % 26;

  if (shift < 0) {
    shift += 26;
  }

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let char = str[i];

    if (charCode >= 65 && charCode <= 90) {
      char = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    newString += char;
  }

  console.log(newString);
  return newString;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
