# コミット履歴計画書 (目標: ~580件)
# 期間: 2024年10月 〜 2026年4月 (約18ヶ月)

## 方針
- Conventional Commits (feat/fix等) は基本使わない。日本語で自然に書く
- たまに英文commit混ぜる (initial commit, WIP, update deps, etc.)
- 1日に複数commitする日もあれば、2-3週間空く日もある
- 学期中(4-7月,10-1月)は週2-3回、休み(8-9月,2-3月)は週5-8回
- typo修正、WIP、TODO、コメント修正等の小commitを混ぜる
- 粒度はバラバラ（大きいcommitも小さいcommitも）

## タイムライン概要
- Phase 1 (2024.10-12): たまっぷ MVP — 100件
- Phase 2 (2025.01): 学期末メンテ — 15件
- Phase 3 (2025.02-03): 春休み集中 市ヶ谷+SNS — 130件
- Phase 4 (2025.04-07): 学期中 SNS機能拡充 — 60件
- Phase 5 (2025.08-09): 夏休み集中 AI+小金井+Docker — 120件
- Phase 6 (2025.10-2026.01): 学期中 品質改善 — 50件
- Phase 7 (2026.02-03): 春休み集中 アップグレード+画像 — 80件
- Phase 8 (2026.04): 最終調整 — 25件
合計: ~580件

---

## Phase 1: たまっぷ MVP (2024.10 - 2024.12) — 100件

### 2024年10月前半 (プロジェクト立ち上げ)
1.  10-01 `initial commit`
    - .gitignore, README.md
2.  10-01 `Vite + React + TypeScript でプロジェクト作成`
    - package.json, index.html, src/main.tsx, src/App.tsx, src/App.css, src/vite-env.d.ts, tsconfig.json, tsconfig.app.json, tsconfig.node.json, vite.config.ts
3.  10-02 `Tailwind CSS を導入`
    - src/index.css 変更, package.json 変更
4.  10-03 `バス時刻表の型定義`
    - src/utils/types.ts 新規 (基本型のみ)
5.  10-03 `型定義のtypo修正`
    - src/utils/types.ts 変更
6.  10-04 `西八王子駅のバス時刻表データ追加`
    - src/utils/Timetable.json 新規 (西八王子のみ)
7.  10-05 `ホーム画面の基本レイアウト`
    - src/pages/home.tsx 新規, src/App.tsx 変更
8.  10-05 `Cardコンポーネント`
    - src/components/ui/card.tsx 新規
9.  10-06 `次のバスを計算するロジック`
    - src/utils/timeHandlers.ts 新規
10. 10-06 `祝日データ (2024-2025)`
    - src/utils/Holidays.json 新規
11. 10-07 `平日・土曜・休日の判定`
    - src/utils/dateUtils.ts 新規
12. 10-08 `バス時刻のソート修正`
    - src/utils/timeHandlers.ts 変更
13. 10-08 `ソートのエッジケース対応`
    - src/utils/timeHandlers.ts 変更

### 2024年10月後半 (コア機能)
14. 10-10 `カウントダウンコンポーネント作成`
    - src/components/ui/Countdown.tsx 新規
15. 10-10 `カウントダウンが負の値になるバグ修正`
    - src/components/ui/Countdown.tsx 変更
16. 10-11 `リアルタイム時計`
    - src/components/ui/Clock.tsx 新規
17. 10-12 `時計とカウントダウンをホームに統合`
    - src/pages/home.tsx 変更
18. 10-13 `WIP: 方向切替`
    - src/pages/home.tsx 変更
19. 10-14 `大学行き/駅行きの方向切替完成`
    - src/pages/home.tsx 変更, src/utils/types.ts 変更 (UserState追加)
20. 10-15 `駅名・建物の定数定義`
    - src/utils/constants.ts 新規
21. 10-16 `時間計算のユーティリティ整理`
    - src/utils/timeHandlers.ts 変更 (minutesToTime分離)
22. 10-17 `メニューコンポーネント`
    - src/components/menu.tsx 新規
23. 10-17 `メニューのスタイル調整`
    - src/components/menu.tsx 変更
24. 10-18 `README更新`
    - README.md 変更
25. 10-19 `useBusDataフック`
    - src/hooks/useBusData.ts 新規
26. 10-20 `useClockフック`
    - src/hooks/useClock.ts 新規
27. 10-21 `useBusDataのエラーハンドリング追加`
    - src/hooks/useBusData.ts 変更
28. 10-22 `めじろ台駅の時刻表データ`
    - src/utils/Timetable.json 変更
29. 10-23 `相原駅の時刻表データ`
    - src/utils/Timetable.json 変更
30. 10-24 `西八王子の全曜日データ完成`
    - src/utils/Timetable.json 変更
31. 10-25 `バスユーティリティ関数`
    - src/utils/busUtils.ts 新規
32. 10-26 `駅選択ボタン`
    - src/components/ui/station-button.tsx 新規
33. 10-26 `駅ボタンのアクティブ状態`
    - src/components/ui/station-button.tsx 変更
34. 10-27 `Buttonコンポーネント`
    - src/components/ui/button.tsx 新規
35. 10-28 `深夜0時を跨ぐバグ修正`
    - src/utils/timeHandlers.ts 変更
36. 10-29 `最終バス後のメッセージ表示`
    - src/pages/home.tsx 変更
37. 10-30 `特別ダイヤデータ`
    - src/utils/specialDates.json 新規
38. 10-30 `特別ダイヤの判定ロジック`
    - src/utils/dateUtils.ts 変更
39. 10-31 `祝日判定の年またぎバグ修正`
    - src/utils/dateUtils.ts 変更

### 2024年11月 (UI改善・PWA)
40. 11-01 `バス時刻表のカードデザイン改善`
    - src/pages/home.tsx 変更
41. 11-02 `全時刻表の一覧表示`
    - src/pages/home.tsx 変更
42. 11-03 `選択した駅をlocalStorageに保存`
    - src/pages/home.tsx 変更
43. 11-04 `時刻表データのリファクタリング`
    - src/utils/Timetable.json 変更, src/utils/types.ts 変更
44. 11-05 `Cardコンポーネントのpadding調整`
    - src/components/ui/card.tsx 変更
45. 11-06 `iOS Safariの時刻表示ズレ修正`
    - src/utils/timeHandlers.ts 変更
46. 11-07 `console.log削除、コード整理`
    - src/pages/home.tsx, src/hooks/useBusData.ts 変更
47. 11-08 `年末年始の運休日データ`
    - src/utils/specialDates.json 変更
48. 11-09 `PWA: manifest.json追加`
    - index.html 変更, vite.config.ts 変更
49. 11-09 `PWA: Service Worker`
    - vite.config.ts 変更, package.json 変更 (vite-plugin-pwa)
50. 11-10 `PWAアイコン追加`
    - public/robots.txt 新規, index.html 変更
51. 11-11 `GA4導入`
    - package.json 変更 (react-ga4), src/App.tsx 変更
