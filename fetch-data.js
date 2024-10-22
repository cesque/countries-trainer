const { writeFile } = require('fs/promises');

(async () => {
    const response = await fetch(
        'https://parseapi.back4app.com/classes/Country?limit=10000&include=continent&excludeKeys=shape',
        {
            headers: {
                'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja', // This is the fake app's application id
                'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH', // This is the fake app's readonly master key
            }
        }
    );
    const data = await response.json() // Here you have the data that you need
    
    await writeFile('./data.json', JSON.stringify(data, null, 4))
})();