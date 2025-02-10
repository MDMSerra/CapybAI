document.addEventListener("DOMContentLoaded", function () {
    const toggleContainer = document.querySelector(".toggle-container");
    const toggleSwitch = document.querySelector(".toggle-switch");
    const darkModeClass = "dark-mode";
    const darkClass = "dark";

    if (!toggleContainer || !toggleSwitch) return;

    const applyDarkMode = (isDarkMode) => {
        document.body.classList.toggle(darkModeClass, isDarkMode);
        toggleContainer.classList.toggle(darkClass, isDarkMode);
        toggleSwitch.classList.toggle(darkClass, isDarkMode);
    };

    const toggleDarkMode = () => {
        const isDarkMode = !document.body.classList.contains(darkModeClass);
        applyDarkMode(isDarkMode);
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    };

    const initializeDarkMode = () => {
        const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
        applyDarkMode(darkModeEnabled);
    };

    toggleContainer.addEventListener("click", toggleDarkMode);
    initializeDarkMode();
});

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}