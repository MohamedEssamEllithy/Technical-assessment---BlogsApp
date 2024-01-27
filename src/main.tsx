import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import AuthorContextProvider from "./context/authorContext.tsx";
import PostContextProvider from './context/postContext.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthorContextProvider>
    <PostContextProvider>
      <App />
    </PostContextProvider>
    </AuthorContextProvider>
  </React.StrictMode>
);
