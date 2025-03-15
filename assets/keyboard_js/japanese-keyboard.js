// $(document).ready(function () {
//     let currentLayout = 'kana'; 
//     let shiftActive = false;
//     const keyMappings = {
//         kana : { '`': 'ろ', '1': 'ぬ', '2': 'ふ', '3': 'あ', '4': 'う', '5': 'え', '6': 'お', '7': 'や', '8': 'ゆ', '9': 'よ', '0': 'わ', '-': 'ほ', '=': 'へ', 'q': 'た', 'w': 'て', 'e': 'い', 'r': 'す', 't': 'か', 'y': 'ん', 'u': 'な', 'i': 'に', 'o': 'ら', 'p': 'せ', '[': '゛', ']': '゜', '\\': 'む', 'a': 'ち', 's': 'と', 'd': 'し', 'f': 'は', 'g': 'き', 'h': 'く', 'j': 'ま', 'k': 'の', 'l': 'り', ';': 'れ', "'": 'け', 'z': 'つ', 'x': 'さ', 'c': 'そ', 'v': 'ひ', 'b': 'こ', 'n': 'み', 'm': 'も', ',': 'ね', '.': 'る', '/': 'め' },
//         compact: { 'a': 'ア', 'i': 'イ', 'u': 'ウ', 'e': 'エ', 'o': 'オ', 'k': 'カ', 's': 'サ', 't': 'タ', 'n': 'ナ', 'h': 'ハ', 'm': 'マ', 'y': 'ヤ', 'r': 'ラ', 'w': 'ワ', ' ': '　' },
//         romaji: { 'a': 'A', 'i': 'I', 'u': 'U', 'e': 'E', 'o': 'O', 'k': 'K', 's': 'S', 't': 'T', 'n': 'N', 'h': 'H', 'm': 'M', 'y': 'Y', 'r': 'R', 'w': 'W', ' ': ' ' }
//     };

