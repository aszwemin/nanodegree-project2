/* 
 * Data store for all the information needed for the resume
 */


/* Function to simplify  %data% replacing */
function replaceData(obj, val) {
	return obj.replace('%data%', val);
}

/* Bio object and its methods */
var bio = {
	"name": "Anna Szwemin",
	"role": "Full Stack Web Developer",
	"welcomeMessage": "xxx",
	"contacts": {
		"mobile": null,
		"email": "anna.szwemin@gmail.com",
		"github": 'aszwemin',
		"twitter": null,
		"location": "London, UK"
	},
	"bioPic": "images/pic.png",
	"skills": ["xxx", "yyy"]
}

bio.display = function() {
	HTMLheaderName = replaceData(HTMLheaderName, bio.name);
	HTMLheaderRole = replaceData(HTMLheaderRole, bio.role);

	HTMLcontactData = replaceData(HTMLemail, bio.contacts.email);
	HTMLcontactData += replaceData(HTMLgithub, bio.contacts.github);
	if (bio.contacts.mobile)
		HTMLcontactData += replaceData(HTMLmobile, bio.contacts.mobile);
	HTMLWelcomeMsg = replaceData(HTMLWelcomeMsg, bio.welcomeMessage);

	if (bio.skills.length && false) {
		$('#header').prepend(HTMLskillsStart);
		for (var i=0; i<bio.skills.length; i++) {
			HTMLskills = replaceData(HTMLskills, bio.skills[i]);
			$('#skills').append(HTMLskills);
		}
	}
	$('#header').prepend(HTMLheaderName + HTMLheaderRole);
	$('#topContacts').append(HTMLcontactData);
}

/* About object and its methods */
var about = {
	"title": "About",
	"text": 
		"<p>I am a backend developer training to become a full stack web developer. I currently \
		work in Python (also using Flask and Django frameworks) developing applications \
		using MongoDB as a data store. In my day to day work I also often do frontend tasks, \
		mainly using Knockout.js, Backbone.js and React.js.</p> \
		<p>I am currently taking part in a <a class=\'inline\' target=\'_blank\' href='https://www.udacity.com/course/nd001'> \
		Udacity Frontend Nanodegree program</a> in order to deepen my understanding of \
		frontend technologies. I am passionate about self-development and continuous \
		education and so I always look to extend my knowledge.<p> \
		<p>I have quite a varied professional and educational background. I have a Master \
		of Engineering degree from Gdansk University of Technology in Control Engineering \
		and Robotics. I also took part in a Space Studies Program from the International Space \
		University, held partially at the Kennedy Space Center. After my third year of \
		university I took a year off and went to work in IBM in Ireland, where I've been working \
		mostly in VBA, automating tasks for the customer satisfaction team. During my fourth \
		year of university I started working as a C developer in a company called Info Tech, \
		where I stayed for over four years and along the way got promoted to Systems Design \
		Specialist. After Info Tech I have spent 4 months at the European Space Agency as \
		a Young Graduate Trainee, where I developed an algorithm to detect bow show crossings \
		based on satellite data. After my space adventure I moved to the UK where I started working \
		as a python developer, initially with Oracle DB and later with MongoDB. I have really \
		enjoyed my time spent working as a web developer and I am sure this is the career \
		path I want to pursue.</p>"
}

about.display = function() {
	$('#content').append(replaceData(HTMLsectionTitle, about.title) + about.text);
}

