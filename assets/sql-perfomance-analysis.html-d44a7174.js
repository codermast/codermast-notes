const e=JSON.parse('{"key":"v-21422c2d","path":"/database/mysql/sql-perfomance-analysis.html","title":"MySQL进阶 - SQL性能分析","lang":"zh-CN","frontmatter":{"order":14,"description":"MySQL进阶 - SQL性能分析 SQL执行频率 MySQL客户端连接成功后，通过 SHOW [session | global] status 命令可以查看服务器状态信息。 通过如下指令，可以查看当前数据库的INSERT、SELECT、UPDATE、DELETE操作的访问频次： SHOW GLOBAL STATUS LIKE \\"Com_______\\";","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/mysql/sql-perfomance-analysis.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"MySQL进阶 - SQL性能分析"}],["meta",{"property":"og:description","content":"MySQL进阶 - SQL性能分析 SQL执行频率 MySQL客户端连接成功后，通过 SHOW [session | global] status 命令可以查看服务器状态信息。 通过如下指令，可以查看当前数据库的INSERT、SELECT、UPDATE、DELETE操作的访问频次： SHOW GLOBAL STATUS LIKE \\"Com_______\\";"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-13T13:22:27.000Z"}],["meta",{"property":"article:author","content":"友人CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-06-13T13:22:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL进阶 - SQL性能分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-13T13:22:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"SQL执行频率","slug":"sql执行频率","link":"#sql执行频率","children":[]},{"level":2,"title":"慢查询日志","slug":"慢查询日志","link":"#慢查询日志","children":[]},{"level":2,"title":"Profile分析","slug":"profile分析","link":"#profile分析","children":[]},{"level":2,"title":"explain执行计划","slug":"explain执行计划","link":"#explain执行计划","children":[]}],"git":{"createdTime":1686662050000,"updatedTime":1686662547000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":2}]},"readingTime":{"minutes":3.89,"words":1166},"filePathRelative":"database/mysql/sql-perfomance-analysis.md","localizedDate":"2023年6月13日","excerpt":"<h1> MySQL进阶 - SQL性能分析</h1>\\n<h2> SQL执行频率</h2>\\n<p>MySQL客户端连接成功后，通过 SHOW [session | global] status 命令可以查看服务器状态信息。</p>\\n<p>通过如下指令，可以查看当前数据库的INSERT、SELECT、UPDATE、DELETE操作的访问频次：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">SHOW</span> <span class=\\"token keyword\\">GLOBAL</span> <span class=\\"token keyword\\">STATUS</span> <span class=\\"token operator\\">LIKE</span> <span class=\\"token string\\">\\"Com_______\\"</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
