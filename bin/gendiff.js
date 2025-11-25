#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .version('14.0.2')
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv);