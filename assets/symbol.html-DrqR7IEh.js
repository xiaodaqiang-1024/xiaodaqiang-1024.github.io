import{_ as o,c as l,a as e,b as s,d as a,e as p,o as c,r as i}from"./app-DYIcGBjW.js";const u={},r={href:"https://blog.csdn.net/qq_52395343/article/details/135047210?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/qq_52395343/article/details/134627404",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.csdn.net/qq_52395343/article/details/134587480",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/qq_52395343/article/details/134628960",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/qq_52395343/article/details/134749385",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/qq_52395343/article/details/134740199",target:"_blank",rel:"noopener noreferrer"};function y(g,n){const t=i("ExternalLinkIcon");return c(),l("div",null,[n[12]||(n[12]=e(`<p><code>Symbol</code> 是 ECMAScript 6（ES6）引入的一种新的<strong>基本数据类型</strong>。<code>Symbol </code>类型的值是<strong>唯一</strong>且<strong>不可变的</strong>。目的是确保<strong>对象属性</strong>使用唯一标识符，不会发生属性冲突的危险。</p><h2 id="_1-使用-symbol-创建" tabindex="-1"><a class="header-anchor" href="#_1-使用-symbol-创建"><span>1. 使用 Symbol() 创建</span></a></h2><p>调用 <code>Symbol()</code>函数时，也可以传入一个字符串参数作为对符号的描述，将来可以通过这个字符串来调试代码。但是，这个字符串参数与符号定义或标识完全无关。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">let</span> sym1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> sym2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> sym1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//symbol</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sym1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Symbol()</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sym2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Symbol(&#39;description&#39;)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> s3 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> s4 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1 <span class="token operator">===</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s3 <span class="token operator">===</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：<code>Symbol()</code>函数不能与 <code>new </code>关键字一起作为构造函数使用，这样做是为了避免创建包装对象。Symbol 的设计初衷是为了创建<strong>唯一的标识符</strong>，而不是作为构造函数创建对象。 <code>new Symbol()</code>会导致 <code>TypeError</code>，因为 Symbol 不是构造函数。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught TypeError: Symbol is not a constructor</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-使用-symbol-for-创建可共享-symbol" tabindex="-1"><a class="header-anchor" href="#_2-使用-symbol-for-创建可共享-symbol"><span>2. 使用 Symbol.for()创建可共享 Symbol</span></a></h2>`,7)),s("p",null,[n[1]||(n[1]=s("code",null,"Symbol.for",-1)),n[2]||(n[2]=a(" 会检查")),n[3]||(n[3]=s("strong",null,"全局 Symbol 注册表",-1)),n[4]||(n[4]=a("，如果存在相同描述的 Symbol，则返回已存在的 Symbol；否则，创建一个新的 Symbol。")),s("a",r,[n[0]||(n[0]=a("什么是幂等操作？")),p(t)])]),n[13]||(n[13]=e(`<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">let</span> s1 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建新的Symbol</span></span>
<span class="line"><span class="token keyword">let</span> s2 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过描述符在全局注册表中获取Symbol</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1 <span class="token operator">===</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Symbol.for()</code>对<strong>每个字符串键</strong>都执行<strong>幂等操作</strong>。无论在何处调用 <code>Symbol.for</code>(&#39;foo&#39;)，都会返回<strong>相同的全局共享</strong> Symbol。<br> 而每次调用 <code>Symbol()</code> 都会创建一个<strong>新的、不共享</strong>的 Symbol。即使描述符相同，每次调用 Symbol(&#39;foo&#39;) 都会返回一个不同的 Symbol。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> s3 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1 <span class="token operator">===</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s2 <span class="token operator">===</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-在实际开发中的运用" tabindex="-1"><a class="header-anchor" href="#_3-在实际开发中的运用"><span>3. 在实际开发中的运用</span></a></h2><h3 id="_3-1-作为对象属性的键" tabindex="-1"><a class="header-anchor" href="#_3-1-作为对象属性的键"><span>3.1 作为对象属性的键</span></a></h3><p>由于 Symbol 的唯一性，它可以用作对象的属性名，且不容易被意外覆盖。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 创建一些 Symbol 属性</span></span>
<span class="line"><span class="token keyword">const</span> symbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;symbol1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> symbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;symbol2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>symbol1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span>symbol2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;value2&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-定义常量" tabindex="-1"><a class="header-anchor" href="#_3-2-定义常量"><span>3.2 定义常量</span></a></h3><p>使用 Symbol 可以创建全局唯一的常量，避免<strong>命名冲突</strong>。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> LogLevel <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">INFO</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;INFO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">WARNING</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;WARNING&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">ERROR</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;ERROR&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">logMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> level <span class="token operator">=</span> LogLevel<span class="token punctuation">.</span><span class="token constant">INFO</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 根据不同的日志级别执行不同的操作</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">===</span> LogLevel<span class="token punctuation">.</span><span class="token constant">INFO</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">INFO: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">===</span> LogLevel<span class="token punctuation">.</span><span class="token constant">WARNING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">WARNING: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">===</span> LogLevel<span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ERROR: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">logMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Something happened&quot;</span><span class="token punctuation">,</span> LogLevel<span class="token punctuation">.</span><span class="token constant">WARNING</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-实现类似私有成员" tabindex="-1"><a class="header-anchor" href="#_3-3-实现类似私有成员"><span>3.3 实现类似私有成员</span></a></h3><p>通过将 Symbol 用作属性名，可以模拟实现类似私有成员的概念。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> privateProperty <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;privateProperty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">[</span>privateProperty<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;I am private!&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">getPrivateProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>privateProperty<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span><span class="token function">getPrivateProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：I am private!</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>instance<span class="token punctuation">[</span>privateProperty<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined，无法直接访问私有属性</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-使用内置-symbol-值" tabindex="-1"><a class="header-anchor" href="#_3-4-使用内置-symbol-值"><span>3.4 使用内置 Symbol 值</span></a></h3><p>JavaScript 提供了一些内置的 <code>Symbol </code>值，例如 <code>Symbol.iterator</code>、<code>Symbol.toPrimitive</code> 等，它们用于定义对象的默认迭代行为、类型转换等。 拿 Symbol.iterator 举个栗子： 它是一个内置的 Symbol 值，它用于<strong>定义对象的默认迭代器</strong>。 <strong>迭代器是一个对象</strong>，它实现了一个 <code>next</code>方法，该方法返回包含 <code>value</code> 和 <code>done</code> 属性的对象，<code>value</code> 表示当前迭代的值，<code>done</code>属性表示迭代是否完成。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  values<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>values<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> index <span class="token operator">&lt;</span> values<span class="token punctuation">.</span>length</span>
<span class="line">          <span class="token operator">?</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> values<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> done<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> done<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> myObject<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-symbol-的遍历" tabindex="-1"><a class="header-anchor" href="#_4-symbol-的遍历"><span>4. Symbol 的遍历</span></a></h2><p><strong>注意</strong>：Symbol 是不可被枚举的，因此使用 <code>for...in</code>循环或 <code>Object.keys()</code> 无法遍历出 Symbol 属性。 <code>Object.getOwnPropertySymbols(obj)</code>，可以获取所 Symbol 属性值, 返回值是一个数组。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> symbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;symbol1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> symbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;symbol2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>symbol1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span>symbol2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;value2&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  greeting<span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取对象的所有 Symbol 属性</span></span>
<span class="line"><span class="token keyword">const</span> symbolProperties <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbolProperties<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [Symbol(symbol1), Symbol(symbol2)]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;greeting&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Reflect.ownKeys(obj)</code>，可以获取包含 Symbol 在内的所有键。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 获取包含 Symbol的所有键</span></span>
<span class="line"><span class="token keyword">const</span> allKeys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>allKeys<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[Symbol(symbol1), Symbol(symbol2)，&#39;greeting&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，也可以使用<code>Object.keys</code>和<code>Object.getOwnPropertySymbols</code>的组合的数组。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> allKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">...</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>allKeys<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,23)),s("p",null,[n[10]||(n[10]=a("✨")),n[11]||(n[11]=s("strong",null,"JavaScript 高级知识点：",-1)),s("a",k,[n[5]||(n[5]=a("1.什么是闭包和作用域链？")),p(t)]),s("a",d,[n[6]||(n[6]=a("2.什么是 arguments 对象？")),p(t)]),s("a",m,[n[7]||(n[7]=a("3.什么是 proxy 代理？")),p(t)]),s("a",b,[n[8]||(n[8]=a("4.类数组对象是什么？")),p(t)]),s("a",v,[n[9]||(n[9]=a("5.Array.from()的 6 种常见用法")),p(t)])])])}const h=o(u,[["render",y],["__file","symbol.html.vue"]]),S=JSON.parse('{"path":"/blogs/frontend/2023/symbol.html","title":"什么是Symbol？","lang":"en-US","frontmatter":{"title":"什么是Symbol？","date":"2023-12-27T00:00:00.000Z","tags":["javaScript"],"categories":["前端"],"sticky":1},"headers":[{"level":2,"title":"1. 使用 Symbol() 创建","slug":"_1-使用-symbol-创建","link":"#_1-使用-symbol-创建","children":[]},{"level":2,"title":"2. 使用 Symbol.for()创建可共享 Symbol","slug":"_2-使用-symbol-for-创建可共享-symbol","link":"#_2-使用-symbol-for-创建可共享-symbol","children":[]},{"level":2,"title":"3. 在实际开发中的运用","slug":"_3-在实际开发中的运用","link":"#_3-在实际开发中的运用","children":[{"level":3,"title":"3.1 作为对象属性的键","slug":"_3-1-作为对象属性的键","link":"#_3-1-作为对象属性的键","children":[]},{"level":3,"title":"3.2 定义常量","slug":"_3-2-定义常量","link":"#_3-2-定义常量","children":[]},{"level":3,"title":"3.3 实现类似私有成员","slug":"_3-3-实现类似私有成员","link":"#_3-3-实现类似私有成员","children":[]},{"level":3,"title":"3.4 使用内置 Symbol 值","slug":"_3-4-使用内置-symbol-值","link":"#_3-4-使用内置-symbol-值","children":[]}]},{"level":2,"title":"4. Symbol 的遍历","slug":"_4-symbol-的遍历","link":"#_4-symbol-的遍历","children":[]}],"git":{"createdTime":1732786300000,"updatedTime":1732786300000,"contributors":[{"name":"肖强","email":"1371724282@qq.com","commits":1}]},"filePathRelative":"blogs/frontend/2023/symbol.md"}');export{h as comp,S as data};