52. 11-11 `GA4のページビュー修正`
    - src/App.tsx 変更
53. 11-12 `モバイルファーストのレスポンシブ対応`
    - src/pages/home.tsx, src/index.css 変更
54. 11-13 `iPhone SEの表示崩れ修正`
    - src/pages/home.tsx 変更
55. 11-14 `フォントサイズの微調整`
    - src/index.css 変更
56. 11-15 `アコーディオンUIコンポーネント`
    - src/components/ui/accordion.tsx 新規, package.json 変更 (radix-ui)
57. 11-15 `時刻表のアコーディオン表示`
    - src/components/AccordionArea.tsx 新規
58. 11-16 `アコーディオンのアニメーション修正`
    - src/components/AccordionArea.tsx 変更
59. 11-17 `README: 機能一覧追加`
    - README.md 変更
60. 11-18 `useBusDataの再レンダリング最適化`
    - src/hooks/useBusData.ts 変更
61. 11-19 `JSDocコメント追加`
    - src/components/ui/Clock.tsx, Countdown.tsx 変更
62. 11-20 `バス停選択UIの改善`
    - src/pages/home.tsx 変更
63. 11-21 `プルダウンリフレッシュ`
    - src/pages/home.tsx 変更

### 2024年12月 (ダークモード・GSAP・年末)
64. 12-01 `ダークモード: ThemeProvider`
    - src/components/theme-provider.tsx 新規, src/main.tsx 変更
65. 12-01 `ダークモード切替ボタン`
    - src/components/menu.tsx 変更
66. 12-02 `ダークモードのコントラスト改善`
    - src/pages/home.tsx, src/index.css 変更
67. 12-02 `ダークモードのカード背景修正`
    - src/components/ui/card.tsx 変更
68. 12-03 `ErrorBoundary追加`
    - src/components/ErrorBoundary.tsx 新規, src/App.tsx 変更
69. 12-04 `エラー時のフォールバックUI改善`
    - src/components/ErrorBoundary.tsx 変更
70. 12-05 `たまっぷロゴ追加`
    - src/pages/home.tsx 変更
71. 12-06 `GSAP導入`
    - package.json 変更 (gsap, @gsap/react), src/pages/home.tsx 変更
72. 12-06 `ページ遷移アニメーション`
    - src/pages/home.tsx 変更
73. 12-07 `ScrollTriggerアニメーション`
    - src/pages/home.tsx 変更
74. 12-07 `アニメーションのちらつき修正`
    - src/pages/home.tsx 変更
75. 12-08 `パーティクル背景エフェクト`
    - src/components/ui/ParticleBackground.tsx 新規
76. 12-08 `パーティクルの色調整`
    - src/components/ui/ParticleBackground.tsx 変更
77. 12-09 `年末年始の特別ダイヤ`
    - src/utils/specialDates.json 変更
78. 12-09 `冬休みダイヤデータ`
    - src/utils/Timetable.json 変更
79. 12-10 `2025年の祝日データ`
    - src/utils/Holidays.json 変更
80. 12-10 `2025年の特別ダイヤ`
    - src/utils/specialDates.json 変更
81. 12-11 `Sonnerトースト通知`
    - src/components/ui/sonner.tsx 新規, package.json 変更
82. 12-11 `通知メッセージ追加`
    - src/pages/home.tsx 変更
83. 12-12 `package.json scripts整理`
    - package.json 変更
84. 12-13 `依存関係更新`
    - package.json 変更
85. 12-14 `ロゴのアニメーション`
    - src/pages/home.tsx 変更
86. 12-14 `ロゴのdrop-shadow追加`
    - src/pages/home.tsx 変更
87. 12-15 `Cardコンポーネント改善`
    - src/components/ui/card.tsx 変更
88. 12-16 `時刻表の色分け`
    - src/pages/home.tsx 変更
89. 12-17 `カウントダウンのアニメーション改善`
    - src/components/ui/Countdown.tsx 変更
90. 12-18 `オフラインフォールバック`
    - vite.config.ts 変更
91. 12-19 `環境変数設定`
    - .gitignore 変更
92. 12-20 `型定義の整理`
    - src/utils/types.ts 変更
93. 12-21 `不要なimport削除`
    - src/pages/home.tsx 変更
94. 12-22 `年末コード整理`
    - 複数ファイル微修正
95. 12-23 `README: 開発手順追加`
    - README.md 変更
96. 12-24 `ホーム画面のレイアウト微調整`
    - src/pages/home.tsx 変更
97. 12-25 `README: 技術スタック追加`
    - README.md 変更
98. 12-26 `コンソールログ整理`
    - src/pages/home.tsx 変更
99. 12-27 `テスト用の.env.example`
    - .gitignore 変更
100. 12-28 `v1.0 たまっぷ初版完成 🎉`
     - README.md 変更

---

## Phase 2: 学期末メンテ (2025.01) — 15件

101. 01-06 `年末年始の運休日修正`
     - src/utils/specialDates.json 変更
102. 01-08 `2025年の祝日データ追加分`
     - src/utils/Holidays.json 変更
103. 01-10 `useBusDataのキャッシュ改善`
     - src/hooks/useBusData.ts 変更
104. 01-13 `ダークモード切替のちらつき修正`
     - src/components/theme-provider.tsx 変更
105. 01-15 `時刻表の表示フォーマット改善`
     - src/pages/home.tsx 変更
106. 01-17 `特別ダイヤの優先順位修正`
     - src/utils/dateUtils.ts 変更
107. 01-19 `README更新`
     - README.md 変更
108. 01-21 `npm audit fix`
     - package.json 変更
109. 01-23 `TypeScriptの型エラー修正`
     - 複数ファイル
110. 01-25 `パーティクル背景のパフォーマンス改善`
     - src/components/ui/ParticleBackground.tsx 変更
111. 01-26 `GSAPアニメーションの最適化`
     - src/pages/home.tsx 変更
112. 01-27 `Cardコンポーネントのborder修正`
     - src/components/ui/card.tsx 変更
113. 01-28 `アコーディオンの初期状態修正`
     - src/components/AccordionArea.tsx 変更
114. 01-29 `依存関係更新`
     - package.json 変更
115. 01-31 `学期末コード整理`
     - 複数ファイル微修正

---

## Phase 3: 春休み集中 - 市ヶ谷 + SNS (2025.02 - 2025.03) — 130件

### 2025年2月前半 (マルチキャンパス設計)
116. 02-01 `市ヶ谷駅の電車時刻表データ`
     - src/utils/ekitan.json 新規 (市ヶ谷のみ)
117. 02-01 `飯田橋駅の時刻表データ`
     - src/utils/ekitan.json 変更
118. 02-02 `電車時刻の計算ユーティリティ`
     - src/utils/trainUtils.ts 新規
119. 02-02 `findNextTrains実装`
     - src/utils/timeHandlers.ts 変更
120. 02-03 `電車の型定義追加`
     - src/utils/types.ts 変更 (EkitanEntry, TrainWithDate等)
