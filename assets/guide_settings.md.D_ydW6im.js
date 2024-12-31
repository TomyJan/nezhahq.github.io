import{_ as e,c as o,o as a,a4 as i}from"./chunks/framework.BmdFiWrL.js";const b=JSON.parse('{"title":"设置","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/settings.md","filePath":"guide/settings.md","lastUpdated":1735665481000}'),l={name:"guide/settings.md"},t=i('<h1 id="设置" tabindex="-1">设置 <a class="header-anchor" href="#设置" aria-label="Permalink to &quot;设置&quot;">​</a></h1><p><strong>登录管理页面后，点击头像 → 系统设置，即可进入设置页面。</strong></p><hr><h2 id="系统配置" tabindex="-1">系统配置 <a class="header-anchor" href="#系统配置" aria-label="Permalink to &quot;系统配置&quot;">​</a></h2><h3 id="站点名称" tabindex="-1">站点名称 <a class="header-anchor" href="#站点名称" aria-label="Permalink to &quot;站点名称&quot;">​</a></h3><p>在此项中可以自定义站点标题，便于识别和管理。</p><h3 id="语言设置" tabindex="-1">语言设置 <a class="header-anchor" href="#语言设置" aria-label="Permalink to &quot;语言设置&quot;">​</a></h3><p>设置软件的语言，主要影响通知与错误信息。</p><p>同时可以联动网页界面，实时更改语言。</p><h3 id="自定义代码" tabindex="-1">自定义代码 <a class="header-anchor" href="#自定义代码" aria-label="Permalink to &quot;自定义代码&quot;">​</a></h3><p>此项用于在网页界面中添加自定义样式或脚本代码，例如修改 LOGO、调整色调、添加美化代码或统计代码。</p><p>也可以修改以下全局变量来直接使用预设的自定义功能：</p><ul><li><p>用户前端</p><ol><li><code>window.CustomBackgroundImage</code>：自定义背景图</li><li><code>window.CustomMobileBackgroundImage</code>：自定义手机端背景图</li><li><code>window.CustomLogo</code>：自定义 Logo，需要填写 URL。</li><li><code>window.CustomDesc</code>：自定义描述</li><li><code>window.ShowNetTransfer</code>：布尔值，卡片是否显示上下行流量。</li><li><code>window.DisableAnimatedMan</code>：布尔值，开/关动画人物插图</li><li><code>window.CustomIllustration</code> 自定义插图，与 <code>window.DisableAnimatedMan</code> 冲突。</li><li><code>window.FixedTopServerName</code>：布尔值，是否固定顶部服务器名称。</li><li><code>window.CustomLinks</code>：自定义外链，需要遵循一定格式，例如<code>[{\\&quot;link\\&quot;:\\&quot;https://github.com/hamster1963/nezha-dash\\&quot;,\\&quot;name\\&quot;:\\&quot;GitHub\\&quot;}]</code>。</li><li><code>window.ForceTheme</code>：强制默认颜色主题，值为 &quot;light&quot; 或 &quot;dark&quot;。</li><li><code>window.ForceUseSvgFlag</code>：布尔值，是否强制使用 SVG 旗帜。</li></ol></li><li><p>管理前端</p><ol><li><code>window.DisableAnimatedMan</code>：布尔值，开/关动画人物插图</li></ol></li></ul><h3 id="agent-对接地址" tabindex="-1">Agent 对接地址 <a class="header-anchor" href="#agent-对接地址" aria-label="Permalink to &quot;Agent 对接地址&quot;">​</a></h3><ul><li>此项为使用一键脚本安装 Agent 的必要设置。</li><li>设置内容为你希望使用的 Agent 连接地址，例如：<code>data.example.com:8008</code>。</li><li>详情请参考 <a href="/guide/agent.html#准备工作">Agent 安装准备工作</a>。</li></ul><h3 id="ddns-的自定义公共-dns-名称服务器" tabindex="-1">DDNS 的自定义公共 DNS 名称服务器 <a class="header-anchor" href="#ddns-的自定义公共-dns-名称服务器" aria-label="Permalink to &quot;DDNS 的自定义公共 DNS 名称服务器&quot;">​</a></h3><p>用于 DDNS 功能查询域名 SOA 记录，如不填则采用内置列表。</p><h3 id="真实-ip-请求头" tabindex="-1">真实 IP 请求头 <a class="header-anchor" href="#真实-ip-请求头" aria-label="Permalink to &quot;真实 IP 请求头&quot;">​</a></h3><ul><li><code>CF-Connecting-IP</code> 是一个用于获取访问者真实 IP 的请求头字段。</li><li>当通过 Cloudflare CDN 代理访问 Dashboard 时，启用此功能可以让源服务器正确识别访问者的真实 IP。 <ul><li><strong>用途</strong>：便于进行安全审计、防火墙规则配置和日志记录。</li></ul></li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><ol><li><p><strong>慎重配置 Header</strong><br> 真实 IP 请求头的配置涉及内置 WAF（Web 应用防火墙）的正常运作。<br> 如果您不了解 Header 的传递方式，请勿随意修改。错误配置可能导致 IP 被内置 WAF 封禁。</p></li><li><p><strong>防止账户爆破攻击</strong><br> 内置 WAF 旨在防止本地账户爆破。</p><ul><li>如果本地账户未设置任何防护，可能导致高频密码枚举攻击（如每秒尝试 100 个密码）。</li><li>WAF 的 IP 识别依赖于正确配置的请求头，以有效拦截此类攻击。</li></ul></li><li><p><strong>安全建议</strong><br> 确保您了解 Header 的实际传递机制后再启用此功能，并仔细验证配置结果。</p></li></ol></div><h3 id="ip-变更提醒" tabindex="-1">IP 变更提醒 <a class="header-anchor" href="#ip-变更提醒" aria-label="Permalink to &quot;IP 变更提醒&quot;">​</a></h3><p>此功能允许在服务器 IP 地址变更时发送通知，设置步骤如下：</p><h4 id="配置选项" tabindex="-1">配置选项 <a class="header-anchor" href="#配置选项" aria-label="Permalink to &quot;配置选项&quot;">​</a></h4><ol><li><p><strong>覆盖范围</strong><br> 选择一条规则以确定需要监控哪些服务器。</p></li><li><p><strong>特定服务器</strong><br> 配合覆盖范围设置，可以为选定规则添加排除项。</p></li><li><p><strong>提醒发送至通知分组</strong><br> 选择通知方式（通知方式需提前在“通知”页中设置）。</p></li><li><p><strong>启用功能</strong><br> 设置完成后，勾选 <strong>启用</strong> 才会使通知生效。</p></li><li><p><strong>通知中显示完整 IP 地址</strong><br> 默认情况下，IP 变更通知会隐藏完整 IP 地址。<br> 如需显示完整 IP 地址，可勾选此选项。</p></li></ol><hr><h2 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to &quot;用户管理&quot;">​</a></h2><p>此标签页允许为 Dashboard 添加多个用户。</p><p>具体功能请参考 <a href="/guide/user.html">多用户</a>。</p><hr><h2 id="在线用户" tabindex="-1">在线用户 <a class="header-anchor" href="#在线用户" aria-label="Permalink to &quot;在线用户&quot;">​</a></h2><p>查看当前连接到前台的游客 / 用户信息，包含 <strong>IP</strong> 及 <strong>连接时间</strong>，并可以手动封禁用户。</p><hr><h2 id="web-应用防火墙" tabindex="-1">Web 应用防火墙 <a class="header-anchor" href="#web-应用防火墙" aria-label="Permalink to &quot;Web 应用防火墙&quot;">​</a></h2><p>可以查看当前的封禁条目，并提供一些有用的信息：</p><ul><li><strong>IP</strong> 被封禁者的 IP。</li><li><strong>封禁标识</strong> 被封禁者尝试攻击的资源标识，与 IP 一起作为封禁条目的标识。一般情况下为用户 ID，但也存在以下特殊情况： <ol><li>尝试破解 gRPC 连接密钥；</li><li>尝试破解 API Token；</li><li>尝试登录不存在的用户；</li><li>手动封禁（通过“在线用户”页面）。</li></ol></li><li><strong>计数</strong> 此封禁条目的封禁次数，数量越多则封禁时间越长。</li><li><strong>封禁原因</strong> 此封禁条目最后一次的封禁原因。</li><li><strong>封禁时间</strong> 此封禁条目最后一次的封禁时间。</li></ul><p>如果当前用户为管理员，便可以手动删除封禁条目。</p>',36),r=[t];function n(d,s,c,h,u,p){return a(),o("div",null,r)}const m=e(l,[["render",n]]);export{b as __pageData,m as default};
