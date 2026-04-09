// Students Module
const StudentsModule = {
    render() {
        const page = document.getElementById('students-page');
        
        page.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Students Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn btn-sm btn-outline-primary" onclick="StudentsModule.exportList()">
                        <i class="bi bi-download me-1"></i>Export List
                    </button>
                </div>
            </div>

            <div id="students-by-batch" class="row">
                ${this.renderBatch1()}
                ${this.renderBatch2()}
            </div>
        `;
    },
    
    renderBatch1() {
        const batch1Students = [
            { id: 'ST001', name: 'Sami', email: 'sami@email.com', enrollmentDate: '2025-09-01' },
            { id: 'ST002', name: 'Tsi', email: 'tsi@email.com', enrollmentDate: '2025-08-15' },
            { id: 'ST005', name: 'John', email: 'john@email.com', enrollmentDate: '2025-08-20' },
            { id: 'ST008', name: 'Abel', email: 'abel@email.com', enrollmentDate: '2025-09-05' }
        ];
        
        return `
            <div class="col-12 mb-4">
                <div class="batch-card">
                    <div class="batch-header">
                        <h5>Batch 1</h5>
                        <div class="batch-stats">
                            <span><i class="bi bi-people-fill me-1"></i>${batch1Students.length} Students</span>
                            <span><i class="bi bi-calendar me-1"></i>Active</span>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <ul class="student-list">
                            ${this.renderStudentList(batch1Students)}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderBatch2() {
        const batch2Students = [
            { id: 'ST006', name: 'Bety', email: 'bety@email.com', enrollmentDate: '2024-02-01' },
            { id: 'ST004', name: 'Emma', email: 'emma@email.com', enrollmentDate: '2024-01-15' },
            { id: 'ST007', name: 'Lidiya', email: 'lidiya@email.com', enrollmentDate: '2024-01-20' },
            { id: 'ST003', name: 'Miky', email: 'miky@email.com', enrollmentDate: '2024-01-10' }
        ];
        
        return `
            <div class="col-12 mb-4">
                <div class="batch-card">
                    <div class="batch-header">
                        <h5>Batch 2</h5>
                        <div class="batch-stats">
                            <span><i class="bi bi-people-fill me-1"></i>${batch2Students.length} Students</span>
                            <span><i class="bi bi-calendar me-1"></i>Active</span>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <ul class="student-list">
                            ${this.renderStudentList(batch2Students)}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderStudentList(students) {
        return students.map(student => `
            <li class="student-list-item" onclick="viewStudentDetails('${student.id}')">
                <div class="d-flex align-items-center">
                    <div class="student-avatar-small">
                        ${student.name.charAt(0)}
                    </div>
                    <div class="student-info">
                        <h6>${student.name}</h6>
                        <small>${student.id} | ${student.email}</small>
                    </div>
                    <div class="ms-auto">
                        <span class="badge bg-light text-dark">Enrolled: ${formatDate(student.enrollmentDate)}</span>
                    </div>
                </div>
            </li>
        `).join('');
    },
    
    exportList() {
        const allStudents = [
            { id: 'ST001', name: 'Sami', batch: 'Batch 1', email: 'sami@email.com', enrollmentDate: '2025-09-01' },
            { id: 'ST002', name: 'Tsi', batch: 'Batch 1', email: 'tsi@email.com', enrollmentDate: '2025-08-15' },
            { id: 'ST003', name: 'Miky', batch: 'Batch 2', email: 'miky@email.com', enrollmentDate: '2024-01-10' },
            { id: 'ST004', name: 'Emma', batch: 'Batch 2', email: 'emma@email.com', enrollmentDate: '2024-01-15' },
            { id: 'ST005', name: 'John', batch: 'Batch 1', email: 'john@email.com', enrollmentDate: '2025-08-20' },
            { id: 'ST006', name: 'Bety', batch: 'Batch 2', email: 'bety@email.com', enrollmentDate: '2024-02-01' },
            { id: 'ST007', name: 'Lidiya', batch: 'Batch 2', email: 'lidiya@email.com', enrollmentDate: '2024-01-20' },
            { id: 'ST008', name: 'Abel', batch: 'Batch 1', email: 'abel@email.com', enrollmentDate: '2025-09-05' }
        ];
        
        const headers = ['id', 'name', 'batch', 'email', 'enrollmentDate'];
        exportToCSV(allStudents, 'student_list.csv', headers);
    }
};