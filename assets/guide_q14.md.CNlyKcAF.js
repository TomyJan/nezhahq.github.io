import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.BmdFiWrL.js";const u=JSON.parse('{"title":"设置 OAuth 2.0 绑定","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/q14.md","filePath":"guide/q14.md","lastUpdated":1735665481000}'),l={name:"guide/q14.md"},e=t(`<h1 id="设置-oauth-2-0-绑定" tabindex="-1">设置 OAuth 2.0 绑定 <a class="header-anchor" href="#设置-oauth-2-0-绑定" aria-label="Permalink to &quot;设置 OAuth 2.0 绑定&quot;">​</a></h1><p>哪吒支持为已有的本地账户通过 OAuth 2.0 绑定第三方网站账户。</p><hr><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>使用 OAuth 2.0 需要手动更改 Dashboard 配置文件。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oauth2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># replace it with desired name, like \`GitHub\`</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    clientid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a-unique-id&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    clientsecret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a-unique-secret&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      authurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://example.com/authorize&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      tokenurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://example.com/token&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    scopes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;read&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    userinfourl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://api.example.com/user&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    useridpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span></span></code></pre></div><p>配置说明：</p><ul><li><p><strong><code>clientid</code></strong></p><ul><li>OAuth 2.0 客户端 ID。</li></ul></li><li><p><strong><code>clientsecret</code></strong></p><ul><li>OAuth 2.0 客户端密钥。</li></ul></li><li><p><strong><code>endpoint.authurl</code></strong></p><ul><li>授权端点。</li></ul></li><li><p><strong><code>endpoint.tokenurl</code></strong></p><ul><li>令牌端点。</li></ul></li><li><p><strong><code>endpoint.scopes</code></strong></p><ul><li>指定的权限列表，需要根据情况填写。</li></ul></li><li><p><strong><code>endpoint.userinfourl</code></strong></p><ul><li>第三方网站的用户 API 端点。</li></ul></li><li><p><strong><code>endpoint.useridpath</code></strong></p><ul><li>用户 API 中代表 ID 的字段。</li></ul></li></ul><hr><h2 id="创建-oauth-2-0-应用" tabindex="-1">创建 OAuth 2.0 应用 <a class="header-anchor" href="#创建-oauth-2-0-应用" aria-label="Permalink to &quot;创建 OAuth 2.0 应用&quot;">​</a></h2><p>使用此功能前首先需要在第三方网站上创建一个 OAuth 2.0 应用。</p><p>哪吒的 Callback URI 为：<code>/api/v1/oauth2/callback</code></p><p>由于各个网站的步骤不同，这里只能给出部分示例，一般来说各个平台的操作类似，只需要获取到哪吒所需的信息即可。</p><h3 id="创建示例" tabindex="-1">创建示例 <a class="header-anchor" href="#创建示例" aria-label="Permalink to &quot;创建示例&quot;">​</a></h3><h4 id="github" tabindex="-1">GitHub <a class="header-anchor" href="#github" aria-label="Permalink to &quot;GitHub&quot;">​</a></h4><details><summary>点击展开/收起</summary><ol><li>打开 <a href="https://github.com/settings/developers" target="_blank" rel="noreferrer">https://github.com/settings/developers</a>，依次选择 “OAuth Apps” - “New OAuth App”。</li><li>填写以下需要的字段：</li></ol><ul><li><code>Application name</code>：应用名</li><li><code>Homepage URL</code>：面板访问地址，例如 <code>https://nezha.example.com</code></li><li><code>Authorization callback URL</code> 面板的 Callback 地址，这里只检测前缀，所以可以填写 <code>https://nezha.example.com/api/v1/oauth2/callback</code>。</li></ul><ol start="3"><li>在新页面中保存 Client ID 和 Client secrets，完成面板 OAuth 2.0 配置：</li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oauth2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  GitHub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    clientid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a-unique-id&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    clientsecret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a-unique-secret&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      authurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/login/oauth/authorize&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      tokenurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/login/oauth/access_token&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    userinfourl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://api.github.com/user&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    useridpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span></span></code></pre></div></details><h4 id="cloudflare-access" tabindex="-1">Cloudflare Access <a class="header-anchor" href="#cloudflare-access" aria-label="Permalink to &quot;Cloudflare Access&quot;">​</a></h4><details><summary>点击展开/收起</summary><p>前往 Zero Trust Dashboard：<a href="https://one.dash.cloudflare.com/" target="_blank" rel="noreferrer">https://one.dash.cloudflare.com/</a>，选择或新建一个账户（Account），然后按照以下步骤操作：</p><ol><li><code>My Team</code> -&gt; <code>Users</code> -&gt; 点击<code>&lt;具体用户&gt;</code> -&gt; 获取 <code>User ID</code> 并保存 <em>（如果是第一次使用 Zero Trust，Users 列表会为空，可暂时跳过这一步；你需要完成一次验证后，用户才会出现在 Users 列表中）</em>；</li><li><code>Access</code> -&gt; <code>Applications</code> -&gt; <code>Add an Application</code>;</li><li>选择 <code>SaaS</code>，在 <code>Application</code> 字段中输入自定义的应用名称（例如 <code>nezha</code>），选择 <code>OIDC</code> 后点击 <code>Add application</code>;</li><li><code>Scopes</code> 需要选择 <code>openid</code> 和 <code>profile</code>;</li><li>在 <code>Redirect URLs</code> 中添加你的 Dashboard Callback 地址，比如 <code>https://nezha.example.com/api/v1/oauth2/callback</code>；</li><li>添加 <code>Policy</code>，<code>Action</code> 设为 <code>Allow</code>，添加一条 Include 规则，<code>Selector</code> 选择 <code>Emails</code>，在文本框中输入你的邮箱地址，保存策略；</li><li>分别记录 <code>Client ID</code>、<code>Client Secret</code>、<code>Token endpoint</code> 和 <code>Authorization endpoint</code>;</li><li>填写哪吒 OAuth 2.0 配置，保存后重启面板：</li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oauth2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Cloudflare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    clientid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a-unique-id&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    clientsecret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a-unique-secret&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      authurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://xxx.cloudflareaccess.com/cdn-cgi/access/sso/oidc/xxx/authorization&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      tokenurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://xxx.cloudflareaccess.com/cdn-cgi/access/sso/oidc/xxx/token&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    scopes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">openid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">profile</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    userinfourl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://xxx.cloudflareaccess.com/cdn-cgi/access/sso/oidc/xxx/userinfo&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    useridpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sub&quot;</span></span></code></pre></div></details><h4 id="gitea-forgejo" tabindex="-1">Gitea / Forgejo <a class="header-anchor" href="#gitea-forgejo" aria-label="Permalink to &quot;Gitea / Forgejo&quot;">​</a></h4><details><summary>点击展开/收起</summary><p>以 Codeberg 为例：</p><ol><li>进入 <code>https://codeberg.org/user/settings/applications</code>，在 <code>Manage OAuth2 applications</code> 处创建新的 OAuth 2.0 应用，填写 Redirect URIs：<code>https://nezha.example.com/api/v1/oauth2/callback</code>；</li><li>创建之后会跳转到新创建的应用，保存下 Client ID 和 Client Secret；</li><li>填写哪吒 OAuth 2.0 配置，保存后重启面板：</li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oauth2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Codeberg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    clientid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a-unique-id&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    clientsecret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a-unique-secret&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      authurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://codeberg.org/login/oauth/authorize&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      tokenurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://codeberg.org/login/oauth/access_token&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    userinfourl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://codeberg.org/api/v1/user&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    useridpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span></span></code></pre></div></details><h4 id="gitlab" tabindex="-1">GitLab <a class="header-anchor" href="#gitlab" aria-label="Permalink to &quot;GitLab&quot;">​</a></h4><details><summary>点击展开/收起</summary><ol><li>进入 <code>https://gitlab.com/-/user_settings/applications</code>，点右侧 Create new application 创建新的 OAuth 2.0 应用，填写以下内容：</li></ol><ul><li><code>Callback URL</code>：哪吒 Callback URL，比如 <code>https://nezha.example.com/api/v1/oauth2/callback</code>；</li><li><code>Scopes</code>：这里只需要 <code>read_user</code>。 其它的默认即可</li></ul><ol start="2"><li>创建之后会跳转到应用界面，保存下 Client ID (Application ID) 和 Client Secret (Secret)；</li><li>填写哪吒 OAuth 2.0 配置，保存后重启面板：</li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oauth2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  GitLab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    clientid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a-unique-id&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    clientsecret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a-unique-secret&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      authurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://gitlab.com/oauth/authorize&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      tokenurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://gitlab.com/oauth/token&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    scopes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">read_user</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    userinfourl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://gitlab.com/api/v4/user&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    useridpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span></span></code></pre></div></details><hr><h2 id="绑定账户" tabindex="-1">绑定账户 <a class="header-anchor" href="#绑定账户" aria-label="Permalink to &quot;绑定账户&quot;">​</a></h2><p>在配置好 OAuth 2.0 信息后，登录后台，点击右上角头像进入个人设置。</p><p>在个人信息页的卡片列表里可以看见 OAuth 2 绑定的字样，其中有您所填写的 OAuth 2.0 配置名及其对应用户。点击配置名右侧的 <strong>绑定</strong> 按钮就可以跳转到认证页面进行账户绑定。</p><p>完成绑定后，便可以使用登录页下方的 OAuth 2 按钮登录您的账户。</p><hr><h2 id="禁止密码登录" tabindex="-1">禁止密码登录 <a class="header-anchor" href="#禁止密码登录" aria-label="Permalink to &quot;禁止密码登录&quot;">​</a></h2><p>在更新个人信息的表单中可以为当前用户启用该选项。</p><p>启用后，将无法通过密码登录当前用户，与验证失败的错误一致。</p><p>如果当前用户还没有任何 OAuth 2.0 绑定关系，则无法启用该选项；相应地，如果启用了该选项，当前用户只剩下一个 OAuth 2.0 绑定关系时将无法删除此绑定关系。</p>`,32),n=[e];function h(p,k,o,d,r,c){return a(),i("div",null,n)}const g=s(l,[["render",h]]);export{u as __pageData,g as default};
