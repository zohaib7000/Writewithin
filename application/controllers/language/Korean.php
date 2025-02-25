<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Korean extends CI_Controller {

    public function english_to_korean()
    {
        $input = $this->input->post('input');  
        $symbolMap = [
            'a' => 'ㅁ', 'b' => 'ㅠ', 'c' => 'ㅊ', 'd' => 'ㅇ', 'e' => 'ㅏ', 'f' => 'ㄹ', 'g' => 'ㅎ',
            'h' => 'ㅗ', 'i' => 'ㅑ', 'j' => 'ㅓ', 'k' => 'ㅏ', 'l' => 'ㅣ', 'm' => 'ㅡ', 'n' => 'ㅜ',
            'ㅜ' => 'ㅐ', 'p' => 'ㅔ', 'q' => 'ㅂ', 'r' => 'ㄱ', 's' => 'ㄴ', 't' => 'ㅅ', 'u' => 'ㅕ',
            'v' => 'ㅍ', 'w' => 'ㅈ', 'x' => 'ㅌ', 'y' => 'ㅛ', 'z' => 'ㅋ'
        ];

        $replacements = [
            'ㅇㅠ' => '뮤',  // ab
            '뮤ㅊ' => '뮻',  // abc
            'ㅁㅗ' => '모',  // ah

            'ㅊㅠ' => "츄", //cb
            'ㅊㅗ' => "초", //ch
            'ㅊㅜ' => "추", //cn
            'ㅊㅡ' => "츠", //cm
            'ㅊㅛ' => "쵸", //cy

            'ㅇㅠ' => '유', //db
            'ㅇㅗ' => '오', //dh
            'ㅇㅡ' => '으', //dm
            'ㅇㅜ' => '우', //dn
            'ㅇㅕ' => '여', //du
            'ㅇㅛ' => '요', //dy
            'ㅇㅔ' => '에', //dp
            'ㅇㅓ' => '어', //dp

            
            '여ㅇ' => '영', //dud
            '여ㅂ' => '엽', //duq
            '여ㅈ' => '옂', //duw
            '여ㄷ' => '엳', //due
            '여ㄱ' => '역', //dur
            '여ㅅ' => '엿', //dut
            '여ㅌ' => '옅', //dux
            '여ㅋ' => '옄', //duz
            '여ㅊ' => '옃', //duc
            '여ㅍ' => '옆', //duv
            '여ㅁ' => '염', //dua
            '여ㄴ' => '연', //dus
            '여ㄹ' => '열', //duf
            '여ㅎ' => '옇', //dug

            '엿ㅅ' => '였', //dutt

            "ㄷㅠ" => '듀', //eb
            "ㄷㅗ" => '도', //eh
            "ㄷㅓ" => '더', //ej
            "ㄷㅏ" => '다 ', //ek
            "ㄷㅣ" => '디 ', //el
            "ㄷㅜ" => '두 ', //en
            "ㄷㅡ" => '드 ', //em
            "ㄷㅛ" => '됴 ', //ey
            "ㄷㅕ" => '뎌 ', //eu


            "듀ㄷ" => '듇', //ebe
            "더 ㄷ" => '덛', //eje
            "다 ㄷ" => '닫', //ebe
            "ㄷㅣ" => '디 ', //el


            "ㄹㅛ" => '료', //fy
            "ㄹㅕ" => '려', //fu
            "ㄹㅑ" => '랴',  // fi                     
            "ㄹㅐ" => '래', // fo
            "ㄹㅔ" => '레',  // fp
            "ㄹㅗ" => '로', // fh
            "ㄹㅓ" => '러',  // fj
            "ㄹㅏ" => '라',  // fk
            "ㄹㅣ" => '리',  // fl
            "ㄹㅠ" => '류',  // fb
            "ㄹㅜ" => '루',  // fn
            "ㄹㅡ" => '르',  // fm

            "ㅎㅛ" => '효',  // gy
            "ㅎㅕ" => '혀',  // gu
            "ㅎㅑ" => '햐',  // gi
            'ㅎㅗ' => '호',  // gh
            "ㅎㅑ" => '해',  // go
            "ㅎㅔ" => '헤',  // gp
            "ㅎㅓ" => '허',  // gj
            "ㅎㅏ" => '하',  // gk
            "ㅎㅠ" => '휴',  // gb
            "ㅎㅜ" => '후',  // gn
            "ㅎㅡ" => '흐',  // gm

            "효ㅎ" => '훃',  // gyg
            "혀ㅎ" => '혛',  // gug

            "ㄱㅓ" => '거', // rj
            "거ㄱ" => '걱', // rjr
            "ㄴㅜ" => '누', // sn

            'ㅅㅛ' => '쇼', //ty  
            '쇼ㅅ' => '숏' ,
            'ㅁㅡ' => '므', //am
            '므ㄷ' => '믇', //ame
            'ㅋㅐ' => '캐' , //zo
            'ㅁㅑ' => '먀' , //ai
            'ㄴㅣ' => '니', // sl
            'ㄴㅕ' => '녀', // su
            '녀ㄴ' => '년', //sus
            '니ㄴ' => '닌', // sls
            'ㅁㅠ' => '뮤', //ab
            '뮤ㅊ' => '뮻', //abc
            'ㅁㅗ' => '모', //ah
            '모ㅎ' => '뫃', //ahg
            
            '호ㅎ' => '홓' //ghg
        ];

        $koreanText = '';
        $inputBuffer = '';
        for ($i = 0; $i < strlen($input); $i++) {
            $char = strtolower($input[$i]); 
            if (array_key_exists($char, $symbolMap)) {
                $koreanText .= $symbolMap[$char]; 
                $inputBuffer .= $symbolMap[$char];
            } else {
                $koreanText .= $input[$i]; 
                $inputBuffer .= $input[$i];
            }
            foreach ($replacements as $combo => $replacement) {
                if (substr($inputBuffer, -strlen($combo)) === $combo) {
                    $inputBuffer = substr($inputBuffer, 0, -strlen($combo)) . $replacement;
                    break;
                }
            }
        }

        echo $inputBuffer;
    }
}


  //      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  // <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  //     <style>
  //         .keyboard-container {
  //             display: flex;
  //             flex-direction: column;
  //             align-items: center;
  //             gap: 10px;
  //         }
  //         .inputText_keyboard {
  //             width: 300px;
  //             min-height: 50px;
  //             font-size: 18px;
  //             padding: 10px;
  //             border: 1px solid black;
  //             text-align: left;
  //             display: flex;
  //             flex-wrap: wrap;
  //             gap: 5px;
  //         }
  //         .inputText_keyboard p {
  //             margin: 0;
  //             display: inline-block;
  //             padding: 5px;
  //             background: lightgray;
  //             border-radius: 5px;
  //         }
  //         .keys {
  //             display: flex;
  //             gap: 5px;
  //         }
  //         .key {
  //             display: flex;
  //             flex-direction: column;
  //             align-items: center;
  //             justify-content: center;
  //             width: 50px;
  //             height: 50px;
  //             border: 1px solid black;
  //             cursor: pointer;
  //             user-select: none;
  //             text-align: center;
  //         }
  //         .extra-wide {
  //             width: 100px;
  //         }
  //     </style>
  // </head>
  // <body>

  // <div class="keyboard-container">
  //     <div class="inputText_keyboard" contenteditable="true"></div>

  //     <div class="keys">
  //         <div class="key" data-num-key="1"><small>1</small><p>1</p></div>
  //         <div class="key" data-num-key="2"><small>2</small><p>2</p></div>
  //         <div class="key" data-num-key="3"><small>3</small><p>3</p></div>
  //         <div class="key" data-num-key="4"><small>4</small><p>4</p></div>
  //     </div>

  //     <div class="keys">
  //         <div class="key" data-key="a"><small>a</small><p>日</p></div>
  //         <div class="key" data-key="b"><small>b</small><p>月</p></div>
  //         <div class="key" data-key="c"><small>c</small><p>金</p></div>
  //         <div class="key" data-key="d"><small>d</small><p>木</p></div>
  //         <div class="key" data-key="e"><small>e</small><p>水</p></div>
  //         <div class="key" data-key="f"><small>f</small><p>火</p></div>
  //         <div class="key" data-key="g"><small>g</small><p>地</p></div>
  //     </div>
  // </div>

  // <script>
  // $(document).ready(function () {
  //     const replacements = {
  //         "1_a": ['是', '昌', '晶', '𣊫'],
  //         "2_a": ['日', '晶', '曡', '𣊭'],
  //         "3_a": ['時', '曝', '㬪'],
  //         "4_a": ['明', '暘', '曑'],

  //         "1_b": ['月', '體', '骨', '朤' , '1'],
  //         "2_b": ['用', '受', '朤', '䯞' , '2'],
  //         "3_b": ['目', '辭', '腡', '3'],
  //         "4_b": ['同', '愛', '覶', '4'],

  //         "1_c": ['分', '銳', '鑫', '𨰻' , '1'],
  //         "2_c": ['公', '鉛', '𨰻', '2'],
  //         "3_c": ['金', '鑫', '3'],
  //         "4_c": ['曾', '銻', '4'],

  //         "1_d": ['本', '林', '森', '1'],
  //         "2_d": ['權', '森', '檚', '2'],
  //         "3_d": ['來', '村', '㯲', '3'],
  //         "4_d": ['查', '禁', '4'],

  //         // e
  //     "1_e": ['法', '桑', '桑', '剟', '敪', '1'],
  //     "2_e": ['港', '婆', '淼', '㵘', '敠', '2'],
  //     "3_e": ['灣', '淼', '叒', '叕', '3'],
  //     "4_e": ['海', '汊', '剟', '敪', '4'],
  //     "5_e": ['洲', '沝', '㴇', '欼','5'],
  //     "6_e": ['源', '剟', '㵘', '毲','6'],
  //     "7_e": ['治', '叒', '叕', '鵽', '7'],
  //     "8_e": ['澳', '㕛', '敪', '䫎', '8'],
  //     "9_e": ['水', '𣲙', '欼', '敠', '9'],


  //         "1_f": ['常', '營', '燊', '燚', '1'],
  //         "2_f": ['當', '榮', '焱', '2'],
  //         "3_f": ['省', '勞', '㯲', '3'],
  //         "4_f": ['少', '炎', '燚',  '4'],

  //         "1_g": ['地', '封', '堯', '㙓', '1'],
  //         "2_g": ['喜', '圭', '垚', '2'],
  //         "3_g": ['趣', '卦', '㙓', '3'],
  //         "4_g": ['城', '堯', '墝',  '4']
  //     };

  //     let cycleCounts = {
  //         a: 4, b: 5, c: 5, d: 4, e: 6, f: 5, g: 5
  //     };

  //     let clickCounts = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 };

  //     $(".key[data-key]").click(function () {
  //         let key = $(this).attr("data-key");
  //         clickCounts[key] = (clickCounts[key] + 1) % cycleCounts[key]; // Cycle through states
  //         let inputField = $(".inputText_keyboard");
  //         inputField.append(`<p class="char ${key}">${$(this).find("p").text()}</p>`);

  //         for (let i = 1; i <= 4; i++) {
  //             let newChar = replacements[i + "_" + key]?.[clickCounts[key] - 1] || i;
  //             $(`.key[data-num-key='${i}'] p`).text(newChar);
  //         }
  //     });

  //     $(".key[data-num-key]").click(function () {
  //         let charToInsert = $(this).find("p").text();
  //         let inputField = $(".inputText_keyboard");
  //         inputField.find(".char").remove();
  //         inputField.append(`<p>${charToInsert}</p>`);
  //     });
  // });
  // </script>

  // </body>
  // </html>
