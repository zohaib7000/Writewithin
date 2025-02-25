$(document).ready(function(){
    $('.combine-no-space').click(function(){
        $('.combine-output').text(getWords().join(''));
    });
    
    $('.combine-with-space').click(function(){
        $('.combine-output').text(getWords().join(' '));
    });

    function getWords() {
        return (
            $('.box-1').val() + ' ' + $('.box-2').val() + ' ' + $('.box-3').val()
        ).trim().split(/\s+/);
    }
});