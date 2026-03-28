// Main Application Entry Point
document.addEventListener('DOMContentLoaded', function() {
    // Initialize data
    initializeSampleData();
    
    // Initialize Bootstrap tooltips
    initBootstrapComponents();
    
    // Initialize modules
    Router.init();
    SettingsModule.init();
    DashboardModule.init();
    
    // Show dashboard by default
    Router.navigateTo('dashboard');
    
    // Add interactive features
    addInteractiveFeatures();
    
    // Set today's date in calendar
    setTodayDate();
});

function initBootstrapComponents() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

function addInteractiveFeatures() {
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'd') {
            e.preventDefault();
            Router.navigateTo('dashboard');
        }
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            Router.navigateTo('students');
        }
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            Router.navigateTo('courses');
        }
        if (e.ctrlKey && e.key === 'g') {
            e.preventDefault();
            Router.navigateTo('grades');
        }
    });
}

function setTodayDate() {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("calendar").value = today;
}