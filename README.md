## Awesome Swagger

### Intro
This is an example of how to document your Web API using Swagger. And how to organize all the staff flexible/modular/easy-extendable. Hope that simplify your life.

### A point of view
Everyone knows that Swagger UI works fine with both JSON and YAML schema description using one index file but ... just think to your self how big can be a single file with all API description. Yes - that's a real reason for starting to divide a common file to few ones.

### We have problems
`Where I heard that frase... Houston! Never mind - just a joke`

Unfortunately, there is no way to separate & link JSON file under Swagger. YAML - yes can be but again that doesn't work correctly/broken in most cases. There is another tool ReDoc (React based) which smart enough to read linked schema definition but still, the tool doesn't support built-in API calls as Swagger does. Well, that's why have to build all into a common file that's reliable, choose JSON.

### Solution
The example is based on Swagger UI Docker + Node, hosted by Docker containers, combined together by Docker Compose so you can easily add/extend your docker-compose file or here is a reason to start using Docker =)

1. Copy `.env.dist` to `.env` and apply your changes
2. Run `run.sh <up|down|info>`
3. Go to Swagger UI in browser [http://localhost:8080](http://localhost:8080)  
  
##### FYI
- `api/build/latest.json` - a JSON build of the schema.
- `redoc.html` - a gaining popularity nice tool
- `converter.js` - an example how to convert 1.0 schema to 2.0

[Validate Swagger YAML](http://bigstickcarpet.com/swagger-parser/www/index.html#)  
