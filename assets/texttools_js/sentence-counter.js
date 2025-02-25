$(document).ready(function(){
    $("#countButton").click(function(){
        let text = $("#textInput").val().trim();

        // Sentence count (based on punctuation)
        let sentences = text.match(/[^.!?]+[.!?]+/g);
        let sentenceCount = sentences ? sentences.length : 0;

        // Word count (based on spaces)
        let words = text.match(/\b\w+\b/g);
        let wordCount = words ? words.length : 0;

        // Paragraph count (based on new lines)
        let paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
        let paragraphCount = paragraphs.length;

        // Character count (including spaces)
        let charCount = text.length;

        // Display results
        $("#result").html(`
            <p><strong>Sentences:</strong> ${sentenceCount}</p>
            <p><strong>Words:</strong> ${wordCount}</p>
            <p><strong>Paragraphs:</strong> ${paragraphCount}</p>
            <p><strong>Characters:</strong> ${charCount}</p>
        `);
    });
});