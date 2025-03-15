let activeKeyboard = "standard";

$('input[name="keyboard-layout"]').on('change', function() {
    activeKeyboard = $(this).val();

    $(".emoji").hide(); 
    $('.keyboard, .keyboard-sebeolsik, .keyboard-hanja').hide(); 

    if (activeKeyboard === "standard") {
        $('.keyboard').show();
    } else if (activeKeyboard === "sebeolsik") {
        $('.keyboard-sebeolsik').show();
    } else if (activeKeyboard === "hanja") {
        $('.keyboard-hanja').show();
    }
});

$(".key.emojibtn").click(function() {
    $(".keyboard, .keyboard-sebeolsik, .keyboard-hanja").hide();
    $(".emoji").show(); 
});

$(".emoji .abc").click(function() {
    $(".emoji").hide();

    if ($('input[name="keyboard-layout"]:checked').val() === "standard") {
        $(".keyboard").show();
    } else if ($('input[name="keyboard-layout"]:checked').val() === "sebeolsik") {
        $(".keyboard-sebeolsik").show();
    } else if ($('input[name="keyboard-layout"]:checked').val() === "hanja") {
        $(".keyboard-hanja").show();
    }
});

$(".all-emojis").on("click", "p", function () {
    let emoji = $(this).text();
    $(".inputText_keyboard").val($(".inputText_keyboard").val() + emoji); 
    applyReplacements(); 
});

const standardMap = { 
  'a': 'ㅁ', 'b': 'ㅠ', 'c': 'ㅊ', 'd': 'ㅇ', 'e': 'ㄷ', 'f': 'ㄹ', 'g': 'ㅎ',
  'h': 'ㅗ', 'i': 'ㅑ', 'j': 'ㅓ', 'k': 'ㅏ', 'l': 'ㅣ', 'm': 'ㅡ', 'n': 'ㅜ',
  'o': 'ㅐ', 'p': 'ㅔ', 'q': 'ㅂ', 'r': 'ㄱ', 's': 'ㄴ', 't': 'ㅅ', 'u': 'ㅕ',
  'v': 'ㅍ', 'w': 'ㅈ', 'x': 'ㅌ', 'y': 'ㅛ', 'z': 'ㅋ'
};
const shiftStandardMap = { 
  'q': 'ㅃ', 'w': 'ㅉ', 'e': 'ㄸ', 'r': 'ㄲ', 't': 'ㅆ', 'o': 'ㅒ', 'p': 'ㅖ',
  '`': '~', '1': '!', '2': '@', '3': '#', '4': '$', '5': '%', '6': '^', '7': '&', 
  '8': '*', '9': '(', '0': ')', '-': '_', '=': '+', ';': ':', "'": '"',  
  ',': '<', '.': '>', '/': '?', '~': '~', "/" : "?", "[" : '{', "]" : "}", "\\" : "|",
  'a': '', 's': '', 'd': '', 'f': '', 'g': '', 'h': '', 'j': '', 'k': '', 'l': '', 
  'z': '', 'x': '', 'c': '', 'v': '', 'b': '', 'n': '', 'm': '', 'y' : '', 'u' : '', 'i' : ''
}; 

// These mappings correspond to what is shown in your HTML's <p> elements.
const sebeolsikMap = { 
  "`": "*", "1": "ㅎ", "2": "ㅆ", "3": "ㅂ", "4": "ㅛ", "5": "ㅠ", "6": "ㅑ",
  "7": "ㅖ", "8": "ᅴ", "9": "ㅜ", "0": "ㅋ", "-": ")", "=": "》",
  "q": "ㅅ", "w": "ㄹ", "e": "ㅕ", "r": "ㅐ", "t": "ㅓ", "y": "ㄹ", "u": "ㄷ",
  "i": "ㅁ", "o": "ㅊ", "p": "ㅍ", "[": "(", "]": "《", "\\": ":",
  "a": "ㅇ", "s": "ㄴ", "d": "ㅣ", "f": "ㅏ", "g": "ㅡ", "h": "ㄴ",
  "j": "ㅇ", "k": "ㄱ", "l": "ㅈ", ";": "ㅂ", "'": "ㅌ",
  "z": "ㅁ", "x": "ㄱ", "c": "ㅔ", "v": "ㅗ", "b": "ㅜ", "n": "ㅅ", "m": "ㅎ",
  ",": ",", ".": ".", "/": "ㅗ"
};
// Shifted Sebeolsik mapping. For example, we want Shift+q to produce 'ㅍ' and Shift+1 to produce 'ㄲ'.
const shiftSebeolsikMap = {  
  '`' : '※',
  '~' : '※',
  '1': 'ㄲ',
  '2' : 'ᆰ',
  '3' : 'ㅈ',
  '4' : 'ᆵ',
  '5' : 'ᆴ',
  '6' : '=',
  '7' : '‘',
  '8' : '’',
  '9' : '?',
  '0' : '~',
  '-' : ';',
  '=' : '+',
  'q': 'ㅍ',
  'w': 'ㅌ',
  'e': 'ᇇ',
  'r': 'ᆶ',
  't': 'ᆳ',
  'y': '5',
  'u': '6',
  'i': '7',
  'o': '8',
  'p': '9',
  '[': '%',
  ']': '/',
  "\\": 'W',
  'a' :'ㄷ',
  's' : 'ᆭ',
  'd' : 'ᆲ', 
  'f' : 'ᆱ', 
  'g' : 'ㅒ', 
  'h' : '0', 
  'j' :'1',
  'k' : '2',
  'l' : '3', 
  ';' : '4', 
  "'" : '.', 
  'z' : 'ㅊ',

  'x' : 'ᆹ', 
  'c' :'ㅋ',
  'v' : 'ᆪ',
  'b' : '?', 
  'n' : '-', 
  "m" : '"', 
  ',' : '<',
  '.' : '>',
  '/' : '!',

  // Add additional shift mappings for Sebeolsik as needed.
};

