export function calculateTotalLoan(quantity, term) {
    const amount = parseInt(quantity);
    const termInt = parseInt(term);

    // Costo de interes de acuerdo a la cantidad.
    let totalAmount
    if (amount <= 1000) {
        totalAmount = amount * 0.25;
    } else if (amount > 1000 && amount < 5000) {
        totalAmount = amount * 0.20;
    } else if (amount < 5000 && amount < 10000) {
        totalAmount = amount * 0.15;
    } else {
        totalAmount = amount * 0.10;
    }
    // costo de interes por meses de plazo.
    let costTerm = {
        3: amount * 0.05,
        6: amount * 0.10,
        12: amount * 0.15,
        24: amount * 0.20
    }
    return totalAmount + costTerm[termInt] + amount;
}