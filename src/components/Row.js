import React from "react";

export const Row = ({ logo, providerName, rate, transferFee, receivedAmount, id }) => {
    return (
        <tr key={id}>
            <td className="cell">
                <span className="logoContainer">
                    <img className="logo" src={logo} />
                </span>
                {providerName}
            </td>
            <td className="cell">{rate}</td>
            <td className="cell">{transferFee}</td>
            <td className="cell">{receivedAmount}</td>
        </tr>
    )
};
