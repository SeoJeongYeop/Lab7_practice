const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");

test("Insufficient params", () => {
  const main = spawn("node", ["main.js", "avg"]);
  const outputs = [];
  main.stdout.on("data", (output) => {
    outputs.push(output);
  });

  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("Insufficient parameter!");
  });
});

test("Some arguments are not numbers!", () => {
  const main = spawn("node", ["main.js", "sum", "0", "a"]);
  const outputs = [];
  main.stdout.on("data", (output) => {
    outputs.push(output);
  });

  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("Some arguments are not numbers!");
  });
});

test("Wrong command", () => {
  const main = spawn("node", ["main.js", "const", "0"]);
  const outputs = [];
  main.stdout.on("data", (output) => {
    outputs.push(output);
  });

  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("Wrong command!");
  });
});
