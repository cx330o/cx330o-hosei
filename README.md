<p align="center">
  <img src="public/images/hosei-logo.png" alt="法政大学" width="80" />
</p>

<h1 align="center">法政キャンパスナビ (Hosei Campus Navi)</h1>

<p align="center">
  法政大学の3キャンパス（市ヶ谷・小金井・多摩）をカバーする統合キャンパスプラットフォーム<br/>
  電車・バス時刻表アプリ + 学生専用SNS + AI機能
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Flask-3-000000?logo=flask" />
  <img src="https://img.shields.io/badge/Groq-LLaMA_3.3-orange" />
  <img src="https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker" />
</p>

---

## スクリーンショット

<!-- 以下の画像パスにスクリーンショットを配置してください -->

### ランディングページ
<p align="center">
  <img src="docs/images/landing.png" alt="ランディングページ" width="800" />
</p>

### キャンパス別ホームページ

| 市ヶ谷 (いちっぷ) 🌸 | 小金井 (こがっぷ) ⚡ | 多摩 (たまっぷ) 🌿 |
|:---:|:---:|:---:|
| <img src="docs/images/ichigaya.png" width="250" /> | <img src="docs/images/koganei.png" width="250" /> | <img src="docs/images/tama.png" width="250" /> |

### 提携店舗・SNS・AI

| 提携店舗ページ | SNSホーム | AIチャットボット |
|:---:|:---:|:---:|
| <img src="docs/images/discount.png" width="250" /> | <img src="docs/images/sns.png" width="250" /> | <img src="docs/images/chatbot.png" width="250" /> |

---

## アーキテクチャ

```
+-------------------------------------------------------+
|                    Nginx (port 80)                     |
|  +-------------------+  +---------------------------+  |
|  | React SPA (/)     |  | Flask API (/sns/)         |  |
|  | - Landing Page    |  | - 認証 (JWT)              |  |
|  | - /ichigaya/*     |  | - 投稿 CRUD               |  |
|  | - /koganei/*      |  | - リアルタイムDM (WS)     |  |
|  | - /tama/*         |  | - 時間割管理              |  |
|  +-------------------+  | - フレンド機能            |  |
|                          | - AI機能 (Groq LLaMA 3)   |  |
|                          +---------------------------+  |
+-------------------------------------------------------+
```

---

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

### インフラ
- **Docker** + **docker-compose** (コンテナ化)
- **Nginx** (リバースプロキシ + 静的ファイル配信)
- **Google Analytics 4** (アクセス解析)

---

## 主な機能

### 時刻表アプリ
- 3キャンパス対応（市ヶ谷: 電車 / 小金井: 電車 / 多摩: バス）
- リアルタイムカウントダウン
- 各棟への到着予測時間
- 特別ダイヤ・祝日対応
- ダークモード / PWA / 多言語対応

### 学生専用SNS
- 投稿・コメント・いいね
- リアルタイムDM (WebSocket)
- フレンド機能
- 時間割管理（シラバス連携）
- ロールベース認証（学生/教員/管理者）
- 管理者ダッシュボード

### AI機能 (Groq LLaMA 3.3 70B)

| 機能 | 説明 |
|------|------|
| 🤖 キャンパスチャットボット | RAGベースのQ&A |
| 📝 投稿自動要約 | 長い投稿を1-2文に要約 |
| 🌐 AI翻訳 | 4言語リアルタイム翻訳 (ja/en/zh/ko) |
| 🛡️ コンテンツモデレーション | 不適切な投稿の自動検出 |
| 🔍 セマンティック検索 | 自然言語クエリで投稿検索 |

### 提携店舗
- キャンパス周辺の飲食店割引情報
- 市ヶ谷 4店舗 / 小金井 5店舗 / 多摩 4店舗
- Google Map埋め込み・営業時間・割引内容

---

## キャンパス別テーマ

| キャンパス | アプリ名 | テーマ | 交通手段 |
|:---:|:---:|:---:|:---:|
| 市ヶ谷 | いちっぷ | 🌸 桜 (ピンク) | 電車 |
| 小金井 | こがっぷ | ⚡ サイバー (シアン) | 電車 |
| 多摩 | たまっぷ | 🌿 森 (グリーン) | バス |

---

## プロジェクト構成

```
hosei-campus-navi/
├── src/                        # React フロントエンド
│   ├── campuses/               # キャンパス設定 (Context + Config)
│   ├── components/             # 共有UIコンポーネント
│   │   └── ui/                 # shadcn/ui + カスタムUI
│   ├── hooks/                  # カスタムフック
│   ├── i18n/                   # 多言語対応
│   ├── pages/
│   │   ├── campuses/           # キャンパス別ホームページ
│   │   │   ├── IchigayaHome.tsx    # 🌸 桜テーマ
│   │   │   ├── KoganeiHome.tsx     # ⚡ サイバーテーマ
│   │   │   └── TamaHome.tsx        # 🌿 森テーマ
│   │   ├── discount/           # 提携店舗ページ
│   │   └── landing.tsx         # ランディングページ
│   └── utils/                  # ユーティリティ + データ
├── backend/                    # Flask SNS バックエンド
│   ├── app.py                  # メインアプリケーション
│   ├── models.py               # データベースモデル
│   ├── ai.py                   # AI機能 (Groq LLaMA 3)
│   ├── scraping.py             # シラバススクレイピング
│   ├── templates/              # Jinja2テンプレート (22ファイル)
│   ├── tests/                  # pytest テスト (40+)
│   └── Dockerfile
├── docker-compose.yml          # 統合デプロイ設定
├── nginx.conf                  # リバースプロキシ設定
└── vite.config.ts
```

---

## セットアップ

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

### Docker (本番環境)
```bash
npm run build
docker-compose up -d
```

---

## 設計のポイント

- **設定駆動アーキテクチャ**: 各キャンパスの違い（駅名、学部棟、テーマカラー）はすべて `CampusConfig` オブジェクトで管理。新キャンパス追加は設定ファイル1つで完了
- **コード分割**: Vite の動的 import により、各キャンパスのデータ（時刻表JSON）はアクセス時にのみロード
- **共有コンポーネント**: 時刻計算ロジック、UIコンポーネント、i18nは全キャンパスで共有
- **リアルタイム通信**: SNSのDM機能はFlask-SocketIOによるWebSocket通信
- **ロールベース認証**: 学生・教員・管理者の3ロールで権限を分離

---

<p align="center">
  <img src="public/images/hosei-mascot.jpg" alt="えこぴょん" width="48" />
  <br/>
  <sub>©CODE MATES</sub>
</p>
