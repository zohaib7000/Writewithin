<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
	{
		$this->load->view('homepage');
	}
    public function aboutPage()
    {
    	$this->load->view('pages/about');
    }
    public function korean_keyboard_view()
    {
        $this->load->view('keyboard/online-korean-keyboard');
    }
    public function chinesekeyboard_view()
    {
        $this->load->view('keyboard/chinese-keyboard');
    }
    public function japanesekeyboard_view()
    {
        $this->load->view('keyboard/japanese-keyboard');
    }
    public function italiankeyboard_view()
    {
        $this->load->view('keyboard/italian-keyboard');
    }
    public function ukrainiankeyboard_view()
    {
        $this->load->view('keyboard/ukrainian-keyboard');
    }
    public function baybayinkeyboard_view()
    {
        $this->load->view('keyboard/baybayin-keyboard');
    }
    public function spanishkeyboard_view()
    {
        $this->load->view('keyboard/spanish-keyboard');
    }
    public function swedishkeyboard_view()
    {
        $this->load->view('keyboard/swedish-keyboard');
    }
    public function turkishkeyboard_view()
    {
        $this->load->view('keyboard/turkish-keyboard');
    }
    // texttools

    public function combinewords_view()
    {
        $this->load->view('texttools/combine-words');
    }
    public function sentencecounter_view()
    {
        $this->load->view('texttools/sentence-counter');
    }
    public function paragraphcounter_view()
    {
        $this->load->view('texttools/paragraph-counter');
    }
    public function linecounter_view()
    {
        $this->load->view('texttools/line-counter');
    }
    public function reverse_text_generator_view()
    {
        $this->load->view('texttools/reverse-text-generator');
    }
    
    public function contactPage()
    {
    	$this->load->view('pages/contact');
    }
    public function terms_and_conditions_Page()
    {
        $this->load->view('pages/terms-and-conditions');
    }
    public function termsPage()
    {
    	$this->load->view('pages/term');
    }
    
    public function privacyPage()
    {
        $this->load->view('pages/privacy');
    }
    public function names_view()
    {
        $this->load->view('pages/names');
    }
	public function mode_changer()
    {
        $this->load->library('session');
        $mode = $this->input->post('dark_mode');
        if ( $mode == '0' ) 
        {
            unset($_SESSION['oldenglish_mode']);
        }
        else
        {
            $_SESSION['oldenglish_mode'] = $mode;
        }
    }
    public function error_page_handling()
    {
        $this->load->view('pages/404_override');
    } 
   
}
