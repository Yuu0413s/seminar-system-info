import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ===== Navbar ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-blue-600 tracking-tight">
            ⏱ Tsumori
          </span>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <div className="hidden sm:flex items-center gap-6">
              <a href="#features" className="hover:text-blue-600 transition-colors">機能</a>
              <a href="#how-it-works" className="hover:text-blue-600 transition-colors">使い方</a>
              <a href="#tech" className="hover:text-blue-600 transition-colors">技術</a>
              <Link href="/research" className="hover:text-blue-600 transition-colors">研究概要</Link>
            </div>
            <a
              href="https://tsumori.yuu0413.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-white text-xs font-medium hover:bg-blue-700 transition-colors"
            >
              Webサイトを見る
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold text-blue-700 tracking-wide uppercase">
                見積もり × 実績トラッカー
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                「つもり」と「実際」の<br className="hidden sm:block" />
                <span className="text-blue-600">ズレを可視化する</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                作業前に見積もった時間と、実際にかかった時間のズレを記録し、
                時間の見積もり精度を上げるための作業時間トラッカーです。
              </p>
            </div>

            <div className="animate-fade-in-up delay-200 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://tsumori.yuu0413.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-white font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
              >
                🚀 Webサイトを見る
              </a>
              <a
                href="https://github.com/Yuu0413s/Tsumori"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-gray-700 font-semibold hover:border-blue-400 hover:text-blue-600 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHubを見る
              </a>
            </div>

            {/* Mock UI Preview */}
            <div className="animate-fade-in-up delay-400 mt-16 max-w-lg mx-auto">
              <div className="rounded-2xl bg-white border border-gray-200 shadow-xl shadow-blue-100 overflow-hidden">
                {/* window bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  <span className="ml-4 text-xs text-gray-400">Tsumori</span>
                </div>
                {/* estimate vs actual display */}
                <div className="p-6 text-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                    <span className="text-sm font-medium text-gray-700">資料作成</span>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">つもり</p>
                      <p className="text-2xl font-mono font-bold text-gray-400">01:00:00</p>
                    </div>
                    <span className="text-gray-300 text-xl">→</span>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">実際</p>
                      <p className="text-2xl font-mono font-bold text-gray-900">01:13:20</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-orange-600 font-medium">+13分20秒 の見積もりズレ</div>
                </div>
                {/* summary bar */}
                <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">今日のサマリー</p>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { color: "bg-blue-500", label: "資料作成", diff: "+13分" },
                      { color: "bg-green-500", label: "研究", diff: "-5分" },
                      { color: "bg-purple-500", label: "執筆", diff: "+2分" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                          <span>{item.label}</span>
                        </div>
                        <span className="font-mono font-medium text-gray-800">{item.diff}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Research Note ===== */}
        <section className="py-12 px-4 sm:px-6 bg-blue-50/70 border-y border-blue-100">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Tsumoriは、「実行しやすい時間帯」を推定するタスクスケジューリングに関する
              研究の一環として開発しています。
            </p>
            <Link
              href="/research"
              className="mt-3 inline-flex items-center gap-1.5 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              研究概要を見る →
            </Link>
          </div>
        </section>

        {/* ===== Features ===== */}
        <section id="features" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">主な機能</h2>
              <p className="mt-3 text-gray-500">見積もりと実績のズレを記録し、次の見積もり精度につなげます</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "⏱",
                  title: "見積もり×実績タイマー",
                  desc: "作業前に見積もった時間を入力してから計測を開始。実際にかかった時間との差分を自動で記録します。",
                  accent: "bg-blue-50 border-blue-100",
                  iconBg: "bg-blue-100",
                },
                {
                  icon: "🏷",
                  title: "カテゴリ管理",
                  desc: "カラー付きのカテゴリでタスクを分類。研究・執筆・作業などを視覚的に識別できます。",
                  accent: "bg-green-50 border-green-100",
                  iconBg: "bg-green-100",
                },
                {
                  icon: "📊",
                  title: "サマリー表示",
                  desc: "見積もりと実績のズレをカテゴリ別に集計。どのタスクで見積もりがズレやすいかを振り返れます。",
                  accent: "bg-purple-50 border-purple-100",
                  iconBg: "bg-purple-100",
                },
                {
                  icon: "🔒",
                  title: "ユーザー認証",
                  desc: "better-authによるアカウント管理で、自分だけの記録をセキュアに保存・管理します。",
                  accent: "bg-orange-50 border-orange-100",
                  iconBg: "bg-orange-100",
                },
              ].map((feat) => (
                <div
                  key={feat.title}
                  className={`rounded-2xl border p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${feat.accent}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${feat.iconBg}`}>
                    {feat.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{feat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== How it works ===== */}
        <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">使い方</h2>
              <p className="mt-3 text-gray-500">4つのステップで見積もりと実績のズレを記録します</p>
            </div>
            <div className="relative">
              {/* connecting line (desktop) */}
              <div className="hidden md:block absolute top-8 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-0.5 bg-blue-100"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", icon: "🔐", title: "ログイン", desc: "アカウントでログインし、自分の作業記録にアクセスします。" },
                  { step: "02", icon: "🏷", title: "見積もりを入力", desc: "これから取り組むタスクのカテゴリと、見積もり時間を設定します。" },
                  { step: "03", icon: "▶️", title: "計測する", desc: "作業を開始してタイマーで実績時間を記録します。" },
                  { step: "04", icon: "📊", title: "ズレを振り返る", desc: "サマリー画面で見積もりと実績のズレを確認し、次の見積もりに活かします。" },
                ].map((item) => (
                  <div key={item.step} className="flex flex-col items-center text-center gap-3">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-md shadow-blue-200">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-blue-500 tracking-widest">STEP {item.step}</span>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Tech Stack ===== */}
        <section id="tech" className="py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">技術スタック</h2>
              <p className="mt-3 text-gray-500">bun workspacesによるモノレポで構築されています</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: "⚡", name: "Vite + React 19", desc: "Web (PWA)", color: "text-cyan-600 bg-cyan-50" },
                { icon: "🔥", name: "Hono", desc: "API (Cloudflare Workers)", color: "text-orange-700 bg-orange-50" },
                { icon: "🗄", name: "Neon PostgreSQL", desc: "+ Drizzle ORM", color: "text-emerald-700 bg-emerald-50" },
                { icon: "🔐", name: "better-auth", desc: "Authentication", color: "text-violet-700 bg-violet-50" },
                { icon: "🎨", name: "Tailwind CSS v4", desc: "Utility-first CSS", color: "text-sky-700 bg-sky-50" },
                { icon: "🔷", name: "TypeScript", desc: "Type Safety", color: "text-blue-700 bg-blue-50" },
                { icon: "🥟", name: "bun", desc: "Workspaces + Test Runner", color: "text-gray-700 bg-gray-100" },
                { icon: "☁️", name: "Cloudflare Workers", desc: "Static Assets + Routes", color: "text-amber-700 bg-amber-50" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`rounded-xl border border-gray-100 p-5 flex flex-col items-center gap-2 text-center hover:shadow-md transition-shadow bg-white`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${tech.color}`}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{tech.name}</span>
                  <span className="text-xs text-gray-400">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA Banner ===== */}
        <section className="py-20 px-4 sm:px-6 bg-blue-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              あなたの「つもり」を、数字で振り返る
            </h2>
            <p className="mt-4 text-blue-100 text-lg">
              見積もりと実績のズレを記録して、次の見積もり精度を上げていきましょう。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://tsumori.yuu0413.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-blue-700 font-semibold hover:bg-blue-50 transition-colors shadow"
              >
                🚀 Webサイトを見る
              </a>
              <a
                href="https://github.com/Yuu0413s/Tsumori"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-400 px-8 py-3.5 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHubを見る
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="py-8 px-4 sm:px-6 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-semibold">⏱ Tsumori</span>
            <span>— 見積もりと実績のズレを記録する作業時間トラッカー</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Tsumori: Vite · React 19 · Hono · Neon PostgreSQL</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Tsumori. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
