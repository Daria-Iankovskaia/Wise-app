export const getRate = async (sourceCurrency, targetCurrency) => {
    const config = {
        RATE_HOST: 'https://api.wise.com/v1/rates?source={SOURCE}&target={TARGET}',
        RATE_TOKEN:
            'OGNhN2FlMjUtOTNjNS00MmFlLThhYjQtMzlkZTFlOTQzZDEwOjliN2UzNmZkLWRjYjgtNDEwZS1hYzc3LTQ5NGRmYmEyZGJjZA==',
    };

    const url = config.RATE_HOST.replace(/{SOURCE}/, sourceCurrency).replace(/{TARGET}/, targetCurrency);

    return fetch(
        url,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${config.RATE_TOKEN}`
            },
            method: 'GET',
        }
    )
        .then((response) => response.json())
        .then((list) => (list[0]));
};