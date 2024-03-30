import { getRate } from "./getRate";

describe("getRate function", () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve([{ rate: 2 }]),
            })
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("getRate function returns rate", async () => {
        const rate = await getRate("GBP", "EUR");

        expect(rate).toEqual({ rate: 2 });
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            'https://api.wise.com/v1/rates?source=GBP&target=EUR',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic OGNhN2FlMjUtOTNjNS00MmFlLThhYjQtMzlkZTFlOTQzZDEwOjliN2UzNmZkLWRjYjgtNDEwZS1hYzc3LTQ5NGRmYmEyZGJjZA==`,
                },
                method: 'GET',
            }
        );
    });
});


