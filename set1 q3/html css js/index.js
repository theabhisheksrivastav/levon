const users = {}; // init an object for user data

        // Signup Part
        document.getElementById("signup-form").addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("signup-name").value;
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;
            const operator = document.getElementById("signup-operator").value;

            if (!name || !password || !email || !operator) {
                alert("Please enter a Name and choose an operator.");
                return;
            }

            if (users[email]) {
                alert("email already exists. Please choose a different email.");
                return;
            }
            users[email] = {
                name: name,
                password: password,
                operator: operator
            };
            alert("Signup successful! Please log in.");
            document.getElementById("signup-section").style.display = "none";
            document.getElementById("login-section").style.display = "block";
        });

        // Login Part
        document.getElementById("login-form").addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            if (!users[email]) {
                alert("Email not found. Please sign up first.");
                return;
            }
            if (users[email].password !== password) {
                alert("Password is incorrect.");
                return;
            }

            // Calculator Selection Part
            document.getElementById("login-section").style.display = "none";
            document.getElementById("calculator-section").style.display = "block";
            document.getElementById("operator-display").innerText =
                "Selected Operator: " +
                (users[email].operator === "add"
                    ? "Addition"
                    : users[email].operator === "subtract"
                        ? "Subtraction"
                        : "Multiplication");
        });

        // Calculator Part {After Login}
        document.getElementById("calculator-form").addEventListener("submit", function (e) {
            e.preventDefault();

            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const email = document.getElementById("login-email").value;
            const operator = users[email].operator;

            let result;
            if (operator === "add") {
                result = num1 + num2;
            } else if (operator === "subtract") {
                result = num1 - num2;
            } else if (operator === "multiply") {
                result = num1 * num2;
            } else {
                result = "Invalid operator!";
                console.log(operator);
            }

            document.getElementById("result").innerText = `Result: ${result}`;
        });