let courseLessons = [
    { course: "Resin Art", topic: "Introduction to Resin", link: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

let studentAccess = [
    { name: "Admin", code: "SB2026", course: "Resin Art" }
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
    } else { alert("Login Failed: Incorrect Credentials"); }
}

function addCourseClass() {
    const course = document.getElementById('contentCourse').value;
    const topic = document.getElementById('classTopic').value;
    const link = document.getElementById('youtubeLink').value;
    if(topic && link) {
        courseLessons.push({ course, topic, link });
        alert(`Class link added for ${course}!`);
    } else { alert("Please enter both topic and link."); }
}

function addStudentAccess() {
    const name = document.getElementById('stdName').value;
    const code = document.getElementById('stdCode').value.toUpperCase();
    const course = document.getElementById('stdCourse').value;
    if(name && code) {
        studentAccess.push({ name, code, course });
        alert(`Access for ${name} activated on ${course}!`);
    } else { alert("Please enter student name and code."); }
}

function verifyCode() {
    const enteredCode = document.getElementById('studentCode').value.toUpperCase();
    const student = studentAccess.find(s => s.code === enteredCode);

    if(student) {
        const lesson = courseLessons.find(l => l.course === student.course);
        if(lesson) {
            alert(`Welcome ${student.name}! Accessing your ${student.course} class.`);
            document.getElementById('classTitle').innerText = lesson.topic;
            document.getElementById('courseVideo').src = lesson.link;
            document.getElementById('videoArea').style.display = 'block';
        } else {
            alert("Verified! However, no video links have been uploaded for this course yet.");
        }
    } else { alert("Access code invalid. Please contact support."); }
}

function buyCourse(courseName) {
    const phoneNumber = "917907287563"; 
    const message = `Hi SkillBee, I want to enroll in ${courseName}.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}