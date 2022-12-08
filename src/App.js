import { useState } from "react";
import { Button, Input } from "./components";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const [valuePrev, setValuePrev] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handlePlusNumbers = () => {
    if (firstNumber === "0") {
      handleOnClear();
      setFirstNumber(currentNumber);
      setOperation("+");
      setValuePrev(currentNumber);
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
      setValuePrev('');
    }
  };
  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      handleOnClear();
      setFirstNumber(currentNumber);
      setOperation("-");
    } else {
      const less = firstNumber - currentNumber;
      setCurrentNumber(String(less));
      setOperation("");
      setValuePrev(currentNumber);
    }
  };

  const handleTimesNumbers = () => {
    if (firstNumber === "0") {
      handleOnClear();
      setFirstNumber(currentNumber);
      setOperation("*");
    } else {
      const multiplied = firstNumber * currentNumber;
      setCurrentNumber(String(multiplied));
      setOperation("");
      setValuePrev(currentNumber);
    }
  };

  const handleDividedNumbers = () => {
    if (firstNumber === "0") {
      handleOnClear();
      setFirstNumber(currentNumber);
      setOperation("/");
    } else {
      setCurrentNumber(String(Number(firstNumber) / Number(currentNumber)));
      setOperation("");
      setValuePrev(currentNumber);
    }
  };

  const handleEquals = () => {
    if (operation !== "" && currentNumber) {
      switch (operation) {
        case "+":
          handlePlusNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleTimesNumbers();
          break;

        case "/":
          handleDividedNumbers();
          break;
        default:
          break;
      }
    }

  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Input value={valuePrev} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleMinusNumbers()} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handlePlusNumbers()} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="/" onClick={() => handleDividedNumbers()} />
        </Row>
        <Row>
          <Button label="C" onClick={() => handleOnClear()} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="=" onClick={() => handleEquals()} />
          <Button label="*" onClick={() => handleTimesNumbers()} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
