// Dashboard Module
const DashboardModule = {
    render() {
        const page = document.getElementById('dashboard-page');
        
        page.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Instructor Dashboard</h1>
                <div class="calendar-box">
                    <input type="date" id="calendar" />
                </div>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#gradeModal">
                        <i class="bi bi-plus-circle me-1"></i>Add Manual Grade
                    </button>
                </div>
            </div>

            <div class="alert alert-primary welcome-banner mb-4">
                <h4 class="alert-heading">Welcome back, Tebarek!</h4>
                <p class="mb-0">Here's what's happening with your students today.</p>
            </div>

            <div class="row mb-4">
                ${this.renderStats()}
            </div>

            <div class="row mb-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">Course Completion Progress</h5>
                        </div>
                        <div class="card-body">
                            ${this.renderCourseProgress()}
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-7">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">Student Progress Overview</h5>
                        </div>
                        <div class="card-body">
                            ${this.renderStudentProgress()}
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">Recent Activity</h5>
                        </div>
                        <div class="card-body">
                            ${this.renderRecentActivity()}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Set today's date
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('calendar').value = today;
    },
    
    renderStats() {
        // EXACTLY as shown in screenshot
        return `
            <div class="col-md-3">
                <div class="card stat-card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="card-subtitle text-muted">Total Students</h6>
                                <h2 class="card-title mb-0">48</h2>
                            </div>
                            <div class="stat-icon bg-primary">
                                <i class="bi bi-people-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stat-card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="card-subtitle text-muted">Batch 1</h6>
                                <h2 class="card-title mb-0">24 students</h2>
                                <small class="text-success">78% Complete</small>
                            </div>
                            <div class="stat-icon bg-success">
                                <i class="bi bi-person-workspace"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stat-card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="card-subtitle text-muted">Batch 2</h6>
                                <h2 class="card-title mb-0">24 students</h2>
                                <small class="text-warning">75% Complete</small>
                            </div>
                            <div class="stat-icon bg-warning">
                                <i class="bi bi-person-workspace"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stat-card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="card-subtitle text-muted">Active Courses</h6>
                                <h2 class="card-title mb-0">4</h2>
                                <small class="text-danger">12 Pending Grades</small>
                            </div>
                            <div class="stat-icon bg-danger">
                                <i class="bi bi-book-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderCourseProgress() {
        return `
            <div class="row">
                <div class="col-md-6">
                    <div class="course-item mb-3">
                        <h6>GitHub Basics for Beginners</h6>
                        <div class="row">
                            <div class="col-6">
                                <small>Batch 1</small>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-success" style="width: 85%">85%</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <small>Batch 2</small>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-info" style="width: 78%">78%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="course-item mb-3">
                        <h6>LinkedIn Essentials for Beginners</h6>
                        <div class="row">
                            <div class="col-6">
                                <small>Batch 1</small>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-success" style="width: 72%">72%</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <small>Batch 2</small>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-info" style="width: 81%">81%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="course-item mb-3">
                        <h6>Canva Design Basics for Beginners</h6>
                        <div class="row">
                            <div class="col-6">
                                <small>Batch 1</small>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-success" style="width: 90%">90%</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <small>Batch 2</small>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-info" style="width: 75%">75%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="course-item mb-3">
                        <h6>Getting Started with Google Docs</h6>
                        <div class="row">
                            <div class="col-6">
                                <small>Batch 1</small>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-success" style="width: 68%">68%</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <small>Batch 2</small>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-info" style="width: 72%">72%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderStudentProgress() {
        return `
            <div class="student-progress-list">
                <div class="student-item mb-3 p-2 border-bottom" onclick="viewStudentDetails('ST001')">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>Sami</strong>
                            <div class="text-muted small">Batch 1</div>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-success">85% (8)</span>
                            <small class="text-muted d-block">2 hours ago</small>
                        </div>
                    </div>
                </div>
                <div class="student-item mb-3 p-2 border-bottom" onclick="viewStudentDetails('ST002')">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>Tsi</strong>
                            <div class="text-muted small">Batch 1</div>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-success">92% (9)</span>
                            <small class="text-muted d-block">1 day ago</small>
                        </div>
                    </div>
                </div>
                <div class="student-item mb-3 p-2 border-bottom" onclick="viewStudentDetails('ST003')">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>Miky</strong>
                            <div class="text-muted small">Batch 2</div>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-warning">78% (7)</span>
                            <small class="text-muted d-block">2 days ago</small>
                        </div>
                    </div>
                </div>
                <div class="student-item mb-3 p-2 border-bottom" onclick="viewStudentDetails('ST004')">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>Emma</strong>
                            <div class="text-muted small">Batch 2</div>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-success">88% (8)</span>
                            <small class="text-muted d-block">1 day ago</small>
                        </div>
                    </div>
                </div>
                <div class="student-item mb-3 p-2 border-bottom" onclick="viewStudentDetails('ST005')">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>John</strong>
                            <div class="text-muted small">Batch 1</div>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-danger">67% (6)</span>
                            <small class="text-muted d-block">3 weeks ago</small>
                        </div>
                    </div>
                </div>
                <div class="student-item p-2" onclick="viewStudentDetails('ST006')">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>Bety</strong>
                            <div class="text-muted small">Batch 2</div>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-success">95% (10)</span>
                            <small class="text-muted d-block">30 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderRecentActivity() {
        return `
            <div class="activity-list">
                <div class="activity-item mb-3 pb-2 border-bottom">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon bg-primary me-3">
                            <i class="bi bi-file-text text-white"></i>
                        </div>
                        <div>
                            <strong>New submission</strong>
                            <div class="text-muted small">Tsi - Canva Design Assignment</div>
                            <small class="text-secondary">2 hours ago</small>
                        </div>
                    </div>
                </div>
                <div class="activity-item mb-3 pb-2 border-bottom">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon bg-success me-3">
                            <i class="bi bi-check-circle text-white"></i>
                        </div>
                        <div>
                            <strong>Assessment completed</strong>
                            <div class="text-muted small">Sami - Google Form Quiz</div>
                            <small class="text-secondary">5 hours ago</small>
                        </div>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon bg-warning me-3">
                            <i class="bi bi-folder text-white"></i>
                        </div>
                        <div>
                            <strong>Project submitted</strong>
                            <div class="text-muted small">Lidiya - Graphics Project</div>
                            <small class="text-secondary">1 day ago</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
