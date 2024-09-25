import { printTable } from 'console-table-printer';

const COMMANDS =
[
    { Command: 'start', Description: "Compiles all source code, watches all source code for changes and serves local documentation site." },
    { Command: 'dist', Description: "Compiles all source code." },
    { Command: 'css', Description: "Compiles, prefixes and minifies css from source." },
    { Command: 'js', Description: "Compiles and minifies js from source." },
    { Command: 'docs', Description: "Builds documentation site from markdown, compiles all assets, watches all documentation source and serves local documentation site." },
    { Command: 'docs_serve', Description: "Serves local documentation site." },
    { Command: 'docs_build_html', Description: "Builds documentation site from markdown." },
    { Command: 'docs_css', Description: "Compiles, prefixes and minifies documentation scss from source." },
    { Command: 'docs_js', Description: "Compiles and minifies documentation js from source." },
    { Command: 'watch', Description: "Watches all documentation source and serves local documentation site." },
    
];

printTable(COMMANDS);