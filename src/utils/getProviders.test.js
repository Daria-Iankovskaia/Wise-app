import { getProviders } from "./getProviders";

describe("getProviders function", () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve([
                    {
                        id: "provider1",
                        name: "Monzo",
                        logo: "monzo_logo_url",
                        quotes: [{ rate: 1.17091021, fee: 0, receivedAmount: 1170.91 }]
                    },
                    {
                        id: "provider2",
                        name: "Loyds",
                        logo: "loyds_logo_url",
                        quotes: [{ rate: 1.5, fee: 1, receivedAmount: 1100.1 }]
                    },
                    {
                        id: "provider3",
                        name: "Barclays",
                        logo: "barclays_logo_url",
                        quotes: [{ rate: 1.16220272, fee: 0, receivedAmount: 1162.2 }]
                    }
                ]),
            })
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("getProviders returns providers", async () => {
        const providers = await getProviders("GBP", "EUR", 1000);
        expect(providers).toEqual([
            {
                id: "provider1",
                name: "Monzo",
                logo: "monzo_logo_url",
                quotes: [{ rate: 1.17091021, fee: 0, receivedAmount: 1170.91 }]
            },
            {
                id: "provider2",
                name: "Loyds",
                logo: "loyds_logo_url",
                quotes: [{ rate: 1.5, fee: 1, receivedAmount: 1100.1 }]
            },
            {
                id: "provider3",
                name: "Barclays",
                logo: "barclays_logo_url",
                quotes: [{ rate: 1.16220272, fee: 0, receivedAmount: 1162.2 }]
            }
        ]);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            "https://api.transferwise.com/v3/comparisons/?sourceCurrency=GBP&targetCurrency=EUR&sendAmount=1000", {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        }
        )
    });
});