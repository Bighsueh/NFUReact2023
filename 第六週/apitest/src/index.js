import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 1.先import他們
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 2.建立queryclient
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 3.QueryClientProvider
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

reportWebVitals();
