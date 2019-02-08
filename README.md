# Ivy Component Compilation

This repros compilation with Ivy that ignores errors with components 2-ways

- Components not declared in an NgModule
- Components declared in multiple NgModules

# Installation

```sh
yarn
```

## Stray component - w/o Ivy

- Checkout `stray-component` branch
- Delete `node_modules` folder if needed
- Run `yarn`
- Run `yarn start --aot`
- Note the compilation error due to `StrayComponent` not being declared in an `NgModule`


## Stray component - w/ Ivy

- Checkout `stray-component-ivy` branch
- Delete `node_modules` folder if needed
- Run `yarn`
- Run `yarn start --aot`
- Note the compilation error does not occur due to `StrayComponent` not being declared in an `NgModule`


## Multiple declarations - w/o Ivy

- Checkout `duplicate-ngmodules` branch
- Delete `node_modules` folder if needed
- Run `yarn`
- Run `yarn start --aot`
- Note the compilation error due to `StrayComponent` in multiple `NgModule` declarations


## Multiple declarations - Ivy

- Checkout `duplicate-ngmodules-ivy` branch
- Delete `node_modules` folder if needed
- Run `yarn`
- Run `yarn start --aot`
- Note the compilation error does not occur due to `StrayComponent` is included in multiple `NgModule` declarations.