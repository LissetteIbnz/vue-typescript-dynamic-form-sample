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

- Add Typescript support through `vue add @vue/typescript`.
- Add Jest as test runner `vue add @vue/unit-jest`.

## 02 Dynamic Components

En FormWizard renderizamos varios componentes estando todos en la página cargados sin siquiera haberse usado.

```html
···
<FormPlanPicker v-if="currentStepNumber === 1" @update="processStep"/>
<FormUserDetails v-if="currentStepNumber === 2" @update="processStep"/>
<FormAddress v-if="currentStepNumber === 3" @update="processStep" :wizard-data="form" />
<FormReviewOrder v-if="currentStepNumber === 4" @update="processStep" :wizard-data="form" />
···
```

Vamos a cambiar este comportamiento por una carga dinámica de componentes.

```html
<component is="FormPlanPicker" v-if="currentStepNumber === 1" @update="processStep" />
```

En la etiqueta `is` pondremos el nombre del componente a renderizar. El resto de las props o listener se agregarán como la definición un componente normal.

Para hacer una renderización de componentes reusables, vamos a meter los nombres de los componentes en un array; los pasos de cuál se debe mostrar y el número de componentes (pasos) en propiedades computadas.

```html
    <component
      :is="currentStep"
      @update="processStep"
      :wizard-data="form"     
    />
···
data() {
    return {
      steps: [
        'FormPlanPicker',
        'FormUserDetails',
        'FormAddress',
        'FormReviewOrder',
      ],
···
computed: {
    length(): number {
      return this.steps.length;
    },
    currentStep(): string {
      return this.steps[this.currentStepNumber - 1];
    },
···
```

---

