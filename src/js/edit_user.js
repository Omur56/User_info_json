const fs  = require('fs');

const editUser = require('./pack.json');

const filePath = './src/js/pack.json';

try {
    const data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);

    const userIdToUpdate = 10;
    const newName = 'Lalə';
    const newDescription = 'Yeni Developer';
    const newInfo = 'Java developer';
    const newSalary = '1350';
    const newImage = 'lale_image.jpg';

 

    const updatedUsers = users.map(user => {
        if (user.id === userIdToUpdate) {
            return {
                ...user,
                name: newName,
                description: newDescription,
                info: newInfo,
                salary: newSalary,
                image: newImage
            };
        }
        return user;
    });

    fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));
    console.log(`id-si ${userIdToUpdate} olan istifadeci yenilendi`);
    
}catch(error){
    console.error('Xəta baş verdi:', error);
}