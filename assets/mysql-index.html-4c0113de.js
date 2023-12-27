const e=JSON.parse('{"key":"v-60dc87cc","path":"/database/mysql/mysql-index.html","title":"MySQL进阶 - 索引","lang":"zh-CN","frontmatter":{"order":13,"description":"MySQL进阶 - 索引 索引概述 概念 索引是帮助MySQL的数据结构（有序）。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式饮用（指向）数据，这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。 优缺点 优点 提高数据检索的效率，降低数据库的IO成本 通过索引列对数据进行排序，降低数据排序的成本，降低CPU的消耗 缺点","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/mysql/mysql-index.html"}],["meta",{"property":"og:site_name","content":"编程桅杆"}],["meta",{"property":"og:title","content":"MySQL进阶 - 索引"}],["meta",{"property":"og:description","content":"MySQL进阶 - 索引 索引概述 概念 索引是帮助MySQL的数据结构（有序）。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式饮用（指向）数据，这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。 优缺点 优点 提高数据检索的效率，降低数据库的IO成本 通过索引列对数据进行排序，降低数据排序的成本，降低CPU的消耗 缺点"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-13T13:22:27.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-06-13T13:22:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL进阶 - 索引\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-13T13:22:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"索引概述","slug":"索引概述","link":"#索引概述","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]}]},{"level":2,"title":"索引结构","slug":"索引结构","link":"#索引结构","children":[{"level":3,"title":"二叉树","slug":"二叉树","link":"#二叉树","children":[]},{"level":3,"title":"红黑树","slug":"红黑树","link":"#红黑树","children":[]},{"level":3,"title":"B树","slug":"b树","link":"#b树","children":[]},{"level":3,"title":"B+树","slug":"b-树","link":"#b-树","children":[]},{"level":3,"title":"优化的B+树","slug":"优化的b-树","link":"#优化的b-树","children":[]},{"level":3,"title":"Hash","slug":"hash","link":"#hash","children":[]},{"level":3,"title":"思考","slug":"思考","link":"#思考","children":[]},{"level":3,"title":"存储引擎支持","slug":"存储引擎支持","link":"#存储引擎支持","children":[]}]},{"level":2,"title":"索引分类","slug":"索引分类","link":"#索引分类","children":[{"level":3,"title":"回表查询","slug":"回表查询","link":"#回表查询","children":[]},{"level":3,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}]},{"level":2,"title":"索引语法","slug":"索引语法","link":"#索引语法","children":[]},{"level":2,"title":"索引使用","slug":"索引使用","link":"#索引使用","children":[{"level":3,"title":"索引失效场景","slug":"索引失效场景","link":"#索引失效场景","children":[]},{"level":3,"title":"SQL提示","slug":"sql提示","link":"#sql提示","children":[]},{"level":3,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]},{"level":3,"title":"前缀索引","slug":"前缀索引","link":"#前缀索引","children":[]},{"level":3,"title":"单列/联合索引","slug":"单列-联合索引","link":"#单列-联合索引","children":[]}]},{"level":2,"title":"索引设计原则","slug":"索引设计原则","link":"#索引设计原则","children":[]}],"git":{"createdTime":1686662050000,"updatedTime":1686662547000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":2}]},"readingTime":{"minutes":12.44,"words":3733},"filePathRelative":"database/mysql/mysql-index.md","localizedDate":"2023年6月13日","excerpt":"<h1> MySQL进阶 - 索引</h1>\\n<h2> 索引概述</h2>\\n<h3> 概念</h3>\\n<p>索引是帮助MySQL的<code>数据结构</code>（有序）。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式饮用（指向）数据，这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。</p>\\n<h3> 优缺点</h3>\\n<ul>\\n<li>优点</li>\\n</ul>\\n<ol>\\n<li>提高数据检索的效率，降低数据库的IO成本</li>\\n<li>通过索引列对数据进行排序，降低数据排序的成本，降低CPU的消耗</li>\\n</ol>\\n<ul>\\n<li>缺点</li>\\n</ul>","autoDesc":true}');export{e as data};
