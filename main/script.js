const students = [
    {name: "Achiles", role: "representative", absence: 1, img: "/students/Achiles.jpeg", link: "#", bio: ""},
    {name: "Annabelle", role: "student", absence: 2, img: "/students/Annabelle.jpeg", link: "https://www.instagram.com/p/Czba6XeRK1I/", bio: ""},
    {name: "Annastasia", role: "student", absence: 3, img: "/students/Annastasia.jpeg", link: "https://www.instagram.com/p/CzbbDECx4Jn/",bio:""},
    {name: "Chesya", role: "student", absence: 4, img: "/students/Chesya.jpeg", link: "https://www.instagram.com/p/CzbbQ6eRPki/",bio:""},
    {name: "Daniel", role: "student", absence: 5, img: "/students/Daniel.jpeg", link: "https://instagram.com/p/Czbbc-SRX-l/",bio:""},
    {name: "Dionisius Reddy", role: "student", absence: 6, img: "/students/Dionisius.jpeg", link: "https://www.instagram.com/p/Czbbi5XRath/",bio:""},
    {name: "Farrel", role: "student", absence: 7, img: "/students/Farrel.jpeg", link: "https://www.instagram.com/p/Czbbo0FxF3o/",bio:""},
    {name: "Febriana", role: "student", absence: 8, img: "/students/Febriana.jpeg", link: "https://www.instagram.com/p/CzbbwzsxpIq/",bio:""},
    {name: "Fellice", role: "student", absence: 9, img: "/students/Fellice.jpeg", link: "https://www.instagram.com/p/Czbb3kARrnd/",bio:""},
    {name: "George", role: "student", absence: 10, img: "/students/George.jpeg", link: "https://www.instagram.com/p/Czbb9ouxJpa/",bio:""},
    {name: "Ida Bagus Putra", role: "student", absence: 11, img: "/students/Ida.jpeg", link: "https://www.instagram.com/p/CzbcGUMR5d2/",bio:""},
    {name: "Jason", role: "student", absence: 12, img: "/students/Jason.jpeg", link: "https://www.instagram.com/p/CzbcMVoxhkp/",bio:""},
    {name: "Jeffray", role: "student", absence: 13, img: "/students/Jeffray.jpeg", link: "https://www.instagram.com/p/CzbcQ_kxoft/",bio:""},
    {name: "Kevin", role: "student", absence: 14, img: "/students/Kevin.jpeg", link: "https://www.instagram.com/p/CzbdthSRi3E/",bio:""},
    {name: "Lionel", role: "student", absence: 15, img: "/students/Lionel.jpeg", link: "https://www.instagram.com/p/Czbd-iUx4Tv/",bio:""},
    {name: "Marchel", role: "leader of class", absence: 16, img: "/students/Marchel.jpeg", link: "https://instagram.com/p/CzbeCQpxw0f/",bio:""},
    {name: "Marvel", role: "student", absence: 17, img: "/students/Marvel.jpeg", link: "https://www.instagram.com/p/CzbeGlgR2eE/",bio:""},
    {name: "Matthew", role: "student", absence: 18, img: "/students/Matthew.jpeg", link: "https://www.instagram.com/p/CzbeKpGxulh/",bio:""},
    {name: "Melvin", role: "student", absence: 19, img: "/students/Melvin.jpeg", link: "https://www.instagram.com/p/CzbeQ1sRPjL/",bio:""},
    {name: "Novem", role: "student", absence: 20, img: "/students/Novem.jpeg", link: "https://www.instagram.com/p/CzbebAex8kn/",bio:""},
    {name: "Olivia", role: "student", absence: 21, img: "/students/Olivia.jpeg", link: "https://www.instagram.com/p/CzbeewBx5iT/",bio:""},
    {name: "Oliver", role: "student", absence: 22, img: "/students/Oliver.jpeg", link: "https://www.instagram.com/p/CzbeiCqxHEH/",bio:""},
    {name: "Reinhard", role: "student", absence: 23, img: "/students/Reinhard.jpeg", link: "https://www.instagram.com/p/CzbeliGRydS/",bio:""},
    {name: "Shasik", role: "student", absence: 24, img: "/students/Shasik.jpeg", link: "https://www.instagram.com/p/Czbepq8RyZg/",bio:""},
    {name: "Tobias", role: "student", absence: 25, img: "/students/Tobias.jpeg", link: "https://www.instagram.com/p/CzbetC-RzK-/",bio:""}
]

