const reportAddressButton = document.querySelector(".reportAddress");
const reportWebButton = document.querySelector(".reportWeb");

const reportAddressForm = document.querySelector(".reportAddress1");
const reportWebForm = document.querySelector(".reportWeb1");

reportAddressButton.addEventListener('click', () => {
    reportAddressForm.classList.toggle("reportAddress1");
    reportAddressButton.classList.toggle("actB");
});

reportWebButton.addEventListener('click', () => {
    reportWebForm.classList.toggle("reportWeb1");
    reportWebButton.classList.toggle("actB");
});

const autoscroll = document.querySelector(".autoscroll");

setInterval(() => {
    let f = 100;
    if (f == 1000) {
        f = f - f;
        autoscroll.scrollLeft = 0;
    }
    else {
        f = f + f;
        autoscroll.scrollLeft += f;
    }
}, 2000)


const toast = (e) => {
    document.querySelector(".toast").innerHTML = `<span>${e}</span>`;
}

const form0 = document.querySelector(".form0");
const form1 = document.querySelector(".form1");
form0.addEventListener('submit', (e) => {
    e.preventDefault();
    toast("Success! Thanks For Your Contribution!");
    form0.clear()
});
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    toast("Success! Thanks For Your Contribution!");
    form1.clear()
});

document.querySelector(".loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("wallet", document.querySelector(".adr").value);
    toast("Success!");

    setTimeout(() => {
        window.location.href = "https://" + window.location.host + "/dashboard.html";
    }, 4000);

});
document.querySelector(".loginB").addEventListener('click', () => {
    document.querySelector(".loginF").style.display = "block";
});