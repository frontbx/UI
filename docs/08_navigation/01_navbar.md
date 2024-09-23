# Navbar

Navbar provides a foundation for building out various navigation components.

---

*   [Markup](#markup)
*   [Links](#links)
*   [Logo](#links)

---

### Markup

The base `.navbar` component sets the core foundation for building a navigation component. Navbar can then be combined with other Frontbx Components such as `.nav-menu`, [Tabs](../tabs/index.html), [Buttons](../../forms/buttons/index.html), [Dropdown](../../forms/dropdown/index.html) and more.

<div class="code-content-example">
    <nav class="navbar bg-black">
        <div class="container-fluid">
            <a class="nav-logo" href="/">
                <span class="logo-text">BRAND</span>
            </a>      
            <ul class="nav-menu">
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
                <li class="drop-container">
                    <button type="button" class="btn-dropdown js-drop-trigger" aria-pressed="false">
                        Dropdown&nbsp;
                        <span class="caret-s"></span>
                    </button>
                    <div class="drop-menu js-drop-menu drop-sw" aria-hidden="true">
                        <ul class="menu"> 
                            <li><a href="#">Menu 1</a></li>
                            <li><a href="#">Menu 2</a></li>
                            <li><a href="#">Menu 3</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div class="flex-row-fluid col-gaps-xs">
                <div class="form-field field-on-bg">
                    <span class="fa fa-search"></span>
                    <input name="text" id="search" type="search" placeholder="Enter your search...">
                </div>
                <button class="btn btn-outline btn-primary">Search</button>
            </div>
        </div>
    </nav>
</div>

```html
<div class="code-content-example">
    <nav class="navbar bg-black">
        <div class="container-fluid">
            <a class="nav-logo" href="/">
                <span class="logo-text">BRAND</span>
            </a>      
            <ul class="nav-menu">
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
                <li class="drop-container">
                    <button type="button" class="btn-dropdown js-drop-trigger" aria-pressed="false">
                        Dropdown&nbsp;
                        <span class="caret-s"></span>
                    </button>
                    <div class="drop-menu js-drop-menu drop-sw" aria-hidden="true">
                        <ul class="menu"> 
                            <li><a href="#">Menu 1</a></li>
                            <li><a href="#">Menu 2</a></li>
                            <li><a href="#">Menu 3</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div class="flex-row-fluid col-gaps-xs">
                <div class="form-field field-on-bg">
                    <span class="fa fa-search"></span>
                    <input name="text" id="search" type="search" placeholder="Enter your search...">
                </div>
                <button class="btn btn-outline btn-primary">Search</button>
            </div>
        </div>
    </nav>
</div>
```

---