/*
 * Main display functions of the page
 */


/* Menu object and its methods */
var menu = {
	'about': {
		'name': about.title,
		'target': about
	},
	'work': {
		'name': 'Work Experience',
		'target': work
	},
	'skills': {
		'name': 'Skils',
		'target': skills
	},
	'education': {
		'name': education.title,
		'target': education
	},
	'projects': {
		'name': 'Projects',
		'target': projects
	},
	'map': {
		'name': 'Map',
		'target': mapElement
	}
}

menu.display = function() {
	for (item in menu) {
		HTMLdata = replaceData(HTMLmenuItem, menu[item].name).replace('%id%', item);
		$('#navbar ul').append(HTMLdata);
	}
	$('#navbar li:first').addClass('selected-nav');
}

menu.menuClick = function(event) {
	event.preventDefault();
	var section = event.target.id;
	switchSection(section, null);
}

/* Function for switching between sections shared by menu and map */
var switchSection = function(section, element) {
	$('#content').html(null);
	$('#navbar li').removeClass('selected-nav');
	$('#' + section).parent().addClass('selected-nav');
	menu[section].target.display();
	if (element) {
		filtered = menu[section].target.jobs.filter(function(el){ return el.employer === element; })
		if (filtered.length)
			$(document).scrollTop($('#' + filtered[0].id).offset().top - 20);
	}
}


$(document).ready(function(){
	bio.display();
	menu.display();
	about.display();
	
	$('#navbar a').click(menu.menuClick);
});