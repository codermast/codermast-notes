import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as n,c as r,b as e,e as t,d as c}from"./app-PVNeLgeH.js";const h={},p=e("h1",{id:"set-hashset源码解析",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#set-hashset源码解析"},[e("span",null,"Set - HashSet源码解析")])],-1),i={class:"hint-container tip"},l=e("p",{class:"hint-container-title"},"写在前面",-1),m={href:"https://www.codermast.com/java/collection/map-hashmap.html",target:"_blank",rel:"noopener noreferrer"},d=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍"},[e("span",null,"介绍")])],-1);function _(H,S){const a=o("ExternalLinkIcon");return n(),r("div",null,[p,e("div",i,[l,e("p",null,[t("本篇主要是对 Java 中 HashSet 的源码解析，在 Java 中这两种的实现方式是类似的，HashSet 的底层存储还是使用的 HashMap，仅仅通过方法的包装来实现 Set 接口，故本篇不再赘述 HashMap 的底层存储逻辑，详情请看"),e("a",m,[t("《Map - HashMap源码解析》"),c(a)]),t("。")])]),d])}const M=s(h,[["render",_],["__file","set-hashset.html.vue"]]),f=JSON.parse('{"path":"/java/collection/set-hashset.html","title":"Set - HashSet源码解析","lang":"zh-CN","frontmatter":{"order":7,"description":"Set - HashSet源码解析 写在前面 本篇主要是对 Java 中 HashSet 的源码解析，在 Java 中这两种的实现方式是类似的，HashSet 的底层存储还是使用的 HashMap，仅仅通过方法的包装来实现 Set 接口，故本篇不再赘述 HashMap 的底层存储逻辑，详情请看《Map - HashMap源码解析》。 介绍","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/java/collection/set-hashset.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Set - HashSet源码解析"}],["meta",{"property":"og:description","content":"Set - HashSet源码解析 写在前面 本篇主要是对 Java 中 HashSet 的源码解析，在 Java 中这两种的实现方式是类似的，HashSet 的底层存储还是使用的 HashMap，仅仅通过方法的包装来实现 Set 接口，故本篇不再赘述 HashMap 的底层存储逻辑，详情请看《Map - HashMap源码解析》。 介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-04T20:43:29.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-04-04T20:43:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Set - HashSet源码解析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-04T20:43:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]}],"git":{"createdTime":1712263409000,"updatedTime":1712263409000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":0.33,"words":99},"filePathRelative":"java/collection/set-hashset.md","localizedDate":"2024年4月4日","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">写在前面</p>\\n<p>本篇主要是对 Java 中 HashSet 的源码解析，在 Java 中这两种的实现方式是类似的，HashSet 的底层存储还是使用的 HashMap，仅仅通过方法的包装来实现 Set 接口，故本篇不再赘述 HashMap 的底层存储逻辑，详情请看<a href=\\"https://www.codermast.com/java/collection/map-hashmap.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《Map - HashMap源码解析》</a>。</p>\\n</div>"}');export{M as comp,f as data};
