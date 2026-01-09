let accessDatabase = [
    { name: "Admin", code: "SB2026", course: "Resin Art", link: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

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
    if(document.getElementById('adminUser').value === "admin" && 
       document.getElementById('adminPass').value === "skillbee2026") {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('managementTab').style.display = 'block';
    } else { alert("Wrong Username or Password"); }
}

function updateSystem() {
    const name = document.getElementById('newStudentName').value;
    const code = document.getElementById('newStudentCode').value.toUpperCase();
    const course = document.getElementById('targetCourse').value;
    const link = document.getElementById('newYoutubeLink').value;

    if(name && code && link) {
        accessDatabase.push({ name, code, course, link });
        alert(`Successfully Updated! Student ${name} registered.`);
        closeAdmin();
    } else { alert("Fill all fields."); }
}

function verifyCode() {
    const code = document.getElementById('studentCode').value.toUpperCase();
    const entry = accessDatabase.find(item => item.code === code);
    if(entry) {
        alert(`Welcome ${entry.name}! Opening ${entry.course}.`);
        document.getElementById('courseVideo').src = entry.link;
        document.getElementById('videoArea').style.display = 'block';
    } else { alert("Code not found."); }
}

function buyCourse(courseName) {
    const phoneNumber = "917907287563"; 
    const message = `Hi SkillBee, I want to enroll in ${courseName}.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}