/* Work object and its methods */
var work = {
	"title": "Work Experience",
	"jobs" : [
		{
			"employer": "Conversocial",
			"url": "http://www.conversocial.com",
			"id": "conversocial",
			"title": "Senior Engineer",
			"location": "London, UK",
			"dates": "2014-",
			"description": "Responsibilities:",
			"tasks": [
				"Implement Django and Flask applications for the company\'s main product",
				"Develop data stores architecture for MongoDB",
				"Implement frontend features in Knockout.js, Backbone.js and React.js",
				"Develop backend and frontend unit tests",
				"Programming languages used: Python, JavaScript, HTML",
				"Libraries and frameworks: Django, Flask, mongoengine, jQuery, Knockout,js, Bootstrap.js, React.js",
				"Operating systems: Linux"
			]
		},
		{
			"employer": "Geneity",
			"url": "http://www.geneity.co.uk",
			"id": "geneity",
			"title": "Software Developer",
			"location": "London, UK",
			"dates": "2013-2014",
			"description": "Responsibilities:",
			"tasks": [
				"Implement algorithms for the pricing and management of sport events",
				"Create an interactive web application for the multi-user management of real time data",
				"Implement new features for large scale, live, multi-user platforms",
				"Work with existing environment on adjustments and fixes",
				"Develop unit tests for created code",
				"Programming languages used: Python, Oracle SQL, HTML, JavaScript, Shell scripting",
				"Libraries: Numpy, jQuery, Bootstrap",
				"Operating systems: Linux"
			]
		},
		{
			"employer": "European Space Agency",
			"url": "http://www.esa.int",
			"id": "esa",
			"title": "Young Graduate Trainee",
			"location": "Leiden, The Netherlands",
			"dates": "2012-2012",
			"description": "Responsibilities:",
			"tasks": [
				"Develop an algorithm for the detection of bow shock crossings based on data obtained from satellites",
				"Create an application to process several years of data using the developed algorithm, generate output CEF files according to the specification (to be used by scientific community), graphically present the results",
				"Programming languages used: ANSI C, Matlab, Shell scripting",
				"Operating systems: Linux"
			]
		},
		{
			"employer": "INFO TECH",
			"url": "http://www.infotech.pl",
			"id": "infotech",
			"title": "Software Design Engineer/Systems Design Specialist",
			"location": "Gdansk, Poland",
			"dates": "2008-2012",
			"description": "Responsibilities:",
			"tasks": [
				"Implement communication protocols (incl. DeviceNet, EtherNet/IP, Profibus) and protection functions on embedded devices using ANSI C",
				"Develop object oriented SCADA systems and PC applications for protocol testing in C++",
				"Program PLCs for test purposes in ladder logic",
				"Translate technical documentation and HMIs",
				"Test and create product documentation",
				"Operating systems: Linux, Windows, RTOS"
			]
		},
		{
			"employer": "IBM",
			"url": "http://www.ibm.com",
			"id": "ibm",
			"title": "Business Controls and CSAT Team Administrator",
			"location": "Dublin, Ireland",
			"dates": "2006-2007",
			"description": "Responsibilities:",
			"task": [
				"Create and automate Excel based reports with VBA",
				"Create interfaces to databases with SQL",
				"Develop Excel based tools for international teams"
			]
		},
		{
			"employer": "SKOS PG",
			"url": "http://pg.edu.pl/skos",
			"id": "skos",
			"title": "Network Administrator",
			"location": "Gdansk, Poland",
			"dates": "2005-2006",
			"description": "Responsibilities:",
			"tasks": [
				"Maintain network in a dormitory",
				"Extend existing network",
				"Install and configure HP 2848 switch"
			]
		},
		{
			"employer": "Lucent Technologies",
			"url": "http://www.alcatel-lucent.pl/",
			"id": "lucent",
			"title": "Wireless Network Group Apprentice",
			"location": "Bydgoszcz, Poland",
			"dates": "2004-2004",
			"description": "Responsibilities:",
			"tasks": [
				"Assist wireless network planning",
				"Edit AutoCAD schematics",
				"Archive"
			]
		}
	]
}

work.display = function() {
	$('#content').append(replaceData(HTMLsectionTitle, work.title));
	work.jobs.forEach(function(job) {
		HTMLdata = replaceData(HTMLworkEmployer, job.employer).replace('%target%', job.url);
		HTMLdata += replaceData(HTMLworkTitle, job.title);
		HTMLdata += replaceData(HTMLworkDates, job.dates);
		HTMLdata += replaceData(HTMLworkLocation, job.location);
		HTMLdata += replaceData(HTMLworkDescription, job.description);
		HTMLdata += HTMLworkTasksList;
		HTMLdata += '<br>';

		$('#content').append(HTMLworkStart.replace('%id%', job.id));
		$('.work-entry:last').append(HTMLdata);

		for (item in job.tasks) {
			$('.tasks-list:last').append(replaceData(HTMLworkTasks, job.tasks[item]));
		}
	});
}

