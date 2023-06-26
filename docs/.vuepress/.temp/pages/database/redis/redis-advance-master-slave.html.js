export const data = JSON.parse("{\"key\":\"v-2e845f3e\",\"path\":\"/database/redis/redis-advance-master-slave.html\",\"title\":\"Redis进阶 - Redis主从\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":14,\"description\":\"Redis进阶 - Redis主从 搭建主从架构 单节点 Redis 的并发能力是有上限的，要进一步提高 Redis 的并发能力，就需要搭建主从集群，实现读写分离。 在 Redis 5.0 以前，从节点都叫做 slave，在 5.0 版本以后被称为 replica，本质上是一个东西。 1.集群结构 我们搭建的主从集群结构如图： 共包含三个节点，一个主节点，两个从节点。\"},\"headers\":[{\"level\":2,\"title\":\"搭建主从架构\",\"slug\":\"搭建主从架构\",\"link\":\"#搭建主从架构\",\"children\":[{\"level\":3,\"title\":\"1.集群结构\",\"slug\":\"_1-集群结构\",\"link\":\"#_1-集群结构\",\"children\":[]},{\"level\":3,\"title\":\"2.准备实例和配置\",\"slug\":\"_2-准备实例和配置\",\"link\":\"#_2-准备实例和配置\",\"children\":[]},{\"level\":3,\"title\":\"3.启动\",\"slug\":\"_3-启动\",\"link\":\"#_3-启动\",\"children\":[]},{\"level\":3,\"title\":\"4.开启主从关系\",\"slug\":\"_4-开启主从关系\",\"link\":\"#_4-开启主从关系\",\"children\":[]},{\"level\":3,\"title\":\"5.测试\",\"slug\":\"_5-测试\",\"link\":\"#_5-测试\",\"children\":[]}]},{\"level\":2,\"title\":\"数据同步原理\",\"slug\":\"数据同步原理\",\"link\":\"#数据同步原理\",\"children\":[{\"level\":3,\"title\":\"全量同步\",\"slug\":\"全量同步\",\"link\":\"#全量同步\",\"children\":[]},{\"level\":3,\"title\":\"增量同步\",\"slug\":\"增量同步\",\"link\":\"#增量同步\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":5.92,\"words\":1777},\"filePathRelative\":\"database/redis/redis-advance-master-slave.md\",\"excerpt\":\"<h1> Redis进阶 - Redis主从</h1>\\n<h2> 搭建主从架构</h2>\\n<p>单节点 Redis 的并发能力是有上限的，要进一步提高 Redis 的并发能力，就需要搭建主从集群，实现读写分离。</p>\\n<blockquote>\\n<p>在 Redis 5.0 以前，从节点都叫做 slave，在 5.0 版本以后被称为 replica，本质上是一个东西。</p>\\n</blockquote>\\n<h3> 1.集群结构</h3>\\n<p>我们搭建的主从集群结构如图：</p>\\n<figure><figcaption></figcaption></figure>\\n<p>共包含三个节点，一个主节点，两个从节点。</p>\",\"autoDesc\":true}")

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