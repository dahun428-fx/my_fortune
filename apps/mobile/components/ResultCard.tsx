import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

type Props = {
  result: string;
};

export default function ResultCard({ result }: Props) {
  const { t } = useTranslation();

  if (!result) return null;

  return (
    <View className="w-full bg-white p-4 rounded-xl shadow text-sm">
      <Text className="text-base font-medium text-gray-800 mb-2">
        🔮 {t("fortuneResultTitle")}
      </Text>
      <Text className="text-gray-700 whitespace-pre-line">{result}</Text>
    </View>
  );
}
