;(function () {
    var s = document.getElementById("s");

    function v() {
        localStorage.value = s.value;
        console.log(localStorage.value);
    }

    s.addEventListener("keyup", v);
    s.value = localStorage.value;
}());