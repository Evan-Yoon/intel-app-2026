import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const InputExampleScreen = () => {
  // 입력값을 관리할 상태 선언
  const [id, setId] = useState("");
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [search, setSearch] = useState("");
  const [bio, setBio] = useState("");

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text style={styles.title}>자주 쓰는 TextInput 유형</Text>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* 1. 일반 텍스트  ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>아이디:</Text>
          <TextInput
            style={styles.input}
            value={id}
            onChangeText={setId}
            maxLength={10}
            placeholder="아이디를 입력하세요"
            placeholderTextColor="#ccc"
            keyboardType="default"
            autoCapitalize="none"
          />
        </View>

        {/* 2. 비밀번호 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>비밀번호:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassWord}
            placeholder="비밀번호를 입력하세요"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
            maxLength={10}
            keyboardType="default"
            autoCapitalize="none"
            returnKeyType="next"
          />
        </View>

        {/* 3. 이메일 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>이메일:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="이메일을 입력하세요"
            placeholderTextColor="#ccc"
            maxLength={100}
            keyboardType="email-address"
            returnKeyType="next"
          />
        </View>

        {/* 4. 전화번호 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>전화번호:</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="전화번호를 입력하세요"
            placeholderTextColor="#ccc"
            maxLength={13}
            keyboardType="phone-pad"
          />
        </View>

        {/* 5. 숫자 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>우편번호:</Text>
          <TextInput
            style={styles.input}
            value={postalCode}
            onChangeText={setpostalCode}
            placeholder="우편번호를 입력하세요"
            placeholderTextColor="#ccc"
            maxLength={5}
            keyboardType="numeric"
          />
        </View>

        {/* 7. 검색창 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>검색어:</Text>
          <TextInput
            style={styles.input}
            value={search}
            onChangeText={setSearch}
            placeholder="검색어를 입력하세요"
            placeholderTextColor="#ccc"
            maxLength={100}
            returnKeyType="search"
            onSubmitEditing={() => console.log(search)}
          />
        </View>
        <View>
          <Text>{search}</Text>
        </View>
        {/* 8. 여러줄 입력 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>자기소개:</Text>
          <TextInput
            style={[styles.input, styles.multiline]}
            value={bio}
            onChangeText={setBio}
            placeholder="자기소개를 입력하세요"
            placeholderTextColor="#ccc"
            maxLength={100}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default InputExampleScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 30,
    paddingBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    width: "27%",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "75%",
    height: 40,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  multiline: {
    height: 120,
  },
});
