import React from "react";
import { ChooseCurrency } from "./ChooseCurrency";

export const ComparisonDataRequest = ({ sourceCurrency, targetCurrency, handleChangeSourceCurrency, handleChangeTargetCurrency }) => {
    return (
        <form>
            <div className="form-group row mt-4 mb-sm-1">
                <div className="col-md-6 col-sm-12 mb-3 mb-md-0" align="center">
                    <ChooseCurrency
                        currency={sourceCurrency}
                        handleChangeCurrency={handleChangeSourceCurrency}
                    />
                </div>
                <div className="col-md-6 col-sm-12 mb-2" align="center">
                    <ChooseCurrency
                        currency={targetCurrency}
                        handleChangeCurrency={handleChangeTargetCurrency}
                    />
                </div>
            </div>
        </form>
    )
};

