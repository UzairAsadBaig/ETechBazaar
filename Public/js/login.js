const usernameInp = document.querySelector(".username_input");
const passwordInp = document.querySelector(".password_input");
const loginBtn = document.querySelector(".login_btn");
const login = async(username, password) => {
    try {
        const res = await axios({
            method: "POST",
            url: "/api/v1/user/login",
            data: {
                username,
                password,
            },
        });
        if (res.data.status === "success") {
            alert("Logged In Successfully!");
            window.setTimeout(() => {
                location.assign("/admin/dashboard");
            }, 500);
        }
    } catch (err) {
        console.log(err.response.data);
        alert(err.response.data.message);
    }
};

export const loginEvent = () => {
    if (loginBtn) {
        loginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            login(usernameInp.value, passwordInp.value);
        });
    }
};