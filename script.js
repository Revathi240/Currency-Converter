        const exchangeRates = {
            "INR": { "USD": 0.012, "EUR": 0.010, "GBP": 0.0087 },
            "USD": { "INR": 85.54, "EUR": 0.89, "GBP": 0.75 },
            "EUR": { "INR": 96.27, "USD": 1.13, "GBP": 0.84 },
            "GBP": { "INR": 114.30, "USD": 1.34, "EUR": 1.19 }
        };

        function convert() {
            let amount = document.getElementById("amount").value;
            let fromCurrency = document.getElementById("fromCurrency").value;
            let toCurrency = document.getElementById("toCurrency").value;

            if (fromCurrency === toCurrency) {
                document.getElementById("result").innerText = "Select different currencies!";
                return;
            }

            let rate = exchangeRates[fromCurrency][toCurrency];
            let result = amount * rate;
            document.getElementById("result").innerText = `Converted Amount: ${result.toFixed(3)} ${toCurrency}`;
        }
    