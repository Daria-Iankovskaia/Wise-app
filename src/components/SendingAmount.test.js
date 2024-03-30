import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SendingAmount } from "./SendingAmount";

describe('Sending amount component', () => {
    test("renders amount word, input with the default value of 1000 and source currency GBP to the screen", () => {
        const handleAmountChange = jest.fn();

        render(
            <SendingAmount sourceCurrency={"GBP"} amount={1000} handleAmountChange={handleAmountChange} />
        );

        expect(screen.getByText("Amount")).toBeInTheDocument();
        expect(screen.getByText("GBP")).toBeInTheDocument();
        const input = screen.getByRole("spinbutton");
        expect(input).toHaveValue(1000);
    });

    test("calls handleAmountChange function when the new amount entered", () => {
        const handleAmountChange = jest.fn();
        const inputValue = "500";

        render(<SendingAmount sourceCurrency={"GBP"} amount={1000} handleAmountChange={handleAmountChange} />);

        const input = screen.getByRole("spinbutton");
        userEvent.clear(input);
        userEvent.type(input, inputValue);

        expect(handleAmountChange).toHaveBeenCalled();
    });
});









