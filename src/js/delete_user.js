const fs = require('fs');

const filePath = './src/js/pack.json';
const userIdToDelete = 10;

try {
    const data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);

    const updatedUsers = users.filter(user=> parseInt(user.id) !== userIdToDelete);

    fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));
    console.log(`id-si ${userIdToDelete} olan istifadeci silindi`);
    
}catch(error){
    console.error('Xəta baş verdi:', error);
}