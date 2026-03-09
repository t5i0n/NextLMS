// Current selected role
let currentRole = "student";

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize the page
    initializeEventListeners();
    selectRole("student");
    
    // Pre-fill with demo credentials
    document.getElementById("email").value = "student@lms.com";
    document.getElementById("password").value = "student123";
    
    // Add animation on load
    document.querySelector(".dual-panel").style.opacity = "1";
});

// Initialize all event listeners
function initializeEventListeners() {
    // Role selection cards
    document.querySelectorAll(".role-card").forEach(card => {
        card.addEventListener("click", function() {
            const role = this.dataset.role;
            selectRole(role);
        });
    });
    
    // Password toggle
    document.querySelector(".toggle-password").addEventListener("click", togglePassword);
    
    // Login form submission
    document.getElementById("loginForm").addEventListener("submit", handleLogin);
    
    // Keyboard navigation
    document.addEventListener("keydown", handleKeyboardNav);
    
    // Social icons hover effects (handled by CSS now)
}

// Select role function
function selectRole(role) {
    currentRole = role;
    
    // Update active states
    const studentCard = document.getElementById("studentCard");
    const instructorCard = document.getElementById("instructorCard");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    if (role === "student") {
        studentCard.classList.add("active");
        instructorCard.classList.remove("active");
        emailInput.placeholder = "student@email.com";
        emailInput.value = "student@lms.com";  // Pre-fill student email
        passwordInput.value = "student123";     // Pre-fill student password
    } else {
        instructorCard.classList.add("active");
        studentCard.classList.remove("active");
        emailInput.placeholder = "instructor@email.com";
        emailInput.value = "instructor@lms.com";  // Pre-fill instructor email
        passwordInput.value = "instructor123";     // Pre-fill instructor password
    }
    
    // Update button text
    document.getElementById("selectedRoleDisplay").textContent =
        role.charAt(0).toUpperCase() + role.slice(1);
}

// Toggle password visibility - FIXED: Now properly receives the click event
function togglePassword(event) {
    const passwordInput = document.getElementById("password");
    const toggleIcon = event.currentTarget;
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("bi-eye-slash");
        toggleIcon.classList.add("bi-eye");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("bi-eye");
        toggleIcon.classList.add("bi-eye-slash");
    }
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginBtn = document.getElementById("loginBtn");
    
    // Simple validation
    if (!email || !password) {
        showNotification("Please fill in all fields", "error");
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification("Please enter a valid email address", "error");
        return;
    }
    
    // Show loading state
    loginBtn.classList.add("loading");
    loginBtn.textContent = "Signing in...";
    
    // Simulate API call
    setTimeout(() => {
        loginBtn.classList.remove("loading");
        
        // Demo credentials check
        if (currentRole === "student" && email === "student@lms.com" && password === "student123") {
            showNotification("Student login successful! Redirecting...", "success");
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect to student dashboard
            }, 1500);
        } else if (currentRole === "instructor" && email === "instructor@lms.com" && password === "instructor123") {
            showNotification("Instructor login successful! Redirecting...", "success");
            setTimeout(() => {
                window.location.href = "instructor-dashboard.html"; // Redirect to instructor dashboard
            }, 1500);
        } else {
            showNotification("Invalid credentials. Demo: student@lms.com / instructor@lms.com", "error");
            loginBtn.textContent = "Sign In as " + currentRole.charAt(0).toUpperCase() + currentRole.slice(1);
        }
    }, 1500);
}

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show notification
function showNotification(message, type) {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type === "error" ? "danger" : "success"}`;
    alertDiv.innerHTML = `
        <i class="bi bi-${type === "error" ? "exclamation-circle" : "check-circle"} me-2"></i>
        ${message}
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Handle keyboard navigation
function handleKeyboardNav(e) {
    if (e.key === "1") {
        selectRole("student");
    } else if (e.key === "2") {
        selectRole("instructor");
    }
}


 
 const studentCard = document.getElementById("studentCard");
const instructorCard = document.getElementById("instructorCard");

const studentFields = document.getElementById("studentFields");

studentCard.addEventListener("click", () => {
  studentFields.style.display = "block";
  document.getElementById("selectedRoleDisplay").textContent = "Student";
});

instructorCard.addEventListener("click", () => {
  studentFields.style.display = "none";
  document.getElementById("selectedRoleDisplay").textContent = "Instructor";
});

window.onload = function () {
  studentFields.style.display = "block";
};

