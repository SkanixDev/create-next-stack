import { runCommand } from "../../run-command"
import { getNameVersionCombo, packages } from "../packages"
import { Step } from "../step"

export const formatProjectStep: Step = {
  description: "formatting project",

  shouldRun: async () => true,

  didRun: false,

  run: async () => {
    await runCommand("npx", [
      getNameVersionCombo(packages.prettier),
      "--write",
      ".",
    ])
  },
}