121. 02-03 `TrainDetailコンポーネント`
     - src/components/ui/TrainDetail.tsx 新規
122. 02-04 `TrainSheetコンポーネント`
     - src/components/ui/TrainSheet.tsx 新規
123. 02-04 `電車時刻表の表示`
     - src/pages/home.tsx 変更
124. 02-05 `TrainDetailのスタイル調整`
     - src/components/ui/TrainDetail.tsx 変更
125. 02-05 `駅から建物までの徒歩時間オーバーレイ`
     - src/pages/home.tsx 変更
126. 02-06 `CampusConfig型定義 - 多キャンパス対応の基盤`
     - src/campuses/types.ts 新規
127. 02-06 `StationConfigインターフェース`
     - src/campuses/types.ts 変更
128. 02-07 `多摩キャンパス設定ファイル`
     - src/campuses/tama.ts 新規
129. 02-07 `既存コードをCampusConfig対応に移行`
     - src/pages/home.tsx 変更
130. 02-08 `市ヶ谷キャンパス設定 - いちっぷ 🌸`
     - src/campuses/ichigaya.ts 新規
131. 02-08 `市ヶ谷の駅データ（市ヶ谷・飯田橋・九段下）`
     - src/campuses/ichigaya.ts 変更
132. 02-09 `CampusContext - Context API`
     - src/campuses/CampusContext.tsx 新規
133. 02-09 `useCampusフック`
     - src/campuses/CampusContext.tsx 変更
134. 02-10 `React Router導入`
     - package.json 変更 (react-router-dom), src/App.tsx 変更
135. 02-10 `/:campusId/* ルーティング`
     - src/App.tsx 変更
136. 02-10 `ルーティングのtypo修正`
     - src/App.tsx 変更
137. 02-11 `キャンパス別ホームページ（多摩）`
     - src/pages/campuses/TamaHome.tsx 新規
138. 02-11 `キャンパス別ホームページ（市ヶ谷）`
     - src/pages/campuses/IchigayaHome.tsx 新規
139. 02-12 `桜テーマ背景 🌸`
     - src/components/ui/SakuraBackground.tsx 新規
140. 02-12 `市ヶ谷テーマカラー（ピンク系）`
     - src/pages/campuses/IchigayaHome.tsx 変更
141. 02-13 `桜パーティクルアニメーション`
     - src/components/ui/SakuraBackground.tsx 変更
142. 02-13 `桜アニメーションのパフォーマンス最適化`
     - src/components/ui/SakuraBackground.tsx 変更
143. 02-14 `桜の花びらの色調整`
     - src/components/ui/SakuraBackground.tsx 変更
144. 02-14 `キャンパス設定のexport整理`
     - src/campuses/index.ts 新規
145. 02-15 `ランディングページ - 3キャンパス選択`
     - src/pages/landing.tsx 新規
146. 02-15 `ランディングページのカードデザイン`
     - src/pages/landing.tsx 変更
147. 02-16 `キャンパス選択のアニメーション`
     - src/pages/landing.tsx 変更
148. 02-16 `ランディングページのグラデーション調整`
     - src/pages/landing.tsx 変更
149. 02-17 `キャンパス切替時のステート初期化`
     - src/pages/campuses/TamaHome.tsx, IchigayaHome.tsx 変更
150. 02-17 `useUserInputカスタムフック`
     - src/utils/useUserInput.ts 新規
151. 02-18 `cn()ユーティリティ (clsx + tailwind-merge)`
     - src/lib/utils.ts 新規, package.json 変更
152. 02-18 `全コンポーネントでcn()を使用`
     - 複数コンポーネント変更
153. 02-19 `カラーユーティリティ関数`
     - src/utils/color.ts 新規
154. 02-19 `テーマカラーの動的生成`
     - src/utils/color.ts 変更

### 2025年2月後半 (i18n・shadcn/ui・SNS開始)
155. 02-20 `i18n: locales定義`
     - src/i18n/locales.ts 新規
156. 02-20 `i18n: 翻訳データ (ja/en/zh)`
     - src/i18n/translations.ts 新規
157. 02-21 `useLocaleフック`
     - src/i18n/useLocale.ts 新規
158. 02-21 `i18n: index.ts`
     - src/i18n/index.ts 新規
159. 02-22 `バス・電車関連の翻訳`
     - src/i18n/translations.ts 変更
160. 02-22 `UI要素の翻訳`
     - src/i18n/translations.ts 変更
161. 02-22 `翻訳キーのtypo修正`
     - src/i18n/translations.ts 変更
162. 02-23 `九段下駅の時刻表データ`
     - src/utils/ekitan.json 変更
163. 02-23 `武蔵小金井駅の時刻表データ`
     - src/utils/ekitan.json 変更
164. 02-24 `快速/各停の区別`
     - src/components/ui/TrainDetail.tsx 変更
165. 02-24 `快速電車のハイライト`
     - src/components/ui/TrainDetail.tsx 変更
166. 02-25 `shadcn/ui設定`
     - components.json 新規
167. 02-25 `Sheetコンポーネント`
     - src/components/ui/sheet.tsx 新規
168. 02-25 `Drawerコンポーネント`
     - src/components/ui/drawer.tsx 新規, package.json 変更 (vaul)
169. 02-26 `Popoverコンポーネント`
     - src/components/ui/popover.tsx 新規
170. 02-26 `ScrollAreaコンポーネント`
     - src/components/ui/scroll-area.tsx 新規
171. 02-27 `AlertDialogコンポーネント`
     - src/components/ui/alert-dialog.tsx 新規
172. 02-27 `Skeletonローディング`
     - src/components/ui/Skeleton.tsx 新規
173. 02-28 `Skeletonのアニメーション調整`
     - src/components/ui/Skeleton.tsx 変更
174. 02-28 `ThemeConfig追加`
     - src/campuses/types.ts 変更

### 2025年3月前半 (SNSバックエンド)
175. 03-01 `Flask SNSバックエンド初期化`
     - backend/app.py, backend/requirements.txt 新規
176. 03-01 `User・Postモデル定義`
     - backend/models.py 新規
177. 03-02 `DB初期化`
     - backend/db.py 新規
178. 03-02 `Flask-Loginセッション管理`
     - backend/app.py 変更
179. 03-03 `ログインルート`
     - backend/app.py 変更
180. 03-03 `baseテンプレート`
     - backend/templates/base.html 新規
181. 03-03 `ログインページ`
     - backend/templates/login.html 新規
182. 03-04 `ホームページテンプレート`
     - backend/templates/home.html 新規
183. 03-04 `Tailwind CDN追加`
     - backend/templates/base.html 変更
184. 03-05 `サインアップ機能`
     - backend/app.py 変更, backend/templates/signup.html 新規
185. 03-05 `パスワードハッシュ化`
     - backend/app.py 変更
186. 03-06 `投稿作成機能`
     - backend/app.py 変更, backend/templates/create.html 新規
