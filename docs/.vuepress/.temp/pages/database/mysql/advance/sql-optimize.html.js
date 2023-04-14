export const data = JSON.parse("{\"key\":\"v-4ad17048\",\"path\":\"/database/mysql/advance/sql-optimize.html\",\"title\":\"SQL优化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":4,\"description\":\"SQL优化 insert优化 批量插入 insert into table_name values (values_list...);\"},\"headers\":[{\"level\":2,\"title\":\"insert优化\",\"slug\":\"insert优化\",\"link\":\"#insert优化\",\"children\":[{\"level\":3,\"title\":\"批量插入\",\"slug\":\"批量插入\",\"link\":\"#批量插入\",\"children\":[]},{\"level\":3,\"title\":\"手动提交事务\",\"slug\":\"手动提交事务\",\"link\":\"#手动提交事务\",\"children\":[]},{\"level\":3,\"title\":\"主键顺序插入\",\"slug\":\"主键顺序插入\",\"link\":\"#主键顺序插入\",\"children\":[]},{\"level\":3,\"title\":\"大批量数据插入\",\"slug\":\"大批量数据插入\",\"link\":\"#大批量数据插入\",\"children\":[]}]},{\"level\":2,\"title\":\"primery key优化\",\"slug\":\"primery-key优化\",\"link\":\"#primery-key优化\",\"children\":[{\"level\":3,\"title\":\"数据的组织方式\",\"slug\":\"数据的组织方式\",\"link\":\"#数据的组织方式\",\"children\":[]},{\"level\":3,\"title\":\"页分裂\",\"slug\":\"页分裂\",\"link\":\"#页分裂\",\"children\":[]},{\"level\":3,\"title\":\"页合并\",\"slug\":\"页合并\",\"link\":\"#页合并\",\"children\":[]},{\"level\":3,\"title\":\"主键设计原则\",\"slug\":\"主键设计原则\",\"link\":\"#主键设计原则\",\"children\":[]}]},{\"level\":2,\"title\":\"order by优化\",\"slug\":\"order-by优化\",\"link\":\"#order-by优化\",\"children\":[{\"level\":3,\"title\":\"查询类别\",\"slug\":\"查询类别\",\"link\":\"#查询类别\",\"children\":[]},{\"level\":3,\"title\":\"举例说明\",\"slug\":\"举例说明\",\"link\":\"#举例说明\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]},{\"level\":2,\"title\":\"group by优化\",\"slug\":\"group-by优化\",\"link\":\"#group-by优化\",\"children\":[{\"level\":3,\"title\":\"查询类型\",\"slug\":\"查询类型\",\"link\":\"#查询类型\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项-1\",\"link\":\"#注意事项-1\",\"children\":[]}]},{\"level\":2,\"title\":\"limit优化\",\"slug\":\"limit优化\",\"link\":\"#limit优化\",\"children\":[{\"level\":3,\"title\":\"优化场景\",\"slug\":\"优化场景\",\"link\":\"#优化场景\",\"children\":[]},{\"level\":3,\"title\":\"举例说明\",\"slug\":\"举例说明-1\",\"link\":\"#举例说明-1\",\"children\":[]},{\"level\":3,\"title\":\"优化思路\",\"slug\":\"优化思路\",\"link\":\"#优化思路\",\"children\":[]}]},{\"level\":2,\"title\":\"count优化\",\"slug\":\"count优化\",\"link\":\"#count优化\",\"children\":[{\"level\":3,\"title\":\"优化思路\",\"slug\":\"优化思路-1\",\"link\":\"#优化思路-1\",\"children\":[]},{\"level\":3,\"title\":\"count的用法\",\"slug\":\"count的用法\",\"link\":\"#count的用法\",\"children\":[]}]},{\"level\":2,\"title\":\"update优化\",\"slug\":\"update优化\",\"link\":\"#update优化\",\"children\":[{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项-2\",\"link\":\"#注意事项-2\",\"children\":[]},{\"level\":3,\"title\":\"举例说明\",\"slug\":\"举例说明-2\",\"link\":\"#举例说明-2\",\"children\":[]}]}],\"readingTime\":{\"minutes\":8.92,\"words\":2675},\"filePathRelative\":\"database/mysql/advance/sql-optimize.md\",\"excerpt\":\"<h1> SQL优化</h1>\\n<h2> insert优化</h2>\\n<h3> 批量插入</h3>\\n<div class=\\\"language-sql line-numbers-mode\\\" data-ext=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token keyword\\\">insert</span> <span class=\\\"token keyword\\\">into</span> table_name <span class=\\\"token keyword\\\">values</span> <span class=\\\"token punctuation\\\">(</span>values_list<span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
