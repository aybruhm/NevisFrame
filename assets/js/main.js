const form = document.querySelector("#frameForm");
const fname = document.querySelector("#firstName");
const lname = document.querySelector("#lastName");
const uname = document.querySelector("#userName");
const pwd = document.querySelector("#userPwd");
const altFrm = document.querySelector("#alertForm");
const goForm = document.querySelector("#goForm");

form.addEventListener("submit", validateForm);

formList = [fname, lname, uname, pwd]

function validateForm(e) {
    e.preventDefault();
    
    if (fname.value === "" && lname.value === "" && uname.value === "" && pwd.value === "") {
        formList.map(i => {
            i.style.border = "2px solid red";
        });
        altFrm.classList.toggle("d-none");
    }
    // else if (fname.value.contains()) {
    //     formList.map(i => {
    //         i.style.border = "2px solid red";
    //         altFrm.classList.add("d-none");
    //         goForm.classList.remove("d-none");
    //     })
    // }
}