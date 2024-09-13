# CSS Helopers

FrontBx provides a number of helper classes to use throughout your markup to quickly and easily apply common styling.

---

*   [Raised](#raised)
*   [Backgrounds](#backgrounds)
*   [Borders](#borders)
*   [Centering](#centering)
*   [Colors](#colors)
*   [Displays](#displays)
*   [Floats](#floats)
*   [Flex](#flex)
*   [Margins](#margins)
*   [Paddings](#paddings)
*   [Positions](#positions)
*   [Transitions](#transitions)
*   [Typography](#typography)

---

### Raised

| Helper Class | CSS Value                        |
|--------------|----------------------------------|
| `.raised-1`  | `var(--fbx-raised-level-one);`   |
| `.raised-2`  | `var(--fbx-raised-level-two);`   |
| `.raised-3`  | `var(--fbx-raised-level-three);` |
| `.flat`      | `box-shadow: none !important;`   |

---

### Backgrounds

| Helper Class      | CSS Value                                       |
|-------------------|-------------------------------------------------|
| `.bg-transparent` | `background-color: transparent;`                |
| `.bg-gray`        | `background-color: var(--fbx-gray);`            |
| `.bg-gray-100`    | `background-color: var(--fbx-gray-100);`        |
| `.bg-gray-200`    | `background-color: var(--fbx-gray-200);`        |
| `.bg-gray-300`    | `background-color: var(--fbx-gray-300);`        |
| `.bg-gray-400`    | `background-color: var(--fbx-gray-400);`        |
| `.bg-gray-500`    | `background-color: var(--fbx-gray-500);`        |
| `.bg-gray-600`    | `background-color: var(--fbx-gray-600);`        |
| `.bg-gray-700`    | `background-color: var(--fbx-gray-700);`        |
| `.bg-gray-800`    | `background-color: var(--fbx-gray-800);`        |
| `.bg-gray-900`    | `background-color: var(--fbx-gray-900);`        |
| `.bg-primary`     | `background-color: var(--fbx-theme-primary);`   |
| `.bg-secondary`   | `background-color: var(--fbx-theme-secondary);` |
| `.bg-info`        | `background-color: var(--fbx-theme-info);`      |
| `.bg-success`     | `background-color: var(--fbx-theme-success);`   |
| `.bg-warning`     | `background-color: var(--fbx-theme-warning);`   |
| `.bg-danger`      | `background-color: var(--fbx-theme-danger);`    |
| `.bg-white`       | `background-color: var(--fbx-color-white);`     |
| `.bg-black`       | `background-color: var(--fbx-color-black);`     |


---

### Borders

| Helper Class        | CSS Value                                   |
|---------------------|---------------------------------------------|
| `.no-border`        | `border: 0;`                                |
| `.border-s`         | `border-bottom: 1px solid;`                 |
| `.border-n`         | `border-top: 1px solid;`                    |
| `.border-e`         | `border-left: 1px solid;`                   |
| `.border-w`         | `border-right: 1px solid;`                  |
| `.border-gray`      | `border-color: var(--fbx-gray);`            |
| `.border-gray-100`  | `border-color: var(--fbx-gray-100);`        |
| `.border-gray-200`  | `border-color: var(--fbx-gray-200);`        |
| `.border-gray-300`  | `border-color: var(--fbx-gray-300);`        |
| `.border-gray-400`  | `border-color: var(--fbx-gray-400);`        |
| `.border-gray-500`  | `border-color: var(--fbx-gray-500);`        |
| `.border-gray-600`  | `border-color: var(--fbx-gray-600);`        |
| `.border-gray-700`  | `border-color: var(--fbx-gray-700);`        |
| `.border-gray-800`  | `border-color: var(--fbx-gray-800);`        |
| `.border-gray-900`  | `border-color: var(--fbx-gray-900);`        |
| `.border-primary`   | `border-color: var(--fbx-theme-primary);`   |
| `.border-secondary` | `border-color: var(--fbx-theme-secondary);` |
| `.border-info`      | `border-color: var(--fbx-theme-info);`      |
| `.border-success`   | `border-color: var(--fbx-theme-success);`   |
| `.border-warning`   | `border-color: var(--fbx-theme-warning);`   |
| `.border-danger`    | `border-color: var(--fbx-theme-danger);`    |
| `.border-white`     | `border-color: var(--fbx-color-white);`     |
| `.border-black`     | `border-color: var(--fbx-color-black);`     |
| `.border-radius`    | `border-radius: var(--fbx-border-radius);`  |

---

### Centering

| Helper Class         | CSS Value                                           |
|----------------------|-----------------------------------------------------|
| `.center-horizontal` | `float: none;margin-left: auto;margin-right: auto;` |
| `.center-vertical`   | `display: inline-block;vertical-align: middle;`     |

---

### Colors

| Helper Class         | CSS Value                            |
|----------------------|--------------------------------------|
| `.color-transparent` | `color: transparent;`                |
| `.color-gray`        | `color: var(--fbx-gray);`            |
| `.color-gray-100`    | `color: var(--fbx-gray-100);`        |
| `.color-gray-200`    | `color: var(--fbx-gray-200);`        |
| `.color-gray-300`    | `color: var(--fbx-gray-300);`        |
| `.color-gray-400`    | `color: var(--fbx-gray-400);`        |
| `.color-gray-500`    | `color: var(--fbx-gray-500);`        |
| `.color-gray-600`    | `color: var(--fbx-gray-600);`        |
| `.color-gray-700`    | `color: var(--fbx-gray-700);`        |
| `.color-gray-800`    | `color: var(--fbx-gray-800);`        |
| `.color-gray-900`    | `color: var(--fbx-gray-900);`        |
| `.color-primary`     | `color: var(--fbx-theme-primary);`   |
| `.color-secondary`   | `color: var(--fbx-theme-secondary);` |
| `.color-info`        | `color: var(--fbx-theme-info);`      |
| `.color-success`     | `color: var(--fbx-theme-success);`   |
| `.color-warning`     | `color: var(--fbx-theme-warning);`   |
| `.color-danger`      | `color: var(--fbx-theme-danger);`    |
| `.color-white`       | `color: var(--fbx-color-white);`     |
| `.color-black`       | `color: var(--fbx-color-black);`     |

---

### Displays

| Helper Class       | CSS Value                |
|--------------------|--------------------------|
| `.hide-overflow`   | `overflow: hidden;`      |
| `.show-overflow`   | `overflow: visible;`     |
| `.scroll-overflow` | `overflow: scroll;`      |
| `.block`           | `display: block;`        |
| `.inline`          | `display: inline;`       |
| `.inline-block`    | `display: inline-block;` |
| `.table`           | `display: table;`        |
| `.table-cell`      | `display: table-cell;`   |
| `.visibility-show` | `visibility: visible;`   |
| `.visibility-hide` | `visibility: hidden;`    |
| `.opacity-hide`    | `opacity: 0;`            |
| `.opacity-show`    | `opacity: 1;`            |
| `.hidden`          | `display: none;`         |
| `.no-select`       | `user-select: none;`     |
| `.sr-only`         | Hides element off screen |

---

### Floats

| Helper Class   | CSS Value       |
|----------------|-----------------|
| `.float-left`  | `float: left;`  |
| `.float-right` | `float: right;` |
| `.float-none`  | `float: none;`  |
| `.float-clear` | `clear: both;`  |

---

### Flex

| Helper Class               | CSS Value                                                             |
|----------------------------|-----------------------------------------------------------------------|
| `.align-self-start`        | `align-self: flex-start;`                                             |
| `.align-self-end`          | `align-self: flex-end;`                                               |
| `.align-self-center`       | `align-self: center;`                                                 |
| `.align-self-baseline`     | `align-self: baseline;`                                               |
| `.align-self-stretch`      | `align-self: stretch;`                                                |
| `.flex-content-left`       | `justify-content: flex-start;`                                        |
| `.flex-content-right`      | `justify-content: flex-end;`                                          |
| `.flex-content-top`        | `align-items: flex-start;`                                            |
| `.flex-content-bottom`     | `align-items: flex-end;`                                              |
| `.flex-content-center-x`   | `justify-content: center;`                                            |
| `.flex-content-center-y`   | `align-items: center;`                                                |
| `.flex-content-center`     | `justify-content: center;align-items: center; align-content: center;` |
| `.flex-content-y-stretch`  | `align-items: stretch;`                                               |
| `.flex-content-y-baseline` | `align-items: baseline;`                                              |
| `.flex-content-x-between`  | `justify-content: space-between;`                                     |
| `.flex-content-x-around`   | `justify-content: space-around;`                                      |
| `.flex-content-x-evenly`   | `justify-content: space-evenly;`                                      |

---

### Margins

| Helper Class | CSS Value         |
|--------------|-------------------|
| `.no-margin` | `margin: 0;`      |
| `.margin-5`  | `margin: 0.5rem;` |
| `.margin-10` | `margin: 1rem;`   |
| `.margin-15` | `margin: 1.5rem;` |
| `.margin-20` | `margin: 2rem;`   |
| `.margin-25` | `margin: 2.5rem;` |
| `.margin-30` | `margin: 3rem;`   |
| `.margin-35` | `margin: 3.5rem;` |
| `.margin-40` | `margin: 4rem;`   |

---

### Paddings

| Helper Class  | CSS Value          |
|---------------|--------------------|
| `.no-padding` | `padding: 0;`      |
| `.pad-5`      | `padding: 0.5rem;` |
| `.pad-10`     | `padding: 1rem;`   |
| `.pad-15`     | `padding: 1.5rem;` |
| `.pad-20`     | `padding: 2rem;`   |
| `.pad-25`     | `padding: 2.5rem;` |
| `.pad-30`     | `padding: 3rem;`   |
| `.pad-35`     | `padding: 3.5rem;` |
| `.pad-40`     | `padding: 4rem;`   |

---

### Positions

| Helper Class   | CSS Value             |
|----------------|-----------------------|
| `.relative`    | `position: relative;` |
| `.absolute`    | `position: absolute;` |
| `.static`      | `position: static;`   |
| `.fixed`       | `position: fixed;`    |
| `.top-0`       | `top: 0;`             |
| `.bottom-0`    | `bottom: 0;`          |
| `.right-0`     | `right: 0;`           |
| `.left-0`      | `left: 0;`            |
| `.top-50`      | `top: 50%;`           |
| `.bottom-50`   | `bottom: 50%;`        |
| `.right-50`    | `right: 50%;`         |
| `.left-50`     | `left: 50%;`          |
| `.full-width`  | `width: 100%;`        |
| `.full-height` | `height: 100%;`       |
| `.width-50`    | `width: 50%;`         |
| `.width-0`     | `width: 0;`           |
| `.width-auto`  | `width: auto;`        |
| `.height-auto` | `height: auto;`       |

---

### Transitions

| Helper Class     | CSS Value                                  |
|------------------|--------------------------------------------|
| `.webkit-gl`     | `-webkit-transform: translate3d(0, 0, 0);` |
| `.no-transition` | `transition: 0s linear;`                   |

---

### Typography

| Helper Class          | CSS Value                                                       |
|-----------------------|-----------------------------------------------------------------|
| `.sans-serif`         | `font-family: var(--fbx-font-sans-serif);`                      |
| `.monospace`          | `font-family: var(--fbx-font-monospace);`                       |
| `.serif`              | `font-family: var(--fbx-font-serif);`                           |
| `.heading-font`       | `font-family: var(--fbx-font-headings);`                        |
| `.text-lightest`      | `font-weight: 100;`                                             |
| `.text-light`         | `font-weight: 300;`                                             |
| `.text-normal`        | `font-weight: 400;`                                             |
| `.text-bold`          | `font-weight: 500;`                                             |
| `.text-bolder`        | `font-weight: 600;`                                             |
| `.text-boldest`       | `font-weight: 900;`                                             |
| `.font-italic`        | `font-style: italic;`                                           |
| `.font-ellipses`      | `overflow: hidden;text-overflow: ellipsis;white-space: nowrap;` |
| `.font-strike`        | `text-decoration: line-through;`                                |
| `.uppercase`          | `text-transform: uppercase;`                                    |
| `.lowercase`          | `text-transform: lowercase;`                                    |
| `.capitalize`         | `text-transform: capitalize;`                                   |
| `.underline`          | `text-decoration: underline;`                                   |
| `.no-text-decoration` | `text-decoration: none;`                                        |
| `.text-left`          | `text-align: left;`                                             |
| `.text-right`         | `text-align: right;`                                            |
| `.text-center`        | `text-align: center;`                                           |
| `.nowrap`             | `white-space: nowrap;`                                          |

