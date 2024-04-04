const n=JSON.parse('{"key":"v-53cb8d26","path":"/spring-series/spring/spring-aop.html","title":"Spring - 面向切面AOP","lang":"zh-CN","frontmatter":{"order":7,"description":"Spring - 面向切面AOP 场景模拟 还是老规矩，为了避免和之前的项目冲突，我们这里创建一个新的子模块 spring6-aop 声明计算器接口 Calculator public interface Calculator { int add(int i, int j); int sub(int i, int j); int mul(int i, int j); int div(int i, int j); }","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/spring-series/spring/spring-aop.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Spring - 面向切面AOP"}],["meta",{"property":"og:description","content":"Spring - 面向切面AOP 场景模拟 还是老规矩，为了避免和之前的项目冲突，我们这里创建一个新的子模块 spring6-aop 声明计算器接口 Calculator public interface Calculator { int add(int i, int j); int sub(int i, int j); int mul(int i, int j); int div(int i, int j); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-01T14:08:16.000Z"}],["meta",{"property":"article:author","content":"友人CoderMast"}],["meta",{"property":"article:modified_time","content":"2024-01-01T14:08:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring - 面向切面AOP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-01T14:08:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"场景模拟","slug":"场景模拟","link":"#场景模拟","children":[]},{"level":2,"title":"代理模式","slug":"代理模式","link":"#代理模式","children":[{"level":3,"title":"静态代理","slug":"静态代理","link":"#静态代理","children":[]},{"level":3,"title":"动态代理","slug":"动态代理","link":"#动态代理","children":[]}]},{"level":2,"title":"AOP概念及相关术语","slug":"aop概念及相关术语","link":"#aop概念及相关术语","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"相关术语","slug":"相关术语","link":"#相关术语","children":[]}]},{"level":2,"title":"基于注解的AOP","slug":"基于注解的aop","link":"#基于注解的aop","children":[{"level":3,"title":"技术说明","slug":"技术说明","link":"#技术说明","children":[]},{"level":3,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":3,"title":"创建切面类并配置","slug":"创建切面类并配置","link":"#创建切面类并配置","children":[]},{"level":3,"title":"各种通知","slug":"各种通知","link":"#各种通知","children":[]},{"level":3,"title":"切入点表达式语法","slug":"切入点表达式语法","link":"#切入点表达式语法","children":[]},{"level":3,"title":"重用切入点表达式","slug":"重用切入点表达式","link":"#重用切入点表达式","children":[]},{"level":3,"title":"获取通知的相关信息","slug":"获取通知的相关信息","link":"#获取通知的相关信息","children":[]},{"level":3,"title":"环绕通知","slug":"环绕通知","link":"#环绕通知","children":[]},{"level":3,"title":"切面的优先级","slug":"切面的优先级","link":"#切面的优先级","children":[]}]},{"level":2,"title":"基于XML的AOP","slug":"基于xml的aop","link":"#基于xml的aop","children":[{"level":3,"title":"准备工作","slug":"准备工作-1","link":"#准备工作-1","children":[]},{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[]}]}],"git":{"createdTime":1704112251000,"updatedTime":1704118096000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":3}]},"readingTime":{"minutes":15.82,"words":4745},"filePathRelative":"spring-series/spring/spring-aop.md","localizedDate":"2024年1月1日","excerpt":"<h1> Spring - 面向切面AOP</h1>\\n<h2> 场景模拟</h2>\\n<p>还是老规矩，为了避免和之前的项目冲突，我们这里创建一个新的子模块 <code>spring6-aop</code></p>\\n<ul>\\n<li>声明计算器接口 Calculator</li>\\n</ul>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Calculator</span> <span class=\\"token punctuation\\">{</span>\\n    \\n    <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> j<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">sub</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> j<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">mul</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> j<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">div</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> j<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    \\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