//     const shiftOnlyMappings = {
//         kana: { '3':'ぁ', '#': 'ぁ', '4': 'ぅ' , '$':'ぅ', 'る': '。', '.': '。'},
//         compact: { 'a': 'ァ', 'i': 'ィ', 'u': 'ゥ', 'e': 'ェ', 'o': 'ォ', 'k': 'ガ', 's': 'ザ', 't': 'ダ', 'n': 'ン', 'h': 'バ', 'm': 'パ', 'y': 'ュ', 'r': 'リ', 'w': 'ヲ' },
//         romaji: { 'a': 'Á', 'i': 'Í', 'u': 'Ú', 'e': 'É', 'o': 'Ó', 'k': 'K', 's': 'S', 't': 'T', 'n': 'Ñ', 'h': 'H', 'm': 'M', 'y': 'Y', 'r': 'Ř', 'w': 'W' }
//     };
// });
$(document).ready(function () {
    const inputField = $(".inputText_keyboard");

    // Handle layout change
    $("input[name='keyboard-layout']").change(function () {
        $(".keyboard-container > div").hide();
        $("." + $(this).val()).show();
    });

    // Key click and keydown events
    $(".key").click(function () {
        handleKeyPress($(this).data("key"), true);
    });

    $(document).keydown(function (e) {
        handleKeyPress(e.key.toLowerCase(), false, e);
        e.preventDefault();
    });

    // Handle key press logic
    function handleKeyPress(key, isClick, e = null) {
        const activeLayout = $("input[name='keyboard-layout']:checked").val();
        const keyElement = $("." + activeLayout + " .key[data-key='" + key + "'] p");

        // Only apply key mappings if the active layout is "kana-compact-keyboard"
        if (activeLayout === 'kana-compact-keyboard') {
            const keyMapping = {
                'w': { 'a': 'ぢ', 's': 'づ', 'd': 'ど', 'f': 'だ', 'j': 'だ', 'k': 'ど', 'l': 'で' },
                'e': { 'a': 'り', 's': 'る', 'd': 'ろ', 'f': 'ら', 'j': 'ら', 'k': 'ろ', 'l': 'れ' },
                'r': { 'a': 'し', 's': 'す', 'd': 'そ', 'f': 'さ', 'j': 'さ', 'k': 'そ', 'l': 'せ' },
                'y': { 'a': 'ひ', 's': 'ふ', 'd': 'ほ', 'f': 'は', 'j': 'は', 'k': 'ほ', 'l': 'へ' },
                'u': { 'a': 'に', 's': 'ぬ', 'd': 'の', 'f': 'な', 'j': 'な', 'k': 'の', 'l': 'ね' },
                'i': { 'a': 'き', 's': 'く', 'd': 'こ', 'f': 'か', 'j': 'か', 'k': 'こ', 'l': 'け' },
                'o': { 'a': 'み', 's': 'む', 'd': 'も', 'f': 'ま', 'j': 'ま', 'k': 'も', 'l': 'め' },
                'p': { 'a': 'び', 's': 'ぶ', 'd': 'ぼ', 'f': 'ば', 'j': 'ば', 'k': 'ぼ', 'l': 'べ' },
                'b': { 'a': 'ぴ', 's': 'ぷ', 'd': 'ぽ', 'f': 'ぱ', 'j': 'ぱ', 'k': 'ぽ', 'l': 'ぺ' },
                'n': { 'a': 'じ', 's': 'ず', 'd': 'ぞ', 'f': 'ざ', 'j': 'ざ', 'k': 'ぞ', 'l': 'ぜ' },
                'm': { 'a': 'ち', 's': 'つ', 'd': 'と', 'f': 'た', 'j': 'た', 'k': 'と', 'l': 'て' },
                'h': { 's': 'ゆ', 'd': 'よ', 'f': 'や', 'j': 'や', 'k': 'よ' },
                'c': { 's': 'ゅ', 'd': 'ょ', 'f': 'ゃ', 'j': 'ゃ', 'k': 'ょ' },
                't': { 'a': 'ゐ', 'd': 'を', 'f': 'わ', 'j': 'わ', 'k': 'を', 'l': 'ゑ' }
            };

            // Apply the key mappings for kana-compact-keyboard
            if (keyMapping[key]) {
                $("." + activeLayout + " .key p").text(""); // Clear all current key values
                $.each(keyMapping[key], (k, v) => {
                    $("." + activeLayout + " .key[data-key='" + k + "'] p").text(v);
                });
                return;  // Stop further processing if the key is mapped
            }
        }

        // Handle Control key combinations
        if (e && e.ctrlKey) {
            switch (key) {
                case "a":
                    inputField.select();  // Ctrl+A selects all text
                    return;
                case "c":
                    document.execCommand("copy");  // Ctrl+C copies selected text
                    return;
                case "v":
                    document.execCommand("paste");  // Ctrl+V pastes clipboard content
                    return;
                case "x":
                    document.execCommand("cut");  // Ctrl+X cuts selected text
                    return;
                case "y":
                    // Optional: Implement redo functionality
                    return;
                case "z":
                    // Optional: Implement undo functionality
                    return;
            }
        }

        // Handle Backspace, Space, and Enter
        if (key === "backspace") {
            inputField.val(inputField.val().slice(0, -1));  // Remove last character
        } else if (key === " ") {
            insertCharacter(" ");  // Insert space character
        } else if (key === "enter") {
            insertCharacter("\n");  // Insert newline character
        } else if (keyElement.length && keyElement.text().trim() !== "") {
            insertCharacter(keyElement.text().trim());  // Insert regular character
        } else if (['a', 's', 'd', 'f', 'j', 'k', 'l'].includes(key)) {
            let charToInsert = keyElement.text().trim();
            if (charToInsert) {
                insertCharacter(charToInsert);
            }
            restoreOriginalKeys(activeLayout);
        }
    }

    // Insert character into input
    function insertCharacter(char) {
        inputField.val(inputField.val() + char);
    }

    // Restore original keys
    function restoreOriginalKeys(activeLayout) {
        $("." + activeLayout + " .key p").each(function () {
            let originalChar = $(this).closest(".key").attr("data-key-original");
            if (originalChar) {
                $(this).text(originalChar);
            }
        });
    }

    $(".key").each(function () {
        $(this).attr("data-key-original", $(this).find("p").text());
    });

    let activeKeyboard = "kana-keyboard";

    $('input[name="keyboard-layout"]').on('change', function() {
        activeKeyboard = $(this).val();

        $(".emoji").hide(); 
        $('#keyboard-kana, #keyboard-kana-compact, #keyboard-romaji').hide(); 

        if (activeKeyboard === "kana-keyboard") {
            $('#keyboard-kana').show();
        } else if (activeKeyboard === "kana-compact-keyboard") {
            $('#keyboard-kana-compact').show();
        } else if (activeKeyboard === "romaji-keyboard") {
            $('#keyboard-romaji').show();
        }
    });

    $(".key.emojibtn").click(function() {
        $("#keyboard-kana, #keyboard-kana-compact, #keyboard-romaji").hide();
        $(".emoji").show(); 
    });

    $(".emoji .abc").click(function() {
        $(".emoji").hide();

        if (activeKeyboard === "kana-keyboard") {
            $("#keyboard-kana").show();
        } else if (activeKeyboard === "kana-compact-keyboard") {
            $("#keyboard-kana-compact").show();
        } else if (activeKeyboard === "romaji-keyboard") {
            $("#keyboard-romaji").show();
        }
    });

    // Emoji insertion
    $(".all-emojis").on("click", "p", function () {
        let emoji = $(this).text();
        $(".inputText_keyboard").val($(".inputText_keyboard").val() + emoji); 
        applyReplacements(); 
    });

});


