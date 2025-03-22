# プロジェクトの作成方法

[Vite](https://ja.vitejs.dev/) というモジュールバンドラーを使ったプロジェクトの作成

[vitejs-plugin-react](https://ja.vitejs.dev/plugins/#vitejs-plugin-react):esbuild と Babel を使用した従来の Vite + React の組み合わせ
[vitejs-plugin-react-swc](https://ja.vitejs.dev/plugins/#vitejs-plugin-react-swc)Babel の代わりに Verce 社が開発した swc を使用した次世代の Vite + React の組み合わせ

```bash
npm create vite@latest my-react-app -- --template react
# 上の文はReactのプロジェクトのテンプレートを作るコマンド的なもの
npm create vite@latest my-react-app-swc -- --template react-swc

#下の文だと少し古いReactのやつ？Viteはない
npx create-react-app 名前

# 何においても恐らく以下のコマンドをnpmを始めるにあたって実行しなければいけない．これは絶対．(npxのやつではスルーしてnpm startできる)
npm install
# npm install --verboseで進行状況がわかる


#実際にReactプロジェクトを実行するときは以下のコマンドを打つ．
npm run dev
# またはnpm start

```

Windowsのエラーがあったら，下のコマンドを実行する？
```powershell
Set-ExecutionPolicy RemoteSigned
```


