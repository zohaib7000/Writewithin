<!--     <textarea id="inputText"></textarea>
    <div style="display: flex;">
      <div class="key" data-num-key="1"><small>1</small><p>1</p></div>
      <div class="key" data-num-key="2"><small>2</small><p>2</p></div>
      <div class="key" data-num-key="3"><small>3</small><p>3</p></div>
      <div class="key" data-num-key="4"><small>4</small><p>4</p></div>
      <div class="key classa" data-key="a"><small>a</small><p>日</p></div>
      <div class="key" data-key="s"><small>s</small><p>尸</p></div>
      <div class="key" data-key="d"><small>d</small><p>木</p></div>
    </div>
    
    
    
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script>
      
      let cycleIndices = {};

for (let i = 1; i <= 9; i++) {
    cycleIndices[`data-key${i}`] = 0;  // Fix for using proper string interpolation
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
    "1_a": ['是', '昌', '晶', '𣊫', '1'],
    "2_a": ['日', '晶', '曡', '𣊭', '2'],
    "3_a": ['時', '曝', '㬪', '3'],
    "4_a": ['明', '暘', '曑', '4'],
    "1_s": ['改', '局', '1'],
    "2_s": ['已', '巨', '2'],
    "3_s": ['區', '凹', '3'],
    "4_s": ['尼', '燛', '4'],
    "1_d": ['本', '林', '森', '1'],
    "2_d": ['權', '森', '檚', '2'],
    "3_d": ['來', '村', '㯲', '3'],
    "4_d": ['查', '禁', '4']
};

function cycleKey(key) {
    // Increment click count with modulo to cycle
    clickCounts[key] = (clickCounts[key] + 1) % cycleCounts[key];
    
    let inputField = $("#inputText");
    inputField.append(`<p class="char ${key}">${$(".key[data-key='" + key + "']").find("p").text()}</p>`);
    activeKey = key;

    // Update key characters in the UI
    for (let i = 1; i <= 9; i++) {
        let newChar = cycleValues[`${i}_${key}`]?.[clickCounts[key] - 1] || i;
        $(`.key[data-num-key='${i}'] p`).text(newChar);
    }
}

$(document).ready(function () {

    $('.key').click(function () {
        let key = $(this).attr('data-key');
        let numKey = $(this).attr('data-num-key');
        let char = $(this).find('p').text();
        let inputText = $('#inputText').val();

        if (key) {
            cycleKey(key);
        }

        // Handling the case when numKey is clicked
        if (numKey && !$(`[data-key][data-num-key="${numKey}"]`).length) {
            let selectedValue = $(this).find('p').text();

            // Only remove unwanted characters if not part of cycle value keys (1, 2, 3, 4)
            if (!["1", "2", "3", "4"].includes(selectedValue)) {
                inputText = inputText.replace(/日|尸|木/g, '');  // Remove unwanted chars
            }
            
            inputText += selectedValue;
            $('#inputText').val(inputText);
        } else if (key) {
            $('#inputText').val(inputText + char);
        }
    });

    $(document).keydown(function (e) {
        let key = e.key.toLowerCase();
        
        if (cycleCounts[key]) {
            cycleKey(key);
        } else if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(key) && activeKey) {
            let charToInsert = $(`.key[data-num-key='${key}'] p`).text();
            $("#inputText").find(".char").remove();
            $("#inputText").append(`<p>${charToInsert}</p>`);
        }
    });

    $(".key[data-num-key]").click(function () {
        let charToInsert = $(this).find("p").text();
        $("#inputText").find(".char").remove();
        $("#inputText").append(`<p>${charToInsert}</p>`);
    });

   $(document).on('keydown', function (e) {
    var keyPressed = e.key.toLowerCase();
    var keyElement = $('.key[data-key="' + keyPressed + '"]');
    var numKeyElement = $('.key[data-num-key="' + keyPressed + '"]');
    var inputText = $('#inputText').val();

    if (keyElement.length) {
        var charToInsert = keyElement.find('p').text();
        $('#inputText').val(inputText + charToInsert);
        e.preventDefault();
    } else if (numKeyElement.length) {
        var selectedValue = numKeyElement.find('p').text();

        // Apply replacement logic for non-cycle values (not 1, 2, 3, 4)
        if (!["1", "2", "3", "4"].includes(selectedValue)) {
            inputText = inputText.replace(/日|尸|木/g, ''); // Remove unwanted chars
        }
        
        inputText += selectedValue;
        $('#inputText').val(inputText);
        e.preventDefault();
    }
});

});

</script> -->
