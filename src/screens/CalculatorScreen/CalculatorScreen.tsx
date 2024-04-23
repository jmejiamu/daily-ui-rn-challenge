import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { GoBackArrow } from "../../components/GoBackArrow";

export const CalculatorScreen = () => {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumberPress = (num: string) => {
    if (display === "0" || operator) {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperatorPress = (op: string) => {
    setCurrentValue(parseFloat(display));
    setOperator(op);
    setDisplay("0");
  };

  const handleEqualsPress = () => {
    if (currentValue !== null && operator) {
      switch (operator) {
        case "+":
          setDisplay((currentValue + parseFloat(display)).toString());
          break;
        case "-":
          setDisplay((currentValue - parseFloat(display)).toString());
          break;
        case "*":
          setDisplay((currentValue * parseFloat(display)).toString());
          break;
        case "/":
          setDisplay((currentValue / parseFloat(display)).toString());
          break;
      }
      setCurrentValue(null);
      setOperator(null);
    }
  };

  const handleClearPress = () => {
    setDisplay("0");
    setCurrentValue(null);
    setOperator(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoBackArrow color="white" />
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { borderTopLeftRadius: 10 }]}
          onPress={() => handleNumberPress("7")}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress("8")}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress("9")}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { borderTopRightRadius: 10 }]}
          onPress={() => handleOperatorPress("/")}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress("4")}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress("5")}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress("6")}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress("*")}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress("1")}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress("2")}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress("3")}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress("-")}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress(".")}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEqualsPress}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { borderBottomRightRadius: 10 }]}
          onPress={() => handleOperatorPress("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={handleClearPress}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15181F",
  },
  displayContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#15181F",
  },
  displayText: {
    fontSize: 40,
    color: "#FFF",
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
  },
  button: {
    width: "25%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232832",
    borderWidth: 1,
    borderColor: "#15181F",
  },
  buttonText: {
    fontSize: 30,
    color: "#FFF",
  },
  clearButton: {
    width: "50%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f6199",
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
