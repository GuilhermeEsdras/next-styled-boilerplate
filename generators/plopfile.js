module.exports = (plop) => {
  // component generator
  plop.setGenerator('component', {
    description:
      "generate application component files following project's pattern",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'Enter the component name please (you can indicate subfolders - eg.: folderName/ComponentName)',
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
          path: '../src/components{{getPath name}}/{{pascalCase (getName name)}}/{{pascalCase (getName name)}}.tsx',
          templateFile: 'templates/components/index(with-styles).tsx.hbs',
          skipIfExists: true,
        });
        actions.push({
          type: 'add',
          path: '../src/components{{getPath name}}/{{pascalCase (getName name)}}/{{pascalCase (getName name)}}.styles.ts',
          templateFile: 'templates/components/styles.ts.hbs',
          skipIfExists: true,
        });
      } else {
        actions.push({
          type: 'add',
          path: '../src/components{{getPath name}}/{{pascalCase (getName name)}}/{{pascalCase (getName name)}}.tsx',
          templateFile: 'templates/components/index(no-styles).tsx.hbs',
          skipIfExists: true,
        });
      }

      if (data.wantTests) {
        if (data.gonnaHaveThemes) {
          actions.push(
            {
              type: 'add',
              path: '../src/components{{getPath name}}/{{pascalCase (getName name)}}/{{pascalCase (getName name)}}.test.tsx',
              templateFile: 'templates/components/test(with-theme).tsx.hbs',
              skipIfExists: true,
            },
            {
              type: 'add',
              path: '../src/components{{getPath name}}/{{pascalCase (getName name)}}/{{pascalCase (getName name)}}.spec.tsx',
              templateFile: 'templates/components/spec(with-theme).tsx.hbs',
              skipIfExists: true,
            }
          );
        } else {
          actions.push(
            {
              type: 'add',
              path: '../src/components{{getPath name}}/{{pascalCase (getName name)}}/{{pascalCase (getName name)}}.test.tsx',
              templateFile: 'templates/components/test(no-theme).tsx.hbs',
              skipIfExists: true,
            },
            {
              type: 'add',
              path: '../src/components{{getPath name}}/{{pascalCase (getName name)}}/{{pascalCase (getName name)}}.spec.tsx',
              templateFile: 'templates/components/spec(no-theme).tsx.hbs',
              skipIfExists: true,
            }
          );
        }
      }

      if (data.wantStory) {
        actions.push({
          type: 'add',
          path: '../src/components{{getPath name}}/{{pascalCase (getName name)}}/{{pascalCase (getName name)}}.stories.tsx',
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
        message:
          'Enter the page name please (you can indicate subfolders - eg.: folderName/pagename)',
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
          path: '../src/pages{{getPath name}}/{{lowerCase (getName name)}}/index.tsx',
          templateFile: 'templates/pages/index(with-styles).tsx.hbs',
          skipIfExists: true,
        });
        actions.push({
          type: 'add',
          path: '../src/pages{{getPath name}}/{{lowerCase (getName name)}}/styles.ts',
          templateFile: 'templates/pages/styles.ts.hbs',
          skipIfExists: true,
        });
      } else {
        actions.push({
          type: 'add',
          path: '../src/pages{{getPath name}}/{{lowerCase (getName name)}}/index.tsx',
          templateFile: 'templates/pages/index(no-styles).tsx.hbs',
          skipIfExists: true,
        });
      }

      if (data.wantTests) {
        actions.push(
          {
            type: 'add',
            path: '../src/pages{{getPath name}}/{{lowerCase (getName name)}}/test.tsx',
            templateFile: 'templates/pages/test.tsx.hbs',
            skipIfExists: true,
          },
          {
            type: 'add',
            path: '../src/pages{{getPath name}}/{{lowerCase (getName name)}}/spec.tsx',
            templateFile: 'templates/pages/spec.tsx.hbs',
            skipIfExists: true,
          }
        );
      }

      if (data.wantStory) {
        actions.push({
          type: 'add',
          path: '../src/pages{{getPath name}}/{{lowerCase (getName name)}}/stories.tsx',
          templateFile: 'templates/pages/stories.tsx.hbs',
          skipIfExists: true,
        });
      }

      return actions;
    },
  });

  plop.setHelper('getPath', (namePath) => {
    let path = '/';
    const directories = namePath.split('/');

    if (directories.length > 1) {
      directories.pop();
      path += directories.join('/');
    }

    return path;
  });

  plop.setHelper('getImportPath', (namePath) => {
    const defaultValue = 2;
    let path = Array(defaultValue)
      .fill()
      .map(() => '..')
      .join('/');

    const directories = namePath.split('/');

    if (directories.length > defaultValue) {
      path = directories.map(() => '..').join('/');
    }

    return path;
  });

  plop.setHelper('getReferencePath', (namePath) => {
    const defaultValue = 1;
    let path = Array(defaultValue)
      .fill()
      .map(() => '..')
      .join('/');

    const directories = namePath.split('/');

    if (directories.length > defaultValue) {
      directories.pop();
      path = directories.map(() => '..').join('/');
    }

    return path;
  });

  plop.setHelper('getName', (namePath) => namePath.split('/').pop());
};