// $(document).ready(function () {
//     let inputField = $(".inputText_keyboard");

//     $("input[name='keyboard-layout']").change(function () {
//         $(".keyboard-container > div").hide();
//         $("." + $(this).val()).show();
//     });

//     $(".key").click(function () {
//         let key = $(this).data("key");
//         handleKeyPress(key, true);
//     });

//     $(document).keydown(function (e) {
//         let key = e.key.toLowerCase();
//         handleKeyPress(key, false);
//         e.preventDefault();
//     });

//     function handleKeyPress(key, isClick) {
//         let activeLayout = $("input[name='keyboard-layout']:checked").val();

//         let keyElement = $("." + activeLayout + " .key[data-key='" + key + "'] p");

//         if (activeLayout === "kana-compact-keyboard") {
//             if (key === "w") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("ぢ");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("づ");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("ど");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("だ");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("だ");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("ど");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("で");
//                 return;
//             }
//             else if (key === "e") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("り");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("る");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("ろ");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("ら");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("ら");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("ろ");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("れ");
//                 return;
//             }

//             else if (key === "r") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("し");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("す");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("そ");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("さ");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("さ");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("そ");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("せ");
//                 return;
//             }

//             else if (key === "y") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("ひ");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("ふ");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("ほ");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("は");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("は");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("ほ");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("へ");
//                 return;
//             }

//             else if (key === "u") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("に");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("ぬ");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("の");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("な");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("な");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("の");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("ね");
//                 return;
//             }

//             else if (key === "i") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("き");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("く");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("こ");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("か");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("か");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("こ");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("け");
//                 return;
//             }

//             else if (key === "o") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("み");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("む");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("も");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("ま");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("ま");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("も");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("め");
//                 return;
//             }

//             else if (key === "p") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("び");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("ぶ");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("ぼ");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("ば");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("ば");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("ぼ");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("べ");
//                 return;
//             }
//             else if (key === "b") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("ぴ");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("ぷ");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("ぽ");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("ぱ");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("ぱ");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("ぽ");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("ぺ");
//                 return;
//             }
//             else if (key === "n") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("じ");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("ず");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("ぞ");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("ざ");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("ざ");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("ぞ");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("ぜ");
//                 return;
//             }
//             else if (key === "m") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("ち");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("つ");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("と");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("た");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("た");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("と");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("て");
//                 return;
//             }
//             else if (key === "h") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("ゆ");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("よ");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("や");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("や");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("よ");
//                 return;
//             }
//             else if (key === "c") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='s'] p").text("ゅ");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("ょ");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("ゃ");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("ゃ");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("ょ");
//                 return;
//             }

//             else if (key === "t") {
//                 $("." + activeLayout + " .key p").text("");
//                 $("." + activeLayout + " .key[data-key='a'] p").text("ゐ");
//                 $("." + activeLayout + " .key[data-key='d'] p").text("を");
//                 $("." + activeLayout + " .key[data-key='f'] p").text("わ");
//                 $("." + activeLayout + " .key[data-key='j'] p").text("わ");
//                 $("." + activeLayout + " .key[data-key='k'] p").text("を");
//                 $("." + activeLayout + " .key[data-key='l'] p").text("ゑ");
//                 return;
//             }

//             if (key === "a" || key === "s" || key === "d" || key === "f" || key === "j" || key === "k" || key === "l") {
//                 let charToInsert = keyElement.text().trim();
//                 if (charToInsert) {
//                     insertCharacter(charToInsert);
//                 }
//                 restoreOriginalKeys(activeLayout);
//                 return;
//             }
//         }

//         if (key === "backspace") {
//             if (inputField.length) {
//                 inputField.val(inputField.val().slice(0, -1));
//             }
//             return;
//         }

        

//         if (keyElement.length && keyElement.text().trim() !== "") {
//             insertCharacter(keyElement.text().trim());
//         }
//     }

//     function insertCharacter(char) {
//         if (char) {
//             inputField.val(inputField.val() + char);
//         }
//     }