// -------------------------
const hanjaMap = { 
  'q': 'q', 'w': 'w', 'e': 'e', 'r': 'r', 't': 't', 'y': 'y', 'u': 'u',
  'i': 'i', 'o': 'o', 'p': 'p', 'a': 'a', 's': 's', 'd': 'd', 'f': 'f',
  'g': 'g', 'h': 'h', 'j': 'j', 'k': 'k', 'l': 'l', 'z': 'z', 'x': 'x',
  'c': 'c', 'v': 'v', 'b': 'b', 'n': 'n', 'm': 'm',
};

const lowercaseMap = {
  'q': 'q', 'w': 'w', 'e': 'e', 'r': 'r', 't': 't', 'y': 'y', 'u': 'u',
  'i': 'i', 'o': 'o', 'p': 'p', 'a': 'a', 's': 's', 'd': 'd', 'f': 'f',
  'g': 'g', 'h': 'h', 'j': 'j', 'k': 'k', 'l': 'l', 'z': 'z', 'x': 'x',
  'c': 'c', 'v': 'v', 'b': 'b', 'n': 'n', 'm': 'm',
  '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6',
  '7': '7', '8': '8', '9': '9', '0': '0',
  '-': '-', '=': '=', '[': '[', ']': ']', ';': ';', "'": "'",
  ',': ',', '.': '.', '/': '/'
};

