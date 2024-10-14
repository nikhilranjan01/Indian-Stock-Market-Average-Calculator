function unitChanged(id, error) {
  if (document.getElementById(id).value != '') {
    document.getElementById(error).innerHTML = '';
    return;
  } else {
    document.getElementById(error).innerHTML = 'Field is required.';
  }
}

function getAverage() {
  const units1 = document.getElementById("units1").value;
  const price1 = document.getElementById("Price1").value;
  const units2 = document.getElementById("units2").value;
  const price2 = document.getElementById("Price2").value;

  // Input validation
  if (units1 === '') {
    document.getElementById("error1").innerHTML = "Please enter units for the first buy.";
    return;
  }
  if (price1 === '') {
    document.getElementById("error2").innerHTML = "Please enter price for the first buy.";
    return;
  }
  if (units2 === '') {
    document.getElementById("error3").innerHTML = "Please enter units for the second buy.";
    return;
  }
  if (price2 === '') {
    document.getElementById("error4").innerHTML = "Please enter price for the second buy.";
    return;
  }

  // Calculations
  const totalAmount1 = units1 * price1; // First buy total amount
  const totalAmount2 = units2 * price2; // Second buy total amount
  const overallAmount = totalAmount1 + totalAmount2; // Overall amount
  const totalUnits = +units1 + +units2; // Total units
  const averagePrice = overallAmount / totalUnits; // Average price

  // Displaying the results
  document.getElementById("result").innerHTML = `
    <strong>Total Amount (First Buy): </strong>₹${totalAmount1.toFixed(2)}<br/>
    <strong>Total Amount (Second Buy): </strong>₹${totalAmount2.toFixed(2)}<br/>
    <strong>Overall Amount: </strong>₹${overallAmount.toFixed(2)}<br/>
    <strong>Total Units: </strong>${totalUnits}<br/>
    <strong>Average Price: </strong>₹${averagePrice.toFixed(2)}
  `;
}

function clearFields() {
  document.getElementById("units1").value = '';
  document.getElementById("Price1").value = '';
  document.getElementById("units2").value = '';
  document.getElementById("Price2").value = '';
  document.getElementById("result").innerHTML = '';
}
