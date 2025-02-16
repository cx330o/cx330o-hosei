import { Link } from "react-router-dom";

const campusCards = [
  {
    id: "ichigaya",
    name: "いちっぷ",
    campus: "市ヶ谷キャンパス",
    emoji: "🌸",
    overlayColor: "rgba(236, 72, 153, 0.55)",
    hoverGlow: "hover:shadow-pink-500/40",
    description: "市ケ谷・飯田橋・九段下の電車時刻�?,
    scenery: "/images/ichigaya-scenery.webp",
  },
  {
    id: "koganei",
    name: "こがっぷ",
    campus: "小金井キャンパス",
    emoji: "�?,
    overlayColor: "rgba(6, 182, 212, 0.55)",
    hoverGlow: "hover:shadow-cyan-500/40",
    description: "東小金井・武蔵小金井の電車時刻表",
    scenery: "/images/koganei-scenery.webp",
  },
  {
    id: "tama",
    name: "たまっぷ",
    campus: "多摩キャンパ�?,
    emoji: "🌿",
    overlayColor: "rgba(34, 197, 94, 0.55)",
    hoverGlow: "hover:shadow-green-500/40",
    description: "西八王子・めじろ台・相原のバス時刻表",
    scenery: "/images/tama-scenery.jpg",
  },
] as const;

const SNS_URL = "http://localhost:5000/";

export default function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-10 flex flex-col items-center">
        <img
          src="/images/hosei-logo.png"
          alt="法政大学校徽"
          width={80}
          height={80}
          className="mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          法政キャンパスナ�?
        </h1>
        <p className="text-slate-400 text-lg">
          キャンパスを選んでくださ�?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {campusCards.map((card) => (
          <Link
            key={card.id}
            to={`/${card.id}`}
            className={`group relative overflow-hidden rounded-2xl shadow-xl ${card.hoverGlow} hover:scale-[1.03] transition-all duration-300 min-h-[220px] flex flex-col justify-between`}
          >
            <img
              src={card.scenery}
              alt={`${card.campus}の景色`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: card.overlayColor }}
            />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <span className="text-4xl">{card.emoji}</span>
                <h2 className="text-2xl font-bold text-white mt-3">
                  {card.name}
                </h2>
                <p className="text-white/90 text-sm mt-1">{card.campus}</p>
              </div>
              <p className="text-white/70 text-xs mt-4">{card.description}</p>
            </div>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-2xl z-20" />
          </Link>
        ))}
      </div>

      {/* SNS Section */}
      <div className="mt-10 w-full max-w-4xl">
        <a
          href={SNS_URL}
          className="group relative block overflow-hidden rounded-2xl p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">💬</span>
            <div>
              <h2 className="text-2xl font-bold text-white">法政キャンパ�?SNS</h2>
              <p className="text-white/70 text-sm mt-1">
                投稿・DM・時間割管理・フレンド機能を備えた学生専用SNS
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["リアルタイムDM", "時間割管�?, "フレンド", "多言語対�?, "管理者機�?].map((tag) => (
              <span key={tag} className="bg-white/15 px-2.5 py-0.5 rounded-full text-white/80 text-xs">
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-2xl" />
        </a>
      </div>

      {/* Mascot & Info */}
      <div className="mt-10 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
        <img
          src="/images/hosei-mascot.jpg"
          alt="法政大学マスコッ�?
          width={48}
          height={48}
          className="rounded-full border-2 border-white/20"
        />
        <span className="text-slate-400 text-sm">法政大学公式マスコット「えこぴょん�?/span>
      </div>

      <footer className="mt-10 text-slate-600 text-xs">
        <p>©CODE MATES</p>
      </footer>
    </main>
  );
}
// updated: ���ǥ��󥰥ک`���Υ���ǩ`������{��
