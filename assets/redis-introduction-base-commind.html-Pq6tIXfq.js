import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,a as r}from"./app-BmK6V31l.js";const d={},i=r('<h1 id="redis入门-基础通用指令" tabindex="-1"><a class="header-anchor" href="#redis入门-基础通用指令"><span>Redis入门 - 基础通用指令</span></a></h1><p>在正式介绍Redis数据结构及其操作指令之前，我们需要先掌握一些最基础的通用指令。</p><p>这些都是Redis操作过程中的一些常见指令</p><table><thead><tr><th style="text-align:center;">指令</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">keys</td><td style="text-align:center;">查看符合模板的所有key，不建议在⽣产环境设备上使⽤</td></tr><tr><td style="text-align:center;">del</td><td style="text-align:center;">删除⼀个指定的key</td></tr><tr><td style="text-align:center;">esists</td><td style="text-align:center;">判断key是否存在</td></tr><tr><td style="text-align:center;">expire</td><td style="text-align:center;">给⼀个key设置有效期，有效期到期时该key会被⾃动删除</td></tr><tr><td style="text-align:center;">ttl</td><td style="text-align:center;">查看⼀个KEY的剩余有效期</td></tr><tr><td style="text-align:center;">quit</td><td style="text-align:center;">退出</td></tr><tr><td style="text-align:center;">shutdown</td><td style="text-align:center;">关闭服务器</td></tr><tr><td style="text-align:center;">select [0-15]</td><td style="text-align:center;">选择指定的数据库</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">help指令</p><p>可以通过 help [command]可以查看⼀个命令的具体⽤法！</p><p>例如查看set指令的帮助文档：<code>help set</code></p></div>',5),a=[i];function s(l,c){return e(),n("div",null,a)}const y=t(d,[["render",s],["__file","redis-introduction-base-commind.html.vue"]]),m=JSON.parse('{"path":"/database/redis/introduce/redis-introduction-base-commind.html","title":"Redis入门 - 基础通用指令","lang":"zh-CN","frontmatter":{"order":2,"description":"Redis入门 - 基础通用指令 在正式介绍Redis数据结构及其操作指令之前，我们需要先掌握一些最基础的通用指令。 这些都是Redis操作过程中的一些常见指令 help指令 可以通过 help [command]可以查看⼀个命令的具体⽤法！ 例如查看set指令的帮助文档：help set","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/introduce/redis-introduction-base-commind.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Redis入门 - 基础通用指令"}],["meta",{"property":"og:description","content":"Redis入门 - 基础通用指令 在正式介绍Redis数据结构及其操作指令之前，我们需要先掌握一些最基础的通用指令。 这些都是Redis操作过程中的一些常见指令 help指令 可以通过 help [command]可以查看⼀个命令的具体⽤法！ 例如查看set指令的帮助文档：help set"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T07:38:39.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-05-31T07:38:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis入门 - 基础通用指令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-31T07:38:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[],"git":{"createdTime":1684250238000,"updatedTime":1717141119000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"database/redis/introduce/redis-introduction-base-commind.md","localizedDate":"2023年5月16日","autoDesc":true,"excerpt":"\\n<p>在正式介绍Redis数据结构及其操作指令之前，我们需要先掌握一些最基础的通用指令。</p>\\n<p>这些都是Redis操作过程中的一些常见指令</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">指令</th>\\n<th style=\\"text-align:center\\">描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\">keys</td>\\n<td style=\\"text-align:center\\">查看符合模板的所有key，不建议在⽣产环境设备上使⽤</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">del</td>\\n<td style=\\"text-align:center\\">删除⼀个指定的key</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">esists</td>\\n<td style=\\"text-align:center\\">判断key是否存在</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">expire</td>\\n<td style=\\"text-align:center\\">给⼀个key设置有效期，有效期到期时该key会被⾃动删除</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">ttl</td>\\n<td style=\\"text-align:center\\">查看⼀个KEY的剩余有效期</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">quit</td>\\n<td style=\\"text-align:center\\">退出</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">shutdown</td>\\n<td style=\\"text-align:center\\">关闭服务器</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">select [0-15]</td>\\n<td style=\\"text-align:center\\">选择指定的数据库</td>\\n</tr>\\n</tbody>\\n</table>"}');export{y as comp,m as data};
