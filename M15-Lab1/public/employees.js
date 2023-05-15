let aditi = "Aditi Mewada";
let salman = "Salman Khan";
let shahruk = "Shah Ruk Khan";
let ranbir = "Ranbir Kapoor";
let ranveer = "Ranveer Singh";
let tim = "Tim Cook";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "blue",
    fontSize: "24px"
  }
}, /*#__PURE__*/React.createElement("li", null, aditi), /*#__PURE__*/React.createElement("li", null, salman), /*#__PURE__*/React.createElement("li", null, shahruk), /*#__PURE__*/React.createElement("li", null, ranbir.toUpperCase()), /*#__PURE__*/React.createElement("li", null, ranveer), /*#__PURE__*/React.createElement("li", null, tim));
ReactDOM.render(element, document.getElementById("content"));