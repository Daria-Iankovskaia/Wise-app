import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Row } from "./Row";

describe("Row component", () => {
    test("renders providers data", () => {
        render(
            <Row
                logo={"monzologo.png"}
                providerName={"Monzo"}
                rate={1.2}
                transferFee={5}
                receivedAmount={100}
                id={3}
            />
        );

        const row = screen.getByRole("row");
        const monzoCells = within(row).getAllByRole("cell");

        //expecting to get the correct data in each cell of the Monzo row
        expect(monzoCells[0]).toHaveTextContent("Monzo");
        expect(within(monzoCells[0]).getByRole('img')).toHaveAttribute("src", "monzologo.png");
        expect(monzoCells[1]).toHaveTextContent("1.2");
        expect(monzoCells[2]).toHaveTextContent("5");
        expect(monzoCells[3]).toHaveTextContent("100");
    });
});