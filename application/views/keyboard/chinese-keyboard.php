<!DOCTYPE html>
<html lang="en">
<head>
    <title>Chinese Keyboard</title>
    <meta name="description" content="Easily type Korean letters using our online Korean keyboard. Write in Hangeul with a simple layout, no installation needed—just type in Korean with any computer keyboard!">
    <meta name="keywords" content="chinese keyboard, chinese virtual keyboard, chinese keyboard online, chinese onscreen keyboard, type chinese online, type chinese letters online, type in chinese online, type chinese, type chinese keyboard, chinese typing, writing chinese, type in chinese, chinese letters, chinese keyboard layout, google chinese, chinese cangjie keyboard, chinese cangjie virtual keyboard, chinese cangjie keyboard online, chinese cangjie onscreen keyboard, type chinese cangjie keyboard, chinese cangjie keyboard layout, chinese cangjie input, cangjie input, chinese pinyin keyboard, chinese pinyin virtual keyboard, chinese pinyin keyboard online, chinese pinyin onscreen keyboard, type chinese pinyin keyboard, chinese pinyin keyboard layout, chinese input, chinese pinyin input, pinyin input, traditional chinese to simplified chinese, traditional to simplified, traditional chinese to simplified chinese converter, traditional to simplified converter, simplified chinese to traditional chinese, simplified to traditional, simplified chinese to traditional chinese converter, simplified to traditional converter">
    

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
                  <h1>Chinese Keyboard</h1>
                  <p>Description Chinese Keyboard</p>
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
                      <div class="inputText_keyboard"></div>
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
                        <div class="chinese-keyboard">
                            <div class="row">
                                <div class="key" data-key="`"><small>`</small><p>`</p></div>
                                <div class="key" data-num-key="1"><small>1</small><p>1</p></div>
                                <div class="key" data-num-key="2"><small>2</small><p>2</p></div>
                                <div class="key" data-num-key="3"><small>3</small><p>3</p></div>
                                <div class="key" data-num-key="4"><small>4</small><p>4</p></div>
                                
                                <div class="key" data-num-key="5"><small>5</small><p>5</p></div>
                                <div class="key" data-num-key="6"><small>6</small><p>6</p></div>
                                <div class="key" data-num-key="7"><small>7</small><p>7</p></div>
                                <div class="key" data-num-key="8"><small>8</small><p>8</p></div>
                                <div class="key" data-num-key="9"><small>9</small><p>9</p></div>
                                <div class="key" data-num-key="0"><small>0</small><p>0</p></div>
                                <div class="key" data-key="-"><small>-</small><p>-</p></div>
                                <div class="key" data-key="="><small>=</small><p>=</p></div>
                                <div class="key wide backspace" data-key="Backspace">Backspace</div>
                            </div>
                            <div class="row">
                                <div class="key wide" data-key="Tab">Tab</div>
                                <div class="key" data-key="q"><small>q</small><p>手</p></div>

                                <div class="key" data-key="w"><small>w</small><p>田</p></div>
                                
                                <div class="key" data-key="e"><small>e</small><p>水</p></div>
                                <div class="key" data-key="r"><small>r</small><p>口</p></div>
                                <div class="key" data-key="t"><small>t</small><p>廿</p></div>

                                <div class="key" data-key="y"><small>y</small><p>卜</p></div>

                                <div class="key" data-key="u"><small>u</small><p>山</p></div>
                                <div class="key" data-key="i"><small>i</small><p>戈</p></div>
                                <div class="key" data-key="o"><small>o</small><p>人</p></div>
                                <div class="key" data-key="p"><small>p</small><p>心</p></div>
                                <div class="key" data-key="["><small>[</small><p>[</p></div>
                                <div class="key" data-key="]"><small>]</small><p>]</p></div>
                                <div class="key" data-key="\"><small>\</small><p>、</p></div>
                            </div>
                            <div class="row">
                                <div class="key extra-wide caps" data-key="Caps Lock">Caps Lock</div>
                                <div class="key" data-key="a"><small>a</small><p>日</p></div>
                                <div class="key" data-key="s"><small>s</small><p>尸</p></div>
                                <div class="key" data-key="d"><small>d</small><p>木</p></div>
                                <div class="key" data-key="f"><small>f</small><p>火</p></div>
                                <div class="key" data-key="g"><small>g</small><p>土</p></div>
                                <div class="key" data-key="h"><small>h</small><p>竹</p></div>
                                <div class="key" data-key="j"><small>j</small><p>十</p></div>
                                <div class="key" data-key="k"><small>k</small><p>大</p></div>
                                <div class="key" data-key="l"><small>l</small><p>中</p></div>
                                <div class="key" data-key=";"><small>;</small><p>;</p></div>
                                <div class="key" data-key="'"><small>'</small><p>'</p></div>
                                <div class="key extra-wide" data-key="Enter">Enter</div>
                            </div>
                            <div class="row">
                                <div class="key wide extra-shift" data-key="Shift">Shift</div>
                                <div class="key" data-key="z"><small>z</small><p>Ｚ</p></div>
                                <div class="key" data-key="x"><small>x</small><p>難</p></div>
                                <div class="key" data-key="c"><small>c</small><p>金</p></div>
                                <div class="key" data-key="v"><small>v</small><p>女</p></div>
                                <div class="key" data-key="b"><small>b</small><p>月</p></div>
                                <div class="key" data-key="n"><small>n</small><p>弓</p></div>
                                <div class="key" data-key="m"><small>m</small><p>一</p></div>

                                <div class="key" data-key=","><small>,</small><p>,</p></div>
                                <div class="key" data-key="."><small>.</small><p>。</p></div>
                                <div class="key" data-key="/"><small>/</small><p>/</p></div>
                                <div class="key wide" data-key="Shift">Shift</div>
                            </div>
                            <div class="row">
                                <div class="key wide" data-key="Ctrl">Ctrl</div>
                                <div class="key wide emojibtn" data-key="Emoji">🙂</div>
                                <div class="key wide" data-key="Alt">Alt</div>
                                <div class="key extra-wide space" data-key="Space">Space</div>
                                <div class="key wide" data-key="AltGr">AltGr</div>
                                <div class="key esc" data-key="Esc">Esc</div>
                                <div class="key wide" data-key="Ctrl">Ctrl</div>
                            </div>
                        </div>

