// Global data stores
let studentsData = [];
let coursesData = [];
let gradesData = [];

// Initialize sample data
function initializeSampleData() {
    studentsData = [
        { id: 'ST001', name: 'Sami', batch: 'Batch 1', email: 'sami@email.com', enrollmentDate: '2025-09-01' },
        { id: 'ST002', name: 'Tsi', batch: 'Batch 1', email: 'tsi@email.com', enrollmentDate: '2025-08-15' },
        { id: 'ST003', name: 'Miky', batch: 'Batch 2', email: 'miky@email.com', enrollmentDate: '2024-01-10' },
        { id: 'ST004', name: 'Emma', batch: 'Batch 2', email: 'emma@email.com', enrollmentDate: '2024-01-15' },
        { id: 'ST005', name: 'John', batch: 'Batch 1', email: 'john@email.com', enrollmentDate: '2025-08-20' },
        { id: 'ST006', name: 'Bety', batch: 'Batch 2', email: 'bety@email.com', enrollmentDate: '2024-02-01' },
        { id: 'ST007', name: 'Lidiya', batch: 'Batch 2', email: 'lidiya@email.com', enrollmentDate: '2024-01-20' },
        { id: 'ST008', name: 'Abel', batch: 'Batch 1', email: 'abel@email.com', enrollmentDate: '2025-09-05' }
    ];
    
    coursesData = [
        { 
            id: 'CS101', 
            name: 'GitHub Basics for Beginners', 
            code: 'GH101',
            students: ['ST001', 'ST002', 'ST005', 'ST008'],
            visibility: 'public',
            enrollment: 'open'
        },
        { 
            id: 'CS102', 
            name: 'LinkedIn Essentials for Beginners', 
            code: 'LI101',
            students: ['ST001', 'ST002', 'ST003', 'ST004'],
            visibility: 'public',
            enrollment: 'open'
        },
        { 
            id: 'CS103', 
            name: 'Canva Design Basics for Beginners', 
            code: 'CD101',
            students: ['ST003', 'ST004', 'ST006', 'ST007'],
            visibility: 'private',
            enrollment: 'invite'
        },
        { 
            id: 'CS104', 
            name: 'Getting Started with Google Docs', 
            code: 'GD101',
            students: ['ST001', 'ST005', 'ST006', 'ST008'],
            visibility: 'public',
            enrollment: 'open'
        }
    ];
    
    gradesData = [
        { studentId: 'ST001', studentName: 'Sami', course: 'Getting Started with Google Docs', grade: 95, courseId: 'CS104' },
        { studentId: 'ST003', studentName: 'Miky', course: 'Getting Started with Google Docs', grade: 90, courseId: 'CS104' },
        { studentId: 'ST005', studentName: 'John', course: 'Getting Started with Google Docs', grade: 85, courseId: 'CS104' },
        { studentId: 'ST008', studentName: 'Abel', course: 'Getting Started with Google Docs', grade: 82, courseId: 'CS104' },
        { studentId: 'ST001', studentName: 'Sami', course: 'GitHub Basics for Beginners', grade: 92, courseId: 'CS101' },
        { studentId: 'ST002', studentName: 'Tsi', course: 'GitHub Basics for Beginners', grade: 88, courseId: 'CS101' },
        { studentId: 'ST005', studentName: 'John', course: 'GitHub Basics for Beginners', grade: 67, courseId: 'CS101' },
        { studentId: 'ST008', studentName: 'Abel', course: 'GitHub Basics for Beginners', grade: 78, courseId: 'CS101' },
        { studentId: 'ST003', studentName: 'Miky', course: 'Canva Design Basics for Beginners', grade: 78, courseId: 'CS103' },
        { studentId: 'ST006', studentName: 'Bety', course: 'Canva Design Basics for Beginners', grade: 95, courseId: 'CS103' }
    ];
}

// Get student by ID
function getStudentById(id) {
    return studentsData.find(s => s.id === id);
}

// Get course by ID
function getCourseById(id) {
    return coursesData.find(c => c.id === id);
}

// Get grades for a student
function getStudentGrades(studentId) {
    return gradesData.filter(g => g.studentId === studentId);
}