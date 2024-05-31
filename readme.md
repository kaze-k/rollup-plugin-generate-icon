# rollup-plugin-generate-icon

A rollup plugin to generate icons of different sizes

## Usage

add the plugin:

``` bash
npm install rollup-plugin-generate-icon --save-dev
// or
pnpm add rollup-plugin-generate-icon -D
// or
yarn add rollup-plugin-generate-icon -D
```

configure the plugin:

``` js

```

## Configuration Settings

| Option | Required | Type | Default | About |
|---|---|---|---|---|
| logo | yes | string | none | images that need to be converted |
| dir | no | string | "icons" | the directory for the output picture |
| size | no | number[]/number | [16, 32, 48, 64, 128] | image size, if it is a number, only one image is generated, if it is an array, it is multiple images |
| format | no | string | "png" | the format of the output picture |
| grayscale | no | boolean | false | whether to generate a gray image |
| imgName | no | string | "icon" | name of the picture |
| log | no | boolean | false | print picture information |

## Acknowledgement

Inspired by [plasmo](https://github.com/PlasmoHQ/plasmo)'s ability to generate images.