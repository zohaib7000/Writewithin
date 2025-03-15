$(document).ready(function() {
    let shiftHeld = false;
    let escToggled = false;
    let shiftToggled = false;
    let ctrlToggled = false;

    const shifOnlyMap = {"1": "!", "2": "\"", "@": "\"", "~": "½", "§": "½" , "3": "#", "4": "¤", "$": "¤", "5":"%", "6": "&", 
    "^": "&","7": "/", "&": "/", "8" :"(", "*":"(","(":")", "9": ")","0": "=", ")":"=", "+": "?", "_": "?", "å":"Å","{": "Å" , "¨":"^", "}":"^",
    "'":"*", "|":"*", "ö": "Ö", ":": "Ö" ,"ä": "Ä", '"': 'Ä', ",": ";", "<": ";", ".":":", ">": ":", "-":"_", "?": "_",
    "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F", "g": "G", "h": "H", "i": "I", "j": "J",
    "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R", "s": "S", "t": "T",
    "u": "U", "v": "V", "w": "W", "x": "X", "y": "Y", "z": "Z",

    };
    const shiftEscMap = {
        "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", 
        "-": "_", "=": "+","+": "?", "[": "{", "]": "}", "\\": "|", ";": ":", "'": "\"", ",": "<", ".": ">", "/": "?", 
        "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F", "g": "G", "h": "H", "i": "I", "j": "J", 
        "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R", "s": "S", "t": "T", 
        "u": "U", "v": "V", "w": "W", "x": "X", "y": "Y", "z": "Z"
    };

    const escMap = { "å": "[", "[": "å" , "¨": "]", "]": "¨", "ö": ";", ";": "ö", "ä": "'", "'": "ä", "-":"/", "/":"-", "§": "`", "~": "`", "`": "§", "´" :"=", "=":"´", "+": "-",  "-": "+"};
    const ctrlMap = { 
        "2": "@", "3": "£", "4": "$", "5": "€", "7": "{", "8": "[", "9": "]", "0": "}", 
        "\\": "\\", "e": "€", 
    };

function updateShiftKeys(applyShift) {
        $(".key").each(function() {
            let keyElement = $(this);
            let currentText = keyElement.find("p").text();
            let activeMap = escToggled ? shiftEscMap : shifOnlyMap;

            if (applyShift && activeMap[currentText]) {
                keyElement.find("p").text(activeMap[currentText]); 
            } else if (!applyShift) {
                let originalChar = Object.keys(activeMap).find(k => activeMap[k] === currentText);
                if (originalChar) keyElement.find("p").text(originalChar);
            }
        });
    }

    function toggleEsc() {
        escToggled = !escToggled;
        $(".key.esc").css("background-color", escToggled ? "yellow" : "transparent");

        $(".key").each(function() {
            let keyElement = $(this);
            let currentText = keyElement.find("p").text();

            if (escMap[currentText]) {
                keyElement.find("p").text(escMap[currentText]);
            }
        });

        if (!escToggled) {
            updateShiftKeys(false);
        }
    }

    function insertCharacter(keyText) {
        let inputField = $(".inputText_keyboard");
        if (inputField.is("input, textarea")) {
            inputField.val(inputField.val() + keyText);
        } else {
            inputField.append(keyText);
        }
    }

    $(".key").on("click", function() {
        let keyText = $(this).find("p").text();
        insertCharacter(keyText);
    });

    $(document).on("keydown", function(event) {
        let key = event.key.toLowerCase();
        let keyElement = $('.key[data-key="' + key + '"]');

        let activeMap = escToggled ? shiftEscMap : shifOnlyMap;

        // Handle Ctrl Key
        if (event.ctrlKey) {
            ctrlToggled = true;
            $(".key[data-key='ctrl']").css("background-color", "yellow");

            if (ctrlMap.hasOwnProperty(key)) {
                insertCharacter(ctrlMap[key]);
                event.preventDefault();
                return;
            }

            if (key === "a") {
                $(".inputText_keyboard").select();
                event.preventDefault();
                return;
            }
        }

        // Handle Enter Key
        if (key === "enter") {
            insertCharacter("\n");
            event.preventDefault();
            return;
        }

        // Handle Backspace Key
        if (key === "backspace") {
            let inputField = $(".inputText_keyboard");
            let currentText = inputField.val();
            inputField.val(currentText.slice(0, -1)); // Remove last character
            event.preventDefault();
            return;
        }

        // Handle Space Key
        if (key === " ") {
            insertCharacter(" ");
            event.preventDefault();
            return;
        }

        // Handle Shift Key Mapping
        if (event.shiftKey && activeMap.hasOwnProperty(key)) {
            insertCharacter(activeMap[key]); 
            event.preventDefault();
            return;
        }

        // Normal Key Handling
        if (keyElement.length) {
            let keyText = keyElement.find("p").text();
            insertCharacter(keyText);
            event.preventDefault();
        }

        // Shift Key Pressed
        if (event.key === "Shift" && !shiftHeld) {
            shiftHeld = true;
            updateShiftKeys(true);
            $(".key.shift").css("background-color", "yellow");
        }

        // Esc Key Pressed
        if (event.key === "Escape") {
            toggleEsc();
        }
    });

    $(document).on("keyup", function(event) {
        if (event.key === "Shift") {
            shiftHeld = false;
            updateShiftKeys(false);
            $(".key.shift").css("background-color", "transparent");
        }

        if (event.key === "Control") {
            ctrlToggled = false;
            $(".key[data-key='ctrl']").css("background-color", "transparent");
        }
    });

    $(".key.shift").on("click", function() {
        shiftToggled = !shiftToggled;
        updateShiftKeys(shiftToggled);
        $(".key.shift").css("background-color", shiftToggled ? "yellow" : "transparent");
    });

    $(".key[data-key='ctrl']").on("click", function() {
        ctrlToggled = !ctrlToggled;
        $(".key[data-key='ctrl']").css("background-color", ctrlToggled ? "yellow" : "transparent");
    });

    $(".key.shift").on("mouseover", function() {
        updateShiftKeys(true);
        $(this).css("background-color", "yellow");
    });

    $(".key.shift").on("mouseout", function() {
        if (!shiftHeld && !shiftToggled) {
            updateShiftKeys(false);
            $(this).css("background-color", "transparent");
        }
    });

    $(".key.esc").on("click", function() {
        toggleEsc();
    });
 });

$(document).ready(function () {
    $('.emojibtn').on('click', function () {
        $('.emoji').show();
        $('.swedish-keyboard').hide();
    });

    $('.abc').on('click', function () {
        $('.emoji').hide();
        $('.swedish-keyboard').show();
    });

    $(document).on('click', '.all-emojis p', function () {
        var emoji = $(this).text();
        var $input = $('.inputText_keyboard');

        if ($input.is('input, textarea')) {
            let cursorPos = $input.prop("selectionStart");
            let text = $input.val();
            
            $input.val(text.slice(0, cursorPos) + emoji + text.slice(cursorPos))
                  .focus()
                  .prop("selectionStart", cursorPos + emoji.length)
                  .prop("selectionEnd", cursorPos + emoji.length);
        } else {
            $input.append(emoji);
        }
    });
});
$(document).ready(function() {
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
            .attr('download', 'baybayin_language.txt')
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
        link.download = 'baybayin_language.png';
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