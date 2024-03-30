import React, { useState } from 'react';
import { getAllCurrencies } from "../data/currencies.js";

export const ChooseCurrency = (props) => {
    const [allCurrencies] = useState(getAllCurrencies());

    return (
        <select
            className="form-select form-select-lg"
            defaultValue={props.currency}
            onChange={props.handleChangeCurrency}
        >
            {allCurrencies.map(cur => (<option key={cur.nameTranslationKey} value={cur.code}>{cur.code}</option>))}
        </select>
    )
};
