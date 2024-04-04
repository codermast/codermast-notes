import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,a as s}from"./app-PVNeLgeH.js";const i="/assets/2024-01-15-23-24-22-dfBT53n4.png",t="/assets/2024-01-15-23-25-17-B8Hw2GMt.png",c="/assets/2024-01-18-23-38-50-CmRFmDck.png",l="/assets/2024-01-15-23-27-37-CHnjTQMP.png",o="/assets/2024-01-15-23-37-47-DkHcRwff.png",d="/assets/2024-01-15-23-35-33-Dd7qLXTG.png",r="/assets/2024-01-15-23-38-01-wwBY9TPL.png",p="/assets/2024-01-18-23-47-46-CRpsfZSF.png",u={},m=s(`<h1 id="docker-web应用实例" tabindex="-1"><a class="header-anchor" href="#docker-web应用实例"><span>Docker - WEB应用实例</span></a></h1><p>在之前的章节中，仅对普通容器进行了演示，但在实际中常常使用到 Docker 容器中的 WEB 应用程序。</p><h2 id="运行一个web应用" tabindex="-1"><a class="header-anchor" href="#运行一个web应用"><span>运行一个WEB应用</span></a></h2><ol><li>拉取镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull training/webapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>创建一个容器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> training/webapp python app.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>这里出现了警告信息，是因为我的电脑是 M1 芯片，是 ARM 架构，而所需要的平台是请求的映像的平台（linux/aamd64）与检测到的主机平台（linux/alm64/v8）不匹配，这里每个人的电脑环境不同，不必理会。</p></blockquote><ul><li><p>-d:让容器在后台运行。</p></li><li><p>-P:将容器内部使用的网络端口随机映射到我们使用的主机上。</p></li><li><p>-p:是容器内部端口绑定到指定的主机端口。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">5001</span>:5000 training/webapp python app.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即将本机的 5001 端口绑定到容器内部的 5000 端口上。</p><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="查看web应用容器" tabindex="-1"><a class="header-anchor" href="#查看web应用容器"><span>查看WEB应用容器</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们看到这里增加了端口的映射，<code>0.0.0.0:55000-&gt;5000/tcp</code>，即将本地 IP 的 55000 端口，映射到了该 Docker 容器中的 5000 端口，即我们在本地访问 55000 端口，即可访问该 Docker 容器。</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="自定义网络端口映射" tabindex="-1"><a class="header-anchor" href="#自定义网络端口映射"><span>自定义网络端口映射</span></a></h2><p>在上面的例子中，使用 <code>-p</code> 参数映射到主机上的端口是随机的，下面我们对其进行端口的自定义操作。</p><p>为了便于和前面创建的容器进行区分，我们再创建一个容器。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">55001</span>:5000 training/webapp python app.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>访问 <code>localhost:55001</code></p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container tip"><p class="hint-container-title">补充</p><p>端口映射既可以是本地端口映射，也可以是网络端口映射，即将 Docker 容器中的端口直接映射到某个指定的网络 IP 的端口。</p><ul><li>本地端口映射：<code>5000/tcp</code> -&gt; <code>0.0.0.0:5001</code></li><li>网络端口映射：<code>5000/tcp</code> -&gt; <code>123.23.46.123:5001</code></li></ul><p>另外，这里的端口映射默认都是 TCP 端口，也可以指定为 UDP 端口，在端口后面加上 <code>/udp</code> 即可。</p></div><h2 id="查看端口映射信息" tabindex="-1"><a class="header-anchor" href="#查看端口映射信息"><span>查看端口映射信息</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> port focused_boyd <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该指令即查看名为 <code>focused_boyd</code> 的 Docker 容器的 5000 端口映射到什么位置。</p><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="停止web应用容器" tabindex="-1"><a class="header-anchor" href="#停止web应用容器"><span>停止WEB应用容器</span></a></h2><p>WEB 应用容器，本身就是一个 Docker 容器，使用 Docker 本身的停止命令即可。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 通过 Docker 容器名称停止</span>
<span class="token function">docker</span> stop busy_hodgkin

<span class="token comment"># 通过 Docker 容器 ID 停止</span>
<span class="token function">docker</span> stop af9b91fa3cc6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重启web应用容器" tabindex="-1"><a class="header-anchor" href="#重启web应用容器"><span>重启WEB应用容器</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 通过 Docker 容器名称重启</span>
<span class="token function">docker</span> restart busy_hodgkin

<span class="token comment"># 通过 Docker 容器 ID 重启</span>
<span class="token function">docker</span> restart af9b91fa3cc6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除web应用容器" tabindex="-1"><a class="header-anchor" href="#删除web应用容器"><span>删除WEB应用容器</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> busy_hodgkin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里要注意，该指令是无法直接删除运行中的容器，想要直接删除需要加上 <code>-f</code> 选项</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> busy_hodgkin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,40),g=[m];function h(b,v){return a(),n("div",null,g)}const w=e(u,[["render",h],["__file","docker-web-containers.html.vue"]]),_=JSON.parse('{"path":"/dev-tools/docker/docker-web-containers.html","title":"Docker - WEB应用实例","lang":"zh-CN","frontmatter":{"order":6,"description":"Docker - WEB应用实例 在之前的章节中，仅对普通容器进行了演示，但在实际中常常使用到 Docker 容器中的 WEB 应用程序。 运行一个WEB应用 拉取镜像 创建一个容器 这里出现了警告信息，是因为我的电脑是 M1 芯片，是 ARM 架构，而所需要的平台是请求的映像的平台（linux/aamd64）与检测到的主机平台（linux/alm64...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/dev-tools/docker/docker-web-containers.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Docker - WEB应用实例"}],["meta",{"property":"og:description","content":"Docker - WEB应用实例 在之前的章节中，仅对普通容器进行了演示，但在实际中常常使用到 Docker 容器中的 WEB 应用程序。 运行一个WEB应用 拉取镜像 创建一个容器 这里出现了警告信息，是因为我的电脑是 M1 芯片，是 ARM 架构，而所需要的平台是请求的映像的平台（linux/aamd64）与检测到的主机平台（linux/alm64..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-18T16:19:20.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-01-18T16:19:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker - WEB应用实例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-18T16:19:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"运行一个WEB应用","slug":"运行一个web应用","link":"#运行一个web应用","children":[]},{"level":2,"title":"查看WEB应用容器","slug":"查看web应用容器","link":"#查看web应用容器","children":[]},{"level":2,"title":"自定义网络端口映射","slug":"自定义网络端口映射","link":"#自定义网络端口映射","children":[]},{"level":2,"title":"查看端口映射信息","slug":"查看端口映射信息","link":"#查看端口映射信息","children":[]},{"level":2,"title":"停止WEB应用容器","slug":"停止web应用容器","link":"#停止web应用容器","children":[]},{"level":2,"title":"重启WEB应用容器","slug":"重启web应用容器","link":"#重启web应用容器","children":[]},{"level":2,"title":"删除WEB应用容器","slug":"删除web应用容器","link":"#删除web应用容器","children":[]}],"git":{"createdTime":1705333104000,"updatedTime":1705594760000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":4}]},"readingTime":{"minutes":2.44,"words":731},"filePathRelative":"dev-tools/docker/docker-web-containers.md","localizedDate":"2024年1月15日","autoDesc":true,"excerpt":"\\n<p>在之前的章节中，仅对普通容器进行了演示，但在实际中常常使用到 Docker 容器中的 WEB 应用程序。</p>\\n<h2>运行一个WEB应用</h2>\\n<ol>\\n<li>拉取镜像</li>\\n</ol>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker</span> pull training/webapp\\n</code></pre></div><figure><figcaption></figcaption></figure>"}');export{w as comp,_ as data};
