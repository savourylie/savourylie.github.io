/*
This is empty on purpose! Your code to build the resume will go here.
 */

// The bio object
var bio = {
	"name": "Calvin Ku",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+86 186 2030 9095",
		"email": "calvin.j.ku@outlook.com",
		"github": "savourylie",
		"twitter": "CalvinJianBaiKu",
		"location": "Shenzhen, China"
	},
	"welcomeMessage": "To infinity... and beyond!",
	"skills": ["awesomeness", "video game master", "being kind", "having a nice day"],
	"bioPic": "images/me.jpg"
}

bio.display = function() {

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	// Top Contatcts
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedTwitter);
	$('#topContacts').append(formattedLocation);


	// Footer Contacts
	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedLocation);

	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedImage);
	$('#header').append(formattedMessage);
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	if (bio.skills.length !== 0) {
		$("#header").append(HTMLskillsStart);
		for (var skill in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}

};

// The education object
var education = {
	"schools": [
		{
			"name": "University of East Anglia",
			"location": "Norwich, UK",
			"degree": "MSc",
			"majors": ["Mathematics"],
			"dates": 2009,
			'url': "http://www.uea.ac.uk/"
		},
		{
			"name": "National Cheng Kung Univeristy",
			"location": "Tainan, Taiwan",
			"degree": "BEng",
			"majors": ["Aeronautics and Astronautics"],
			"dates": 2006,
			'url': "http://web.ncku.edu.tw/"
		},
		{
			"name": "Rubbish School",
			"location": "Los Angeles, US",
			"degree": "BS",
			"majors": ["B*llshitology"],
			"dates": 3001,
			'url': "http://www.stanford.edu/"
		}
	],

	"onlineCourses": [
		{
			"title": "Machine Learning",
			"school": "Coursera",
			"dates": 2014,
			"url": "http://www.coursera.com"
		}
	]
};

education.display = function() {
	$("#education").append(HTMLschoolStart);

	for (var school in education.schools) {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedSchoolName = formattedSchoolName.replace('<a href="#">', '<a href="' + education.schools[school].url + '">');
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedMajors);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (var course in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var titlenSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(titlenSchool);
		// $("#education").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

// The work object
var work = {};

work.jobs = [
	{
		"employer": "Medici Software",
		"title": "AI Engineer",
		"location": "London, UK",
		"dates": "March, 2014 - May, 2015",
		"description": "AI stuff"
	},
	{
		"employer": "ChinaStepOne",
		"title": "Slacker",
		"location": "Shenzhen, China",
		"dates": "Nov, 2011 - April, 2013",
		"description": "Started being a slacker at CSO from Jul, 2015"
	},
	{
		"employer": "National Tainan Institute of Nursing",
		"title": "Teacher",
		"location": "Tainan, Taiwan",
		"dates": "Feb - Jun, 2010",
		"description": "Taught English conversation ans stuff"
	}
];

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
};

// The project object
var projects = {};

projects.projects = [
		{
			"title": "LifeInShenzhen",
			"dates": "Nov, 2011 - Feb, 2012",
			"description": "Provide foreigners in Shenzhen services that are essential to their day to day life.",
			"images": ["http://placehold.it/350x150", "http://placekitten.com/g/150/150"]
		},
		{
			"title": "WorkInShenzhen",
			"dates": "Nov, 2011 - Feb, 2012",
			"description": "Provide foreigners in Shenzhen services that are essential in their day to day work.",
			"images": ["http://placehold.it/350x150", "http://placekitten.com/g/150/150"]
		}
];

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (project in projects.projects) {
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectData = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectData);
		$(".project-entry:last").append(formattedProjectDescription);

		for (var i in projects.projects[project].images) {
			var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
			$(".project-entry:last").append(formattedProjectImages);
		}
	}

};

bio.display();
education.display();
work.display();
projects.display();

//Google Maps

$("#mapDiv").append(googleMap);

// var HTMLschoolDates = '<div class="date-text">%data%</div>';

$(document).click(function(loc) {
	console.log("X: " + loc.clientX + ", " + "Y: " + loc.clientY);
});

// Append Internationalize Button to the main div
// internationalizeButton = internationalizeButton.replace('<button>', '<button onclick="inName()">');

// $('#main').append(internationalizeButton);

// function inName() {
// 	var name = bio.name;
// 	var name_arr = name.split(" ");
// 	var first_name = name_arr[0];
// 	var last_name = name_arr[1];

// 	last_name = last_name.toUpperCase();

// 	return first_name + " " + last_name;
// }

