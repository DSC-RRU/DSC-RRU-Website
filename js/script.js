/*
* Instructions for adding new project:
  ==> In the createProjectList() function, there is a list named projects. 
  ==> Add new element in array with all the (key,value) pairs.

* Eg.: 
  {
	header: "#2",
	author: "Web Application",
	title: "Library Management System",
	text: "A Library Management System for RRU as a part of learning project while learning MERN Stack.",
	image: "imgs/projects/project2.jpg",
	goToLinkTitle: "Under Development",
	goToLink: "#",
  }

*/

function createProjectList() {
    let projects = [{
            header: "#1",
            author: "Web Application",
            title: "DSC RRU Website",
            text: "The website of Developer Student Club at Rashtriya Raksha University developed by the members of the club.",
            image: "imgs/projects/project1.png",
            goToLinkTitle: "Go to website",
            goToLink: "https://dsc-rsu.github.io/DSC-RRU-Website/",
        },
        {
            header: "#2",
            author: "Web Application",
            title: "Library Management System",
            text: "A Library Management System for RRU as a part of learning project while learning MERN Stack.",
            image: "imgs/projects/project2.jpg",
            goToLinkTitle: "Under Development",
            goToLink: "#",
        },
        {
            header: "#3",
            author: "Web Application",
            title: "Event Management System",
            text: "Book your seat at any events of RRU using this one-click event booking website. The participants can get access to thier certificates of the events.",
            image: "imgs/projects/project3.jpg",
            goToLinkTitle: "Under Development",
            goToLink: "#",
        },
    ];

    var text = "";

    projects.forEach(project => {
        text += `
        <div class="example-2 card col-md-4">
            <div class="wrapper" style='background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("` + project.image + `") center / cover no-repeat;'>
                <div class="header">
                    <div class="h4" style="opacity:0.9">
                        ` + project.header + `
                    </div>
                </div>
                <div class="data" style="backdrop-filter: blur(10px);">
                    <div class="content">
                        <span class="author">` + project.author + `</span>
                        <h1 class="title"><a href="#">` + project.title + `</a></h1>
                        <p class="text">` + project.text + `</p>
                        <a href="` + project.goToLink + `" class="button">` + project.goToLinkTitle + `</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    $(".project-card-list>.row").append(text);
}