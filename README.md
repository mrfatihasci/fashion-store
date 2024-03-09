# Repository Overview

This repository contains 4 branches: main, arduino-server, tailwindcss, and nextjs. Each is showcasing some modifications to <b>the same simple website</b>.

The aim is to demonstrate and differentiate the advantages and drawbacks of creating a simple website with:

- HTML/CSS/JS on remote server(Multi-Page App),

- HTML/CSS/JS on Arduino server(Multi-Page App)),

- HTML/TailwindCSS/JS on remote server(Multi-Page App),

- HTML/TailwindCSS/JS/React/Nextjs as SSG (Single Page App)

<table style="margin: 1rem auto; background-color:  gray; color: black; width:50%;">
    <caption style="caption-side:top; text-align:center; color: inherit; background-color: inherit;"><strong>Table of Contents</strong>
    </caption>
    <tr>
        <th>Branch</th>
        <th>Description</th>
        <th>Average Score</th>
    </tr>
    <tr>
        <td>main</td>
        <td>The website as Multi-Page App with vanilla HTML/CSS/JS</td>
        <td>89%</td>
    </tr>
     <tr>
        <td>arduino-server</td>
        <td>The website as Multi-Page App on Arduino Server</td>
        <td>83.5%</td>
    </tr> <tr>
        <td>tailwindcss</td>
        <td>The website as Multi-Page App with Tailwindcss</td>
        <td>100%</td>
    </tr> <tr>
        <td>nextjs</td>
        <td>The website as Single-Page App built with Nextjs</td>
        <td>100%</td>
    </tr>
</table>

## Branch: main

This branch features a vanilla HTML/CSS/JS setup for a basic multiple-page website.

https://fashion-store-main.vercel.app/

- NOTE: The lighthouse result came out to be lower not because vanilla page is a bad, but was rather due to the lack time for me to fix the css. After tailwindcss and nextjs branch, i should have come and made changes on branch "main" and "arduino-server" to sync all branches and have a real comparison. I just don't like spending time with vanilla css right after working with tailwindcss. Writing inline css with tailwind is super handy at this point.

- Note2: On branch main & arduino-server, add h2 and h3 for accessibility, remove 3rd party css img with a local one, edit css

<table style="margin: 1rem auto; background-color:  gray; color: black; width:50%;">
        <caption style="caption-side:top; text-align:center; color: inherit; background-color: inherit;"><strong>Lighthouse Result for Mobile & Desktop on Average</strong></caption>
        <tr>
            <th>Performance</th><th>Accessibility</th><th>Best Practices</th><th>SEO</th> 
        </tr>
        <tr>
            <td>80%</td>
            <td>96%</td><td>80%</td><td>100%</td>
        </tr>
    </table>

## Branch: arduino-server

In this branch, you will find the Arduino server-side code that responds to client requests, along with the vanilla HTML/CSS/JS code for the same website as in the main branch.

<details style="border: 1px solid white;">
  <summary> <strong>Pros and Cons</strong> </summary>
While Arduino might be seen as a reliable platform, there are certain limitations to be aware of:

#### Cons:

    -   Single-thread CPU: affects concurrent processing of multiple requests.

    -   Synchronous SPI Bus Communication: Communication between Arduino and the Ethernet shield relies on synchronous SPI, impacting communication speed.

    -   Embedded SD Card Speed

    -   No TLP Support for HTTPS:

    -   No Node.js Server: The absence of a Node.js server restricts serving only multiple pages.

    -   Better to go with raspberry pi if  you need more resources or plan on using node.js

#### Pros:

    -   IO Pins with Analog and PWM Capabilities: ideal for smart home projects where you might want to connect sensors and a relay to supply power or a digital signal to a system, and even toogle the relay through page's UI.

    -   Learning Web Development: it is great for learning web development, since it requires you to write your own back-end code from scratch(or template). Writing response code to client's request is an excellent hands on experience.

</details>

<table style="margin: 1rem auto; background-color:  gray; color: black; width:50%;">
        <caption style="caption-side:top; text-align:center; color: inherit; background-color: inherit;"><strong>Lighthouse Result for Mobile & Desktop on Average</strong></caption>
        <tr>
            <th>Performance</th><th>Accessibility</th><th>Best Practices</th><th>SEO</th> 
        </tr>
        <tr>
            <td>69%</td>
            <td>96%</td><td>78%</td><td>91%</td>
        </tr>
    </table>

## Branch: tailwindcss

The tailwind branch includes an installation guide for Tailwind CSS and its plugin, along with the HTML/JS code for the same website as in the main branch.

https://fashion-store-dun.vercel.app/

  <details style="border: 1px solid white;">
  <summary> <strong> Tailwind Installation</strong> </summary>

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

<table style="margin: 1rem auto; background-color:  gray; color: black; width:50%;">
        <caption style="caption-side:top; text-align:center; color: inherit; background-color: inherit;"><strong>Lighthouse Result for Mobile & Desktop on Average</strong></caption>
        <tr>
            <th>Performance</th><th>Accessibility</th><th>Best Practices</th><th>SEO</th> 
        </tr>
        <tr>
            <td>100%</td>
            <td>100%</td><td>100%</td><td>100%</td>
        </tr>
    </table>

## Branch: nextjs

This branch comprises Next.js project codes for the website featured in the main branch.

https://fashion-store-nextjs.vercel.app/

<table style="margin: 1rem auto; background-color:  gray; color: black; width:50%;">
        <caption style="caption-side:top; text-align:center; color: inherit; background-color: inherit;"><strong>Lighthouse Result for Mobile & Desktop on Average</strong></caption>
        <tr>
            <th>Performance</th><th>Accessibility</th><th>Best Practices</th><th>SEO</th> 
        </tr>
        <tr>
            <td>100%</td>
            <td>100%</td><td>100%</td><td>100%</td>
        </tr>
    </table>