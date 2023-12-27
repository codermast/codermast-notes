const e=JSON.parse('{"key":"v-3c43b28a","path":"/database/redis/redis-advance-sharded-cluster.html","title":"Redis进阶 - Redis分片集群","lang":"zh-CN","frontmatter":{"order":16,"description":"Redis进阶 - Redis分片集群 搭建分片集群 主从和哨兵可以解决高可用、高并发读的问题。但是依然有两个问题没有解决： 海量数据存储问题 高并发写的问题 使用分片集群可以解决上述问题，分片集群特征： 集群中有多个 master，每个 master 保存不同数据 每个 master 都可以有多个 slave 节点 master 之间通过 ping 监测彼此健康状态 客户端请求可以访问集群任意节点，最终都会被转发到正确节点","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-advance-sharded-cluster.html"}],["meta",{"property":"og:site_name","content":"编程桅杆"}],["meta",{"property":"og:title","content":"Redis进阶 - Redis分片集群"}],["meta",{"property":"og:description","content":"Redis进阶 - Redis分片集群 搭建分片集群 主从和哨兵可以解决高可用、高并发读的问题。但是依然有两个问题没有解决： 海量数据存储问题 高并发写的问题 使用分片集群可以解决上述问题，分片集群特征： 集群中有多个 master，每个 master 保存不同数据 每个 master 都可以有多个 slave 节点 master 之间通过 ping 监测彼此健康状态 客户端请求可以访问集群任意节点，最终都会被转发到正确节点"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-29T09:53:41.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-06-29T09:53:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis进阶 - Redis分片集群\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-29T09:53:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"搭建分片集群","slug":"搭建分片集群","link":"#搭建分片集群","children":[{"level":3,"title":"集群结构","slug":"集群结构","link":"#集群结构","children":[]},{"level":3,"title":"准备实例和配置","slug":"准备实例和配置","link":"#准备实例和配置","children":[]},{"level":3,"title":"启动","slug":"启动","link":"#启动","children":[]},{"level":3,"title":"创建集群","slug":"创建集群","link":"#创建集群","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}]},{"level":2,"title":"散列插槽","slug":"散列插槽","link":"#散列插槽","children":[]},{"level":2,"title":"集群伸缩","slug":"集群伸缩","link":"#集群伸缩","children":[]},{"level":2,"title":"故障转移","slug":"故障转移","link":"#故障转移","children":[]},{"level":2,"title":"RedisTemplate访问分片集群","slug":"redistemplate访问分片集群","link":"#redistemplate访问分片集群","children":[]}],"git":{"createdTime":1687512750000,"updatedTime":1688032421000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":3}]},"readingTime":{"minutes":6.77,"words":2030},"filePathRelative":"database/redis/redis-advance-sharded-cluster.md","localizedDate":"2023年6月23日","excerpt":"<h1> Redis进阶 - Redis分片集群</h1>\\n<h2> 搭建分片集群</h2>\\n<p>主从和哨兵可以解决高可用、高并发读的问题。但是依然有两个问题没有解决：</p>\\n<ul>\\n<li>海量数据存储问题</li>\\n<li>高并发写的问题</li>\\n</ul>\\n<p>使用分片集群可以解决上述问题，分片集群特征：</p>\\n<ul>\\n<li>集群中有多个 master，每个 master 保存不同数据</li>\\n<li>每个 master 都可以有多个 slave 节点</li>\\n<li>master 之间通过 ping 监测彼此健康状态</li>\\n<li>客户端请求可以访问集群任意节点，最终都会被转发到正确节点</li>\\n</ul>","autoDesc":true}');export{e as data};
