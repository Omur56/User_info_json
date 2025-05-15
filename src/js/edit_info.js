const fs = require('fs');


const user_info = [{
    "name": "Elnur",
    "description": "Frontend developer",
    "Salary": "750",
    "image": "image"
}];


const filePath = '.src/js/pack.json';

try {
    const data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);

    const updatedUsers = users.map(user => ({
        ...user,
        name: user_info[0].name,
        description: user_info[0].description,
        price: user_info[0].price,
        image: user_info[0].image
    }));

    fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));
    console.log('İstifadəçi məlumatları yeniləndi.');
} catch (error) {
    console.error('Xəta baş verdi:', error);
}