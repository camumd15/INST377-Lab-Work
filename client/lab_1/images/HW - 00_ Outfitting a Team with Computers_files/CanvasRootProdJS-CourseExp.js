// Only process the scripts below if the document is ready function
$(document).ready(function () {
	"use strict";
	
	// *   helpbutton: add help button on th right side 1/19/2022
	$('#right-side-wrapper').prepend('<div style="font-size:12px;text-align:center"><a href="https://cases.canvaslms.com/liveagentchat?chattype=student" target="_blank" ><button type="button" id="help-link" class="Button button-sidebar-wide " style="background-color:#900;color:white;width:240px">&nbsp;24/7 Canvas Chat Support</button></a><br>....or call 1-833-566-3347 (staff/faculty)<br>1-877-399-4090 (students)</div>');

	
	//**       Remove LDB option under quiz                **//		
	onPage(/\/courses\/\d+\/quizzes/, function () {		
		$("[for='quiz_require_lockdown_browser']").parent().hide();		
	});
	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//       Add a button on People page for each course to download course email list             //
	////////////////////////////////////////////////////////////////////////////////////////////////
	onPage(/\/courses\/\d+\/users/, function () {
		$('body').append('<script src="https://lts.umd.edu/CanvasUI/EmailList/emaillist.js"></script>');

	});



	//////////////////////////////////////////////////////////////////////////////////////////////////
	//       Update Plagiarism Review to Smilarity Checer                                         //
	////////////////////////////////////////////////////////////////////////////////////////////////



	onPage(/\/courses\/\d+\/assignments/, function () {

		$("label:contains('Plagiarism Review')").replaceWith("Originality Checker");
	});


	//////////////////////////////////////////////////////////////////////////////////////////////////
	//               Hide Pairing Observer Button      7/16/2018                                   //
	////////////////////////////////////////////////////////////////////////////////////////////////

	onPage(/\profile\/settings/, function () {
		$('#pairing-code').hide();
	});




	//////////////////////////////////////////////////////////////////////////////////////////////////
	//               Hide Student UID under People      11/28/2018                                 //
	////////////////////////////////////////////////////////////////////////////////////////////////

/*
	onElementRendered("th:contains('SIS ID')", function () {

		//$("th:contains('SIS ID')").hide();
		$("th:contains('SIS ID')").addClass("sisid");
		$('.sisid').hide();

	});


	onElementRendered(".roster ", function () {
		$(".roster").attr("id", "roster");
		var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(4)', '#roster'), 0); // get the header cell
		var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(4)', '#roster'), 0).concat(lastColHeader); // get the column cells, and add header

		lastColCells.forEach(function (cell) { // iterate and hide
			cell.style.display = 'none';


		});

	});

*/





	//***********Moving All Courses link to the top******************//	
	$('#global_nav_courses_link').click(function () {
		onElementRendered('.ReactTrayPortal', function (el) {
			$("li:contains('All Courses')").hide();
			el.find("h1:contains('Courses')").parent('div').after('<a href="/courses" >All Courses</a><p>');
		});
	});





	//***********Removing section editing functions for non-admins, testing july 8th **********//
	/*
	onPage(/\/courses\/\d+\/settings/, function () {
		hasAnyRole('admin', function (hasRole) {
			if (hasRole) return;
			else hideSectionEditing();
		});

	});

	onPage(/\/courses\/\d+\/details/, function () {
		hasAnyRole('admin', function (hasRole) {
			if (hasRole) return;
			else hideSectionEditing();
		});
	});


	onPage(/\/courses\/\d+\/sections/, function () {
		hasAnyRole('admin', function (hasRole) {
			if (hasRole) {
				return;
			} else {
				$('aside#right-side .edit_section_link').hide();
				$('aside#right-side .crosslist_link').hide();
			}
		});
	});

    */
});



//for July 8th test of restricting section access
/*
function hideSectionEditing() {
	$('form#add_section_form').hide();
	$('ul#sections .section_link').hide();
}
*/



//added helper functions july 8th test, helper functions from instructurecon 2013
function onPage(regex, fn) {
	if (location.pathname.match(regex)) fn();
}

