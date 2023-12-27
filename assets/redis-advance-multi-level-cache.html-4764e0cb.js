const e=JSON.parse('{"key":"v-6a3d1060","path":"/database/redis/redis-advance-multi-level-cache.html","title":"Redis进阶 - 多级缓存","lang":"zh-CN","frontmatter":{"order":19,"description":"Redis进阶 - 多级缓存 安装OpenResty 在正式安装 OpenResty 之前，我们需要了解它是干什么的。 OpenResty® 是一个基于 Nginx 与 Lua 的高性能 Web 平台，其内部集成了大量精良的 Lua 库、第三方模块以及大多数的依赖项。用于方便地搭建能够处理超高并发、扩展性极高的动态 Web 应用、Web 服务和动态网关。 OpenResty® 通过汇聚各种设计精良的 Nginx 模块（主要由 OpenResty 团队自主开发），从而将 Nginx 有效地变成一个强大的通用 Web 应用平台。这样，Web 开发人员和系统工程师可以使用 Lua 脚本语言调动 Nginx 支持的各种 C 以及 Lua 模块，快速构造出足以胜任 10K 乃至 1000K 以上单机并发连接的高性能 Web 应用系统。","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-advance-multi-level-cache.html"}],["meta",{"property":"og:site_name","content":"编程桅杆"}],["meta",{"property":"og:title","content":"Redis进阶 - 多级缓存"}],["meta",{"property":"og:description","content":"Redis进阶 - 多级缓存 安装OpenResty 在正式安装 OpenResty 之前，我们需要了解它是干什么的。 OpenResty® 是一个基于 Nginx 与 Lua 的高性能 Web 平台，其内部集成了大量精良的 Lua 库、第三方模块以及大多数的依赖项。用于方便地搭建能够处理超高并发、扩展性极高的动态 Web 应用、Web 服务和动态网关。 OpenResty® 通过汇聚各种设计精良的 Nginx 模块（主要由 OpenResty 团队自主开发），从而将 Nginx 有效地变成一个强大的通用 Web 应用平台。这样，Web 开发人员和系统工程师可以使用 Lua 脚本语言调动 Nginx 支持的各种 C 以及 Lua 模块，快速构造出足以胜任 10K 乃至 1000K 以上单机并发连接的高性能 Web 应用系统。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-27T07:45:48.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-08-27T07:45:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis进阶 - 多级缓存\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-27T07:45:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"安装OpenResty","slug":"安装openresty","link":"#安装openresty","children":[{"level":3,"title":"1.安装","slug":"_1-安装","link":"#_1-安装","children":[]},{"level":3,"title":"2.启动和运行","slug":"_2-启动和运行","link":"#_2-启动和运行","children":[]},{"level":3,"title":"3.备注","slug":"_3-备注","link":"#_3-备注","children":[]}]},{"level":2,"title":"OpenResty快速入门","slug":"openresty快速入门","link":"#openresty快速入门","children":[{"level":3,"title":"步骤1 修改nginx.conf文件","slug":"步骤1-修改nginx-conf文件","link":"#步骤1-修改nginx-conf文件","children":[]},{"level":3,"title":"步骤2 编写item.lua文件","slug":"步骤2-编写item-lua文件","link":"#步骤2-编写item-lua文件","children":[]}]},{"level":2,"title":"OpenResty获取请求参数","slug":"openresty获取请求参数","link":"#openresty获取请求参数","children":[]},{"level":2,"title":"封装Http请求工具","slug":"封装http请求工具","link":"#封装http请求工具","children":[]},{"level":2,"title":"向Tomcat发送http请求","slug":"向tomcat发送http请求","link":"#向tomcat发送http请求","children":[]},{"level":2,"title":"根据商品id对Tomcat集群负载均衡","slug":"根据商品id对tomcat集群负载均衡","link":"#根据商品id对tomcat集群负载均衡","children":[]},{"level":2,"title":"Redis缓存预热","slug":"redis缓存预热","link":"#redis缓存预热","children":[]},{"level":2,"title":"查询Redis","slug":"查询redis","link":"#查询redis","children":[]},{"level":2,"title":"Nginx本地缓存","slug":"nginx本地缓存","link":"#nginx本地缓存","children":[]}],"git":{"createdTime":1687512750000,"updatedTime":1693122348000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":3}]},"readingTime":{"minutes":5.2,"words":1561},"filePathRelative":"database/redis/redis-advance-multi-level-cache.md","localizedDate":"2023年6月23日","excerpt":"<h1> Redis进阶 - 多级缓存</h1>\\n<h2> 安装OpenResty</h2>\\n<p>在正式安装 OpenResty 之前，我们需要了解它是干什么的。</p>\\n<p>OpenResty® 是一个基于 Nginx 与 Lua 的高性能 Web 平台，其内部集成了大量精良的 Lua 库、第三方模块以及大多数的依赖项。用于方便地搭建能够处理超高并发、扩展性极高的动态 Web 应用、Web 服务和动态网关。</p>\\n<p>OpenResty® 通过汇聚各种设计精良的 Nginx 模块（主要由 OpenResty 团队自主开发），从而将 Nginx 有效地变成一个强大的通用 Web 应用平台。这样，Web 开发人员和系统工程师可以使用 Lua 脚本语言调动 Nginx 支持的各种 C 以及 Lua 模块，快速构造出足以胜任 10K 乃至 1000K 以上单机并发连接的高性能 Web 应用系统。</p>","autoDesc":true}');export{e as data};
