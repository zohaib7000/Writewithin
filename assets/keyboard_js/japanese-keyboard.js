$(document).ready(function () {
    let inputField = $(".inputText_keyboard");

    // Handle layout change
    $("input[name='keyboard-layout']").change(function () {
        $(".keyboard-container > div").hide();
        $("." + $(this).val()).show();
    });

    $(".key").click(function () {
        let key = $(this).data("key");
        handleKeyPress(key, true);
    });

    $(document).keydown(function (e) {
        let key = e.key.toLowerCase();
        handleKeyPress(key, false);
        e.preventDefault();
    });

    function handleKeyPress(key, isClick) {
        let activeLayout = $("input[name='keyboard-layout']:checked").val();

        let keyElement = $("." + activeLayout + " .key[data-key='" + key + "'] p");

        if (activeLayout === "kana-compact-keyboard") {
            if (key === "w") {
                $("." + activeLayout + " .key p").text("");
                $("." + activeLayout + " .key[data-key='a'] p").text("ぢ");
                $("." + activeLayout + " .key[data-key='s'] p").text("づ");
                $("." + activeLayout + " .key[data-key='d'] p").text("ど");
                $("." + activeLayout + " .key[data-key='f'] p").text("だ");
                return;
            }

            if (key === "a" || key === "s" || key === "d" || key === "f") {
                let charToInsert = keyElement.text().trim();
                if (charToInsert) {
                    insertCharacter(charToInsert);
                }
                restoreOriginalKeys(activeLayout);
                return;
            }
        }

        if (key === "backspace") {
            if (inputField.length) {
                inputField.val(inputField.val().slice(0, -1));
            }
            return;
        }

        if (keyElement.length && keyElement.text().trim() !== "") {
            insertCharacter(keyElement.text().trim());
        }
    }

    function insertCharacter(char) {
        if (char) {
            inputField.val(inputField.val() + char);
        }
    }

    function restoreOriginalKeys(activeLayout) {
        $("." + activeLayout + " .key p").each(function () {
            let originalChar = $(this).closest(".key").attr("data-key-original");
            if (originalChar) {
                $(this).text(originalChar);
            }
        });
    }

    $(".key").each(function () {
        let originalChar = $(this).find("p").text();
        $(this).attr("data-key-original", originalChar);
    });
});
