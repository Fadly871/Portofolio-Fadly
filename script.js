const data = {
    name: "Fadly Cahyo Wiyono",
    age: 17,
    school: "SMK Negeri 1 Jakarta",
    major: "Teknik Komputer dan Jaringan",
    bio: "Saya adalah pribadi yang memiliki rasa ingin tahu tinggi, senang mempelajari hal baru, dan terus berusaha memberikan hasil terbaik dalam setiap proses yang dijalani.",
    education: [
        {
            year: "2012 — 2014",
            level: "TK",
            name: "TADIKA MESRA",
            desc: "Awal perjalanan pendidikan"
        },
        {
            year: "2014 — 2020",
            level: "SD",
            name: "SDN 1 KEMBANGAN",
            desc: "Membangun fondasi dan pengalaman pertama"
        },
        {
            year: "2020 — 2023",
            level: "SMP",
            name: "SMP Negeri 132 Jakarta",
            desc: "Mulai menemukan minat dan mengembangkan kemampuan"
        },
        {
            year: "2025 — NOW",
            level: "SMK",
            name: "SMK NEGERI 1 JAKARTA",
            desc: "Mengembangkan kompetensi dan mempersiapkan masa depan"
        }
    ],
    achievements: [
        {
            title: "Juara 1 Lomba Event Sepak Bola",
            detail: "Tingkat Daerah",
            year: "2025"
        },
        {
            title: "Juara 2 Kompetisi Sepak Bola",
            detail: "Tingkat DKI Jakarta",
            year: "2025"
        }
    ]
};

document.getElementById("heroName").textContent = data.name;
document.getElementById("fullName").textContent = data.name;
document.getElementById("contactName").textContent = data.name;
document.getElementById("footerName").textContent = data.name;
document.getElementById("currentSchool").textContent = data.school;
document.getElementById("currentMajor").textContent = data.major;
document.getElementById("age").textContent = String(data.age).padStart(2, "0");
document.getElementById("ageDetail").textContent = `${data.age} Tahun`;
document.getElementById("schoolDetail").textContent = data.school;
document.getElementById("majorDetail").textContent = data.major;
document.getElementById("bio").textContent = data.bio;
document.getElementById("achievementCount").textContent = String(data.achievements.length).padStart(2, "0");

document.getElementById("timeline").innerHTML = data.education.map(item => `
    <div class="timeline-item">
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-details">
            <div class="timeline-level">${item.level}</div>
            <div class="timeline-name">${item.name}</div>
            <span class="timeline-desc">${item.desc}</span>
        </div>
        <div class="timeline-arrow"><span>✦</span></div>
    </div>
`).join("");

document.getElementById("achievementList").innerHTML = data.achievements.map((item, i) => `
    <div class="achievement-item">
        <div class="achievement-index">0${i + 1}</div>
        <div class="achievement-details">
            <div class="achievement-title">${item.title}</div>
            <div class="achievement-detail">${item.detail}</div>
        </div>
        <div class="achievement-year">${item.year}</div>
        <div class="achievement-arrow"><span>✦</span></div>
    </div>
`).join("");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: .12
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - .5) * 30;
    const y = (e.clientY / window.innerHeight - .5) * 30;
    
    const orbOne = document.querySelector(".orb-one");
    const orbTwo = document.querySelector(".orb-two");
    
    if (orbOne) orbOne.style.transform = `translate(${x}px, ${y}px)`;
    if (orbTwo) orbTwo.style.transform = `translate(${-x}px, ${-y}px)`;
});

const photo = document.getElementById("profilePhoto");
if (photo) {
    photo.addEventListener("error", () => {
        photo.style.display = "none";
    });
}
