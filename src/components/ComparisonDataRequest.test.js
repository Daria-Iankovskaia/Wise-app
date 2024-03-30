import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { ComparisonDataRequest } from "./ComparisonDataRequest";

describe("ComarisonDataRequest component", () => {
    const initialValues = {
        sourceCurrency: "GBP",
        targetCurrency: "EUR",
    };
    const handleChangeSourceCurrency = jest.fn();
    const handleChangeTargetCurrency = jest.fn();

    test("should render 2 select elements with initial currencies GBP and EUR", () => {
        render(
            <ComparisonDataRequest
                sourceCurrency={initialValues.sourceCurrency}
                targetCurrency={initialValues.targetCurrency}
                handleChangeSourceCurrency={handleChangeSourceCurrency}
                handleChangeTargetCurrency={handleChangeTargetCurrency}
            />
        )

        const selects = screen.getAllByRole("combobox");
        expect(selects).toHaveLength(2);
        expect(selects[0]).toHaveValue(initialValues.sourceCurrency);
        expect(selects[1]).toHaveValue(initialValues.targetCurrency);
    });

    test("handleChangeSourceCurrency and handleChangeTargetCurrency functions should be called on change", () => {
        render(
            <ComparisonDataRequest
                sourceCurrency={initialValues.sourceCurrency}
                targetCurrency={initialValues.targetCurrency}
                handleChangeSourceCurrency={handleChangeSourceCurrency}
                handleChangeTargetCurrency={handleChangeTargetCurrency}
            />
        )

        const selects = screen.getAllByRole("combobox");

        fireEvent.change(selects[0], { target: { value: 'USD' } });
        expect(handleChangeSourceCurrency).toHaveBeenCalled();

        fireEvent.change(selects[1], { target: { value: "GBP" } });
        expect(handleChangeTargetCurrency).toHaveBeenCalled();

        expect(selects[0]).toHaveValue("USD");
        expect(selects[1]).toHaveValue("GBP");
    });
});