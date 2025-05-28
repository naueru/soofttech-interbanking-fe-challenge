# Folder Structure in `components`

I decided this structure due to clarity and scalability.

Its divided in:

- ## `layout`

Contains components that define the overall structure and reusable skeleton of the application. For example, header, footer, or any component that organizes the global visual layout of pages.

- ## `ui`

This folder groups the most basic and reusable user interface components that do not contain business logic but focus on presentation. These are elements like buttons, inputs, modals, icons, labels, etc.

- ## `features`

This folder contains components that encapsulate specific functionalities or business modules. They usually include both UI and related logic and can be composed of multiple UI components.

---

# Notes about components

- `Search`:
  I implemented a debounced state to avoid stressing the app or the API if implemented even if for this excersise is not necessary.

- `Cards`:
  I decided to give stiles similar to post-it.

- `Styles`:
  Regarding of styles I choosed the mobile first, variables for colors and some constants like shadows and CSS modules since the app is quite small.
