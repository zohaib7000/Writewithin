$(document).ready(function() { 
    let escActive = false;
    let shiftActive = false;
    let shiftHover = false;
    let shiftHeld = false;
    let ctrlActive = false;

    const keyMapping = {
        'w': 'ᜏ', 'e': '᜔', 't': 'ᜆ', 'y': 'ᜌ', 'u': 'ᜓ', 'i': 'ᜒ', 'o': '', 'p': 'ᜉ',
        'a': 'ᜀ', 's': 'ᜐ', 'd': 'ᜇ', 'f': '', 'g': 'ᜄ', 'h': 'ᜑ', 'j': '', 'k': 'ᜃ',
        'l': 'ᜎ', 'z': '', 'x': '', 'c': '', 'r': '', 'v': '', 'b': 'ᜊ', 'n': 'ᜈ', 'm': 'ᜋ',
        ',': '᜵', '.': '᜶', '/': '/', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', 
        '6': '6', '7': '7', '8': '8', '9': '9', '0': '0', '-': '-', '=': '=', "q": "", 
        "Q": "", "M" : "", "W": "",
    };

    const escMapping = {
        "ᜏ": "w", "ᜆ": "t", "᜔": "e", "ᜌ": "y", "ᜓ": "u", "ᜒ": "i", "ᜉ": "p",
        "ᜀ": "a", "ᜐ": "s", "ᜇ": "d", "ᜄ": "g", "ᜑ": "h", "ᜃ": "k", "ᜎ": "l",
        "ᜊ": "b", "ᜈ": "n", "ᜋ": "m", "᜵": ",", "᜶": "."
    };

    const shiftOnlyMapping = {
        '': '~', '1': '!', '2': '@', '3': '#', '4': '$', '5': '%', '6': '^',
        '7': '&', '8': '*', '9': '(', '0': ')', '-': '_', '=': '+', ';': ':', '`': '~',
        
        'u': 'ᜂ','U': 'ᜂ', 'I': 'ᜁ', 'i': 'ᜁ', '[': '{', ']': '}','n': 'ᜅ', 'N': 'ᜅ',
        '\\': '|', ';': ':', '\'': '"', 'n': 'ᜅ', 'N': 'ᜅ', ',': '<', '.': '>', '/': '?',
    };

    function updateKeyLabels() {
        $(".key p").each(function() {
            let keyText = $(this).closest('.key').data('key');
            let mappedValue = "";

            if (ctrlActive) {
                mappedValue = "";
            } 
            else if (shiftHeld || shiftActive || shiftHover) {
                mappedValue = shiftOnlyMapping[keyText] || "";
            } 
            else if (escActive) {
                mappedValue = escMapping[keyMapping[keyText]] || keyText;
            } 
            else {
                mappedValue = keyMapping[keyText] || "";
            }

            $(this).text(mappedValue);
            if (ctrlActive || mappedValue === "") {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    }

    function toggleCtrl() {
        ctrlActive = !ctrlActive;
        updateKeyLabels();
        $(".key.ctrl").css("background-color", ctrlActive ? "yellow" : "transparent");
    }

    function toggleEsc() {
        if (ctrlActive) return;
        escActive = !escActive;
        updateKeyLabels();
        $(".key.esc").css("background-color", escActive ? "yellow" : "transparent");
    }

    function toggleShift() {
        if (ctrlActive) return;
        shiftActive = !shiftActive;
        shiftHeld = false;
        updateKeyLabels();
        $(".key.shift").css("background-color", shiftActive ? "yellow" : "transparent");
    }

    $(".key.ctrl").on("click", toggleCtrl);
    $(".key.esc").on("click", toggleEsc);
    $(".key.shift").on("click", toggleShift);

    $(".key.shift").on("mouseenter", function() {
        if (!shiftActive && !ctrlActive) {
            shiftHover = true;
            updateKeyLabels();
            $(this).css("background-color", "yellow");
        }
    });

    $(".key.shift").on("mouseleave", function() {
        if (!shiftActive && !ctrlActive) {
            shiftHover = false;
            updateKeyLabels();
            $(this).css("background-color", "transparent");
        }
    });

    $(".key").on("click", function() {
        if (ctrlActive) return; // Prevent any input when Ctrl is active

        let keyText = $(this).find('p').text().trim();
        if (keyText !== "") {
            $(".inputText_keyboard").val(function(i, currentText) {
                return currentText + keyText;
            });
        }
    });

    $(document).on("keydown", function(e) {
        if (ctrlActive) return; // Disable all key inputs when Ctrl is active

        if (e.key === "Shift") {
            if (!shiftActive) {
                shiftHeld = true;
                $(".key.shift").css("background-color", "yellow");
                updateKeyLabels();
            }
            return;
        }

        if (e.key === "Escape") {
            toggleEsc();
            return;
        }

        if (keyMapping.hasOwnProperty(e.key) || escMapping.hasOwnProperty(e.key) || shiftOnlyMapping.hasOwnProperty(e.key)) {
            e.preventDefault();

            let mappedChar = shiftHeld || shiftActive ? shiftOnlyMapping[e.key] :
                escActive ? escMapping[keyMapping[e.key]] || e.key :
                keyMapping[e.key];

            if (mappedChar === undefined || (!escActive && !shiftActive && !shiftHeld && mappedChar === "")) {
                return;
            }

            $(".inputText_keyboard").val(function(i, currentText) {
                return currentText + mappedChar;
            });
        }
    });

    $(document).on("keyup", function(e) {
        if (e.key === "Shift") {
            shiftHeld = false;
            if (!shiftActive) {
                $(".key.shift").css("background-color", "transparent");
                updateKeyLabels();
            }
        }
    });

    updateKeyLabels();

    $(document).on("keydown", function (e) {
        let key;
        
        if (e.ctrlKey) {
            ctrlActive = true;
            if (ctrlMap[e.key.toLowerCase()]) {
                e.preventDefault();
            }
            if (e.key === "a") {
                $(".inputText_keyboard").select(); 
                e.preventDefault(); 
                return; 
            }
            
            return; 
        }

        if (ctrlActive && !ctrlMap[e.key.toLowerCase()]) {
            return; 
        }

        else {
            activeMap = shiftActive ? shiftStandardMap : standardMap;
        }


        if (activeMap[key] !== undefined) {
            e.preventDefault();
            if (activeMap[key] !== '') {
                $(".inputText_keyboard").val($(".inputText_keyboard").val() + activeMap[key]);
                applyReplacements();
            }
        }
    });

    $(document).on("keyup", function (e) {
        if (e.key === "Shift") {
            shiftActive = false;
            updateKeyLabels();
            updateBackgroundColors();
        }
        if (e.key === "Control") {
            ctrlActive = false;
            updateKeyLabels();
            updateBackgroundColors();
        }
    });

    const ctrlMap = {
        "a": "", 
        "c": "", 
        "v": "", 
        "x": "",
        "z": "",
        " ": "",
    };
});


$(document).ready(function () {
    $('.emojibtn').on('click', function () {
        $('.emoji').show();
        $('.baybayin-keyboard').hide();
    });

    $('.abc').on('click', function () {
        $('.emoji').hide();
        $('.baybayin-keyboard').show();
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