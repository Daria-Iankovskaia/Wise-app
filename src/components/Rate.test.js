import React from "react";
import { render, screen } from "@testing-library/react";
import { Rate } from "./Rate";

describe("Rate component", () => {
    test("renders h3 and h6 to the screen", () => {
        render(<Rate sourceCurrency={"GBP"} targetCurrency={"EUR"} rate={1.2} />);

        expect(screen.getByRole("heading", { level: 3 }).innerHTML).toBe("1 GBP = 1.2 EUR");
        expect(screen.getByRole("heading", { level: 6 }).innerHTML).toBe("Mid-market exchange rate (from Reuters)");
    })
});





