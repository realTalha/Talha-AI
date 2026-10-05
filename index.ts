#!/usr/bin/env node

import 'dotenv/config';
import { Command } from "commander";
import { runWakeup } from "./tui/wakeup.js";

const program = new Command();

program
  .name("talha")
  .description("Talha - AI-powered coding assistant")
  .version("0.0.1");

program
  .command("wakeup")
  .description("Launch Talha AI coding assistant")
  .action(async () => {
    await runWakeup()
  });

await program.parseAsync(process.argv);
