import { Stack } from "expo-router";
import "../global.css";
import "@/i18n/i18n"; // 꼭 import 필요! (경로는 실제 위치 기준)

export default function RootLayout() {
  return <Stack />;
}
