import { useState } from "react";

const Calculator = ({ user }) => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const calculate = (e) => {
        e.preventDefault();
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        let res;
        if (user.operator === "add") res = n1 + n2;
        else if (user.operator === "subtract") res = n1 - n2;
        else if (user.operator === "multiply") res = n1 * n2;
        else res = "Invalid operator!";

        setResult(res);
    };

    return (
        <div>
            <h2>Calculator</h2>
            <p>Selected Operator: {user.operator}</p>
            <form onSubmit={calculate}>
                <input
                    type="number"
                    placeholder="Enter Number 1"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Enter Number 2"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    required
                />
                <button type="submit">Calculate</button>
            </form>
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
};

export default Calculator;
