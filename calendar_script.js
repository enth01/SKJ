document.addEventListener('DOMContentLoaded', function () {
    const editableCells = document.querySelectorAll('td[contenteditable="true"]');
    
    // Load saved data
    editableCells.forEach(cell => {
        const date = cell.getAttribute('data-date');
        const savedData = localStorage.getItem(`cell-${date}`);
        if (savedData) {
            cell.innerHTML = savedData;
        }
    });

    // Save data on input
    editableCells.forEach(cell => {
        cell.addEventListener('input', function () {
            const date = cell.getAttribute('data-date');
            localStorage.setItem(`cell-${date}`, cell.innerHTML);
        });
    });
});

const navbar = document.getElementById("colapseButon");

function paddingPreResponzivitu(){
    if (navbar.classList.contains('collapsed') == true) {
        document.getElementById("monthLabelJanuary").style.paddingTop = "8rem";
    } if (navbar.classList.contains('collapsed') == false) {
        document.getElementById("monthLabelJanuary").style.paddingTop = "15rem";
        console.log('penis');
    }
}