import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import { useUserStore } from "../stores/useUserStore";
import type { UserInfo } from "../stores/useUserStore";

type calendarType = "solar" | "lunar";

type Props = {
  onSubmit: (info: UserInfo) => void;
  defaultValue?: UserInfo;
};

export default function UserInfoForm({ onSubmit, defaultValue }: Props) {
  const { t } = useTranslation();
  const { userInfo, setUserInfo } = useUserStore();

  const [name, setName] = useState("");
  const [gender, setGender] = useState<string>("");
  const [birth, setBirth] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [calendarType, setCalendarType] = useState<calendarType>("solar");

  const genderOptions = [
    { label: t("male"), value: "male" },
    { label: t("female"), value: "female" },
  ];

  const calendarOptions = [
    { label: t("solar"), value: "solar" },
    { label: t("lunar"), value: "lunar" },
  ];

  useEffect(() => {
    const source = defaultValue ?? userInfo;
    if (source) {
      setName(source.name || "");
      setGender(source.gender || "");
      setBirth(source.birth || "");
      setBirthTime(source.birthTime || "");
      setCalendarType(source.calendarType || "solar");
    }
  }, [defaultValue, userInfo]);

  const handleSubmit = () => {
    const info: UserInfo = { name, gender, birth, birthTime, calendarType };
    setUserInfo(info);
    onSubmit(info);
  };

  const handleReset = () => {
    const empty: UserInfo = {
      name: "",
      gender: "",
      birth: "",
      birthTime: "",
      calendarType: "solar",
    };
    setUserInfo(empty);
    setName("");
    setGender("");
    setBirth("");
    setBirthTime("");
    setCalendarType("solar");
  };

  return (
    <View className="bg-white p-6 rounded-xl shadow space-y-4">
      {/* 이름 */}
      <View>
        <Text className="text-sm text-gray-600 mb-1">{t("name")}</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          className="border border-gray-300 rounded-lg p-2 bg-white"
          placeholder={t("name")}
        />
      </View>

      {/* 성별 & 생년월일 */}
      <View className="flex-row gap-4">
        <View className="flex-1">
          <Text className="text-sm text-gray-600 mb-1">{t("gender")}</Text>
          <View className="flex-row gap-2">
            {genderOptions.map(({ label, value }) => (
              <Pressable
                key={value}
                onPress={() => setGender(value)}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  gender === value
                    ? "bg-pink-500 border-pink-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <Text
                  className={gender === value ? "text-white" : "text-gray-700"}
                >
                  {label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="flex-1">
          <Text className="text-sm text-gray-600 mb-1">{t("birth")}</Text>
          <TextInput
            value={birth}
            onChangeText={setBirth}
            placeholder="YYYY-MM-DD"
            className="border border-gray-300 rounded-lg p-2 bg-white"
          />
        </View>
      </View>

      {/* 출생시간 & 달력 */}
      <View className="flex-row gap-4">
        <View className="flex-1">
          <Text className="text-sm text-gray-600 mb-1">{t("birthTime")}</Text>
          <TextInput
            value={birthTime}
            onChangeText={setBirthTime}
            placeholder="HH:MM"
            className="border border-gray-300 rounded-lg p-2 bg-white"
          />
        </View>

        <View className="flex-1">
          <Text className="text-sm text-gray-600 mb-1">
            {t("calendarType")}
          </Text>
          <View className="flex-row gap-2">
            {calendarOptions.map(({ label, value }) => (
              <Pressable
                key={value}
                onPress={() => setCalendarType(value as calendarType)}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  calendarType === value
                    ? "bg-pink-500 border-pink-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <Text
                  className={
                    calendarType === value ? "text-white" : "text-gray-700"
                  }
                >
                  {label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>

      {/* 버튼들 */}
      <View className="flex-row gap-2 mt-4">
        <Pressable
          onPress={handleSubmit}
          className="flex-1 py-3 rounded-full bg-pink-500 shadow"
        >
          <Text className="text-white text-center font-semibold">
            {t("viewFortune")}
          </Text>
        </Pressable>
        <Pressable
          onPress={handleReset}
          className="flex-1 py-3 rounded-full bg-gray-200 shadow"
        >
          <Text className="text-gray-700 text-center font-semibold">
            {t("reset")}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
