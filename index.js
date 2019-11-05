const englishKb = {
    rows: [
        [
            { key: '§', width: 1 },
            { key: '1', width: 1 },
            // ...
            { key: 'bspace', width: 2 }
        ],
        [
            { key: 'tab', width: 1 },
            { key: 'q', code: 81, width: 1 },
            // ...
            { key: '¨', width: 1 },
            { key: 'del', width: 1 }
        ]
    ]
};

document.addEventListener('keydown', evt => {
    const buttonEl = document.getElementById(evt.keyCode);
    if (buttonEl) {
        buttonEl.classList.add('active');
    }
})

document.addEventListener('keyup', evt => {
    const buttonEl = document.getElementById(evt.keyCode);
    if (buttonEl) {
        buttonEl.classList.remove('active');
    }
})

function renderKeyboardRow(rowEl, row) {
    row.forEach(button => {
        const buttonEl = document.createElement('button');
        buttonEl.classList.add(`width-${button.width}`);
        buttonEl.id = button.code;
        buttonEl.innerText = button.key;
        rowEl.appendChild(buttonEl);
    });
}

function renderKeyboard(target, keyboard) {
    keyboard.rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('keys-row');
        renderKeyboardRow(rowDiv, row);
        target.appendChild(rowDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const keyboardDiv = document.getElementById('keyboard');
    if (keyboardDiv) {
        renderKeyboard(keyboardDiv, englishKb);
    }
});