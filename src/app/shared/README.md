# ShareModule

**应** 包含定义：

+ 应用通用自定义业务组件

**应** 导出所有包含的模块。

**不应** 有 `providers` 属性。

## 自定义全局组件或指令

每一个组件或指令应该有一个完整的说明文件，**建议**一个合理的目录结构应该是：

```
├── components
│   ├── comp1
│   │   ├── index.ts
│   │   ├── README.md
│   ├── comp2
│   │   ├── index.ts
│   │   ├── README.md
├── directives
│   ├── dire1
│   │   ├── index.ts
│   │   ├── README.md
│   ├── dire2
│   │   ├── index.ts
│   │   ├── README.md
```
## 生成protbuf的model
将多个proto文件生成一个js文件
* pbjs -t static-module -w commonjs -o protobuf-model.js account_detail.proto answer.proto content.proto follow.proto platform_detail.proto score_detail.proto user.proto account.proto article.proto dialogue.proto orders.proto images.proto score.proto answer_file.proto comment.proto favorite.proto platform_account.proto question.proto tags.proto equipment.proto characters.proto virtual_items.proto category.proto
* pbts -o protobuf-model.d.ts protobuf-model.js
将生成的bundled.js 生成typescript的文件bundled.d.ts