const studentsContainer = document.getElementById('studentsContainer');

    students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.classList.add('group', 'relative', 'block', 'bg-black');

        const studentLink = document.createElement('a');
        studentLink.href = student.link;

        const studentImage = document.createElement('img');
        studentImage.src = student.img || student.img;
        studentImage.alt = student.role.charAt(0).toUpperCase() + student.role.slice(1);
        studentImage.classList.add('absolute', 'inset-0', 'h-full', 'w-full', 'object-cover', 'opacity-75', 'transition-opacity', 'group-hover:opacity-50');

        const studentInfoContainer = document.createElement('div');
        studentInfoContainer.classList.add('relative', 'p-4', 'sm:p-6', 'lg:p-8','duration-700', '-translate-x-8', 'opacity-0', 'transition-all', 'transform', 'group-hover:translate-x-0', 'group-hover:opacity-100');

        const studentRole = document.createElement('p');
        studentRole.classList.add('text-sm', 'font-medium', 'uppercase', 'tracking-widest', 'text-pink-500', '-translate-x-8', 'opacity-0', 'transition-all', 'transform', 'group-hover:translate-x-0', 'group-hover:opacity-100');
        studentRole.textContent = student.role.charAt(0).toUpperCase() + student.role.slice(1);

        const studentName = document.createElement('p');
        studentName.classList.add('text-xl', 'font-bold', 'text-white', 'sm:text-2xl','duration-700', '-translate-x-8', 'opacity-0', 'transition-all', 'transform', 'group-hover:translate-x-0', 'group-hover:opacity-100');
        studentName.textContent = student.name;

        const studentDescription = document.createElement('div');
        studentDescription.classList.add('mt-32', 'sm:mt-48', 'lg:mt-64','translate-y-8','duration-700', 'transform', 'opacity-0', 'transition-all', 'group-hover:translate-y-0', 'group-hover:opacity-100');

        const studentDescriptionText = document.createElement('p');
        studentDescriptionText.classList.add('text-sm', 'text-white');
        studentDescriptionText.textContent = `Absence: ${student.absence}`;

        studentsContainer.appendChild(studentCard);
        studentCard.appendChild(studentLink);
        studentLink.appendChild(studentImage);
        studentLink.appendChild(studentInfoContainer);
        studentInfoContainer.appendChild(studentRole);
        studentInfoContainer.appendChild(studentName);
        studentInfoContainer.appendChild(studentDescription);
        studentDescription.appendChild(studentDescriptionText);
    });

function searchStudents(query) {
    query = query.toLowerCase();
    const searchTerm = searchInput.value.toLowerCase();
    const filteredStudents = students.filter(student => student.name.toLowerCase().startsWith(searchTerm));
    // return students.filter((student) => student.name.toLowerCase().includes(query));
    return filteredStudents;
}
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function () {
    const searchQuery = this.value;
    const searchResults = searchQuery !== "" ? searchStudents(searchQuery): [];
    displayResults(searchResults);
});
function displayResults(results) {
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = "";
    results.forEach((student) => {
        const studentCard = document.createElement("div");
        studentCard.classList.add("student-card", "bg-white", "my-[3px]", "rounded-full", "text-center", "hover:bg-gray");

        const studentLink = document.createElement("a");
        studentLink.href = student.link;
        
        const studentName = document.createElement("h3");
        studentName.textContent = student.name;
        studentName.classList.add("text-2xl", "cursor-pointer");
        
        studentCard.appendChild(studentName);
        searchResultsContainer.appendChild(studentCard);
    });
}