/* Education object and its methods */
var education = {
	"title": "Education",
	"schools": [
		{
			"name": "Gdansk University of Technology",
			"location": "Gdank, Poland",
			"degree": "Master of Engineering",
			"majors": "Control Engineering and Robotics",
			"dates": "2003-2010",
			"url": "http://www.pg.gda.pl"
		},
		{
			"name": "International Space University",
			"location": "Florida, United States",
			"majors": "Space Studies Program",
			"dates": "2012",
			"url": "http://www.isunet.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Frontend Nanodegree",
			"school": "Udacity",
			"dates": "2014-",
			"url": "https://www.udacity.com/course/nd001"
		}
	]
}

education.display = function() {
	$('#content').append(replaceData(HTMLsectionTitle, education.title));
	education.schools.forEach(function(school) {
		HTMLdata = replaceData(HTMLschoolName, school.name).replace('%target%', school.url);
		if (school.degree)
			HTMLdata += replaceData(HTMLschoolDegree, school.degree);
		else
			HTMLdata += HTMLschoolNoDegree;
		HTMLdata += replaceData(HTMLschoolDates, school.dates);
		HTMLdata += replaceData(HTMLschoolLocation, school.location);
		HTMLdata += replaceData(HTMLschoolMajor, school.majors);
		HTMLdata += '<br>';

		$('#content').append(HTMLschoolStart);
		$('.education-entry:last').append(HTMLdata);
	});
	$('#content').append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course) {
		HTMLdata = replaceData(HTMLonlineTitle, course.title).replace('%target%', course.url);
		HTMLdata += replaceData(HTMLonlineSchool, course.school);
		HTMLdata += replaceData(HTMLonlineDates, course.dates);
		HTMLdata += '<br>';

		$('#content').append(HTMLonlineStart);
		$('.online-entry:last').append(HTMLdata);
	});
}

/* Projects object and its methods */
var projects = {
	"title": "Projects",
	"projects": [
		{
			"title": "First Udacity Frontend Nanodegree Project",
			"url": "http://aszwemin.github.io/nanodegree-project1/",
			"dates": "10/2014",
			"description": "First project I created for the Udacity Frontend Nanodegree - a portfolio",
			"image": "images/project1.png"
		}
	]
}

projects.display = function() {
	$('#content').append(replaceData(HTMLsectionTitle, projects.title));
	projects.projects.forEach(function(project) {
		HTMLdata = replaceData(HTMLprojectTitle, project.title).replace('%target%', project.url);
		HTMLdata += replaceData(HTMLprojectDates, project.dates);
		HTMLdata += replaceData(HTMLprojectDescription, project.description);
		HTMLdata += replaceData(HTMLprojectImage, project.image);
		HTMLdata += '<br>';

		$('#content').append(HTMLprojectStart);
		$('.project-entry:last').append(HTMLdata);
	});
}

/* Skills object and its methods */
var skills = [
	{
		"name": "Python",
		"class": "py",
		"percentage": "95",
		"color": "#97be0d"
	},
	{
		"name": "C",
		"class": "c",
		"percentage": "95",
		"color": "#d84f5f"
	},
	{
		"name": "C++",
		"class": "cpp",
		"percentage": "80",
		"color": "#88B8e6"
	},
	{
		"name": "JavaScript",
		"class": "js",
		"percentage": "60",
		"color": "#bedBe9"
	},
	{
		"name": "HTML/CSS",
		"class": "html",
		"percentage": "50",
		"color": "#edebee"
	}
]

skills.display = function() {
	$('#content').append(HTMLchartStart);
	$('#content').append(HTMLchartText);
	skills.forEach(function(skill) {
		HTMLdataList = replaceData(HTMLchartSkill, skill.name);
		$('#text-chart ul').append(HTMLdataList);
		$('.get').append(HTMLchartArc);
		$('.arc:last').append(replaceData(HTMLchartArcText, skill.name));
		$('.arc:last').append(replaceData(HTMLchartArcPercent, skill.percentage));
		$('.arc:last').append(replaceData(HTMLchartArcColor, skill.color));
	});
	o.init();
}

/* Map object and its methods */
var mapElement = {}
mapElement.display = function() {
	$('#content').append(googleMap);
	initializeMap();
}