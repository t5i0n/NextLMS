// Page navigation functionality
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const pageElement = document.getElementById(pageId + '-page');
    if (pageElement) {
        pageElement.classList.add('active');
    }
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) {
                showPage(page);
            }
        });
    });
    
    // Set today's date in calendar
    const today = new Date().toISOString().split("T")[0];
    const calendar = document.getElementById("calendar");
    if (calendar) {
        calendar.value = today;
    }
    
    // Load saved theme
    loadSavedSettings();
});

// Profile picture preview
function previewProfilePicture(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profilePreview = document.getElementById('profilePreview');
            if (profilePreview) {
                profilePreview.src = e.target.result;
            }
            
            // Also update sidebar profile image
            const sidebarProfile = document.querySelector('.profile-thumbnail');
            if (sidebarProfile) {
                sidebarProfile.src = e.target.result;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Save profile settings
function saveProfileSettings() {
    const name = document.getElementById('profileName')?.value;
    const email = document.getElementById('profileEmail')?.value;
    
    // Update sidebar
    const sidebarName = document.querySelector('.profile-info h6');
    const sidebarEmail = document.querySelector('.profile-info small');
    
    if (sidebarName && name) sidebarName.textContent = name;
    if (sidebarEmail && email) sidebarEmail.textContent = email;
    
    showNotification('Profile updated successfully!', 'success');
}

// Save notification settings
function saveNotificationSettings() {
    showNotification('Notification preferences saved!', 'success');
}

// Save privacy settings
function savePrivacySettings() {
    showNotification('Privacy settings saved!', 'success');
}

// Select theme
function selectTheme(theme) {
    // Remove selected class from all theme options
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    event.currentTarget.classList.add('selected');
    
    // Apply theme
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    
    // Save preference
    localStorage.setItem('theme', theme);
}

// Save appearance settings
function saveAppearanceSettings() {
    showNotification('Appearance settings applied!', 'success');
}

// Load saved settings from localStorage
function loadSavedSettings() {
    // Load theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            // Update UI selection if theme options exist
            document.querySelectorAll('.theme-option').forEach(opt => {
                if (opt.getAttribute('onclick')?.includes('dark')) {
                    opt.classList.add('selected');
                }
            });
        }
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <i class="bi bi-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
        ${message}
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Export functions for global use
window.showPage = showPage;
window.previewProfilePicture = previewProfilePicture;
window.saveProfileSettings = saveProfileSettings;
window.saveNotificationSettings = saveNotificationSettings;
window.savePrivacySettings = savePrivacySettings;
window.selectTheme = selectTheme;
window.saveAppearanceSettings = saveAppearanceSettings;