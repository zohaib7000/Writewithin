$(document).ready(function () {
    let escActive = false; 
    let shiftActive = false; 
    let shiftHoverActive = false; 
    let ctrlActive = false;

    const ctrlMap = {
        "2": "«", "г": "ґ",
    };

    const escMap = {
       "'": "-", "¡": "=", "`":"[", "+" : "]", "ç": "\\", "ñ": ";", "-": "/", "'": "´", "º": "`", "`": "`"
    };

    const shiftMap = {
        "й": "Q", "ц": "W", "у": "E", "к": "R", "е": "T", "н": "Y", "г": "U", "ш": "I", "щ": "O", "з": "P",
        "х": "[", "ї": "]", "ф": "A", "і": "S", "в": "D", "а": "F", "п": "G", "р": "H", "о": "J",
        "л": "K", "д": "L", "я": "Z", "ч": "X", "с": "C", "м": "V", "и": "B","\\": "|",".":"?","`":"~",
        "т": "N", "ь": "M", "ж": ":", "є": '"', "б": "<", "ю": ">","х": '{', "ї": "}","-":"_", "=": "+",

        "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")",
        "-": "_", "+": "=", "è": "{", "+": "}", "|": "\\",
    };

    const shiftOnlyMap = {
         "2": '"', "@": '"',  "\\": "|", "3": "·", "1": "!", "4": "$", "5": "%", "6": "^", "7": "/", "8": "(", "9": ")",
        "]": "*", "0" : "=", "'" : "?", "ì": "í", "è": "é", "+": "*", "ò" : "ç", "à": "ó",",": ";", ".": ":", 
        "-": "_","ù": "ú",
        
        "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F", "g": "G", "h": "H", "i": "I", "j": "J",
        "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R", "s": "S", "t": "T",
        "u": "U", "v": "V", "w": "W", "x": "X", "y": "Y", "z": "Z",

    };
    
    function toggleCtrl() {
        ctrlActive = !ctrlActive; 
        updateKeyLabels();
        updateBackgroundColors();
    }

    function toggleEsc() {
        escActive = !escActive; 
        updateKeyLabels();
        updateBackgroundColors();
    }

    function toggleShift() {
        shiftActive = !shiftActive; 
        shiftHoverActive = false; 
        updateKeyLabels();
        updateBackgroundColors();
    }

    function hoverShift(active) {
        shiftHoverActive = active;
        updateKeyLabels();
        updateBackgroundColors();
    }

   function updateKeyLabels() {
        $(".key").each(function () {
            let $key = $(this);
            let originalChar = $key.attr("data-char");

            if (!originalChar) {
                $key.attr("data-char", $key.find("p").text());
                originalChar = $key.attr("data-char");
            }

            if (ctrlActive && ctrlMap[originalChar]) {
                $key.find("p").text(ctrlMap[originalChar]).show();
            } 
            else if (ctrlActive && !ctrlMap[originalChar]) {
                $key.find("p").text("").hide();
            }
            else if (escActive && shiftActive && shiftMap[originalChar]) {
                $key.find("p").text(shiftMap[originalChar]).show();
            } 
            else if (escActive && !shiftActive && escMap[originalChar]) {
                $key.find("p").text(escMap[originalChar]).show();
            } 
            else if (escActive && (shiftActive || shiftHoverActive) && shiftMap[originalChar]) {
                $key.find("p").text(shiftMap[originalChar]).show();
            } 
            else if (!escActive && (shiftActive || shiftHoverActive) && shiftOnlyMap[originalChar]) {
                $key.find("p").text(shiftOnlyMap[originalChar]).show();
            } 
            else {
                $key.find("p").text(originalChar).show();
            }
        });
    }

    
    $(".key").on("click", function (event) {
        let $key = $(this);
        let originalChar = $key.attr("data-char");

        if (ctrlActive && ctrlMap[originalChar]) {
            event.preventDefault(); 
            event.stopPropagation(); 

            ctrlActive = true;
            updateKeyLabels();
            updateBackgroundColors();

            setTimeout(() => {
                ctrlActive = false;
                updateKeyLabels();
                updateBackgroundColors();
            }, 1); 

            return; 
        }

        if (!ctrlActive) {
            let keyText = $key.find("p").text();
            $(".inputText_keyboard").append(keyText);
        }
    });


    function updateBackgroundColors() {
        $(".key.esc").css("background-color", escActive ? "yellow" : "transparent");
        $(".key.shift").css("background-color", (shiftActive || shiftHoverActive) ? "yellow" : "transparent");
    }

    $(".key.esc").on("click", toggleEsc);
    $(document).on("keydown", function (event) {
        if (event.key === "Escape") {
            toggleEsc();
            event.preventDefault();
        }
    });

    $(".key.shift").on("click", toggleShift);
    $(".key.ctrl").on("click", toggleCtrl);

    $(".key.shift").on("mouseenter", function () { 
        hoverShift(true); 
    });

    $(".key.shift").on("mouseleave", function () { 
        hoverShift(false); 
    });

    $(document).on("keydown", function (event) {
        if (event.key === "Shift") {
            shiftActive = true;
            updateKeyLabels();
            updateBackgroundColors();
        }
    });

    $(document).on("keyup", function (event) {
        if (event.key === "Shift") {
            shiftActive = false;
            updateKeyLabels();
            updateBackgroundColors();
        }
    });

    $(".key").on("click", function () {
        let charToInsert = $(this).find("p").text();
        insertChar(charToInsert);
    });

    $(document).on("keydown", function (event) {
        let keyPressed = event.key.toLowerCase();
        
        if (event.ctrlKey) {
            if (["a", "c", "v", "x", "z"].includes(keyPressed)) {
                return; 
            }
        }

        if (keyPressed === "\\") keyPressed = "\\\\";

        let $keyElement = $('.key[data-key="' + keyPressed + '"]');
        if ($keyElement.length) {
            let charToInsert = $keyElement.find("p").text();
            insertChar(charToInsert);
            event.preventDefault();
        }
    });


    function insertChar(charToInsert) {
        let $input = $(".inputText_keyboard");
        let cursorPos = $input.prop("selectionStart");
        let text = $input.val();

        $input.val(text.slice(0, cursorPos) + charToInsert + text.slice(cursorPos))
              .focus()
              .prop("selectionStart", cursorPos + charToInsert.length)
              .prop("selectionEnd", cursorPos + charToInsert.length);
    }
});
 $(document).ready(function() {
    $(document).on('click', '.all-emojis p', function() {
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

    

    $('.emojibtn').on('click', function(){
        $('.emoji').show();
        $('.ukrainian-keyboard').hide();
    });

    $('.abc').on('click', function(){
        $('.emoji').hide();
        $('.ukrainian-keyboard').show();
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
        }, 2000);
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
        history = [""];  
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
            .attr('download', 'ukrainian_language.txt')
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
        link.download = 'ukrainian_language.png';
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


  
