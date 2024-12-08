function selectCourse() {
    const course = document.getElementById('courseSelect').value;
    if (course) {
        window.location.href = `subject.html?subject=${course}`;
    } else {
        alert('Please select a course.');
    }
}
