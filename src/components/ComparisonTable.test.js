import React from "react";
import { screen, render, within } from "@testing-library/react";
import { ComparisonTable } from "./ComparisonTable";

describe("ComparisonTable component", () => {
    const initialValues = {
        sourceCurrency: "GBP",
        targetCurrency: "EUR",
        amount: 1000,
        sortedProvidersByReceievedAmount: [
            {
                id: "provider1",
                name: "Monzo",
                logo: "monzo_logo_url",
                quotes: [{ rate: 1.17091021, fee: 0, receivedAmount: 1170.91 }]
            },
            {
                id: "provider2",
                name: "Barclays",
                logo: "barclays_logo_url",
                quotes: [{ rate: 1.16220272, fee: 0, receivedAmount: 1162.2 }]
            }
        ]
    };

    test("it renders dear of the table", () => {
        render(
            <ComparisonTable
                sourceCurrency={initialValues.sourceCurrency}
                targetCurrency={initialValues.targetCurrency}
                amount={initialValues.amount}
                sortedProvidersByReceievedAmount={initialValues.sortedProvidersByReceievedAmount}
            />
        );

        expect(screen.getByText("Provider")).toBeInTheDocument();
        expect(screen.getByText("Exchange rate")).toBeInTheDocument();
        expect(screen.getByText("Transfer fee")).toBeInTheDocument();
        expect(screen.getByText("Recipient gets")).toBeInTheDocument();

        const exchangeRateHeader = `1 ${initialValues.sourceCurrency}-->${initialValues.targetCurrency}`;
        const recipientGetsHeader = `${initialValues.amount} ${initialValues.sourceCurrency}`;
        expect(screen.getByText(exchangeRateHeader)).toBeInTheDocument();
        expect(screen.getByText(recipientGetsHeader)).toBeInTheDocument();
    });

    test("it renders 2 rows in the body of the table with cells containing inforamtion about providers", () => {
        render(
            <ComparisonTable
                sourceCurrency={initialValues.sourceCurrency}
                targetCurrency={initialValues.targetCurrency}
                amount={initialValues.amount}
                sortedProvidersByReceievedAmount={initialValues.sortedProvidersByReceievedAmount}
            />
        )
        //getting all the rows in the table, checking the number of rows on the screen
        const rows = screen.getAllByRole("row"); 
        expect(rows.length).toBe(3);

        //getting all the cells within the 1st row
        const monzoCells = within(rows[1]).getAllByRole("cell");

        //expecting to get the correct data in each cell of the Monxo row
        expect(monzoCells[0]).toHaveTextContent("Monzo");
        expect(within(monzoCells[0]).getByRole('img')).toHaveAttribute("src", "monzo_logo_url");
        expect(monzoCells[1]).toHaveTextContent("1.17091021");
        expect(monzoCells[2]).toHaveTextContent("0");
        expect(monzoCells[3]).toHaveTextContent("1170.91");

        //getting all the cells withing the 2nd row
        const barclaysCells = within(rows[2]).getAllByRole("cell");

        //expecting to get the correct data in each cell of the Barclays row
        expect(barclaysCells[0]).toHaveTextContent("Barclays");
        expect(within(barclaysCells[0]).getByRole("img")).toHaveAttribute("src", "barclays_logo_url");
        expect(barclaysCells[1]).toHaveTextContent("1.16220272");
        expect(barclaysCells[2]).toHaveTextContent("0");
        expect(barclaysCells[3]).toHaveTextContent("1162.2");
    })
});
