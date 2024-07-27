"use client";
import { useRef } from "react";
import { Provider, useDispatch } from "react-redux";
import { makeStore, AppStore } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { data } from "@/data";
import { addData } from "./slice";
import { Toaster } from "@/components/ui/toaster";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  let persistor = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
