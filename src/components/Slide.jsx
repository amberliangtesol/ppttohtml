import React from 'react';

const Slide = ({ slide }) => {
  // 第一張投影片：封面
  if (slide.id === 1) {
    return (
      <section className="min-h-screen flex flex-col md:grid md:grid-cols-2 gap-10 items-center p-8 md:p-16">
        <div>
          <p className="text-sm font-semibold text-red-600 mb-2">
            人工智慧與資訊安全 · 高階理論
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            AI 偵測技術<br />
            <span className="text-red-600">深度理論篇</span>
          </h1>
          <p className="text-lg text-slate-700 mb-6">
            AI-generated vs Human-written
            文字鑑別：結合高階語言學、統計語言模型、深度學習與對抗攻擊，建立一套
            「可量化、可視覺化、可實作」的 AI 偵測理論架構。
          </p>

          <div className="space-y-2 mb-6">
            <h2 className="text-base font-semibold text-slate-900">🎯 主題焦點</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm md:text-base">
              <li>AI 文字 vs 人類文字：本質差異與可量化特徵</li>
              <li>困惑度（Perplexity）與句子節奏（Burstiness）</li>
              <li>Stylometry 風格統計與語意向量空間</li>
              <li>Zipf 長尾分布、XAI 解釋性與對抗攻擊</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-500 pl-4 text-sm text-slate-600 space-y-1">
            <p>本簡報將所有理論整理成 30 張高密度教學 slide，適合作為：</p>
            <p>➤「AI 偵測技術」課程教材 · 研討會分享 · 系統設計前導說明</p>
          </div>
        </div>

        <div className="w-full">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-500/80 via-red-400 to-rose-500 text-white p-6 md:p-8 shadow-xl">
            <p className="text-sm font-semibold mb-3 tracking-wide uppercase">
              Conceptual Diagram
            </p>
            <p className="text-xl font-bold mb-2">Human vs AI 文字粒子雲示意</p>
            <p className="text-sm text-red-50 mb-4">
              右側圖像可替換為：BERT 模型方塊圖 + Human / AI
              文字在語意空間中的分佈差異。
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              <div className="bg-white/10 rounded-2xl p-3">
                <p className="font-semibold mb-1">Human-written</p>
                <ul className="space-y-1 text-red-50">
                  <li>· 粒子雲破碎、跳躍、多叢聚</li>
                  <li>· 情緒驟升驟降，句長不規則</li>
                  <li>· 稀有詞、口語詞分佈拉長尾巴</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-2xl p-3">
                <p className="font-semibold mb-1">AI-generated</p>
                <ul className="space-y-1 text-red-50">
                  <li>· 粒子雲連續、集中、形狀規則</li>
                  <li>· 句構穩定，機率最優化</li>
                  <li>· 長尾詞出現頻率不足</li>
                </ul>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-[11px] md:text-xs">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/30">
                BERT / GPT
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/30">
                Perplexity Map
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/30">
                Stylometry
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/30">
                Semantic Drift
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 第二張投影片：Agenda
  if (slide.id === 2) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl rounded-3xl bg-white shadow-sm p-6 md:p-10">
          <p className="text-sm font-semibold text-red-600 mb-2">
            Introduction · 今日架構
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Agenda — 本次內容地圖
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base">
            <ul className="space-y-2">
              <li>1. 語言模型如何看待文本？（Language Model & Likelihood）</li>
              <li>2. 困惑度 Perplexity：定義、公式與實務解讀</li>
              <li>3. 句子節奏統計 Burstiness：長短句混合度</li>
              <li>4. Stylometry 寫作風格統計：Lexical / Syntax / Emotion</li>
              <li>5. 語意向量空間：Embedding Drift & Variance</li>
            </ul>
            <ul className="space-y-2">
              <li>6. Zipf's Law 長尾分布與「人味」指標</li>
              <li>7. XAI：模型在看什麼？SHAP / IG 可視覺化</li>
              <li>8. 傳統 ML vs BERT Hybrid 偵測架構</li>
              <li>9. 對抗攻擊：錯字插入與隨機化生成</li>
              <li>10. 完整偵測架構與閾值設計 · 結語</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  // 第三張投影片：問題定義
  if (slide.id === 3) {
    return (
      <section className="min-h-screen flex items-center p-8">
        <div className="w-full max-w-6xl mx-auto md:grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-red-600 mb-2">
              Problem Definition
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              AI 偵測是什麼？— Binary Classification 視角
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-4">
              我們要解決的核心問題：<span className="font-semibold">「判斷一段文字是否由 AI 撰寫」</span>。
            </p>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4 text-sm md:text-base">
              <p className="font-semibold mb-2">數學化表示：</p>
              <p className="font-mono text-xs md:text-sm bg-slate-900 text-emerald-200 rounded-lg px-3 py-2 inline-block">
                f(x) = P(AI ∣ x)
              </p>
              <p className="mt-3 text-slate-700">
                其中 <span className="font-mono">x</span> 為整段文本，我們希望設計一組特徵
                <span className="font-mono"> φ(x)</span>，讓 AI 生成文本與 Human
                文本在特徵空間中可分離。
              </p>
            </div>

            <div className="text-xs md:text-sm text-slate-600 space-y-1">
              <p>⚠️ 偵測 ≠ 鑑定：</p>
              <ul className="list-disc list-inside space-y-1">
                <li>輸出的是「AI 機率」而非「司法鑑定」的絕對真相。</li>
                <li>適合作為輔助訊號、風險指標，而不是唯一決策來源。</li>
              </ul>
            </div>
          </div>

          <div className="w-full">
            <div className="h-64 md:h-80 rounded-3xl bg-white shadow-sm border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
              （可放：AI vs Human 樣本文字，右側顯示偵測模型輸出的機率條）
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 第四張投影片：AI vs Human 本質差異
  if (slide.id === 4) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl rounded-3xl bg-white shadow-sm p-6 md:p-10">
          <p className="text-sm font-semibold text-red-600 mb-2">
            Conceptual Contrast
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            AI 文本 vs 人類文本 — 本質差異
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base">
            <div className="space-y-2">
              <p className="font-semibold mb-2">AI 生成文本的典型特徵：</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  由大型語言模型根據條件機率產生 →
                  <span className="font-semibold"> 機率最優</span>、連續穩定
                </li>
                <li>
                  整體篇章結構與語氣
                  <span className="font-semibold"> 一致性高</span>、邏輯流暢
                </li>
                <li>較少極端長句 / 斷裂，較少「情緒爆衝」式表達</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold mb-2">Human 文本的典型特徵：</p>
              <ul className="list-disc list-inside space-y-1">
                <li>跳躍性高、帶有噪音；情緒驟升驟降，容易跑題</li>
                <li>常見錯字、口語化、省略、未完成句</li>
                <li>主題可能出現 「topic drift」：突然轉向不相關話題</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 border-t pt-4 text-xs md:text-sm text-slate-600">
            <p>
              📊 視覺化建議：左右並排相同主題的 AI 文與 Human
              文，標出句長、連接詞使用頻率與情緒用語分佈，作為後續指標（PP、Burstiness、Stylometry）的直覺示意。
            </p>
          </div>
        </div>
      </section>
    );
  }

  // 第五張投影片：困惑度
  if (slide.id === 5) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
            <p className="text-sm font-semibold text-purple-600 mb-2">
              Core Metric #1
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              困惑度 (Perplexity)
            </h2>
            
            <div className="bg-purple-100 rounded-xl p-6 mb-6">
              <p className="text-lg font-semibold text-purple-900">
                衡量語言模型對一段文字的「驚訝程度」
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 mb-6 shadow-md">
              <code className="text-purple-900 font-mono text-lg">
                PPL = exp(-1/N ∑ log P(w_i|w_{'{<i}'}))
              </code>
            </div>
            
            <div className="space-y-3 mb-6">
              <p className="text-slate-700 flex items-start">
                <span className="text-purple-500 mr-2">→</span>
                <span>低困惑度 → 模型覺得「很正常」→ 可能是 AI 生成</span>
              </p>
              <p className="text-slate-700 flex items-start">
                <span className="text-purple-500 mr-2">→</span>
                <span>高困惑度 → 模型覺得「很意外」→ 可能是人類寫作</span>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-4">
                <p className="font-semibold text-red-700">Human</p>
                <p className="text-red-600">PPL ≈ 342 (跳躍、創意)</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-semibold text-blue-700">AI</p>
                <p className="text-blue-600">PPL ≈ 28 (流暢、可預測)</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 mt-4 italic">
              困惑度分佈圖：Human 呈現長尾分佈，AI 集中在低值區域
            </p>
          </div>
        </div>
      </section>
    );
  }

  // 第六張投影片：句子節奏
  if (slide.id === 6) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8">
            <p className="text-sm font-semibold text-emerald-600 mb-2">
              Core Metric #2
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              句子節奏 (Burstiness)
            </h2>
            
            <div className="bg-emerald-100 rounded-xl p-6 mb-6">
              <p className="text-lg font-semibold text-emerald-900">
                句子長度變化的不規則程度
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold mb-3 text-red-600">人類寫作</h3>
                <p className="font-mono text-sm bg-gray-100 p-2 rounded mb-3">
                  短。長長長長長。短短。超長...
                </p>
                <ul className="space-y-1">
                  <li className="text-sm text-slate-600">• 節奏多變</li>
                  <li className="text-sm text-slate-600">• 情緒影響句長</li>
                  <li className="text-sm text-slate-600">• 強調重點用短句</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold mb-3 text-blue-600">AI 生成</h3>
                <p className="font-mono text-sm bg-gray-100 p-2 rounded mb-3">
                  中長。中長。中長。中長...
                </p>
                <ul className="space-y-1">
                  <li className="text-sm text-slate-600">• 句長穩定</li>
                  <li className="text-sm text-slate-600">• 維持 15-25 字</li>
                  <li className="text-sm text-slate-600">• 避免極端值</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-teal-100 rounded-lg p-4">
              <code className="text-teal-900 font-mono">
                Burstiness Score = σ(sentence_length) / μ(sentence_length)
              </code>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 第七張投影片：Stylometry
  if (slide.id === 7) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
            <p className="text-sm font-semibold text-orange-600 mb-2">
              Advanced Analysis
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">
              Stylometry 風格測量學
            </h2>
            <p className="text-xl text-slate-600 mb-8">透過統計方法分析寫作風格</p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold mb-3 text-orange-600">詞彙特徵</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-600">• 詞彙豐富度 (TTR)</li>
                  <li className="text-sm text-slate-600">• 功能詞頻率</li>
                  <li className="text-sm text-slate-600">• 平均詞長</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold mb-3 text-orange-600">句法特徵</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-600">• POS-tag 分佈</li>
                  <li className="text-sm text-slate-600">• 依存句法樹深度</li>
                  <li className="text-sm text-slate-600">• 被動語態比例</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold mb-3 text-orange-600">語義特徵</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-600">• 主題一致性</li>
                  <li className="text-sm text-slate-600">• 情感極性變化</li>
                  <li className="text-sm text-slate-600">• 具體性分數</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl p-6">
              <p className="font-semibold">
                實作方式：Random Forest / SVM 分類器，準確率可達 85-92%
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 第八張投影片：Zipf定律
  if (slide.id === 8) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8">
            <p className="text-sm font-semibold text-indigo-600 mb-2">
              Statistical Pattern
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Zipf 定律與長尾詞彙
            </h2>
            
            <div className="bg-indigo-100 rounded-xl p-6 mb-6">
              <p className="text-lg font-semibold text-indigo-900">
                詞頻與排名成反比：f(r) ∝ 1/r
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold mb-3 text-red-600">Human</h3>
                <p className="text-slate-700">遵循 Zipf 定律，稀有詞彙形成長尾</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold mb-3 text-blue-600">AI</h3>
                <p className="text-slate-700">長尾截斷，稀有詞出現頻率不足</p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="text-slate-700">
                <strong>視覺化：</strong> Log-log plot: Human 呈直線，AI 在尾部下彎
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl p-6">
              <p className="font-semibold">
                應用：檢測長尾詞彙比例 {'<'} 5% → 高機率為 AI 生成
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 第九張投影片：對抗攻擊與防禦
  if (slide.id === 9) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
              對抗攻擊與防禦機制
            </h2>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-red-600">🗡️ 攻擊方式</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-red-700">Paraphrasing Attack</h4>
                    <p className="text-sm text-slate-600 mt-1">用同義詞替換降低偵測率</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-red-700">Style Transfer</h4>
                    <p className="text-sm text-slate-600 mt-1">模仿特定人類寫作風格</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-red-700">Watermark Removal</h4>
                    <p className="text-sm text-slate-600 mt-1">移除 AI 生成的隱藏標記</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">🛡️ 防禦機制</h3>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <ul className="space-y-3">
                    <li className="text-slate-700 flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Ensemble Methods: 多模型投票</span>
                    </li>
                    <li className="text-slate-700 flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Adversarial Training: 對抗樣本訓練</span>
                    </li>
                    <li className="text-slate-700 flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Dynamic Features: 時序特徵分析</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 第十張投影片：結論
  if (slide.id === 10) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="w-full max-w-5xl text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">結論與展望</h2>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-300">📌 關鍵要點</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>AI 偵測是一場持續的攻防戰</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>多維度特徵組合優於單一指標</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>需要持續更新以應對新模型</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">🚀 未來發展</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>多模態偵測（文字+圖片）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>零樣本偵測新型 LLM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>隱私保護的聯邦學習偵測</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-8 text-center">
            <p className="text-xl font-semibold">
              理解 AI 與人類寫作的本質差異，是建立有效偵測系統的關鍵。
            </p>
          </div>
        </div>
      </section>
    );
  }

  // 預設回傳
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Slide {slide.id}</p>
    </div>
  );
};

export default Slide;