//     function restoreOriginalKeys(activeLayout) {
//         $("." + activeLayout + " .key p").each(function () {
//             let originalChar = $(this).closest(".key").attr("data-key-original");
//             if (originalChar) {
//                 $(this).text(originalChar);
//             }
//         });
//     }

//     $(".key").each(function () {
//         let originalChar = $(this).find("p").text();
//         $(this).attr("data-key-original", originalChar);
//     });

// });

$(document).ready(function() {

    $('.emojibtn').on('click', function () {
        $('.keyboard-container > div').hide(); // Hide all keyboards
        $('.emoji').show(); // Show emoji box
    });

    $('.abc').on('click', function () {
        $('.emoji').hide(); // Hide emoji box
        $("." + currentKeyboard).css("display", "block"); // Show the previously active keyboard
    });


    let textInput = $('.inputText_keyboard');
    let fontSize = 16;
    let history = [""];  
    let historyIndex = 0;

    $('.selectAllBtn').click(function() {
        textInput.select();
    });

    $('.copyBtn').click(function() {
        textInput.select();
        document.execCommand('copy');

        let originalText = $(this).text();
        $(this).text("Copied!");

        setTimeout(() => {
            $(this).text(originalText);
        }, 2000); // Reset after 2 seconds
    });

    $('.undoBtn').click(function() {
        if (historyIndex > 0) {
            historyIndex--;
            textInput.val(history[historyIndex]);
        }
    });

    $('.redoBtn').click(function() {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            textInput.val(history[historyIndex]);
        }
    });

    $('.clearAllBtn').click(function() {
        textInput.val('');
        history = [""];  // Reset history
        historyIndex = 0;
    });

    $('.decreaseFontBtn').click(function() {
        if (fontSize > 10) {
            fontSize -= 2;
            updateFontSize();
        }
    });

    $('.increaseFontBtn').click(function() {
        if (fontSize < 25) {
            fontSize += 2;
            updateFontSize();
        }
    });

    $('.downloadBtn').click(function() {
        let text = $('.inputText_keyboard').val();
        let blob = new Blob([text], { type: 'text/plain' });
        let link = $('<a>')
            .attr('href', URL.createObjectURL(blob))
            .attr('download', 'chinese_language.txt')
            .appendTo('body');

        link[0].click();
        
        setTimeout(() => {
            URL.revokeObjectURL(link.attr('href'));
            link.remove();
        }, 100);
    });

    $('.imageBtn').click(function() {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        
        let textContent = textInput.val();
        let canvasWidth = textInput.width();
        let canvasHeight = textInput.height();
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.fillStyle = "#FFFFFF";  
        ctx.fillRect(0, 0, canvas.width, canvas.height);  

        ctx.font = fontSize + 'px Arial';
        ctx.fillStyle = "#000000"; 
        
        let lineHeight = fontSize * 1.2;
        let lines = textContent.split('\n');
        let y = fontSize;

        lines.forEach(function(line) {
            ctx.fillText(line, 10, y); 
            y += lineHeight;
        });

        let imageData = canvas.toDataURL('image/png');
        let link = document.createElement('a');
        link.href = imageData;
        link.download = 'chinese_language.png';
        link.click();
    });

    function updateFontSize() {
        textInput.css('font-size', fontSize + 'px');
        $('.key p, .emoji').css('font-size', fontSize + 'px');
    }

    textInput.on('input', function() {
        let newValue = textInput.val();
        if (history[historyIndex] !== newValue) {
            history = history.slice(0, historyIndex + 1); 
            history.push(newValue);
            historyIndex++;
        }
    });
});

 $(document).ready(function() {
  $('.backspace').on('click', function() {
      var inputText = $('.inputText_keyboard');
      var currentText = inputText.val();
      inputText.val(currentText.slice(0, -1));
  });

  $('.enter').on('click', function() {
      var inputText = $('.inputText_keyboard');
      inputText.val(inputText.val() + '\n');
  });
  $('.space').on('click', function() {
    var inputText = $('.inputText_keyboard');
    inputText.val(inputText.val() + ' ');
   });

  let visibleIndex = 0;
  const visibleCount = 5; 

  function updateBoxVisibility() {
    let allEmojis = $('.all-emojis div');
    allEmojis.each(function(index) {
      if (index >= visibleIndex && index < visibleIndex + visibleCount) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  updateBoxVisibility();

  $('.up').click(function() {
    if (visibleIndex > 0) {
      visibleIndex--;
      updateBoxVisibility();
    }
  });

  $('.down').click(function() {
    let allEmojis = $('.all-emojis div');
    if (visibleIndex + visibleCount < allEmojis.length) {
      visibleIndex++;
      updateBoxVisibility();
    }
  });

});

