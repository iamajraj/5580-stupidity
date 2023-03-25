const fs = require("fs");
for (let i = 0; i < 5580; i++) {
    fs.writeFileSync("code.py", `print("Hello World")\n`, {
        flag: "a",
    });
}
