document.addEventListener('DOMContentLoaded', () => {
    const subject = getUrlParameter('subject');
    if (subject) {
        document.getElementById('subjectTitle').innerText = subject;
    }
});

function showSyllabus() {
    const iframe = document.getElementById('resourceFrame');
    const resourceList = document.getElementById('resourceList');
    const subject = getUrlParameter('subject');
    const syllabusData = {
        "English": "path/to/english-syllabus.pdf",
        "History": "path/to/history-syllabus.pdf",
        // Add more subjects here
    };
    resourceList.innerHTML = ''; // Clear the list
    iframe.src = syllabusData[subject];
    iframe.style.display = 'block';
}

function showPastPapers() {
    const resourceList = document.getElementById('resourceList');
    const iframe = document.getElementById('resourceFrame');
    const subject = getUrlParameter('subject');
    const pastPapersData = {
        "English": [
            { name: "B.A.(H) English-1st Semester-2017", url: "https://www.deshbandhucollege.ac.in/old-question-papers/english/B.A.%20(H)%20English-1st%20Semester-2017.pdf" },
            { name: "B.A.(H) English-1st Semester-2018", url: "https://www.deshbandhucollege.ac.in/old-question-papers/english/B.A.%20(H)%20English-1st%20Semester-2018.pdf" },
            { name: "B.A.(H) English-2nd Semester-2019", url: "https://www.deshbandhucollege.ac.in/old-question-papers/english/B.A.%20(H)%20English-2nd%20Semester-2019.pdf" },
            { name: "B. A. (H) English 2nd Semester 2023", url: "https://www.deshbandhucollege.ac.in/old-question-papers/english/B.%20A.%20(Hons)%20English%202nd%20Semester-2023.pdf" },
            { name: "B.A.(H) English-3rd Semester-2019", url: "https://www.deshbandhucollege.ac.in/old-question-papers/english/B.A.%20(H)%20English-3rd%20Semester-2019.pdf" },
            { name: "B.A.(H) English 4th Semester 2023", url: "https://www.deshbandhucollege.ac.in/old-question-papers/english/B.%20A.%20(Hons)%20English%204th%20Semester-2023.pdf" },
            { name: "B.A.(H) English-5th Semester-2019", url: "https://www.deshbandhucollege.ac.in/old-question-papers/english/B.A.%20(H)%20English-5th%20Semester-2019.pdf" },
            { name: "B.A.(H) English 6th Semester 2022", url: "https://www.deshbandhucollege.ac.in/old-question-papers/english/B.%20A.%20(H)%20English%206th%20Semester%202022.pdf" },
            { name: "B.A.(H) English 6th Semester 2023", url: "https://www.deshbandhucollege.ac.in/old-question-papers/english/B.%20A.%20(Hons)%20English%206th%20Semester-2023.pdf" },

        ],
        "Political Science": [
            { name: "Political Science 2023 ", url: "https://www.kalindicollege.in/wp-content/uploads/2024/05/Pol-Sci-2024.pdf" },
            { name: "Political Science 2022", url: "https://www.kalindicollege.in/wp-content/uploads/2023/08/Pol-science-H.pdf" },
            { name: "Political Science 2021", url: "https://www.kalindicollege.in/wp-content/uploads/2022/05/Pol-Science.pdf" },
            { name: "Political Science 2020", url: "https://www.kalindicollege.in/wp-content/uploads/2022/05/Political-Science.pdf" }
        ],
        "Economics": [
            { name: "Economics  2023-questin paper", url: "https://www.kalindicollege.in/wp-content/uploads/2024/05/Eco-H-2024.pdf" },
            { name: "Economics  2022-questin paper", url: "https://www.kalindicollege.in/wp-content/uploads/2023/08/Economics-H-23_11zon.pdf" },
            { name: "Economics  2021-questin paper", url: "https://www.kalindicollege.in/wp-content/uploads/2022/05/Economics-2.pdf" },
            { name: "Economics  2020-questin paper", url: "https://www.kalindicollege.in/wp-content/uploads/2022/05/Economics.pdf" },
           
        ],
        "Hindi": [
            { name: "Hindi 2023_paper", url: "https://www.kalindicollege.in/wp-content/uploads/2024/05/Hindi-H-2024.pdf" },
            { name: "Hindi 2022_paper", url: "https://www.kalindicollege.in/wp-content/uploads/2023/08/Hindi-H.pdf" },
            { name: "Hindi 2021_paper", url: "https://www.kalindicollege.in/wp-content/uploads/2022/05/Hindi-2.pdf" },
            { name: "Hindi 2020_paper", url: "https://www.kalindicollege.in/wp-content/uploads/2022/05/Hindi.pdf" },   
           
        ],
        // Add more subjects and their past papers here
    };
    resourceList.innerHTML = ''; // Clear the list
    pastPapersData[subject].forEach(paper => {
        const paperLink = document.createElement('a');
        paperLink.href = paper.url;
        paperLink.innerText = paper.name;
        paperLink.target = '_blank';
        resourceList.appendChild(paperLink);
        resourceList.appendChild(document.createElement('br'));
    });
    iframe.style.display = 'none';
}

function showLectures() {
    const iframe = document.getElementById('resourceFrame');
    const resourceList = document.getElementById('resourceList');
    const subject = getUrlParameter('subject');
    const lecturesData = {
        "English": "https://www.youtube.com/watch?v=S-4995DlKR0",
        "History": "https://www.youtube.com/embed?listType=playlist&list=YOUR_PLAYLIST_ID",
        // Add more subjects here
    };
    resourceList.innerHTML = ''; // Clear the list
    iframe.src = lecturesData[subject];
    iframe.style.display = 'block';
}

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