function hasAnyRole( /*roles, cb*/ ) {
	var roles = [].slice.call(arguments, 0);
	var cb = roles.pop();
	for (var i = 0; i < arguments.length; i++) {
		if (ENV.current_user_roles.indexOf(arguments[i]) !== -1) {
			return cb(true);
		}
	}
	return cb(false);
}

function onElementRendered(selector, cb, _attempts) {
	var el = $(selector);
	_attempts = ++_attempts || 1;
	if (el.length) return cb(el);
	if (_attempts == 60) return;
	setTimeout(function () {
		onElementRendered(selector, cb, _attempts);
	}, 250);
}



//**************************************************************************//
//************ Adding additional links in the main navigation menu *********//
//*************************************************************************//
var styleAdded = false;

function addMenuItem(linkText, linkhref, icon, target) {
	var iconHtml = '',
		itemHtml,
		linkId = linkText.split(' ').join('_'),
		iconCSS = '<style type="text/css">' +
		'   i.custom_menu_list_icon:before {' +
		'       font-size: 27px;' +
		'       width: 27px;' +
		'       line-height: 27px;' +
		'   }' +
		'   i.custom_menu_list_icon {' +
		'       width: 27px;' +
		'       height: 27px;' +
		'   }' +
		'   body.primary-nav-expanded .menu-item__text.custom-menu-item__text {' +
		'       white-space: normal;' +
		'       padding: 0 2px;' +
		'   }' +
		'</style>';
	if (icon !== '') {
		// If it is a Canvas icon    
		if (icon.indexOf('icon') === 0) {
			iconHtml = '<div class="menu-item-icon-container" role="presentation"><i class="' + icon + ' custom_menu_list_icon"></i></div>';  
			// for an svg or other image    
		} else if (icon !== '') {
			iconHtml = '<div class="menu-item-icon-container" role="presentation">' + icon + '</div>';
		}
	}
	// Process Target  
	if (target !== undefined && target !== null && target !== '') {
		target = ' target="' + target + '"';
	} else {
		target = '';
	}
	// Build item html    
	itemHtml = '<li class="ic-app-header__menu-list-item ">' +
		'   <a id="global_nav_' + linkId + '" href="' + linkhref + '" class="ic-app-header__menu-list-link" ' + target + '>' + iconHtml +
		'       <div class="menu-item__text custom-menu-item__text">' + linkText + '</div>' +
		'   </a>' +
		'</li>';
	//******Move Course Evaluation link above the Help 
	if (icon == 'icon-syllabus') {
		$('#global_nav_help_link').parent('li').before(itemHtml);  
	} else if (icon == 'icon-compose'){  
		//****** Move Portfolium link above Commons link ****** 10/31/2019   ********//
		$('#global_nav_conversations_link').after(itemHtml);  
		
	}
	else {
		$('#menu').append(itemHtml);
	}

	
	// Add some custom css to the head the first time    
	if (!styleAdded) {
		$('head').append(iconCSS);
		styleAdded = true;
	}
}

var toolNumber = '65163';
var userID = '';
var coursenumber = location.pathname.match(/\d+/);
userID = ENV.current_user_id;
addMenuItem('Portfolium', 'https://umdcp.portfolium.com/', 'icon-compose','_blank');
addMenuItem('CourseExp', '/users/' + userID + '/external_tools/' + toolNumber, 'icon-syllabus');
addMenuItem('EMT', 'https://emt.umd.edu', 'icon-settings');
addMenuItem('Course Policies', 'https://it.umd.edu/ELMS-policy-menu', 'icon-document','_blank');
addMenuItem('Logout', '/logout', 'icon-off');




//************************************************************************************************************//
//**********Adding an orientation button on the right side #right-side, .ic-sidebar-logo, .ic-sidebar-logo_image (append) */
//************************************************************************************************************//

$('#right-side-wrapper').append('<div class="al-dropdown_container" id="umd-howtouse"><a class="al-trigger Button Button--block" role="button" href="#" style="background: #f7f7f7; color: #000000; text-align:left;"> How to use UMD Canvas<i class="icon-mini-arrow-down"></i></a><ul class="al-options" role="menu" tabindex="0" aria-hidden="true" aria-expanded="false"><li><a href="/courses/1157772" target="_blank" tabindex="-1" role="menuitem" class="icon-user">Student Tutorial</a></li><li><a href="/courses/1253803" target="_blank"  class="icon-user" tabindex="-1" role="menuitem">Faculty Tutorial</a></li><li><a href="https://community.canvaslms.com/community/answers/guides/" target="_blank" tabindex="-1" role="menuitem" class="icon-document">Canvas Guides</a></li></ul></div><br />');


