$(document).ready(function() {
    $('#countLines').click(function() {
        let text = $('#textArea').val().trim();
        let ignoreBlank = $('#ignoreBlank').is(':checked');
        let lines = text.split(/\r\n|\r|\n/);
        
        if (ignoreBlank) {
            lines = lines.filter(line => line.trim() !== "");
        }
        
        if (lines.length > 0) {
            $('#count').text('Lines: ' + lines.length).show();
            let lineList = '<ol>';
            lines.forEach((line, index) => {
                lineList += '<li>' +  line + '</li>';
            });
            lineList += '</ol>';
            $('#lineNumbers').html(lineList);
        } else {
            $('#count').hide();
            $('#lineNumbers').empty();
        }
    });
});