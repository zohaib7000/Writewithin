$(document).ready(function () {
    let escActive = false; 
    let shiftActive = false; 
    let shiftHoverActive = false; 
    let ctrlActive = false;

    // ctrl Key Mapping
    const ctrlMap = {
        "e": "€", "'": "^", "ì":"î", "è": "["
    };
    // ESC Key Mapping
    const escMap = {
        "è": "[", "'": "-", "ì": "=", "+": "]"
    };

    // Shift Key Mapping (When Esc is active)
    const shiftMap = {
        "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F", "g": "G", "h": "H", "i": "I", "j": "J",
        "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R", "s": "S", "t": "T",
        "u": "U", "v": "V", "w": "W", "x": "X", "y": "Y", "z": "Z",
        "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")",
        "-": "_", "+": "=", "è": "{", "+": "}", "|": "\\", "<": ",", ">": ".", "?": "/"
    };

    // Shift Only Mapping (When Shift is active and Esc is FALSE)
    const shiftOnlyMap = {
        "2": "\"",
        "]": "*",
        "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F", "g": "G", "h": "H", "i": "I", "j": "J",
        "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R", "s": "S", "t": "T",
        "u": "U", "v": "V", "w": "W", "x": "X", "y": "Y", "z": "Z",
    };

    // Toggle ctrl Key
    function toggleCtrl() {
        ctrlActive = !ctrlActive; 
        updateKeyLabels();
        updateBackgroundColors();
    }

    // Toggle ESC Key
    function toggleEsc() {
        escActive = !escActive; 
        updateKeyLabels();
        updateBackgroundColors();
    }

    // Toggle Shift Key
    function toggleShift() {
        shiftActive = !shiftActive; 
        shiftHoverActive = false; 
        updateKeyLabels();
        updateBackgroundColors();
    }

    // Hover Shift Key (Applies ShiftOnlyMap when Esc is false, ShiftMap when Esc is active)
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
                // Show the Ctrl-mapped character if Ctrl is active
                $key.find("p").text(ctrlMap[originalChar]).show();
            } 
            else if (ctrlActive && !ctrlMap[originalChar]) {
                // If no mapping exists in ctrlMap, remove the <p> content
                $key.find("p").text("").hide();
            }
            else if (escActive && shiftActive && shiftMap[originalChar]) {
                // When both ESC and Shift are active, use shiftMap for ESC key
                $key.find("p").text(shiftMap[originalChar]).show();
            } 
            else if (escActive && !shiftActive && escMap[originalChar]) {
                // When ESC is active but Shift is not, use escMap
                $key.find("p").text(escMap[originalChar]).show();
            } 
            else if (escActive && (shiftActive || shiftHoverActive) && shiftMap[originalChar]) {
                // Shift + ESC combination
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
            // Prevent the mapped character from appearing in inputText_keyboard
            event.preventDefault(); // Stops default action
            event.stopPropagation(); // Stops event bubbling

            // Keep Ctrl active initially
            ctrlActive = true;
            updateKeyLabels();
            updateBackgroundColors();

            // Reset Ctrl mode AFTER updating UI
            setTimeout(() => {
                ctrlActive = false;
                updateKeyLabels();
                updateBackgroundColors();
            }, 1); // Small delay to allow UI update

            return; // Stop further execution, so nothing gets inserted
        }

        // Insert text only if Ctrl is not active
        if (!ctrlActive) {
            let keyText = $key.find("p").text();
            $(".inputText_keyboard").append(keyText);
        }
    });


    // Update background colors for active keys
    function updateBackgroundColors() {
        $(".key.esc").css("background-color", escActive ? "yellow" : "transparent");
        $(".key.shift").css("background-color", (shiftActive || shiftHoverActive) ? "yellow" : "transparent");
    }

    // ESC Key Events
    $(".key.esc").on("click", toggleEsc);
    $(document).on("keydown", function (event) {
        if (event.key === "Escape") {
            toggleEsc();
            event.preventDefault();
        }
    });

    // Shift Key Events
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

    // Key Click & Input Handling
    $(".key").on("click", function () {
        let charToInsert = $(this).find("p").text();
        insertChar(charToInsert);
    });

    $(document).on("keydown", function (event) {
        let keyPressed = event.key;
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
