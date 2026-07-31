import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "研究概要 - 実行しやすさ特徴量に基づくパーソナライズドタスク実行時間推薦 | Tsumori",
  description:
    "空き時間ではなく「実行しやすい時間帯」を推薦する研究の紹介。過去のタスク実行履歴からEase-of-Execution Featureを算出し、パーソナライズドなタスクスケジューリングを実現します。",
};

const historyFields = [
  "タスクカテゴリ",
  "計画開始時刻",
  "実開始時刻",
  "計画所要時間",
  "実際の所要時間",
  "実施日時",
];

const researchFeatures = [
  "空き時間ではなく「実行しやすい時間」を推薦する点",
  "ユーザーごとの行動履歴を活用したパーソナライズド推薦である点",
  "計画錯誤と時間帯特性を統合したEase-of-Execution Featureを提案している点",
  "タスク実行の成功可能性を考慮した新しいスケジューリング手法である点",
];

const expectedEffects = [
  "タスクの実行率向上",
  "計画遵守率の向上",
  "タスク管理の効率化",
  "生産性の向上",
  "日常生活におけるQOL(Quality of Life)の向上",
];

const proposedMethods = [
  {
    step: "1",
    title: "計画錯誤(Planning Fallacy)の分析",
    desc: "人はタスクの所要時間を実際より短く見積もる傾向がある。そこで、過去の実行履歴から計画時間と実際の所要時間との差を分析し、ユーザーごとの計画傾向をモデル化する。",
  },
  {
    step: "2",
    title: "時間帯ごとの実行成功率",
    desc: "同じユーザーであっても、時間帯によってタスクの実行しやすさは異なる。過去の実行履歴から時間帯ごとの実行成功率を算出し、ユーザーがどの時間帯で最もタスクを実行しやすいかを分析する。",
  },
  {
    step: "3",
    title: "Ease-of-Execution Feature",
    desc: "計画錯誤と時間帯ごとの実行成功率を統合し、「実行しやすさ」を表す新たな特徴量であるEase-of-Execution Featureを定義する。この特徴量を利用することで、ユーザーごとに実行成功率の高い時間帯を推定する。",
  },
];

export default function Research() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ===== Navbar ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-blue-600 tracking-tight">
            🔬 研究概要
          </span>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ← Tsumoriへ戻る
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold text-blue-700 tracking-wide uppercase">
              研究概要
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              実行しやすさ特徴量(Ease-of-Execution Feature)に基づく
              <br className="hidden sm:block" />
              パーソナライズドタスク実行時間推薦
            </h1>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-16">
          {/* ===== 研究背景 ===== */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              研究背景
            </h2>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
              <p>
                近年、デジタルカレンダーやタスク管理システムの普及に伴い、空き時間を利用したタスクスケジューリングに関する研究が数多く行われている。
              </p>
              <p>
                しかし、カレンダー上に空き時間が存在していても、その時間帯に必ずしもタスクを実行できるとは限らない。例えば、朝は集中しにくい一方で夜は作業しやすい場合や、タスクの種類によって予定どおりに進められない場合がある。また、人はタスクの所要時間を楽観的に見積もる傾向があり、計画時間と実際の所要時間には乖離が生じることが多い。
              </p>
              <p>
                このように、「空き時間」と「実際にタスクを実行しやすい時間」は一致しないという課題がある。
              </p>
            </div>
          </section>

          {/* ===== 研究目的 ===== */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              研究目的
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ユーザーの過去のタスク実行履歴を分析し、その人が実際にタスクを実行しやすい時間帯を推定することで、単なる空き時間ではなく、実行成功率の高い時間帯へタスクを推薦するパーソナライズドタスクスケジューリングシステムを実現することを目的としている。
            </p>
          </section>

          {/* ===== 研究概要 ===== */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              研究概要
            </h2>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
              <p>
                本研究では、ユーザーの日々のタスク実行履歴を利用し、実行しやすさを表す新しい特徴量「Ease-of-Execution Feature」を提案する。
              </p>
              <p>実行履歴から以下のような情報を分析対象とする。</p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {historyFields.map((field) => (
                  <li
                    key={field}
                    className="rounded-lg bg-blue-50 border border-blue-100 px-3 py-2 text-sm text-blue-800 text-center"
                  >
                    {field}
                  </li>
                ))}
              </ul>
              <p>これらのデータを用いて、ユーザーごとの行動特性を分析する。</p>
            </div>
          </section>

          {/* ===== 提案手法 ===== */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              提案手法
            </h2>
            <div className="flex flex-col gap-6">
              {proposedMethods.map((method) => (
                <div
                  key={method.step}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                      {method.step}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {method.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== システム概要 ===== */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              システム概要
            </h2>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
              <p>
                提案システムでは、ユーザーが登録したタスクと過去の実行履歴を利用してEase-of-Execution Featureを算出する。
              </p>
              <p>
                算出された特徴量に基づいて、ユーザーが最も実行しやすいと推定される時間帯へタスクを推薦する。
              </p>
              <p>
                これにより、従来の空き時間のみを考慮したスケジューリングではなく、ユーザーの行動特性を反映したパーソナライズドなタスク推薦を実現する。
              </p>
            </div>
          </section>

          {/* ===== 研究の特徴 ===== */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              研究の特徴
            </h2>
            <ul className="flex flex-col gap-3">
              {researchFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* ===== 期待される効果 ===== */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              期待される効果
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expectedEffects.map((effect) => (
                <li
                  key={effect}
                  className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm"
                >
                  {effect}
                </li>
              ))}
            </ul>
          </section>

          {/* ===== 今後の展望 ===== */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              今後の展望
            </h2>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
              <p>
                現在は計画錯誤と時間帯特性を中心に実行しやすさをモデル化している。
              </p>
              <p>
                今後は、睡眠情報・活動量・疲労度・クロノタイプ・環境情報・センサデータなど、より多様なユーザー特性を統合し、実行しやすさをより高精度に推定できるパーソナライズドタスクスケジューリングシステムへ発展させることを目指している。
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <footer className="py-8 px-4 sm:px-6 border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <Link href="/" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            ⏱ Tsumori のトップへ戻る
          </Link>
          <p>&copy; {new Date().getFullYear()} Tsumori. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
