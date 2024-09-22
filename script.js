window.onscroll = function() {
    const scrollPosition = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollPosition / windowHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercentage + "%";
};


const profileData = {
    name: "Muhammad Hassan",
    title: "Computer Scientist | Web Developer",
    contact: {
        email: "hassanwarraich311x@gmail.com",
        phone: "+923032724433"
    },
    skills: {
        hardSkills: ["C", "C#", "C++", "HTML", "CSS", "JavaScript", "PHP", "Python", "WordPress Expert", "Elementor", "WooCommerce"],
        softSkills: ["Leadership", "Team Work", "Communication", "Team Leading"]
    },
    projects: [
        {
            title: "Chess game in C++",
            description: "A fully functional chess game with AI, developed in C++. Allows two-player mode and a basic AI opponent."
        },
        {
            title: "Shogi game in C++",
            description: "Implemented a traditional Shogi game in C++ with a user-friendly interface and multiplayer support."
        },
        {
            title: "Snake game in C++",
            description: "Classic Snake game in C++ featuring dynamic difficulty, custom grids, and scoring systems."
        },
        {
            title: "Client, Server File Upload/Download, Image Processing",
            description: "Developed a file transfer system with image processing capabilities in a C++ server-client architecture."
        },
        {
            title: "Neo4J Clone using C++",
            description: "Built a simplified clone of Neo4J, focused on graph database operations and querying in C++."
        },
        {
            title: "Multiple WordPress Websites",
            description: "Created and managed several WordPress websites with customized themes, SEO optimization, and integrated plugins for enhanced functionality."
        }
    ],
    certifications: [
        {
            title: "CodeRush 2024",
            description: "Participated in the CodeRush 2023 and 2024."
        },
        {
            title: "Internee at Perfect Web Solutions",
            description: "Completed an internship at Perfect Web Solutions, working on web development projects."
        },
        {
            title: "ITU Sports Society",
            description: "Currently serving as the Vice President of ITU's Sports Society, leading and organizing sports events."
        },
        {
            title: "Short Course on Web Development From ITU",
            description: "Completed a short course on Web Development at ITU, focusing on HTML, CSS, and JavaScript."
        },
        {
            title: "Debates, Plays, and Sports in School",
            description: "Actively participated in extracurricular activities during school, excelling in debates, plays, and sports."
        },
        {
            title: "Sports Head in Crescent College",
            description: "Held the position of Sports Head in Crescent College, leading the sports team and organizing events."
        },
        {
            title: "Runner Up in FAST's Annual Softec",
            description: "Runner-up in a competitive gaming tournament held at FAST University."
        }
    ],
    degrees: [
        "BS Computer Science ITU (2022-present)",
        "FSc Pre Engineering Crescent College (2020-2022)"
    ],
    socials: {
        linkedin: "LinkedIn",
        skype: "Skype",
        github: "Github"
    }
};

// Populating the page dynamically
function populateProfile() {
    // Populating the header
    document.querySelector('h1').textContent = profileData.name;
    document.querySelector('header p').textContent = profileData.title;

    // Populating skills
    const hardSkills = document.querySelector('.inner-skills ul');
    profileData.skills.hardSkills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        hardSkills.appendChild(li);
    });

    const softSkills = document.querySelector('.inner-soft ul');
    profileData.skills.softSkills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        softSkills.appendChild(li);
    });

    // Populating projects
    const projectContainer = document.querySelector('#projects .project-details');
    profileData.projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'inner-project-details';

        const projectTitle = document.createElement('h4');
        projectTitle.className = 'heading-skills';
        projectTitle.textContent = project.title;

        const projectDesc = document.createElement('p');
        projectDesc.textContent = project.description;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDesc);
        projectContainer.appendChild(projectDiv);
    });

    // Populating certifications
    const certificationContainer = document.querySelector('#certifications .project-details');
    profileData.certifications.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.className = 'inner-project-details';

        const certTitle = document.createElement('h4');
        certTitle.className = 'heading-skills';
        certTitle.textContent = cert.title;

        const certDesc = document.createElement('p');
        certDesc.textContent = cert.description;

        certDiv.appendChild(certTitle);
        certDiv.appendChild(certDesc);
        certificationContainer.appendChild(certDiv);
    });

    // Populating degrees
    const degreeContainer = document.querySelector('#degrees');
    profileData.degrees.forEach(degree => {
        const p = document.createElement('p');
        p.textContent = degree;
        degreeContainer.appendChild(p);
    });

    // Populating socials
    const socialLinks = document.querySelector('#socials');
    const socialIcons = ['fa-linkedin', 'fa-skype', 'fa-github'];
    let index = 0;
    for (const platform in profileData.socials) {
        const a = document.createElement('a');
        a.href = '#';
        a.innerHTML = `<i class="fa-brands ${socialIcons[index]}"></i> ${profileData.socials[platform]}`;
        socialLinks.appendChild(a);
        index++;
    }

    // Populating contact
    const contactDiv = document.querySelector('.contact');
    contactDiv.innerHTML = `
        <h2>Contact Me:</h2>
        <a href="mailto:${profileData.contact.email}"><i class="fa-solid fa-envelope"></i> ${profileData.contact.email}</a><br>
        <a href="tel:${profileData.contact.phone}"><i class="fa-solid fa-phone"></i> ${profileData.contact.phone}</a>
    `;
}

window.onload = populateProfile;
