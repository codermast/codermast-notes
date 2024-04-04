import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,a as r}from"./app-73bcf052.js";const c={},d=r('<h1 id="redis入门-lua脚本" tabindex="-1"><a class="header-anchor" href="#redis入门-lua脚本" aria-hidden="true">#</a> Redis入门 - Lua脚本</h1><p>Redis 脚本使用 Lua 解释器来执行脚本。 Redis 2.6 版本通过内嵌支持 Lua 环境。执行脚本的常用命令为 EVAL。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p>Eval 命令的基本语法如下：<code>EVAL script numkeys key [key ...] arg [arg ...]</code></p><h2 id="脚本命令" tabindex="-1"><a class="header-anchor" href="#脚本命令" aria-hidden="true">#</a> 脚本命令</h2><ul><li>执行Lua脚本：<code>EVAL script numkeys key [key ...] arg [arg ...]</code></li><li>将脚本添加到脚本缓存，但不执行：<code>SCRIPT LOAD script</code></li><li>从脚本缓存中移除所有脚本：<code>SCRIPT FLUSH</code></li><li>杀死当前正在运行的 Lua 脚本：<code>SCRIPT KILL</code></li><li>查看指定的脚本是否已经被保存在缓存当中：<code>SCRIPT EXISTS script [script ...]</code></li><li>根据给定的 sha1 校验码，执行缓存在服务器中的脚本：<code>EVALSHA sha1 numkeys key [key ...] arg [arg ...] </code></li></ul>',6),o=[d];function s(t,n){return a(),i("div",null,o)}const u=e(c,[["render",s],["__file","redis-introduction-scription.html.vue"]]);export{u as default};
