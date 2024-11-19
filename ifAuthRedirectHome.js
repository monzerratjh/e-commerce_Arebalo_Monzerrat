const ifAuthRedirectHome = () => {
    if (localStorage.getItem("email")) {
        location.href = "./index.html";
    }
};

ifAuthRedirectHome();