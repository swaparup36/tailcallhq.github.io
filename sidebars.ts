/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

import {SidebarsConfig} from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "category",
      label: "Usage",
      collapsed: false,
      items: ["getting-started", "cli", "context", "playground", "conventions", "execution-strategy", "watch-mode"],
    },
    {
      type: "category",
      label: "Directives",
      collapsed: false,
      items: [
        "directives",
        "directives/addField",
        "directives/cache",
        "directives/call",
        "directives/expr",
        "directives/graphQL",
        "directives/grpc",
        "directives/http",
        "directives/js",
        "directives/link",
        "directives/modify",
        "directives/omit",
        "directives/protected",
        "directives/rest",
        "directives/server",
        "directives/telemetry",
        "directives/upstream",
        "directives/discriminate",
      ].sort(),
    },

    {
      type: "category",
      label: "Features",
      collapsed: false,
      items: [
        "N+1",
        "auth",
        "grpc",
        "scripting",
        "http2",
        "telemetry",
        "http-cache",
        "logging",
        "rest",
        "scalar",
        "environment-variables",
        "configuration",
        "config-generation",
        "apollo-federation-subgraph",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: false,
      items: ["apollo-studio", "data-dog", "new-relic", "honey-comb", "llm"],
    },
    {
      type: "category",
      label: "Production",
      collapsed: false,
      items: ["gh-action", "tailcall-on-fly", "tailcall-on-aws", "client-tuning"],
    },
    {
      type: "category",
      label: "Contributors",
      collapsed: false,
      items: [
        "contributors/guidelines",
        "contributors/bounty",
        "contributors/testing",
        "contributors/integration-testing",
        "contributors/mutability",
        "contributors/telemetry",
        "contributors/micro-benchmark",
        "contributors/wrk-benchmark",
      ],
    },
  ],
}

module.exports = sidebars
