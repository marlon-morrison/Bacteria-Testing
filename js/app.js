function Bacteria() {
    var int = prompt("Enter the amount of the Initial Bacteria.");
    var newint;
    for (let i = 1; i <= 10; i++) {
        newint = int * 2 * (i / 10);
        document.getElementById(`${i}`).innerHTML = newint;
    }
}