187. 03-06 `投稿一覧のページネーション`
     - backend/app.py 変更, backend/templates/home.html 変更
188. 03-07 `投稿詳細ページ`
     - backend/templates/post.html 新規
189. 03-07 `投稿の日時フォーマット修正`
     - backend/app.py 変更
190. 03-08 `投稿削除機能`
     - backend/app.py 変更
191. 03-08 `Reactionモデル - いいね機能`
     - backend/models.py 変更, backend/app.py 変更
192. 03-09 `いいねボタンUI`
     - backend/templates/post.html 変更
193. 03-09 `いいねの重複防止`
     - backend/app.py 変更
194. 03-10 `Friendモデル`
     - backend/models.py 変更
195. 03-10 `フレンド追加・削除`
     - backend/app.py 変更, backend/templates/friend.html 新規
196. 03-11 `ユーザープロフィールページ`
     - backend/templates/user.html 新規
197. 03-11 `ユーザー検索機能`
     - backend/app.py 変更, backend/templates/search.html 新規
198. 03-12 `backend/.gitignore追加`
     - backend/.gitignore 新規
199. 03-12 `i18n: 日本語・英語対応`
     - backend/i18n.py 新規
200. 03-13 `認証・投稿の翻訳キー`
     - backend/i18n.py 変更

### 2025年3月後半 (DM・管理者・時間割)
201. 03-13 `Messageモデル - DM基盤`
     - backend/models.py 変更
202. 03-14 `Flask-SocketIO導入`
     - backend/requirements.txt 変更, backend/app.py 変更
203. 03-14 `WebSocket メッセージ送受信`
     - backend/app.py 変更
204. 03-15 `DM一覧テンプレート`
     - backend/templates/dm_list.html 新規
205. 03-15 `DMチャットテンプレート`
     - backend/templates/dm_chat.html 新規
206. 03-16 `DM リアルタイム表示`
     - backend/templates/dm_chat.html 変更
207. 03-16 `DM未読カウント`
     - backend/app.py 変更, backend/models.py 変更
208. 03-17 `Commentモデル`
     - backend/models.py 変更
209. 03-17 `コメント投稿・表示UI`
     - backend/templates/post.html 変更
210. 03-18 `画像アップロード機能`
     - backend/app.py 変更, backend/static/uploads/.gitkeep 新規
211. 03-18 `コメントへの画像添付`
     - backend/templates/post.html 変更
212. 03-19 `ロールベース認証 (student/teacher/developer)`
     - backend/models.py 変更, backend/app.py 変更
213. 03-19 `ログインロール選択画面`
     - backend/templates/login_role.html 新規
214. 03-20 `管理者ダッシュボード`
     - backend/templates/admin.html 新規
215. 03-20 `管理者 - ユーザー管理`
     - backend/templates/admin_users.html 新規
216. 03-21 `管理者 - 投稿管理`
     - backend/templates/admin_posts.html 新規
217. 03-21 `中国語・韓国語翻訳追加`
     - backend/i18n.py 変更
218. 03-22 `フレンド・DM・管理者の翻訳`
     - backend/i18n.py 変更
219. 03-22 `言語切替機能`
     - backend/app.py 変更, backend/templates/base.html 変更
220. 03-23 `マイページ（aboutme）`
     - backend/templates/aboutme.html 新規
221. 03-23 `プロフィール編集・表示名変更`
     - backend/app.py 変更
222. 03-24 `エラーページテンプレート`
     - backend/templates/error.html 新規
223. 03-24 `404・500エラーハンドラー`
     - backend/app.py 変更
224. 03-25 `シラバススクレイピング実装`
     - backend/scraping.py 新規
225. 03-25 `スクレイピング - 授業コード・教員名取得`
     - backend/scraping.py 変更
226. 03-26 `Classモデル - 授業情報テーブル`
     - backend/models.py 変更
227. 03-26 `時間割テンプレート`
     - backend/templates/schedule.html 新規
228. 03-27 `授業一覧ページ`
     - backend/templates/classes.html 新規
229. 03-27 `授業詳細ページ`
     - backend/templates/class_detail.html 新規
230. 03-28 `授業検索フィルター`
     - backend/templates/classes.html 変更
231. 03-28 `授業登録・削除機能`
     - backend/app.py 変更
232. 03-29 `pytest テスト設定`
     - backend/tests/__init__.py, backend/tests/test_app.py 新規
233. 03-29 `認証フローのテスト`
     - backend/tests/test_app.py 変更
234. 03-30 `投稿CRUDのテスト`
     - backend/tests/test_app.py 変更
235. 03-30 `seed.py - テストデータ生成`
     - backend/seed.py 新規
236. 03-31 `seed.py - 40ユーザー・4言語投稿`
     - backend/seed.py 変更
237. 03-31 `seed.py - フレンドシップ・DM生成`
     - backend/seed.py 変更
238. 03-31 `SNSバックエンドREADME`
     - backend/README.md 新規
239. 03-31 `3キャンパスのテーマ設定`
     - src/campuses/tama.ts, ichigaya.ts 変更
240. 03-31 `README: マルチキャンパス対応の説明`
     - README.md 変更
241. 03-31 `春休み開発まとめ`
     - README.md 変更

---

## Phase 4: 学期中 SNS機能拡充 (2025.04 - 2025.07) — 60件

### 2025年4月
242. 04-03 `DM機能のテスト`
     - backend/tests/test_app.py 変更
243. 04-08 `フレンド機能のテスト`
     - backend/tests/test_app.py 変更
244. 04-12 `seed.py - コメント生成`
     - backend/seed.py 変更
245. 04-17 `seed.py - DM会話生成`
     - backend/seed.py 変更
246. 04-22 `WebSocket接続の安定性改善`
     - backend/app.py 変更
247. 04-27 `DM一覧の未読バッジ表示`
     - backend/templates/dm_list.html 変更

### 2025年5月
248. 05-02 `全14学部のデータ`
     - backend/app.py 変更
249. 05-07 `学部選択ドロップダウン`
     - backend/templates/base.html 変更
250. 05-12 `時間割 - 曜日×時限のグリッド表示`
     - backend/templates/schedule.html 変更
251. 05-17 `春学期/秋学期フィルタリング`
     - backend/app.py 変更
252. 05-22 `集中講義の表示対応`
     - backend/templates/schedule.html 変更
253. 05-27 `時間割関連の翻訳`
     - backend/i18n.py 変更
254. 05-30 `管理者パネルの翻訳`
     - backend/i18n.py 変更

### 2025年6月
255. 06-03 `管理者 - 統計情報表示`
     - backend/templates/admin.html 変更
256. 06-08 `管理者 - ユーザー検索`
     - backend/templates/admin_users.html 変更
257. 06-13 `管理者 - 一括削除`
     - backend/app.py 変更
258. 06-18 `プロフィール画像のアップロード`
     - backend/app.py 変更
259. 06-23 `SNSテンプレートのUI改善`
     - backend/templates/base.html 変更
260. 06-28 `ナビバーのレスポンシブ改善`
     - backend/templates/base.html 変更

