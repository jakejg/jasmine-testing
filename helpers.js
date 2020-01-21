
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }
  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr){
  let newTdx = document.createElement('td');
  newTdx.innerText = "X";

  newTdx.addEventListener('click', remove);

  tr.append(newTdx);
}

function remove(e) {
 let row=e.target.parentElement;

 row.remove();

if (row.id.includes('server')){
    delete allServers[row.id];
}
}

