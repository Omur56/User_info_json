const fs = require('fs');


const newUsers = [
 {
    "name": "Lalə",
    "description": "kohne istfadeci",
    "image": "lale_image.webp",
    "info": "Java developer",
    "salary": "1150",
    
  }
 


];

const filePath = './src/js/pack.json';

try {

  const existingData = fs.readFileSync(filePath, 'utf8');
  const existingUsers = JSON.parse(existingData);

  const lastUser = existingUsers[existingUsers.length -1];
 let newId = lastUser ? parseInt(lastUser.id)+1:1;

  const updatedUsers = newUsers.map(user => ({
    ...user, 
    id:newId++
  }));

  const allUsers = existingUsers.concat(updatedUsers);

 
  fs.writeFileSync(filePath, JSON.stringify(allUsers, null, 2));
  console.log('Yeni istifadəçilər pack.json-a əlavə olundu.');
} catch (error) {
  console.error('Xəta baş verdi:', error);
}