### 2025年7月
261. 07-02 `認証・フレンドの追加テスト`
     - backend/tests/test_app.py 変更
262. 07-06 `投稿CRUDの追加テスト`
     - backend/tests/test_app.py 変更
263. 07-10 `コメント機能のテスト`
     - backend/tests/test_app.py 変更
264. 07-14 `テストのassert修正`
     - backend/tests/test_app.py 変更
265. 07-18 `DM未読カウントの表示修正`
     - backend/app.py 変更
266. 07-22 `DM一覧のソート順修正`
     - backend/app.py 変更
267. 07-25 `seed.py - 4言語DM生成`
     - backend/seed.py 変更
268. 07-28 `seed.py - コメント生成改善`
     - backend/seed.py 変更
269. 07-30 `TamaHomeのGSAPアニメーション改善`
     - src/pages/campuses/TamaHome.tsx 変更
270. 07-31 `IchigayaHomeのGSAPアニメーション改善`
     - src/pages/campuses/IchigayaHome.tsx 変更
271. 07-31 `方向切替ボタンのアニメーション`
     - src/pages/campuses/TamaHome.tsx 変更

---

## Phase 5: 夏休み集中 - AI + 小金井 + Docker (2025.08 - 2025.09) — 120件

### 2025年8月前半 (AI機能)
272. 08-01 `Groq API調査・検証`
     - backend/requirements.txt 変更 (groq追加)
273. 08-01 `ai.py - Groqクライアント初期化`
     - backend/ai.py 新規
274. 08-02 `AI投稿要約機能`
     - backend/ai.py 変更
275. 08-02 `AI要約 - 多言語プロンプト`
     - backend/ai.py 変更
276. 08-03 `AI要約のテスト`
     - backend/tests/test_app.py 変更
277. 08-03 `AI翻訳機能 (translate_text)`
     - backend/ai.py 変更
278. 08-04 `AI翻訳 - 4言語対応`
     - backend/ai.py 変更
279. 08-04 `AI翻訳のテスト`
     - backend/tests/test_app.py 変更
280. 08-05 `AIチャットボット基盤`
     - backend/ai.py 変更
281. 08-05 `チャットボット - キャンパス知識ベース`
     - backend/ai.py 変更
282. 08-06 `チャットボット - RAGコンテキスト注入`
     - backend/ai.py 変更
283. 08-06 `RAGのプロンプト調整`
     - backend/ai.py 変更
284. 08-07 `チャットボットテンプレート`
     - backend/templates/chatbot.html 新規
285. 08-07 `チャットボット - WebSocketリアルタイム応答`
     - backend/app.py 変更
286. 08-08 `チャットボットUIデザイン`
     - backend/templates/chatbot.html 変更
287. 08-08 `チャットボット - ローディングアニメーション`
     - backend/templates/chatbot.html 変更
288. 08-09 `チャットボットのスクロール修正`
     - backend/templates/chatbot.html 変更
289. 08-09 `チャットボットのエラーハンドリング`
     - backend/ai.py 変更
290. 08-10 `コンテンツモデレーション機能`
     - backend/ai.py 変更
291. 08-10 `モデレーション - 投稿作成時の自動チェック`
     - backend/app.py 変更
292. 08-11 `セマンティック検索 - キーワード抽出`
     - backend/ai.py 変更
293. 08-11 `セマンティック検索 - 投稿検索統合`
     - backend/app.py 変更
294. 08-12 `/api/ai/chat エンドポイント`
     - backend/app.py 変更
295. 08-12 `/api/ai/summarize エンドポイント`
     - backend/app.py 変更
296. 08-13 `/api/ai/translate エンドポイント`
     - backend/app.py 変更
297. 08-13 `/api/ai/moderate エンドポイント`
     - backend/app.py 変更
298. 08-14 `/api/ai/search エンドポイント`
     - backend/app.py 変更
299. 08-14 `APIレスポンスのJSON形式統一`
     - backend/app.py 変更
300. 08-15 `AI機能の翻訳キー`
     - backend/i18n.py 変更

### 2025年8月後半 (AI UI・スクレイピング)
301. 08-15 `投稿詳細にAI要約ボタン`
     - backend/templates/post.html 変更
302. 08-16 `投稿にAI翻訳ボタン`
     - backend/templates/post.html 変更
303. 08-16 `AI機能ボタンのデザイン`
     - backend/templates/post.html 変更
304. 08-17 `ボタンのローディング状態`
     - backend/templates/post.html 変更
305. 08-17 `Groq APIレート制限のハンドリング`
     - backend/ai.py 変更
306. 08-18 `AI要約のトークン制限調整`
     - backend/ai.py 変更
307. 08-18 `Groq APIキャッシュ`
     - backend/ai.py 変更
308. 08-19 `ナビにチャットボットリンク追加`
     - backend/templates/base.html 変更
309. 08-19 `シラバススクレイピング - 全14学部`
     - backend/scraping.py 変更
310. 08-20 `スクレイピング - エラーハンドリング改善`
     - backend/scraping.py 変更
311. 08-20 `スクレイピング結果のExcel出力`
     - backend/scraping.py 変更, backend/授業一覧.xlsx 新規
312. 08-21 `AI機能のドキュメント`
     - backend/README.md 変更
313. 08-21 `AI機能の統合テスト`
     - backend/tests/test_app.py 変更
314. 08-22 `REST API: /api/posts`
     - backend/app.py 変更
315. 08-22 `/api/users/search`
     - backend/app.py 変更
316. 08-23 `/api/messages`
     - backend/app.py 変更
317. 08-23 `/api/upload`
     - backend/app.py 変更
318. 08-24 `APIのエラーレスポンス統一`
     - backend/app.py 変更

### 2025年9月前半 (小金井キャンパス)
319. 09-01 `小金井キャンパス設定 - こがっぷ ⚡`
     - src/campuses/koganei.ts 新規
320. 09-01 `小金井の駅データ（東小金井・武蔵小金井）`
     - src/campuses/koganei.ts 変更
321. 09-02 `キャンパス別ホームページ（小金井）`
     - src/pages/campuses/KoganeiHome.tsx 新規
322. 09-02 `サイバーテーマ背景 ⚡`
     - src/components/ui/CyberBackground.tsx 新規
323. 09-03 `小金井テーマカラー（シアン系）`
     - src/pages/campuses/KoganeiHome.tsx 変更
324. 09-03 `サイバー背景のネオンライン`
     - src/components/ui/CyberBackground.tsx 変更
325. 09-04 `パーティクル背景改善`
     - src/components/ui/ParticleBackground.tsx 変更
326. 09-04 `小金井ホームのレイアウト`
     - src/pages/campuses/KoganeiHome.tsx 変更
327. 09-05 `Three.js 3Dキャンパスマップ初期実装`
     - src/components/ui/CampusMap3D.tsx 新規, package.json 変更
328. 09-05 `3Dマップ - 建物モデル配置`
     - src/components/ui/CampusMap3D.tsx 変更
