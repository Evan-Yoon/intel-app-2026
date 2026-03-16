import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MoodButton = ({ mood, isSelected, onPress }) => {
  let bgColor = "";
  let buttonLabel = "";

  switch (mood.id) {
    case "happy":
      bgColor = "#e5fd0fff";
      buttonLabel = "행복해요 😊";
      break;
    case "neutral":
      bgColor = "#c3c3c3ff";
      buttonLabel = "보통이에요 😐";
      break;
    case "sad":
      bgColor = "#7e99f0ff";
      buttonLabel = "우울해요 😔";
      break;
    default:
      bgColor = mood.color;
      buttonLabel = mood.label;
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: bgColor },
        isSelected && styles.selected,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

export default MoodButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
  buttonText: { fontSize: 20 },
  selected: { borderWidth: 3, borderColor: "red" },
});
