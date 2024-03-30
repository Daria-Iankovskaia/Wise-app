export const getProviders = async (sourceCurrency, targetCurrency, amount) => {
    const config = {
        PROVIDERS_HOST: 'https://api.transferwise.com/v3/comparisons/?sourceCurrency={SOURCE}&targetCurrency={TARGET}&sendAmount={AMOUNT}'
    };

    return fetch(
        config.PROVIDERS_HOST.replace(/{SOURCE}/, sourceCurrency).replace(/{TARGET}/, targetCurrency).replace(/{AMOUNT}/, amount), {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
    })
        .then((response) => response.json())
};

