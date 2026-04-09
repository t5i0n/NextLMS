// Main Application Entry Point
document.addEventListener('DOMContentLoaded', function() {
    // Initialize data
    initializeSampleData();
    
    // Initialize router
    Router.init();
    
    // Add password strength listener
    document.addEventListener('input', function(e) {
        if (e.target.id === 'newPassword') {
            const strength = checkPasswordStrength(e.target.value);
            const progressBar = document.getElementById('passwordStrength');
            const strengthText = document.getElementById('passwordStrengthText');
            
            if (progressBar) {
                progressBar.style.width = strength + '%';
                
                if (strength < 40) {
                    progressBar.className = 'progress-bar bg-danger';
                    strengthText.textContent = 'Weak password';
                } else if (strength < 70) {
                    progressBar.className = 'progress-bar bg-warning';
                    strengthText.textContent = 'Medium password';
                } else {
                    progressBar.className = 'progress-bar bg-success';
                    strengthText.textContent = 'Strong password';
                }
            }
        }
        
        if (e.target.id === 'confirmPassword') {
            const newPass = document.getElementById('newPassword')?.value;
            if (e.target.value !== newPass) {
                e.target.classList.add('is-invalid');
            } else {
                e.target.classList.remove('is-invalid');
            }
        }
    });
});

// Global functions for onclick handlers
window.viewStudentDetails = function(studentId) {
    Router.navigateTo('student');
    
    const student = getStudentById(studentId);
    const courses = coursesData.filter(c => c.students.includes(studentId));
    const grades = getStudentGrades(studentId);
    
    const page = document.getElementById('student-page');
    page.innerHTML = `
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Student Details</h1>
            <button class="btn btn-outline-secondary" onclick="Router.navigateTo('dashboard')">
                <i class="bi bi-arrow-left me-1"></i>Back to Dashboard
            </button>
        </div>
        
        <div id="student-details-container">
            <div class="student-profile-header text-center">
                <div class="student-avatar-large mx-auto">
                    ${student.name.charAt(0)}
                </div>
                <h3>${student.name}</h3>
                <p class="mb-1">${student.batch}</p>
                <p class="mb-0"><i class="bi bi-envelope me-2"></i>${student.email}</p>
                <p class="mb-0"><i class="bi bi-card-text me-2"></i>ID: ${student.id}</p>
                <p class="mb-0"><i class="bi bi-calendar me-2"></i>Enrolled: ${formatDate(student.enrollmentDate)}</p>
            </div>
            
            <div class="row">
                <div class="col-12 mb-4">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">Course Progress</h5>
                        </div>
                        <div class="card-body">
                            ${renderStudentCourses(courses, grades)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

function renderStudentCourses(courses, grades) {
    if (courses.length === 0) {
        return '<p class="text-muted text-center py-4">No courses enrolled</p>';
    }
    
    return courses.map(course => {
        const grade = grades.find(g => g.courseId === course.id);
        const gradeValue = grade ? grade.grade : 'N/A';
        const status = gradeValue !== 'N/A' && gradeValue >= 60 ? 'Completed' : 'In Progress';
        const statusClass = status === 'Completed' ? 'status-completed' : 'status-progress';
        
        return `
            <div class="course-progress-card mb-3 p-3 border rounded">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h6 class="mb-0">${course.name}</h6>
                    <span class="badge bg-${status === 'Completed' ? 'success' : 'warning'}">${status}</span>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <small class="text-muted">Grade</small>
                        <h5>${gradeValue}%</h5>
                    </div>
                    <div class="col-md-6">
                        <small class="text-muted">Course Code</small>
                        <h6>${course.code}</h6>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

window.previewProfilePicture = function(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePreview').src = e.target.result;
            document.getElementById('sidebar-profile-img').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
};

window.submitGrade = function() {
    const studentName = document.getElementById('studentName').value;
    const courseName = document.getElementById('courseName').value;
    const gradeValue = document.getElementById('gradeValue').value;
    const assessmentType = document.getElementById('assessmentType').value;
    
    if (!studentName || !courseName || !gradeValue || !assessmentType) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (gradeValue < 0 || gradeValue > 100) {
        showNotification('Grade must be between 0 and 100', 'error');
        return;
    }
    
    GradesModule.addGrade({
        studentName,
        courseName,
        gradeValue,
        assessmentType
    });
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('gradeModal'));
    modal.hide();
    document.getElementById('gradeForm').reset();
};

window.addNewCourse = function() {
    const name = document.getElementById('courseName').value;
    const code = document.getElementById('courseCode').value;
    const description = document.getElementById('courseDescription').value;
    const visibility = document.getElementById('courseVisibility').value;
    
    if (!name || !code) {
        showNotification('Please fill in required fields', 'error');
        return;
    }
    
    CoursesModule.addNewCourse({
        name,
        code,
        description,
        visibility,
        enrollment: 'open'
    });
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('addCourseModal'));
    modal.hide();
    document.getElementById('addCourseForm').reset();
};

// Expose modules globally for onclick handlers
window.Router = Router;
window.StudentsModule = StudentsModule;
window.CoursesModule = CoursesModule;
window.GradesModule = GradesModule;
window.SettingsModule = SettingsModule;