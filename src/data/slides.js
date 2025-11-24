export const slidesData = [
  {
    id: 1,
    type: 'cover',
    category: '人工智慧與資訊安全 · 高階理論',
    title: 'AI 偵測技術',
    subtitle: '深度理論篇',
    tagline: 'AI-generated vs Human-written',
    description: '文字鑑別：結合高階語言學、統計語言模型、深度學習與對抗攻擊，建立一套「可量化、可視覺化、可實作」的 AI 偵測理論架構。',
    highlights: [
      'AI 文字 vs 人類文字：本質差異與可量化特徵',
      '困惑度（Perplexity）與句子節奏（Burstiness）',
      'Stylometry 風格統計與語意向量空間',
      'Zipf 長尾分布、XAI 解釋性與對抗攻擊'
    ],
    footer: '本簡報將所有理論整理成 30 張高密度教學 slide，適合作為：「AI 偵測技術」課程教材 · 研討會分享 · 系統設計前導說明'
  },
  {
    id: 2,
    type: 'content',
    title: '結構大綱',
    sections: [
      {
        title: 'Part I 基礎理論',
        items: [
          '1. 為什麼 AI 寫作與人類不同？',
          '2. 困惑度 Perplexity',
          '3. 句子節奏 Burstiness',
          '4. 語意空間分佈',
          '5. 對抗攻擊與防禦'
        ]
      },
      {
        title: 'Part II 進階特徵',
        items: [
          '6. Stylometry 風格測量',
          '7. 長尾詞與 Zipf 定律',
          '8. 情緒與句構分析',
          '9. Cross-domain 跨領域偵測',
          '10. Explainable AI (XAI)'
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'theory',
    title: '為什麼 AI 寫作與人類不同？',
    content: {
      main: 'GPT/BERT 等語言模型透過「預測下一個最可能的詞」學習，其生成策略是基於大規模語料庫的統計最優解，而非人類的創意與情感驅動。',
      points: [
        {
          title: '人類寫作特徵',
          items: [
            '情緒起伏、跳躍思考',
            '個人經驗與偏見',
            '刻意違反語法求新意',
            '稀有詞彙與俚語'
          ]
        },
        {
          title: 'AI 寫作特徵',
          items: [
            '統計最優、流暢一致',
            '避免極端用詞',
            '句構規律、連接詞標準',
            '常見詞彙組合'
          ]
        }
      ],
      formula: 'P(word|context) = softmax(f_θ(context))',
      insight: '關鍵差異：人類追求「表達」，AI 追求「機率」'
    }
  },
  {
    id: 4,
    type: 'concept',
    title: '困惑度 (Perplexity)',
    definition: '衡量語言模型對一段文字的「驚訝程度」',
    formula: 'PPL = exp(-1/N ∑ log P(w_i|w_{<i}))',
    explanation: [
      '低困惑度 → 模型覺得「很正常」→ 可能是 AI 生成',
      '高困惑度 → 模型覺得「很意外」→ 可能是人類寫作'
    ],
    example: {
      human: 'PPL ≈ 342 (跳躍、創意)',
      ai: 'PPL ≈ 28 (流暢、可預測)'
    },
    visualization: '困惑度分佈圖：Human 呈現長尾分佈，AI 集中在低值區域'
  },
  {
    id: 5,
    type: 'concept',
    title: '句子節奏 (Burstiness)',
    definition: '句子長度變化的不規則程度',
    characteristics: {
      human: {
        title: '人類寫作',
        pattern: '短。長長長長長。短短。超長...',
        features: ['節奏多變', '情緒影響句長', '強調重點用短句']
      },
      ai: {
        title: 'AI 生成',
        pattern: '中長。中長。中長。中長...',
        features: ['句長穩定', '維持 15-25 字', '避免極端值']
      }
    },
    metric: 'Burstiness Score = σ(sentence_length) / μ(sentence_length)'
  },
  {
    id: 6,
    type: 'advanced',
    title: 'Stylometry 風格測量學',
    subtitle: '透過統計方法分析寫作風格',
    features: [
      {
        category: '詞彙特徵',
        items: ['詞彙豐富度 (TTR)', '功能詞頻率', '平均詞長']
      },
      {
        category: '句法特徵',
        items: ['POS-tag 分佈', '依存句法樹深度', '被動語態比例']
      },
      {
        category: '語義特徵',
        items: ['主題一致性', '情感極性變化', '具體性分數']
      }
    ],
    implementation: 'Random Forest / SVM 分類器，準確率可達 85-92%'
  },
  {
    id: 7,
    type: 'theory',
    title: 'Zipf 定律與長尾詞彙',
    concept: '詞頻與排名成反比：f(r) ∝ 1/r',
    observation: {
      human: '遵循 Zipf 定律，稀有詞彙形成長尾',
      ai: '長尾截斷，稀有詞出現頻率不足'
    },
    visualization: 'Log-log plot: Human 呈直線，AI 在尾部下彎',
    application: '檢測長尾詞彙比例 < 5% → 高機率為 AI 生成'
  },
  {
    id: 8,
    type: 'defense',
    title: '對抗攻擊與防禦機制',
    attacks: [
      {
        name: 'Paraphrasing Attack',
        method: '用同義詞替換降低偵測率'
      },
      {
        name: 'Style Transfer',
        method: '模仿特定人類寫作風格'
      },
      {
        name: 'Watermark Removal',
        method: '移除 AI 生成的隱藏標記'
      }
    ],
    defenses: [
      'Ensemble Methods: 多模型投票',
      'Adversarial Training: 對抗樣本訓練',
      'Dynamic Features: 時序特徵分析'
    ]
  },
  {
    id: 9,
    type: 'implementation',
    title: '實作架構',
    pipeline: [
      {
        stage: '預處理',
        tasks: ['分詞、句子切割', 'POS tagging', '情感分析']
      },
      {
        stage: '特徵提取',
        tasks: ['Perplexity 計算', 'Stylometry 特徵', 'Semantic embedding']
      },
      {
        stage: '模型推論',
        tasks: ['BERT-based classifier', 'Statistical model', 'Ensemble voting']
      },
      {
        stage: '後處理',
        tasks: ['信心分數校準', 'XAI 解釋生成', '報告輸出']
      }
    ]
  },
  {
    id: 10,
    type: 'conclusion',
    title: '結論與展望',
    keyPoints: [
      'AI 偵測是一場持續的攻防戰',
      '多維度特徵組合優於單一指標',
      '需要持續更新以應對新模型'
    ],
    future: [
      '多模態偵測（文字+圖片）',
      '零樣本偵測新型 LLM',
      '隱私保護的聯邦學習偵測'
    ],
    message: '理解 AI 與人類寫作的本質差異，是建立有效偵測系統的關鍵。'
  }
]