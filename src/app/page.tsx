"use client";
import { Provider } from "react-redux";
import SheetsHome from "./components/SheetsHome";
import store from "./state/store";

export default function Home() {
  return (
    <Provider store={store}>
      <SheetsHome />
    </Provider>
  );
}
