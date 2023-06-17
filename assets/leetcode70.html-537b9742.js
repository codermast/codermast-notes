import{_ as p,W as e,X as t,Z as n,$ as o,a0 as c,Y as s,C as i}from"./framework-a0cce298.js";const l={},u=s('<h1 id="_70-爬楼梯" tabindex="-1"><a class="header-anchor" href="#_70-爬楼梯" aria-hidden="true">#</a> 70. 爬楼梯</h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>假设你正在爬楼梯。需要 n 阶你才能到达楼顶。</p><p>每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p><p>示例 1：</p><p>输入：n = 2 输出：2 解释：有两种方法可以爬到楼顶。</p><ol><li>1 阶 + 1 阶</li><li>2 阶 示例 2：</li></ol><p>输入：n = 3 输出：3 解释：有三种方法可以爬到楼顶。</p><ol><li>1 阶 + 1 阶 + 1 阶</li><li>1 阶 + 2 阶</li><li>2 阶 + 1 阶</li></ol><p>提示：</p><p>1 &lt;= n &lt;= 45</p><h2 id="题目地址" tabindex="-1"><a class="header-anchor" href="#题目地址" aria-hidden="true">#</a> 题目地址</h2>',12),r={href:"https://leetcode-cn.com/problems/climbing-stairs/",target:"_blank",rel:"noopener noreferrer"},d=s(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>  爬到第⼀层楼梯有⼀种⽅法，爬到⼆层楼梯有两种⽅法。 那么第⼀层楼梯再跨两步就到第三层 ，第⼆层楼梯再跨⼀步就到第三层。 所以到第三层楼梯的状态可以由第⼆层楼梯 和 到第⼀层楼梯状态推导出来，那么就可以想到动态规划了。</p><p>  <strong>爬上 n-1 阶楼梯的方法数量。因为再爬1阶就能到第n阶</strong></p><p>  <strong>爬上 n−2 阶楼梯的方法数量，因为再爬2阶就能到第n阶</strong></p><p>  要求F(n) 则需要先求F(n - 1) 和 F(n - 2);</p><p>  要求F(n - 1) 则需要先求F(n - 1 - 1) 和 F(n - 1 - 2);</p><p>  ...以此类推</p><p>  要求F(3) 则需要先求F(2) 和 F(1);</p><p>  此时的F(2) 和 F(1)都是已知条件，则可以求的结果。</p><h3 id="方法1️⃣-递归法" tabindex="-1"><a class="header-anchor" href="#方法1️⃣-递归法" aria-hidden="true">#</a> 方法1️⃣：递归法</h3><h4 id="代码code" tabindex="-1"><a class="header-anchor" href="#代码code" aria-hidden="true">#</a> 代码Code</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 递归法</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p>时间复杂度：O(2 ^ n)。</p></li><li><p>空间复杂度：O(n)。</p></li></ul><h3 id="方法2️⃣-动态规划法1-使用dp数组进行记录" tabindex="-1"><a class="header-anchor" href="#方法2️⃣-动态规划法1-使用dp数组进行记录" aria-hidden="true">#</a> 方法2️⃣：动态规划法1：（使用dp数组进行记录）</h3><h4 id="代码code-1" tabindex="-1"><a class="header-anchor" href="#代码code-1" aria-hidden="true">#</a> 代码Code</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 动态规划法1：</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 定义 dp 数组</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化 dp 数组中的初始值</span>
    dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token comment">// 开始循环遍历</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> dp<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 递推公式</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 得到返回值</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p>时间复杂度：O(n)。</p></li><li><p>空间复杂度：O(n)。</p></li></ul><h3 id="方法3️⃣-动态规划法2-使用dp数组进行记录" tabindex="-1"><a class="header-anchor" href="#方法3️⃣-动态规划法2-使用dp数组进行记录" aria-hidden="true">#</a> 方法3️⃣：动态规划法2：（使用dp数组进行记录）</h3><h4 id="代码code-2" tabindex="-1"><a class="header-anchor" href="#代码code-2" aria-hidden="true">#</a> 代码Code</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 动态规划法2：仅保存需要进行递推的两个值</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">climbStairs2</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 定义 dp 数组</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化 dp 数组中的初始值</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token comment">// 开始循环遍历</span>
    <span class="token comment">// 循环 1 次 得到第 3 个值</span>
    <span class="token comment">// 循环 n - 2 次 得到第 n 个值</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 得到返回值</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p>时间复杂度：O(n)。</p></li><li><p>空间复杂度：O(1)。</p></li></ul>`,24);function k(m,v){const a=i("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",r,[o("Leetcode 70.爬楼梯"),c(a)])]),d])}const h=p(l,[["render",k],["__file","leetcode70.html.vue"]]);export{h as default};