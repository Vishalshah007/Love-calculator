function calculateBtn() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    if (name1 === "" || name2 === "") {
        alert('Both fields must be filled out');
    }
    else {
        const lovePercentage = Math.floor(Math.random() * 101);
        document.getElementById("result").innerHTML = `${name1} and ${name2} Love Percentage: ${lovePercentage}`;
    }
}
