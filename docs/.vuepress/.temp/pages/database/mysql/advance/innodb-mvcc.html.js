export const data = JSON.parse("{\"key\":\"v-62ba2d7c\",\"path\":\"/database/mysql/advance/innodb-mvcc.html\",\"title\":\"MVCC多版本并发控制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":10,\"description\":\"MVCC多版本并发控制 概念介绍 MVCC MVCC全称为Multi-Version Concurrency Control，多版本并发控制。指维护一个数据的多个版本，使得读写操作没有冲突，快照读为MySQL实现MVCC提供了一个非阻塞读功能。MVCC的具体实现，还需要依赖于数据库记录中的三个隐藏字段、undo log 日志、readView。 当前读 读取的是记录的最新版本，读取时还要保证其他并发事务不能修改当前记录，会对读取的记录进行加锁。对于我们日常的操作，如： select ... lock in share mode （共享锁），select ... for update 、insert、delete（排他锁）都是一种当前读。\"},\"headers\":[{\"level\":2,\"title\":\"概念介绍\",\"slug\":\"概念介绍\",\"link\":\"#概念介绍\",\"children\":[{\"level\":3,\"title\":\"MVCC\",\"slug\":\"mvcc\",\"link\":\"#mvcc\",\"children\":[]},{\"level\":3,\"title\":\"当前读\",\"slug\":\"当前读\",\"link\":\"#当前读\",\"children\":[]},{\"level\":3,\"title\":\"快照读\",\"slug\":\"快照读\",\"link\":\"#快照读\",\"children\":[]}]},{\"level\":2,\"title\":\"实现原理\",\"slug\":\"实现原理\",\"link\":\"#实现原理\",\"children\":[]},{\"level\":2,\"title\":\"Undo Log\",\"slug\":\"undo-log\",\"link\":\"#undo-log\",\"children\":[]},{\"level\":2,\"title\":\"Undo Log 版本链\",\"slug\":\"undo-log-版本链\",\"link\":\"#undo-log-版本链\",\"children\":[]},{\"level\":2,\"title\":\"ReadView 读视图\",\"slug\":\"readview-读视图\",\"link\":\"#readview-读视图\",\"children\":[{\"level\":3,\"title\":\"版本链数据访问规则\",\"slug\":\"版本链数据访问规则\",\"link\":\"#版本链数据访问规则\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.15,\"words\":946},\"filePathRelative\":\"database/mysql/advance/innodb-mvcc.md\",\"excerpt\":\"<h1> MVCC多版本并发控制</h1>\\n<h2> 概念介绍</h2>\\n<h3> MVCC</h3>\\n<p>MVCC全称为Multi-Version Concurrency Control，多版本并发控制。指维护一个数据的多个版本，使得读写操作没有冲突，快照读为MySQL实现MVCC提供了一个非阻塞读功能。MVCC的具体实现，还需要依赖于数据库记录中的三个隐藏字段、undo log 日志、readView。</p>\\n<h3> 当前读</h3>\\n<p>读取的是记录的最新版本，读取时还要保证其他并发事务不能修改当前记录，会对读取的记录进行加锁。对于我们日常的操作，如：\\nselect ... lock in share mode （共享锁），select ... for update 、insert、delete（排他锁）都是一种当前读。</p>\",\"autoDesc\":true}")

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