/************************************************************************************************************/
/**********Adding an bookstore link, only for teahers. 9/2/2021**********************************************/
/************************************************************************************************************/

$('#right-side-wrapper').append('<div id="umd-bookstore"><a class="al-trigger Button Button--block" role="button" href=" https://umcp.bncollege.com/course-material/course-finder" style="background: #f7f7f7; color: #000000; text-align:center; margin-bottom:10px; white-space: normal;" target="_blank">Textbooks</div>');


$('#right-side-wrapper').append('<div id="umd-bookstore"><a class="al-trigger Button Button--block" role="button" href="https://aip.bncollege.com/app/courselist/" style="background: #f7f7f7; color: #000000; text-align:center;white-space: normal;" target="_blank">Adopt Textbook</div>');




//*************** Moving view grades to the top on the right side bar on dashboard only. and removing the extra view grades button   ******//


if (location.pathname === '/')  { 
	onElementRendered('.right-side-list', function (el) {
		$("a:contains('View Grades')").hide();
		$('aside#right-side').prepend('<a href="/grades" class="Button button-sidebar-wide" >View Grades</a><p>');
	});
}




/* Adding hyperlink to UMD logo */
//$('.ic-app-header__logomark').attr('href','http://elms.umd.edu');
//$('.ic-app-header__logomark').attr('target','_blank');




//******* Adding active class to navigation for addition external tools, can be removed  *******//
/*onPage(/\external_tools\/17657/, function () {
	onElementRendered('#global_nav_CourseEvalUM', function (el) {
		el.parent('li').addClass('ic-app-header__menu-list-item--active');
	});
});

*/




//********** Removing color shade on dashboard for courses with images----changed on 10/20/2016
$('.ic-DashboardCard').each(function () {
	if ($(this).find('.ic-DashboardCard__header_image').length != 0) {
		$(this).find('.ic-DashboardCard__header_hero').css('background-color', '#ffffff').css('opacity', '0.0');
	}
});





//* ADD customization below  */




////////////////////////////////////////////////////
//            DESIGN TOOLS CONFIG                 //
////////////////////////////////////////////////////
// Copyright (C) 2016  Utah State University
var DT_variables = {
	iframeID: '',
	// Path to the hosted USU Design Tools
	path: 'https://designtools.ciditools.com/',
	templateCourse: '1206150',
	// OPTIONAL: Limit tools loading by users role
	limitByRole: false, // set to true to limit to roles in the roleArray
	// adjust roles as needed
	roleArray: [
		'admin',
		'teacher'
	],
	// OPTIONAL: Limit tools to an array of Canvas user IDs
	limitByUser: false, // Change to true to limit by user
	// add users to array (Canvas user ID not SIS user ID)
	userArray: [
		'1234',
		'987654'

	]
};

// Run the necessary code when a page loads
$(document).ready(function () {
	'use strict';
	// This runs code that looks at each page and determines what controls to create
	$.getScript(DT_variables.path + 'js/master_controls.js', function () {
		console.log('master_controls.js loaded');
	});
});
////////////////////////////////////////////////////
// END DESIGN TOOLS CONFIG                        //
////////////////////////////////////////////////////






//************ Disabling design tool in syllabus-----6/9/16 ************//

onPage(/\/courses\/\d+\/assignments\/syllabus/, function () {
	$('.edit_syllabus_link').click(function () {
		onElementRendered("#kl_launch_button", function (el) {
			el.hide();

		});
	});
});





//*************  Hiding Course Evaulation and student feedback report link under Account-->profile and notification    5/16/2017   ***************//

$("#section-tabs .context_external_tool_39847").hide();
$("#section-tabs .context_external_tool_39845").hide();
$("#section-tabs .context_external_tool_39787").hide();
$("#section-tabs .context_external_tool_39789").hide();
$("#section-tabs .context_external_tool_39791").hide();
$("#section-tabs .context_external_tool_39793").hide();

//************  Hiding BOX link under Account-->profile and notification    5/16/2017   ***********//
//ID: 22347 on production, 
//$("#section-tabs .context_external_tool_22347").hide();
