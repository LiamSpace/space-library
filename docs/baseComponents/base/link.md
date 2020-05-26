# link 文字链接
---
<Common-Democode title="基础用法" description="基础的文字链接用法">
  <use-Link-link></use-Link-link>
  <highlight-code slot="codeText" lang="vue">
    <sp-link type="primary">主要链接</sp-link>
    <sp-link type="success">成功链接</sp-link>
    <sp-link type="warning">警告链接</sp-link>
    <sp-link type="danger">危险链接</sp-link>
    <sp-link type="info">信息链接</sp-link>
  </highlight-code>
</Common-Democode>

<Common-Democode title="禁用状态" description="文字链接不可用状态">
  <use-Link-disLink></use-Link-disLink>
  <highlight-code slot="codeText" lang="vue">
    <sp-link>默认链接</sp-link>
    <sp-link type="primary" disabled>主要链接</sp-link>
    <sp-link type="success" disabled>成功链接</sp-link>
    <sp-link type="warning" disabled>警告链接</sp-link>
    <sp-link type="danger" disabled>危险链接</sp-link>
    <sp-link type="info" disabled>信息链接</sp-link>
  </highlight-code>
</Common-Democode>

<Common-Democode title="下划线" description="文字链接下划线">
  <use-Link-underLink></use-Link-underLink>
  <highlight-code slot="codeText" lang="vue">
    <sp-link :underline="false">无下划线</sp-link>
    <sp-link>有下划线</sp-link>
  </highlight-code>
</Common-Democode>


| 参数        | 说明           |     类型      |    可选值   | 默认值     |
| ------------|:-------------:|:-------------:|:----------:|:----------:|
| underline   | 是否下划线     | Boolean       |    ——      |   true     |
| type        | 类型           | String       | default \ primary \ success \ warning \ danger \ info | default |
| href        | 原生属性       | String       |     ——      |      -     |
| disabled    | 是否禁用状态   | Boolean      |      ——      |    false   |

