let btn = document.querySelector(".btn");

btn.addEventListener("click" , function (e) {
    e.preventDefault();

    let input = document.getElementById("input").value;
    let textarea = document.getElementById("textarea").value;
    let select = document.getElementById("select").value;



    console.log(input);
    console.log(textarea);
    console.log(select);
})