export const data = JSON.parse("{\"key\":\"v-dfa09558\",\"path\":\"/database/mysql/constraint.html\",\"title\":\"MySQL基础 - 约束\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":4,\"description\":\"MySQL基础 - 约束 概念 约束是作用于表中字段上的规则，用于限制存储在表中的数据。 目的 为了保证数据库中数据的正确、有效性和完整性。 分类 约束 描述 关键字 非空约束 限制该字段的数据不能为null NOT NULL 唯一约束 保证该字段的所有数据都是唯一，不重复的 UNIQUE 主键约束 主键是一行数据的唯一标识，要求非空且唯一 PRIMARY KEY 默认约束 保存数据时，如果未指定该字段的值，则赋予该默认值 DEFULT 条件约束 保证字段值满足指定的条件 CHECK 外键约束 用来让两张表的数据之间建立连接，保证数据的一致性和完整性 FOREIGN KEY\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.codermast.com/database/mysql/constraint.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"编程桅杆\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MySQL基础 - 约束\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"MySQL基础 - 约束 概念 约束是作用于表中字段上的规则，用于限制存储在表中的数据。 目的 为了保证数据库中数据的正确、有效性和完整性。 分类 约束 描述 关键字 非空约束 限制该字段的数据不能为null NOT NULL 唯一约束 保证该字段的所有数据都是唯一，不重复的 UNIQUE 主键约束 主键是一行数据的唯一标识，要求非空且唯一 PRIMARY KEY 默认约束 保存数据时，如果未指定该字段的值，则赋予该默认值 DEFULT 条件约束 保证字段值满足指定的条件 CHECK 外键约束 用来让两张表的数据之间建立连接，保证数据的一致性和完整性 FOREIGN KEY\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"CoderMast\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"MySQL基础 - 约束\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"CoderMast\\\",\\\"url\\\":\\\"https://www.codermast.com\\\",\\\"email\\\":\\\"codermast@163.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[]},{\"level\":2,\"title\":\"目的\",\"slug\":\"目的\",\"link\":\"#目的\",\"children\":[]},{\"level\":2,\"title\":\"分类\",\"slug\":\"分类\",\"link\":\"#分类\",\"children\":[]},{\"level\":2,\"title\":\"外键约束\",\"slug\":\"外键约束\",\"link\":\"#外键约束\",\"children\":[{\"level\":3,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":3,\"title\":\"删除/更新行为\",\"slug\":\"删除-更新行为\",\"link\":\"#删除-更新行为\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.34,\"words\":701},\"filePathRelative\":\"database/mysql/constraint.md\",\"excerpt\":\"<h1> MySQL基础 - 约束</h1>\\n<h2> 概念</h2>\\n<p>约束是作用于表中字段上的规则，用于限制存储在表中的数据。</p>\\n<h2> 目的</h2>\\n<p>为了保证数据库中数据的正确、有效性和完整性。</p>\\n<h2> 分类</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\\"text-align:center\\\">约束</th>\\n<th style=\\\"text-align:center\\\">描述</th>\\n<th style=\\\"text-align:center\\\">关键字</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\\"text-align:center\\\">非空约束</td>\\n<td style=\\\"text-align:center\\\">限制该字段的数据不能为null</td>\\n<td style=\\\"text-align:center\\\">NOT NULL</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">唯一约束</td>\\n<td style=\\\"text-align:center\\\">保证该字段的所有数据都是唯一，不重复的</td>\\n<td style=\\\"text-align:center\\\">UNIQUE</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">主键约束</td>\\n<td style=\\\"text-align:center\\\">主键是一行数据的唯一标识，要求非空且唯一</td>\\n<td style=\\\"text-align:center\\\">PRIMARY KEY</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">默认约束</td>\\n<td style=\\\"text-align:center\\\">保存数据时，如果未指定该字段的值，则赋予该默认值</td>\\n<td style=\\\"text-align:center\\\">DEFULT</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">条件约束</td>\\n<td style=\\\"text-align:center\\\">保证字段值满足指定的条件</td>\\n<td style=\\\"text-align:center\\\">CHECK</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">外键约束</td>\\n<td style=\\\"text-align:center\\\">用来让两张表的数据之间建立连接，保证数据的一致性和完整性</td>\\n<td style=\\\"text-align:center\\\">FOREIGN KEY</td>\\n</tr>\\n</tbody>\\n</table>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
