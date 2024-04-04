const e=JSON.parse('{"key":"v-06153dcd","path":"/database/redis/redis-introduction-transaction.html","title":"Redis入门 - 事务","lang":"zh-CN","frontmatter":{"order":6,"description":"Redis入门 - 事务 Redis 事务可以一次执行多个命令， 并且带有以下三个重要的保证： 批量操作在发送 EXEC 命令前被放入队列缓存。 收到 EXEC 命令后进入事务执行，事务中任意命令执行失败，其余的命令依然被执行。 在事务执行过程，其他客户端提交的命令请求不会插入到事务执行命令序列中。 一个事务从开始到执行会经历以下三个阶段： 开始事务。 命令入队。 执行事务。 单个 Redis 命令的执行是原子性的，但 Redis 没有在事务上增加任何维持原子性的机制，所以 Redis 事务的执行并不是原子性的。","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-introduction-transaction.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Redis入门 - 事务"}],["meta",{"property":"og:description","content":"Redis入门 - 事务 Redis 事务可以一次执行多个命令， 并且带有以下三个重要的保证： 批量操作在发送 EXEC 命令前被放入队列缓存。 收到 EXEC 命令后进入事务执行，事务中任意命令执行失败，其余的命令依然被执行。 在事务执行过程，其他客户端提交的命令请求不会插入到事务执行命令序列中。 一个事务从开始到执行会经历以下三个阶段： 开始事务。 命令入队。 执行事务。 单个 Redis 命令的执行是原子性的，但 Redis 没有在事务上增加任何维持原子性的机制，所以 Redis 事务的执行并不是原子性的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-23T07:39:49.000Z"}],["meta",{"property":"article:author","content":"友人CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-06-23T07:39:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis入门 - 事务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-23T07:39:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687505989000,"updatedTime":1687505989000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":1.38,"words":414},"filePathRelative":"database/redis/redis-introduction-transaction.md","localizedDate":"2023年6月23日","excerpt":"<h1> Redis入门 - 事务</h1>\\n<p>Redis 事务可以一次执行多个命令， 并且带有以下三个重要的保证：</p>\\n<ul>\\n<li>批量操作在发送 EXEC 命令前被放入队列缓存。</li>\\n<li>收到 EXEC 命令后进入事务执行，事务中任意命令执行失败，其余的命令依然被执行。</li>\\n<li>在事务执行过程，其他客户端提交的命令请求不会插入到事务执行命令序列中。</li>\\n</ul>\\n<p>一个事务从开始到执行会经历以下三个阶段：</p>\\n<ul>\\n<li>开始事务。</li>\\n<li>命令入队。</li>\\n<li>执行事务。</li>\\n</ul>\\n<p>单个 Redis 命令的执行是原子性的，但 Redis 没有在事务上增加任何维持原子性的机制，所以 Redis 事务的执行并不是原子性的。</p>","autoDesc":true}');export{e as data};