const uppercaseMap = {
  'q': 'Q', 'w': 'W', 'e': 'E', 'r': 'R', 't': 'T', 'y': 'Y', 'u': 'U',
  'i': 'I', 'o': 'O', 'p': 'P', 'a': 'A', 's': 'S', 'd': 'D', 'f': 'F',
  'g': 'G', 'h': 'H', 'j': 'J', 'k': 'K', 'l': 'L', 'z': 'Z', 'x': 'X',
  'c': 'C', 'v': 'V', 'b': 'B', 'n': 'N', 'm': 'M',
  '1': '!', '2': '@', '3': '#', '4': '$', '5': '%', '6': '^',
  '7': '&', '8': '*', '9': '(', '0': ')',
  '-': '_', '=': '+', '[': '{', ']': '}', ';': ':', "'": '"',
  ',': '<', '.': '>', '/': '?'
};
const replacements = {
 // ㄱ (g/k)
    'ㄱㅏ': '가', 'ㄱㅑ': '갸', 'ㄱㅓ': '거', 'ㄱㅕ': '겨',
    'ㄱㅗ': '고', 'ㄱㅛ': '교', 'ㄱㅜ': '구', 'ㄱㅠ': '규',
    'ㄱㅡ': '그', 'ㄱㅣ': '기',

    // ㄴ (n)
    'ㄴㅏ': '나', 'ㄴㅑ': '냐', 'ㄴㅓ': '너', 'ㄴㅕ': '녀',
    'ㄴㅗ': '노', 'ㄴㅛ': '뇨', 'ㄴㅜ': '누', 'ㄴㅠ': '뉴',
    'ㄴㅡ': '느', 'ㄴㅣ': '니',

    // ㄷ (d)
    'ㄷㅏ': '다', 'ㄷㅑ': '댜', 'ㄷㅓ': '더', 'ㄷㅕ': '뎌',
    'ㄷㅗ': '도', 'ㄷㅛ': '됴', 'ㄷㅜ': '두', 'ㄷㅠ': '듀',
    'ㄷㅡ': '드', 'ㄷㅣ': '디',

    // ㄹ (r/l)
    'ㄹㅏ': '라', 'ㄹㅑ': '랴', 'ㄹㅓ': '러', 'ㄹㅕ': '려',
    'ㄹㅗ': '로', 'ㄹㅛ': '료', 'ㄹㅜ': '루', 'ㄹㅠ': '류',
    'ㄹㅡ': '르', 'ㄹㅣ': '리',

    // ㅁ (m)
    'ㅁㅏ': '마', 'ㅁㅑ': '먀', 'ㅁㅓ': '머', 'ㅁㅕ': '며',
    'ㅁㅗ': '모', 'ㅁㅛ': '묘', 'ㅁㅜ': '무', 'ㅁㅠ': '뮤',
    'ㅁㅡ': '므', 'ㅁㅣ': '미',

    // ㅂ (b/p)
    'ㅂㅏ': '바', 'ㅂㅑ': '뱌', 'ㅂㅓ': '버', 'ㅂㅕ': '벼',
    'ㅂㅗ': '보', 'ㅂㅛ': '뵤', 'ㅂㅜ': '부', 'ㅂㅠ': '뷰',
    'ㅂㅡ': '브', 'ㅂㅣ': '비',

    // ㅅ (s)
    'ㅅㅏ': '사', 'ㅅㅑ': '샤', 'ㅅㅓ': '서', 'ㅅㅕ': '셔',
    'ㅅㅗ': '소', 'ㅅㅛ': '쇼', 'ㅅㅜ': '수', 'ㅅㅠ': '슈',
    'ㅅㅡ': '스', 'ㅅㅣ': '시',

    // ㅇ (silent/ng)
    'ㅇㅏ': '아', 'ㅇㅑ': '야', 'ㅇㅓ': '어', 'ㅇㅕ': '여',
    'ㅇㅗ': '오', 'ㅇㅛ': '요', 'ㅇㅜ': '우', 'ㅇㅠ': '유',
    'ㅇㅡ': '으', 'ㅇㅣ': '이',

    // ㅈ (j)
    'ㅈㅏ': '자', 'ㅈㅑ': '쟈', 'ㅈㅓ': '저', 'ㅈㅕ': '져',
    'ㅈㅗ': '조', 'ㅈㅛ': '죠', 'ㅈㅜ': '주', 'ㅈㅠ': '쥬',
    'ㅈㅡ': '즈', 'ㅈㅣ': '지',

    // ㅊ (ch)
    'ㅊㅏ': '차', 'ㅊㅑ': '챠', 'ㅊㅓ': '처', 'ㅊㅕ': '쳐',
    'ㅊㅗ': '초', 'ㅊㅛ': '쵸', 'ㅊㅜ': '추', 'ㅊㅠ': '츄',
    'ㅊㅡ': '츠', 'ㅊㅣ': '치',

    // ㅋ (k)
    'ㅋㅏ': '카', 'ㅋㅑ': '캬', 'ㅋㅓ': '커', 'ㅋㅕ': '켜',
    'ㅋㅗ': '코', 'ㅋㅛ': '쿄', 'ㅋㅜ': '쿠', 'ㅋㅠ': '큐',
    'ㅋㅡ': '크', 'ㅋㅣ': '키',

    // ㅌ (t)
    'ㅌㅏ': '타', 'ㅌㅑ': '탸', 'ㅌㅓ': '터', 'ㅌㅕ': '텨',
    'ㅌㅗ': '토', 'ㅌㅛ': '툐', 'ㅌㅜ': '투', 'ㅌㅠ': '튜',
    'ㅌㅡ': '트', 'ㅌㅣ': '티',

    // ㅍ (p)
    'ㅍㅏ': '파', 'ㅍㅑ': '퍄', 'ㅍㅓ': '퍼', 'ㅍㅕ': '펴',
    'ㅍㅗ': '포', 'ㅍㅛ': '표', 'ㅍㅜ': '푸', 'ㅍㅠ': '퓨',
    'ㅍㅡ': '프', 'ㅍㅣ': '피',

    // ㅎ (h)
    'ㅎㅏ': '하', 'ㅎㅑ': '햐', 'ㅎㅓ': '허', 'ㅎㅕ': '혀',
    'ㅎㅗ': '호', 'ㅎㅛ': '효', 'ㅎㅜ': '후', 'ㅎㅠ': '휴',
    'ㅎㅡ': '흐', 'ㅎㅣ': '히',

    'ㅃㅏ': '빠', 'ㅃㅑ': '뺘', 'ㅃㅓ': '뻐', 'ㅃㅕ': '뼈', 'ㅃㅗ': '뽀', 'ㅃㅛ': '뾰', 'ㅃㅜ': '뿌', 'ㅃㅠ': '쀼', 'ㅃㅡ': '쁘', 'ㅃㅣ': '삐',
    'ㅉㅏ': '짜', 'ㅉㅑ': '쨔', 'ㅉㅓ': '쩌', 'ㅉㅕ': '쪄', 'ㅉㅗ': '쪼', 'ㅉㅛ': '쬬', 'ㅉㅜ': '쭈', 'ㅉㅠ': '쮸', 'ㅉㅡ': '쯔', 'ㅉㅣ': '찌',
    'ㄸㅏ': '따', 'ㄸㅑ': '땨', 'ㄸㅓ': '떠', 'ㄸㅕ': '뗘', 'ㄸㅗ': '또', 'ㄸㅛ': '뚀', 'ㄸㅜ': '뚜', 'ㄸㅠ': '뜌', 'ㄸㅡ': '뜨', 'ㄸㅣ': '띠',
    'ㅆㅏ': '싸', 'ㅆㅑ': '쌰', 'ㅆㅓ': '써', 'ㅆㅕ': '쎄', 'ㅆㅗ': '쏘', 'ㅆㅛ': '쑈', 'ㅆㅜ': '쑤', 'ㅆㅠ': '쓔', 'ㅆㅡ': '쓰', 'ㅆㅣ': '씨',
    'ㄲㅏ': '까', 'ㄲㅑ': '꺄', 'ㄲㅓ': '꺼', 'ㄲㅕ': '꼐', 'ㄲㅗ': '꼬', 'ㄲㅛ': '꾜', 'ㄲㅜ': '꾸', 'ㄲㅠ': '뀨', 'ㄲㅡ': '끄', 'ㄲㅣ': '끼',
    '빠ㄱ': '빡', '빠ㄴ': '빤', '빠ㅁ': '빰', '빠ㄹ': '빨', '빠ㅂ': '빪',
    '짜ㄱ': '짝', '짜ㄴ': '짠', '짜ㅁ': '짬', '짜ㄹ': '짤', '짜ㅂ': '짭',
    '따ㄱ': '딱', '따ㄴ': '딴', '따ㅁ': '땀', '따ㄹ': '딸', '따ㅂ': '딥',
    '싸ㄱ': '싹', '싸ㄴ': '싼', '싸ㅁ': '쌈', '싸ㄹ': '쌀', '싸ㅂ': '쌉',
    '까ㄱ': '깍', '까ㄴ': '깐', '까ㅁ': '깜', '까ㄹ': '깔', '까ㅂ': '깝',

     // Basic C+V combinations
        'ㅁㅏ': '마',  // ak
        'ㅁㅐ': '매',  // ao
        'ㅁㅑ': '먀',  // ai
        'ㅁㅓ': '머',  // aj
        'ㅁㅔ': '메',  // ap
        'ㅁㅕ': '며',  // au
        'ㅁㅗ': '모',  // ah
        'ㅁㅛ': '묘',  // ay
        'ㅁㅜ': '무',  // an
        'ㅁㅠ': '뮤',  // ab
        'ㅁㅡ': '므',  // am
        'ㅁㅣ': '미',  // al

        // C+V+C (Batchim Combinations)
        '마ㄱ': '막',  // akg
        '마ㄴ': '만',  // akn
        '마ㄹ': '말',  // akl
        '마ㅁ': '맘',  // akm
        '마ㅂ': '맙',  // akb
        '마ㅅ': '맛',  // aks
        '마ㅇ': '망',  // akd
        '마ㅈ': '맟',  // akj
        '마ㅊ': '맡',  // akc
        '마ㅋ': '맥',  // akk
        '마ㅌ': '맡',  // akt
        '마ㅍ': '맦',  // akp
        '마ㅎ': '맣',  // akh

        // Additional cases
        '므ㅁ': '믐',  // ama
        '무ㅇ': '뭉',  // and
        '모ㄴ': '몬',  // ahn
        '메ㄴ': '멘',  // apn
        '므ㄴ': '믄',  // amn
        '무ㄱ': '묵',  // ank

        // Complex sounds
        '뮤ㅊ': '뮻',  // abc
        '머ㄹ': '멀',  // ajl

    'ㅊㅠ' : "츄", //cb
     'ㅊㅐ' : "채", //co
    '츄ㅍ' : "츞", //cbv
    '츄ㅂ' : "츕", //cbq
    '츄ㅈ' : "츚", //cbw
    '츄ㄷ' : "츋", //cbe
    '츄ㄱ' : "츅", //cbr
    '츅ㅅ' : "츇", //cbrt


    '츇ㅛ' : "츅쇼", //cbrty

    '츅쇼ㅁ'   : "츅숌", //cbrtya
    '츅숌ㅠ'   : "츅쇼뮤", //cbrtyab
    '츅쇼뮤ㅊ' : "츅쇼뮻", //cbrtyabc
    '츅쇼뮻ㅗ' : "츅쇼뮤초", //cbrtyabch

    '츅쇼뮻ㅏ' : "츅쇼뮤차", //cbrtyabchk

    'ㅊㅗ' : "초", //ch
    'ㅊㅜ' : "추", //cn
    'ㅊㅡ' : "츠", //cm
    'ㅊㅛ' : "쵸", //cy

    'ㅇㅠ' : '유', //db
    'ㅇㅗ' : '오', //dh
    'ㅇㅡ' : '으', //dm
    'ㅇㅜ' : '우', //dn
    'ㅇㅕ' : '여', //du
    'ㅇㅛ' : '요', //dy
    'ㅇㅔ' : '에', //dp
    'ㅇㅓ' : '어', //dp
    'ㅇㅐ' : '애', //db

    '여ㅇ' : '영', //dud
    '여ㅂ' : '엽', //duq
    '여ㅈ' : '옂', //duw
    '여ㄷ' : '엳', //due
    '여ㄱ' : '역', //dur
    '여ㅅ' : '엿', //dut
    '여ㅌ' : '옅', //dux
    '여ㅋ' : '옄', //duz
    '여ㅊ' : '옃', //duc
    '여ㅍ' : '옆', //duv
    '여ㅁ' : '염', //dua
    '여ㄴ' : '연', //dus
    '여ㄹ' : '열', //duf
    '여ㅎ' : '옇', //dug

    '엿ㅅ' : '였', //dutt

    "ㄷㅠ" : '듀', //eb
    "ㄷㅗ" : '도', //eh
    "ㄷㅓ" : '더', //ej
    "ㄷㅏ" : '다 ', //ek
    "ㄷㅔ" : '데 ', //ep
    "데ㄱ" : '덱 ', //epr

    "ㄷㅣ" : '디 ', //el 
    "디ㄷ" : '딛', //ele
    "ㄷㅜ" : '두 ', //en
    "ㄷㅡ" : '드 ', //em
    "ㄷㅛ" : '됴 ', //ey
    "ㄷㅕ" : '뎌 ', //eu

    "두ㅇ" : '둥 ', //end
    "듀ㄷ" : '듇', //ebe
    "더 ㄷ" : '덛', //eje
    "다 ㄷ" : '닫', //ebe
    "ㄷㅣ" : '디 ', //el


    "ㄹㅛ" : '료', //fy
    "ㄹㅕ" : '려', //fu
    "ㄹㅑ" : '랴',  // fi                     
    "ㄹㅐ" : '래', // fo
    "ㄹㅔ" : '레',  // fp
    "ㄹㅗ" : '로', // fh
    "ㄹㅓ" : '러',  // fj
    "ㄹㅏ" : '라',  // fk
    "ㄹㅣ" : '리',  // fl
    "ㄹㅠ" : '류',  // fb
    "ㄹㅜ" : '루',  // fn
    "ㄹㅡ" : '르',  // fm

    "ㅎㅛ" : '효',  // gy
    "ㅎㅕ" : '혀',  // gu
    "ㅎㅑ" : '햐',  // gi
    'ㅎㅗ' : '호',  // gh
    "ㅎㅐ" : '해',  // go
    "ㅎㅔ" : '헤',  // gp
    "ㅎㅓ" : '허',  // gj
    "ㅎㅏ" : '하',  // gk
    "ㅎㅠ" : '휴',  // gb
    "ㅎㅜ" : '후',  // gn
    "ㅎㅡ" : '흐',  // gm
    "ㅎㅣ" : '히',  // gl

    "히ㅎ" : '힣',  // glg
    "효ㅎ" : '훃',  // gyg
    "혀ㅎ" : '혛',  // gug


    "ㄱㅐ" : '개', // ro
    "개ㄹ" : '갤', // rof


    "개ㄴ" : '갠', // ros
    "개ㅂ" : '갭', // roq
    "개ㅈ" : '갲', // row
    "개ㄷ" : '갣', // roe
    "개ㄱ" : '객', // ror
    "개ㅅ" : '갯', // rot

    "갯ㅛ" : '개쇼', // roty
    "갯ㅅ" : '갰', // rott

    "갰ㅛ" : '개쑈', // rotty

    "개쑈ㅅ" : '개쑛', // rottyt
    "개쑛ㅅ" : '개쑜', // rottytt

    "ㄱㅓ" : '거', // rj
    "거ㄱ" : '걱', // rjr
    "ㄴㅜ" : '누', // sn
    "ㄱㅑ" : '갸', // ri
    "갸ㅅ" : '걋', // rit

    "갸ㅊ" : '걏', // ric

    'ㅅㅗ' : '소',     //th
    'ㅅㅐ' : '새',     //to
    '솓ㅜ' : '소두',    //then
    '소ㅁ' : '솜',     //tha
    '솜ㅜ' : '소무', //than
    '소ㅐ' : '쇄', //tho
    '소ㅊ' : '솣', //thc
    '소ㅇ' : '송', //thd
    '소ㄹ' : '솔', //thf
    '소ㄷ' : '솓', //the
    '소ㅎ' : '솧', //thg
    
    '소ㄴ' : '손', //ths
    '소ㅅ' : '솟', //tht
    '소ㄱ' : '속', //thr
    '소ㅂ' : '솝', //thq
    '소ㅍ' : '솦', //thv
    '소ㅈ' : '솢', //thw
    '소ㅌ' : '솥', //thx
    '소ㅋ' : '솤', //thz

    '솔ㅡ' : '소르', //thfm

    '소르ㅇ' : '쇼릉', //thfmd
    '소르ㄹ' : '소를', //thfmf
    '소르ㅣ' : '소릐', //thfml
    '소르ㅎ' : '소릏', //thfmg
    
    
    '소르ㄴ' : '쇼른', //thfms
    '소르ㅋ' : '소릌', //thfmz

    '솔ㅁ' : '솖', //thfa
    
    '소ㄴ' : '손', //ths

    

    '솟ㅅ' : '솠', //thtt
    '솟ㅗ' : '소소', //thth
    
    '솧ㅡ' : '소흐', //thgm

    '소흐ㅁ' : '소흠', //thgma
    '소흐ㄷ' : '소흗', //thgme
    '소흐ㅎ' : '소흫', //thgmg
    '소흐ㅂ' : '소흡', //thgmq
    '소흐ㄱ' : '소흑', //thgmr
    '소흐ㅅ' : '소흣', //thgmt

    '소흣ㅅ' : '소흤', //thgmtt

    '소흐ㄴ' : '소흔', //thgms
    '소흐ㅈ' : '소흦', //thgms
    '소흐ㅌ' : '소흩', //thgmx
    '소흐ㅋ' : '소흨', //thgmz


    'ㅅㅛ' : '쇼', //ty 
    '숏ㅛ' : '쇼쇼', //tyty
    '쇼ㅅ' : '숏' , // tyt
    '숏ㅅ' : '숐' , // tytt
    '숐ㅛ' : '쇼쑈', //tytty



    'ㅂㅠ' : '뷰', //qb
    '뷰ㅂ' : '븁', //qbq
    '븁ㅠ' : '뷰뷰', //qbqb

    'ㅂㅐ' : '배', //qo
    'ㅂㅔ' : '베', //qp

    'ㅂㅛ' : '뵤', //qy


    '뵤ㅂ' : '묨', //qyq
    '묨ㅛ' : '뵤뵤', //qyqy
    '뵤ㄷ' : '뵫', //qye
    '뵤ㄱ' : '뵥', //qyr
    '뵤ㅅ' : '뵷', //qyt

    '뵷ㅅ' : '뵸', //qytt

    '뵷ㅛ' : '뵤쇼', //qyty



    '뵸ㅛ' : '뵤쑈', //qytty
    '뵤쑈ㅅ' : '뵤쑛', //qytyt
    '뵤쑛ㅅ' : '뵤숐', //qytyt
    '뵤숐ㅛ' : '뵤쑈쑈', //qytytty
    '뵤숐ㅗ' : '뵤쇼쏘', //qytytth
        

    'ㅍㅑ' : '퍄', //vi
    'ㅍㅗ' : '포', //vh
    'ㅍㅓ' : '퍼', //vj
    'ㅍㅠ' : '퓨', //vb
    'ㅍㅜ' : '푸', //vn

    'ㅍㅡ' : '프', //vm
    '프' : '픔', //vm
    '퍄ㄱ' : '퍅', //vir
    '퍄ㄷ' : '퍅', //vie
    '퍄ㅂ' : '퍚', //viw
    '퍄ㅅ' : '퍗', //vit


    '퍗ㅅ' : '퍘', //vitt

    '퍘ㅛ' : '퍄쑈', //vitty

    '퍄쑈ㅅ' : '퍄쑛', //vittyt
    '퍄쑛ㅅ' : '퍄쑜', //vittytt

    'ㅈㅗ' : '조', //wh
    '조ㅁ' : '좀', //wha
    '조ㄷ' : '졷', //whe


    'ㅌㅑ' : '탸', //xi
    '탸ㄷ' : '탿', //xie
    '탸ㄴ' : '탼', //xis

    '므ㄷ' : '믇', //ame
    'ㅋㅐ' : '캐' , //zo
    'ㅁㅑ' : '먀' , //ai
    'ㅁㅑ' : '먀' , //ak
    'ㄴㅣ' : '니', // sl

    'ㄴㅣ' : '니', // sl
    '니ㅁ'     : '님', // sla
    '님ㅜ'     : '니무', // slan
    'ㄴㅕ' : '녀', // su


    '녀ㅎ' : '녛', // sug
    'ㄴㅐ' : '내', // so
    'ㄴㅗ' : '노', // sh
    '노' : '놰', // sho
    '녀ㄴ' : '년', //sus
    '니ㄴ' : '닌', // sls
    'ㅁㅠ' : '뮤', //ab
    '뮤ㅊ' : '뮻', //abc
    'ㅁㅗ' : '모', //ah
    '모ㅎ' : '뫃', //ahg
    '호ㅎ' : '홓' //ghg
};

