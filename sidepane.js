const pane = document.getElementById("sidepane");
const nclose = document.getElementById("close");
const btn = document.getElementById("pane_toggle");
const dirs = [
    document.getElementById("h_cl"),
    document.getElementById("a_cl"),
    document.getElementById("p_cl"),
    document.getElementById("c_cl")
]



var isClose = true;

function OnClick() {
    if (isClose == true)
    {
        pane.classList.remove("hidden");
        isClose = false;
    } else {
        pane.classList.add("hidden");
        isClose = true;
    }
}

function ofClick() {
    if (isClose == false)
    {
        pane.classList.add("hidden");
        isClose = true;
    } else {
        pane.classList.remove("hidden");
        isClose = false;
    }
}

dirs.forEach(
    (value) => {
        value.addEventListener("click", ofClick);
    }
);

btn.addEventListener("click", OnClick);

nclose.addEventListener("click", ofClick);
