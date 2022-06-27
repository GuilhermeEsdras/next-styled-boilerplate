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
        name: 'gonnaHaveThemes',
        message: 'Your project is gonna have themes?',
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
        if (data.gonnaHaveThemes) {
          actions.push(
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
              templateFile: 'templates/components/test(with-theme).tsx.hbs',
              skipIfExists: true,
            },
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
              templateFile: 'templates/components/spec(with-theme).tsx.hbs',
              skipIfExists: true,
            }
          );
        } else {
          actions.push(
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
              templateFile: 'templates/components/test(no-theme).tsx.hbs',
              skipIfExists: true,
            },
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
              templateFile: 'templates/components/spec(no-theme).tsx.hbs',
              skipIfExists: true,
            }
          );
        }
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
        name: 'itsDynamic',
        message:
          "Your page is gonna be dynamic (using next.js's Dynamic route segments)?",
      },
    ],
    actions: (data) => {
      var actions = [];
      var fileName = (data.itsDynamic ? '[slug]' : 'index') + '.tsx';
      actions.push({
        type: 'add',
        path: '../src/pages/{{kebabCase name}}/' + fileName,
        templateFile: 'templates/pages/' + fileName + '.hbs',
        skipIfExists: true,
      });
      return actions;
    },
  });

  // page template generator
  plop.setGenerator('template', {
    description:
      "generate application page template file following project's pattern",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the template name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/template/index.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/template/styles.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/template/test.tsx.hbs',
        skipIfExists: true,
      },
    ],
  });
};
