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
            <div class="wrapper" style='background: linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("` + project.image + `") center / cover no-repeat;'>
                <div class="header">
                    <div class="h4">
                        ` + project.header + `
                    </div>
                </div>
                <div class="data" style="backdrop-filter: blur(18px);">
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


/*
 * This function will create the Navigation Bar in the page wherever it will be called
 */

function createNavBar(activePage) {
    let text = `    
        <div class="header-left">
            <img src="./imgs/DSC_LOGO.png">
        </div>
        <input type="checkbox" class="nav-toggle" id="nav-toggle">
        <div class="header-right">
            <a href="./index.html" id="home" class="header-right-link ` + activePage[0] + `"><li class="header-right-link">Home</li></a>
            <a href="./index.html#abt-us" id="about-us" class="header-right-link ` + activePage[1] + `"><li class="header-right-link">About Us</li></a>
            <a href="./projects.html" class="header-right-link ` + activePage[2] + `"><li class="header-right-link">Projects</li></a>
            <a href="./teams.html" class="header-right-link ` + activePage[3] + `"><li class="header-right-link">Teams</li></a>
            <a href="./gallery.html" class="header-right-link ` + activePage[4] + `"><li class="header-right-link">Gallery</li></a>
            <a href="./contactUs.html" class="header-right-link ` + activePage[5] + `"><li class="header-right-link">Contact Us</li></a>
        </div>
        <label for="nav-toggle" class="nav-toggle-label">
            <i class="fa fa-bars" style="font-size:28px;color: white"></i>
        </label>
    `;

    $("header").append(text);

    $("head").append(`<link rel="icon" type="image/png" href="imgs/favicon.png">`);

    $("#about-us").click((e) => {
        if ($("#home").hasClass("current-active"))
            $("#home").removeClass("current-active");
        $("#about-us").addClass("current-active");
    });

    if (window.location.hash.substr(1) === "abt-us") {
        if ($("#home").hasClass("current-active"))
            $("#home").removeClass("current-active");
        $("#about-us").addClass("current-active");
    }
}

/*
 * This function will create the Footer in the page wherever it will be called
 */

function createFooter() {
    let text = `
    <div class="container">
        <div class="row" style="margin-left: 10%;margin-right: 10%;">
            <section id="quick" class="col-md-offset-2 col-md-3 col-sm-4 col-xs-12">
                <p>Quick Links</p>
                <a href="https://www.rsu.ac.in" target="_blank">Rashtriya Raksha University</a><br>
                <a href="https://docs.google.com/document/d/1DRbb0VUGORYI9epY3INSEfkWT_SO7EKVQTsieeA3MR4/edit" target="_blank">Code of Conduct</a><br>
                <a href="https://docs.google.com/document/d/1TDQdYO0Dm0osDrFzyqfe1MjemHMJMdpCQFZVUI4Y-qk/edit" target="_blank">FAQs</a><br>
            </section>
            <section id="socia" class="col-md-3 col-sm-4 col-xs-12">
                <p>Social Links</p>
                <a href="https://dsc.community.dev/raksha-shakti-university/" target="_blank">Developer Student Club</a><br>
                <a href="https://facebook.com/dsc.rsu.7" target="_blank">Facebook</a><br>
                <a href="https://twitter.com/Dsc__Rsu" target="_blank">Twitter</a><br>
                <a href="https://www.linkedin.com/in/dsc-rsu-7b53011b8/" target="_blank">Linkedin</a><br>
                <a href="https://www.instagram.com/dscrsu/" target="_blank">Instagram</a><br>
            </section>
            <section id="scroll" class="col-md-3 col-sm-4 col-xs-12">
                <p>Scroll To</p>
                <a href="index.html#abt-us">About Us</a><br>
                <a href="teams.html">Team</a><br>
                <a href="projects.html">Projects</a><br>
                <a href="contactus.html">Contact Us</a><br>
            </section>
        </div>
        <hr style="border-top: 1px solid #f8f9fa;">
        <div align="center" class="copyright"> Copyright &copy; Developer Student Club - <a href="https://rsu.ac.in" target="_blank" style="color: yellow">Rashtriya Raksha University</a></div>
    </div>
    `;

    $("footer").append(text);
}

/*
 * This function will create the Header of the page wherever it will be called
 */

function createPageHeader(title, subtitle, image, side = 0) {
    let text = `
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <span>` + title + `</span> <br>
            <p>` + subtitle + `</p>
        </div>
        <div class="col-md-6 col-sm-12">
            <img class="img-responsive" src="` + image + `" alt="` + title + ` Illustration">
        </div>
    </div>
    `;
    if (side === 1) {
        text = `
        <div class="row">            
            <div class="col-md-6 col-sm-12" style="top: none;transform: none;">
                <img class="img-responsive" src="` + image + `" alt="` + title + ` Illustration">
            </div>
            <div class="col-md-6 col-sm-12" style="top: 50%;transform: translate(0%,50%);">
                <span>` + title + `</span> <br>
                <p>` + subtitle + `</p>
            </div>
        </div>
        `;
    }
    $(".project-header").append(text);

    let margin = $(".header-nav").outerHeight();
    $(".project-header").css({
        "margin-top": margin,
        "height": "calc(100vh - " + margin + "px)"
    });
}