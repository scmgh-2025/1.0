import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronRight, Bot, Sparkles, Shield, Zap } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-emerald-400" />
            <span className="text-xl font-bold text-white">黄小西智能体</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">功能</a>
            <a href="#cases" className="text-slate-300 hover:text-white transition-colors">案例</a>
            <a href="#brand" className="text-slate-300 hover:text-white transition-colors">品牌</a>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              立即体验
            </button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/20 border border-emerald-500/30 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm">2025 全新升级</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              酒店行业
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> AI 智能体</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              基于 Google Gemini AI 技术，为酒店行业打造的智能客服与运营解决方案
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-2">
                开启智能升级 <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                查看2025报告
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">核心功能</h2>
            <p className="text-slate-300">专为酒店行业设计的 AI 解决方案</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-800 rounded-3xl border border-slate-700"
            >
              <div className="w-14 h-14 bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">智能客服</h3>
              <p className="text-slate-300">7x24 小时全天候服务，自动处理常见问询，减少人工成本</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-800 rounded-3xl border border-slate-700"
            >
              <div className="w-14 h-14 bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">快速响应</h3>
              <p className="text-slate-300">毫秒级响应速度，提升客户满意度</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-800 rounded-3xl border border-slate-700"
            >
              <div className="w-14 h-14 bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">安全可靠</h3>
              <p className="text-slate-300">企业级数据安全保障，符合酒店行业合规要求</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App