function applyReplacements() {
  let text = $(".inputText_keyboard").val();
  for (const [pattern, replacement] of Object.entries(replacements)) {
    text = text.replaceAll(pattern, replacement);
  }
  $(".inputText_keyboard").val(text);
}


let currentLayout = "standard"; 
let shiftActive = false;
let escActive = false;
let capsActive = false;

$('input[name="keyboard-layout"]').on('change', function() {
  currentLayout = $(this).val();
  updateKeyboard();
});

$(".keyboard, .keyboard-sebeolsik, .keyboard-hanja")
  .on("click", ".key, .sebe, .hanja", function () {
    let key = $(this).data("key");
    let activeMap;
    
    if (escActive) {
      activeMap = capsActive ? uppercaseMap : lowercaseMap;
    } else if (currentLayout === "sebeolsik") {
      activeMap = shiftActive ? shiftSebeolsikMap : sebeolsikMap;
    } else if (currentLayout === "hanja") {
      activeMap = shiftActive ? shiftHanjaMap : hanjaMap;
    } else { // standard
      activeMap = shiftActive ? shiftStandardMap : standardMap;
    }
    
    if (activeMap[key] !== undefined) {
      if (activeMap[key] !== '') {
        $(".inputText_keyboard").val(
          $(".inputText_keyboard").val() + activeMap[key]
        );
        applyReplacements();
      }
    }
  });

