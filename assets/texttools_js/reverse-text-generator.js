$(document).ready(function () {
    let isMirrored = false;

    // Mirror character map
    const mirrorMap = {
        'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ', 'f': 'ʇ', 'g': 'ϱ', 'h': 'ʜi',
        'i': 'į', 'j': 'ʞ', 'k': 'l', 'l': 'm', 'm': 'n', 'n': 'o', 'o': 'p', 'p': 'q',
        'q': 'ɿ', 'r': 'ƨ', 's': 't', 't': 'υ', 'u': 'v', 'v': 'w', 'w': 'x', 'x': 'γ',
        'y': 'z', 'z': 'A',
        'A': 'A', 'B': '𐐒', 'C': 'Ɔ', 'D': 'Ⴇ', 'E': 'Ǝ', 'F': 'ꟻ', 'G': 'Ә', 'H': 'H',
        'I': 'I', 'J': 'Ⴑ', 'K': 'ﻼ', 'L': '⅃', 'M': 'M', 'N': 'И', 'O': 'O', 'P': 'ꟼ',
        'Q': 'Ϙ', 'R': 'Я', 'S': 'Ƨ', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X',
        'Y': 'Y', 'Z': 'Z',
        '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8',
        '9': '9', '0': '0',
        '-': '-', '=': '=', '\'': '\'', ';': ';', '/': '/', '.': '.', ',': ',',
        '[': '[', ']': ']', '\\': '\\', '`': '`'
    };


    const reverseMirrorMap = Object.fromEntries(Object.entries(mirrorMap).map(([key, value]) => [value, key]));

    function mirrorText(text) {
        return text.split('').map(char => mirrorMap[char] || char).join('');
    }

    function reverseMirrorText(text) {
        return text.split('').map(char => reverseMirrorMap[char] || char).join('');
    }

    function reverseText(text) {
        return text.split('').reverse().join('');
    }

    function reverseWords(text) {
        return text.split(' ').reverse().join(' ');
    }

    function flipWords(text) {
        return text.split(' ').reverse().map(word => word.split('').reverse().join('')).join(' ');
    }

    function reverseEachWord(text) {
        return text.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    }

    function updateInputText(newText) {
        $('#textArea').val(newText);
    }

    $('#reverseBtn').click(function () {
        updateInputText(reverseText($('#textArea').val()));
        isMirrored = false;
    });

    $('#mirrorBtn').click(function () {
        let inputText = $('#textArea').val();
        let textToMirror = isMirrored ? reverseMirrorText(inputText) : mirrorText(inputText);

        updateInputText(textToMirror);
        isMirrored = !isMirrored;
    });

    $('#flipTextBtn').click(function () {
        updateInputText(reverseText(reverseWords($('#textArea').val())));
    });

    $('#reverseWordingBtn').click(function () {
        updateInputText(reverseWords($('#textArea').val()));
    });

    $('#flipWordingBtn').click(function () {
        updateInputText(flipWords($('#textArea').val()));
    });

    $('#reverseEachWordBtn').click(function () {
        updateInputText(reverseEachWord($('#textArea').val()));
    });

    $('#fileInput').change(function (event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                updateInputText(e.target.result);
            };
            reader.readAsText(file);
        }
    });

    // Hide output div initially
    $(".reverse-result").hide();

    // Show output div when any button is clicked
    $("#reverseBtn, #mirrorBtn, #flipTextBtn, #reverseWordingBtn, #flipWordingBtn, #reverseEachWordBtn").on("click", function() {
        $(".reverse-result").show();
    });

    $("#copyIcon").on("click", function() {
        let textToCopy = $("#textArea").val();

        // Copy to clipboard
        let tempInput = $("<input>");
        $("body").append(tempInput);
        tempInput.val(textToCopy).select();
        document.execCommand("copy");
        tempInput.remove();

        // Show "Copied!" message briefly
        $("#copiedMessage").fadeIn().delay(1500).fadeOut();
    });
});
$(document).ready(function () {
    $(".clearAllBtn").on("click", function () {
        $("#textArea").val(""); // Clear the textarea
    });
});
