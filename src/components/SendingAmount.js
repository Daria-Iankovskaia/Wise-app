import React from 'react';

export const SendingAmount = ({ amount, sourceCurrency, handleAmountChange }) => {
    return (
        <div className="input-group input-group-lg mb-3 ">
            <span className="input-group-text">Amount</span>
            <input
                type="number"
                className="form-control"
                name="amount"
                value={amount}
                onChange={handleAmountChange}
            />
            <span
                className="input-group-text"
            >
                {sourceCurrency}
            </span>
        </div>
    )
};



