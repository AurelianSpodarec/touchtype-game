import React from 'react';


// REFACTOR HTML
function Keyboard() {


    return (
        <div class="keyboard">
            <div class="keyboard__key-row">
                <div class="keyboard__key key--double" data-key="192">
                    <div>~</div>
                    <div>`</div>
                </div>
                <div class="keyboard__key key--double" data-key="49">
                    <div>!</div>
                    <div>1</div>
                </div>
                <div class="keyboard__key key--double" data-key="50">
                    <div>@</div>
                    <div>2</div>
                </div>
                <div class="keyboard__key key--double" data-key="51">
                    <div>#</div>
                    <div>3</div>
                </div>
                <div class="keyboard__key key--double" data-key="52">
                    <div>$</div>
                    <div>4</div>
                </div>
                <div class="keyboard__key key--double" data-key="53">
                    <div>%</div>
                    <div>5</div>
                </div>
                <div class="keyboard__key key--double" data-key="54">
                    <div>^</div>
                    <div>6</div>
                </div>
                <div class="keyboard__key key--double" data-key="55">
                    <div>&</div>
                    <div>7</div>
                </div>
                <div class="keyboard__key key--double" data-key="56">
                    <div>*</div>
                    <div>8</div>
                </div>
                <div class="keyboard__key key--double" data-key="57">
                    <div>(</div>
                    <div>9</div>
                </div>
                <div class="keyboard__key key--double" data-key="48">
                    <div>)</div>
                    <div>0</div>
                </div>
                <div class="keyboard__key key--double" data-key="189">
                    <div>_</div>
                    <div>-</div>
                </div>
                <div class="keyboard__key key--double" data-key="187">
                    <div>+</div>
                    <div>=</div>
                </div>
                <div class="keyboard__key key--bottom-right key--word key--w4" data-key="8">
                    <span>backspace</span>
                </div>
            </div>
            <div class="keyboard__key-row">
                <div class="keyboard__key key--bottom-left key--word key--w4" data-key="9">
                    <span>tab</span>
                </div>
                <div class="keyboard__key key--letter" data-char="Q">Q</div>
                <div class="keyboard__key key--letter" data-char="W">W</div>
                <div class="keyboard__key key--letter" data-char="E">E</div>
                <div class="keyboard__key key--letter" data-char="R">R</div>
                <div class="keyboard__key key--letter" data-char="T">T</div>
                <div class="keyboard__key key--letter" data-char="Y">Y</div>
                <div class="keyboard__key key--letter" data-char="U">U</div>
                <div class="keyboard__key key--letter" data-char="I">I</div>
                <div class="keyboard__key key--letter" data-char="O">O</div>
                <div class="keyboard__key key--letter" data-char="P">P</div>
                <div class="keyboard__key key--double" data-key="219" data-char="{[">
                    <div>{"{"}</div>
                    <div>[</div>
                </div>
                <div class="keyboard__key key--double" data-key="221" data-char="}]">
                    <div>{"}"}</div>
                    <div>]</div>
                </div>
                <div class="keyboard__key key--double" data-key="220" data-char="|\">
                    <div>|</div>
                    <div>\</div>
                </div>
            </div>
            <div class="keyboard__key-row">
                <div class="keyboard__key key--bottom-left key--word key--w5" data-key="20">
                    <span>caps lock</span>
                </div>
                <div class="keyboard__key key--letter" data-char="A">A</div>
                <div class="keyboard__key key--letter" data-char="S">S</div>
                <div class="keyboard__key key--letter" data-char="D">D</div>
                <div class="keyboard__key key--letter" data-char="F">F</div>
                <div class="keyboard__key key--letter" data-char="G">G</div>
                <div class="keyboard__key key--letter" data-char="H">H</div>
                <div class="keyboard__key key--letter" data-char="J">J</div>
                <div class="keyboard__key key--letter" data-char="K">K</div>
                <div class="keyboard__key key--letter" data-char="L">L</div>
                <div class="keyboard__key key--double" data-key="186">
                    <div>:</div>
                    <div>;</div>
                </div>
                <div class="keyboard__key key--double" data-key="222">
                    <div>"</div>
                    <div>'</div>
                </div>
                <div class="keyboard__key key--bottom-right key--word key--w5" data-key="13">
                    <span>enter</span>
                </div>
            </div>
            <div class="keyboard__key-row">
                <div class="keyboard__key key--bottom-left key--word key--w6" data-key="16">
                    <span>shift</span>
                </div>
                <div class="key--letter" data-char="Z">Z</div>
                <div class="key--letter" data-char="X">X</div>
                <div class="key--letter" data-char="C">C</div>
                <div class="key--letter" data-char="V">V</div>
                <div class="key--letter" data-char="B">B</div>
                <div class="key--letter" data-char="N">N</div>
                <div class="key--letter" data-char="M">M</div>
                <div class="key--double" data-key="188">
                    <div>&lt;</div>
                    <div>,</div>
                </div>
                <div class="key--double" data-key="190">
                    <div>&gt;</div>
                    <div>.</div>
                </div>
                <div class="key--double" data-key="191">
                    <div>?</div>
                    <div>/</div>
                </div>
                <div class="key--bottom-right key--word key--w6" data-key="16-R">
                    <span>shift</span>
                </div>
            </div>
            <div class="keyboard__row keyboard__row--h3">
                <div class="key--bottom-left key--word key--w1" data-key="17">
                    <span>control</span>
                </div>
                <div class="key--bottom-left key--word key--w1" data-key="18">
                    <span>option</span>
                </div>
                <div class="key--bottom-right key--word key--w3" data-key="91">
                    <span>command</span>
                </div>
                <div class="key--double key--right key--space" data-key="32" data-char=" ">
                    <span>Space</span>
                </div>
                <div class="key--bottom-left key--word key--w3" data-key="93-R">
                    <span>command</span>
                </div>
                <div class="key--bottom-left key--word key--w1" data-key="18-R">
                    <span>option</span>
                </div>
                <div with="100%">

                </div>
            </div>
        </div>
    );
}

export default Keyboard;
