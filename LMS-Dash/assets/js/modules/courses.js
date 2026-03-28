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
    },
    
    renderGitHubCourse() {
        return `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="course-enrollment-card">
                    <div class="course-header">
                        <h5 class="mb-1">GitHub Basics for Beginners</h5>
                        <div class="course-code">GH101</div>
                        <span class="enrollment-badge mt-2">
                            <i class="bi bi-globe me-1"></i>Public
                        </span>
                    </div>
                    <div class="card-body">
                        <h6 class="mb-3">
                            <i class="bi bi-people-fill me-2"></i>
                            Enrolled Students (4)
                        </h6>
                        <div class="enrolled-students-list">
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST008')">
                                <div class="flex-grow-1">
                                    <strong>Abel</strong>
                                    <br>
                                    <small class="text-muted">ST008</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST005')">
                                <div class="flex-grow-1">
                                    <strong>John</strong>
                                    <br>
                                    <small class="text-muted">ST005</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST001')">
                                <div class="flex-grow-1">
                                    <strong>Sami</strong>
                                    <br>
                                    <small class="text-muted">ST001</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST002')">
                                <div class="flex-grow-1">
                                    <strong>Tsi</strong>
                                    <br>
                                    <small class="text-muted">ST002</small>
                                </div>
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
                <div class="course-enrollment-card">
                    <div class="course-header">
                        <h5 class="mb-1">LinkedIn Essentials for Beginners</h5>
                        <div class="course-code">LI101</div>
                        <span class="enrollment-badge mt-2">
                            <i class="bi bi-globe me-1"></i>Public
                        </span>
                    </div>
                    <div class="card-body">
                        <h6 class="mb-3">
                            <i class="bi bi-people-fill me-2"></i>
                            Enrolled Students (4)
                        </h6>
                        <div class="enrolled-students-list">
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST004')">
                                <div class="flex-grow-1">
                                    <strong>Emma</strong>
                                    <br>
                                    <small class="text-muted">ST004</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST003')">
                                <div class="flex-grow-1">
                                    <strong>Miky</strong>
                                    <br>
                                    <small class="text-muted">ST003</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST001')">
                                <div class="flex-grow-1">
                                    <strong>Sami</strong>
                                    <br>
                                    <small class="text-muted">ST001</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST002')">
                                <div class="flex-grow-1">
                                    <strong>Tsi</strong>
                                    <br>
                                    <small class="text-muted">ST002</small>
                                </div>
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
                <div class="course-enrollment-card">
                    <div class="course-header">
                        <h5 class="mb-1">Canva Design Basics for Beginners</h5>
                        <div class="course-code">CD101</div>
                        <span class="enrollment-badge mt-2">
                            <i class="bi bi-lock me-1"></i>Private
                        </span>
                    </div>
                    <div class="card-body">
                        <h6 class="mb-3">
                            <i class="bi bi-people-fill me-2"></i>
                            Enrolled Students (4)
                        </h6>
                        <div class="enrolled-students-list">
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST006')">
                                <div class="flex-grow-1">
                                    <strong>Bety</strong>
                                    <br>
                                    <small class="text-muted">ST006</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST004')">
                                <div class="flex-grow-1">
                                    <strong>Emma</strong>
                                    <br>
                                    <small class="text-muted">ST004</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST007')">
                                <div class="flex-grow-1">
                                    <strong>Lidiya</strong>
                                    <br>
                                    <small class="text-muted">ST007</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST003')">
                                <div class="flex-grow-1">
                                    <strong>Miky</strong>
                                    <br>
                                    <small class="text-muted">ST003</small>
                                </div>
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
                <div class="course-enrollment-card">
                    <div class="course-header">
                        <h5 class="mb-1">Getting Started with Google Docs</h5>
                        <div class="course-code">GD101</div>
                        <span class="enrollment-badge mt-2">
                            <i class="bi bi-globe me-1"></i>Public
                        </span>
                    </div>
                    <div class="card-body">
                        <h6 class="mb-3">
                            <i class="bi bi-people-fill me-2"></i>
                            Enrolled Students (4)
                        </h6>
                        <div class="enrolled-students-list">
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST001')">
                                <div class="flex-grow-1">
                                    <strong>Sami</strong>
                                    <br>
                                    <small class="text-muted">ST001</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST005')">
                                <div class="flex-grow-1">
                                    <strong>John</strong>
                                    <br>
                                    <small class="text-muted">ST005</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST006')">
                                <div class="flex-grow-1">
                                    <strong>Bety</strong>
                                    <br>
                                    <small class="text-muted">ST006</small>
                                </div>
                            </div>
                            <div class="enrolled-student-item" onclick="viewStudentDetails('ST008')">
                                <div class="flex-grow-1">
                                    <strong>Abel</strong>
                                    <br>
                                    <small class="text-muted">ST008</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    showAddModal() {
        const modal = new bootstrap.Modal(document.getElementById('addCourseModal'));
        modal.show();
    },
    
    addNewCourse(courseData) {
        showNotification('Course added successfully!', 'success');
    }
};