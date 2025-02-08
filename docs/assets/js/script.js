document.addEventListener("DOMContentLoaded", function () {
    const toggleContainer = document.getElementById("dark-mode-toggle");

    if (!toggleContainer) return;

    const applyDarkMode = () => {
        const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
        document.body.classList.toggle("dark-mode", darkModeEnabled);
        toggleContainer.classList.toggle("active", darkModeEnabled);
    };

    const toggleDarkMode = () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        toggleContainer.classList.toggle("active", isDarkMode);
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    };

    toggleContainer.addEventListener("click", toggleDarkMode);
    applyDarkMode();
});
