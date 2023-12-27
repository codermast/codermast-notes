const e=JSON.parse('{"key":"v-3420ecf3","path":"/database/redis/redis-principle-datastruct-underlying-implementation.html","title":"Redis原理 - 数据结构的底层实现","lang":"zh-CN","frontmatter":{"order":26,"description":"Redis原理 - 数据结构的底层实现 动态字符串SDS 基本概念 Redis 中保存的 Key 是字符串，Value 往往是字符串或者字符串的集合。可见字符串是 Redis 中最常见的一种数据结构。 Redis 是使用 C 语言来编写的，C 语言中也有字符串，但是 Redis 中并没有直接使用 C 语言的字符串，这是因为 C 语言中字符串存在着很多的问题： 获取字符串长度需要进行运算 非二进制安全，不能包含特殊字符 因为C字符串以空字符作为字符串结束的标识，而对于一些二进制文件（如图片等），内容可能包括空字符串，因此C字符串无法正确存取；而所有 SDS 的API 都是以处理二进制的方式来处理 buf 里面的元素，并且 SDS 不是以空字符串来判断是否结束，而是以 len 属性表示的长度来判断字符串是否结束。","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-principle-datastruct-underlying-implementation.html"}],["meta",{"property":"og:site_name","content":"编程桅杆"}],["meta",{"property":"og:title","content":"Redis原理 - 数据结构的底层实现"}],["meta",{"property":"og:description","content":"Redis原理 - 数据结构的底层实现 动态字符串SDS 基本概念 Redis 中保存的 Key 是字符串，Value 往往是字符串或者字符串的集合。可见字符串是 Redis 中最常见的一种数据结构。 Redis 是使用 C 语言来编写的，C 语言中也有字符串，但是 Redis 中并没有直接使用 C 语言的字符串，这是因为 C 语言中字符串存在着很多的问题： 获取字符串长度需要进行运算 非二进制安全，不能包含特殊字符 因为C字符串以空字符作为字符串结束的标识，而对于一些二进制文件（如图片等），内容可能包括空字符串，因此C字符串无法正确存取；而所有 SDS 的API 都是以处理二进制的方式来处理 buf 里面的元素，并且 SDS 不是以空字符串来判断是否结束，而是以 len 属性表示的长度来判断字符串是否结束。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-23T09:32:30.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-06-23T09:32:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis原理 - 数据结构的底层实现\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-23T09:32:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"动态字符串SDS","slug":"动态字符串sds","link":"#动态字符串sds","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"底层实现","slug":"底层实现","link":"#底层实现","children":[]},{"level":3,"title":"内存预分配","slug":"内存预分配","link":"#内存预分配","children":[]},{"level":3,"title":"SDS小结","slug":"sds小结","link":"#sds小结","children":[]}]},{"level":2,"title":"整数集IntSet","slug":"整数集intset","link":"#整数集intset","children":[{"level":3,"title":"基本概念","slug":"基本概念-1","link":"#基本概念-1","children":[]},{"level":3,"title":"底层实现","slug":"底层实现-1","link":"#底层实现-1","children":[]},{"level":3,"title":"数组扩容","slug":"数组扩容","link":"#数组扩容","children":[]},{"level":3,"title":"IntSet小结","slug":"intset小结","link":"#intset小结","children":[]}]},{"level":2,"title":"字典/哈希表Dict","slug":"字典-哈希表dict","link":"#字典-哈希表dict","children":[{"level":3,"title":"基本概念","slug":"基本概念-2","link":"#基本概念-2","children":[]},{"level":3,"title":"底层实现","slug":"底层实现-2","link":"#底层实现-2","children":[]},{"level":3,"title":"扩容收缩","slug":"扩容收缩","link":"#扩容收缩","children":[]},{"level":3,"title":"ReHash","slug":"rehash","link":"#rehash","children":[]},{"level":3,"title":"Dict小结","slug":"dict小结","link":"#dict小结","children":[]}]},{"level":2,"title":"压缩列表ZipList","slug":"压缩列表ziplist","link":"#压缩列表ziplist","children":[{"level":3,"title":"ZipListEntry","slug":"ziplistentry","link":"#ziplistentry","children":[]},{"level":3,"title":"Encoding编码","slug":"encoding编码","link":"#encoding编码","children":[]},{"level":3,"title":"连锁更新问题","slug":"连锁更新问题","link":"#连锁更新问题","children":[]},{"level":3,"title":"ZipList小结","slug":"ziplist小结","link":"#ziplist小结","children":[]}]},{"level":2,"title":"快速列表QuickList","slug":"快速列表quicklist","link":"#快速列表quicklist","children":[{"level":3,"title":"基本概念","slug":"基本概念-3","link":"#基本概念-3","children":[]},{"level":3,"title":"底层实现","slug":"底层实现-3","link":"#底层实现-3","children":[]},{"level":3,"title":"限制压缩","slug":"限制压缩","link":"#限制压缩","children":[]},{"level":3,"title":"QuickList小结","slug":"quicklist小结","link":"#quicklist小结","children":[]}]},{"level":2,"title":"跳表SkipList","slug":"跳表skiplist","link":"#跳表skiplist","children":[{"level":3,"title":"基本概念","slug":"基本概念-4","link":"#基本概念-4","children":[]},{"level":3,"title":"底层实现","slug":"底层实现-4","link":"#底层实现-4","children":[]},{"level":3,"title":"SkipList小结","slug":"skiplist小结","link":"#skiplist小结","children":[]}]}],"git":{"createdTime":1687505989000,"updatedTime":1687512750000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":2}]},"readingTime":{"minutes":24.81,"words":7443},"filePathRelative":"database/redis/redis-principle-datastruct-underlying-implementation.md","localizedDate":"2023年6月23日","excerpt":"<h1> Redis原理 - 数据结构的底层实现</h1>\\n<h2> 动态字符串SDS</h2>\\n<h3> 基本概念</h3>\\n<p>Redis 中保存的 Key 是字符串，Value 往往是字符串或者字符串的集合。可见字符串是 Redis 中最常见的一种数据结构。</p>\\n<p>Redis 是使用 C 语言来编写的，C 语言中也有字符串，但是 Redis 中并没有直接使用 C 语言的字符串，这是因为 C 语言中字符串存在着很多的问题：</p>\\n<ul>\\n<li>获取字符串长度需要进行运算</li>\\n<li>非二进制安全，不能包含特殊字符</li>\\n</ul>\\n<blockquote>\\n<p>因为C字符串以空字符作为字符串结束的标识，而对于一些二进制文件（如图片等），内容可能包括空字符串，因此C字符串无法正确存取；而所有 SDS 的API 都是以处理二进制的方式来处理 buf 里面的元素，并且 SDS 不是以空字符串来判断是否结束，而是以 len 属性表示的长度来判断字符串是否结束。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
