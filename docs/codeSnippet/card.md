# 卡贴样式
---
<Common-Democode title="卡劵样式" description="票、卷样式">
  <snippet-use-card></snippet-use-card>
  <highlight-code slot="codeText" lang="vue">
    <div class="spCard"></div>
    <style lang="scss" scoped>
        .spCard{
            width: 200px;
            height: 80px;
            background: radial-gradient(circle at right bottom, transparent 10px, #ffffff 0) top right / 50% 40px no-repeat,
            radial-gradient(circle at left bottom, transparent 10px, #ffffff 0) top left / 50% 40px no-repeat,
            radial-gradient(circle at right top, transparent 10px, #ffffff 0) bottom right / 50% 40px no-repeat,
            radial-gradient(circle at left top, transparent 10px, #ffffff 0) bottom left / 50% 40px no-repeat;
            filter: drop-shadow(3px 3px 3px #c5c5c5);
        }
    </style>
    卡券贴的核心是使用透明白色径向渐变radial-gradient，分别让4张背景图中的左下角、右下角、右上角和左下角出现缺省，再利用drop-shadow实现元素阴影，从而达到效果

    radial-gradient语法如下：radial-gradient(shape size at position, start-color, ..., last-color)

    shape(确定圆的类型): 
    ellipse(默认)[指定椭圆形的径向渐变]  
    circle[指定圆形的径向渐变]

    size(定义渐变的大小):
    farthest-corner(默认)[指定径向渐变的半径长度为从圆心到离圆心最远的角]
    closest-side[指定径向渐变的半径长度为从圆心到离圆心最近的边]
    closest-corner[指定径向渐变的半径长度为从圆心到离圆心最近的角]
    farthest-side[指定径向渐变的半径长度为从圆心到离圆心最远的边]

    position(定义渐变的位置):
    center(默认)[设置中间为径向渐变圆心的纵坐标值]
    top[设置顶部为径向渐变圆心的纵坐标值]
    bottom[设置底部为径向渐变圆心的纵坐标值]

    start-color、last-color(用于指定渐变的起止颜色)

  </highlight-code>
</Common-Democode>
