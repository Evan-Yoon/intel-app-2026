import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LottieView from "lottie-react-native";

const UpdownScreen = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1,
  );
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const resetGame = () => {
    Keyboard.dismiss();
    setInput("");
    setResult("");
    setIsGameOver(false);
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setCount(0);
    setHistory([]);
  };

  const checkNumber = () => {
    const num = parseInt(input);
    if (isNaN(num)) {
      Alert.alert("알림", "숫자를 입력해주세요.");
      return;
    }
    if (num > 100) {
      Alert.alert("알림", "100 이하의 숫자를 입력해주세요.");
      return;
    }
    if (num < 1) {
      Alert.alert("알림", "1 이상의 숫자를 입력해주세요.");
      return;
    }
    setCount(count + 1);
    setHistory([...history, num]);
    if (num === targetNumber) {
      setResult(`정답입니다!\n${count}번 만에 맞추셨습니다.`);
      setIsGameOver(true);
    } else if (num < targetNumber) {
      setResult("UP");
    } else {
      setResult("DOWN");
    }
    setInput("");
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>UpDown 숫자 맞추기 게임</Text>
          <Text style={styles.subTitle}>1-100 사이의 숫자를 입력하세요</Text>
          {/* 숫자 입력받기 */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="숫자 입력"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={3}
              returnKeyType="done"
              value={input}
              onChangeText={setInput}
              onSubmitEditing={checkNumber}
              autoFocus={true}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={checkNumber}
              disabled={isGameOver}
            >
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>
          {/* 결과 출력 */}
          <View style={styles.resultBox}>
            {isGameOver && (
              <LottieView
                source={require("../assets/animations/Streak complete.json")}
                autoPlay
                loop={false}
                style={styles.lottie}
              />
            )}
            <Text style={styles.resultText}>{result}</Text>
          </View>
          {/* 게임 종료 시 재시작 버튼 */}
          {isGameOver && (
            <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
              <Text style={styles.resetButtonText}>재시작</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default UpdownScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
    minHeight: 150,
    padding: 20,
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
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  resetButton: {
    backgroundColor: "green",
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  resetButtonText: {
    fontSize: 20,
    color: "#fff",
  },
  lottie: {
    width: 150,
    height: 150,
  },
});
