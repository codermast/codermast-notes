const e=JSON.parse('{"key":"v-20c7d348","path":"/database/redis/redis-advance-cache-issues.html","title":"Redis进阶 - 缓存问题","lang":"zh-CN","frontmatter":{"order":13,"description":"Redis进阶 - 缓存问题 缓存 缓存就是数据交换的缓冲区（Cache），是存储数据的临时地方，一般读写性能比较高。 例如 内存是硬盘的缓存 cache 是内存的缓存 作用 降低后端负载 提高读写效率，降低响应时间 成本 数据一致性成本 代码维护成本","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-advance-cache-issues.html"}],["meta",{"property":"og:site_name","content":"编程桅杆"}],["meta",{"property":"og:title","content":"Redis进阶 - 缓存问题"}],["meta",{"property":"og:description","content":"Redis进阶 - 缓存问题 缓存 缓存就是数据交换的缓冲区（Cache），是存储数据的临时地方，一般读写性能比较高。 例如 内存是硬盘的缓存 cache 是内存的缓存 作用 降低后端负载 提高读写效率，降低响应时间 成本 数据一致性成本 代码维护成本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-23T07:39:49.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-06-23T07:39:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis进阶 - 缓存问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-23T07:39:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"缓存","slug":"缓存","link":"#缓存","children":[]},{"level":2,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[]},{"level":2,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[]},{"level":2,"title":"缓存击穿","slug":"缓存击穿","link":"#缓存击穿","children":[]},{"level":2,"title":"缓存污染","slug":"缓存污染","link":"#缓存污染","children":[]},{"level":2,"title":"缓存更新策略","slug":"缓存更新策略","link":"#缓存更新策略","children":[{"level":3,"title":"主动更新策略","slug":"主动更新策略","link":"#主动更新策略","children":[]}]},{"level":2,"title":"缓存淘汰策略","slug":"缓存淘汰策略","link":"#缓存淘汰策略","children":[]}],"git":{"createdTime":1687505989000,"updatedTime":1687505989000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":5.55,"words":1666},"filePathRelative":"database/redis/redis-advance-cache-issues.md","localizedDate":"2023年6月23日","excerpt":"<h1> Redis进阶 - 缓存问题</h1>\\n<h2> 缓存</h2>\\n<p>缓存就是数据交换的缓冲区（Cache），是存储数据的临时地方，一般读写性能比较高。</p>\\n<ul>\\n<li>例如</li>\\n</ul>\\n<ol>\\n<li>内存是硬盘的缓存</li>\\n<li>cache 是内存的缓存</li>\\n</ol>\\n<ul>\\n<li>作用</li>\\n</ul>\\n<ol>\\n<li>降低后端负载</li>\\n<li>提高读写效率，降低响应时间</li>\\n</ol>\\n<ul>\\n<li>成本</li>\\n</ul>\\n<ol>\\n<li>数据一致性成本</li>\\n<li>代码维护成本</li>\\n</ol>","autoDesc":true}');export{e as data};
