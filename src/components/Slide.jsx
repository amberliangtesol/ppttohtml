import React from 'react';

const Slide = ({ slide }) => {
  switch (slide.type) {
    case 'cover':
      return <CoverSlide {...slide} />;
    case 'content':
      return <ContentSlide {...slide} />;
    case 'theory':
      return <TheorySlide {...slide} />;
    case 'concept':
      return <ConceptSlide {...slide} />;
    case 'advanced':
      return <AdvancedSlide {...slide} />;
    case 'defense':
      return <DefenseSlide {...slide} />;
    case 'implementation':
      return <ImplementationSlide {...slide} />;
    case 'conclusion':
      return <ConclusionSlide {...slide} />;
    default:
      return <DefaultSlide {...slide} />;
  }
};

const CoverSlide = ({ category, title, subtitle, tagline, description, highlights, footer }) => (
  <div className="h-full flex flex-col justify-center items-center p-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-sm font-semibold text-red-400 mb-4">{category}</p>
      <h1 className="text-6xl font-bold mb-4">
        {title}
        {subtitle && <span className="block text-red-500 mt-2">{subtitle}</span>}
      </h1>
      <p className="text-xl text-slate-300 mb-8">{tagline}</p>
      <p className="text-lg text-slate-400 mb-8">{description}</p>
      
      {highlights && (
        <div className="bg-slate-800/50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">🎯 主題焦點</h3>
          <ul className="text-left space-y-2">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {footer && (
        <div className="border-t border-slate-700 pt-6">
          <p className="text-sm text-slate-400">{footer}</p>
        </div>
      )}
    </div>
  </div>
);

const ContentSlide = ({ title, sections }) => (
  <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-blue-50 to-indigo-50">
    <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">{title}</h2>
    <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
      {sections.map((section, idx) => (
        <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx} className="text-slate-700 flex items-start">
                <span className="text-indigo-400 mr-2">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const TheorySlide = ({ title, content }) => (
  <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-purple-50 to-pink-50">
    <h2 className="text-4xl font-bold mb-8 text-slate-900">{title}</h2>
    
    <div className="max-w-5xl mx-auto">
      {content?.main && <p className="text-lg text-slate-700 mb-8">{content.main}</p>}
      
      {content?.points && (
        <div className="grid grid-cols-2 gap-6 mb-8">
          {content.points.map((point, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold mb-3 text-purple-600">{point.title}</h3>
            <ul className="space-y-2">
              {point.items.map((item, itemIdx) => (
                <li key={itemIdx} className="text-slate-600 text-sm flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            </div>
          ))}
        </div>
      )}
      
      {content?.formula && (
        <div className="bg-purple-100 rounded-lg p-4 mb-6">
          <code className="text-purple-900 font-mono">{content.formula}</code>
        </div>
      )}
      
      {content?.insight && (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-6 text-center">
          <p className="text-lg font-semibold">{content.insight}</p>
        </div>
      )}
    </div>
  </div>
);

const ConceptSlide = ({ title, definition, formula, explanation, example, visualization, metric, characteristics }) => (
  <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-emerald-50 to-teal-50">
    <h2 className="text-4xl font-bold mb-6 text-slate-900">{title}</h2>
    
    <div className="max-w-5xl mx-auto">
      {definition && (
        <div className="bg-emerald-100 rounded-xl p-6 mb-6">
          <p className="text-lg font-semibold text-emerald-900">{definition}</p>
        </div>
      )}
      
      {formula && (
        <div className="bg-white rounded-lg p-4 mb-6 shadow-md">
          <code className="text-teal-900 font-mono text-lg">{formula}</code>
        </div>
      )}
      
      {explanation && (
        <div className="space-y-3 mb-6">
          {explanation.map((item, idx) => (
            <p key={idx} className="text-slate-700 flex items-start">
              <span className="text-teal-500 mr-2">→</span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      )}
      
      {example && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 rounded-lg p-4">
            <p className="font-semibold text-red-700">Human</p>
            <p className="text-red-600">{example.human}</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="font-semibold text-blue-700">AI</p>
            <p className="text-blue-600">{example.ai}</p>
          </div>
        </div>
      )}
      
      {characteristics && (
        <div className="grid grid-cols-2 gap-6">
          {Object.values(characteristics).map((char, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold mb-3 text-teal-600">{char.title}</h3>
              {char.pattern && (
                <p className="font-mono text-sm bg-gray-100 p-2 rounded mb-3">{char.pattern}</p>
              )}
              {char.features && (
                <ul className="space-y-1">
                  {char.features.map((feat, featIdx) => (
                    <li key={featIdx} className="text-sm text-slate-600">• {feat}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
      
      {metric && (
        <div className="mt-6 bg-teal-100 rounded-lg p-4">
          <code className="text-teal-900 font-mono">{metric}</code>
        </div>
      )}
      
      {visualization && (
        <p className="text-sm text-slate-600 mt-4 italic">{visualization}</p>
      )}
    </div>
  </div>
);

const AdvancedSlide = ({ title, subtitle, features, implementation }) => (
  <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-amber-50 to-orange-50">
    <h2 className="text-4xl font-bold mb-3 text-slate-900">{title}</h2>
    {subtitle && <p className="text-xl text-slate-600 mb-8">{subtitle}</p>}
    
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-6 mb-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold mb-3 text-orange-600">{feature.category}</h3>
            <ul className="space-y-2">
              {feature.items.map((item, itemIdx) => (
                <li key={itemIdx} className="text-sm text-slate-600">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {implementation && (
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl p-6">
          <p className="font-semibold">實作方式：{implementation}</p>
        </div>
      )}
    </div>
  </div>
);

const DefenseSlide = ({ title, attacks, defenses }) => (
  <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-red-50 to-rose-50">
    <h2 className="text-4xl font-bold mb-8 text-slate-900">{title}</h2>
    
    <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-red-600">🗡️ 攻擊方式</h3>
        <div className="space-y-4">
          {attacks.map((attack, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-md">
              <h4 className="font-semibold text-red-700">{attack.name}</h4>
              <p className="text-sm text-slate-600 mt-1">{attack.method}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">🛡️ 防禦機制</h3>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <ul className="space-y-3">
            {defenses.map((defense, idx) => (
              <li key={idx} className="text-slate-700 flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>{defense}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ImplementationSlide = ({ title, pipeline }) => (
  <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-cyan-50 to-sky-50">
    <h2 className="text-4xl font-bold mb-8 text-slate-900">{title}</h2>
    
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        {pipeline.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-1">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-cyan-600 mb-3">{step.stage}</h3>
                <ul className="space-y-1">
                  {step.tasks.map((task, taskIdx) => (
                    <li key={taskIdx} className="text-sm text-slate-600">• {task}</li>
                  ))}
                </ul>
              </div>
            </div>
            {idx < pipeline.length - 1 && (
              <div className="px-4">
                <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

const ConclusionSlide = ({ title, keyPoints, future, message }) => (
  <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
    <h2 className="text-4xl font-bold mb-8 text-center">{title}</h2>
    
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">📌 關鍵要點</h3>
          <ul className="space-y-2">
            {keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">🚀 未來發展</h3>
          <ul className="space-y-2">
            {future.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {message && (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-8 text-center">
          <p className="text-xl font-semibold">{message}</p>
        </div>
      )}
    </div>
  </div>
);

const DefaultSlide = ({ title, content }) => (
  <div className="h-full flex flex-col justify-center items-center p-12 bg-gradient-to-br from-gray-50 to-slate-50">
    <h2 className="text-4xl font-bold mb-8 text-slate-900">{title}</h2>
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-lg text-slate-700">{content}</p>
    </div>
  </div>
);

export default Slide;