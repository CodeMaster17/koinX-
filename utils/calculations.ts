
type CalculationFunction = {
    purchasePrice: number;
    salesPrice: number;
    expenses: number;
    investmentType: string;
    annualIncome: string;
    financialYear: string;
};

export const calculateTax = (data: CalculationFunction) => {
    var capitalGainsAmount = data.salesPrice - data.purchasePrice - data.expenses;
    var discount = 0;
    var netCapitalGains:number = 0;
    var taxRate = 0;

    if (data.investmentType === 'long') {
        if (capitalGainsAmount > 0) {
            discount = 0.5 * capitalGainsAmount;
        }

        netCapitalGains = capitalGainsAmount - discount;
    } else if (data.investmentType === 'short') {
        capitalGainsAmount = data.salesPrice - data.purchasePrice - data.expenses;
        netCapitalGains = capitalGainsAmount;

        // Update the return statement
        
    }

    console.log("netCapitalGains", netCapitalGains)

    if (data.annualIncome === '$0 - $18,200') {
        taxRate = 0 * netCapitalGains;
    } else if (data.annualIncome === '$18,201 - $45,000') {
        taxRate = 0.19 * netCapitalGains;
    } else if (data.annualIncome === '$45,001 - $120,000') {
        console.log("in this statement", data.annualIncome)
        taxRate =  0.325 * netCapitalGains;
    } else if (data.annualIncome === '$120,001 - $180,000') {
        taxRate = 0.37 * netCapitalGains;
    } else {
        taxRate =  0.45 * netCapitalGains;
    }
    console.log( 'taxRate', taxRate )
    return { taxRate, netCapitalGains, discount, capitalGainsAmount };
};