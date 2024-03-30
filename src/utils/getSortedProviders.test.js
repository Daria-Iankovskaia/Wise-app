import { getSortedProviders } from "./getSortedProviders";

describe("getSortedProviders function", () => {
    test("should sort providers based on receivedAmount in descending order", () => {
        const inputData = {
            providers: [
                {
                    id: "provider2",
                    name: "Barclays",
                    logo: "barclays_logo_url",
                    quotes: [{ rate: 1.16220272, fee: 0, receivedAmount: 1162.2 }]
                },
                {
                    id: "provider1",
                    name: "Monzo",
                    logo: "monzo_logo_url",
                    quotes: [{ rate: 1.17091021, fee: 0, receivedAmount: 1170.91 }]
                }
            ]
        };

        const expectedResult = [
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
        ];

        const sortedProviders = getSortedProviders(inputData);
        expect(sortedProviders).toEqual(expectedResult);
    });
});
