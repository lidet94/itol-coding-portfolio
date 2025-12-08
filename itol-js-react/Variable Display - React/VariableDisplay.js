function VariableDisplay() {
  let string = 'Hello everyone'
  let nums = 24
  let boolean = true
  let array = [1, 'goodbye', 2]
  let obj = { emid: 234552, emdpt: 'IT', emname: 'Chantelle' }

  if (Math.random() > 0.5) {
    nums = 62
  }

  return <div>
    <p>String: {string}</p>
    <p>Number: {nums}</p>
    <p>Boolean: {boolean.toString()}</p>
    <p>Array: {array.join(", ")}</p>
    <p>Employee Department: {obj.emdpt}</p>
    <p>Employee ID: {obj.emid}</p>
    <p>Employee Name: {obj.emname}</p>
  </div>


}

export default VariableDisplay;
