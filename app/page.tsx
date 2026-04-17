export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ===== Navbar ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-blue-600 tracking-tight">
            ⏱ TaskChecker
          </span>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">機能</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">使い方</a>
            <a href="#tech" className="hover:text-blue-600 transition-colors">技術</a>
            <a
              href="https://task-checker-jet.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-white text-xs font-medium hover:bg-blue-700 transition-colors"
            >
              デモを試す
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
                タイムトラッカー
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                あなたの時間を、<br className="hidden sm:block" />
                <span className="text-blue-600">タスクで可視化する</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                作業時間をリアルタイムで記録し、今日何にどれだけ集中できたかを把握できます。
                タスク別カラー管理と当日サマリーで、あなたの一日を見える化します。
              </p>
            </div>

            <div className="animate-fade-in-up delay-200 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://task-checker-jet.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-white font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
              >
                🚀 デモを試す
              </a>
              <a
                href="https://github.com/Yuu0413s/taskviewer"
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
                  <span className="ml-4 text-xs text-gray-400">TaskChecker</span>
                </div>
                {/* timer display */}
                <div className="p-6 text-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                    <span className="text-sm font-medium text-gray-700">コーディング</span>
                  </div>
                  <div className="text-5xl font-mono font-bold text-gray-900 tracking-wider">
                    01:23:45
                  </div>
                  <div className="mt-2 text-xs text-green-600 font-medium">● 計測中</div>
                  <div className="mt-6 flex gap-2 justify-center">
                    <button className="rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium px-4 py-2">休憩</button>
                    <button className="rounded-full bg-red-100 text-red-700 text-xs font-medium px-4 py-2">終了</button>
                  </div>
                </div>
                {/* summary bar */}
                <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">今日のサマリー</p>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { color: "bg-blue-500",  label: "コーディング", time: "3h 12m" },
                      { color: "bg-green-500", label: "研究",         time: "1h 45m" },
                      { color: "bg-purple-500",label: "執筆",         time: "0h 58m" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                          <span>{item.label}</span>
                        </div>
                        <span className="font-mono font-medium text-gray-800">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Features ===== */}
        <section id="features" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">主な機能</h2>
              <p className="mt-3 text-gray-500">シンプルな操作で、作業時間を正確に記録・管理できます</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "⏱",
                  title: "タイマー計測",
                  desc: "開始・休憩・再開・終了の4ステータスで作業セッションを管理。リアルタイムでHH:MM:SS形式の経過時間を表示します。",
                  accent: "bg-blue-50 border-blue-100",
                  iconBg: "bg-blue-100",
                },
                {
                  icon: "🏷",
                  title: "タスク種別管理",
                  desc: "カラー付きタスク分類で研究・執筆・コーディングなどを視覚的に識別。複数タスクをシームレスに切り替えられます。",
                  accent: "bg-green-50 border-green-100",
                  iconBg: "bg-green-100",
                },
                {
                  icon: "📊",
                  title: "今日のサマリー",
                  desc: "タスク別の合計作業時間を当日分で一覧表示。色付きドットでタスク種別を一目で把握できます。",
                  accent: "bg-purple-50 border-purple-100",
                  iconBg: "bg-purple-100",
                },
                {
                  icon: "🔒",
                  title: "ユーザー認証",
                  desc: "メールアドレス＋パスワードでアカウント管理。自分だけの作業記録をセキュアに保存・管理します。",
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
              <p className="mt-3 text-gray-500">4つのステップで今すぐ始められます</p>
            </div>
            <div className="relative">
              {/* connecting line (desktop) */}
              <div className="hidden md:block absolute top-8 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-0.5 bg-blue-100"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", icon: "🏷", title: "タスクを選ぶ", desc: "記録したいタスク種別（研究・執筆・コーディング等）をカラーリストから選択します。" },
                  { step: "02", icon: "▶️", title: "開始する", desc: "「開始」ボタンを押すと即座にタイマーがスタート。経過時間がリアルタイムで表示されます。" },
                  { step: "03", icon: "⏸", title: "休憩・再開", desc: "休憩が必要なときは「休憩」、戻ってきたら「再開」ボタンで中断・再開できます。" },
                  { step: "04", icon: "✅", title: "終了して記録", desc: "「終了」を押すと作業時間が保存され、今日のサマリーに自動で反映されます。" },
                ].map((item, i) => (
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
              <p className="mt-3 text-gray-500">モダンなWebテクノロジーで構築されています</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: "▲", name: "Next.js 16", desc: "App Router", color: "text-black bg-gray-900 text-white" },
                { icon: "⚛", name: "React 19",   desc: "UI Library",   color: "text-cyan-600 bg-cyan-50" },
                { icon: "🗄",  name: "SQLite / Turso", desc: "+ Drizzle ORM", color: "text-emerald-700 bg-emerald-50" },
                { icon: "🔐", name: "NextAuth v5", desc: "Authentication", color: "text-violet-700 bg-violet-50" },
                { icon: "🎨", name: "Tailwind CSS v4", desc: "Utility-first CSS", color: "text-sky-700 bg-sky-50" },
                { icon: "🔷", name: "TypeScript",  desc: "Type Safety",  color: "text-blue-700 bg-blue-50" },
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
              今すぐ作業時間を可視化しよう
            </h2>
            <p className="mt-4 text-blue-100 text-lg">
              デモ環境で実際の使い心地を体験できます。アカウント登録は不要です。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://task-checker-jet.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-blue-700 font-semibold hover:bg-blue-50 transition-colors shadow"
              >
                🚀 デモを試す
              </a>
              <a
                href="https://github.com/Yuu0413s/taskviewer"
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
            <span className="text-blue-600 font-semibold">⏱ TaskChecker</span>
            <span>— タスク別作業時間トラッカー</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js 16 · React 19 · Tailwind CSS v4</span>
          </div>
          <p>&copy; {new Date().getFullYear()} TaskChecker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
