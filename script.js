let items = [];
let editingIndex = -1;


document.getElementById('crud-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    const itemInput = document.getElementById('item-name');
    const itemText = itemInput.value.trim();

    if (itemText === "") {
        alert("Please enter an item.");
        return;
    }

    if (editingIndex === -1) {
        items.push(itemText);
    } else {
        
        items[editingIndex] = itemText;
        editingIndex = -1; 
    }

    itemInput.value = '';  
    renderItems();  
});


function renderItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';  
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item}
            <button class="edit" onclick="editItem(${index})">Edit</button>
            <button class="delete" onclick="deleteItem(${index})">Delete</button>`;
        itemList.appendChild(li);
    });
}


function editItem(index) {
    const itemInput = document.getElementById('item-name');
    itemInput.value = items[index];  
    editingIndex = index;  
}

function deleteItem(index) {
    items.splice(index, 1);  
    renderItems();  
}
