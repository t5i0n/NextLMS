// Router Module
const Router = {
    currentPage: 'dashboard',
    
    init() {
        this.setupEventListeners();
        this.loadInitialPage();
    },
    
    setupEventListeners() {
        document.querySelectorAll('#main-nav .nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.dataset.page;
                if (page) {
                    this.navigateTo(page);
                }
            });
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            Object.values(KEYBOARD_SHORTCUTS).forEach(shortcut => {
                if (e.ctrlKey && e.key === shortcut.key) {
                    e.preventDefault();
                    this.navigateTo(shortcut.page);
                }
            });
        });
    },
    
    loadInitialPage() {
        // Set today's date in calendar if exists
        const calendar = document.getElementById('calendar');
        if (calendar) {
            const today = new Date().toISOString().split('T')[0];
            calendar.value = today;
        }
        
        this.navigateTo('dashboard');
    },
    
    navigateTo(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Check if page exists, if not create it
        let pageElement = document.getElementById(pageId + '-page');
        if (!pageElement) {
            pageElement = this.createPage(pageId);
        }
        
        // Show selected page
        pageElement.classList.add('active');
        this.currentPage = pageId;
        
        // Load page content
        this.loadPageContent(pageId);
        
        // Update active nav link
        document.querySelectorAll('#main-nav .nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });
    },
    
    createPage(pageId) {
        const mainContent = document.getElementById('main-content');
        const pageDiv = document.createElement('div');
        pageDiv.id = pageId + '-page';
        pageDiv.className = 'page';
        mainContent.appendChild(pageDiv);
        return pageDiv;
    },
    
    loadPageContent(pageId) {
        switch(pageId) {
            case 'dashboard':
                DashboardModule.render();
                break;
            case 'students':
                StudentsModule.render();
                break;
            case 'courses':
                CoursesModule.render();
                break;
            case 'grades':
                GradesModule.render();
                break;
            case 'settings':
                SettingsModule.render();
                break;
            case 'student':
                // Student details page is handled separately
                break;
        }
    }
};