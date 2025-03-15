<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/userguide3/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'Main';


$route['online-korean-keyboard']       	= 'Main/korean_keyboard_view';
$route['chinese-keyboard']           	= 'Main/chinesekeyboard_view';
$route['japanese-keyboard']           	= 'Main/japanesekeyboard_view';
$route['italian-keyboard']           	= 'Main/italiankeyboard_view';
$route['ukrainian-keyboard']           	= 'Main/ukrainiankeyboard_view';
$route['baybayin-keyboard']           	= 'Main/baybayinkeyboard_view';
$route['spanish-keyboard']           	= 'Main/spanishkeyboard_view';
$route['swedish-keyboard']           	= 'Main/swedishkeyboard_view';
$route['turkish-keyboard']           	= 'Main/turkishkeyboard_view';

$route['combine-words']           		= 'Main/combinewords_view';
$route['sentence-counter']           	= 'Main/sentencecounter_view';
$route['paragraph-counter']           	= 'Main/paragraphcounter_view';
$route['line-counter']           		= 'Main/linecounter_view';
$route['reverse-text-generator']        = 'Main/reverse_text_generator_view';

	$route['about']           			= 'Main/aboutPage';
	$route['contact']         			= 'Main/contactPage';
	$route['terms']    					= 'Main/termsPage';
	$route['privacy']  					= 'Main/privacyPage';
	$route['terms-and-conditions']  	= 'Main/terms_and_conditions_Page';

	$route['404_override'] = 'Main/error_page_handling';
	$route['translate_uri_dashes'] = FALSE;
