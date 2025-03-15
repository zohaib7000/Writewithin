let cycleIndices = {};

for (let i = 1; i <= 9; i++) {
    cycleIndices[`data-key${i}`] = 0; 
}

let cycleCounts = {
    w: 4, s: 3, a: 5, b: 5, c: 5, d: 4, e: 6, f: 5, g: 5,
    h: 4, p: 4, j: 5, k: 5, l: 5, n: 4, m: 5, q: 4, r: 5,
    t: 5, u: 5, v: 4, i: 4, o: 4, x: 4, y: 3
};

let clickCounts = {
    w: 0, s: 0, a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0,
    h: 0, p: 0, j: 0, k: 0, l: 0, n: 0, m: 0, q: 0, r: 0,
    t: 5, u: 5, v: 4, i: 4, o: 4, x: 4, y: 3
};

let activeKey = null;

      const cycleValues = {
          // a
    "1_a": ['是', '昌', '晶', '𣊫' , '1'],
    "2_a": ['日', '晶', '曡', '𣊭' , '2'],
    "3_a": ['時', '曝', '㬪', '3'],
    "4_a": ['明', '暘', '曑', '4'],
    "5_a": ['最', '暻', '曟', '5'],
    "6_a": ['題', '曡', '𣊫', '6'],
    "7_a": ['巴', '昍', '𣊭', '7'],
    "8_a": ['間', '晹', '8'],
    "9_a": ['曰', '暍', '9'],

    // b
    "1_b": ['月', '體', '骨', '朤' , '1'],
    "2_b": ['用', '受', '朤', '䯞' , '2'],
    "3_b": ['目', '辭', '腡', '3'],
    "4_b": ['同', '愛', '覶', '4'],
    "5_b": ['體', '骨', '䯞', '5'],
    "6_b": ['縣', '亂', '骽', '6'],
    "7_b": ['受', '朋', '7'],
    "8_b": ['軍', '骸', '8'],
    "9_b": ['助', '髓', '9'], 

    // c
    "1_c": ['分', '銳', '鑫', '𨰻' , '1'],
    "2_c": ['公', '鉛', '𨰻', '2'],
    "3_c": ['金', '鑫', '3'],
    "4_c": ['曾', '銻', '4'],
    "5_c": ['鐵', '鎓', '5'],
    "6_c": ['錄', '鏳', '6'],
    "7_c": ['父', '釟', '7'],
    "8_c": ['卻', '鍂', '8'],
    "9_c": ['弟', '鈆', '9'],

    // d
    "1_d": ['本', '林', '森', '1'],
    "2_d": ['權', '森', '檚', '2'],
    "3_d": ['來', '村', '㯲', '3'],
    "4_d": ['查', '禁', '4'],
    "5_d": ['相', '楚', '5'],
    "6_d": ['格', '材', '6'],
    "7_d": ['標', '梵', '7'],
    "8_d": ['機', '焚', '8'],
    "9_d": ['木', '麓', '9'],

    // e
    "1_e": ['法', '桑', '桑', '剟', '敪', '1'],
    "2_e": ['港', '婆', '淼', '㵘', '敠', '2'],
    "3_e": ['灣', '淼', '叒', '叕', '3'],
    "4_e": ['海', '汊', '剟', '敪', '4'],
    "5_e": ['洲', '沝', '㴇', '欼','5'],
    "6_e": ['源', '剟', '㵘', '毲','6'],
    "7_e": ['治', '叒', '叕', '鵽', '7'],
    "8_e": ['澳', '㕛', '敪', '䫎', '8'],
    "9_e": ['水', '𣲙', '欼', '敠', '9'],

    // f
    "1_f": ['常', '營', '燊', '燚', '1'],
    "2_f": ['當', '榮', '焱', '2'],
    "3_f": ['省', '勞', '㯲', '3'],
    "4_f": ['少', '炎', '燚',  '4'],
    "5_f": ['類', '螢', '㷋',  '5'],
    "6_f": ['米', '炒', '爃', '6'],
    "7_f": ['光', '鶯', '㸉',  '7'],
    "8_f": ['料', '瑩', '𤍢', '8'],
    "9_f": ['火', '炏', '𤏪', '9'],

    // g
    "1_g": ['地', '封', '堯', '㙓', '1'],
    "2_g": ['喜', '圭', '垚', '2'],
    "3_g": ['趣', '卦', '㙓', '3'],
    "4_g": ['城', '堯', '墝',  '4'],
    "5_g": ['起', '墻', '𡋣',  '5'],
    "6_g": ['場', '恚', '龳', '6'],
    "7_g": ['去', '邽', '𡓨',  '7'],
    "8_g": ['塔', '垚', '8'],
    "9_g": ['土', '瑴', '9'],

    // h
    "1_h": ['的', '留', '躲', '1'],
    "2_h": ['科', '射', '犂', '2'],
    "3_h": ['和', '篇', '彡', '3'],
    "4_h": ['所', '黎', '辵', '4'],
    "5_h": ['自', '須', '箄', '5'],
    "6_h": ['與', '貿', '鵹', '6'],
    "7_h": ['去', '笑', '𡓨', '7'],
    "8_h": ['行', '卑', '䉫', '8'],
    "9_h": ['竹', '卿', '躷', '9'],

    // i
    "1_i": ['為', '參', '參', '1'],
    "2_i": ['能', '朗', '廊', '2'],
    "3_i": ['成', '郎', '叄', '3'],
    "4_i": ['之', '腐', '絫', '4'],
    "5_i": ['或', '廊', '厽', '5'],
    "6_i": ['台', '広', '㕖', '6'],
    "7_i": ['州', '戔', '㕘', '7'],
    "8_i": ['次', '㕕', '叅', '8'],
    "9_i": ['戈', '㡲', '9'],

    // j
    "1_j": ['者', '轉', '轉', '轟', '1'],
    "2_j": ['家', '輯', '轄', '2'],
    "3_j": ['南', '朝', '轟', '3'],
    "4_j": ['事', '較', '䡛', '4'],
    "5_j": ['字', '輸', '輐', '5'],
    "6_j": ['教', '翰', '轒', '6'],
    "7_j": ['都', '韓', '䡋', '7'],
    "8_j": ['定', '廾', '䡐', '8'],
    "9_j": ['十', '卄', '䡝', '9'],

    // k
    "1_k": ['在', '希', '爽', '爽', '1'],
    "2_k": ['有', '療', '㸚', '㸚', '2'],
    "3_k": ['大', '爽', '𡘙', '3'],
    "4_k": ['加', '肴', '㾙', '4'],
    "5_k": ['希', '爻', '5'],
    "6_k": ['力', '夯', '6'],
    "7_k": ['布', '瘸', '7'],
    "8_k": ['乂', '痍', '8'],
    "9_k": ['㐅', '㚐', '9'],

    // l
    "1_l": ['中', '版', '川', '㸞', '㸞', '1'],
    "2_l": ['版', '片', '順', '2'],
    "3_l": ['由', '川', '㸞', '3'],
    "4_l": ['被', '弗', '㸠', '4'],
    "5_l": ['北', '牌', '5'],
    "6_l": ['裡', '順', '6'],
    "7_l": ['非', '患', '7'],
    "8_l": ['史', '串', '8'],
    "9_l": ['數', '衶', '9'],

    // m
    "1_m": ['一', '政', '三', '㠭', '1'],
    "2_m": ['不', '三', '辰', '亖', '2'],
    "3_m": ['百', '二', '頸', '3'],
    "4_m": ['下', '元', '㠭', '4'],
    "5_m": ['可', '示', '亖', '5'],
    "6_m": ['到', '項', '琧', '6'],
    "7_m": ['面', '麗', '䪹', '7'],
    "8_m": ['要', '惡', '8'],
    "9_m": ['理', '巧', '9'],

    // n
    "1_n": ['了', '了', '豫', '1'],
    "2_n": ['名', '承', '㐨', '2'],
    "3_n": ['多', '夠', '3'],
    "4_n": ['及', '預', '4'],
    "5_n": ['解', '豫', '5'],
    "6_n": ['外', '孑', '6'],
    "7_n": ['子', '鬻', '7'],
    "8_n": ['小', '孓', '8'],
    "9_n": ['弓', '亇', '9'],

    // o
    "1_o": ['年', '倫', '傘', '𠈌', '1'],
    "2_o": ['人', '傷', '斂', '2'],
    "3_o": ['您', '坐', '侳', '3'],
    "4_o": ['會', '劍', '㐺', '4'],
    "5_o": ['使', '偷', '𠈌', '5'],
    "6_o": ['件', '傘',  '6'],
    "7_o": ['他', '伶',  '7'],
    "8_o": ['作', '侮',  '8'],
    "9_o": ['合', '儉',  '9'],

    // p
    "1_p": ['也', '比', '毖', '1'],
    "2_p": ['世', '皆', '惢', '2'],
    "3_p": ['性', '恂', '㐂', '3'],
    "4_p": ['比', '惚', '橤', '4'],
    "5_p": ['包', '毖', '繠', '5'],
    "6_p": ['心', '愼', '悂', '6'],
    "7_p": ['快', '坒', '7'],
    "8_p": ['情', '惢', '8'],
    "9_p": ['必', '㤈', '9'],

    // q
    "1_q": ['接', '扶', '掱', '1'],
    "2_q": ['拉', '捧',  '2'],
    "3_q": ['表', '扥',  '3'],
    "4_q": ['手', '揍',  '4'],
    "5_q": ['提', '攆', '5'],
    "6_q": ['指', '摏', '6'],
    "7_q": ['換', '掱',  '7'],
    "8_q": ['持', '挷', '8'],
    "9_q": ['描', '抙', '9'],

    // r
    "1_r": ['民', '品', '品', '碞', '1'],
    "2_r": ['路', '器', '噪','㗊', '2'],
    "3_r": ['員', '單', '喦', '3'],
    "4_r": ['戰', '嚴', '嵒',  '4'],
    "5_r": ['品', '獸', '碞', '5'],
    "6_r": ['口', '咒', '㗊', '6'],
    "7_r": ['足', '噪',  '喿', '7'],
    "8_r": ['號', '哭', '嘽', '8'],
    "9_r": ['另', '鷺', '㗁', '9'],

    // s
    "1_s": ['改', '局', '1'],
    "2_s": ['已', '巨', '2'],
    "3_s": ['區', '凹', '3'],
    "4_s": ['尼', '燛', '4'],
    "5_s": ['長', '臩', '5'],
    "6_s": ['展', '螶', '6'],
    "7_s": ['馬', '䢹', '7'],
    "8_s": ['司', '乬', '8'],
    "9_s": ['屬',  '9'],

    // t
    "1_t": ['基', '並', '荓', '㐩', '1'],
    "2_t": ['斯', '井', '㐩', '2'],
    "3_t": ['其', '瓶', '3'],
    "4_t": ['期', '苷', '4'],
    "5_t": ['對', '蒴', '5'],
    "6_t": ['歡', '萁', '6'],
    "7_t": ['美', '丼', '7'],
    "8_t": ['前', '蠲', '8'],
    "9_t": ['廿', '卌', '9'],

    // u
    "1_u": ['出', '出', '茻', '茻', '1'],
    "2_u": ['山', '祟', '芔', '2'],
    "3_u": ['岸', '艸', '3'],
    "4_u": ['峰', '嵕', '4'],
    "5_u": ['豐', '茻', '5'],
    "6_u": ['岩', '屾', '6'],
    "7_u": ['崇', '芔', '7'],
    "8_u": ['凱', '㔘', '8'],
    "9_u": ['崎', '㟅', '9'],

    // v
    "1_v": ['以', '災', '姦', '1'],
    "2_v": ['維', '巢', '巛', '2'],
    "3_v": ['如', '姦', '㛴' , '3'],
    "4_v": ['好', '邕', '㜉' , '4'],
    "5_v": ['經', '姒', '5'],
    "6_v": ['編', '甾', '6'],
    "7_v": ['將', '巛', '7'],
    "8_v": ['始', '奻', '8'],
    "9_v": ['女', '㚣', '9'],


    // w
    "1_w": ['國', '壘', '四', '壨', '1'],
    "2_w": ['戸', '疊', '果', '2'],
    "3_w": ['圖', '圜', '纍' , '3'],
    "4_w": ['果', '纍', '畾' , '4'],
    "5_w": ['四', '圐', '罍' , '5'],
    "6_w": ['界', '畾', '壨' , '6'],
    "7_w": ['罍', '罍', '櫐' , '7'],
    "8_w": ['回', '畕', '礨' , '8'],
    "9_w": ['田', '圛', '㽮' , '9'],

    // x
    "1_x": ['楽', '舎', '岀', '1'],
    "2_x": ['戸', '岀', '鰧', '2'],
    "3_x": ['蔵', '応', '乢' , '3'],
    "4_x": ['撃', '晩', '仦' , '4'],
    "5_x": ['様', '鳾', '忢' , '5'],
    "6_x": ['舎', '鋭', '慗' , '6'],
    "7_x": ['黒', '尙', '羐' , '7'],
    "8_x": ['徳', '殻', '頢' , '8'],
    "9_x": ['増', '縦', '鴊' , '9'],

    // y
    "1_y": ['文', '這', '𧜏'],
    "2_y": ['新', '遊', '2'],
    "3_y": ['上', '適', '3'],
    "4_y": ['於', '卞', '4'],
    "5_y": ['迎', '遽', '5'],
    "6_y": ['這', '逌', '6'],
    "7_y": ['主', '迠', '7'],
    "8_y": ['此', '逴', '8'],
    "9_y": ['卜', '邅', '9'],
      };

     function cycleKey(key) {
    // Increment click count with modulo to cycle
    clickCounts[key] = (clickCounts[key] + 1) % cycleCounts[key];
    
    let inputField = $(".inputText_keyboard");
    inputField.append(`<p class="char ${key}">${$(".key[data-key='" + key + "']").find("p").text()}</p>`);
    activeKey = key;

    // Update key characters in the UI
    for (let i = 1; i <= 9; i++) {
        let newChar = cycleValues[`${i}_${key}`]?.[clickCounts[key] - 1] || i;
        $(`.key[data-num-key='${i}'] p`).text(newChar);
    }
}

