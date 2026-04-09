// Settings Module
const SettingsModule = {
    currentTheme: localStorage.getItem('theme') || 'light',

    render() {
        const page = document.getElementById('settings-page');

        page.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Settings</h1>
            </div>

            <ul class="nav nav-tabs mb-4" id="settingsTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="password-tab" data-bs-toggle="tab" data-bs-target="#password" type="button" role="tab">Password</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="courses-tab" data-bs-toggle="tab" data-bs-target="#courses-settings" type="button" role="tab">Courses</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="notifications-tab" data-bs-toggle="tab" data-bs-target="#notifications" type="button" role="tab">Notifications</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="appearance-tab" data-bs-toggle="tab" data-bs-target="#appearance" type="button" role="tab">Appearance</button>
                </li>
            </ul>

            <div class="tab-content" id="settingsTabContent">
                ${this.renderProfileTab()}
                ${this.renderPasswordTab()}
                ${this.renderCoursesTab()}
                ${this.renderNotificationsTab()}
                ${this.renderAppearanceTab()}
            </div>
        `;

        // Apply current theme on load
        this.applyTheme(this.currentTheme);
    },

    renderProfileTab() {
        return `
            <div class="tab-pane fade show active" id="profile" role="tabpanel">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Profile Settings</h5>
                        <form id="profileSettingsForm">
                            <div class="row">
                                <div class="col-md-3 text-center mb-4">
                                    <div class="profile-picture-upload">
                                        <img src="https://via.placeholder.com/150" alt="Profile" class="rounded-circle mb-3" id="profilePreview" style="width: 150px; height: 150px; object-fit: cover;" />
                                        <div>
                                            <label for="profilePicture" class="btn btn-outline-primary btn-sm">
                                                <i class="bi bi-camera me-1"></i>Upload Photo
                                            </label>
                                            <input type="file" class="d-none" id="profilePicture" accept="image/*" onchange="previewProfilePicture(this)" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="mb-3">
                                        <label for="profileName" class="form-label">Full Name</label>
                                        <input type="text" class="form-control" id="profileName" value="Tebarek Instructor" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="profileEmail" class="form-label">Email Address</label>
                                        <input type="email" class="form-control" id="profileEmail" value="tebarek@lms.com" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="profileBio" class="form-label">Short Bio</label>
                                        <textarea class="form-control" id="profileBio" rows="3">Passionate educator with 5+ years of experience in web development and design.</textarea>
                                    </div>
                                    <button type="button" class="btn btn-primary" onclick="SettingsModule.saveProfile()">Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    },

    renderPasswordTab() {
        return `
            <div class="tab-pane fade" id="password" role="tabpanel">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Change Password</h5>
                        <form id="passwordSettingsForm">
                            <div class="mb-3">
                                <label for="currentPassword" class="form-label">Current Password</label>
                                <input type="password" class="form-control" id="currentPassword" required />
                            </div>
                            <div class="mb-3">
                                <label for="newPassword" class="form-label">New Password</label>
                                <input type="password" class="form-control" id="newPassword" required />
                                <div class="password-strength mt-2">
                                    <div class="progress" style="height: 5px">
                                        <div class="progress-bar" id="passwordStrength" style="width: 0%"></div>
                                    </div>
                                    <small class="text-muted" id="passwordStrengthText">Enter a password</small>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Confirm New Password</label>
                                <input type="password" class="form-control" id="confirmPassword" required />
                                <div class="invalid-feedback" id="passwordMatchFeedback">Passwords do not match</div>
                            </div>
                            <button type="button" class="btn btn-primary" onclick="SettingsModule.changePassword()">Update Password</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    },

    renderCoursesTab() {
        return `
            <div class="tab-pane fade" id="courses-settings" role="tabpanel">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Course Settings</h5>
                        <div class="mb-4">
                            <h6>Default Course Visibility</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="courseVisibility" id="visibilityPublic" checked />
                                <label class="form-check-label" for="visibilityPublic">
                                    <i class="bi bi-globe me-1"></i>Public - Anyone can view
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="courseVisibility" id="visibilityPrivate" />
                                <label class="form-check-label" for="visibilityPrivate">
                                    <i class="bi bi-lock me-1"></i>Private - Only enrolled students
                                </label>
                            </div>
                        </div>
                        <div class="mb-4">
                            <h6>Default Enrollment Options</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="enrollmentOption" id="enrollmentOpen" checked />
                                <label class="form-check-label" for="enrollmentOpen">
                                    <i class="bi bi-door-open me-1"></i>Open Enrollment - Anyone can join
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="enrollmentOption" id="enrollmentInvite" />
                                <label class="form-check-label" for="enrollmentInvite">
                                    <i class="bi bi-envelope me-1"></i>Invite Only - Requires approval
                                </label>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" onclick="SettingsModule.saveCourseSettings()">Save Settings</button>
                    </div>
                </div>
            </div>
        `;
    },

    renderNotificationsTab() {
        return `
            <div class="tab-pane fade" id="notifications" role="tabpanel">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Notification Preferences</h5>
                        <div class="mb-4">
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="emailSubmissions" checked />
                                <label class="form-check-label" for="emailSubmissions">
                                    <strong>Email notifications for new submissions</strong>
                                    <p class="text-muted small mb-0">Get notified when students submit assignments</p>
                                </label>
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="emailMessages" checked />
                                <label class="form-check-label" for="emailMessages">
                                    <strong>Email notifications for new messages</strong>
                                    <p class="text-muted small mb-0">Get notified when you receive new messages</p>
                                </label>
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="emailGrades" />
                                <label class="form-check-label" for="emailGrades">
                                    <strong>Grade updates</strong>
                                    <p class="text-muted small mb-0">Get notified when grades are posted or updated</p>
                                </label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="emailAnnouncements" checked />
                                <label class="form-check-label" for="emailAnnouncements">
                                    <strong>Course announcements</strong>
                                    <p class="text-muted small mb-0">Receive important course announcements</p>
                                </label>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" onclick="SettingsModule.saveNotificationSettings()">Save Preferences</button>
                    </div>
                </div>
            </div>
        `;
    },

    renderAppearanceTab() {
        return `
            <div class="tab-pane fade" id="appearance" role="tabpanel">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Appearance</h5>
                        <div class="mb-4">
                            <h6>Theme</h6>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="theme-option card text-center p-3 ${this.currentTheme === 'light' ? 'selected' : ''}" onclick="SettingsModule.selectTheme('light')">
                                        <i class="bi bi-brightness-high-fill fs-1 mb-2 text-warning"></i>
                                        <h6>Light Mode</h6>
                                        <small class="text-muted">Default light theme</small>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="theme-option card text-center p-3 ${this.currentTheme === 'dark' ? 'selected' : ''}" onclick="SettingsModule.selectTheme('dark')">
                                        <i class="bi bi-moon-stars-fill fs-1 mb-2 text-primary"></i>
                                        <h6>Dark Mode</h6>
                                        <small class="text-muted">Easy on the eyes at night</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" onclick="SettingsModule.saveAppearance()">Apply Theme</button>
                    </div>
                </div>
            </div>
        `;
    },

    // FIXED: Theme functions that actually work
    selectTheme(theme) {
        this.currentTheme = theme;
        this.applyTheme(theme);
        localStorage.setItem('theme', theme);

        // Update UI selection
        document.querySelectorAll('.theme-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
    },

    applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    },

    saveProfile() {
        const name = document.getElementById('profileName').value;
        const email = document.getElementById('profileEmail').value;
        const bio = document.getElementById('profileBio').value;

        // Update sidebar
        const sidebarName = document.querySelector('.profile-info h6');
        const sidebarEmail = document.querySelector('.profile-info small');
        const sidebarBio = document.querySelector('.profile-info p');

        if (sidebarName) sidebarName.textContent = name;
        if (sidebarEmail) sidebarEmail.textContent = email;
        if (sidebarBio) sidebarBio.innerHTML = `<i class="bi bi-chat-quote"></i> ${bio}`;

        showNotification('Profile updated successfully!', 'success');
    },

    changePassword() {
        const current = document.getElementById('currentPassword').value;
        const newPass = document.getElementById('newPassword').value;
        const confirm = document.getElementById('confirmPassword').value;

        if (!current || !newPass || !confirm) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        if (newPass !== confirm) {
            document.getElementById('confirmPassword').classList.add('is-invalid');
            return;
        }

        if (newPass.length < 8) {
            showNotification('Password must be at least 8 characters long', 'error');
            return;
        }

        showNotification('Password changed successfully!', 'success');
        document.getElementById('passwordSettingsForm').reset();
    },

    saveCourseSettings() {
        showNotification('Course settings saved!', 'success');
    },

    saveNotificationSettings() {
        const settings = {
            emailSubmissions: document.getElementById('emailSubmissions').checked,
            emailMessages: document.getElementById('emailMessages').checked,
            emailGrades: document.getElementById('emailGrades').checked,
            emailAnnouncements: document.getElementById('emailAnnouncements').checked
        };
        localStorage.setItem('notificationSettings', JSON.stringify(settings));
        showNotification('Notification preferences saved!', 'success');
    },

    saveAppearance() {
        showNotification('Appearance settings applied!', 'success');
    }
};

// Add password strength listener
document.addEventListener('input', function (e) {
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