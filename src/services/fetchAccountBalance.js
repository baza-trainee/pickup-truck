const apiKey = 'uzvo16z93T_gky7cYA0Bp3Q6ZfqzpZxl7--CXKbebcb0';
const apiUrl = 'https://api.monobank.ua/personal/client-info';

export const fetchAccountBalance = async () => {
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-Token': apiKey,
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const balance = Math.floor(
        (data.accounts[0].balance - data.accounts[0].creditLimit) / 100
    );
    return balance;
};
