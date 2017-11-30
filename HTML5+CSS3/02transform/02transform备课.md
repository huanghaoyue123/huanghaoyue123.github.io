## HTML5

section.comsic-cube>.cube>div{6}*6



## CSS3
###默认：
【*】mg:0; pd:0; box:z;

【.comsic-cube】bg:black; h:100vh; 
display:flexd; align-items:center; justify-content:center;

【.cube】width: 80px;height: 80px;position: absolute;left: 100px;top: 100px;

transform-style: preserve-3d;父级元素设置支持3d属性transform-origin: center center;旋转时候居于中心transform: rotate(0deg) rotateY(30deg) rotateZ(30deg);调试的时候设30最后归0

【.cube div】h80; w80; border:3px solid #19decd; fz42; df; aic; jcc;
**【美化 .cube div】** box-shadow:0 0 80px #19decd; text-shadow:0 0 20px #fff;整体配色可以用，yeloow green blue red 等配色都可以

【.cube div:nth-of-type(1)】transform: translateY(-40px) rotateX(90deg); 偏移40像素，旋转90度

###动画：
【@keyframes cube -> 100%】transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);

【.cube】animation: cube 10s;animation-timing-function: linear;animation-iteration-count: infinite;