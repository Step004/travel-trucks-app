import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./campers/slice";
import filterReducer from "./filters/slice";
import {
  FLUSH,
  persistStore,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const camperPersistConfig = {
  key: "camper",
  storage,
};

const persistedCamperReducer = persistReducer(
  camperPersistConfig,
  camperReducer
);

export const store = configureStore({
  reducer: {
    camper: persistedCamperReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
