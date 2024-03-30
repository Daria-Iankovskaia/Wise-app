import React from "react";

export const Rate = ({ sourceCurrency, targetCurrency, rate }) => {
    return (
        <div>
            <h3 className="rateText w-100">1 {sourceCurrency} = {rate} {targetCurrency}</h3>
            <h6 id="mid-market">Mid-market exchange rate (from Reuters)</h6>
        </div>
    )
};



