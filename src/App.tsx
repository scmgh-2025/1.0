/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Brain, 
  TrendingUp, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  Coffee,
  Bed,
  ShoppingBag,
  Sparkles,
  MessageSquare
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, points, delay }: { 
  icon: any, 
  title: string, 
  description: string, 
  points: string[],
  delay: number 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
  >
    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
      <Icon className="w-7 h-7 text-emerald-600" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-4">
      {points.map((point, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-700">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span className="text-sm leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-emerald-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">黄</div>
            <span className="text-xl font-bold tracking-tight text-emerald-900">黄小西 <span className="text-emerald-500 font-medium">| 酒店智能体</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#brand" className="hover:text-emerald-600 transition-colors">品牌故事</a>
            <a href="#features" className="hover:text-emerald-600 transition-colors">核心价值</a>
            <a href="#vision" className="hover:text-emerald-600 transition-colors">未来愿景</a>
            <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
              立即咨询
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              贵州文旅数字化标杆
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              以AI为笔，绘就<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">贵州文旅新篇章</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
              黄果树、小七孔、西江苗寨的首字母汇聚，扎根贵州本土，自带山水灵气的文旅数字IP。
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

      {/* Brand Story Section */}
      <section id="brand" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/guizhou/1200/900" 
                  alt="Guizhou Landscape" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-emerald-600 p-8 rounded-3xl text-white shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">24H</div>
                <div className="text-sm opacity-80">全天候在线数字管家</div>
              </div>
            </motion.div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                不仅仅是平台，更是每一位来黔游客的<span className="text-emerald-600">专属数字分身</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  不同于携程、美团等传统平台，黄小西的核心价值在于深度陪伴。我们为游客打造从景区游览、酒店入住到餐饮消费的全链路智慧体验。
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">游前规划</h4>
                      <p className="text-xs">科学定制路线，避开拥挤高峰</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">游中服务</h4>
                      <p className="text-xs">实时智能导览，解决突发需求</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">游后回味</h4>
                      <p className="text-xs">精选特产回购，分享旅行足迹</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">情绪陪伴</h4>
                      <p className="text-xs">AI温暖交互，让旅程更有温度</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">黄小西酒店智能体</h2>
            <p className="text-emerald-100/70 max-w-2xl mx-auto text-lg">
              专为贵州酒店打造的AI数字管家，让中小酒店、民宿也能拥有大型连锁级别的AI服务能力。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap}
              title="更省心"
              description="解放人力，实现高效自动化服务流程。"
              delay={0.1}
              points={[
                "旺季高频咨询秒级响应（WiFi、早餐、设施等）",
                "住客送物、报修对话即下单，系统自动派单",
                "流程透明、进度可查，大幅减轻前台压力"
              ]}
            />
            <FeatureCard 
              icon={Brain}
              title="更聪明"
              description="AI赋能，全面升级住客个性化体验。"
              delay={0.2}
              points={[
                "精准行程规划：结合偏好科学定制本地路线",
                "本地智能推荐：周边美食、小众玩法一键推送",
                "暖心陪伴服务：深夜助眠、亲子讲故事、情绪陪伴"
              ]}
            />
            <FeatureCard 
              icon={TrendingUp}
              title="更赚钱"
              description="供应链赋能，开启多元化增收渠道。"
              delay={0.3}
              points={[
                "接入全域旅游供应链：热门门票、精品线路资源",
                "升级为“旅游服务综合运营商”，一键上架销售",
                "支持自有商品灵活适配，实现“住+游+购”一体化"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-emerald-50 border border-emerald-100 relative"
          >
            <MessageSquare className="w-12 h-12 text-emerald-200 absolute top-8 left-8" />
            <p className="text-2xl md:text-3xl font-medium text-slate-800 italic leading-relaxed mb-8">
              “黄小西吃晚饭”系列标语，曾获总书记关心，成为贵州文旅对外展示的亮眼名片。
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">黄</div>
              <div className="text-left">
                <div className="font-bold text-slate-900">黄小西品牌团队</div>
                <div className="text-sm text-slate-500">贵州文旅数字化标杆</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-emerald-200">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6 italic">让每一家酒店都能智能化升级</h2>
              <p className="text-emerald-50 text-lg leading-relaxed opacity-90">
                以AI为笔、以贵州文旅为墨，让每一位游客都能享受更美好的贵州之旅。加入黄小西酒店智能体，共同开启贵州旅游新未来。
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <button className="px-10 py-5 bg-white text-emerald-600 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all shadow-lg">
                立即加入推介会
              </button>
              <p className="text-center text-emerald-100 text-sm">已有 500+ 贵州酒店/民宿入驻</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">黄</div>
            <span className="font-bold text-slate-900">黄小西文旅数字化</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2025 黄小西品牌推介会. 扎根贵州，服务全球.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors">服务协议</a>
            <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors">隐私政策</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
