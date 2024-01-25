
const Result = ({totalLoan, quantity, term}) => {
  return (
    <div className="resultado">
      <h2>Cotización:</h2>
      <p>The resquested quantity is: ${quantity} </p>
      <p>To pay in: ${term} months</p>
      <p>The monthly payment is: ${(totalLoan / term).toFixed(2)} </p>
      <p>Total: ${(totalLoan).toFixed(2)} </p>
    </div>
  )
}

export default Result
