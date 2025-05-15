fetch('http://127.0.0.1:5600/src/js/pack.json')
.then(response => response.json())
.then(data =>{
    const list_user = document.getElementById('user_list');
    data.forEach(newUsers => {
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
         <img src="${newUsers.image}" alt="${newUsers.name}" width="200px">
        <h3>${newUsers.name}</h3>
        <p>Əmək haqqı: ${newUsers.salary} AZN</p>
        <p>Açıqlama: ${newUsers.description}</p>
        <p>Məlumat: ${newUsers.info}</p>`;
        list_user.appendChild(div);
    });
})

.catch(error => {
    console.error('Xəta baş verdi:', error);
});