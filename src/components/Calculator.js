import { useState, useEffect } from "react";
import "./calculator.css";

// const operations = ["√"];
const Calculator = () => {
    const [currentInputedValue, setCurrentInputedValue] = useState("");
    const [history, setHistory] = useState("");
    const [operatorSelected, setOperatorSelected] = useState(null);
    const [solved, setSolved] = useState(false);

    const numberPressed = (event) => {
        if (operatorSelected) {
            addToHistory(currentInputedValue);
            setCurrentInputedValue("");
            setOperatorSelected(false);
        }
        setCurrentInputedValue(
            (oldValue) => oldValue + event.target.dataset.number
        );
    };

    useEffect(() => {
        const buttons = document.querySelectorAll("[data-operation]");
        if (operatorSelected === false) {
            buttons.forEach((button) => (button.disabled = true));
        } else buttons.forEach((button) => (button.disabled = false));
    }, [operatorSelected]);

    const addToHistory = (piece) => {
        setHistory((oldValue) => oldValue + piece);
    };

    const chooseOperation = (event) => {
        if (!operatorSelected) {
            if (
                event.target.dataset.operation !== "√" &&
                currentInputedValue.length < 1
            )
                addToHistory("0" + currentInputedValue);
            else addToHistory(currentInputedValue);
        }

        setCurrentInputedValue(event.target.dataset.operation);

        setOperatorSelected(true);
    };

    const clearAll = () => {
        setCurrentInputedValue("");
        setHistory("");
        setOperatorSelected(null);
        setSolved(false);
    };

    const solve = () => {
        if (solved) return;
        addToHistory(currentInputedValue + "=");
        const numbers = [...history.matchAll(/[\d.]+/g)];
        numbers.push(+currentInputedValue);
        const operation = history[history.length - 1];

        switch (operation) {
        }

        setSolved(solved);
    };

    return (
        <div className="calculator">
            <div className="calculator__screen">
                <div className="calculator__screen__history">{history}</div>
                <div className="calculator__screen__current">
                    {currentInputedValue}
                </div>
            </div>
            <div className="calculator__keyboard">
                <button className="but but--light" onClick={clearAll}>
                    C
                </button>
                <button
                    className="but but--light"
                    data-operation="√"
                    onClick={chooseOperation}
                >
                    √
                </button>
                <button
                    className="but but--light"
                    data-operation="^"
                    onClick={chooseOperation}
                >
                    ^
                </button>
                <button
                    className="but but--orange"
                    data-operation="÷"
                    onClick={chooseOperation}
                >
                    ÷
                </button>
                <button
                    className="but but--dark"
                    data-number="9"
                    onClick={numberPressed}
                >
                    9
                </button>
                <button
                    className="but but--dark"
                    data-number="8"
                    onClick={numberPressed}
                >
                    8
                </button>
                <button
                    className="but but--dark"
                    data-number="7"
                    onClick={numberPressed}
                >
                    7
                </button>
                <button
                    className="but but--orange"
                    data-operation="×"
                    onClick={chooseOperation}
                >
                    ×
                </button>

                <button
                    className="but but--dark"
                    data-number="6"
                    onClick={numberPressed}
                >
                    6
                </button>
                <button
                    className="but but--dark"
                    data-number="5"
                    onClick={numberPressed}
                >
                    5
                </button>
                <button
                    className="but but--dark"
                    data-number="4"
                    onClick={numberPressed}
                >
                    4
                </button>
                <button
                    className="but but--orange"
                    data-operation="−"
                    onClick={chooseOperation}
                >
                    −
                </button>

                <button
                    className="but but--dark"
                    data-number="3"
                    onClick={numberPressed}
                >
                    3
                </button>
                <button
                    className="but but--dark"
                    data-number="2"
                    onClick={numberPressed}
                >
                    2
                </button>
                <button
                    className="but but--dark"
                    data-number="1"
                    onClick={numberPressed}
                >
                    1
                </button>
                <button
                    className="but but--orange"
                    data-operation="+"
                    onClick={chooseOperation}
                >
                    +
                </button>

                <button
                    className="but but--dark zero"
                    data-number="0"
                    onClick={numberPressed}
                >
                    0
                </button>
                <button
                    className="but but--dark"
                    data-number="."
                    onClick={numberPressed}
                >
                    .
                </button>
                <button className="but but--orange" onClick={solve}>
                    =
                </button>
            </div>
        </div>
    );
};

export default Calculator;
