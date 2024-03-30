import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ChooseCurrency } from "./ChooseCurrency.js";
import { getAllCurrencies } from "../data/currencies.js";

describe("ChooseCurrency component", () => {
    test("renders select element with the initial GBP currency selected", () => {
        const handleChangeCurrency = jest.fn();

        render(
            <ChooseCurrency
                currency="GBP"
                handleChangeCurrency={handleChangeCurrency}
            />
        );
        expect(screen.getByRole("option", { name: "GBP" }).selected).toBe(true);
    });

    test("returns the correct length of options", () => {
        const handleChangeCurrency = jest.fn();
        const currencies = getAllCurrencies();

        render(
            <ChooseCurrency
                currency="GBP"
                handleChangeCurrency={handleChangeCurrency}
            />
        );

        expect(screen.getAllByRole("option").length).toBe(currencies.length);
    });

    test("the handleChangeCurrency function is called when the user change the currency, the chosen currency is USD", () => {
        const handleChangeCurrency = jest.fn();

        render(
            <ChooseCurrency
                currency="GBP"
                handleChangeCurrency={handleChangeCurrency}
            />
        );

        fireEvent.change(screen.getAllByRole("combobox")[0], { target: { value: 'USD' } });
        expect(handleChangeCurrency).toHaveBeenCalled();

        expect(screen.getByRole("option", { name: "USD" }).selected).toBe(true);
    });
});
