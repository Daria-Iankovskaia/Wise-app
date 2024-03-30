export const getSortedProviders = (data) => {
    const providers = data.providers ? data.providers : [];

    providers.sort((a, b) => {
        return b.quotes[0].receivedAmount - a.quotes[0].receivedAmount;
    });

    return providers;
};

