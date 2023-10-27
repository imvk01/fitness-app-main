import {StyleSheet,Text,View,ScrollView,} from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const {
    minutes,

    calories,

    workout,
  } = useContext(FitnessItems);
  return (
    <ScrollView style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: "#423E3D",
          padding: 12,
          height: 200,
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          FITNESS EDGE
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 18, marginTop: 6 }}>
              Workouts
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 18, marginTop: 6 }}>
              Kcal
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 18, marginTop: 6 }}>
              Mins
            </Text>
          </View>
        </View>
        <FitnessCards />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