<!--                         <div class="keyboard-sebeolsik" style="display: none;">
                          <div class="row">
                                <div class="sebe" data-key="`"><small>`</small><p>`</p></div>
                                <div class="sebe" data-key="1"><small>1</small><p>ㅎ</p></div>
                                <div class="sebe" data-key="2"><small>2</small><p>ㅆ</p></div>
                                <div class="sebe" data-key="3"><small>3</small><p>ㅂ</p></div>
                                <div class="sebe" data-key="4"><small>4</small><p>ㅛ</p></div>
                                <div class="sebe" data-key="5"><small>5</small><p>ㅠ</p></div>
                                <div class="sebe" data-key="6"><small>6</small><p>ㅑ</p></div>
                                <div class="sebe" data-key="7"><small>7</small><p>ㅖ</p></div>
                                <div class="sebe" data-key="8"><small>8</small><p>ᅴ</p></div>
                                <div class="sebe" data-key="9"><small>9</small><p>ㅜ</p></div>
                                <div class="sebe" data-key="0"><small>0</small><p>ㅋ</p></div>
                                <div class="sebe" data-key="-"><small>-</small><p>)</p></div>
                                <div class="sebe" data-key="="><small>=</small><p>》</p></div>
                                <div class="key wide backspace" data-key="Backspace">Backspace</div>
                            </div>
                            <div class="row">
                                <div class="sebe wide" data-key="Tab">Tab</div>
                                <div class="sebe" data-key="q"><small>q</small><p>ㅅ</p></div>
                                <div class="sebe" data-key="w"><small>w</small><p>ㄹ</p></div>
                                <div class="sebe" data-key="e"><small>e</small><p>ㅕ</p></div>
                                <div class="sebe" data-key="r"><small>r</small><p>ㅐ</p></div>
                                <div class="sebe" data-key="t"><small>t</small><p>ㅓ</p></div>
                                <div class="sebe" data-key="y"><small>y</small><p>ㄹ</p></div>
                                <div class="sebe" data-key="u"><small>u</small><p>ㄷ</p></div>
                                <div class="sebe" data-key="i"><small>i</small><p>ㅁ</p></div>
                                <div class="sebe" data-key="o"><small>o</small><p>ㅊ</p></div>
                                <div class="sebe" data-key="p"><small>p</small><p>ㅍ</p></div>
                                <div class="sebe" data-key="["><small>[</small><p>(</p></div>
                                <div class="sebe" data-key="]"><small>]</small><p>《</p></div>
                                <div class="sebe" data-key="\"><small>\</small><p>:</p></div>
                            </div>
                            <div class="row">
                                <div class="sebe extra-wide caps" data-key="Caps Lock">Caps Lock</div>
                                <div class="sebe" data-key="a"><small>a</small><p>ㅇ</p></div>
                                <div class="sebe" data-key="s"><small>s</small><p>ㄴ</p></div>
                                <div class="sebe" data-key="d"><small>d</small><p>ㅣ</p></div>
                                <div class="sebe" data-key="f"><small>f</small><p>ㅏ</p></div>
                                <div class="sebe" data-key="g"><small>g</small><p>ㅡ</p></div>
                                <div class="sebe" data-key="h"><small>h</small><p>ㄴ</p></div>
                                <div class="sebe" data-key="j"><small>j</small><p>ㅇ</p></div>
                                <div class="sebe" data-key="k"><small>k</small><p>ㄱ</p></div>
                                <div class="sebe" data-key="l"><small>l</small><p>ㅈ</p></div>
                                <div class="sebe" data-key=";"><small>;</small><p>ㅂ</p></div>
                                <div class="sebe" data-key="'"><small>'</small><p>ㅌ</p></div>
                                <div class="key extra-wide" data-key="Enter">Enter</div>
                            </div>
                            <div class="row">
                                <div class="sebe wide extra-shift" data-key="Shift">Shift</div>
                                <div class="sebe" data-key="z"><small>z</small><p>ㅁ</p></div>
                                <div class="sebe" data-key="x"><small>x</small><p>ㄱ</p></div>
                                <div class="sebe" data-key="c"><small>c</small><p>ㅔ</p></div>
                                <div class="sebe" data-key="v"><small>v</small><p>ㅗ</p></div>
                                <div class="sebe" data-key="b"><small>b</small><p>ㅜ</p></div>
                                <div class="sebe" data-key="n"><small>n</small><p>ㅅ</p></div>
                                <div class="sebe" data-key="m"><small>m</small><p>ㅎ</p></div>

                                <div class="sebe" data-key=","><small>,</small><p>,</p></div>
                                <div class="sebe" data-key="."><small>.</small><p>.</p></div>
                                <div class="sebe" data-key="/"><small>/</small><p>ㅗ</p></div>
                                <div class="key wide" data-key="Shift">Shift</div>
                            </div>
                            <div class="row">
                                <div class="key wide" data-key="Ctrl">Ctrl</div>
                                <div class="key wide emojibtn" data-key="Emoji">🙂</div>
                                <div class="key wide" data-key="Alt">Alt</div>
                                <div class="key extra-wide space" data-key="Space">Space</div>
                                <div class="key wide" data-key="AltGr">AltGr</div>
                                <div class="key esc" data-key="Esc">Esc</div>
                                <div class="key wide" data-key="Ctrl">Ctrl</div>
                            </div>
                        </div>

                        <div class="keyboard-hanja" style="display: none;">
                          <div class="row">
                                <div class="hanja" data-key="`"><small>`</small><p>`</p></div>
                                <div class="hanja" data-key="1"><small>1</small><p>1</p></div>
                                <div class="hanja" data-key="2"><small>2</small><p>2</p></div>
                                <div class="hanja" data-key="3"><small>3</small><p>3</p></div>
                                <div class="hanja" data-key="4"><small>4</small><p>4</p></div>
                                <div class="hanja" data-key="5"><small>5</small><p>5</p></div>
                                <div class="hanja" data-key="6"><small>6</small><p>6</p></div>
                                <div class="hanja" data-key="7"><small>7</small><p>7</p></div>
                                <div class="hanja" data-key="8"><small>8</small><p>8</p></div>
                                <div class="hanja" data-key="9"><small>9</small><p>9</p></div>
                                <div class="hanja" data-key="0"><small>0</small><p>0</p></div>
                                <div class="hanja" data-key="-"><small>-</small><p>-</p></div>
                                <div class="hanja" data-key="="><small>=</small><p>=</p></div>
                                <div class="key wide backspace" data-key="Backspace">Backspace</div>
                            </div>
                            <div class="row">
                                <div class="hanja wide" data-key="Tab">Tab</div>
                                <div class="hanja" data-key="q"><small>q</small><p>q</p></div>
                                <div class="hanja" data-key="w"><small>w</small><p>w</p></div>
                                <div class="hanja" data-key="e"><small>e</small><p>e</p></div>
                                <div class="hanja" data-key="r"><small>r</small><p>r</p></div>
                                <div class="hanja" data-key="t"><small>t</small><p>t</p></div>
                                <div class="hanja" data-key="y"><small>y</small><p>y</p></div>
                                <div class="hanja" data-key="u"><small>u</small><p>u</p></div>
                                <div class="hanja" data-key="i"><small>i</small><p>i</p></div>
                                <div class="hanja" data-key="o"><small>o</small><p>o</p></div>
                                <div class="hanja" data-key="p"><small>p</small><p>p</p></div>
                                <div class="hanja" data-key="["><small>[</small><p>[</p></div>
                                <div class="hanja" data-key="]"><small>]</small><p>]</p></div>
                                <div class="hanja" data-key="\"><small>\</small><p>\</p></div>
                            </div>
                            <div class="row">
                                <div class="hanja extra-wide caps" data-key="Caps Lock">Caps Lock</div>
                                <div class="hanja" data-key="a"><small>a</small><p>a</p></div>
                                <div class="hanja" data-key="s"><small>s</small><p>s</p></div>
                                <div class="hanja" data-key="d"><small>d</small><p>d</p></div>
                                <div class="hanja" data-key="f"><small>f</small><p>f</p></div>
                                <div class="hanja" data-key="g"><small>g</small><p>g</p></div>
                                <div class="hanja" data-key="h"><small>h</small><p>h</p></div>
                                <div class="hanja" data-key="j"><small>j</small><p>j</p></div>
                                <div class="hanja" data-key="k"><small>k</small><p>k</p></div>
                                <div class="hanja" data-key="l"><small>l</small><p>l</p></div>
                                <div class="hanja" data-key=";"><small>;</small><p>;</p></div>
                                <div class="hanja" data-key="'"><small>'</small><p>'</p></div>
                                <div class="key extra-wide" data-key="Enter">Enter</div>
                            </div>
                            <div class="row">
                                <div class="hanja wide extra-shift" data-key="Shift">Shift</div>
                                <div class="hanja" data-key="z"><small>z</small><p>z</p></div>
                                <div class="hanja" data-key="x"><small>x</small><p>x</p></div>
                                <div class="hanja" data-key="c"><small>c</small><p>c</p></div>
                                <div class="hanja" data-key="v"><small>v</small><p>v</p></div>
                                <div class="hanja" data-key="b"><small>b</small><p>b</p></div>
                                <div class="hanja" data-key="n"><small>n</small><p>n</p></div>
                                <div class="hanja" data-key="m"><small>m</small><p>m</p></div>

                                <div class="key" data-key=","><small>,</small><p>,</p></div>
                                <div class="key" data-key="."><small>.</small><p>.</p></div>
                                <div class="key" data-key="/"><small>/</small><p>/</p></div>
                                <div class="key wide" data-key="Shift">Shift</div>
                            </div>
                            <div class="row">
                                <div class="key wide ctrl" data-key="Ctrl">Ctrl</div>
                                <div class="key wide emojibtn" data-key="Emoji">🙂</div>
                                <div class="key wide" data-key="Alt">Alt</div>
                                <div class="key extra-wide space" data-key="Space">Space</div>
                                <div class="key wide" data-key="AltGr">AltGr</div>
                                <div class="key esc" data-key="Esc">Esc</div>
                                <div class="key wide" data-key="Ctrl">Ctrl</div>
                            </div>
                        </div> -->
                      </div>

                        <!-- <div class="radio-group">
                            <input type="radio" id="standard" name="keyboard-layout" value="standard" checked>
                            <label for="standard">Standard</label>

                            <input type="radio" id="sebeolsik" name="keyboard-layout" value="sebeolsik">
                            <label for="sebeolsik">Sebeolsik</label>

                            <input type="radio" id="hanja" name="keyboard-layout" value="hanja">
                            <label for="hanja">Hanja</label>
                        </div>    -->     
                      </div>
                      
                </div>   
          </div>
        <div class="clear"></div>
</section>


<section class="content">
    <div class="container">
      <div id="about">
          <div class="about-paragraph">
            <h2>Chinese Keyboard</h2>
          </div>
      </div>
    </div>
    <div class="clear"></div>
</section>

<?php
$this->load->view('include/footer.php');  
?>
<script type="text/javascript" src="<?=base_url('assets/keyboard_js/chinese-keyboard.js')?>"></script>
