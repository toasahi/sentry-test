import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://cb7c5313d1dddf4bbc21c66af0f51233@o4506357249409024.ingest.sentry.io/4506364821831680",
  integrations: [],
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
