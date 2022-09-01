const completionSpec: Fig.Spec = {
  name: "tuist",
  description:
    "Generate, build and test your Xcode projects. For more info please see https://docs.tuist.io/",
  subcommands: [
    {
      name: "build",
      description: "Build the project in the current directory",
      args: {
        name: "scheme",
        description:
          "The scheme to be built. By default it builds all the buildable schemes of the project in the current directory",
      },
      options: [
        {
          name: "--build-output-path",
          description:
            "Build the project to a custom directory, example usage: 'tuist build --build-output-path .build':",
        },
        {
          name: "--device",
          description:
            "Build the project to a specific device, example usage: 'tuist build --device \"iPhone X\"':",
        },
        {
          name: "--os",
          description:
            "Build the project to a specific OS, example usage: 'tuist build --os 14.0':",
        },
      ],
    },
    {
      name: "cache",
      description:
        "A set of utilities related to the caching of targets. For more info see https://docs.tuist.io/building-at-scale/caching USAGE: tuist cache <subcommand>",
      subcommands: [
        {
          name: "warm",
          description: "Warms the local and remote cache",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "The path to the directory that contains the project whose targets will be cached",
            },
            {
              name: ["--profile", "-P"],
              description:
                "The name of the profile to be used when warming up the cache",
            },
            {
              name: ["--xcframeworks", "-x"],
              description:
                "When passed it caches the targets for simulator and device using xcframeworks",
            },
            {
              name: "--dependencies-only",
              description:
                "If passed, the command doesn't cache the targets passed in the `--targets` argument, but only their dependencies",
            },
          ],
        },
        {
          name: "print-hashes",
          description:
            "Print the hashes of the cacheable frameworks in the given project",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "The path to the directory that contains the project whose targets will be cached",
            },
            {
              name: ["--profile", "-P"],
              description:
                "The name of the profile to be used when warming up the cache",
            },
            {
              name: ["--xcframeworks", "-x"],
              description:
                "When passed it caches the targets for simulator and device using xcframeworks",
            },
          ],
        },
      ],
    },
    {
      name: "clean",
      args: {
        name: "clean-categories",
        description:
          "The cache and artifact categories to be cleaned. If no category is specified, everything is cleaned. (default: plugins, builds, tests, generatedAutomationProjects, projectDescriptionHelpers, manifests, dependencies)",
      },
      description:
        "Clean all the data generated by Tuist. USAGE: tuist clean [<clean-categories> ...] [--path <path>]",
      options: [
        {
          name: ["--path", "-p"],
          description:
            "The path to the directory that contains the project that should be cleaned",
        },
        {
          name: "plugins",
          description:
            "Clean only the plugins cache generated by Tuist, example usage: 'tuist clean plugins':",
        },
        {
          name: "builds",
          description:
            "Clean only the builds artifacts cache generated by Tuist, example usage: 'tuist clean builds':",
        },
        {
          name: "tests",
          description:
            "Clean only the tests cache generated by Tuist, example usage: 'tuist clean tests':",
        },
        {
          name: "generatedAutomationProjects",
          description:
            "Clean only the automation projects cache generated by Tuist, example usage: 'tuist clean generatedAutomationProjects':",
        },
        {
          name: "projectDescriptionHelpers",
          description:
            "Clean only the project description helpers cache generated by Tuist, example usage: 'tuist clean projectDescriptionHelpers':",
        },
        {
          name: "manifests",
          description:
            "Clean only the manifests cache generated by Tuist, example usage: 'tuist clean manifests':",
        },
      ],
    },
    {
      name: "fetch",
      description:
        "Dependencies can be fetched by running the following command. They are stored in your project's `Tuist/Dependencies` directory. For more info see https://docs.tuist.io/commands/dependencies",
      options: [
        {
          name: ["--path", "-p"],
          description:
            "The path to the directory that contains the workspace or project whose dependencies will be fetched/updated. The default is the current directory",
        },
        {
          name: "--update",
          description:
            "Clean only the builds artifacts cache generated by Tuist, example usage: 'tuist fetch --update':",
        },
      ],
    },
    {
      name: "edit",
      description:
        "Editing your projects is easy; position yourself in a directory where there's a project defined and run the edit command. It will open a temporary Xcode project with all the project manifests and the project description helpers, so you will be able to edit the whole project configuration. After making changes you can run the target from Xcode and it will call tuist generate for you. For more info see https://docs.tuist.io/commands/edit",
      options: [
        {
          name: "--permanent",
          description:
            "The project is deleted automatically once you are done with editing. If you wish to generate and keep the project in the current directory, you can run the command passing the --permanent argument. That will generate a Manifest.xcodeproj project that you can open manually",
        },
      ],
    },
    {
      name: "graph",
      description:
        "Generates a graph from the workspace or project in the current directory. For more info see https://docs.tuist.io/commands/graph USAGE: tuist graph [--skip-test-targets] [--skip-external-dependencies] [--format <format>] [--algorithm <algorithm>] [<targets> ...] [--path <path>] [--output-path <output-path>]",
      args: {
        name: "targets",
        description:
          "A list of targets to filter. Those and their dependent targets will be showed in the graph",
      },
      options: [
        {
          name: ["--skip-test-targets", "-t"],
          description: "Excludes test targets from the generated graph",
        },
        {
          name: ["--skip-external-dependencies", "-d"],
          description:
            "Excludes external dependencies from the generated graph",
        },
        {
          name: ["--format", "-f"],
          description:
            "If you prefer to have the dot or json representations of the graph and render it separately. Available formats: dot, png, json (default: png)",
          args: {
            name: "format",
            suggestions: ["dot", "png", "json"],
            default: "png",
          },
        },
        {
          name: ["--algorithm", "-a"],
          description:
            "Available formats: dot, neato, twopi, circo, fdp, sfddp, patchwork (default: dot)",
          args: {
            name: "format",
            suggestions: [
              "dot",
              "neato",
              "twopi",
              "circo",
              "fdp",
              "sfddp",
              "patchwork",
            ],
            default: "dot",
          },
        },
        {
          name: ["--path", "-p"],
          description:
            "The path to the directory that contains the definition of the project. Default is current directory",
          args: {
            name: "project dir",
            template: "folders",
          },
        },
        {
          name: ["--output-path", "-o"],
          description:
            "The path to where the image will be exported. When not specified, it exports the image in the current directory",
          args: {
            name: "output path",
            template: "folders",
            suggestCurrentToken: true,
          },
        },
        {
          name: ["--no-open", "-n"],
          description:
            "If set, the generated graph is not opened automatically. Default is yes",
        },
        {
          name: ["--platform", "-l"],
          description:
            "If set, show only the targets for the given platform. Default is all platforms. Available platforms: ios, macos, tvos, watchos",
          args: {
            name: "platform",
            suggestions: ["ios", "macos", "tvos", "watchos"],
          },
        },
      ],
    },
    {
      name: "generate",
      description:
        "Generates an Xcode workspace to start working on the project. For more info see https://docs.tuist.io/commands/generate",
      args: {
        name: "sources",
        description:
          "A list of targets to focus on. Other targets will be linked as binaries if possible. If no target is specified, all the project targets will be generated (except external ones, such as Swift packages)",
      },
      options: [
        {
          name: ["--path", "-p"],
          description:
            "The path to the directory that contains the definition of the project. Default is current directory",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: ["--no-open", "-n"],
          description:
            "Don't open the project after generating it. Default is false",
        },
        {
          name: ["--xcframeworks", "-x"],
          description:
            "When passed it uses xcframeworks (simulator and device) from the cache instead of frameworks (only simulator). Default is false",
        },
        {
          name: "--no-cache",
          description:
            "Ignore cached targets, and use their sources instead.	Default is false",
        },
        {
          name: ["--profile", "-P"],
          description: "The name of the cache profile",
          args: {
            name: "cache profile",
          },
        },
      ],
    },
    {
      name: "migration",
      description:
        "To help developers with the process of adopting Tuist, Tuist provides a set of commands under tuist migration. For more info see https://docs.tuist.io/commands/migration",
      subcommands: [
        {
          name: "settings-to-xcconfig",
          description:
            "It's recommended to make .xcconfig files the source of truth for build settings. For that, Tuist provides a tuist migration settings-to-xcconfig command that extracts the build settings from targets and projects",
          options: [
            {
              name: ["--xcodeproj-path", "-p"],
              description:
                "Required. Path to the Xcode project whose build settings will be extracted",
              isRequired: true,
              args: {
                name: "path",
                template: "folders",
              },
            },
            {
              name: ["--xcconfig-path", "-x"],
              description:
                "Required. Path to the Xcode project whose build settings will be extracted",
              isRequired: true,
              args: {
                name: "path",
                template: "folders",
              },
            },
            {
              name: ["--target", "-t"],
              description:
                "Optional. The name of the target whose build settings will be extracted. When not passed, it extracts the build settings of the project",
              args: {
                name: "target",
              },
            },
          ],
        },
        {
          name: "check-empty-settings",
          description:
            "After making .xcconfig files the source of truth for build settings, it's important to ensure that build settings are no longer set to the project. To help with that, Tuist includes a command that fails if the build settings of a project or a target are not empty",
          options: [
            {
              name: ["--xcodeproj-path", "-p"],
              description:
                "Required. Path to the Xcode project whose build settings will be checked",
            },
            {
              name: ["--target", "-t"],
              description:
                "Optional. The name of the target whose build settings will be checked. When not passed, it checks the build settings of the project",
            },
          ],
        },
        {
          name: "list-targets",
          description:
            "When passed it uses xcframeworks (simulator and device) from the cache instead of frameworks (only simulator). Default is false",
          options: [
            {
              name: ["--xcodeproj-path", "-p"],
              isRequired: true,
              description:
                "Required. Path to the Xcode project whose build settings will be checked",
            },
          ],
        },
      ],
    },
    {
      name: "scaffold",
      description:
        "Generates new project based on a template. For more info see https://docs.tuist.io/commands/scaffold USAGE: tuist scaffold <template> [--json] [--path <path>] <subcommand>",
      args: {
        name: "template",
        description: "Name of template you want to use",
      },
      subcommands: [
        {
          name: "list",
          description: "Lists available scaffold templates",
        },
      ],
      options: [
        {
          name: ["--path", "-p"],
          description:
            "The path to the folder where the template will be generated (Default: Current directory)",
          args: {
            name: "path",
          },
        },
        {
          name: "--json",
          description: "The output in JSON format",
        },
        {
          name: "--name",
          description: "The name of the generate project",
          args: {
            name: "name",
          },
        },
        {
          name: "--platform",
          description: "The platform used by the project",
          args: {
            name: "platform",
          },
        },
      ],
    },
    {
      name: "test",
      description:
        "Tests a project. For more info see https://docs.tuist.io/commands/test USAGE: tuist test [<scheme>] [--clean] [--path <path>] [--device <device>] [--os <os>] [--configuration <configuration>] [--skip-ui-tests] [--result-bundle-path <result-bundle-path>] [--retry-count <retry-count>]",
      args: {
        name: "scheme",
        description:
          "The scheme to be tested. By default it tests all the testable targets of the project in the current directory",
      },
      options: [
        {
          name: ["--path", "-p"],
          description:
            "The path to the directory that contains the project to be tested",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: ["--clean", "-c"],
          description: "When passed, it cleans the project before testing it",
        },
        {
          name: ["--device", "-d"],
          description: "Test on a specific device",
          args: {
            name: "device",
          },
        },
        {
          name: ["--os", "-o"],
          description: "Test with a specific version of the OS",
          args: {
            name: "os",
          },
        },
        {
          name: ["--configuration", "-C"],
          description: "The configuration to be used when testing the scheme",
        },
        {
          name: "--skip-ui-tests",
          description: "When passed, it skips testing UI Tests targets",
        },
        {
          name: ["--result-bundle-path", "-T"],
          description: "Path where test result bundle will be saved",
        },
        {
          name: "--retry-count",
          description:
            "Tests will retry <number> of times until success. Example: if 1 is specified, the test will be retried at most once, hence it will run up to 2 times. (default: 0)",
          args: {
            name: "times",
            default: "0",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for tuist",
    },
  ],
};
export default completionSpec;