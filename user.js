const BASE_URL = 'http://localhost:8000';

window.onload = async () => {
    await loadData();
}

const loadData = async () => {
    console.log('user page loaded');
    const response = await axios.get(`${BASE_URL}/user`);
    console.log(response.data);

    const userDOM = document.getElementById('user');
    
    let htmlData = '<table>'; 

    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i];
        htmlData += `<tr>
            <td>${user.id}</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.interests}</td>
            <td>${user.description}</td>
            <td class="actions">
                <a href='index1.html?id=${user.id}'><button class="btn-edit">Edit</button></a>
                <button class="btn-delete" data-id='${user.id}'>Delete</button>
            </td>
        </tr>`;
    }
    htmlData += '</table>'; 
    userDOM.innerHTML = htmlData;


    const deleteButtons = document.getElementsByClassName('btn-delete'); 
    for (let button of deleteButtons) {
        button.addEventListener('click', async (event) => {
            const id = event.target.dataset.id;
            try {
                await axios.delete(`${BASE_URL}/user/${id}`);
                loadData(); 
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        });
    }

 
    const editButtons = document.getElementsByClassName('btn-edit'); 
    for (let button of editButtons) {
        button.addEventListener('click', (event) => {
            const id = event.target.dataset.id;
            window.location.href = `edit.html?id=${id}`;
        });
    }
}
