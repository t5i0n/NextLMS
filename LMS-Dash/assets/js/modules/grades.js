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

            <div class="card">
                <div class="card-header bg-white">
                    <h5 class="mb-0">Student Performance Rankings</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover rankings-table">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Student</th>
                                    <th>Course</th>
                                    <th>Grade</th>
                                    <th>Status</th>
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
        // EXACT grades as shown in screenshot
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
                // Re-rank for filtered view
                filteredGrades = filteredGrades.map((g, idx) => ({ ...g, rank: idx + 1 }));
            }
        }
        
        return filteredGrades.map(grade => {
            const rank = grade.rank;
            
            let rankClass = '';
            if (rank === 1) rankClass = 'rank-1';
            else if (rank === 2) rankClass = 'rank-2';
            else if (rank === 3) rankClass = 'rank-3';
            
            let gradeClass = '';
            if (grade.grade >= 90) gradeClass = 'grade-a';
            else if (grade.grade >= 80) gradeClass = 'grade-b';
            else if (grade.grade >= 70) gradeClass = 'grade-c';
            else gradeClass = 'grade-d';
            
            return `
                <tr onclick="viewStudentDetails('${grade.studentId}')" style="cursor: pointer;">
                    <td>
                        <div class="rank-badge ${rankClass}">${rank}</div>
                    </td>
                    <td><strong>${grade.studentName}</strong></td>
                    <td>${grade.course}</td>
                    <td><span class="grade-badge ${gradeClass}">${grade.grade}%</span></td>
                    <td>
                        <span class="badge bg-success">Passing</span>
                    </td>
                </tr>
            `;
        }).join('');
    },
    
    addGrade(gradeData) {
        showNotification('Grade submitted successfully!', 'success');
    }
};