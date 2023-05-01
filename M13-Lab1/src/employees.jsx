let aditi = "Aditi Mewada";
let salman = "Salman Khan";
let shahruk = "Shah Ruk Khan";
let ranbir = "Ranbir Kapoor";
let ranveer = "Ranveer Singh";
let tim = "Tim Cook";
let mark = "Mark Zukerberg";
let elon = "Elon Musk";
const element = (
  <ul style={{ color: "grey", fontSize: "22px" }}>
    <li>{aditi}</li>
    <li>{salman}</li>
    <li>{shahruk}</li>
    <li>{ranbir}</li>
    <li>{ranveer}</li>
    <li>{tim}</li>
    <li>{mark}</li>
    <li>{elon}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));
