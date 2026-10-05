import chalk from "chalk";
import { select, isCancel } from "@clack/prompts";
import { runAgentMode } from './agent/orchestrator.js';
import { runAskMode } from './ask/orchestrator.js';
import { runPlanMode } from './plan/orchestrator.js';

export async function runCliMode() {
  while (true) {
    const mode = await select({
      message: "Choose mode",
      options: [
        { value: "agent", label: "Agent Mode - Modify codebase with AI" },
        { value: "plan", label: "Plan Mode - Generate step-by-step plans" },
        { value: "ask", label: "Ask Mode - Ask questions about codebase" },
        { value: "exit", label: "Exit" },
      ],
    });

    if (isCancel(mode) || mode === "exit") {
      console.log(chalk.dim('\n Goodbye! \n'));
      process.exit(0);
    }

    if (mode === "agent") {
        await runAgentMode()
    }
    if (mode === "ask") {
       await runAskMode()
    }
    if (mode === "plan") {
        await runPlanMode()
    }

    if (mode !== "agent" && mode !== "plan" && mode !== "ask") {
      console.log(chalk.yellow("\nThat mode is not implemented yet.\n"));
    }
  }
}
