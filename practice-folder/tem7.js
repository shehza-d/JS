for (let i = 0; i < row; i++) {
  for (let j = 0; j < column; j++) {
    let value1 = Number(document.querySelector(`#matrix_value_${i}${j}`)).value;
    let value2 = Number(
      document.querySelector(`#matrix_value2_${i}${j}`)
    ).value;
    let result = value1 + value2;
    target_result_div.innerHTML += `<td>${result}</td>`;
  }
  target_result_div.innerHTML += "<br>";
}
