![cover](assets/cover.jpg)

<div align="center">
	<img src="https://img.shields.io/npm/v/create-foss-files?color=fad000" alt="version">
	<img src="https://img.shields.io/npm/l/create-foss-files?color=fad000" alt="license">
	<img src="https://img.shields.io/npm/dt/create-foss-files?color=fad000" alt="downloads">
</div>
<br>

<p align="center">
Confused about which files you should have in your open-source project!? Well, I built this tool to help you just with this confusion. With a single command, you get all the files which you should have in you project.
</p>

![split](assets/separate.jpg)

- **Simple**: Extremely simple to use.
- **Cross-platform**: Works on macOS, linux, and Windows.
- **JavaScript files**: Generates additional files if you are developing a JavaScript project.
- **Prettier**: Integrated prettier if the project is a JavaScript project.
- **MIT Licensed**: Free to use for personal and commercial use.

## 📦 Installation

```sh
# install the CLI globally
npm install -g create-foss-files

# use it with npx (recommended)
npx create-foss-files --flag
```

## 🚀 Usage

Create a new project folder. Navigate into it. Run any of the following command inside of it.

```sh
# if installed globally (only generates required files)
cff

# if installed globally (add JavaScript files)
cff --javascript

# with npx (only generates required files)
npx create-foss-files

# with npx (add JavaScript files)
npx create-foss-files --javascript
```

## 🏗 Directory Structure

Directory tree with `cff`

```
└── [project name]
    ├── .editorconfig
    ├── .gitattributes
    ├── .gitignore
    ├── changelog.md
    ├── code-of-conduct.md
    ├── contributing.md
    ├── license
    └── readme
```

Directory tree with `cff --javascript`

```
└── [project name]
    ├── .editorconfig
    ├── .gitattributes
    ├── .gitignore
    ├── .npmrc
    ├── .prettierrc.json
    ├── changelog.md
    ├── code-of-conduct.md
    ├── contributing.md
    ├── index.js
    ├── license
    ├── package.json
    └── readme
```


## 👨🏻‍💻 Contributing

Make sure you read the [contributing guidelines](https://github.com/msaaddev/create-foss-files/blob/master/contributing.md) before opening a PR.

## 🔑 License & Conduct

- MIT © [Saad Irfan](https://github.com/msaaddev)
- [Code of Conduct](https://github.com/msaaddev/create-foss-files/blob/master/code-of-conduct.md)
