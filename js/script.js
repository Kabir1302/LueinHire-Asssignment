const signUpButtons = document.querySelectorAll(".btn");
signUpButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for signing up! More features coming soon.");
    });
});