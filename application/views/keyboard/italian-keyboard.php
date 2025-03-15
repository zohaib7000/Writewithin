<!DOCTYPE html>
<html lang="en">
<head>
    <title>Italian Keyboard</title>
    <meta name="description" content="">
    <meta name="keywords" content="italian keyboard, italian virtual keyboard, italian keyboard online, italian onscreen keyboard, type italian online, type italian letters online, type in italian online, type italian, type italian keyboard, italian typing, writing italian, type in italian, italian letters, italian keyboard layout, google italian, italy keyboard">
    

    <?php
      $this->load->view('include/headFiles.php');
      ?>
</head>
<body class="<?=$_SESSION['mode']?>">
    <?php
    $this->load->view('include/header.php');
    ?>
    
<section class="main-keyboard-template">
          <div class="container">
                <div class="main-keyboard-title">
                  <h1>Italian Keyboard</h1>
                  <p>Ukrainian Keyboard Description</p>
                </div>  

                <div class="main-keyboard-wrapper">
                    <div class="main-keyboard-box">
                      <div class="functionality-btns">
                        <button class="selectAllBtn">Select All</button>
                        <button class="copyBtn">Copy</button>
                        <button class="undoBtn">Undo</button>
                        <button class="redoBtn">Redo</button>
                        <button class="clearAllBtn">Clear All</button>
                        <button class="downloadBtn">Save Text</button>
                        <div class="image-btn-wrapper">
                            <button class="imageBtn">Download as an Image</button>
                            <label class="new">NEW</label>
                        </div>

                        <button class="decreaseFontBtn">-</button>
                        <button class="increaseFontBtn">+</button>
                      </div>
                      <textarea class="inputText_keyboard"></textarea>
                      <div class="keyboard-setting">
                        <div class="emoji" style="display: none;">
                          <div class="all-emojis">
                            <div>
                              <p>😀</p>
                              <p>😁</p>
                              <p>😂</p>
                              <p>😃</p>
                              <p>😄</p>
                              <p>😅</p>
                              <p>😆</p>
                              <p>😂</p>
                              <p>🤣</p>
                              <p>😉</p>
                              <p>😊</p>
                              <p>😋</p>
                              <p>😌</p>
                            </div>
                            
                            <div>
                              <p>😍</p>
                              <p>😎</p>
                              <p>😏</p>
                              <p>😐</p>
                              <p>😑</p>
                              <p>😒</p>
                              <p>😓</p>
                              <p>😔</p>
                              <p>😕</p>
                              <p>😖</p>
                              <p>😗</p>
                              <p>😘</p>
                              <p>😙</p>
                              
                              
                            </div>
                            <div>
                              <p>😚</p>
                              <p>😛</p>
                              <p>😜</p>
                              <p>😝</p>
                              <p>😞</p>
                              <p>😟</p>
                              <p>😠</p>
                              <p>😇</p>
                              <p>😢</p>
                              <p>😣</p>
                              <p>😤</p>
                              <p>😥</p>
                              <p>😦</p>
                            </div>

                            <div>
                              <p>😧</p>
                              <p>😨</p>
                              <p>😩</p>
                              <p>😪</p>
                              <p>😫</p>
                              <p>😬</p>
                              <p>😭</p>
                              <p>😮</p>
                              <p>😯</p>
                              <p>😰</p>
                              <p>😱</p>
                              <p>😲</p>
                              <p>😳</p>
                            </div>

                            <div>
                              <p>😴</p>
                              <p>😵</p>
                              <p>😶</p>
                              <p>😷</p>
                              <p>🥺</p>
                              <p>🙁</p>
                              <p>🙂</p>
                              <p>🙃</p>
                              <p>🙄</p>
                              <p>✨</p>
                              <p>💯</p>
                              <p>🌹</p>
                              <p>💐</p>
                            </div>

                            <div>
                              
                              <p>💋</p>
                              <p>👁️</p>
                              <p>💤</p>
                              <p>🌙</p>
                              <p>❗</p>
                              <p>🌈</p>
                              <p>🔴</p>
                              <p>🙈</p>
                              <p>🙉</p>
                              <p>🙊</p>
                              <p>🙋</p>
                              <p>🙌</p>
                              <p>🙍</p>

                            </div>

                            <div> 
                              <p>💘</p>
                              <p>❤️</p>
                              <p>💓</p>
                              <p>💔</p>
                              <p>💕</p>
                              <p>💖</p>
                              <p>💗</p>
                              <p>💙</p>
                              <p>💚</p>
                              <p>💛</p>
                              <p>💜</p>
                              <p>💝</p>
                              <p>💞</p>
                            </div>
                            <div>
                              <p>🎔</p>
                              <p>❤️‍🩹</p>
                              <p>❤️‍🔥</p>
                              <p>🤎</p>
                              <p>🤍</p>
                              <p>💟</p>
                              <p>🏩</p>
                              <p>🖤</p>
                              <p>💒</p>
                              <p>♥️</p>
                              <p>🧡</p>
                              <p>👩‍❤️‍💋‍👨</p>
                              <p>👩‍❤️‍👨</p>
                              
                            </div>

                            <div>
                              <p>👩‍❤️‍👩</p>
                              <p>👨‍❤️‍👨</p>
                              <p>👩‍❤️‍💋‍👩</p>
                              <p>👨‍❤️‍💋‍👨</p>
                              <p>💏</p>
                              <p>💑</p>
                              <p>💌</p>
                              <p>🫀</p>
                              <p>❣️</p>
                              <p>♡</p>
                              <p>❥</p>
                              <p>❦</p>
                              <p>☙</p>
                            </div>
                            <div>
                              <p>🙥</p>
                              <p>🙦</p>
                              <p>🙧</p>
                              <p>🙨</p>
                              <p>🙩</p>
                              <p>🙪</p>
                              <p>🙫</p>
                              <p>🙬</p>
                              <p>🙭</p>
                              <p>🙮</p>
                              <p>🙯</p>
                              <p>🙰</p>
                              <p>🙱</p>
                              
                            </div>
                            <div>
                              <p>🙲</p>
                              <p>🙳</p>
                              <p>🙴</p>
                              <p>🙵</p>
                              <p>🙶</p>
                              <p>🙷</p>
                              <p>🙸</p>
                              <p>🙹</p>
                              <p>🙺</p>
                              <p>🙻</p>
                              <p>🙼</p>
                              <p>🙽</p>
                              <p>🙾</p>
                              
                              
                            </div>
                            <div>
                              <p>🙿</p>
                              <p>🚀</p>
                              <p>🚁</p>
                              <p>🚂</p>
                              <p>🚃</p>
                              <p>🚄</p>
                              <p>🚅</p>
                              <p>🚆</p>
                              <p>🚇</p>
                              <p>🚈</p>
                              <p>🚉</p>
                              <p>🚊</p>
                              <p>🚋</p>
                            </div>

                            <div>
                              <p>🚌</p>
                              <p>🚍</p>
                              <p>🚎</p>
                              <p>🚏</p>
                              <p>🚐</p>
                              <p>🚑</p>
                              <p>🚒</p>
                              <p>🚓</p>
                              <p>🚔</p>
                              <p>🚕</p>
                              <p>🚖</p>
                              <p>🚗</p>
                              <p>🚘</p>
                            </div>

                            <div>
                              <p>🌍</p>
                              <p>🌎</p>
                              <p>🌏</p>
                              <p>🌐</p>
                              <p>🗺️</p>
                              <p>🗾</p>
                              <p>🧭</p>
                              <p>🏔️</p>
                              <p>⛰️</p>
                              <p>🌋</p>
                              <p>🗻</p>
                              <p>🏕️</p>
                              <p>🏖️</p>
                            </div>

                            <div>
                              <p>🍇</p>
                              <p>🍈</p>
                              <p>🍉</p>
                              <p>🍊</p>
                              <p>🍋</p>
                              <p>🍋‍🟩</p>
                              <p>🍌</p>
                              <p>🍍</p>
                              <p>🥭</p>
                              <p>🍎</p>
                              <p>🍏</p>
                              <p>🍐</p>
                              <p>🍑</p>
                            </div>

                            <div>
                              <p>🍒</p>
                              <p>🍓</p>
                              <p>🫐</p>
                              <p>🥝</p>
                              <p>🍅</p>
                              <p>🫒</p>
                              <p>🥥</p>
                              <p>🥑</p>
                              <p>🍆</p>
                              <p>🥔</p>
                              <p>🥕</p>
                              <p>🌽</p>
                              <p>🌶️</p>
                            </div>

                            <div>
                              <p>🫑</p>
                              <p>🥒</p>
                              <p>🥬</p>
                              <p>🥦</p>
                              <p>🧄</p>
                              <p>🧅</p>
                              <p>🥜</p>
                              <p>🫘</p>
                              <p>🌰</p>
                              <p>🫚</p>
                              <p>🫛</p>
                              <p>🍄‍🟫</p>
                              <p>🍞</p>
                            </div>

                            <div>
                              <p>⚓</p>
                              <p>🛟</p>
                              <p>⛵</p>
                              <p>🛶</p>
                              <p>🚤</p>
                              <p>🛳️</p>
                              <p>⛴️</p>
                              <p>🛥️</p>
                              <p>🚢</p>
                              <p>✈️</p>
                              <p>🛩️</p>
                              <p>🛫</p>
                              <p>🛬</p>
                            </div>

                            <div>
                              <p>🪂</p>
                              <p>💺</p>
                              <p>🚁</p>
                              <p>🚟</p>
                              <p>🚠</p>
                              <p>🚡</p>
                              <p>🛰️</p>
                              <p>🚀</p>
                              <p>🛸</p>
                              <p>🎀</p>
                              <p>🎗️</p>
                              <p>👓</p>
                              <p>🕶️</p>
                            </div>

                            <div>
                              <p>🥽</p>
                              <p>🥼</p>
                              <p>🦺</p>
                              <p>👔</p>
                              <p>👕</p>
                              <p>👖</p>
                              <p>🧣</p>
                              <p>🧤</p>
                              <p>🧥</p>
                              <p>🧦</p>
                              <p>👗</p>
                              <p>👘</p>
                              <p>🥻</p>
                            </div>

                            <div>
                              <p>🩱</p>
                              <p>🩲</p>
                              <p>🩳</p>
                              <p>👙</p>
                              <p>👚</p>
                              <p>🪭</p>
                              <p>👛</p>
                              <p>👜</p>
                              <p>👝</p>
                              <p>🛍️</p>
                              <p>🎒</p>
                              <p>🩴</p>
                              <p>👞</p>
                            </div>

                            <div>
                              <p>👟</p>
                              <p>🥾</p>
                              <p>🥿</p>
                              <p>👠</p>
                              <p>👡</p>
                              <p>🩰</p>
                              <p>👢</p>
                              <p>🪮</p>
                              <p>👑</p>
                              <p>👒</p>
                              <p>🎩</p>
                              <p>🎓</p>
                              <p>🧢</p>
                            </div>

                            <div>
                              <p>🪖</p>
                              <p>⛑️</p>
                              <p>📿</p>
                              <p>💄</p>
                              <p>💍</p>
                              <p>💎</p>
                              <p>🦯</p>
                              <p>🛗</p>
                              <p>🏧</p>
                              <p>🚮</p>
                              <p>🚰</p>
                            </div>

                            <div>
                              <p>♿</p>
                              <p>🚹</p>
                              <p>🚺</p>
                              <p>🚻</p>
                              <p>🚼</p>
                              <p>🚾</p>
                              <p>🛂</p>
                              <p>🛃</p>
                              <p>🛄</p>
                              <p>🛅</p>
                              <p>⚠️</p>
                              <p>🚸</p>
                              <p>⛔</p>
                            </div>

                            <div>
                              <p>🚫</p>
                              <p>🚳</p>
                              <p>🚭</p>
                              <p>🚯</p>
                              <p>🚱</p>
                              <p>🚷</p>
                              <p>📵</p>
                              <p>🔞</p>
                              <p>☢️</p>
                              <p>☣️</p>
                              <p>⬆️</p>
                              <p>↗️</p>
                              <p>➡️</p>
                            </div>

                            <div>
                              <p>↘️</p>
                              <p>⬇️</p>
                              <p>↙️</p>
                              <p>⬅️</p>
                              <p>↖️</p>
                              <p>↕️</p>
                              <p>↔️</p>
                              <p>↩️</p>
                              <p>↪️</p>
                              <p>⤴️</p>
                              <p>⤵️</p>
                              <p>🔃</p>
                              <p>🔄</p>
                            </div>

                            <div>
                              <p>🔙</p>
                              <p>🔚</p>
                              <p>🔛</p>
                              <p>🔜</p>
                              <p>🔝</p>
                              <p>🔀</p>
                              <p>🔁</p>
                              <p>🔂</p>
                              <p>▶️</p>
                              <p>⏩</p>
                              <p>⏭️</p>
                              <p>⏯️</p>
                              <p>◀️</p>
                            </div>

                            <div>
                              <p>⏪</p>
                              <p>⏮️</p>
                              <p>🔼</p>
                              <p>⏫</p>
                              <p>🔽</p>
                              <p>⏬</p>
                              <p>⏸️</p>
                              <p>⏹️</p>
                              <p>⏺️</p>
                              <p>⏏️</p>
                              <p>🎦</p>
                              <p>🔅</p>
                              <p>🔆</p>
                            </div>

                            <div>
                              <p>📶</p>
                              <p>🛜</p>
                              <p>📳</p>
                              <p>📴</p>
                              <p>🛐</p>
                              <p>🕉️</p>
                              <p>✡️</p>
                              <p>☸️</p>
                              <p>☯️</p>
                              <p>✝️</p>
                              <p>☦️</p>
                              <p>☪️</p>
                              <p>☮️</p>
                            </div>

                            <div>
                              <p>🕎</p>
                              <p>🔯</p>
                              <p>🪯</p>
                              <p>♈</p>
                              <p>♉</p>
                              <p>♊</p>
                              <p>♋</p>
                              <p>♌</p>
                              <p>♍</p>
                              <p>♎</p>
                              <p>♏</p>
                              <p>♐</p>
                              <p>♑</p>
                            </div>

                            <div>
                              <p>♒</p>
                              <p>♓</p>
                              <p>⛎</p>
                              <p>♀️</p>
                              <p>♂️</p>
                              <p>⚧️</p>
                              <p>✖️</p>
                              <p>➕</p>
                              <p>➖</p>
                              <p>➗</p>
                              <p>🟰</p>
                              <p>♾️</p>
                              <p>‼️</p>
                            </div>

                            <div>
                              <p>⁉️</p>
                              <p>❓</p>
                              <p>❔</p>
                              <p>❕</p>
                              <p>❗</p>
                              <p>〰️</p>
                              <p>💱</p>
                              <p>💲</p>
                              <p>#️⃣</p>
                              <p>*️⃣</p>
                              <p>0️⃣</p>
                              <p>1️⃣</p>
                              <p>2️⃣</p>
                            </div>

                            <div>
                              <p>3️⃣</p>
                              <p>4️⃣</p>
                              <p>5️⃣</p>
                              <p>6️⃣</p>
                              <p>7️⃣</p>
                              <p>8️⃣</p>
                              <p>9️⃣</p>
                              <p>🔟</p>
                              <p>🔠</p>
                              <p>🔡</p>
                              <p>🔢</p>
                              <p>🔣</p>
                              <p>🔤</p>
                            </div>

                            <div>
                              <p>🅰️</p>
                              <p>🆎</p>
                              <p>🅱️</p>
                              <p>🆑</p>
                              <p>🆒</p>
                              <p>🆓</p>
                              <p>ℹ️</p>
                              <p>🆔</p>
                              <p>Ⓜ️</p>
                              <p>🆕</p>
                              <p>🆖</p>
                              <p>🅾️</p>
                              <p>🆗</p>
                            </div>

                            <div>
                              <p>🆘</p>
                              <p>🆙</p>
                              <p>🆚</p>
                              <p>🈁</p>
                              <p>🈂️</p>
                              <p>🈷️</p>
                              <p>🈶</p>
                              <p>🈯</p>
                              <p>🉐</p>
                              <p>🈹</p>
                              <p>🈚</p>
                              <p>🈲</p>
                              <p>🉑</p>
                              <p>🈸</p>
                              <p>🈴</p>
                              <p>🈳</p>
                              <p>㊗️</p>
                              <p>㊙️</p>
                              <p>🈺</p>
                              <p>🈵</p>
                            </div>
                          </div>
                          <div class="side-icons">
                            <div class="up bg-clr">⏶</div>
                            <div class="abc bg-clr">abc</div>
                            <div class="backspace bg-clr">⌫</div>
                            <div class="enter bg-clr">↵</div>
                            <div class="down bg-clr">⏷</div>
                        </div>
                          
                        </div>
                        <div class="italian-keyboard">
                            <div class="row">
                                <div class="key" data-key="`"><small>`</small><p>\</p></div>
                                <div class="key" data-key="1"><small>1</small><p>1</p></div>
                                <div class="key" data-key="2"><small>2</small><p>2</p></div>
                                <div class="key" data-key="3"><small>3</small><p>3</p></div>
                                <div class="key" data-key="4"><small>4</small><p>4</p></div>
                                
                                <div class="key" data-key="5"><small>5</small><p>5</p></div>
                                <div class="key" data-key="6"><small>6</small><p>6</p></div>
                                <div class="key" data-key="7"><small>7</small><p>7</p></div>
                                <div class="key" data-key="8"><small>8</small><p>8</p></div>
                                <div class="key" data-key="9"><small>9</small><p>9</p></div>
                                <div class="key" data-key="0"><small>0</small><p>0</p></div>
                                <div class="key" data-key="-"><small>-</small><p>'</p></div>
                                <div class="key" data-key="="><small>=</small><p>ì</p></div>
                                <div class="key wide backspace" data-key="Backspace">Backspace</div>
                            </div>
                            <div class="row">
                                <div class="key wide" data-key="Tab">Tab</div>
                                <div class="key" data-key="q"><small>q</small><p>q</p></div>

                                <div class="key" data-key="w"><small>w</small><p>w</p></div>
                                
                                <div class="key" data-key="e"><small>e</small><p>e</p></div>
                                <div class="key" data-key="r"><small>r</small><p>r</p></div>
                                <div class="key" data-key="t"><small>t</small><p>t</p></div>

                                <div class="key" data-key="y"><small>y</small><p>y</p></div>

                                <div class="key" data-key="u"><small>u</small><p>u</p></div>
                                <div class="key" data-key="i"><small>i</small><p>i</p></div>
                                <div class="key" data-key="o"><small>o</small><p>o</p></div>
                                <div class="key" data-key="p"><small>p</small><p>p</p></div>
                                <div class="key" data-key="["><small>[</small><p>è</p></div>
                                <div class="key" data-key="]"><small>]</small><p>+</p></div>
                                <div class="key" data-key="\"><small>\</small><p>ù</p></div>
                            </div>
                            <div class="row">
                                <div class="key extra-wide caps" data-key="Caps Lock">Caps Lock</div>
                                <div class="key" data-key="a"><small>a</small><p>a</p></div>
                                <div class="key" data-key="s"><small>s</small><p>s</p></div>
                                <div class="key" data-key="d"><small>d</small><p>d</p></div>
                                <div class="key" data-key="f"><small>f</small><p>f</p></div>
                                <div class="key" data-key="g"><small>g</small><p>g</p></div>
                                <div class="key" data-key="h"><small>h</small><p>h</p></div>
                                <div class="key" data-key="j"><small>j</small><p>j</p></div>
                                <div class="key" data-key="k"><small>k</small><p>k</p></div>
                                <div class="key" data-key="l"><small>l</small><p>l</p></div>
                                <div class="key" data-key=";"><small>;</small><p>ò</p></div>
                                <div class="key" data-key="'"><small>'</small><p>à</p></div>
                                <div class="key extra-wide enter" data-key="Enter">Enter</div>
                            </div>
                            <div class="row">
                                <div class="key wide extra-shift shift" data-key="Shift">Shift</div>
                                <div class="key" data-key="z"><small>z</small><p>z</p></div>
                                <div class="key" data-key="x"><small>x</small><p>x</p></div>
                                <div class="key" data-key="c"><small>c</small><p>c</p></div>
                                <div class="key" data-key="v"><small>v</small><p>v</p></div>
                                <div class="key" data-key="b"><small>b</small><p>b</p></div>
                                <div class="key" data-key="n"><small>n</small><p>n</p></div>
                                <div class="key" data-key="m"><small>m</small><p>m</p></div>

                                <div class="key" data-key=","><small>,</small><p>,</p></div>
                                <div class="key" data-key="."><small>.</small><p>.</p></div>
                                <div class="key" data-key="/"><small>/</small><p>-</p></div>
                                <div class="key wide shift" data-key="Shift">Shift</div>
                            </div>
                            <div class="row">
                                <div class="key wide ctrl" data-key="Ctrl">Ctrl</div>
                                <div class="key wide emojibtn" data-key="Emoji">🙂</div>
                                <div class="key wide" data-key="Alt">Alt</div>
                                <div class="key extra-wide space" data-key="Space">Space</div>
                                <div class="key wide" data-key="AltGr">AltGr</div>
                                <div class="key esc" data-key="Esc">Esc</div>
                                <div class="key wide ctrl" data-key="Ctrl">Ctrl</div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>   
          </div>
        <div class="clear"></div>
</section>


<section class="content">
    <div class="container">
      <div id="about">
          <div class="about-paragraph">
            <h2>Italian Keyboard</h2>
            
          </div>
      </div>
    </div>
    <div class="clear"></div>
</section>

<?php
$this->load->view('include/footer.php');  
?>
<script type="text/javascript" src="<?=base_url('assets/keyboard_js/italian-keyboard.js')?>"></script>
