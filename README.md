Modules are excluded. When deploying the project to another PC, you can run "npm install" to restore them.

Style convention

Values for properties used through design defined as SCSS variables in "_variables.scss"

"_base.scs" - Applied to an element using an element selector, a descendent selector, or a child selector, along with any pseudo-classes. It doesn’t include any class or ID selectors. It is defining the default styling for how that element should look in all occurrences on the page.

For each block there is a separate subdirectory in the "blocks" directory.

Z-indexes are separeted into global and local indices. Global indices are defined as global variables. Local indices are defined at their stylesheet withing local context.

Media queries are defined separetely.
