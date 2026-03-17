import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const UpdownScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UpDown 숫자 맞추기 게임</Text>
      <Text style={styles.subTitle}>1-100 사이의 숫자를 입력하세요</Text>
      {/* 숫자 입력받기 */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
      </View>
      {/* 결과 출력 */}
      <View style={styles.resultBox}>
        <Text>결과출력</Text>
      </View>
    </View>
  );
};

export default UpdownScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  subTitle: {
    fontSize: 20,
  },
  inputContainer: { flexDirection: "row", padding: 30 },
  input: {
    borderWidth: 1,
    width: 150,
    height: 100,
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "blue",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontSize: 30, color: "#fff" },
  resultBox: {
    backgroundColor: "#fff",
    width: "80%",
    height: 300,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // 그림자효과 (아이폰)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // 그림자효과 (안드로이드)
    elevation: 4,
  },
});
