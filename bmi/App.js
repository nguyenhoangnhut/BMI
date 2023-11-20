import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [initialWeight, setInitialWeight] = useState("");
  const [initialHeight, setInitialHeight] = useState("");
  const [BMI, setBMI] = useState(0);
  const [BMICategory, setBMICategory] = useState("");

  const computeBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmi = weightInKg / (heightInM * heightInM);
    setBMI(bmi);


    if (bmi < 18.5) {
      setBMICategory("Gầy");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBMICategory("Bình thường");
    } else if (bmi >= 25 && bmi < 29.9) {
      setBMICategory("Hơi béo");
    } else if (bmi >= 30 && bmi < 34.9) {
      setBMICategory("Béo phì độ 1");
    } else if (bmi >= 35 && bmi < 39.9) {
      setBMICategory("Béo phì độ 2");
    } else if (bmi >= 40) {
      setBMICategory("Béo phì độ 3");
    } else {
      setBMICategory("");
    }
  };

  const clearInput = () => {
    setWeight("");
    setHeight("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BẢNG TÍNH CHỈ SỐ KHỐI CƠ THỂ (BMI)</Text>
      <TextInput
        style={styles.input}
        placeholder="Cân nặng (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Chiều cao (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <TouchableOpacity style={styles.button} onPress={computeBMI}>
        <Text style={styles.buttonText}>Tổng BMI </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearInput}>
        <Text style={styles.buttonText}>Xóa tất cả </Text>
      </TouchableOpacity>
      <Text style={styles.result}>BMI: {BMI.toFixed(2)}</Text>
            <Text style={styles.title}>Nguyễn Hoàng Nhứt </Text>
      {BMICategory !== "" && <Text style={styles.result}>Phân loại: {BMICategory}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdde1",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d3436",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#b2bec3",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    color: "#2d3436",
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "lightblue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    color: "#27ae60",
  },
});

export default BMICalculator;
