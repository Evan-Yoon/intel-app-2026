import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { moodData } from "../data/moodData";
import { useFonts, Dongle_400Regular } from "@expo-google-fonts/dongle";
import MoodButton from "../components/MoodButton";

const MoodScreen = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  let [fontsLoaded] = useFonts({
    Dongle: Dongle_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleMoodSelect = (moodId) => {
    // find() 배열 메서드는 조건에 맞는 첫 번째 요소를 반환합니다.
    // moodData 배열 안에 있는 각 기분 객체(m)의 id와 클릭한 버튼에서 넘겨준 moodId가 같은 객체만 찾아서 가져옵니다.
    const mood = moodData.find((m) => m.id === moodId);
    console.log("Selected Mood:", mood);
    setSelectedMood(mood);
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>오늘 기분이 어때요?</Text>
      </View>
      {moodData.map((mood) => (
        <MoodButton
          key={mood.id}
          mood={mood}
          isSelected={selectedMood?.id === mood.id}
          onPress={() => handleMoodSelect(mood.id)}
        />
      ))}
      <View style={styles.messageBox}>
        {selectedMood ? (
          <>
            <Image
              source={selectedMood.image}
              style={{
                width: 60,
                height: 60,
                // "contain": 이미지의 비율을 유지하면서 주어진 영역(60x60) 안에 이미지가 전체적으로 보일 수 있도록 맞춥니다.
                // 이미지가 잘리지 않게 하려면 이 속성을 많이 씁니다. 반대는 꽉 채우는 "cover"입니다.
                resizeMode: "contain",
                marginBottom: 10,
              }}
            />
            <Text
              style={[
                styles.message,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              {selectedMood.message}
            </Text>
          </>
        ) : (
          <Text
            style={[
              styles.message,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            메시지 표시
          </Text>
        )}
      </View>
    </View>
  );
};

export default MoodScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { marginBottom: 30 },
  titleText: { fontSize: 30, fontWeight: "600" },
  messageBox: {
    borderWidth: 1,
    backgroundColor: "#fff",
    width: "80%",
    height: 150,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // 그림자효과 (아이폰)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // 그림자효과 (안드로이드)
    elevation: 4,
  },
  message: { fontSize: 24, fontFamily: "Dongle" },
});
