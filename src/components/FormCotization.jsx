import { useState } from "react";
import { calculateTotalLoan } from "../helpers";

const FormCotization = ({ quantity, setQuantity, term, setTerm, setTotalLoan }) => {
  const [error, setError] = useState(false);

  const calculateLoan = (e) => {
    e.preventDefault();
    if (quantity === 0 || term === "") {
      setError(true);
      return;
    }
    setError(false);
    const total = calculateTotalLoan(quantity, term);
    setTotalLoan(total);
  };

  return (
    <>
      <form onSubmit={calculateLoan}>
        <div className="column">
          <div>
            <label>Loan Amount</label>
            <input
              type="number"
              placeholder="Ej: 30000"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <label>Term to Pay</label>
            <select onChange={(e) => setTerm(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
        </div>
        <div className="btnSubmit">
          <input type="submit" value="Calcular" />
        </div>
      </form>
      {error && <p className="error">Todos los campos son obligatorios ...!</p>}
    </>
  );
};

export default FormCotization;
