module.exports = (plop) => {
  // component generator
  plop.setGenerator('component', {
    description:
      "generate application component files following project's pattern",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the component name please',
      },
      {
        type: 'confirm',
        name: 'wantStyles',
        message: 'Do you want Styled Component file?',
      },
      {
        type: 'confirm',
        name: 'wantTests',
        message: 'Do you want Test files?',
      },
      {
        type: 'confirm',
        name: 'wantStory',
        message: 'Do you want Storybook file?',
      },
    ],
    actions: (data) => {
      var actions = [];

      actions.push({
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/components/index.tsx.hbs',
        skipIfExists: true,
      });

      if (data.wantStyles) {
        actions.push({
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'templates/components/styles.ts.hbs',
          skipIfExists: true,
        });
      }

      if (data.wantTests) {
        actions.push(
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
            templateFile: 'templates/components/test.tsx.hbs',
            skipIfExists: true,
          },
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
            templateFile: 'templates/components/spec.tsx.hbs',
            skipIfExists: true,
          }
        );
      }

      if (data.wantStory) {
        actions.push({
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'templates/components/stories.tsx.hbs',
          skipIfExists: true,
        });
      }

      return actions;
    },
  });

  // component generator
  plop.setGenerator('page', {
    description: "generate application page file following project's pattern",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/components/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/components/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/components/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/components/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/components/spec.tsx.hbs',
      },
    ],
  });
};
