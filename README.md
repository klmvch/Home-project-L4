# This is my first project
Author: Tatsiana Klimovich

With this project, we went through the process of creating a project, setting up a basic structure for writing both code and tests.

## How to install the project? 
1. Clone this repository to your workstation and open it in an editor (VS Code, for example).
2. Check for the following folders and files inside the project:
   - 'js' folder
   - 'tests' folder
   - '.gitignore' file
   - 'babel.config.cjs' file
   - 'package.json' file
   - 'README.md' file
   - 'yarn.lock' file.
3. Open the 'package.json' file and check if it contains the specified parameters:
   ```json
  "devDependencies": {
    "@babel/core": "^7.20.2",
    "@babel/preset-env": "^7.20.2",
    "babel-jest": "^29.3.1",
    "jest": "^29.3.1"
``` 
   ```json
  "scripts": {
    "test": "jest"
  }
```
## How to run the project?
1. Open the terminal in your editor.
2. Go to the source with the project on your work station ('cd' command).
3. Run 'yarn test' command.
> Expected result:
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total