$(document).on("keydown", function (e) {
      let key;
      
      if (e.ctrlKey) {
        if (e.key.toLowerCase() === "a") {
          return; 
        }
        return; 
      }

      if (currentLayout === "sebeolsik" && e.code && e.code.startsWith("Digit")) {
        key = e.code.replace("Digit", "");
      } else {
        key = e.key.toLowerCase();
      }

      if (e.key === "Shift") {
        shiftActive = true;
        $(".key[data-key='Shift'], .sebe[data-key='Shift']").css("background-color", "yellow");
        updateKeyboard();
        return;
      }

      if (e.key === "Escape") {
        escActive = !escActive;
        $(".key[data-key='Esc'], .sebe[data-key='Esc']").css("background-color", escActive ? "yellow" : "transparent");
        
        if (escActive) {
          shiftActive = false;
          $(".key[data-key='Shift'], .sebe[data-key='Shift']").css("background-color", "transparent");
        }
        updateKeyboard();
        return;
      }

      if (e.key === "CapsLock") {
        capsActive = !capsActive;
        $(".key[data-key='Caps Lock'], .sebe[data-key='Caps Lock']").css("background-color", capsActive ? "yellow" : "transparent");
        updateKeyboard();
        return;
      }

      let activeMap;
      if (escActive) {
        activeMap = capsActive ? uppercaseMap : lowercaseMap;
      } 
      else if (currentLayout === "sebeolsik") {
        activeMap = shiftActive ? shiftSebeolsikMap : sebeolsikMap;
      }
    else if (currentLayout === "hanja") {
        activeMap = shiftActive ? shiftHanjaMap : hanjaMap;
      } 
      else { // Standard layout
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
        $(".key[data-key='Shift'], .sebe[data-key='Shift']").css("background-color", "transparent");
        updateKeyboard();
      }
    });


