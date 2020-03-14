# Usercript Development Framework

This framework allows you develop multiple powerful userscript by enabling es6 import/export, React, etc...

The userscripts are structured as `src/{topic}/{script}/index.js` as `topic` is the collection of related userscripts, `index.js` is the entry point

Each script will be compiled as `{topic}-{script}.user.js` into `./dist` for distribution

In each `src/{topic}/{script}`, You must have `header.json` as meta data for userscript

Reusable utilities will be placed under `./src/common` and can be imported as `import something from 'common/something'`

# Development

Run `SCRIPT=./src/your/script/index.js yarn start` to start a watch and development server, then go to `http://localhost:8080/your-script.proxy.user.js` to add to tampermoneky, the script will be auto updated after each save (still need to check for update on tampermoneky though).

# Build`

Run `SCRIPT=./src/your/script/index.js yarn build` to compile script into `./dist/`