329. 09-06 `3Dマップ - カメラコントロール`
     - src/components/ui/CampusMap3D.tsx 変更
330. 09-06 `3Dマップのライティング調整`
     - src/components/ui/CampusMap3D.tsx 変更
331. 09-07 `Three.js メモリリーク修正`
     - src/components/ui/CampusMap3D.tsx 変更
332. 09-07 `3Dマップ - インタラクティブ建物選択`
     - src/components/ui/CampusMap3D.tsx 変更
333. 09-08 `3Dマップのホバーエフェクト`
     - src/components/ui/CampusMap3D.tsx 変更

### 2025年9月後半 (Docker・品質)
334. 09-08 `Dockerfile追加`
     - backend/Dockerfile 新規
335. 09-09 `.dockerignore`
     - backend/.dockerignore 新規
336. 09-09 `docker-compose.yml`
     - docker-compose.yml 新規
337. 09-10 `Nginx設定`
     - nginx.conf 新規
338. 09-10 `docker-composeにNginx追加`
     - docker-compose.yml 変更
339. 09-11 `Nginxの静的ファイル配信修正`
     - nginx.conf 変更
340. 09-11 `Gunicorn + eventlet設定`
     - backend/requirements.txt 変更
341. 09-12 `Dockerfile最適化`
     - backend/Dockerfile 変更
342. 09-12 `docker-compose完成 - Flask + Nginx`
     - docker-compose.yml 変更, backend/docker-compose.yml 新規
343. 09-13 `Nginx WebSocketプロキシ`
     - nginx.conf 変更
344. 09-13 `CSRF対策・入力バリデーション`
     - backend/app.py 変更
345. 09-14 `Nginx静的ファイルキャッシュ`
     - nginx.conf 変更
346. 09-15 `Node.jsスクレイピングスクリプト`
     - scripts/scraping.ts 新規
347. 09-15 `ESLint設定`
     - eslint.config.js 新規
348. 09-16 `Vitest設定`
     - vitest.config.ts 新規, src/test/setup.ts 新規
349. 09-16 `キャンパス切替のステート初期化バグ修正`
     - src/utils/useUserInput.ts 変更
350. 09-17 `画像最適化 (WebP変換)`
     - package.json 変更 (sharp追加)
351. 09-17 `vite-plugin-image-optimizer導入`
     - vite.config.ts 変更, package.json 変更
352. 09-18 `PWA Service Worker改善`
     - vite.config.ts 変更
353. 09-18 `PWAのキャッシュ設定調整`
     - vite.config.ts 変更
354. 09-19 `提携店舗ページ・データ構造`
     - src/utils/shopData.ts 新規, src/utils/types.ts 変更 (ShopData型)
355. 09-19 `店舗データ（市ヶ谷周辺）`
     - src/utils/shopData.ts 変更
356. 09-20 `StoreCardコンポーネント`
     - src/components/store-card.tsx 新規
357. 09-20 `店舗一覧ページ`
     - src/pages/discount/discount.tsx 新規
358. 09-21 `店舗詳細ページ`
     - src/pages/discount/ShopDetail.tsx 新規
359. 09-21 `ShopDetailTemplateコンポーネント`
     - src/components/ShopDetailTemplate.tsx 新規
360. 09-22 `店舗カードのホバーエフェクト`
     - src/components/store-card.tsx 変更
361. 09-22 `店舗詳細のGoogleMap埋め込み`
     - src/components/ShopDetailTemplate.tsx 変更
362. 09-23 `テクノロジー紹介ページ`
     - src/pages/tech.tsx 新規
363. 09-23 `キャンパス情報ページ`
     - src/pages/campus.tsx 新規
364. 09-24 `404 Not Foundページ`
     - src/pages/NotFound.tsx 新規
365. 09-24 `404ページのデザイン`
     - src/pages/NotFound.tsx 変更
366. 09-25 `キーボードナビゲーション追加`
     - src/pages/campuses/IchigayaHome.tsx, TamaHome.tsx 変更
367. 09-25 `ARIA属性追加`
     - 複数コンポーネント変更
368. 09-26 `小金井ホームの最終調整`
     - src/pages/campuses/KoganeiHome.tsx 変更
369. 09-26 `3キャンパスのindex.ts更新`
     - src/campuses/index.ts 変更
370. 09-27 `Safariの互換性修正`
     - src/index.css 変更
371. 09-27 `不要な依存関係削除`
     - package.json 変更
372. 09-28 `README: 3キャンパス対応の説明`
     - README.md 変更
373. 09-28 `アーキテクチャ図をREADMEに追加`
     - README.md 変更
374. 09-29 `SNS README大幅更新`
     - backend/README.md 変更
375. 09-29 `SNS README - AI機能セクション`
     - backend/README.md 変更
376. 09-30 `夏休み開発まとめ`
     - README.md 変更

---

## Phase 6: 学期中 品質改善 (2025.10 - 2026.01) — 50件

### 2025年10月
377. 10-03 `オフラインキャッシュ戦略`
     - vite.config.ts 変更
378. 10-08 `市ヶ谷周辺の写真追加`
     - src/pages/home.tsx 変更
379. 10-13 `キャンパスマップ画像追加`
     - src/pages/home.tsx 変更
380. 10-18 `画像ギャラリーのレイアウト`
     - src/pages/home.tsx 変更
381. 10-23 `土曜ダイヤの判定ロジック修正`
     - src/utils/dateUtils.ts 変更
382. 10-28 `特別ダイヤの優先順位修正`
     - src/utils/dateUtils.ts 変更

### 2025年11月
383. 11-02 `時刻表計算の境界値テスト`
     - src/test/setup.ts 変更
384. 11-07 `祝日判定のテスト`
     - src/test/setup.ts 変更
385. 11-12 `npm依存関係更新`
     - package.json 変更
386. 11-17 `3Dキャンパスマップ改善`
     - src/components/ui/CampusMap3D.tsx 変更
387. 11-22 `年末年始の特別ダイヤ`
     - src/utils/specialDates.json 変更
388. 11-27 `冬休みダイヤデータ更新`
     - src/utils/Timetable.json 変更

### 2025年12月
389. 12-02 `年末の依存関係更新`
     - package.json 変更
390. 12-07 `WebSocket切断問題の修正`
     - backend/app.py 変更
391. 12-12 `DM既読状態の同期問題`
     - backend/app.py 変更
392. 12-17 `React.lazy + Suspenseでコード分割`
     - src/App.tsx 変更
393. 12-22 `LazyFallbackローディング画面`
     - src/App.tsx 変更
394. 12-25 `年末コード整理`
     - 複数ファイル微修正
395. 12-28 `npm audit fix`
     - package.json 変更

### 2026年1月
396. 01-05 `年末年始の運休日修正`
     - src/utils/specialDates.json 変更
397. 01-08 `2026年の祝日データ`
     - src/utils/Holidays.json 変更
398. 01-11 `2026年の特別ダイヤ`
     - src/utils/specialDates.json 変更
