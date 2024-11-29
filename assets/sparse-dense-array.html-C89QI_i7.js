import{_ as s,c as a,a as e,o as p}from"./app-DYIcGBjW.js";const t={};function o(c,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h2 id="_1-稀疏数组" tabindex="-1"><a class="header-anchor" href="#_1-稀疏数组"><span>1. 稀疏数组</span></a></h2><p>稀疏数组（Sparse Array）：稀疏数组是指数组中包含<strong>未定义</strong>的元素，或者说其中某些位置没有被分配值。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[empty × 5]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5</span></span>
<span class="line"></span>
<span class="line">a<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//不输出</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span></span>
<span class="line"></span>
<span class="line">a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1, empty, 2, empty × 2]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为什么在访问具体单个元素时返回 undefined?</strong></p><p>可以从 <strong>JS 引擎解析</strong>的角度去看。在 v8 源码上对于 empty 的描述是一个<strong>空的对象引用</strong>，但 JS 基本类型中并无这种类型，故用 <code>undefined</code> 来代替。这种表现就像我们在控制台访问一个不存在变量时，通常得到的就是 undefined。</p><h2 id="_2-密集数组" tabindex="-1"><a class="header-anchor" href="#_2-密集数组"><span>2. 密集数组</span></a></h2><p>密集数组（Dense Array）：指数组中的元素占据了连续的内存空间，并且数组的长度与数组中元素的数量相等。换句话说，密集数组中没有未定义的元素，<strong>每个索引位置都有一个明确的值。</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[undefined, undefined, undefined, undefined, undefined]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5</span></span>
<span class="line"></span>
<span class="line">b<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//会输出</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span></span>
<span class="line">b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">b<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, undefined, 2, undefined, undefined]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>Array.from()</code> 绝不会创建稀疏数组。如果缺少一些索引属性，那么这些属性在新数组中将是 undefined。</p></blockquote><h2 id="_3-常见的稀疏数组和密集数组的创建方式" tabindex="-1"><a class="header-anchor" href="#_3-常见的稀疏数组和密集数组的创建方式"><span>3. 常见的稀疏数组和密集数组的创建方式</span></a></h2><h3 id="_3-1-创建稀疏数组" tabindex="-1"><a class="header-anchor" href="#_3-1-创建稀疏数组"><span>3.1 创建稀疏数组</span></a></h3><p><strong>跳过一些索引</strong>： 通过直接赋值创建数组时，可以跳过一些索引，从而创建稀疏数组。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> sparseArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">sparseArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span></span>
<span class="line">sparseArray<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sparseArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[&#39;a&#39;,empty,&#39;c&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 Array 构造函数</strong>： 可以使用 Array 构造函数创建稀疏数组，并指定数组的<strong>长度</strong>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> sparseArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sparseArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[empty × 3]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-创建密集数组" tabindex="-1"><a class="header-anchor" href="#_3-2-创建密集数组"><span>3.2 创建密集数组</span></a></h3><p><strong>直接赋值创建</strong>： 通过直接赋值创建数组，确保所有索引都被赋值。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> denseArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>使用 Array 构造函数</strong>： 使用 Array 构造函数创建数组，并在参数中指定数组的<strong>元素</strong>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> denseArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>填充元素</strong>： 使用数组方法如<code>fill()</code>或 splice() 来填充数组，确保所有索引都有值。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> denseArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 元素填充为null</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>denseArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[null, null, null, null, null]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-稀疏数组与密集数组的相互转换" tabindex="-1"><a class="header-anchor" href="#_4-稀疏数组与密集数组的相互转换"><span>4. 稀疏数组与密集数组的相互转换</span></a></h2><p>🔸<strong>密集数组 =&gt;稀疏数组</strong><strong>使用 delete 操作符</strong>： 删除密集数组中的某些元素</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">delete</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1, empty, 3]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重新分配数组长度</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1, 2, 3, empty × 2]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🔸<strong>稀疏数组 =&gt; 密集数组</strong><strong>Array.apply()</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 稀疏数组</span></span>
<span class="line"><span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[undefined, undefined, undefined, undefined, undefined]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Array.from()进行转换</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 稀疏数组</span></span>
<span class="line"><span class="token keyword">const</span> newArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[undefined, undefined, undefined, undefined, undefined]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>扩展运算符</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 稀疏数组</span></span>
<span class="line"><span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[undefined, undefined, undefined, undefined, undefined]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-稀疏数组和密集数组的优缺点" tabindex="-1"><a class="header-anchor" href="#_5-稀疏数组和密集数组的优缺点"><span>5. 稀疏数组和密集数组的优缺点</span></a></h2><h3 id="_5-1-稀疏数组的优缺点" tabindex="-1"><a class="header-anchor" href="#_5-1-稀疏数组的优缺点"><span>5.1 稀疏数组的优缺点</span></a></h3><p>🔸 优点： <strong>节省内存空间</strong>： 稀疏数组允许数组长度大于实际存储的元素数量，因此可以节省内存空间，特别是在处理大型数据集时更为显著。 <strong>灵活性</strong>： 可以方便地<strong>将新元素插入到数组的任意位置，无需调整其他元素的索引</strong>，因为未定义的元素不占用实际的存储空间。</p><p>🔸 缺点： <strong>性能影响</strong>： 对稀疏数组进行迭代或操作时，可能会因为存在未定义的空洞而导致额外的性能开销，需要小心处理。</p><blockquote><p>当遍历稀疏数组时，需要检查每个元素是否已定义，以避免处理未定义的空洞。这可能需要额外的比较操作和条件检查，从而增加执行时间。另外，在对稀疏数组进行某些操作时，如排序或过滤，未定义的空洞也需要被考虑进去，这可能会<strong>增加算法的复杂度和执行时间。</strong></p></blockquote><p><strong>容易混淆</strong>： 稀疏数组可能会导致一些意想不到的行为，例如在遍历时需要额外的判断<strong>来跳过未定义的元素</strong>，可能会引入错误。(比如在使用<code>map, forEach, filter</code>等方法时，遇到 empty 元素的时候，callback 函数是不会执行的)</p><h3 id="_5-2-密集数组的优缺点" tabindex="-1"><a class="header-anchor" href="#_5-2-密集数组的优缺点"><span>5.2 密集数组的优缺点</span></a></h3><p>🔸 优点： <strong>性能优势</strong>： 密集数组在<strong>访问</strong>和<strong>迭代</strong>时性能较好，因为它们没有未定义的空洞，数组元素在内存中是连续存储的。 <strong>简单直观</strong>： 密集数组的索引与元素一一对应，更易于理解和维护。 🔸 缺点： <strong>内存占用较高</strong>： 密集数组的长度与实际存储的元素数量一致，可能会占用较多的内存空间，特别是在大规模数据集上。 <strong>不够灵活</strong>： 插入或删除元素时，可能需要调整数组中其他元素的索引，导致性能下降。</p><h3 id="_5-3-总结" tabindex="-1"><a class="header-anchor" href="#_5-3-总结"><span>5.3 总结</span></a></h3><p><strong>数组较小</strong>且<strong>元素是连续的</strong>，适合<strong>密集数组</strong>。 <strong>数据多</strong>或<strong>频繁动态操作元素</strong>，适合<strong>稀疏数组</strong>。</p>`,43)]))}const i=s(t,[["render",o],["__file","sparse-dense-array.html.vue"]]),u=JSON.parse('{"path":"/blogs/frontend/2024/sparse-dense-array.html","title":"什么是稀疏数组和密集数组？","lang":"en-US","frontmatter":{"title":"什么是稀疏数组和密集数组？","date":"2024-02-22T00:00:00.000Z","tags":["javaScript"],"categories":["前端"],"sticky":1},"headers":[{"level":2,"title":"1. 稀疏数组","slug":"_1-稀疏数组","link":"#_1-稀疏数组","children":[]},{"level":2,"title":"2. 密集数组","slug":"_2-密集数组","link":"#_2-密集数组","children":[]},{"level":2,"title":"3. 常见的稀疏数组和密集数组的创建方式","slug":"_3-常见的稀疏数组和密集数组的创建方式","link":"#_3-常见的稀疏数组和密集数组的创建方式","children":[{"level":3,"title":"3.1 创建稀疏数组","slug":"_3-1-创建稀疏数组","link":"#_3-1-创建稀疏数组","children":[]},{"level":3,"title":"3.2 创建密集数组","slug":"_3-2-创建密集数组","link":"#_3-2-创建密集数组","children":[]}]},{"level":2,"title":"4. 稀疏数组与密集数组的相互转换","slug":"_4-稀疏数组与密集数组的相互转换","link":"#_4-稀疏数组与密集数组的相互转换","children":[]},{"level":2,"title":"5. 稀疏数组和密集数组的优缺点","slug":"_5-稀疏数组和密集数组的优缺点","link":"#_5-稀疏数组和密集数组的优缺点","children":[{"level":3,"title":"5.1 稀疏数组的优缺点","slug":"_5-1-稀疏数组的优缺点","link":"#_5-1-稀疏数组的优缺点","children":[]},{"level":3,"title":"5.2 密集数组的优缺点","slug":"_5-2-密集数组的优缺点","link":"#_5-2-密集数组的优缺点","children":[]},{"level":3,"title":"5.3 总结","slug":"_5-3-总结","link":"#_5-3-总结","children":[]}]}],"git":{"createdTime":1732786300000,"updatedTime":1732786300000,"contributors":[{"name":"肖强","email":"1371724282@qq.com","commits":1}]},"filePathRelative":"blogs/frontend/2024/sparse-dense-array.md"}');export{i as comp,u as data};
