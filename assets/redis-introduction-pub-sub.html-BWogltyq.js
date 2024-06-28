import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,a as i}from"./app-CDVWaJmN.js";const a="/assets/2023-05-17-00-38-39-BAAai3-Y.png",o="/assets/2023-05-17-00-38-56-BCnLfvRk.png",c={},s=i('<h1 id="redis入门-发布订阅" tabindex="-1"><a class="header-anchor" href="#redis入门-发布订阅"><span>Redis入门 - 发布订阅</span></a></h1><p>Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。</p><p>此种模式下，消息发布者和订阅者不进行直接通信，发布者客户端向指定的频道（channel） 发布消息，订阅该频道的每个客户端都可以收到该消息，</p><p>Redis 客户端可以订阅任意数量的频道。</p><p>下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系：<br><img src="'+a+'" alt="" loading="lazy"></p><p>当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端：</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Redis发布订阅命令：</p><ul><li>订阅一个或多个频道：<code>subscribe channel1 [channel2 ... ]</code></li><li>退订一个或多个频道：<code>unsubscribe [channel [channel ...]]</code></li><li>订阅给定模式频道：<code>psubscribe pattern [pattern ...]</code></li><li>退订给定模式频道：<code>punsubscribe [pattern [pattern ...]]</code></li><li>发布命令：<code>publish channel message</code></li><li>查看订阅与发布系统状态：<code>pubsub subcommand [argument [argument ...]]</code></li></ul>',9),r=[s];function p(d,l){return t(),n("div",null,r)}const b=e(c,[["render",p],["__file","redis-introduction-pub-sub.html.vue"]]),h=JSON.parse('{"path":"/database/redis/introduce/redis-introduction-pub-sub.html","title":"Redis入门 - 发布订阅","lang":"zh-CN","frontmatter":{"order":5,"description":"Redis入门 - 发布订阅 Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。 此种模式下，消息发布者和订阅者不进行直接通信，发布者客户端向指定的频道（channel） 发布消息，订阅该频道的每个客户端都可以收到该消息， Redis 客户端可以订阅任意数量的频道。 下图展示了频道...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/introduce/redis-introduction-pub-sub.html"}],["meta",{"property":"og:site_name","content":"编程笔记"}],["meta",{"property":"og:title","content":"Redis入门 - 发布订阅"}],["meta",{"property":"og:description","content":"Redis入门 - 发布订阅 Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。 此种模式下，消息发布者和订阅者不进行直接通信，发布者客户端向指定的频道（channel） 发布消息，订阅该频道的每个客户端都可以收到该消息， Redis 客户端可以订阅任意数量的频道。 下图展示了频道..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T07:38:39.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-05-31T07:38:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis入门 - 发布订阅\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-31T07:38:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[],"git":{"createdTime":1684256973000,"updatedTime":1717141119000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":0.92,"words":275},"filePathRelative":"database/redis/introduce/redis-introduction-pub-sub.md","localizedDate":"2023年5月16日","autoDesc":true,"excerpt":"\\n<p>Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。</p>\\n<p>此种模式下，消息发布者和订阅者不进行直接通信，发布者客户端向指定的频道（channel） 发布消息，订阅该频道的每个客户端都可以收到该消息，</p>\\n<p>Redis 客户端可以订阅任意数量的频道。</p>\\n<p>下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系：<br>\\n</p>\\n<p>当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端：</p>"}');export{b as comp,h as data};
