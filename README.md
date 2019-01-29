# Create React App with typescript, reasonml and gentype

Create React App boilerplate use typescript and:

- **Reasonml**: Reason lets you write simple, fast and quality type safe code while leveraging both the JavaScript & OCaml ecosystems.
- **Gentype**: auto generate typescript binding for `re` file
- **Tailwind**: utility-first css, IMO this is best CSS solution for Reason React now.

Other setup:

- precommit/prepush hook: format code, lint typescript and reasonml code
- Docker for development. it's up to you to setup Dockerfile for production

## How to run

- Clone this repo
- Run `yarn install`
- Run `yarn watch:bsb`
- Run `yarn start` in another terminal window

## Docker usage

- run `docker-compose up`
