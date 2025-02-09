document.addEventListener("DOMContentLoaded", function () {
    const toggleContainer = document.querySelector(".toggle-container");
    const toggleSwitch = document.querySelector(".toggle-switch");

    if (!toggleContainer || !toggleSwitch) return;

    const applyDarkMode = () => {
        const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
        document.body.classList.toggle("dark-mode", darkModeEnabled);
        toggleContainer.classList.toggle("dark", darkModeEnabled);
        toggleSwitch.classList.toggle("dark", darkModeEnabled);
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
