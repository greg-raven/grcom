// add active classes to navbar items
$(document).ready(function () {
	"use strict";
  switch (true) {
			case ((/fraze-tv/).test(window.location.pathname)):
         $("#fraze-tv").addClass("active");
				 break;
      case ((/frazer-live/).test(window.location.pathname)):
         $("#frazer-live").addClass("active");
         break;
      case ((/other/).test(window.location.pathname)):
         $("#other").addClass("active");
         break;
      case ((/power-news/).test(window.location.pathname)):
         $("#power-news").addClass("active");
         break;
      case ((/press/).test(window.location.pathname)):
         $("#other").addClass("active");
         break;
      default:
         $("#search").addClass("active");
         break;
		}
	}
);
