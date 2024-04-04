import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,a as c}from"./app-73bcf052.js";const s="/assets/2023-05-17-00-38-39-9cbaa0d0.png",t="/assets/2023-05-17-00-38-56-a994e1e6.png",a={},o=c('<h1 id="redis入门-发布订阅" tabindex="-1"><a class="header-anchor" href="#redis入门-发布订阅" aria-hidden="true">#</a> Redis入门 - 发布订阅</h1><p>Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。</p><p>此种模式下，消息发布者和订阅者不进行直接通信，发布者客户端向指定的频道（channel） 发布消息，订阅该频道的每个客户端都可以收到该消息，</p><p>Redis 客户端可以订阅任意数量的频道。</p><p>下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系：<br><img src="'+s+'" alt="" loading="lazy"></p><p>当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端：</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Redis发布订阅命令：</p><ul><li>订阅一个或多个频道：<code>subscribe channel1 [channel2 ... ]</code></li><li>退订一个或多个频道：<code>unsubscribe [channel [channel ...]]</code></li><li>订阅给定模式频道：<code>psubscribe pattern [pattern ...]</code></li><li>退订给定模式频道：<code>punsubscribe [pattern [pattern ...]]</code></li><li>发布命令：<code>publish channel message</code></li><li>查看订阅与发布系统状态：<code>pubsub subcommand [argument [argument ...]]</code></li></ul>',9),l=[o];function r(d,p){return i(),n("div",null,l)}const h=e(a,[["render",r],["__file","redis-introduction-pub-sub.html.vue"]]);export{h as default};
