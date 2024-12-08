document.addEventListener('DOMContentLoaded', () => {
    const subject = getUrlParameter('subject');
    if (subject) {
        document.getElementById('subjectTitle').innerText = subject;
    }
});

function showSyllabus() {
    const iframe = document.getElementById('resourceFrame');
    const subject = getUrlParameter('subject');
    const syllabusData = {
        "English": "path/to/english-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        // Add more subjects here
    };
    iframe.src = syllabusData[subject];
}

function showPastPapers() {
    const iframe = document.getElementById('resourceFrame');
    const subject = getUrlParameter('subject');
    const pastPapersData = {
        "English": "https://www.du.ac.in/du/uploads/Syllabus_2015/B.A.%20Hons.%20English.pdf",
        "History": "https://drive.google.com/file/d/your_link_here",
        // Add more subjects here
    };
    iframe.src = pastPapersData[subject];
}

function showLectures() {
    const iframe = document.getElementById('resourceFrame');
    const subject = getUrlParameter('subject');
    const lecturesData = {
        "English": "https://www.youtube.com/watch?v=IINyzhHsYLg",
        "History": "https://www.youtube.com/embed?listType=playlist&list=YOUR_PLAYLIST_ID",
        // Add more subjects here
    };
    iframe.src = lecturesData[subject];
}

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
