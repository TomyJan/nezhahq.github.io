import{_ as e,c as i,o as l,a4 as s}from"./chunks/framework.BmdFiWrL.js";const k=JSON.parse('{"title":"自定义 Agent 监控项目","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/q7.md","filePath":"guide/q7.md","lastUpdated":1735665481000}'),t={name:"guide/q7.md"},o=s('<h1 id="自定义-agent-监控项目" tabindex="-1">自定义 Agent 监控项目 <a class="header-anchor" href="#自定义-agent-监控项目" aria-label="Permalink to &quot;自定义 Agent 监控项目&quot;">​</a></h1><p>通过运行参数的配置，您可以灵活调整 Agent 的功能和行为，满足不同场景的监控需求。</p><hr><h2 id="运行参数" tabindex="-1">运行参数 <a class="header-anchor" href="#运行参数" aria-label="Permalink to &quot;运行参数&quot;">​</a></h2><h3 id="配置参数" tabindex="-1">配置参数 <a class="header-anchor" href="#配置参数" aria-label="Permalink to &quot;配置参数&quot;">​</a></h3><p>如果您通过一键脚本安装了 Agent，可以编辑 <code>/opt/nezha/agent/config.yml</code> 文件来添加或修改参数。<br> 同一台服务器可以运行多个 Agent，每个 Agent 配置文件相互独立。</p><p>运行参数及其作用：</p><ul><li><p><strong><code>client_secret:</code></strong></p><ul><li>用于与 Dashboard 进行安全通信的客户端密钥。</li><li>此参数必须与 Dashboard 中的配置相同，否则 Agent 无法正常与服务器通信。</li></ul></li><li><p><strong><code>debug:</code></strong></p><ul><li>当为 <code>true</code> 时启用日志。</li></ul></li><li><p><strong><code>disable_auto_update:</code></strong></p><ul><li>当为 <code>true</code> 时禁用 Agent 的自动更新功能，增强系统稳定性和安全性。</li></ul></li><li><p><strong><code>disable_command_execute:</code></strong></p><ul><li>当为 <code>true</code> 时 Agent 不再接受面板下达的 <strong>命令执行</strong>、<strong>在线终端</strong> 和 <strong>文件列表</strong> 任务。</li></ul></li><li><p><strong><code>disable_force_update:</code></strong></p><ul><li>当为 <code>true</code> 时禁用强制更新功能，仅允许手动更新。</li></ul></li><li><p><strong><code>disable_nat:</code></strong></p><ul><li>当为 <code>true</code> 时 Agent 不再接受面板下达的 <strong>内网穿透</strong> 任务。</li></ul></li><li><p><strong><code>disable_send_query:</code></strong></p><ul><li>当为 <code>true</code> 时 Agent 不再接受面板下达的 <code>TCP Ping</code>、<code>ICMP Ping</code> 和 <code>HTTP GET</code> 任务。</li></ul></li><li><p><strong><code>gpu:</code></strong></p><ul><li>当为 <code>true</code> 时启用 GPU 监控。</li><li>注意：启用 GPU 监控可能需要安装额外依赖，详细信息参考：<a href="/guide/q9.html">启用 GPU 监控</a>。</li></ul></li><li><p><strong><code>insecure_tls:</code></strong></p><ul><li>当为 <code>true</code> 时禁用证书检查，适用于使用自签名证书的场景。</li></ul></li><li><p><strong><code>ip_report_period:</code></strong></p><ul><li>设置本地 IP 更新间隔时间（秒）。默认值为 <code>1800</code> 秒（30 分钟）。</li><li>最低有效值为 30 秒。</li></ul></li><li><p><strong><code>report_delay:</code></strong></p><ul><li>设置系统信息上报的时间间隔（秒）。默认值为 <code>3</code> 秒（有效范围：1-4 秒）。</li></ul></li><li><p><strong><code>server:</code></strong></p><ul><li>与 Dashboard 通信的域名或 IP 地址，需包括端口号。</li></ul></li><li><p><strong><code>skip_connection_count:</code></strong></p><ul><li>当为 <code>true</code> 时禁用网络连接数的监控，适用于高连接数或资源受限的环境。</li></ul></li><li><p><strong><code>skip_procs_count:</code></strong></p><ul><li>当为 <code>true</code> 时禁用进程数的监控，以降低资源占用。</li></ul></li><li><p><strong><code>temperature:</code></strong></p><ul><li>当为 <code>true</code> 时启用硬件温度监控（仅支持部分硬件，部分 VPS 可能无法获取温度信息）。</li></ul></li><li><p><strong><code>tls:</code></strong></p><ul><li>当为 <code>true</code> 时启用 Agent 与 Dashboard 间的通信 SSL/TLS 加密。</li><li>如果 Agent 使用 Nginx 反向代理且启用了 SSL/TLS 配置，请开启此选项。</li></ul></li><li><p><strong><code>hard_drive_partition_allowlist:</code></strong></p><ul><li>一个字符串数组，用于指定需要监控的硬盘分区列表。</li><li>若指定此参数，将仅对列出的分区进行监控。</li></ul></li><li><p><strong><code>nic_allowlist:</code></strong></p><ul><li>一个 <code>map[string]bool</code> 类型的允许列表，用于指定需要监控的网卡。</li><li>键为网卡名称，值为 <code>true</code> 表示允许监控，<code>false</code> 表示不监控。</li><li>若不指定或为空，则默认监控所有可用网卡。</li></ul></li><li><p><strong><code>use_gitee_to_upgrade:</code></strong></p><ul><li>当为 <code>true</code> 时使用 Gitee 仓库作为自动更新源，对中国大陆服务器更为友好。</li></ul></li><li><p><strong><code>use_ipv6_country_code:</code></strong></p><ul><li>当为 <code>true</code> 时强制使用 IPv6 地址查询国家代码（默认使用 IPv4）。</li></ul></li><li><p><strong><code>uuid:</code></strong></p><ul><li>当前 Agent 的唯一标识参数，用于 Dashboard 识别数据来源。</li><li>若需替换 Dashboard 中已存在的 Agent，可以手动设置此参数。</li></ul></li><li><p><strong><code>dns:</code></strong></p><ul><li>一个字符串数组，用于设置自定义 DNS 服务器列表。</li><li>指定后，Agent 将优先使用此列表中的 DNS 服务器解析域名。</li></ul></li><li><p><strong><code>custom_ip_api:</code></strong></p><ul><li>一个字符串数组，用于指定自定义 IP 查询 API 列表。</li><li>Agent 将通过这些 API 获取服务器的公网 IP 信息。</li></ul></li><li><p><strong><code>self_update_period:</code></strong></p><ul><li>手动设置更新间隔（分钟）。</li><li>默认为 30 到 90 之间的随机值。</li></ul></li></ul><hr><h2 id="保存生效" tabindex="-1">保存生效 <a class="header-anchor" href="#保存生效" aria-label="Permalink to &quot;保存生效&quot;">​</a></h2><p>在修改配置文件中的参数后，需要重新启动 Agent 服务以使更改生效。具体操作如下：</p><ol><li><p><strong>重新启动服务</strong><br> 运行以下命令重新启动默认的第一个 Agent 服务：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent.service</span></span></code></pre></div></li><li><p><strong>多 Agent 服务的情况</strong><br> 如果同一服务器上运行了多个 Agent 服务，请先列出所有 Agent 服务的名称：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list-units</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --type=service</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span></span></code></pre></div><p>然后分别使用以下命令重新启动对应的 Agent 服务：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">service-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>将 <code>&lt;service-name&gt;</code> 替换为实际的服务名称，例如 <code>nezha-agent@2.service</code>。</p></li></ol>',12),a=[o];function n(d,r,c,p,g,h){return l(),i("div",null,a)}const _=e(t,[["render",n]]);export{k as __pageData,_ as default};
