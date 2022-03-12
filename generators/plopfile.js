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
        message: 'Do you want Styled Component file for this component?',
      },
      {
        type: 'confirm',
        name: 'wantTests',
        message: 'Do you want Test files for this component?',
      },
      {
        type: 'confirm',
        name: 'wantStory',
        message: 'Do you want Storybook file for this component?',
      },
    ],
    actions: (data) => {
      var actions = [];

      if (data.wantStyles) {
        actions.push({
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/components/index(with-styles).tsx.hbs',
          skipIfExists: true,
        });
        actions.push({
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'templates/components/styles.ts.hbs',
          skipIfExists: true,
        });
      } else {
        actions.push({
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/components/index(no-styles).tsx.hbs',
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

  // page generator
  plop.setGenerator('page', {
    description: "generate application page file following project's pattern",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the page name please',
      },
      {
        type: 'confirm',
        name: 'wantStyles',
        message: 'Do you want Styled Component file for this page?',
      },
      {
        type: 'confirm',
        name: 'wantTests',
        message: 'Do you want Test files for this page?',
      },
      {
        type: 'confirm',
        name: 'wantStory',
        message: 'Do you want Storybook file for this page?',
      },
    ],
    actions: (data) => {
      var actions = [];

      if (data.wantStyles) {
        actions.push({
          type: 'add',
          path: '../src/pages/{{lowerCase name}}/index.tsx',
          templateFile: 'templates/pages/index(with-styles).tsx.hbs',
          skipIfExists: true,
        });
        actions.push({
          type: 'add',
          path: '../src/pages/{{lowerCase name}}/styles.ts',
          templateFile: 'templates/pages/styles.ts.hbs',
          skipIfExists: true,
        });
      } else {
        actions.push({
          type: 'add',
          path: '../src/pages/{{lowerCase name}}/index.tsx',
          templateFile: 'templates/pages/index(no-styles).tsx.hbs',
          skipIfExists: true,
        });
      }

      if (data.wantTests) {
        actions.push(
          {
            type: 'add',
            path: '../src/pages/{{lowerCase name}}/test.tsx',
            templateFile: 'templates/pages/test.tsx.hbs',
            skipIfExists: true,
          },
          {
            type: 'add',
            path: '../src/pages/{{lowerCase name}}/spec.tsx',
            templateFile: 'templates/pages/spec.tsx.hbs',
            skipIfExists: true,
          }
        );
      }

      if (data.wantStory) {
        actions.push({
          type: 'add',
          path: '../src/pages/{{lowerCase name}}/stories.tsx',
          templateFile: 'templates/pages/stories.tsx.hbs',
          skipIfExists: true,
        });
      }

      return actions;
    },
  });
};