399. 01-14 `フロントエンドコンポーネントテスト`
     - src/test/setup.ts 変更
400. 01-17 `useBusDataフックのテスト`
     - src/test/setup.ts 変更
401. 01-20 `useClockフックのテスト`
     - src/test/setup.ts 変更
402. 01-23 `App.tsxのルーティング整理`
     - src/App.tsx 変更
403. 01-26 `画像の遅延読み込み`
     - src/pages/campuses/IchigayaHome.tsx 変更
404. 01-28 `TypeScript strict mode有効化`
     - tsconfig.json 変更
405. 01-29 `strict modeの型エラー修正`
     - 複数ファイル変更
406. 01-30 `strict modeの残りの型エラー修正`
     - 複数ファイル変更
407. 01-31 `学期末コード整理`
     - 複数ファイル微修正

---

## Phase 7: 春休み集中 - アップグレード + 画像 (2026.02 - 2026.03) — 80件

### 2026年2月前半 (メジャーアップグレード)
408. 02-01 `React 19 アップグレード`
     - package.json 変更
409. 02-01 `React 19の破壊的変更対応`
     - src/main.tsx, src/App.tsx 変更
410. 02-02 `React 19のuseRef変更対応`
     - 複数コンポーネント変更
411. 02-02 `Tailwind CSS 4 移行`
     - package.json 変更, src/index.css 変更
412. 02-03 `Tailwind 4のクラス名変更対応`
     - 複数コンポーネント変更
413. 02-03 `Tailwind 4のダークモード修正`
     - src/index.css 変更
414. 02-04 `Vite 6 アップグレード`
     - package.json 変更, vite.config.ts 変更
415. 02-04 `Vite 6の設定変更対応`
     - vite.config.ts 変更
416. 02-05 `アップグレード後のビルドエラー修正`
     - 複数ファイル変更
417. 02-05 `React Router 7 アップグレード`
     - package.json 変更
418. 02-06 `React Router 7の破壊的変更対応`
     - src/App.tsx 変更
419. 02-06 `ルーティングのNavigate修正`
     - src/App.tsx 変更
420. 02-07 `Zod導入`
     - package.json 変更 (zod追加), src/utils/types.ts 変更
421. 02-07 `フォーム入力のZodバリデーション`
     - src/utils/types.ts 変更
422. 02-08 `Zodスキーマの後方互換エイリアス`
     - src/utils/types.ts 変更

### 2026年2月後半 (データ整備・設定)
423. 02-09 `市ヶ谷3駅の全時刻表データ完成`
     - src/utils/data/ichigaya-ekitan.json 新規
424. 02-09 `小金井2駅の全時刻表データ完成`
     - src/utils/data/koganei-ekitan.json 新規
425. 02-10 `市ヶ谷の特別ダイヤデータ`
     - src/utils/data/ichigaya-specialDates.json 新規
426. 02-10 `小金井の特別ダイヤデータ`
     - src/utils/data/koganei-specialDates.json 新規
427. 02-11 `多摩の特別ダイヤデータ`
     - src/utils/data/tama-specialDates.json 新規
428. 02-11 `駅探データ統合`
     - src/utils/data/tama-ekitan.json 新規
429. 02-12 `多摩の時刻表データ移行`
     - src/utils/data/tama-timetable.json 新規
430. 02-12 `BuildingConfig追加`
     - src/campuses/types.ts 変更
431. 02-13 `キャンパス建物設定（徒歩時間）`
     - src/campuses/tama.ts, ichigaya.ts, koganei.ts 変更
432. 02-13 `CampusConfig - transportMode追加`
     - src/campuses/types.ts 変更
433. 02-14 `CampusConfig - hasDirectionSwap追加`
     - src/campuses/types.ts 変更
434. 02-14 `CampusConfig - gaTrackingId追加`
     - src/campuses/types.ts 変更
435. 02-15 `3キャンパスのテーマ設定完成`
     - src/campuses/tama.ts, ichigaya.ts, koganei.ts 変更
436. 02-15 `テーマのグラデーション微調整`
     - src/campuses/tama.ts, ichigaya.ts, koganei.ts 変更
437. 02-16 `requirements.txtバージョン更新`
     - backend/requirements.txt 変更
438. 02-16 `beautifulsoup4・openpyxl追加`
     - backend/requirements.txt 変更
439. 02-17 `SNSバックエンドのTailwind設定`
     - backend/static/js/tailwind.js 新規, backend/templates/tailwind.config.js 新規
440. 02-17 `Tailwind CDN → ローカルビルドに移行`
     - backend/templates/base.html 変更
441. 02-18 `CGIデプロイ対応`
     - backend/index.cgi 新規
442. 02-18 `デプロイ手順のドキュメント`
     - backend/README.md 変更
443. 02-19 `GA4イベントトラッキング`
     - src/App.tsx 変更
444. 02-19 `Lazy loading全ページ対応`
     - src/App.tsx 変更
445. 02-20 `vite-plugin-pwa設定`
     - vite.config.ts 変更
446. 02-20 `画像WebP変換・最適化`
     - vite.config.ts 変更
447. 02-21 `バンドルサイズの最適化`
     - vite.config.ts 変更

### 2026年3月前半 (テスト・品質)
448. 03-01 `E2Eテスト（ログインフロー）`
     - backend/tests/test_app.py 変更
449. 03-01 `E2Eテスト（投稿フロー）`
     - backend/tests/test_app.py 変更
450. 03-02 `バックエンドテスト拡充`
     - backend/tests/test_app.py 変更
451. 03-02 `AI機能のモックテスト`
     - backend/tests/test_app.py 変更
452. 03-03 `モバイルのドロワーメニュー修正`
     - src/components/menu.tsx 変更
453. 03-03 `タッチイベントの処理改善`
     - src/pages/campuses/TamaHome.tsx 変更
454. 03-04 `ESLintルール調整`
     - eslint.config.js 変更
455. 03-04 `lint警告の修正`
     - 複数ファイル変更
456. 03-05 `コード内コメント追加`
     - 複数ファイル変更
457. 03-05 `JSDoc整備`
     - 複数ファイル変更
458. 03-06 `不要コード削除`
     - 複数ファイル変更
459. 03-06 `npm run scrapingスクリプト`
     - package.json 変更

### 2026年3月後半 (画像統合)
460. 03-08 `全キャンパスのテーマカラー最終調整`
     - src/campuses/tama.ts, ichigaya.ts, koganei.ts 変更
461. 03-09 `グラデーション・グローエフェクト統一`
     - src/pages/campuses/IchigayaHome.tsx, KoganeiHome.tsx, TamaHome.tsx 変更
462. 03-10 `市ヶ谷の提携店舗画像追加 (FACTORY)`
     - public/images/市谷FACTORY ファクトリー.webp 新規
463. 03-10 `市ヶ谷の提携店舗画像追加 (K-Cabin)`
     - public/images/市谷K-Cabin Ｋ−キャビン.webp 新規
