$(document).ready(function(){
    $("#countButton").click(function(){
        let text = $("#textInput").val().trim();
        $('.paragraph-counter-output').css("display", "block");
        let sentences = text.match(/[^.!?]+[.!?]+/g);
        let sentenceCount = sentences ? sentences.length : 0;


        let words = text.match(/\b\w+\b/g);
        let wordCount = words ? words.length : 0;

        let paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
        let paragraphCount = paragraphs.length;
        let charCount = text.length;

        // Display results
        $("#result").html(`
            <p><strong>Paragraphs:</strong> ${paragraphCount}</p>
            <p><strong>Sentences:</strong> ${sentenceCount}</p>
            <p><strong>Words:</strong> ${wordCount}</p>
            <p><strong>Characters:</strong> ${charCount}</p>
        `);
    });
});