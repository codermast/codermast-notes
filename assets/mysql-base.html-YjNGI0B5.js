import{_ as l,r as n,o as i,c as s,b as e,e as o,d as r,a}from"./app-CvrCvenq.js";const c="/assets/2023-04-08-23-50-11-DZwdHJ4r.png",p={},d=a('<h1 id="mysql基础-基础概念" tabindex="-1"><a class="header-anchor" href="#mysql基础-基础概念"><span>MySQL基础 - 基础概念</span></a></h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><div class="hint-container info"><p class="hint-container-title">区别</p><p>在学习MySQL之前，我们需要明确一些基本概念，以便于后续的理解和学习。</p></div><ul><li>数据库</li></ul><p>数据库是存储数据的仓库，数据是有组织的进行存储。简写为DataBase （DB）</p><ul><li>数据库管理系统</li></ul><p>操纵和管理数据库的大型软件系统。简写为DataBase Management System （DBMS）</p><ul><li>SQL</li></ul><p>操作关系型数据库的编程语言，定义了一套操作关系型数据库的统一标准。又叫架构话查询语言，Structured Query Language（SQL）</p><ul><li>MySQL</li></ul><p>由瑞典MySQL AB公司开发的一款关系型数据库管理系统（Relational DataBase Management System RDBMS），属于Oracle旗下。</p><h2 id="mysql的安装" tabindex="-1"><a class="header-anchor" href="#mysql的安装"><span>MySQL的安装</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>直接在MySQL官方网站，根据自己的操作系统下载安装即可。</p></div>',13),h={href:"https://www.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"},m=a('<h2 id="mysql版本" tabindex="-1"><a class="header-anchor" href="#mysql版本"><span>MySQL版本</span></a></h2><ul><li><p>社区版 MySQL Community Server</p><ul><li>免费</li><li>不提供技术支持</li></ul></li><li><p>商业版 MySQL Enterprise Edition</p><ul><li>收费</li><li>提供专业技术支持</li></ul></li></ul><h2 id="数据库类型" tabindex="-1"><a class="header-anchor" href="#数据库类型"><span>数据库类型</span></a></h2><h3 id="关系型数据库" tabindex="-1"><a class="header-anchor" href="#关系型数据库"><span>关系型数据库</span></a></h3><p>建立在关系模型基础上，由多张相互连接的二维表组成的数据库。</p><div class="hint-container info"><p class="hint-container-title">特点</p><ol><li>使用表存储数据，格式统一，便于维护</li><li>使用SQL语言操作，标准统一，使用方便。</li></ol></div><h3 id="非关系型数据库" tabindex="-1"><a class="header-anchor" href="#非关系型数据库"><span>非关系型数据库</span></a></h3><p>分布式的、非关系型的、不保证遵循ACID原则的数据存储系统。最常见的解释就是NoSQL，non-relational或者Not only SQL。非关系型可以分为以下几种类型：</p><ul><li>键值(Key-Value)存储数据库</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>主要有：Tokyo Cabinet/Tyrant， Redis， Voldemort， Oracle BDB</p></div><ul><li>列存储数据库</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>主要有：Cassandra， HBase， Riak</p></div><ul><li>文档型数据库</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>主要有：CouchDB， MongoDb</p></div><ul><li>图形(Graph)数据库</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>主要有：Neo4J， InfoGrid， Infinite Graph</p></div><h2 id="mysql数据模型" tabindex="-1"><a class="header-anchor" href="#mysql数据模型"><span>MySQL数据模型</span></a></h2><figure><img src="'+c+'" alt="MySQL数据模型" tabindex="0" loading="lazy"><figcaption>MySQL数据模型</figcaption></figure>',18);function y(u,S){const t=n("ExternalLinkIcon");return i(),s("div",null,[d,e("p",null,[e("a",h,[o("MySQL官方下载地址：https://www.mysql.com/downloads/"),r(t)])]),m])}const g=l(p,[["render",y],["__file","mysql-base.html.vue"]]),L=JSON.parse('{"path":"/database/mysql/mysql-base.html","title":"MySQL基础 - 基础概念","lang":"zh-CN","frontmatter":{"order":1,"description":"MySQL基础 - 基础概念 基本概念 区别 在学习MySQL之前，我们需要明确一些基本概念，以便于后续的理解和学习。 数据库 数据库是存储数据的仓库，数据是有组织的进行存储。简写为DataBase （DB） 数据库管理系统 操纵和管理数据库的大型软件系统。简写为DataBase Management System （DBMS） SQL 操作关系型数据...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/mysql/mysql-base.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"MySQL基础 - 基础概念"}],["meta",{"property":"og:description","content":"MySQL基础 - 基础概念 基本概念 区别 在学习MySQL之前，我们需要明确一些基本概念，以便于后续的理解和学习。 数据库 数据库是存储数据的仓库，数据是有组织的进行存储。简写为DataBase （DB） 数据库管理系统 操纵和管理数据库的大型软件系统。简写为DataBase Management System （DBMS） SQL 操作关系型数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-13T13:22:27.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2023-06-13T13:22:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL基础 - 基础概念\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-13T13:22:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"MySQL的安装","slug":"mysql的安装","link":"#mysql的安装","children":[]},{"level":2,"title":"MySQL版本","slug":"mysql版本","link":"#mysql版本","children":[]},{"level":2,"title":"数据库类型","slug":"数据库类型","link":"#数据库类型","children":[{"level":3,"title":"关系型数据库","slug":"关系型数据库","link":"#关系型数据库","children":[]},{"level":3,"title":"非关系型数据库","slug":"非关系型数据库","link":"#非关系型数据库","children":[]}]},{"level":2,"title":"MySQL数据模型","slug":"mysql数据模型","link":"#mysql数据模型","children":[]}],"git":{"createdTime":1680969042000,"updatedTime":1686662547000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":4}]},"readingTime":{"minutes":1.55,"words":464},"filePathRelative":"database/mysql/mysql-base.md","localizedDate":"2023年4月8日","autoDesc":true,"excerpt":"\\n<h2>基本概念</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">区别</p>\\n<p>在学习MySQL之前，我们需要明确一些基本概念，以便于后续的理解和学习。</p>\\n</div>\\n<ul>\\n<li>数据库</li>\\n</ul>\\n<p>数据库是存储数据的仓库，数据是有组织的进行存储。简写为DataBase （DB）</p>\\n<ul>\\n<li>数据库管理系统</li>\\n</ul>\\n<p>操纵和管理数据库的大型软件系统。简写为DataBase Management System （DBMS）</p>\\n<ul>\\n<li>SQL</li>\\n</ul>"}');export{g as comp,L as data};
