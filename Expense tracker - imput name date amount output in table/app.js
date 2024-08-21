window.addEventListener('load', solution);

function solution() {
    const addBtn = document.querySelector('button');
    const inputs = document.querySelectorAll('input');
    const table = document.querySelector('tbody');

    const nameField = inputs[0];
    const dateField = inputs[1];
    const amountField = inputs[2];
    const priceField = inputs[3];

    addBtn.addEventListener('click', add);

    function add(ev) {
        ev.preventDefault();
        let name = nameField.value;
        let date = dateField.value;
        let amount = amountField.value;
        let price = priceField.value;

        if (!name || !date || !amount || !price) {
            return;
        }

        const newRow = createTableRow(name, date, amount, price);
        table.appendChild(newRow);

        nameField.value = '';
        dateField.value = '';
        amountField.value = '';
        priceField.value = '';
    }

    function createTableRow(name, date, amount, price) {
        const tr = document.createElement('tr');
        const th1 = document.createElement('th');
        const th2 = document.createElement('th');
        const th3 = document.createElement('th');
        const th4 = document.createElement('th');
        
        const deleteButton = document.createElement('button');

        th1.textContent = name;
        th2.textContent = date;
        th3.textContent = amount;
        th4.textContent = price;
        deleteButton.textContent = 'X';

        deleteButton.className = 'delete-button';

        deleteButton.addEventListener('click', function () {
            table.removeChild(tr);
        });
        
        
        tr.append(th1, th2, th3, th4, deleteButton); // Append the cells to the row

        return tr;
    }
}
