import{_ as i,c as a,o as s,a4 as t}from"./chunks/framework.BmdFiWrL.js";const g=JSON.parse('{"title":"Enabling GPU Monitoring","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"en_US/guide/q9.md","filePath":"en_US/guide/q9.md","lastUpdated":1733609010000}'),n={name:"en_US/guide/q9.md"},e=t(`<h1 id="enabling-gpu-monitoring" tabindex="-1">Enabling GPU Monitoring <a class="header-anchor" href="#enabling-gpu-monitoring" aria-label="Permalink to &quot;Enabling GPU Monitoring&quot;">​</a></h1><h2 id="activating-gpu-monitoring" tabindex="-1">Activating GPU Monitoring <a class="header-anchor" href="#activating-gpu-monitoring" aria-label="Permalink to &quot;Activating GPU Monitoring&quot;">​</a></h2><h3 id="via-configuration-file" tabindex="-1">Via Configuration File <a class="header-anchor" href="#via-configuration-file" aria-label="Permalink to &quot;Via Configuration File&quot;">​</a></h3><p>Enable the <code>gpu</code> parameter in the <code>/opt/nezha/agent/config.yml</code> file:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gpu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><p>After saving the changes, restart the Agent service to apply the configuration:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent.service</span></span></code></pre></div><hr><h2 id="gpu-utilization-monitoring-support" tabindex="-1">GPU Utilization Monitoring Support <a class="header-anchor" href="#gpu-utilization-monitoring-support" aria-label="Permalink to &quot;GPU Utilization Monitoring Support&quot;">​</a></h2><p>GPU model and GPU utilization are separate monitoring metrics, and their retrieval methods differ:</p><ol><li><p><strong>Windows and macOS</strong></p><ul><li>No additional dependencies are required for monitoring GPU utilization.</li><li>Supports multiple GPU brands (e.g., NVIDIA, AMD).</li></ul></li><li><p><strong>Linux</strong></p><ul><li>Supports only NVIDIA and AMD GPUs.</li><li>Requires additional drivers or tools to retrieve GPU utilization.<br> Below are specific steps to enable GPU utilization monitoring on Linux.</li></ul></li></ol><hr><h3 id="nvidia-gpus" tabindex="-1">NVIDIA GPUs <a class="header-anchor" href="#nvidia-gpus" aria-label="Permalink to &quot;NVIDIA GPUs&quot;">​</a></h3><h4 id="required-tool" tabindex="-1">Required Tool <a class="header-anchor" href="#required-tool" aria-label="Permalink to &quot;Required Tool&quot;">​</a></h4><p>NVIDIA GPUs use the <code>nvidia-smi</code> tool to retrieve utilization data. This tool is typically included with the official NVIDIA driver.</p><h4 id="important-notes" tabindex="-1">Important Notes <a class="header-anchor" href="#important-notes" aria-label="Permalink to &quot;Important Notes&quot;">​</a></h4><ul><li>Third-party drivers (e.g., <code>nouveau</code>) are not supported for GPU utilization monitoring.</li><li>Ensure the official NVIDIA driver is installed and that GPU data is accessible via <code>nvidia-smi</code>.</li></ul><hr><h3 id="amd-gpus" tabindex="-1">AMD GPUs <a class="header-anchor" href="#amd-gpus" aria-label="Permalink to &quot;AMD GPUs&quot;">​</a></h3><h4 id="required-tool-1" tabindex="-1">Required Tool <a class="header-anchor" href="#required-tool-1" aria-label="Permalink to &quot;Required Tool&quot;">​</a></h4><p>AMD GPUs require the open-source <code>amdgpu</code> driver and the <code>rocm-smi</code> tool for utilization monitoring.</p><h4 id="installation-instructions" tabindex="-1">Installation Instructions <a class="header-anchor" href="#installation-instructions" aria-label="Permalink to &quot;Installation Instructions&quot;">​</a></h4><p>Use the following commands for popular Linux distributions:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Arch Linux</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Sy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rocm-smi-lib</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Debian / Ubuntu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rocm-smi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Fedora / RHEL 8+</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rocm-smi</span></span></code></pre></div><hr><h4 id="manual-installation-of-rocm-smi-lib" tabindex="-1">Manual Installation of <code>rocm_smi_lib</code> <a class="header-anchor" href="#manual-installation-of-rocm-smi-lib" aria-label="Permalink to &quot;Manual Installation of \`rocm_smi_lib\`&quot;">​</a></h4><p>If your system lacks a pre-packaged version of <code>rocm-smi</code>, you can manually compile and install the <code>rocm_smi_lib</code>.</p><h5 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h5><p>Ensure the following tools are installed:</p><ul><li><code>git</code></li><li><code>cmake</code></li><li><code>gcc</code></li></ul><h5 id="installation-steps" tabindex="-1">Installation Steps <a class="header-anchor" href="#installation-steps" aria-label="Permalink to &quot;Installation Steps&quot;">​</a></h5><ol><li><p><strong>Clone the Repository</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/ROCm/rocm_smi_lib</span></span></code></pre></div></li><li><p><strong>Compile and Install</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rocm_smi_lib</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ..</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nproc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install the library and headers to the default location (/opt/rocm)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div></li></ol>`,32),l=[e];function o(r,h,p,d,c,k){return s(),a("div",null,l)}const m=i(n,[["render",o]]);export{g as __pageData,m as default};