function updateKeyboard() {
  $(".keyboard:visible .key, .keyboard-sebeolsik:visible .sebe, .keyboard-hanja:visible .key")
    .each(function () {
      let key = $(this).data("key");
      let newChar = "";

      if (escActive) {
        newChar = capsActive ? (uppercaseMap[key] || '') : (lowercaseMap[key] || '');
      } 
      else if (currentLayout === "sebeolsik") {
        newChar = shiftActive ? (shiftSebeolsikMap[key] || '') : (sebeolsikMap[key] || '');
      } 

      else if (currentLayout === "hanja") {
        newChar = shiftActive ? (shiftHanjaMap[key] || '') : (hanjaMap[key] || '');
        
        if (key === "w" && newChar === "1") {
          newChar = "月";
        }
      } 
      else {
        newChar = shiftActive ? (shiftStandardMap[key] || '') : (standardMap[key] || key);
      }

      $(this).find("p").text(newChar);
    });
}

// hanja 

const keyMap = { 
  'a': {
    active: false,
    map: { '1': '我', '2': '亞' , '3' : '阿', '4': '牙', '5': '俄', '6': '兒', '7' : '雅', '8': '御', '9' : '鴉', '0' : '啊'},
  },
  'c': {
    active: false,
    map: { '1': '的', '2': '中' , '3' : '在', '4': '出', '5': '地', '6': '之', '7' : '作', '8': '者', '9' : '自'},
  },
  'e': {
    active: false,
    map: { '1': '於', '2': '語' , '3' : '魚', '4': '御', '5': '漁', '6': '禦', '7' : '淤', '8': '圉', '9' : '瘀', '0': '馭'},
  },
  'i': {
    active: false,
    map: { '1': '以', '2': '台' , '3' : '而', '4': '尔', '5': '已', '6': '二', '7' : '爾', '8': '伊', '9' : '易', '0': '移'},
  },
  'h': {
    active: false,
    map: { '1': '和', '2': '下' , '3' : '會', '4': '或', '5': '行', '6': '合', '7' : '港', '8': '解', '9' : '歡'},
  },
  'k': {
    active: false,
    map: { '1': '基', '2': '科' , '3' : '國', '4': '可', '5': '国', '6': '會', '7' : '件', '8': '其', '9' : '个'},
  },
  'l': {
    active: false,
    map: { '1': '了', '2': '理' , '3' : '利', '4': '來', '5': '拉', '6': '立', '7' : '里', '8': '路', '9' : '力'},
  },
  'n': {
    active: false,
    map: { '1': '年', '2': '能' , '3' : '南', '4': '內', '5': '格', '6': '你', '7' : '尼', '8': '内', '9' : '女'},
  },
  'm': {
    active: false,
    map: { '1': '文', '2': '百' , '3' : '目', '4': '面', '5': '名', '6': '美', '7' : '民', '8': '明', '9' : '灣'},
  },
  't': {
    active: false,
    map: { '1': '大', '2': '到' , '3' : '他', '4': '台', '5': '多', '6': '同', '7' : '對', '8': '德', '9' : '特'},
  },
  'p': {
    active: false,
    map: { '1': '本', '2': '不' , '3' : '百', '4': '版', '5': '分', '6': '法', '7' : '方', '8': '部', '9' : '被', '0': '馭'},
  },
  's': {
    active: false,
    map: { '1': '是', '2': '新' , '3' : '上', '4': '成', '5': '使', '6': '斯', '7' : '所', '8': '時', '9' : '信'},
  },
  'w': {
    active: false,
    map: { '1': '月', '2': '為' , '3' : '位', '4': '于', '5': '原', '6': '員', '7' : '區', '8': '源', '9' : '王'},
  },

  'u': {
    active: false,
    map: { '1': '意', '2': '言' , '3' : '音', '4': '議', '5': '義', '6': '應', '7' : '恩', '8': '依', '9' : '醫'},
  },
  'y': {
    active: false,
    map: { '1': '有', '2': '用' , '3' : '維', '4': '要', '5': '也', '6': '由', '7' : '與', '8': '迎', '9' : '如'},
  },
};

