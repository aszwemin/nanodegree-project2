/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<h3>%data%</h3><hr/>";

var HTMLcontactGeneric = "<li><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
var HTMLblog = "<li><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

var HTMLmenuItem = "<li><a href='#' id='%id%'>%data%</a></li>"
var HTMLsectionTitle = "<h2>%data%</h2>"

var HTMLworkStart = "<div class='work-entry' id='%id%'></div>";
var HTMLworkEmployer = "<a target='_blank' href='%target%'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<p class='date-text'>Dates: %data%</p>";
var HTMLworkLocation = "<p class='location-text'>Location: %data%</p>";
var HTMLworkDescription = "<p>%data%</p>";
var HTMLworkTasksList = "<ul class='tasks-list'></ul>";
var HTMLworkTasks = "<li>%data%</li>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a target='_blank' href='%target%'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img class='img-responsive' alt='Project 1 picture' src='%data%'>";

var HTMLschoolStart = "<div class='education-entry' id='%id%'></div>";
var HTMLschoolName = "<p><a target='_blank' href='%target%'>%data%";
var HTMLschoolDegree = " -- %data%</a></p>";
var HTMLschoolNoDegree = "</a></p>";
var HTMLschoolDates = "<p class='date-text'>Dates: %data%</p>";
var HTMLschoolLocation = "<p class='location-text'>Location: %data%</p>";
var HTMLschoolMajor = "<p>Major: %data%</p>"

var HTMLonlineStart = "<div class='online-entry'></div>";
var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='%target%'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='mapContent'></div>";

var HTMLchartStart = "<div id='chart'><div id='diagram'></div></div><div class='get'></div>"
var HTMLchartArc = "<div class='arc'></div>"
var HTMLchartArcText = "<span class='text'>%data%</span>"
var HTMLchartArcPercent = "<input type='hidden' class='percent' value='%data%' />"
var HTMLchartArcColor = "<input type='hidden' class='color' value='%data%' />"
var HTMLchartText = "<div id='text-chart'><h3>Skills</h3><ul></ul></div>"
var HTMLchartSkill = "<li>%data%</li>"

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
})



/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
  var locations;
  var openWindow = null;      

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#mapContent'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {
    
    // initializes an empty array
    var locations = {};

    // adds the single location property from bio to the locations array
    locations[bio.contacts.location] = [];
    
    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      if (!(education.schools[school].location in locations)) {
        locations[education.schools[school].location] = []
      }
      locations[education.schools[school].location].push({
        'text': education.schools[school].name,
        'target': 'education'
      });
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      if (!(work.jobs[job].location in locations)) {
        locations[work.jobs[job].location] = []
      }
      locations[work.jobs[job].location].push({
        'text': work.jobs[job].employer,
        'target': 'work'
      });
    }
    console.log(locations)
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData, infoData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k;  // latitude from the place service
    var lon = placeData.geometry.location.B;  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoDataLength = infoData.length;
    if (infoDataLength) {
      var content = '<div style="height: ' + 30 * infoDataLength + 'px;">';
      for (item in infoData) {
        content += '<a href="#"onclick="event.preventDefault(); switchSection(\'' + infoData[item].target + '\', \'' + infoData[item].text + '\')">' + infoData[item].text + '</a>';
      }
      content += '</div>';
      var infoWindow = new google.maps.InfoWindow({
        content: content
      });

      // onclick="function(event){event.preventDefault(); switchSection(\'' + infoData[item].target + '\', \'' + infoData[item].text + '\')}()"
      
    }

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      if (openWindow)
        openWindow.close();
      infoWindow.open(map, marker);
      openWindow = infoWindow;
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0], this)
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
    
    // Iterates through the array of locations, creates a search object for each location
    for (place in locations) {

      // the search request object
      var request = {
        query: place
      }

      // Actually searches the Google Maps API for location data and runs the callback 
      // function with the search results after each search.
      service.textSearch(request, callback.bind(locations[place]));
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
  
};

/*
Uncomment all the code below when you're ready to implement a Google Map!
*/

//Calls the initializeMap() function when the page loads
//window.addEventListener('load', initializeMap);

//Vanilla JS way to listen for resizing of the window 
//and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
