const addToLocaloStorage = () =>{
    const idInput = document.getElementById('storage-id')
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value')
    const value = valueInput.value;

    // add to localStorage
    localStorage.setItem(id, value)

    idInput.value = '';
    valueInput.value = '';
}