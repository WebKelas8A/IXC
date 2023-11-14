function generateStudentList() {
    var studentList = document.getElementById("student-list");
    for (var i = 0; i < studentArray.length; i++) {
        var student = studentArray[i];
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = "#";
        link.onclick = function() {
            showProfile(student);
            return false;
        };
        link.textContent = student.name;
    
        listItem.appendChild(link);
        studentList.appendChild(listItem);
    }
  }
function showProfile(student) {
    var profileContent = document.getElementById("profile-content");
    profileContent.innerHTML = "Student Name: " + student.name + "<br><br>" + student.profile;
    var popup = document.getElementById("profile-popup");
    popup.style.display = "block";
}
function closeProfile() {
    var popup = document.getElementById("profile-popup");
    popup.style.display = "none";
}
generateStudentList();