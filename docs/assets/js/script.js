document.addEventListener("DOMContentLoaded", function () {
    const toggleContainer = document.querySelector(".toggle-container");
    const toggleSwitch = document.querySelector(".toggle-switch");

    if (!toggleContainer || !toggleSwitch) return;

    const applyDarkMode = () => {
        const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
        if (darkModeEnabled) {
            document.body.classList.add("dark-mode");
            toggleContainer.classList.add("dark");
            toggleSwitch.classList.add("dark");
        } else {
            document.body.classList.remove("dark-mode");
            toggleContainer.classList.remove("dark");
            toggleSwitch.classList.remove("dark");
        }
    };

    const toggleDarkMode = () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        toggleContainer.classList.toggle("dark", isDarkMode);
        toggleSwitch.classList.toggle("dark", isDarkMode);
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    };

    toggleContainer.addEventListener("click", toggleDarkMode);
    applyDarkMode();
});

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}