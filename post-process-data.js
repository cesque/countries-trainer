const { readFile, writeFile } = require('fs/promises');

async function processData() {
    try {
        const data = await readFile('./data.json', 'utf-8');
        const jsonData = JSON.parse(data);

        // Process the data and strip unneeded fields
        const processedData = jsonData.results.map(country => {
            const {
                name,
                code,
                phone,
                continent: {
                    name: continentName,
                },
                capital,
                emoji,
            } = country

            return {
                name,
                code,
                phone,
                capital,
                flag: emoji,
                continent: continentName,
            }
        })

        await writeFile('./data-processed.json', JSON.stringify(processedData, null, 4));
    } catch (error) {
        console.error('Error processing data:', error);
    }
}

processData();