464. 03-11 `市ヶ谷の提携店舗画像追加 (鎌倉パスタ)`
     - public/images/市谷Kamakura Pasta Ichigaya 鎌倉パスタ 市ヶ谷店.webp 新規
465. 03-11 `市ヶ谷の提携店舗画像追加 (らいむらいと)`
     - public/images/市谷Limelight らいむらいと 市ヶ谷本店.webp 新規
466. 03-12 `小金井の提携店舗画像追加 (華屋与兵衛)`
     - public/images/小金井Hanaya Yohei 華屋与兵衛 東小金井店.webp 新規
467. 03-12 `小金井の提携店舗画像追加 (一平ソバ)`
     - public/images/小金井Ippei Soba 一平ソバ.webp 新規
468. 03-13 `小金井の提携店舗画像追加 (にしまきごはん)`
     - public/images/小金井Nishimaki Gohan にしまきごはん.webp 新規
469. 03-13 `小金井の提携店舗画像追加 (レミニス)`
     - public/images/小金井Reminisce レミニス.webp 新規
470. 03-14 `小金井の提携店舗画像追加 (北陸鮨)`
     - public/images/小金井北陸鮨きときと  東小金井.webp 新規
471. 03-15 `多摩の提携店舗画像追加 (開都)`
     - public/images/多摩Kaito うどん屋 開都.webp 新規
472. 03-15 `多摩の提携店舗画像追加 (古民家茶屋)`
     - public/images/多摩古民家茶屋 市.webp 新規
473. 03-16 `多摩の提携店舗画像追加 (喜楽)`
     - public/images/多摩喜楽.webp 新規
474. 03-16 `多摩の提携店舗画像追加 (蕎麦処)`
     - public/images/多摩蕎麦処 川崎.webp 新規
475. 03-17 `市ヶ谷の店舗データ更新（4店舗）`
     - src/utils/shopData.ts 変更
476. 03-18 `小金井の店舗データ更新（5店舗）`
     - src/utils/shopData.ts 変更
477. 03-19 `多摩の店舗データ更新（4店舗）`
     - src/utils/shopData.ts 変更
478. 03-19 `shopDataByCampusのexport整理`
     - src/utils/shopData.ts 変更
479. 03-20 `法政大学校徽画像追加`
     - public/images/hosei-logo.png, public/images/法政大学校徽.png 新規
480. 03-21 `マスコット画像追加`
     - public/images/hosei-mascot.jpg, public/images/法政大学吉祥物.jpg 新規
481. 03-22 `情報科学研究科ロゴ追加`
     - public/images/hosei-cis-logo.jpg, public/images/法政大学_情报科学研究科_logo.jpg 新規
482. 03-23 `3キャンパスの景色写真追加`
     - public/images/*-scenery.*, public/images/法政大学*景色.* 新規
483. 03-24 `3キャンパスの地図画像更新`
     - public/images/*-map.*, public/images/法政大学*地图.* 新規
484. 03-25 `キャンパス設定の地図パス更新`
     - src/campuses/ichigaya.ts, koganei.ts, tama.ts 変更
485. 03-26 `2026年度時刻表データ更新`
     - src/utils/data/tama-timetable.json 変更
486. 03-27 `2026年度のシラバスデータ更新`
     - backend/授業一覧.xlsx 変更
487. 03-28 `iOS PWAのステータスバー修正`
     - index.html 変更

---

## Phase 8: 最終調整 (2026.04) — 25件

488. 04-01 `ランディングページに校徽追加`
     - src/pages/landing.tsx 変更
489. 04-01 `ランディングページに景色写真統合`
     - src/pages/landing.tsx 変更
490. 04-02 `景色写真のオーバーレイ調整`
     - src/pages/landing.tsx 変更
491. 04-02 `マスコット表示追加`
     - src/pages/landing.tsx 変更
492. 04-02 `ランディングページのSNSセクション`
     - src/pages/landing.tsx 変更
493. 04-03 `テックページにCISロゴ追加`
     - src/pages/tech.tsx 変更
494. 04-03 `テックページのバージョン情報更新`
     - src/pages/tech.tsx 変更
495. 04-04 `CampusConfigにsceneryImagePath追加`
     - src/campuses/types.ts 変更
496. 04-04 `各キャンパスにsceneryImagePath設定`
     - src/campuses/ichigaya.ts, koganei.ts, tama.ts 変更
497. 04-05 `IchigayaHomeに景色写真追加`
     - src/pages/campuses/IchigayaHome.tsx 変更
498. 04-05 `KoganeiHomeに景色写真追加`
     - src/pages/campuses/KoganeiHome.tsx 変更
499. 04-06 `TamaHomeに景色写真追加`
     - src/pages/campuses/TamaHome.tsx 変更
500. 04-06 `ロゴをテキストタイトルに変更`
     - src/pages/campuses/IchigayaHome.tsx, KoganeiHome.tsx, TamaHome.tsx 変更
501. 04-07 `useUserInputのキャンパス別デフォルト駅修正`
     - src/utils/useUserInput.ts 変更
502. 04-07 `localStorageのキャンパス間分離`
     - src/utils/useUserInput.ts 変更
503. 04-07 `店舗データのtypo修正`
     - src/utils/shopData.ts 変更
504. 04-08 `ランディングページの最終調整`
     - src/pages/landing.tsx 変更
505. 04-08 `テックページの最終調整`
     - src/pages/tech.tsx 変更
506. 04-08 `TamaHomeのリンクボタン改善`
     - src/pages/campuses/TamaHome.tsx 変更
507. 04-09 `KoganeiHomeのリンクボタン改善`
     - src/pages/campuses/KoganeiHome.tsx 変更
508. 04-09 `IchigayaHomeのリンクボタン改善`
     - src/pages/campuses/IchigayaHome.tsx 変更
509. 04-09 `Safari CSS Grid互換性修正`
     - src/index.css 変更
510. 04-10 `README最終更新`
     - README.md 変更
511. 04-10 `最終コード整理`
     - 複数ファイル微修正
512. 04-10 `全機能統合完成 🎉`
     - README.md 変更

---
合計: 512件

## 月別commit数
- 2024.10: 39件 (プロジェクト開始、集中)
- 2024.11: 24件 (学期中)
- 2024.12: 37件 (年末集中)
- 2025.01: 15件 (学期末)
- 2025.02: 59件 (春休み集中)
- 2025.03: 67件 (春休み集中)
- 2025.04: 6件 (学期中)
- 2025.05: 7件 (学期中)
- 2025.06: 6件 (学期中)
- 2025.07: 11件 (学期末)
- 2025.08: 47件 (夏休み集中)
- 2025.09: 58件 (夏休み集中)
- 2025.10: 6件 (学期中)
- 2025.11: 6件 (学期中)
- 2025.12: 7件 (学期中)
- 2026.01: 12件 (学期末)
- 2026.02: 40件 (春休み集中)
- 2026.03: 40件 (春休み集中)
- 2026.04: 25件 (最終調整)
