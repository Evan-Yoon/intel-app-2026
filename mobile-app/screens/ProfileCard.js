import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const ProfileCard = () => {
  return (
    // 메모리 과부하를 막기 위해 이미지 해상도를 낮췄습니다 (w=800)
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
      }}
      style={styles.container}
      resizeMode="cover"
    >
      {/* 렌더링 충돌을 막기 위해 복잡한 shadow를 제거하고 래퍼(Wrapper)를 단순화했습니다. */}
      <View style={styles.cardWrapper}>
        <LinearGradient
          colors={["#ff007f", "#ff8c00", "#aa00ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBorder}
        >
          {/* 강제 종료를 방지하기 위해 intensity(블러 강도)를 살짝 낮췄습니다. */}
          <BlurView intensity={30} tint="dark" style={styles.glassInner}>
            <View style={styles.header}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>🧑🏻</Text>
              </View>
              <View>
                <Text style={styles.nameText}>
                  Evan Yoon <Text style={styles.verified}>✔</Text>
                </Text>
                <Text style={styles.handleText}>@evan_yoon_</Text>
              </View>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.infoText}>
                📍 84, Edutaun-ro, Yeongtong-gu
              </Text>
              <Text style={styles.linkText}>
                🔗 https://github.com/Evan-Yoon
              </Text>
              <Text style={styles.infoText}>✉️ wlgus1805@gmail.com</Text>
              <Text style={styles.infoText}>📅 Joined November 2025</Text>
            </View>

            <View style={styles.statsContainer}>
              <Text style={styles.statText}>
                <Text style={styles.statNumber}>717</Text> Following
              </Text>
              <Text style={styles.statText}>
                <Text style={styles.statNumber}>5,336</Text> Followers
              </Text>
            </View>
          </BlurView>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  cardWrapper: {
    width: "85%",
    // 안드로이드에서 그림자(elevation)와 BlurView가 충돌하는 것을 방지하기 위해 플랫폼별로 다르게 처리
    ...Platform.select({
      ios: {
        shadowColor: "#ff007f",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  gradientBorder: {
    borderRadius: 22,
    padding: 2,
  },
  glassInner: {
    padding: 24,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(10, 10, 10, 0.4)", // 블러 강도를 낮춘 대신 배경색을 조금 더 진하게 설정
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  avatarContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#e0f7fa",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  avatarText: {
    fontSize: 35,
  },
  nameText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  verified: {
    color: "#00bfff",
    fontSize: 20,
  },
  handleText: {
    fontSize: 16,
    color: "#b0bec5",
  },
  infoSection: {
    marginBottom: 25,
  },
  infoText: {
    fontSize: 15,
    color: "#eceff1",
    marginBottom: 12,
    fontWeight: "500",
  },
  linkText: {
    fontSize: 15,
    color: "#81d4fa",
    marginBottom: 12,
    fontWeight: "500",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  statText: {
    fontSize: 16,
    color: "#cfd8dc",
  },
  statNumber: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 18,
  },
});