$(document).on("keydown", function (event) {
    const key = event.key;

    if (keyMap[key]) {
        keyMap[key].active = !keyMap[key].active;

        let activeMap = getActiveKeyMappings();
        if (activeMap) {
            updateHanjaDisplay(activeMap);
        } else {
            resetHanjaDisplay();
        }
    }

    if (key >= "0" && key <= "9") {
        event.preventDefault();
        processCharacterInput(key);
    }
});

// Apply same logic to clicks
$(".keyboard-hanja").on("click", ".hanja[data-key]", function () {
    const key = $(this).data("key");

    if (keyMap[key]) {
        keyMap[key].active = !keyMap[key].active;

        let activeMap = getActiveKeyMappings();
        if (activeMap) {
            updateHanjaDisplay(activeMap);
        } else {
            resetHanjaDisplay();
        }
    } else if (!isNaN(key)) {
        processCharacterInput(key);
    }
});

function processCharacterInput(key) {
    let activeMap = getActiveKeyMappings();
    let currentText = $(".inputText_keyboard").val();

    if (activeMap && activeMap[key]) {
        for (const activeKey in keyMap) {
            if (keyMap[activeKey].active) {
                currentText = currentText.replace(new RegExp(activeKey, "g"), '');
            }
        }

        $(".inputText_keyboard").val(currentText + activeMap[key]);

        for (const activeKey in keyMap) {
            keyMap[activeKey].active = false;
        }

        resetHanjaDisplay();
    } else {
        $(".inputText_keyboard").val(currentText + key);
    }
}

function updateHanjaDisplay(activeMap) {
    $(".keyboard-hanja .row").each(function () {
        for (let i = 0; i <= 9; i++) {
            $(this).find(`.hanja[data-key='${i}'] p`).text(activeMap[i] || i);
        }
    });
}

function resetHanjaDisplay() {
    $(".keyboard-hanja .row").each(function () {
        for (let i = 0; i <= 9; i++) {
            $(this).find(`.hanja[data-key='${i}'] p`).text(i);
        }
    });
}

function getActiveKeyMappings() {
    let activeMaps = [];
    for (const key in keyMap) {
        if (keyMap[key].active) {
            activeMaps.push(keyMap[key].map);
        }
    }

    return activeMaps.length > 1 ? Object.assign({}, ...activeMaps) : activeMaps[0] || null;
}

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
            .attr('download', 'korean_language.txt')
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
        link.download = 'korean_language.png';
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
    $(".faq-question").click(function () {
        let answer = $(this).next(".faq-answer");
        let icon = $(this).find("p:last-child");

        $(".faq-answer").not(answer).slideUp();
        $(".faq-question p:last-child").not(icon).text("+");

        answer.slideToggle();
        icon.text(icon.text() === "+" ? "−" : "+");
    });

});