$(document).ready(function () {
    $('input[name="keyboard-layout"]').change(function () {
        let activeLayout = getActiveKeyboardLayout();

        $('.cangjie-keyboard, .pinyin-keyboard').hide();
        $(`.${activeLayout}-keyboard`).show();
         $('.emoji').hide();
    });
    function getActiveKeyboardLayout() {
        return $('input[name="keyboard-layout"]:checked').val(); // Returns "cangjie" or "pinyin"
    }
    $('.emojibtn').on('click', function(){
        $('.emoji').show();
        $('.cangjie-keyboard, .pinyin-keyboard').hide(); 
    });

    $('.abc').on('click', function(){
        $('.emoji').hide();
        let activeLayout = getActiveKeyboardLayout(); // Get the current active layout
        if (activeLayout) {
            $(`.${activeLayout}-keyboard`).show(); // Show only the active layout
        }
    });
    // Create the replacement map
    const replacementMap = {
    "手": "", "田": "", "水": "", "口": "", "廿": "", "卜": "", "山": "", "戈": "",
    "人": "", "心": "", "日": "", "尸": "", "木": "", "火": "", "土": "", "竹": "",
    "十": "", "大": "", "中": "", ";": "", "'": "", "Ｚ": "", "難": "", "金": "",
    "女": "", "月": "", "弓": "", "一": "", "q": "",

    // Adding lowercase letters (a-z) with empty values
    "a": "", "b": "", "c": "", "d": "", "e": "", "f": "", "g": "", "h": "",
    "i": "", "j": "", "k": "", "l": "", "m": "", "n": "", "o": "", "p": "",
    "q": "", "r": "", "s": "", "t": "", "u": "", "v": "", "w": "", "x": "",
    "y": "", "z": ""
};


    function replaceUnwantedChars(inputText) {
        for (const [key, value] of Object.entries(replacementMap)) {
            const regex = new RegExp(key, 'g');
            inputText = inputText.replace(regex, value);
        }
        return inputText;
    }

    $('.key').click(function () {
    let activeLayout = getActiveKeyboardLayout(); 
    let key = $(this).attr('data-key');
    let numKey = $(this).attr('data-num-key');
    let char = $(this).find('p').text();
    let inputText = $('.inputText_keyboard').val();

    if (!$(this).closest(`.${activeLayout}-keyboard`).length) return;

    if (key) {
        cycleKey(key);
    }

    if (numKey) {
        let selectedValue = $(this).find('p').text();

        if (!["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(selectedValue)) {
            inputText = replaceUnwantedChars(inputText);
        }

        inputText += selectedValue;
        $('.inputText_keyboard').val(inputText);
    } else if (key) {
        $('.inputText_keyboard').val(inputText + char);
    }
});


    $(document).keydown(function (e) {
        let key = e.key.toLowerCase();

        if (cycleCounts[key]) {
            cycleKey(key);
        } else if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(key) && activeKey) {
            let charToInsert = $(`.key[data-num-key='${key}'] p`).text();
            $(".inputText_keyboard").find(".char").remove();
            $(".inputText_keyboard").append(`<p>${charToInsert}</p>`);
        }
    });

    $(".key[data-num-key]").click(function () {
        let charToInsert = $(this).find("p").text();
        $(".inputText_keyboard").find(".char").remove();
        $(".inputText_keyboard").append(`<p>${charToInsert}</p>`);
    });

$(document).keydown(function (e) {
    let activeLayout = getActiveKeyboardLayout();
    let key = e.key.toLowerCase();
    let keyElement = $(`.${activeLayout}-keyboard .key[data-key='${key}']`);
    let numKeyElement = $(`.${activeLayout}-keyboard .key[data-num-key='${key}']`);
    let inputField = $('.inputText_keyboard');
    let inputText = inputField.val();

    // Handle Ctrl combinations (A, C, X, V, B, Y)
    if (e.ctrlKey) {
        switch (key) {
            case "a": // Select All
                e.preventDefault();
                let range = document.createRange();
                let selection = window.getSelection();
                range.selectNodeContents(inputField[0]);
                selection.removeAllRanges();
                selection.addRange(range);
                break;
            case "c": // Copy
                e.preventDefault();
                document.execCommand("copy");
                break;
            case "x": // Cut
                e.preventDefault();
                document.execCommand("cut");
                break;
            case "v": // Paste
                e.preventDefault();
                document.execCommand("paste");
                break;
            case "b": // Bold (if needed in a rich text editor)
                e.preventDefault();
                document.execCommand("bold");
                break;
            case "y": // Redo
                e.preventDefault();
                document.execCommand("redo");
                break;
        }
        return;
    }

    // Handle Backspace key
    if (key === "backspace") {
        e.preventDefault();
        inputField.val(inputText.slice(0, -1));
        return;
    }

    // Handle Space key
    if (key === " ") {
        e.preventDefault();
        inputField.val(inputText + " ");
        return;
    }

    // Handle Enter key
    if (key === "enter") {
        e.preventDefault();
        inputField.val(inputText + "\n");
        return;
    }

    // Handle normal key inputs (letters and numbers)
    if (keyElement.length) {
        let charToInsert = keyElement.find('p').text();
        inputField.val(inputText + charToInsert);
        e.preventDefault();
    } else if (numKeyElement.length) {
        let selectedValue = numKeyElement.find('p').text();

        if (!["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(selectedValue)) {
            inputText = replaceUnwantedChars(inputText);
        }

        inputField.val(inputText + selectedValue);
        e.preventDefault();
    }
});



});

 $(document).ready(function() {
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

    let textInput = $('.inputText_keyboard');
    let fontSize = 16;
    let history = [""];  
    let historyIndex = 0;

    // Select all text inside the div
$('.selectAllBtn').click(function() {
    var textInput = document.querySelector('.inputText_keyboard');
    var range = document.createRange();
    range.selectNodeContents(textInput);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
});

// Copy text from the div
$('.copyBtn').click(function() {
    var textInput = document.querySelector('.inputText_keyboard');
    var range = document.createRange();
    range.selectNodeContents(textInput);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    document.execCommand('copy');

    let originalText = $(this).val();
    $(this).text("Copied!");

    setTimeout(() => {
        $(this).text(originalText);
    }, 2000); // Reset after 2 seconds
});

// Undo and redo functionality
$('.undoBtn').click(function() {
    if (historyIndex > 0) {
        historyIndex--;
        textInput.innerHTML = history[historyIndex];
    }
});

$('.redoBtn').click(function() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        textInput.innerHTML = history[historyIndex];
    }
});

// Clear all text
$('.clearAllBtn').click(function() {
    textInput.innerHTML = '';
    history = [""];  // Reset history
    historyIndex = 0;
});

// Font size controls
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

// Download as .txt
$('.downloadBtn').click(function() {
    let textContent = '';
    $('.char').each(function() {
        textContent += $(this).text();  // .text() automatically strips HTML tags
    });

    // Create a Blob object with the extracted text (plain text, no HTML tags)
    let blob = new Blob([textContent], { type: 'text/plain' });

    // Create a download link for the Blob
    let link = $('<a>')
        .attr('href', URL.createObjectURL(blob))
        .attr('download', 'extracted_text.txt')
        .appendTo('body');

    // Trigger the download
    link[0].click();

    // Clean up the link
    setTimeout(() => {
        URL.revokeObjectURL(link.attr('href'));
        link.remove();
    }, 100);
});


// Download as image
$('.imageBtn').click(function() {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    
    let textContent = $('.inputText_keyboard').text();  // Get text content
    let canvasWidth = $('.inputText_keyboard').width();
    let canvasHeight = $('.inputText_keyboard').height();
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
    link.download = 'cangjie_language.png';
    link.click();
});

// Update font size in div
function updateFontSize() {
    $('.inputText_keyboard').css('font-size', fontSize + 'px');
    $('.key p, .emoji').css('font-size', fontSize + 'px');
}

// Track text changes and update history
$('.inputText_keyboard').on('input', function() {
    let newValue = $('.inputText_keyboard').html();
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
$(document).ready(function () {
    function handleKeyInput(key) {
        let inputField = $(".inputText_keyboard");

        if (key === "Space") {
            inputField.append("&nbsp;"); // Insert a space
        } else if (key === "Enter") {
            inputField.append("<br>"); // Insert a new line
        } else if (key === "Backspace") {
            let content = inputField.html();
            inputField.html(content.slice(0, -1)); // Remove last character
        } else if (key === "Escape") {
            inputField.empty(); // Clear input field on Escape key press
        }
    }

    // Click event for keys
    $(".key").on("click", function () {
        let key = $(this).attr("data-key");
        handleKeyInput(key);
    });

    // Keydown event for keyboard input
    $(document).on("keydown", function (e) {
        let keyMap = {
            " ": "Space",
            "Enter": "Enter",
            "Backspace": "Backspace",
            "Escape": "Escape"
        };

        if (keyMap[e.key]) {
            handleKeyInput(keyMap[e.key]);
            e.preventDefault(); // Prevent default browser behavior
        }
    });
});
