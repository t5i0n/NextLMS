// Grades Module
const GradesModule = {
    currentFilter: 'all',

    render() {
        const page = document.getElementById('grades-page');

        page.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Grades Dashboard</h1>
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary ${this.currentFilter === 'all' ? 'active' : ''}" onclick="GradesModule.filterByCourse('all')">
                        All Courses
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary ${this.currentFilter === 'github' ? 'active' : ''}" onclick="GradesModule.filterByCourse('github')">
                        GitHub
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary ${this.currentFilter === 'linkedin' ? 'active' : ''}" onclick="GradesModule.filterByCourse('linkedin')">
                        LinkedIn
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary ${this.currentFilter === 'canva' ? 'active' : ''}" onclick="GradesModule.filterByCourse('canva')">
                        Canva
                    </button>
                </div>
            </div>

            <!-- Performance Summary Cards -->
            <div class="row mb-4 performance-summary">
                <div class="col-md-3">
                    <div class="card performance-card top-performer-card">
                        <div class="card-body text-center">
                            <i class="bi bi-trophy-fill trophy-gold"></i>
                            <h5 class="mt-2">Top Performer</h5>
                            <h3 class="mb-0">Sami</h3>
                            <small class="text-muted">95% Average</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card performance-card">
                        <div class="card-body text-center">
                            <i class="bi bi-star-fill trophy-silver"></i>
                            <h5 class="mt-2">2nd Place</h5>
                            <h3 class="mb-0">Bety</h3>
                            <small class="text-muted">95% Average</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card performance-card">
                        <div class="card-body text-center">
                            <i class="bi bi-star-fill trophy-bronze"></i>
                            <h5 class="mt-2">3rd Place</h5>
                            <h3 class="mb-0">Tsi</h3>
                            <small class="text-muted">90% Average</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card performance-card">
                        <div class="card-body text-center">
                            <i class="bi bi-graph-up"></i>
                            <h5 class="mt-2">Class Average</h5>
                            <h3 class="mb-0">84%</h3>
                            <small class="text-success">↑ +5% from last month</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header bg-white">
                    <h5 class="mb-0">Student Performance Rankings</h5>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover rankings-table mb-0">
                            <thead>
                                <tr>
                                    <th style="width: 80px">Rank</th>
                                    <th>Student</th>
                                    <th>Course</th>
                                    <th style="width: 120px">Grade</th>
                                    <th style="width: 120px">Status</th>
                                </tr>
                            </thead>
                            <tbody id="grades-table-body">
                                ${this.renderRanking()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    },

    filterByCourse(course) {
        this.currentFilter = course;
        this.render();
    },

    renderRanking() {
        const allGrades = [
            { rank: 1, studentId: 'ST001', studentName: 'Sami', course: 'Getting Started with Google Docs', grade: 95 },
            { rank: 2, studentId: 'ST006', studentName: 'Bety', course: 'Canva Design Basics for Beginners', grade: 95 },
            { rank: 3, studentId: 'ST001', studentName: 'Sami', course: 'GitHub Basics for Beginners', grade: 92 },
            { rank: 4, studentId: 'ST003', studentName: 'Miky', course: 'Getting Started with Google Docs', grade: 90 },
            { rank: 5, studentId: 'ST002', studentName: 'Tsi', course: 'GitHub Basics for Beginners', grade: 88 },
            { rank: 6, studentId: 'ST005', studentName: 'John', course: 'Getting Started with Google Docs', grade: 85 },
            { rank: 7, studentId: 'ST008', studentName: 'Abel', course: 'Getting Started with Google Docs', grade: 82 },
            { rank: 8, studentId: 'ST008', studentName: 'Abel', course: 'GitHub Basics for Beginners', grade: 78 },
            { rank: 9, studentId: 'ST003', studentName: 'Miky', course: 'Canva Design Basics for Beginners', grade: 78 },
            { rank: 10, studentId: 'ST005', studentName: 'John', course: 'GitHub Basics for Beginners', grade: 67 }
        ];

        let filteredGrades = [...allGrades];

        if (this.currentFilter !== 'all') {
            const courseMap = {
                'github': 'GitHub Basics for Beginners',
                'linkedin': 'LinkedIn Essentials for Beginners',
                'canva': 'Canva Design Basics for Beginners',
                'docs': 'Getting Started with Google Docs'
            };
            const courseName = courseMap[this.currentFilter];
            if (courseName) {
                filteredGrades = allGrades.filter(g => g.course === courseName);
                filteredGrades = filteredGrades.map((g, idx) => ({ ...g, rank: idx + 1 }));
            }
        }

        return filteredGrades.map(grade => {
            const rank = grade.rank;

            // Gold, Silver, Bronze styling for top 3 ranks
            let rankClass = '';
            let rankIcon = '';
            if (rank === 1) {
                rankClass = 'rank-gold';
                rankIcon = '<i class="bi bi-trophy-fill trophy-gold-icon"></i>';
            } else if (rank === 2) {
                rankClass = 'rank-silver';
                rankIcon = '<i class="bi bi-star-fill trophy-silver-icon"></i>';
            } else if (rank === 3) {
                rankClass = 'rank-bronze';
                rankIcon = '<i class="bi bi-star-fill trophy-bronze-icon"></i>';
            }

            // Performance-based colors (green, blue, yellow, red)
            let gradeClass = '';
            let performanceText = '';
            if (grade.grade >= 90) {
                gradeClass = 'performance-excellent';
                performanceText = 'Excellent';
            } else if (grade.grade >= 80) {
                gradeClass = 'performance-good';
                performanceText = 'Good';
            } else if (grade.grade >= 70) {
                gradeClass = 'performance-average';
                performanceText = 'Average';
            } else if (grade.grade >= 60) {
                gradeClass = 'performance-below';
                performanceText = 'Needs Work';
            } else {
                gradeClass = 'performance-poor';
                performanceText = 'Poor';
            }

            return `
                <tr onclick="viewStudentDetails('${grade.studentId}')" style="cursor: pointer;">
                    <td>
                        <div class="rank-badge ${rankClass}">
                            ${rankIcon}
                            <span>${rank}</span>
                        </div>
                    </td>
                    <td><strong>${grade.studentName}</strong></td>
                    <td>${grade.course}</td>
                    <td>
                        <span class="grade-percentage ${gradeClass}">
                            ${grade.grade}%
                        </span>
                    </td>
                    <td>
                        <span class="status-badge ${gradeClass}">${performanceText}</span>
                    </td>
                </tr>
            `;
        }).join('');
    },

    addGrade(gradeData) {
        showNotification('Grade submitted successfully!', 'success');
    }
};