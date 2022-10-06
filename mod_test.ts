import { assertSpyCall, stub } from "./dev_deps.ts";

Deno.test("greets world", async () => {
  const logStub = stub(console, "log");
  await import("./mod.ts");
  assertSpyCall(logStub, 0, { args: ["Hello, World!"] });
});
