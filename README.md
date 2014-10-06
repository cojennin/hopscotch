# hopscotch

An app that stores drink information.

## Prerequisites

You will need [Leiningen][1] 1.7.0 or above installed, Mongo (feel free to install with apt or yum).

[1]: https://github.com/technomancy/leiningen

## Running

The project is composed of three distinct components:
1) api
2) webapp
3) ingestion

### API

To start a ring server, `cd` into api and run `lein ring headless-server`. This will start a ring server on :3000 by default.

### WEBAPP

The webapp portion can be run from anywhere. For testing I generally have nginx point to the webapp directory and serve from there. Feel free to serve the webapp directory from the webserver of your choice. Make sure it points to `/path/to/webapp/src/hopscotch_webapp` where `/path/to/` is the path to the webapp directory.

### INGESTION

Details as events warrant.

## License

Copyright © 2014 FIXME
