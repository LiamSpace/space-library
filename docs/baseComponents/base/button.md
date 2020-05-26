# Button 按钮
---

<Common-Democode title="基本用法" description="基本按钮用法">
  <use-Button-button></use-Button-button>
  <highlight-code slot="codeText" lang="vue">
    <sp-button>默认按钮</sp-button>
    <sp-button type="primary">主要按钮</sp-button>
    <sp-button type="success">成功按钮</sp-button>
    <sp-button type="warning">警告按钮</sp-button>
    <sp-button type="danger">危险按钮</sp-button>
    <sp-button type="info">信息按钮</sp-button>
  </highlight-code>
</Common-Democode>



<Common-Democode title="文字按钮" description="没有边框没有背景色">
  <use-Button-fontButton></use-Button-fontButton>
  <highlight-code slot="codeText" lang="vue">
    <sp-button type="text">文字按钮</sp-button>
    <sp-button type="text" disabled>文字按钮</sp-button>
  </highlight-code>
</Common-Democode>

| 参数        | 说明           | 类型  |    可选值        | 默认值     |
| ------------|:-------------:|:-------------:|:----------:|:-----:|
| size      | 尺寸 | String | mini \ small \ medium | —— |
| type      | 类型 | String | default \ primary \ success \ warning \ danger \ info | default |
| round     | 圆角 | Boolean | —— | false |
| disabled  | 禁用 | Boolean | —— | false |

