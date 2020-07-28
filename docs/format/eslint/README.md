# eslint 的入门

- 1. 创建一个文件夹，名称随意. (`eg: eslint-start`)

- 2. 打开创建到文件夹的目录的命令行窗口

- 3. `npm install init -y` or `yarn init -y`

- 4. `npm i -D eslint` or `yarn add -D eslint`

- 5. 在 `package.json` 中配置脚本
```json
{
  "scripts": {
    "initial": "eslint --init",
    "fix": "eslint --fix ./src"
  }
}
```
- 6. 在根目录下创建 `src` (ps. 为了更方便区分代码存在的地方和配置的根目录)
