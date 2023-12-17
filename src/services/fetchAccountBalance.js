const apiKey =  process.env.VITE_APP_MONO_API_KEY;
const apiUrl = process.env.VITE_APP_MONO_API_URL;

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
        data.jars[0].balance / 100
    );
    
    return balance;
};
