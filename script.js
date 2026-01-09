// Database Simulation
let students = [
    { name: "Demo Student", code: "SB2026", course: "Resin Art" }
];

let modules = [
    { course: "Resin Art", title: "Module 1: Introduction", link: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

// Admin Panel Controls
function toggleAdminMenu() {
    const menu = document.getElementById('adminMenu');
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function openLogin() { 
    document.getElementById('adminModal').style.display = 'block'; 
    document.getElementById('adminMenu').style.display = 'none';
}

function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }

function checkLogin() {
    const u = document.getElementById('adminUser').value;
    const p = document.getElementById('adminPass').value;
    if(u === "admin" && p === "skillbee2026") {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('managementTab').style.display = 'block';
    } else { alert("Invalid Login"); }
}

// Automatic Web Applying Functions
function saveStudentAccess() {
    const name = document.getElementById('admStudentName').value;
    const code = document.getElementById('admStudentCode').value.toUpperCase();
    const course = document.getElementById('admCourseSelect').value;
    students.push({ name, code, course });
    alert(`Success: ${name} registered for ${course}!`);
}

function saveCourseModule() {
    const title = document.getElementById('admModuleTitle').value;
    const link = document.getElementById('admVideoLink').value;
    const course = document.getElementById('admCourseSelect').value;
    modules.push({ course, title, link });
    alert(`Module "${title}" added to ${course}!`);
}

// Student Verification & Module Display
function verifyAccess() {
    const code = document.getElementById('studentCode').value.toUpperCase();
    const student = students.find(s => s.code === code);
    
    if (student) {
        document.getElementById('welcomeMsg').innerText = `Welcome, ${student.name}! Accessing: ${student.course}`;
        const studentModules = modules.filter(m => m.course === student.course);
        const listDiv = document.getElementById('moduleList');
        listDiv.innerHTML = ""; // Clear old list

        studentModules.forEach(mod => {
            const btn = document.createElement('button');
            btn.className = "module-btn";
            btn.innerText = mod.title;
            btn.onclick = () => { document.getElementById('activeIframe').src = mod.link; };
            listDiv.appendChild(btn);
        });

        document.getElementById('studentDashboard').style.display = 'block';
    } else {
        alert("Access Code Not Found.");
    }
}