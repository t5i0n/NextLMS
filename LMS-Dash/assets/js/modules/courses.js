// Courses Module
const CoursesModule = {
    render() {
        const page = document.getElementById('courses-page');

        page.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Courses Dashboard</h1>
                <button type="button" class="btn btn-sm btn-outline-primary" onclick="CoursesModule.showAddModal()">
                    <i class="bi bi-plus-circle me-1"></i>Add Course
                </button>
            </div>

            <div id="courses-with-students" class="row">
                ${this.renderGitHubCourse()}
                ${this.renderLinkedInCourse()}
                ${this.renderCanvaCourse()}
                ${this.renderGoogleDocsCourse()}
            </div>
        `;

        // Initialize hover effects after render
        setTimeout(() => this.initCourseHoverEffects(), 100);
    },

    renderGitHubCourse() {
        return `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="course-enrollment-card course-card">
                    <div class="course-header">
                        <div class="d-flex justify-content-between align-items-start">
                            <h5 class="mb-1">GitHub Basics for Beginners</h5>
                            <!-- NEW: Active Status Indicator -->
                            <div class="active-status-indicator active" title="Course is active">
                                <span class="active-dot"></span>
                                <span class="active-text">Active</span>
                            </div>
                        </div>
                        <!-- Course Info Boxes: Course Code + Public/Private -->
                        <div class="course-info-boxes mt-2">
                            <span class="course-code-badge"><i class="bi bi-hash"></i> GH101</span>
                            <span class="enrollment-type-badge public"><i class="bi bi-globe"></i> Public</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="course-stats mb-3">
                            <span><i class="bi bi-people-fill"></i> 4 Students</span>
                            <span><i class="bi bi-clock-history"></i> 85% Completion</span>
                        </div>
                        <h6 class="mb-3 enrolled-label">
                            <i class="bi bi-person-check-fill me-2"></i>
                            Enrolled Students
                        </h6>
                        <div class="enrolled-students-list">
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST008')">
                                <div class="student-avatar-small">A</div>
                                <div class="flex-grow-1">
                                    <strong>Abel</strong>
                                    <br>
                                    <small class="text-muted">ST008</small>
                                </div>
                                <div class="student-progress-indicator">78%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST005')">
                                <div class="student-avatar-small">J</div>
                                <div class="flex-grow-1">
                                    <strong>John</strong>
                                    <br>
                                    <small class="text-muted">ST005</small>
                                </div>
                                <div class="student-progress-indicator">67%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST001')">
                                <div class="student-avatar-small">S</div>
                                <div class="flex-grow-1">
                                    <strong>Sami</strong>
                                    <br>
                                    <small class="text-muted">ST001</small>
                                </div>
                                <div class="student-progress-indicator">92%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST002')">
                                <div class="student-avatar-small">T</div>
                                <div class="flex-grow-1">
                                    <strong>Tsi</strong>
                                    <br>
                                    <small class="text-muted">ST002</small>
                                </div>
                                <div class="student-progress-indicator">88%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderLinkedInCourse() {
        return `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="course-enrollment-card course-card">
                    <div class="course-header">
                        <div class="d-flex justify-content-between align-items-start">
                            <h5 class="mb-1">LinkedIn Essentials for Beginners</h5>
                            <div class="active-status-indicator active">
                                <span class="active-dot"></span>
                                <span class="active-text">Active</span>
                            </div>
                        </div>
                        <div class="course-info-boxes mt-2">
                            <span class="course-code-badge"><i class="bi bi-hash"></i> LI101</span>
                            <span class="enrollment-type-badge public"><i class="bi bi-globe"></i> Public</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="course-stats mb-3">
                            <span><i class="bi bi-people-fill"></i> 4 Students</span>
                            <span><i class="bi bi-clock-history"></i> 76% Completion</span>
                        </div>
                        <h6 class="mb-3 enrolled-label">
                            <i class="bi bi-person-check-fill me-2"></i>
                            Enrolled Students
                        </h6>
                        <div class="enrolled-students-list">
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST004')">
                                <div class="student-avatar-small">E</div>
                                <div class="flex-grow-1">
                                    <strong>Emma</strong>
                                    <br>
                                    <small class="text-muted">ST004</small>
                                </div>
                                <div class="student-progress-indicator">88%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST003')">
                                <div class="student-avatar-small">M</div>
                                <div class="flex-grow-1">
                                    <strong>Miky</strong>
                                    <br>
                                    <small class="text-muted">ST003</small>
                                </div>
                                <div class="student-progress-indicator">78%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST001')">
                                <div class="student-avatar-small">S</div>
                                <div class="flex-grow-1">
                                    <strong>Sami</strong>
                                    <br>
                                    <small class="text-muted">ST001</small>
                                </div>
                                <div class="student-progress-indicator">95%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST002')">
                                <div class="student-avatar-small">T</div>
                                <div class="flex-grow-1">
                                    <strong>Tsi</strong>
                                    <br>
                                    <small class="text-muted">ST002</small>
                                </div>
                                <div class="student-progress-indicator">92%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderCanvaCourse() {
        return `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="course-enrollment-card course-card">
                    <div class="course-header">
                        <div class="d-flex justify-content-between align-items-start">
                            <h5 class="mb-1">Canva Design Basics for Beginners</h5>
                            <div class="active-status-indicator active">
                                <span class="active-dot"></span>
                                <span class="active-text">Active</span>
                            </div>
                        </div>
                        <div class="course-info-boxes mt-2">
                            <span class="course-code-badge"><i class="bi bi-hash"></i> CD101</span>
                            <span class="enrollment-type-badge private"><i class="bi bi-lock"></i> Private</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="course-stats mb-3">
                            <span><i class="bi bi-people-fill"></i> 4 Students</span>
                            <span><i class="bi bi-clock-history"></i> 82% Completion</span>
                        </div>
                        <h6 class="mb-3 enrolled-label">
                            <i class="bi bi-person-check-fill me-2"></i>
                            Enrolled Students
                        </h6>
                        <div class="enrolled-students-list">
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST006')">
                                <div class="student-avatar-small">B</div>
                                <div class="flex-grow-1">
                                    <strong>Bety</strong>
                                    <br>
                                    <small class="text-muted">ST006</small>
                                </div>
                                <div class="student-progress-indicator">95%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST004')">
                                <div class="student-avatar-small">E</div>
                                <div class="flex-grow-1">
                                    <strong>Emma</strong>
                                    <br>
                                    <small class="text-muted">ST004</small>
                                </div>
                                <div class="student-progress-indicator">88%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST007')">
                                <div class="student-avatar-small">L</div>
                                <div class="flex-grow-1">
                                    <strong>Lidiya</strong>
                                    <br>
                                    <small class="text-muted">ST007</small>
                                </div>
                                <div class="student-progress-indicator">90%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST003')">
                                <div class="student-avatar-small">M</div>
                                <div class="flex-grow-1">
                                    <strong>Miky</strong>
                                    <br>
                                    <small class="text-muted">ST003</small>
                                </div>
                                <div class="student-progress-indicator">78%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderGoogleDocsCourse() {
        return `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="course-enrollment-card course-card">
                    <div class="course-header">
                        <div class="d-flex justify-content-between align-items-start">
                            <h5 class="mb-1">Getting Started with Google Docs</h5>
                            <div class="active-status-indicator active">
                                <span class="active-dot"></span>
                                <span class="active-text">Active</span>
                            </div>
                        </div>
                        <div class="course-info-boxes mt-2">
                            <span class="course-code-badge"><i class="bi bi-hash"></i> GD101</span>
                            <span class="enrollment-type-badge public"><i class="bi bi-globe"></i> Public</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="course-stats mb-3">
                            <span><i class="bi bi-people-fill"></i> 4 Students</span>
                            <span><i class="bi bi-clock-history"></i> 70% Completion</span>
                        </div>
                        <h6 class="mb-3 enrolled-label">
                            <i class="bi bi-person-check-fill me-2"></i>
                            Enrolled Students
                        </h6>
                        <div class="enrolled-students-list">
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST001')">
                                <div class="student-avatar-small">S</div>
                                <div class="flex-grow-1">
                                    <strong>Sami</strong>
                                    <br>
                                    <small class="text-muted">ST001</small>
                                </div>
                                <div class="student-progress-indicator">95%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST005')">
                                <div class="student-avatar-small">J</div>
                                <div class="flex-grow-1">
                                    <strong>John</strong>
                                    <br>
                                    <small class="text-muted">ST005</small>
                                </div>
                                <div class="student-progress-indicator">85%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST006')">
                                <div class="student-avatar-small">B</div>
                                <div class="flex-grow-1">
                                    <strong>Bety</strong>
                                    <br>
                                    <small class="text-muted">ST006</small>
                                </div>
                                <div class="student-progress-indicator">95%</div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST008')">
                                <div class="student-avatar-small">A</div>
                                <div class="flex-grow-1">
                                    <strong>Abel</strong>
                                    <br>
                                    <small class="text-muted">ST008</small>
                                </div>
                                <div class="student-progress-indicator">82%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // NEW: Improved Add Course Modal with full form
    showAddModal() {
        // Check if modal exists, if not create it
        let modal = document.getElementById('addCourseModal');
        if (!modal) {
            this.createAddCourseModal();
        }

        const modalElement = document.getElementById('addCourseModal');
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();
    },

    // NEW: Create improved course modal
    createAddCourseModal() {
        const modalHTML = `
            <div class="modal fade" id="addCourseModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <i class="bi bi-plus-circle me-2"></i>Add New Course
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="addCourseForm">
                                <div class="mb-3">
                                    <label class="form-label">Course Name *</label>
                                    <input type="text" class="form-control" id="courseName" 
                                           placeholder="e.g., JavaScript Fundamentals" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Course Code *</label>
                                    <input type="text" class="form-control" id="courseCode" 
                                           placeholder="e.g., JS101" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Description</label>
                                    <textarea class="form-control" id="courseDescription" rows="3" 
                                              placeholder="Enter course description..."></textarea>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Course Type *</label>
                                        <select class="form-select" id="courseType">
                                            <option value="public">Public (Anyone can view)</option>
                                            <option value="private">Private (Invite only)</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Status *</label>
                                        <select class="form-select" id="courseStatus">
                                            <option value="active">Active</option>
                                            <option value="draft">Draft</option>
                                            <option value="archived">Archived</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Max Students</label>
                                    <input type="number" class="form-control" id="maxStudents" 
                                           value="30" min="1" max="100">
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="showPasswordToggle">
                                        <label class="form-check-label" for="showPasswordToggle">
                                            Show/Hide enrollment key field
                                        </label>
                                    </div>
                                </div>
                                <div class="mb-3" id="enrollmentKeyField" style="display: none;">
                                    <label class="form-label">Enrollment Key</label>
                                    <div class="input-group">
                                        <input type="password" class="form-control" id="enrollmentKey" 
                                               placeholder="Optional enrollment key">
                                        <button class="btn btn-outline-secondary" type="button" 
                                                onclick="CoursesModule.toggleKeyVisibility()">
                                            <i class="bi bi-eye"></i>
                                        </button>
                                    </div>
                                    <small class="text-muted">Students will need this key to enroll</small>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                <i class="bi bi-x-lg"></i> Cancel
                            </button>
                            <button type="button" class="btn btn-primary" onclick="CoursesModule.addNewCourse()">
                                <i class="bi bi-check-lg"></i> Add Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Add event listener for show password toggle
        const toggleCheckbox = document.getElementById('showPasswordToggle');
        if (toggleCheckbox) {
            toggleCheckbox.addEventListener('change', (e) => {
                const keyField = document.getElementById('enrollmentKeyField');
                keyField.style.display = e.target.checked ? 'block' : 'none';
            });
        }
    },

    // NEW: Toggle key visibility
    toggleKeyVisibility() {
        const keyInput = document.getElementById('enrollmentKey');
        if (keyInput) {
            const type = keyInput.type === 'password' ? 'text' : 'password';
            keyInput.type = type;
        }
    },

    // UPDATED: Add course with validation and notification
    addNewCourse() {
        const name = document.getElementById('courseName')?.value;
        const code = document.getElementById('courseCode')?.value;
        const type = document.getElementById('courseType')?.value;
        const status = document.getElementById('courseStatus')?.value;
        const description = document.getElementById('courseDescription')?.value;
        const maxStudents = document.getElementById('maxStudents')?.value;
        const enrollmentKey = document.getElementById('enrollmentKey')?.value;

        // Validation
        if (!name || !code) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        const courseData = { name, code, type, status, description, maxStudents, enrollmentKey };

        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('addCourseModal'));
        modal.hide();

        // Show success notification
        showNotification(`Course "${name}" added successfully!`, 'success');

        // Reset form
        const form = document.getElementById('addCourseForm');
        if (form) form.reset();

        console.log('Course added:', courseData);
    },

    // NEW: Initialize course card hover effects
    initCourseHoverEffects() {
        const courseCards = document.querySelectorAll('.course-card');
        courseCards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                this.style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
            });
            card.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            });
        });

        // Student list item hover effects
        const studentItems = document.querySelectorAll('.enrolled-student-item');
        studentItems.forEach(item => {
            item.addEventListener('mouseenter', function () {
                this.style.backgroundColor = 'rgba(96, 134, 245, 0.08)';
                this.style.transform = 'translateX(5px)';
                this.style.transition = 'all 0.2s ease';
                this.style.cursor = 'pointer';
            });
            item.addEventListener('mouseleave', function () {
                this.style.backgroundColor = 'transparent';
                this.style.transform = 'translateX(0)';
            });
        });
    }
};