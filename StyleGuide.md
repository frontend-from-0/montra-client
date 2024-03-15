## Colors

It's better not to apply colors directly but to rely to the theme colors. Hoever, if a color should be used additionality, only use color defined in the src/styles/colors.tsx file.

## Typography

We should only use typography defined as a shared component.
E.g. for TitileX a shared component named TitleX should be created. It should be using the Typography component form material UI with 'variant' value h1. Font size and line height should be adgusted in the theme for the MUI's h1 variant.


## Exports
Prefer using named exports unless default export is required by an external library.


