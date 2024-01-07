export const data = JSON.parse("{\"key\":\"v-03328b76\",\"path\":\"/java/spring-series/spring/spring-transaction.html\",\"title\":\"Spring - 事务\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":9,\"description\":\"Spring - 事务 JdbcTemplate Spring 框架对 JDBC 进行封装，使用 JdbcTemplate 方便实现对数据库操作 准备工作 ①搭建子模块 搭建子模块：spring6-transaction ②加入依赖 &lt;dependencies&gt; &lt;!--spring jdbc Spring 持久化层支持jar包--&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt; &lt;version&gt;6.0.2&lt;/version&gt; &lt;/dependency&gt; &lt;!-- MySQL驱动 --&gt; &lt;dependency&gt; &lt;groupId&gt;mysql&lt;/groupId&gt; &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt; &lt;version&gt;8.0.33&lt;/version&gt; &lt;/dependency&gt; &lt;!-- 数据源 --&gt; &lt;dependency&gt; &lt;groupId&gt;com.alibaba&lt;/groupId&gt; &lt;artifactId&gt;druid&lt;/artifactId&gt; &lt;version&gt;1.2.15&lt;/version&gt; &lt;/dependency&gt; &lt;/dependencies&gt;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.codermast.com/java/spring-series/spring/spring-transaction.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"编程桅杆\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Spring - 事务\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Spring - 事务 JdbcTemplate Spring 框架对 JDBC 进行封装，使用 JdbcTemplate 方便实现对数据库操作 准备工作 ①搭建子模块 搭建子模块：spring6-transaction ②加入依赖 &lt;dependencies&gt; &lt;!--spring jdbc Spring 持久化层支持jar包--&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt; &lt;version&gt;6.0.2&lt;/version&gt; &lt;/dependency&gt; &lt;!-- MySQL驱动 --&gt; &lt;dependency&gt; &lt;groupId&gt;mysql&lt;/groupId&gt; &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt; &lt;version&gt;8.0.33&lt;/version&gt; &lt;/dependency&gt; &lt;!-- 数据源 --&gt; &lt;dependency&gt; &lt;groupId&gt;com.alibaba&lt;/groupId&gt; &lt;artifactId&gt;druid&lt;/artifactId&gt; &lt;version&gt;1.2.15&lt;/version&gt; &lt;/dependency&gt; &lt;/dependencies&gt;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"CoderMast\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Spring - 事务\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"CoderMast\\\",\\\"url\\\":\\\"https://www.codermast.com\\\",\\\"email\\\":\\\"codermast@163.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"JdbcTemplate\",\"slug\":\"jdbctemplate\",\"link\":\"#jdbctemplate\",\"children\":[{\"level\":3,\"title\":\"准备工作\",\"slug\":\"准备工作\",\"link\":\"#准备工作\",\"children\":[]},{\"level\":3,\"title\":\"实现CURD\",\"slug\":\"实现curd\",\"link\":\"#实现curd\",\"children\":[]}]},{\"level\":2,\"title\":\"事务概念\",\"slug\":\"事务概念\",\"link\":\"#事务概念\",\"children\":[{\"level\":3,\"title\":\"事务基本概念\",\"slug\":\"事务基本概念\",\"link\":\"#事务基本概念\",\"children\":[]},{\"level\":3,\"title\":\"编程式事务\",\"slug\":\"编程式事务\",\"link\":\"#编程式事务\",\"children\":[]},{\"level\":3,\"title\":\"声明式事务\",\"slug\":\"声明式事务\",\"link\":\"#声明式事务\",\"children\":[]}]},{\"level\":2,\"title\":\"基于注解的声明式事务\",\"slug\":\"基于注解的声明式事务\",\"link\":\"#基于注解的声明式事务\",\"children\":[{\"level\":3,\"title\":\"准备工作\",\"slug\":\"准备工作-1\",\"link\":\"#准备工作-1\",\"children\":[]},{\"level\":3,\"title\":\"测试无事务情况\",\"slug\":\"测试无事务情况\",\"link\":\"#测试无事务情况\",\"children\":[]},{\"level\":3,\"title\":\"加入事务\",\"slug\":\"加入事务\",\"link\":\"#加入事务\",\"children\":[]},{\"level\":3,\"title\":\"@Transactional注解标识的位置\",\"slug\":\"transactional注解标识的位置\",\"link\":\"#transactional注解标识的位置\",\"children\":[]},{\"level\":3,\"title\":\"事务属性：只读\",\"slug\":\"事务属性-只读\",\"link\":\"#事务属性-只读\",\"children\":[]},{\"level\":3,\"title\":\"事务属性：超时\",\"slug\":\"事务属性-超时\",\"link\":\"#事务属性-超时\",\"children\":[]},{\"level\":3,\"title\":\"事务属性：回滚策略\",\"slug\":\"事务属性-回滚策略\",\"link\":\"#事务属性-回滚策略\",\"children\":[]},{\"level\":3,\"title\":\"事务属性：隔离级别\",\"slug\":\"事务属性-隔离级别\",\"link\":\"#事务属性-隔离级别\",\"children\":[]},{\"level\":3,\"title\":\"事务属性：传播行为\",\"slug\":\"事务属性-传播行为\",\"link\":\"#事务属性-传播行为\",\"children\":[]},{\"level\":3,\"title\":\"全注解配置事务\",\"slug\":\"全注解配置事务\",\"link\":\"#全注解配置事务\",\"children\":[]}]},{\"level\":2,\"title\":\"基于XML的声明式事务\",\"slug\":\"基于xml的声明式事务\",\"link\":\"#基于xml的声明式事务\",\"children\":[{\"level\":3,\"title\":\"场景模拟\",\"slug\":\"场景模拟\",\"link\":\"#场景模拟\",\"children\":[]},{\"level\":3,\"title\":\"修改Spring配置文件\",\"slug\":\"修改spring配置文件\",\"link\":\"#修改spring配置文件\",\"children\":[]}]}],\"readingTime\":{\"minutes\":15.92,\"words\":4777},\"filePathRelative\":\"java/spring-series/spring/spring-transaction.md\",\"excerpt\":\"<h1> Spring - 事务</h1>\\n<h2> JdbcTemplate</h2>\\n<p>Spring 框架对 JDBC 进行封装，使用 JdbcTemplate 方便实现对数据库操作</p>\\n<h3> 准备工作</h3>\\n<p><strong>①搭建子模块</strong></p>\\n<p>搭建子模块：spring6-transaction</p>\\n<p><strong>②加入依赖</strong></p>\\n<div class=\\\"language-xml line-numbers-mode\\\" data-ext=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependencies</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token comment\\\">&lt;!--spring jdbc  Spring 持久化层支持jar包--&gt;</span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-jdbc<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>6.0.2<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token comment\\\">&lt;!-- MySQL驱动 --&gt;</span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>mysql<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>mysql-connector-java<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>8.0.33<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token comment\\\">&lt;!-- 数据源 --&gt;</span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>com.alibaba<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>druid<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>1.2.15<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependencies</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
