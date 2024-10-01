# 法政キャンパスナビ (Hosei Campus Navi)

法政大学の3キャンパス（市ヶ谷・小金井・多摩）をカバーする統合キャンパスプラットフォーム。電車・バス時刻表アプリと学生専用SNSを一つのプロジェクトに統合しています。

## アーキテクチャ

```
┌─────────────────────────────────────────────────┐
│                    Nginx (port 80)               │
│  ┌──────────────────┐  ┌──────────────────────┐  │
│  │  React SPA (/)   │  │  Flask API (/sns/)   │  │
│  │  - Landing Page  │  │  - 認証 (JWT)        │  │
│  │  - /ichigaya/*   │  │  - 投稿 CRUD         │  │
│  │  - /koganei/*    │  │  - リアルタイムDM     │  │
│  │  - /tama/*       │  │  - 時間割管理         │  │
│  └──────────────────┘  │  - フレンド機能       │  │
│                        │  - 管理者ダッシュボード│  │
│                        └──────────────────────┘  │
└─────────────────────────────────────────────────┘
```

## 技術スタック

### フロントエンド (React SPA)
- **React 19** + **TypeScript** (strict mode)
- **Vite 6** (ビルド + HMR)
- **Tailwind CSS 4** + **shadcn/ui**
- **React Router DOM 7** (キャンパス別ルーティング)
- **GSAP** (アニメーション)
- **Three.js** (3Dキャンパスマップ)
- **Zod** (ランタイム型検証)
- **PWA** (オフライン対応、インストール可能)
- **i18n** (日本語・英語・中国語)

### バックエンド (Flask SNS)
- **Flask 3** + **Flask-SocketIO** (WebSocket)
- **SQLAlchemy ORM** (SQLite / MySQL)
- **Flask-Login** (ロールベース認証: 学生/教員/管理者)
- **Gunicorn** + **eventlet** (本番サーバー)
- **BeautifulSoup** (シラバススクレイピング)
- **Groq API** + **LLaMA 3.3 70B** (AI機能)
  - キャンパスAIチャットボット (RAG)
  - 投稿の自動要約
  - 多言語AI翻訳
  - コンテンツモデレーション
  - セマンティック検索

### インフラ
- **Docker** + **docker-compose** (コンテナ化)
- **Nginx** (リバースプロキシ + 静的ファイル配信)
- **Google Analytics** (アクセス解析)

## プロジェクト構成

```
hosei-campus-navi/
├── src/                    # React フロントエンド
│   ├── campuses/           # キャンパス設定 (Context + Config)
│   ├── components/         # 共有UIコンポーネント
│   ├── hooks/              # カスタムフック
│   ├── i18n/               # 多言語対応
│   ├── pages/
│   │   ├── campuses/       # キャンパス別ホームページ
│   │   │   ├── IchigayaHome.tsx  # 🌸 桜テーマ
│   │   │   ├── KoganeiHome.tsx   # ⚡ サイバーテーマ
│   │   │   └── TamaHome.tsx      # 🌿 森テーマ
│   │   ├── discount/       # 提携店舗ページ
│   │   └── landing.tsx     # ランディングページ
│   └── utils/              # ユーティリティ + データ
├── backend/                # Flask SNS バックエンド
│   ├── app.py              # メインアプリケーション
│   ├── models.py           # データベースモデル
│   ├── ai.py               # AI機能 (Groq LLaMA 3)
│   ├── templates/          # Jinja2テンプレート
│   ├── tests/              # pytest テスト (40+)
│   ├── Dockerfile
│   └── requirements.txt
├── docker-compose.yml      # 統合デプロイ設定
├── nginx.conf              # リバースプロキシ設定
└── vite.config.ts
```

## キャンパス別テーマ

| キャンパス | アプリ名 | テーマ | 交通手段 |
|-----------|---------|--------|---------|
| 市ヶ谷 | いちっぷ | 🌸 桜 (ピンク) | 電車 |
| 小金井 | こがっぷ | ⚡ サイバー (シアン) | 電車 |
| 多摩 | たまっぷ | 🌿 森 (グリーン) | バス |

## 開発

### フロントエンド
```bash
npm install
npm run dev
```

### バックエンド
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### テスト
```bash
# フロントエンド
npm run test

# バックエンド
cd backend && pytest
```

### Docker (本番)
```bash
npm run build
docker-compose up -d
```

## AI機能 (Groq LLaMA 3.3 70B)

| 機能 | 説明 | エンドポイント |
|------|------|---------------|
| 🤖 キャンパスチャットボット | RAGベースのQ&A。キャンパス情報をコンテキストとして活用 | `/chatbot`, `/api/ai/chat` |
| 📝 投稿自動要約 | 長い投稿を1-2文に要約 | `/api/ai/summarize` |
| 🌐 AI翻訳 | 4言語間のリアルタイム翻訳 (ja/en/zh/ko) | `/api/ai/translate` |
| 🛡️ コンテンツモデレーション | 不適切な投稿の自動検出 | `/api/ai/moderate` |
| 🔍 セマンティック検索 | 自然言語クエリからキーワード抽出して検索 | `/api/ai/search` |

## 設計のポイント

- **設定駆動アーキテクチャ**: 各キャンパスの違い（駅名、学部棟、テーマカラー）はすべて `CampusConfig` オブジェクトで管理。新キャンパス追加は設定ファイル1つで完了。
- **コード分割**: Vite の動的 import により、各キャンパスのデータ（時刻表JSON）はアクセス時にのみロード。
- **共有コンポーネント**: 時刻計算ロジック、UIコンポーネント、i18nは全キャンパスで共有。
- **リアルタイム通信**: SNSのDM機能はFlask-SocketIOによるWebSocket通信。
- **ロールベース認証**: 学生・教員・管理者の3ロールで権限を分離。
