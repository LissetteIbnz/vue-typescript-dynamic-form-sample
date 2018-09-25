# vue-typescript-dynamic-form-sample

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

- Add typescript support through `vue add @vue/typescript`.
- Restructure project (api, models, typings).
- Add Typescript support through `vue add @vue/typescript`.
- Add Jest as test runner `vue add @vue/unit-jest`.

In the child component _FormPlanPicker.vue_, we add a event emit with `selectedPlan` as param.
In the parent component _FormWizard.vue_, we should add the event listener for `update` method.
`processStep` is a method that receive the payload (`stepData`) we send along with the update event.

- Add unit-jest plugin: `vue add @vue/unit-jest`

> [Jest plugin](https://www.npmjs.com/package/@vue/cli-plugin-unit-jest)

https://medium.com/@mtiller/debugging-with-typescript-jest-ts-jest-and-visual-studio-code-ef9ca8644132
