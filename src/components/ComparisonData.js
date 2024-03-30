import React, { useState, useEffect } from "react";
import { getRate } from "../utils/getRate";
import { getProviders } from "../utils/getProviders";
import { getSortedProviders } from "../utils/getSortedProviders";
import { SendingAmount } from "./SendingAmount";
import { Rate } from "./Rate";
import { ComparisonDataRequest } from "./ComparisonDataRequest";
import { ComparisonTable } from "./ComparisonTable";

export const ComparisonData = () => {
    const [sourceCurrency, setSourceCurrency] = useState("GBP");
    const [targetCurrency, setTargetCurrency] = useState("EUR");
    const [amount, setAmount] = useState(1000);
    const [rate, setRate] = useState(null);
    const [sortedProvidersByReceievedAmount, setSortedProvidersByReceievedAmount] = useState([]);

    useEffect(() => {
        getRate(sourceCurrency, targetCurrency)
            .then((response) => setRate(response.rate));
    }, [sourceCurrency, targetCurrency]);

    useEffect(() => {
        getProviders(sourceCurrency, targetCurrency, amount)
            .then((data) => getSortedProviders(data))
            .then((sorted) => setSortedProvidersByReceievedAmount(sorted));
    }, [sourceCurrency, targetCurrency, amount]);

    const handleChangeSourceCurrency = (e) => {
        setSourceCurrency(e.target.value);
    };

    const handleChangeTargetCurrency = (e) => {
        setTargetCurrency(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <div className="container container-fluid w-75">
            <h1 className="text-center text-inverse mainHeader ">Compare exchange rates.</h1>
            <div>
                <div className="row text-navy bg-white justify-content-center">
                    <div className="col-12">
                        <ComparisonDataRequest
                            sourceCurrency={sourceCurrency}
                            targetCurrency={targetCurrency}
                            handleChangeSourceCurrency={handleChangeSourceCurrency}
                            handleChangeTargetCurrency={handleChangeTargetCurrency}
                        />
                    </div>
                </div>
                <div className="row bg-white">
                    <div className="col-md-6 col-sm-12" align="center">
                        {
                            rate && <Rate sourceCurrency={sourceCurrency}
                                targetCurrency={targetCurrency}
                                rate={rate}
                            />
                        }
                    </div>
                    <div className="col-md-6 col-sm-12" align="center">
                        <SendingAmount
                            amount={amount}
                            sourceCurrency={sourceCurrency}
                            handleAmountChange={handleAmountChange}
                        />
                    </div>
                </div>
            </div>
            <div className="row bg-white">
                <div className="col p-0 mb-Table">
                    <ComparisonTable
                        sourceCurrency={sourceCurrency}
                        targetCurrency={targetCurrency}
                        amount={amount}
                        sortedProvidersByReceievedAmount={sortedProvidersByReceievedAmount}
                    />
                </div>
            </div>
            <footer className="footer">
                © 2024 WISER. All rights reserved.
            </footer>
        </div>
    )
};