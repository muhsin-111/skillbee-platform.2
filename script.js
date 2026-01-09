let currentStudentCode = "SB2026"; 
let currentVideoLink = "https://www.youtube.com/embed/dQw4w9WgXcQ";

function buyCourse(courseName) {
    const phoneNumber = "917907287563"; 
    const message = `Hi SkillBee, I want to enroll in ${courseName}.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function verifyCode() {
    const enteredCode = document.getElementById('studentCode').value.trim().toUpperCase();
    if (enteredCode === currentStudentCode) {
        document.getElementById('courseVideo').src = currentVideoLink;
        document.getElementById('videoArea').style.display = 'block';
        alert("Verification successful!");
    } else {
        alert("Invalid code.");
    }
}

// Admin Controls
function openLogin() { document.getElementById('adminModal').style.display = 'block'; }
function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }

function checkLogin() {
    const user = document.getElementById('adminUser').value;
    const pass = document.getElementById('adminPass').value;
    if (user === "admin" && pass === "skillbee2026") {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('managementTab').style.display = 'block';
    } else { alert("Wrong Login!"); }
}

function updateSystem() {
    currentStudentCode = document.getElementById('newStudentCode').value.trim().toUpperCase();
    currentVideoLink = document.getElementById('newYoutubeLink').value.trim();
    alert("Site Updated Successfully!");
    closeAdmin();
}