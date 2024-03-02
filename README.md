# Repository Overview

This repository contains 4 branches, each showcasing modifications to the same simple website to demonstrate and differentiate the advantages and drawbacks of multiple page server, multiple page Arduino server, Tailwind CSS, and SSR with Next.js.

## Branch: main

This branch features a vanilla HTML/CSS/JavaScript setup for a basic multiple-page website.

https://mrfatihasci.github.io/fashion-store/

<br>

## Branch: arduino

In this branch, you will find the Arduino server-side code that responds to client requests, along with the vanilla HTML/CSS/JS code for the same website as in the main branch.

<details>
  <summary> <strong>REVIEW</strong> </summary>

#### Cons:

While Arduino serves as a reliable platform, there are certain limitations to be aware of:

    -   Single-thread CPU: affects concurrent processing of multiple requests.

    -   Synchronous SPI Bus Communication: Communication between Arduino and the Ethernet shield relies on synchronous SPI, impacting communication speed.

    -   Embedded SD Card Speed

    -   No TLP Support for HTTPS:

    -   No Node.js Server: The absence of a Node.js server restricts serving only multiple pages.

#### Pros:

    -   IO Pins with Analog and PWM Capabilities: ideal for smart home projects,

    -   Learning Web Development: it is great for learning web development, since it requires you to write your own back-end code from scratch(or template)

</details>
<br>

## Branch: tailwind

The tailwind branch includes an installation guide for Tailwind CSS and its plugin, along with the HTML/JS code for the same website as in the main branch.

  <details>
  <summary> <strong> INSTALLATION</strong> </summary>

#### Installation of Tailwind (CLI)

if you have an existing project like react angular etc, you can install it as dev-dependency. but building the project from scratch does not require first step
Install Tailwind CSS. Install tailwindcss via npm, and create your tailwind.config.js file.

    npm install -D tailwindcss
    npx tailwindcss init

Configure your template paths. Add the paths to all of your template files in your tailwind.config.js file. In `tailwind.config.js` file add:

    content: ["./src/**/*.{html,js}"]

Add the Tailwind directives to your CSS. Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

    @tailwind base;   @tailwind components;  @tailwind utilities;

Start the Tailwind CLI build process. Run the CLI tool in terminal to scan your template files for classes and build your CSS.

    npx tailwindcss -i ./src/input.css -o ./public/output.css --watch

Start using Tailwind in your HTML. Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

For production, i prefer adding below script for converting output.css to build.css, later updating css links in .html's:

    "tailwindcss-optimize": "npx tailwindcss -i output.css -o build.css --minify"

#### Prettier + Its Tailwindcss Plugin Installation:

npm install --save-dev --save-exact prettier prettier-plugin-tailwindcss
node --eval "fs.writeFileSync('.prettierrc.json','{}\n')"
add this plugin inside the {} of .prettierrc.json:
"plugins": ["prettier-plugin-tailwindcss"]

create a .prettierignore file to let the Prettier CLI and editors know which files to not format. add 'build' 'coverage' etc in it without
Now, format all files with Prettier:

    "prettier" : "npx prettier --write **/*.html"

    npm run tailwindcss

    npm run prettier

you can add a script for minifying css in package.json if you are lazy like me:
"tailwindcss-optimize": "npx tailwindcss -o build.css --minify"

my preference in .prettier.json:

    "singleQuote": false,
    "htmlWhitespaceSensitivity": "ignore",
    "printWidth": 400

note: setting printWidth to ~100 before any git push is a good idea

#### Installation of only Prettier:

there are 2 ways: one is to install prettier extension in vscode and the other is to install it with npm as we will do now.

- in vscode settings, we also leave prettier-config-path empty instead of .prettierrc or .prettier.json... I assume .prettier.json is like a high level settings of prettier (probably just because it is installed via npm) and mostly used between team members, and better to practice it even in personal projects

  npm init -y

  npm i --save-dev --save-exact prettier

this is to only reformat javascript.js file
npx prettier --write javascript.js

this is to only check javascript.js file without applying any reformat
npx prettier --check javascript.js

</details>

<br>

## Branch: nextjs

This branch comprises Next.js project codes for the website featured in the main branch.
