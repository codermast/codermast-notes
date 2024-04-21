import{_ as t,o as e,c as i,a as n}from"./app-CvrCvenq.js";const l="/assets/2023-07-01-18-51-02-DNp7EtKO.png",o={},r=n('<h1 id="_1-数据结构的基本概念" tabindex="-1"><a class="header-anchor" href="#_1-数据结构的基本概念"><span>1.数据结构的基本概念</span></a></h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><ul><li><p><strong>数据</strong>：数据是信息的载体，是描述客观事物属性的数、字符及所能输入到计算机中并能被计算机程序识别和处理的符号的集合。</p></li><li><p><strong>数据元素</strong>：是数据的基本单位，通常作为一个整体进行考虑和处理。一个数据元素可由若干数据项组成，数据项是构成数据元素的不可分割的最小单位。如类实例化的一个对象就是数据元素，不可分割。</p></li><li><p><strong>数据对象</strong>：数据对象是具有相同性质的数据元素的集合，是数据的一个子集。即同属于一个类的对象实例。</p></li><li><p><strong>数据类型</strong>：数据类型是一个值的集合和定义在此集合上的一组操作的总称。</p><ol><li>原子类型：其值不可再分的数据类型。————基本数据类型。</li><li>结构类型：其值可以在分解为若干变量的数据类型。————对象实例内的各个属性值。</li><li>抽象数据类型：抽象数据组织及与之相关的操作。————仅仅定义，没有实现。如栈、队列的定义。</li></ol></li><li><p><strong>数据结构</strong>：是相互之间存在的一种或多种特定关系的数据元素的集合。在任何时候，数据都不是独立存在的，他们存在着某种关系。</p></li></ul><h2 id="数据结构三要素" tabindex="-1"><a class="header-anchor" href="#数据结构三要素"><span>数据结构三要素</span></a></h2><p>数据结构包含三个要素，分别为：逻辑结构、存储结构、数据的运算。</p><p>数据的逻辑结构和存储结构是密不可分的两个方面，一个算法的设计取决于所选定的逻辑结构，而算法的视线依赖于所采用的存储结构。</p><ul><li><p>逻辑结构：是指数据元素之间的逻辑关系，即从逻辑关系上描述数据。主要分为 线性结构 和 非线性结构 两种。</p><ul><li>集合：结构中元素同属于同一个集合，别无其他关系。</li><li>线性结构：结构中的数据元素之间只存在一对一的关系。</li><li>树形结构：结构中的数据元素之间存在一对多的关系。</li><li>图状结构或网状结构：结构中的数据元素之间存在多对多的关系。</li></ul><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>存储结构：是指数据结构在计算机中的表示，也称为物理结构。主要的存储结构有：顺序存储、链式存储、索引存储、散列存储。</p><ul><li><p>顺序存储：把逻辑上相邻的元素存储在物理位置上也相邻的存储单元中，元素之间的关系由存储单元的邻接关系来体现。</p></li><li><p>链式存储：不要求逻辑上相邻的元素在物理位置上也相邻，只要求逻辑相邻，借助指针存储地址来表示元素之间的逻辑关系。</p></li><li><p>索引存储：在存储元素信息时，还建立附加的索引表。索引表中的每项称为索引项，索引项的一般形式为 （关键字、地址）。</p></li><li><p>散列存储：根据元素的关键字直接计算出该元素的存储位置，又称为哈希 Hash 存储。</p></li></ul></li><li><p>数据的运算：施加在数据上的运算包括运算的定义和实现。运算的定义是针对逻辑结构的，指出运算的功能；运算的实现是针对存储结构的，指出运算的具体操作步骤。</p></li></ul>',7),a=[r];function p(s,c){return e(),i("div",null,a)}const m=t(o,[["render",p],["__file","data-structure-concept.html.vue"]]),g=JSON.parse('{"path":"/computer/ds/data-structure-concept.html","title":"1.数据结构的基本概念","lang":"zh-CN","frontmatter":{"order":1,"description":"1.数据结构的基本概念 基本概念 数据：数据是信息的载体，是描述客观事物属性的数、字符及所能输入到计算机中并能被计算机程序识别和处理的符号的集合。 数据元素：是数据的基本单位，通常作为一个整体进行考虑和处理。一个数据元素可由若干数据项组成，数据项是构成数据元素的不可分割的最小单位。如类实例化的一个对象就是数据元素，不可分割。 数据对象：数据对象是具有相...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/computer/ds/data-structure-concept.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"1.数据结构的基本概念"}],["meta",{"property":"og:description","content":"1.数据结构的基本概念 基本概念 数据：数据是信息的载体，是描述客观事物属性的数、字符及所能输入到计算机中并能被计算机程序识别和处理的符号的集合。 数据元素：是数据的基本单位，通常作为一个整体进行考虑和处理。一个数据元素可由若干数据项组成，数据项是构成数据元素的不可分割的最小单位。如类实例化的一个对象就是数据元素，不可分割。 数据对象：数据对象是具有相..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-01T15:26:57.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2023-07-01T15:26:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.数据结构的基本概念\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-01T15:26:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"数据结构三要素","slug":"数据结构三要素","link":"#数据结构三要素","children":[]}],"git":{"createdTime":1688225024000,"updatedTime":1688225217000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":2}]},"readingTime":{"minutes":3,"words":901},"filePathRelative":"computer/ds/data-structure-concept.md","localizedDate":"2023年7月1日","autoDesc":true,"excerpt":"\\n<h2>基本概念</h2>\\n<ul>\\n<li>\\n<p><strong>数据</strong>：数据是信息的载体，是描述客观事物属性的数、字符及所能输入到计算机中并能被计算机程序识别和处理的符号的集合。</p>\\n</li>\\n<li>\\n<p><strong>数据元素</strong>：是数据的基本单位，通常作为一个整体进行考虑和处理。一个数据元素可由若干数据项组成，数据项是构成数据元素的不可分割的最小单位。如类实例化的一个对象就是数据元素，不可分割。</p>\\n</li>\\n<li>\\n<p><strong>数据对象</strong>：数据对象是具有相同性质的数据元素的集合，是数据的一个子集。即同属于一个类的对象实例。</p>\\n</li>\\n<li>\\n<p><strong>数据类型</strong>：数据类型是一个值的集合和定义在此集合上的一组操作的总称。</p>\\n<ol>\\n<li>原子类型：其值不可再分的数据类型。————基本数据类型。</li>\\n<li>结构类型：其值可以在分解为若干变量的数据类型。————对象实例内的各个属性值。</li>\\n<li>抽象数据类型：抽象数据组织及与之相关的操作。————仅仅定义，没有实现。如栈、队列的定义。</li>\\n</ol>\\n</li>\\n<li>\\n<p><strong>数据结构</strong>：是相互之间存在的一种或多种特定关系的数据元素的集合。在任何时候，数据都不是独立存在的，他们存在着某种关系。</p>\\n</li>\\n</ul>"}');export{m as comp,g as data};
