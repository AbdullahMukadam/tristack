// @ts-nocheck
// Auto-generated - DO NOT EDIT
// Run 'bun run generate-templates' to regenerate

import type { TemplateSource } from "./core/template-processor";

export const EMBEDDED_TEMPLATES: Map<string, TemplateSource> = new Map([
  ["base/_gitignore", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "node_modules\n.pnp\n.pnp.js\n__pycache__/\n*.py[cod]\n.venv/\nvenv/\nenv/\ndist\nbuild\n*.tsbuildinfo\ntarget/\n.env\n.env*.local\n.vscode/*\n!.vscode/settings.json\n!.vscode/tasks.json\n!.vscode/launch.json\n!.vscode/extensions.json\n.idea\n*.swp\n*.swo\n*~\n.DS_Store\nlogs\n*.log\ncoverage\n.nyc_output\n.pytest_cache/\n.mypy_cache/\n.ruff_cache/\n*.tgz\n.cache\ntmp\ntemp";
},"useData":true} }],
  ["go/addons/air/air.toml.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "root = \".\"\ntmp_dir = \"tmp\"\n\n[build]\n  cmd = \"go build -o ./tmp/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":27},"end":{"line":5,"column":43}}}) : helper)))
    + " ./cmd/api\"\n  bin = \"./tmp/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":6,"column":15},"end":{"line":6,"column":31}}}) : helper)))
    + "\"\n  include_ext = [\"go\", \"html\", \"env\"]\n  exclude_dir = [\"tmp\", \"bin\", \"vendor\"]\n\n[log]\n  time = false\n\n[misc]\n  clean_on_exit = true";
},"useData":true} }],
  ["go/addons/docker/_dockerignore", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return ".git\n.gitignore\nbin\nvendor\n.env\n.env*.local\nDockerfile\n.dockerignore";
},"useData":true} }],
  ["go/addons/docker/docker-compose.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "    ports:\n      - \"8000:8000\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    environment:\n      DATABASE_URL: postgres://postgres:postgres@db:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":10,"column":57},"end":{"line":10,"column":73}}}) : helper)))
    + "?sslmode=disable\n    restart: on-failure\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":31}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":19,"column":0}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    environment:\n      DATABASE_URL: root:password@tcp(db:3306)/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":14,"column":47},"end":{"line":14,"column":63}}}) : helper)))
    + "?parseTime=true\n    restart: on-failure\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":16,"column":32}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":19,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "    volumes:\n      - appdata:/data\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    depends_on:\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":22,"column":10},"end":{"line":22,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":22,"column":35},"end":{"line":22,"column":56}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":22,"column":57}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":28}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "      db:\n        condition: service_started\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "      migrate:\n        condition: service_completed_successfully\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n  migrate:\n    build: .\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"goose",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":35,"column":29}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":57,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":58,"column":6},"end":{"line":58,"column":28}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":58,"column":0},"end":{"line":65,"column":7}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    entrypoint: [\"/usr/local/bin/goose\", \"up\"]\n    environment:\n      GOOSE_MIGRATION_DIR: /migrations\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":39,"column":6},"end":{"line":39,"column":30}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":39,"column":0},"end":{"line":48,"column":7}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      GOOSE_DRIVER: postgres\n      GOOSE_DBSTRING: postgres://postgres:postgres@db:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":41,"column":59},"end":{"line":41,"column":75}}}) : helper)))
    + "?sslmode=disable\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":31}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":48,"column":0}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      GOOSE_DRIVER: mysql\n      GOOSE_DBSTRING: root:password@tcp(db:3306)/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":44,"column":49},"end":{"line":44,"column":65}}}) : helper)))
    + "?parseTime=true\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      GOOSE_DRIVER: sqlite3\n      GOOSE_DBSTRING: /data/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":47,"column":28},"end":{"line":47,"column":44}}}) : helper)))
    + ".db\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":50,"column":6},"end":{"line":50,"column":30}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":50,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    entrypoint: [\"/usr/local/bin/migrate\", \"-path\", \"/migrations\", \"-database\", \"postgres://postgres:postgres@db:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":51,"column":118},"end":{"line":51,"column":134}}}) : helper)))
    + "?sslmode=disable\", \"up\"]\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":52,"column":10},"end":{"line":52,"column":31}}}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":52,"column":0},"end":{"line":56,"column":0}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    entrypoint: [\"/usr/local/bin/migrate\", \"-path\", \"/migrations\", \"-database\", \"mysql://root:password@tcp(db:3306)/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":53,"column":116},"end":{"line":53,"column":132}}}) : helper)))
    + "\", \"up\"]\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    entrypoint: [\"/usr/local/bin/migrate\", \"-path\", \"/migrations\", \"-database\", \"sqlite:///data/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":55,"column":96},"end":{"line":55,"column":112}}}) : helper)))
    + ".db\", \"up\"]\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "    restart: on-failure\n    depends_on:\n      - db\n";
},"21":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_DB: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":74,"column":19},"end":{"line":74,"column":35}}}) : helper)))
    + "\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\nvolumes:\n  pgdata:\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":82,"column":10},"end":{"line":82,"column":31}}}),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":82,"column":0},"end":{"line":100,"column":0}}})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n  db:\n    image: mysql:8\n    environment:\n      MYSQL_ROOT_PASSWORD: password\n      MYSQL_DATABASE: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":88,"column":22},"end":{"line":88,"column":38}}}) : helper)))
    + "\n    ports:\n      - \"3306:3306\"\n    volumes:\n      - mysqldata:/var/lib/mysql\n\nvolumes:\n  mysqldata:\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":96,"column":10},"end":{"line":96,"column":32}}}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":96,"column":0},"end":{"line":100,"column":0}}})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    return "\nvolumes:\n  appdata:\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "services:\n  app:\n    build: .\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":27}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":30}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":19,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":20,"column":10},"end":{"line":20,"column":32}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":33},"end":{"line":20,"column":57}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":58},"end":{"line":20,"column":79}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":20,"column":80}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":31,"column":28}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":66,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":67,"column":6},"end":{"line":67,"column":30}}}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":67,"column":0},"end":{"line":100,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["go/addons/docker/Dockerfile.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "RUN CGO_ENABLED=0 go run github.com/sqlc-dev/sqlc/cmd/sqlc@v1.27.0 generate\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "RUN mkdir -p /out/data\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "RUN CGO_ENABLED=0 GOBIN=/out go install github.com/pressly/goose/v3/cmd/goose@v3.22.1\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"golang-migrate",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":42}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":21,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "RUN CGO_ENABLED=0 GOBIN=/out go install -tags '"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":53},"end":{"line":20,"column":77}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":20,"column":47},"end":{"line":20,"column":146}}})) != null ? stack1 : "")
    + "' github.com/golang-migrate/migrate/v4/cmd/migrate@v4.18.1\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "postgres";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":97},"end":{"line":20,"column":118}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":20,"column":87},"end":{"line":20,"column":139}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "mysql";
},"8":function(container,depth0,helpers,partials,data) {
    return "sqlite";
},"9":function(container,depth0,helpers,partials,data) {
    return "COPY --from=builder /out/goose /usr/local/bin/goose\nCOPY migrations /migrations\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"golang-migrate",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":30,"column":42}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":33,"column":0}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "COPY --from=builder /out/migrate /usr/local/bin/migrate\nCOPY db/migrations /migrations\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "COPY --from=builder --chown=nonroot:nonroot /out/data /data\nENV DATABASE_URL=/data/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":36,"column":23},"end":{"line":36,"column":39}}}) : helper)))
    + ".db\nVOLUME /data\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "# syntax=docker/dockerfile:1\n\nFROM golang:1.22-alpine AS builder\nWORKDIR /app\n\nCOPY go.mod go.sum* ./\nRUN go mod download\n\nCOPY . .\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":12,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":28}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "")
    + "RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags=\"-s -w\" -o /out/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":16,"column":73},"end":{"line":16,"column":89}}}) : helper)))
    + " ./cmd/api\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"goose",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":29}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + "\nFROM gcr.io/distroless/static-debian12:nonroot\nWORKDIR /app\n\nCOPY --from=builder /out/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":26,"column":25},"end":{"line":26,"column":41}}}) : helper)))
    + " /usr/local/bin/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":26,"column":57},"end":{"line":26,"column":73}}}) : helper)))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"goose",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":27,"column":29}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":33,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":34,"column":28}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":0},"end":{"line":38,"column":7}}})) != null ? stack1 : "")
    + "\nEXPOSE 8000\nENTRYPOINT [\"/usr/local/bin/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":41,"column":28},"end":{"line":41,"column":44}}}) : helper)))
    + "\"]\n";
},"useData":true} }],
  ["go/addons/github-actions/.github/workflows/ci.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "      - name: Generate queries (sqlc)\n        run: go run github.com/sqlc-dev/sqlc/cmd/sqlc@v1.27.0 generate\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "      - name: Lint\n        uses: golangci/golangci-lint-action@v9\n        with:\n          version: v2.14.0\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-go@v5\n        with:\n          go-version-file: go.mod\n          cache: true\n      - name: Download dependencies\n        run: go mod download && go mod verify\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":27}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "      - name: Verify formatting\n        run: test -z \"$(gofmt -l .)\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"golangci-lint",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":45}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "      - name: Vet\n        run: go vet ./...\n      - name: Test\n        run: go test -race ./...\n";
},"useData":true} }],
  ["go/addons/golangci-lint/.golangci.yml.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "version: \"2\"\n\nrun:\n  timeout: 5m\n  tests: true\n\nlinters:\n  default: standard\n\nformatters:\n  enable:\n    - gofmt\n";
},"useData":true} }],
  ["go/base/_gitignore", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "*.exe\n*.exe~\n*.dll\n*.so\n*.dylib\nbin/\n*.test\n*.out\n*.prof\nvendor/\ngo.work\ngo.work.sum\ntmp/\n*.db\n.env\n.env.local\n.idea\n.vscode\n*.swp";
},"useData":true} }],
  ["go/base/.gitkeep", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["go/base/env.example.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DATABASE_URL="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":19},"end":{"line":5,"column":41}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":263}}})) != null ? stack1 : "")
    + "\n";
},"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":43},"end":{"line":5,"column":59}}}) : helper)))
    + ".db";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":72},"end":{"line":5,"column":96}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":62},"end":{"line":5,"column":256}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":142},"end":{"line":5,"column":158}}}) : helper)));
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":168},"end":{"line":5,"column":189}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":158},"end":{"line":5,"column":256}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "root:password@tcp(localhost:3306)/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":225},"end":{"line":5,"column":241}}}) : helper)))
    + "?parseTime=true";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "APP_NAME="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":24}}}) : helper)))
    + "\nPORT=8000\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":26}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["go/base/go.mod.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "require github.com/gin-gonic/gin v1.10.0\nrequire github.com/rogpeppe/go-internal v1.13.1\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fiber",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":10},"end":{"line":8,"column":32}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":14,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "require github.com/gofiber/fiber/v2 v2.52.5\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"echo",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":31}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":14,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "require github.com/labstack/echo/v4 v4.12.0\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"chi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":30}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":14,"column":0}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "require github.com/go-chi/chi/v5 v5.1.0\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "require gorm.io/gorm v1.25.12\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":28}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "require github.com/glebarez/sqlite v1.11.0\nrequire modernc.org/sqlite v1.34.1\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":34}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":25,"column":0}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "require gorm.io/driver/postgres v1.5.9\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":10},"end":{"line":23,"column":31}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":25,"column":0}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "require gorm.io/driver/mysql v1.5.7\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":25}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":43,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "require github.com/jmoiron/sqlx v1.4.0\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":28}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":34,"column":7}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    return "require modernc.org/sqlite v1.34.1\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":30,"column":34}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":34,"column":0}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "require github.com/jackc/pgx/v5 v5.7.1\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":10},"end":{"line":32,"column":31}}}),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":0},"end":{"line":34,"column":0}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return "require github.com/go-sql-driver/mysql v1.8.1\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":25}}}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":43,"column":0}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":6},"end":{"line":36,"column":28}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    return "require github.com/pressly/goose/v3 v3.22.1\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"golang-migrate",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":42}}}),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":0},"end":{"line":49,"column":0}}})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    return "require github.com/golang-migrate/migrate/v4 v4.18.1\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "require github.com/google/uuid v1.6.0\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "module "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":1,"column":7},"end":{"line":1,"column":23}}}) : helper)))
    + "\n\ngo 1.22\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"gin",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":26}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":43,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"goose",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":45,"column":6},"end":{"line":45,"column":29}}}),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":49,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":51,"column":6},"end":{"line":51,"column":21}}}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":0},"end":{"line":53,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["go/base/internal/config/config.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package config\n\nimport \"os\"\n\ntype Config struct {\n	AppName string\n	Port    string\n}\n\nfunc Load() Config {\n	return Config{\n		AppName: getenv(\"APP_NAME\", \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":12,"column":31},"end":{"line":12,"column":46}}}) : helper)))
    + "\"),\n		Port:    getenv(\"PORT\", \"8000\"),\n	}\n}\n\nfunc getenv(key, fallback string) string {\n	if value := os.Getenv(key); value != \"\" {\n		return value\n	}\n	return fallback\n}";
},"useData":true} }],
  ["go/base/Makefile.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "build: generate\nrun: generate\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "\ngenerate:\n	go run github.com/sqlc-dev/sqlc/cmd/sqlc@v1.27.0 generate\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":30,"column":28}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":39,"column":7}}})) != null ? stack1 : "")
    + "GOOSE_MIGRATION_DIR := migrations\n\nmigrate-up:\n	GOOSE_DRIVER=$(GOOSE_DRIVER) GOOSE_DBSTRING='$(GOOSE_DBSTRING)' GOOSE_MIGRATION_DIR=$(GOOSE_MIGRATION_DIR) go run github.com/pressly/goose/v3/cmd/goose@v3.22.1 up\n\nmigrate-down:\n	GOOSE_DRIVER=$(GOOSE_DRIVER) GOOSE_DBSTRING='$(GOOSE_DBSTRING)' GOOSE_MIGRATION_DIR=$(GOOSE_MIGRATION_DIR) go run github.com/pressly/goose/v3/cmd/goose@v3.22.1 down\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "GOOSE_DRIVER := sqlite3\nGOOSE_DBSTRING ?= "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":32,"column":18},"end":{"line":32,"column":34}}}) : helper)))
    + ".db\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":33,"column":34}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":39,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "GOOSE_DRIVER := postgres\nGOOSE_DBSTRING ?= postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":35,"column":62},"end":{"line":35,"column":78}}}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "GOOSE_DRIVER := mysql\nGOOSE_DBSTRING ?= root:password@tcp(localhost:3306)/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":38,"column":52},"end":{"line":38,"column":68}}}) : helper)))
    + "?parseTime=true\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"golang-migrate",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":42}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":0},"end":{"line":65,"column":0}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":49,"column":6},"end":{"line":49,"column":30}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":49,"column":0},"end":{"line":58,"column":7}}})) != null ? stack1 : "")
    + "\nmigrate-up:\n	go run -tags '$(MIGRATE_TAGS)' github.com/golang-migrate/migrate/v4/cmd/migrate@v4.18.1 -path db/migrations -database '$(MIGRATE_URL)' up\n\nmigrate-down:\n	go run -tags '$(MIGRATE_TAGS)' github.com/golang-migrate/migrate/v4/cmd/migrate@v4.18.1 -path db/migrations -database '$(MIGRATE_URL)' down\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "MIGRATE_TAGS := postgres\nMIGRATE_URL ?= postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":51,"column":59},"end":{"line":51,"column":75}}}) : helper)))
    + "?sslmode=disable\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":52,"column":10},"end":{"line":52,"column":31}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":52,"column":0},"end":{"line":58,"column":0}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "MIGRATE_TAGS := mysql\nMIGRATE_URL ?= mysql://root:password@tcp(localhost:3306)/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":54,"column":57},"end":{"line":54,"column":73}}}) : helper)))
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "MIGRATE_TAGS := sqlite\nMIGRATE_URL ?= sqlite://"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":57,"column":24},"end":{"line":57,"column":40}}}) : helper)))
    + ".db\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ".PHONY: build run test vet fmt generate migrate-up migrate-down\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\nbuild:\n	go build -o ./bin/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":9,"column":19},"end":{"line":9,"column":35}}}) : helper)))
    + " ./cmd/api\n\nrun:\n	go run ./cmd/api\n\ntest:\n	go test -race ./...\n\nvet:\n	go vet ./...\n\nfmt:\n	gofmt -w .\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":23,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"goose",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":29,"column":29}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":65,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["go/core/internal/service/item_service_test.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "package service\n\nimport (\n	\"errors\"\n	\"strings\"\n	\"testing\"\n)\n\nfunc TestValidateName(t *testing.T) {\n	longName := strings.Repeat(\"a\", 201)\n\n	tests := []struct {\n		name string\n		want error\n	}{\n		{name: \"abc\", want: nil},\n		{name: \"  spaced name  \", want: nil},\n		{name: \"\", want: ErrInvalidInput},\n		{name: \"   \", want: ErrInvalidInput},\n		{name: longName, want: ErrInvalidInput},\n	}\n\n	for _, tt := range tests {\n		t.Run(tt.name, func(t *testing.T) {\n			err := validateName(tt.name)\n			if tt.want == nil {\n				if err != nil {\n					t.Errorf(\"validateName(%q) = %v, want nil\", tt.name, err)\n				}\n				return\n			}\n			if !errors.Is(err, tt.want) {\n				t.Errorf(\"validateName(%q) = %v, want %v\", tt.name, err, tt.want)\n			}\n		})\n	}\n}";
},"useData":true} }],
  ["go/core/internal/service/item_service.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package service\n\nimport (\n	\"context\"\n	\"errors\"\n	\"fmt\"\n	\"strings\"\n	\"time\"\n\n	\"github.com/google/uuid\"\n\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":12,"column":18}}}) : helper)))
    + "/internal/model\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":13,"column":18}}}) : helper)))
    + "/internal/repository\"\n)\n\nvar ErrInvalidInput = errors.New(\"invalid input\")\n\ntype ItemService struct {\n	repo repository.ItemRepository\n}\n\nfunc NewItemService(repo repository.ItemRepository) *ItemService {\n	return &ItemService{repo: repo}\n}\n\nfunc (s *ItemService) CreateItem(ctx context.Context, name string) (model.Item, error) {\n	if err := validateName(name); err != nil {\n		return model.Item{}, err\n	}\n	item := model.Item{\n		ID:        uuid.NewString(),\n		Name:      name,\n		CreatedAt: time.Now().UTC(),\n	}\n	if err := s.repo.Create(ctx, &item); err != nil {\n		return model.Item{}, fmt.Errorf(\"create item: %w\", err)\n	}\n	return item, nil\n}\n\nfunc (s *ItemService) ListItems(ctx context.Context) ([]model.Item, error) {\n	items, err := s.repo.List(ctx)\n	if err != nil {\n		return nil, fmt.Errorf(\"list items: %w\", err)\n	}\n	return items, nil\n}\n\nfunc validateName(name string) error {\n	if strings.TrimSpace(name) == \"\" {\n		return fmt.Errorf(\"%w: name must not be empty\", ErrInvalidInput)\n	}\n	if len([]rune(name)) > 200 {\n		return fmt.Errorf(\"%w: name must be at most 200 characters\", ErrInvalidInput)\n	}\n	return nil\n}";
},"useData":true} }],
  ["go/framework/chi/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":19,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":20,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":11},"end":{"line":32,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":27},"end":{"line":32,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":32,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":0},"end":{"line":36,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":15},"end":{"line":37,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":31},"end":{"line":37,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":37,"column":11},"end":{"line":37,"column":47}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":48},"end":{"line":37,"column":70}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":71}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":41,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	h := handler.NewHandler(service.NewItemService(repo))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	if err := db.EnsureSchema(context.Background(), conn); err != nil {\n		log.Fatalf(\"schema bootstrap failed: %v\", err)\n	}\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "	r.Get(\"/api/v1/items\", h.ListItems)\n	r.Post(\"/api/v1/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/go-chi/chi/v5\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc main() {\n	cfg := config.Load()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":44,"column":7}}})) != null ? stack1 : "")
    + "\n	r := chi.NewRouter()\n	r.Get(\"/health\", func(w http.ResponseWriter, r *http.Request) {\n		w.Header().Set(\"Content-Type\", \"application/json\")\n		w.WriteHeader(http.StatusOK)\n		_, _ = w.Write([]byte(`{\"status\":\"ok\"}`))\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":52,"column":6},"end":{"line":52,"column":21}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":0},"end":{"line":55,"column":7}}})) != null ? stack1 : "")
    + "\n	srv := &http.Server{\n		Addr:              \":\" + cfg.Port,\n		Handler:           r,\n		ReadHeaderTimeout: 5 * time.Second,\n		ReadTimeout:       10 * time.Second,\n		WriteTimeout:      10 * time.Second,\n		IdleTimeout:       60 * time.Second,\n	}\n\n	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)\n	defer stop()\n\n	go func() {\n		log.Printf(\"%s listening on %s\", cfg.AppName, srv.Addr)\n		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {\n			log.Fatalf(\"server error: %v\", err)\n		}\n	}()\n\n	<-ctx.Done()\n\n	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n	defer cancel()\n	if err := srv.Shutdown(shutdownCtx); err != nil {\n		log.Fatalf(\"graceful shutdown failed: %v\", err)\n	}\n	log.Printf(\"server stopped\")\n}";
},"useData":true} }],
  ["go/framework/chi/internal/handler/handler.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package handler\n\nimport (\n	\"encoding/json\"\n	\"errors\"\n	\"net/http\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":8,"column":18}}}) : helper)))
    + "/internal/service\"\n)\n\nconst maxBodyBytes = 1 << 20\n\ntype Handler struct {\n	items *service.ItemService\n}\n\nfunc NewHandler(items *service.ItemService) Handler {\n	return Handler{items: items}\n}\n\nfunc (h Handler) ListItems(w http.ResponseWriter, r *http.Request) {\n	items, err := h.items.ListItems(r.Context())\n	if err != nil {\n		writeJSON(w, http.StatusInternalServerError, map[string]string{\"error\": \"could not list items\"})\n		return\n	}\n	writeJSON(w, http.StatusOK, items)\n}\n\nfunc (h Handler) CreateItem(w http.ResponseWriter, r *http.Request) {\n	var body struct {\n		Name string `json:\"name\"`\n	}\n	r.Body = http.MaxBytesReader(w, r.Body, maxBodyBytes)\n	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {\n		writeJSON(w, http.StatusBadRequest, map[string]string{\"error\": \"invalid request body\"})\n		return\n	}\n	item, err := h.items.CreateItem(r.Context(), body.Name)\n	if err != nil {\n		if errors.Is(err, service.ErrInvalidInput) {\n			writeJSON(w, http.StatusBadRequest, map[string]string{\"error\": err.Error()})\n			return\n		}\n		writeJSON(w, http.StatusInternalServerError, map[string]string{\"error\": \"could not create item\"})\n		return\n	}\n	writeJSON(w, http.StatusCreated, item)\n}\n\nfunc writeJSON(w http.ResponseWriter, status int, body any) {\n	w.Header().Set(\"Content-Type\", \"application/json\")\n	w.WriteHeader(status)\n	_ = json.NewEncoder(w).Encode(body)\n}";
},"useData":true} }],
  ["go/framework/echo/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":19,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":20,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":11},"end":{"line":32,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":27},"end":{"line":32,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":32,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":0},"end":{"line":36,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":15},"end":{"line":37,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":31},"end":{"line":37,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":37,"column":11},"end":{"line":37,"column":47}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":48},"end":{"line":37,"column":70}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":71}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":41,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	h := handler.NewHandler(service.NewItemService(repo))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	if err := db.EnsureSchema(context.Background(), conn); err != nil {\n		log.Fatalf(\"schema bootstrap failed: %v\", err)\n	}\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "	e.GET(\"/api/v1/items\", h.ListItems)\n	e.POST(\"/api/v1/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/labstack/echo/v4\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc main() {\n	cfg := config.Load()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":44,"column":7}}})) != null ? stack1 : "")
    + "\n	e := echo.New()\n	e.GET(\"/health\", func(c echo.Context) error {\n		return c.JSON(http.StatusOK, map[string]string{\"status\": \"ok\"})\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":50,"column":6},"end":{"line":50,"column":21}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":0},"end":{"line":53,"column":7}}})) != null ? stack1 : "")
    + "\n	addr := \":\" + cfg.Port\n	e.Server = &http.Server{\n		Handler:           e,\n		ReadHeaderTimeout: 5 * time.Second,\n		ReadTimeout:       10 * time.Second,\n		WriteTimeout:      10 * time.Second,\n		IdleTimeout:       60 * time.Second,\n	}\n\n	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)\n	defer stop()\n\n	go func() {\n		log.Printf(\"%s listening on %s\", cfg.AppName, addr)\n		if err := e.Start(addr); err != nil && !errors.Is(err, http.ErrServerClosed) {\n			log.Fatalf(\"server error: %v\", err)\n		}\n	}()\n\n	<-ctx.Done()\n\n	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n	defer cancel()\n	if err := e.Shutdown(shutdownCtx); err != nil {\n		log.Fatalf(\"graceful shutdown failed: %v\", err)\n	}\n	log.Printf(\"server stopped\")\n}";
},"useData":true} }],
  ["go/framework/echo/internal/handler/handler.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package handler\n\nimport (\n	\"errors\"\n	\"net/http\"\n\n	\"github.com/labstack/echo/v4\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":18}}}) : helper)))
    + "/internal/service\"\n)\n\nconst maxBodyBytes = 1 << 20\n\ntype Handler struct {\n	items *service.ItemService\n}\n\nfunc NewHandler(items *service.ItemService) Handler {\n	return Handler{items: items}\n}\n\nfunc (h Handler) ListItems(c echo.Context) error {\n	items, err := h.items.ListItems(c.Request().Context())\n	if err != nil {\n		return c.JSON(http.StatusInternalServerError, map[string]string{\"error\": \"could not list items\"})\n	}\n	return c.JSON(http.StatusOK, items)\n}\n\nfunc (h Handler) CreateItem(c echo.Context) error {\n	var body struct {\n		Name string `json:\"name\"`\n	}\n	c.Request().Body = http.MaxBytesReader(c.Response(), c.Request().Body, maxBodyBytes)\n	if err := c.Bind(&body); err != nil {\n		return c.JSON(http.StatusBadRequest, map[string]string{\"error\": \"invalid request body\"})\n	}\n	item, err := h.items.CreateItem(c.Request().Context(), body.Name)\n	if err != nil {\n		if errors.Is(err, service.ErrInvalidInput) {\n			return c.JSON(http.StatusBadRequest, map[string]string{\"error\": err.Error()})\n		}\n		return c.JSON(http.StatusInternalServerError, map[string]string{\"error\": \"could not create item\"})\n	}\n	return c.JSON(http.StatusCreated, item)\n}";
},"useData":true} }],
  ["go/framework/fiber/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":16,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":11},"end":{"line":30,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":27},"end":{"line":30,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":30,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":34,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":15},"end":{"line":35,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":31},"end":{"line":35,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":35,"column":11},"end":{"line":35,"column":47}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":48},"end":{"line":35,"column":70}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":35,"column":71}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":39,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	h := handler.NewHandler(service.NewItemService(repo))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	if err := db.EnsureSchema(context.Background(), conn); err != nil {\n		log.Fatalf(\"schema bootstrap failed: %v\", err)\n	}\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "	app.Get(\"/api/v1/items\", h.ListItems)\n	app.Post(\"/api/v1/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"log\"\n	\"os\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/gofiber/fiber/v2\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":13,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":19,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc main() {\n	cfg := config.Load()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "")
    + "\n	app := fiber.New(fiber.Config{\n		ReadTimeout:  10 * time.Second,\n		WriteTimeout: 10 * time.Second,\n		IdleTimeout:  60 * time.Second,\n	})\n	app.Get(\"/health\", func(c *fiber.Ctx) error {\n		return c.JSON(fiber.Map{\"status\": \"ok\"})\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":52,"column":6},"end":{"line":52,"column":21}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":0},"end":{"line":55,"column":7}}})) != null ? stack1 : "")
    + "\n	addr := \":\" + cfg.Port\n\n	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)\n	defer stop()\n\n	go func() {\n		log.Printf(\"%s listening on %s\", cfg.AppName, addr)\n		if err := app.Listen(addr); err != nil {\n			log.Fatalf(\"server error: %v\", err)\n		}\n	}()\n\n	<-ctx.Done()\n\n	if err := app.Shutdown(); err != nil {\n		log.Fatalf(\"graceful shutdown failed: %v\", err)\n	}\n	log.Printf(\"server stopped\")\n}";
},"useData":true} }],
  ["go/framework/fiber/internal/handler/handler.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package handler\n\nimport (\n	\"errors\"\n\n	\"github.com/gofiber/fiber/v2\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":8,"column":18}}}) : helper)))
    + "/internal/service\"\n)\n\ntype Handler struct {\n	items *service.ItemService\n}\n\nfunc NewHandler(items *service.ItemService) Handler {\n	return Handler{items: items}\n}\n\nfunc (h Handler) ListItems(c *fiber.Ctx) error {\n	items, err := h.items.ListItems(c.UserContext())\n	if err != nil {\n		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{\"error\": \"could not list items\"})\n	}\n	return c.JSON(items)\n}\n\nfunc (h Handler) CreateItem(c *fiber.Ctx) error {\n	var body struct {\n		Name string `json:\"name\"`\n	}\n	if err := c.BodyParser(&body); err != nil {\n		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{\"error\": \"invalid request body\"})\n	}\n	item, err := h.items.CreateItem(c.UserContext(), body.Name)\n	if err != nil {\n		if errors.Is(err, service.ErrInvalidInput) {\n			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{\"error\": err.Error()})\n		}\n		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{\"error\": \"could not create item\"})\n	}\n	return c.Status(fiber.StatusCreated).JSON(item)\n}";
},"useData":true} }],
  ["go/framework/gin/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":19,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":20,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":11},"end":{"line":32,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":27},"end":{"line":32,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":32,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":0},"end":{"line":36,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":15},"end":{"line":37,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":31},"end":{"line":37,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":37,"column":11},"end":{"line":37,"column":47}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":48},"end":{"line":37,"column":70}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":71}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":41,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	h := handler.NewHandler(service.NewItemService(repo))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	if err := db.EnsureSchema(context.Background(), conn); err != nil {\n		log.Fatalf(\"schema bootstrap failed: %v\", err)\n	}\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "	r.GET(\"/api/v1/items\", h.ListItems)\n	r.POST(\"/api/v1/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/gin-gonic/gin\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc main() {\n	cfg := config.Load()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":44,"column":7}}})) != null ? stack1 : "")
    + "\n	r := gin.Default()\n	r.GET(\"/health\", func(c *gin.Context) {\n		c.JSON(http.StatusOK, gin.H{\"status\": \"ok\"})\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":50,"column":6},"end":{"line":50,"column":21}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":0},"end":{"line":53,"column":7}}})) != null ? stack1 : "")
    + "\n	srv := &http.Server{\n		Addr:              \":\" + cfg.Port,\n		Handler:           r,\n		ReadHeaderTimeout: 5 * time.Second,\n		ReadTimeout:       10 * time.Second,\n		WriteTimeout:      10 * time.Second,\n		IdleTimeout:       60 * time.Second,\n	}\n\n	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)\n	defer stop()\n\n	go func() {\n		log.Printf(\"%s listening on %s\", cfg.AppName, srv.Addr)\n		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {\n			log.Fatalf(\"server error: %v\", err)\n		}\n	}()\n\n	<-ctx.Done()\n\n	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n	defer cancel()\n	if err := srv.Shutdown(shutdownCtx); err != nil {\n		log.Fatalf(\"graceful shutdown failed: %v\", err)\n	}\n	log.Printf(\"server stopped\")\n}";
},"useData":true} }],
  ["go/framework/gin/internal/handler/handler.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package handler\n\nimport (\n	\"errors\"\n	\"net/http\"\n\n	\"github.com/gin-gonic/gin\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":18}}}) : helper)))
    + "/internal/service\"\n)\n\nconst maxBodyBytes = 1 << 20\n\ntype Handler struct {\n	items *service.ItemService\n}\n\nfunc NewHandler(items *service.ItemService) Handler {\n	return Handler{items: items}\n}\n\nfunc (h Handler) ListItems(c *gin.Context) {\n	items, err := h.items.ListItems(c.Request.Context())\n	if err != nil {\n		c.JSON(http.StatusInternalServerError, gin.H{\"error\": \"could not list items\"})\n		return\n	}\n	c.JSON(http.StatusOK, items)\n}\n\nfunc (h Handler) CreateItem(c *gin.Context) {\n	var body struct {\n		Name string `json:\"name\"`\n	}\n	c.Request.Body = http.MaxBytesReader(c.Writer, c.Request.Body, maxBodyBytes)\n	if err := c.ShouldBindJSON(&body); err != nil {\n		c.JSON(http.StatusBadRequest, gin.H{\"error\": \"invalid request body\"})\n		return\n	}\n	item, err := h.items.CreateItem(c.Request.Context(), body.Name)\n	if err != nil {\n		if errors.Is(err, service.ErrInvalidInput) {\n			c.JSON(http.StatusBadRequest, gin.H{\"error\": err.Error()})\n			return\n		}\n		c.JSON(http.StatusInternalServerError, gin.H{\"error\": \"could not create item\"})\n		return\n	}\n	c.JSON(http.StatusCreated, item)\n}";
},"useData":true} }],
  ["go/framework/none/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport \"fmt\"\n\nfunc main() {\n	fmt.Println(\"Hello from "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":6,"column":25},"end":{"line":6,"column":40}}}) : helper)))
    + "!\")\n}";
},"useData":true} }],
  ["go/framework/stdlib/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":16,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":11},"end":{"line":30,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":27},"end":{"line":30,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":30,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":34,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":15},"end":{"line":35,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":31},"end":{"line":35,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":35,"column":11},"end":{"line":35,"column":47}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":48},"end":{"line":35,"column":70}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":35,"column":71}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":39,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	h := handler.NewHandler(service.NewItemService(repo))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	if err := db.EnsureSchema(context.Background(), conn); err != nil {\n		log.Fatalf(\"schema bootstrap failed: %v\", err)\n	}\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "	mux.HandleFunc(\"GET /api/v1/items\", h.ListItems)\n	mux.HandleFunc(\"POST /api/v1/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":13,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":19,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc main() {\n	cfg := config.Load()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "")
    + "\n	mux := http.NewServeMux()\n	mux.HandleFunc(\"GET /health\", func(w http.ResponseWriter, r *http.Request) {\n		w.Header().Set(\"Content-Type\", \"application/json\")\n		w.WriteHeader(http.StatusOK)\n		_, _ = w.Write([]byte(`{\"status\":\"ok\"}`))\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":50,"column":6},"end":{"line":50,"column":21}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":0},"end":{"line":53,"column":7}}})) != null ? stack1 : "")
    + "\n	srv := &http.Server{\n		Addr:              \":\" + cfg.Port,\n		Handler:           mux,\n		ReadHeaderTimeout: 5 * time.Second,\n		ReadTimeout:       10 * time.Second,\n		WriteTimeout:      10 * time.Second,\n		IdleTimeout:       60 * time.Second,\n	}\n\n	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)\n	defer stop()\n\n	go func() {\n		log.Printf(\"%s listening on %s\", cfg.AppName, srv.Addr)\n		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {\n			log.Fatalf(\"server error: %v\", err)\n		}\n	}()\n\n	<-ctx.Done()\n\n	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n	defer cancel()\n	if err := srv.Shutdown(shutdownCtx); err != nil {\n		log.Fatalf(\"graceful shutdown failed: %v\", err)\n	}\n	log.Printf(\"server stopped\")\n}";
},"useData":true} }],
  ["go/framework/stdlib/internal/handler/handler.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package handler\n\nimport (\n	\"encoding/json\"\n	\"errors\"\n	\"net/http\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":8,"column":18}}}) : helper)))
    + "/internal/service\"\n)\n\nconst maxBodyBytes = 1 << 20\n\ntype Handler struct {\n	items *service.ItemService\n}\n\nfunc NewHandler(items *service.ItemService) Handler {\n	return Handler{items: items}\n}\n\nfunc (h Handler) ListItems(w http.ResponseWriter, r *http.Request) {\n	items, err := h.items.ListItems(r.Context())\n	if err != nil {\n		writeJSON(w, http.StatusInternalServerError, map[string]string{\"error\": \"could not list items\"})\n		return\n	}\n	writeJSON(w, http.StatusOK, items)\n}\n\nfunc (h Handler) CreateItem(w http.ResponseWriter, r *http.Request) {\n	var body struct {\n		Name string `json:\"name\"`\n	}\n	r.Body = http.MaxBytesReader(w, r.Body, maxBodyBytes)\n	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {\n		writeJSON(w, http.StatusBadRequest, map[string]string{\"error\": \"invalid request body\"})\n		return\n	}\n	item, err := h.items.CreateItem(r.Context(), body.Name)\n	if err != nil {\n		if errors.Is(err, service.ErrInvalidInput) {\n			writeJSON(w, http.StatusBadRequest, map[string]string{\"error\": err.Error()})\n			return\n		}\n		writeJSON(w, http.StatusInternalServerError, map[string]string{\"error\": \"could not create item\"})\n		return\n	}\n	writeJSON(w, http.StatusCreated, item)\n}\n\nfunc writeJSON(w http.ResponseWriter, status int, body any) {\n	w.Header().Set(\"Content-Type\", \"application/json\")\n	w.WriteHeader(status)\n	_ = json.NewEncoder(w).Encode(body)\n}";
},"useData":true} }],
  ["go/frontend/htmx/common/internal/web/static/css/style.css.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return ":root {\n    color-scheme: light dark;\n    --text: #1a1a1a;\n    --muted: #666;\n    --border: #d9d9d9;\n    --accent: #f6a510;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: system-ui, -apple-system, \"Segoe UI\", sans-serif;\n    margin: 0;\n    line-height: 1.5;\n    color: var(--text);\n}\n\nheader {\n    display: flex;\n    align-items: baseline;\n    gap: 1.5rem;\n    padding: 0.75rem 1.5rem;\n    border-bottom: 1px solid var(--border);\n}\n\nheader a {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 600;\n}\n\nheader a:hover {\n    color: var(--accent);\n}\n\nmain {\n    max-width: 56rem;\n    margin: 2rem auto;\n    padding: 0 1.5rem;\n}\n\ntable {\n    width: 100%;\n    border-collapse: collapse;\n}\n\nth,\ntd {\n    padding: 0.5rem 0.75rem;\n    text-align: left;\n    border-bottom: 1px solid var(--border);\n}\n\nbutton {\n    font: inherit;\n    padding: 0.3rem 0.9rem;\n    border: 1px solid var(--border);\n    border-radius: 6px;\n    background: transparent;\n    cursor: pointer;\n}\n\nbutton:hover {\n    border-color: var(--accent);\n    color: var(--accent);\n}\n\ncode {\n    padding: 0.1rem 0.35rem;\n    border-radius: 4px;\n    background: #f2f2f2;\n}\n\n@media (prefers-color-scheme: dark) {\n    :root {\n        --text: #e8e8e8;\n        --border: #333;\n    }\n\n    code {\n        background: #222;\n    }\n}";
},"useData":true} }],
  ["go/frontend/htmx/common/internal/web/templates/base.html.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "        <a href=\"/api/v1/items\">API</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "{{define \"base\"}}\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>{{block \"title\" .}}{{.AppName}}{{end}}</title>\n    <link rel=\"stylesheet\" href=\"/static/css/style.css\">\n    <script src=\"https://unpkg.com/htmx.org@2.0.10/dist/htmx.min.js\" integrity=\"sha384-H5SrcfygHmAuTDZphMHqBJLc3FhssKjG7w/CeCpFReSfwBWDTKpkzPP8c+cLsK+V\" crossorigin=\"anonymous\" defer></script>\n</head>\n<body>\n    <header>\n        <a href=\"/\">{{.AppName}}</a>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":16,"column":7}}})) != null ? stack1 : "")
    + "    </header>\n    <main>\n        {{template \"content\" .}}\n    </main>\n</body>\n</html>\n{{end}}";
},"useData":true} }],
  ["go/frontend/htmx/common/internal/web/templates/index.html.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "<section id=\"items\"\n         hx-get=\"/web/items\"\n         hx-trigger=\"load\"\n         hx-swap=\"innerHTML\">\n    <p>Loading items…</p>\n</section>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "{{define \"title\"}}{{.AppName}}{{end}}\n{{define \"content\"}}\n<h1>{{.AppName}}</h1>\n<p>A TriStack project with an HTMX-powered web frontend.</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":12,"column":7}}})) != null ? stack1 : "")
    + "{{end}}\n{{template \"base\" .}}";
},"useData":true} }],
  ["go/frontend/htmx/common/internal/web/templates/items.html.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{if .Items}}\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Created</th>\n        </tr>\n    </thead>\n    <tbody>\n        {{range .Items}}\n        <tr>\n            <td>{{.Name}}</td>\n            <td>{{.CreatedAt.Format \"2006-01-02 15:04\"}}</td>\n        </tr>\n        {{end}}\n    </tbody>\n</table>\n<button hx-get=\"/web/items\" hx-target=\"#items\" hx-swap=\"innerHTML\">Refresh</button>\n{{else}}\n<p>No items yet. Create one with <code>POST /api/v1/items</code>.</p>\n{{end}}";
},"useData":true} }],
  ["go/frontend/htmx/common/internal/web/web.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":11,"column":18}}}) : helper)))
    + "/internal/model\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":12,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "	items   *service.ItemService\n";
},"2":function(container,depth0,helpers,partials,data) {
    return ", items *service.ItemService";
},"3":function(container,depth0,helpers,partials,data) {
    return "		items:   items,\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "	mux.HandleFunc(\"GET /web/items\", w.renderItems)\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "\ntype itemsData struct {\n	Items []model.Item\n}\n\nfunc (w *Web) renderItems(wr http.ResponseWriter, r *http.Request) {\n	items, err := w.items.ListItems(r.Context())\n	if err != nil {\n		http.Error(wr, \"could not get items\", http.StatusInternalServerError)\n		return\n	}\n	if err := w.tmpl.ExecuteTemplate(wr, \"items.html\", itemsData{Items: items}); err != nil {\n		http.Error(wr, \"could not render items\", http.StatusInternalServerError)\n		return\n	}\n}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package web\n\nimport (\n	\"embed\"\n	\"fmt\"\n	\"html/template\"\n	\"io/fs\"\n	\"net/http\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":13,"column":7}}})) != null ? stack1 : "")
    + ")\n\n//go:embed templates static\nvar content embed.FS\n\ntype Web struct {\n	appName string\n	tmpl    *template.Template\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":22,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "")
    + "}\n\nfunc New(appName string"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":27,"column":29},"end":{"line":27,"column":44}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":23},"end":{"line":27,"column":81}}})) != null ? stack1 : "")
    + ") (*Web, error) {\n	tmpl, err := template.ParseFS(content, \"templates/*.html\")\n	if err != nil {\n		return nil, fmt.Errorf(\"parse web templates: %w\", err)\n	}\n	return &Web{\n		appName: appName,\n		tmpl:    tmpl,\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":35,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "")
    + "	}, nil\n}\n\nfunc (w *Web) Mux() *http.ServeMux {\n	mux := http.NewServeMux()\n	mux.HandleFunc(\"GET /{$}\", w.home)\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":44,"column":6},"end":{"line":44,"column":21}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":0},"end":{"line":46,"column":7}}})) != null ? stack1 : "")
    + "	mux.Handle(\"GET /static/\", http.StripPrefix(\"/static/\", Static()))\n	return mux\n}\n\nfunc Static() http.Handler {\n	sub, err := fs.Sub(content, \"static\")\n	if err != nil {\n		panic(fmt.Errorf(\"missing static assets: %w\", err))\n	}\n	return http.FileServer(http.FS(sub))\n}\n\ntype homeData struct {\n	AppName string\n}\n\nfunc (w *Web) home(wr http.ResponseWriter, r *http.Request) {\n	page := homeData{AppName: w.appName}\n	if err := w.tmpl.ExecuteTemplate(wr, \"index.html\", page); err != nil {\n		http.Error(wr, \"could not render home\", http.StatusInternalServerError)\n		return\n	}\n}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":70,"column":6},"end":{"line":70,"column":21}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":0},"end":{"line":87,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["go/frontend/htmx/framework/chi/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":19,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":20,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":11},"end":{"line":33,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":27},"end":{"line":33,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":33,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":15},"end":{"line":38,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":31},"end":{"line":38,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":38,"column":11},"end":{"line":38,"column":47}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":48},"end":{"line":38,"column":70}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":38,"column":6},"end":{"line":38,"column":71}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	items := service.NewItemService(repo)\n	h := handler.NewHandler(items)\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	if err := db.EnsureSchema(context.Background(), conn); err != nil {\n		log.Fatalf(\"schema bootstrap failed: %v\", err)\n	}\n";
},"4":function(container,depth0,helpers,partials,data) {
    return ", items";
},"5":function(container,depth0,helpers,partials,data) {
    return "	r.Get(\"/api/v1/items\", h.ListItems)\n	r.Post(\"/api/v1/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/go-chi/chi/v5\"\n\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":22,"column":18}}}) : helper)))
    + "/internal/web\"\n)\n\nfunc main() {\n	cfg := config.Load()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":27,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":46,"column":7}}})) != null ? stack1 : "")
    + "\n	webSrv, err := web.New(cfg.AppName"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":48,"column":41},"end":{"line":48,"column":56}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":35},"end":{"line":48,"column":72}}})) != null ? stack1 : "")
    + ")\n	if err != nil {\n		log.Fatalf(\"web templates: %v\", err)\n	}\n\n	r := chi.NewRouter()\n	r.Get(\"/health\", func(w http.ResponseWriter, r *http.Request) {\n		w.Header().Set(\"Content-Type\", \"application/json\")\n		w.WriteHeader(http.StatusOK)\n		_, _ = w.Write([]byte(`{\"status\":\"ok\"}`))\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":59,"column":6},"end":{"line":59,"column":21}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":0},"end":{"line":62,"column":7}}})) != null ? stack1 : "")
    + "	r.Mount(\"/\", webSrv.Mux())\n\n	srv := &http.Server{\n		Addr:              \":\" + cfg.Port,\n		Handler:           r,\n		ReadHeaderTimeout: 5 * time.Second,\n		ReadTimeout:       10 * time.Second,\n		WriteTimeout:      10 * time.Second,\n		IdleTimeout:       60 * time.Second,\n	}\n\n	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)\n	defer stop()\n\n	go func() {\n		log.Printf(\"%s listening on %s\", cfg.AppName, srv.Addr)\n		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {\n			log.Fatalf(\"server error: %v\", err)\n		}\n	}()\n\n	<-ctx.Done()\n\n	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n	defer cancel()\n	if err := srv.Shutdown(shutdownCtx); err != nil {\n		log.Fatalf(\"graceful shutdown failed: %v\", err)\n	}\n	log.Printf(\"server stopped\")\n}";
},"useData":true} }],
  ["go/frontend/htmx/framework/echo/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":19,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":20,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":11},"end":{"line":33,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":27},"end":{"line":33,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":33,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":15},"end":{"line":38,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":31},"end":{"line":38,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":38,"column":11},"end":{"line":38,"column":47}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":48},"end":{"line":38,"column":70}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":38,"column":6},"end":{"line":38,"column":71}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	items := service.NewItemService(repo)\n	h := handler.NewHandler(items)\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	if err := db.EnsureSchema(context.Background(), conn); err != nil {\n		log.Fatalf(\"schema bootstrap failed: %v\", err)\n	}\n";
},"4":function(container,depth0,helpers,partials,data) {
    return ", items";
},"5":function(container,depth0,helpers,partials,data) {
    return "	e.GET(\"/api/v1/items\", h.ListItems)\n	e.POST(\"/api/v1/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/labstack/echo/v4\"\n\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":22,"column":18}}}) : helper)))
    + "/internal/web\"\n)\n\nfunc main() {\n	cfg := config.Load()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":27,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":46,"column":7}}})) != null ? stack1 : "")
    + "\n	webSrv, err := web.New(cfg.AppName"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":48,"column":41},"end":{"line":48,"column":56}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":35},"end":{"line":48,"column":72}}})) != null ? stack1 : "")
    + ")\n	if err != nil {\n		log.Fatalf(\"web templates: %v\", err)\n	}\n\n	e := echo.New()\n	e.GET(\"/health\", func(c echo.Context) error {\n		return c.JSON(http.StatusOK, map[string]string{\"status\": \"ok\"})\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":57,"column":6},"end":{"line":57,"column":21}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":0},"end":{"line":60,"column":7}}})) != null ? stack1 : "")
    + "	e.GET(\"/*\", echo.WrapHandler(webSrv.Mux()))\n\n	addr := \":\" + cfg.Port\n	e.Server = &http.Server{\n		Handler:           e,\n		ReadHeaderTimeout: 5 * time.Second,\n		ReadTimeout:       10 * time.Second,\n		WriteTimeout:      10 * time.Second,\n		IdleTimeout:       60 * time.Second,\n	}\n\n	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)\n	defer stop()\n\n	go func() {\n		log.Printf(\"%s listening on %s\", cfg.AppName, addr)\n		if err := e.Start(addr); err != nil && !errors.Is(err, http.ErrServerClosed) {\n			log.Fatalf(\"server error: %v\", err)\n		}\n	}()\n\n	<-ctx.Done()\n\n	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n	defer cancel()\n	if err := e.Shutdown(shutdownCtx); err != nil {\n		log.Fatalf(\"graceful shutdown failed: %v\", err)\n	}\n	log.Printf(\"server stopped\")\n}";
},"useData":true} }],
  ["go/frontend/htmx/framework/fiber/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":16,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":19,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":11},"end":{"line":32,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":27},"end":{"line":32,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":32,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":0},"end":{"line":36,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":15},"end":{"line":37,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":31},"end":{"line":37,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":37,"column":11},"end":{"line":37,"column":47}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":48},"end":{"line":37,"column":70}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":71}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":41,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	items := service.NewItemService(repo)\n	h := handler.NewHandler(items)\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	if err := db.EnsureSchema(context.Background(), conn); err != nil {\n		log.Fatalf(\"schema bootstrap failed: %v\", err)\n	}\n";
},"4":function(container,depth0,helpers,partials,data) {
    return ", items";
},"5":function(container,depth0,helpers,partials,data) {
    return "	app.Get(\"/api/v1/items\", h.ListItems)\n	app.Post(\"/api/v1/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"log\"\n	\"os\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/gofiber/fiber/v2\"\n	\"github.com/gofiber/fiber/v2/middleware/adaptor\"\n\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":14,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":21,"column":2},"end":{"line":21,"column":18}}}) : helper)))
    + "/internal/web\"\n)\n\nfunc main() {\n	cfg := config.Load()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":45,"column":7}}})) != null ? stack1 : "")
    + "\n	webSrv, err := web.New(cfg.AppName"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":47,"column":41},"end":{"line":47,"column":56}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":35},"end":{"line":47,"column":72}}})) != null ? stack1 : "")
    + ")\n	if err != nil {\n		log.Fatalf(\"web templates: %v\", err)\n	}\n\n	app := fiber.New(fiber.Config{\n		ReadTimeout:  10 * time.Second,\n		WriteTimeout: 10 * time.Second,\n		IdleTimeout:  60 * time.Second,\n	})\n	app.Get(\"/health\", func(c *fiber.Ctx) error {\n		return c.JSON(fiber.Map{\"status\": \"ok\"})\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":60,"column":6},"end":{"line":60,"column":21}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":0},"end":{"line":63,"column":7}}})) != null ? stack1 : "")
    + "	app.Use(adaptor.HTTPHandler(webSrv.Mux()))\n\n	addr := \":\" + cfg.Port\n\n	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)\n	defer stop()\n\n	go func() {\n		log.Printf(\"%s listening on %s\", cfg.AppName, addr)\n		if err := app.Listen(addr); err != nil {\n			log.Fatalf(\"server error: %v\", err)\n		}\n	}()\n\n	<-ctx.Done()\n\n	if err := app.Shutdown(); err != nil {\n		log.Fatalf(\"graceful shutdown failed: %v\", err)\n	}\n	log.Printf(\"server stopped\")\n}";
},"useData":true} }],
  ["go/frontend/htmx/framework/gin/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":19,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":20,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":11},"end":{"line":33,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":27},"end":{"line":33,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":33,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":15},"end":{"line":38,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":31},"end":{"line":38,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":38,"column":11},"end":{"line":38,"column":47}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":48},"end":{"line":38,"column":70}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":38,"column":6},"end":{"line":38,"column":71}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	items := service.NewItemService(repo)\n	h := handler.NewHandler(items)\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	if err := db.EnsureSchema(context.Background(), conn); err != nil {\n		log.Fatalf(\"schema bootstrap failed: %v\", err)\n	}\n";
},"4":function(container,depth0,helpers,partials,data) {
    return ", items";
},"5":function(container,depth0,helpers,partials,data) {
    return "	r.GET(\"/api/v1/items\", h.ListItems)\n	r.POST(\"/api/v1/items\", h.CreateItem)\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "	r.GET(\"/web/items\", webHandler)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/gin-gonic/gin\"\n\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":22,"column":18}}}) : helper)))
    + "/internal/web\"\n)\n\nfunc main() {\n	cfg := config.Load()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":27,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":46,"column":7}}})) != null ? stack1 : "")
    + "\n	webSrv, err := web.New(cfg.AppName"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":48,"column":41},"end":{"line":48,"column":56}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":35},"end":{"line":48,"column":72}}})) != null ? stack1 : "")
    + ")\n	if err != nil {\n		log.Fatalf(\"web templates: %v\", err)\n	}\n\n	r := gin.Default()\n	r.GET(\"/health\", func(c *gin.Context) {\n		c.JSON(http.StatusOK, gin.H{\"status\": \"ok\"})\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":57,"column":6},"end":{"line":57,"column":21}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":0},"end":{"line":60,"column":7}}})) != null ? stack1 : "")
    + "	webHandler := gin.WrapH(webSrv.Mux())\n	r.GET(\"/\", webHandler)\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":63,"column":6},"end":{"line":63,"column":21}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":0},"end":{"line":65,"column":7}}})) != null ? stack1 : "")
    + "	r.GET(\"/static/*filepath\", webHandler)\n\n	srv := &http.Server{\n		Addr:              \":\" + cfg.Port,\n		Handler:           r,\n		ReadHeaderTimeout: 5 * time.Second,\n		ReadTimeout:       10 * time.Second,\n		WriteTimeout:      10 * time.Second,\n		IdleTimeout:       60 * time.Second,\n	}\n\n	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)\n	defer stop()\n\n	go func() {\n		log.Printf(\"%s listening on %s\", cfg.AppName, srv.Addr)\n		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {\n			log.Fatalf(\"server error: %v\", err)\n		}\n	}()\n\n	<-ctx.Done()\n\n	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n	defer cancel()\n	if err := srv.Shutdown(shutdownCtx); err != nil {\n		log.Fatalf(\"graceful shutdown failed: %v\", err)\n	}\n	log.Printf(\"server stopped\")\n}";
},"useData":true} }],
  ["go/frontend/htmx/framework/stdlib/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":16,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":11},"end":{"line":31,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":27},"end":{"line":31,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":31,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":15},"end":{"line":36,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":31},"end":{"line":36,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":36,"column":11},"end":{"line":36,"column":47}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":48},"end":{"line":36,"column":70}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":36,"column":6},"end":{"line":36,"column":71}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":40,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	items := service.NewItemService(repo)\n	h := handler.NewHandler(items)\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	if err := db.EnsureSchema(context.Background(), conn); err != nil {\n		log.Fatalf(\"schema bootstrap failed: %v\", err)\n	}\n";
},"4":function(container,depth0,helpers,partials,data) {
    return ", items";
},"5":function(container,depth0,helpers,partials,data) {
    return "	mux.HandleFunc(\"GET /api/v1/items\", h.ListItems)\n	mux.HandleFunc(\"POST /api/v1/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":13,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":19,"column":7}}})) != null ? stack1 : "")
    + "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":20,"column":18}}}) : helper)))
    + "/internal/web\"\n)\n\nfunc main() {\n	cfg := config.Load()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":44,"column":7}}})) != null ? stack1 : "")
    + "\n	webSrv, err := web.New(cfg.AppName"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":46,"column":41},"end":{"line":46,"column":56}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":35},"end":{"line":46,"column":72}}})) != null ? stack1 : "")
    + ")\n	if err != nil {\n		log.Fatalf(\"web templates: %v\", err)\n	}\n\n	mux := http.NewServeMux()\n	mux.HandleFunc(\"GET /health\", func(w http.ResponseWriter, r *http.Request) {\n		w.Header().Set(\"Content-Type\", \"application/json\")\n		w.WriteHeader(http.StatusOK)\n		_, _ = w.Write([]byte(`{\"status\":\"ok\"}`))\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":57,"column":6},"end":{"line":57,"column":21}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":0},"end":{"line":60,"column":7}}})) != null ? stack1 : "")
    + "	mux.Handle(\"GET /\", webSrv.Mux())\n\n	srv := &http.Server{\n		Addr:              \":\" + cfg.Port,\n		Handler:           mux,\n		ReadHeaderTimeout: 5 * time.Second,\n		ReadTimeout:       10 * time.Second,\n		WriteTimeout:      10 * time.Second,\n		IdleTimeout:       60 * time.Second,\n	}\n\n	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)\n	defer stop()\n\n	go func() {\n		log.Printf(\"%s listening on %s\", cfg.AppName, srv.Addr)\n		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {\n			log.Fatalf(\"server error: %v\", err)\n		}\n	}()\n\n	<-ctx.Done()\n\n	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n	defer cancel()\n	if err := srv.Shutdown(shutdownCtx); err != nil {\n		log.Fatalf(\"graceful shutdown failed: %v\", err)\n	}\n	log.Printf(\"server stopped\")\n}";
},"useData":true} }],
  ["go/migrations/golang-migrate/db/migrations/0001_create_items.down.sql.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "DROP TABLE items;";
},"useData":true} }],
  ["go/migrations/golang-migrate/db/migrations/0001_create_items.up.sql.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return ",\n    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "CREATE TABLE items (\n    id VARCHAR(36) PRIMARY KEY,\n    name TEXT NOT NULL,\n    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":4,"column":65},"end":{"line":4,"column":80}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":59},"end":{"line":5,"column":66}}})) != null ? stack1 : "")
    + "\n);";
},"useData":true} }],
  ["go/migrations/goose/migrations/0001_create_items.sql.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return ",\n    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "-- +goose Up\nCREATE TABLE items (\n    id VARCHAR(36) PRIMARY KEY,\n    name TEXT NOT NULL,\n    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":65},"end":{"line":5,"column":80}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":59},"end":{"line":6,"column":66}}})) != null ? stack1 : "")
    + "\n);\n\n-- +goose Down\nDROP TABLE items;";
},"useData":true} }],
  ["go/orm/gorm/internal/db/db.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "	\"github.com/glebarez/sqlite\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":34}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":17,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "	\"gorm.io/driver/postgres\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":15,"column":31}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":17,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "	\"gorm.io/driver/mysql\"\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":27,"column":9},"end":{"line":27,"column":25}}}) : helper)))
    + ".db\"\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":34}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":32,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":29,"column":53},"end":{"line":29,"column":69}}}) : helper)))
    + "\"\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":30,"column":31}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":32,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"root:password@tcp(localhost:3306)/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":31,"column":43},"end":{"line":31,"column":59}}}) : helper)))
    + "?parseTime=true\"\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "	db, err := gorm.Open(sqlite.Open(databaseURL()), config)\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":34}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":46,"column":0}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "	db, err := gorm.Open(postgres.Open(databaseURL()), config)\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":44,"column":10},"end":{"line":44,"column":31}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":0},"end":{"line":46,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "	db, err := gorm.Open(mysql.Open(databaseURL()), config)\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "	sqlDB.SetMaxOpenConns(1)\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "	sqlDB.SetMaxOpenConns(25)\n	sqlDB.SetMaxIdleConns(25)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package db\n\nimport (\n	\"fmt\"\n	\"os\"\n	\"time\"\n\n	\"gorm.io/gorm\"\n	\"gorm.io/gorm/logger\"\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + "\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":19,"column":18}}}) : helper)))
    + "/internal/model\"\n)\n\nfunc databaseURL() string {\n	if dsn := os.Getenv(\"DATABASE_URL\"); dsn != \"\" {\n		return dsn\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":28}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":32,"column":7}}})) != null ? stack1 : "")
    + "}\n\nfunc Connect() (*gorm.DB, error) {\n	config := &gorm.Config{\n		Logger:  logger.Default.LogMode(logger.Warn),\n		NowFunc: func() time.Time { return time.Now().UTC() },\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":40,"column":6},"end":{"line":40,"column":28}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":46,"column":7}}})) != null ? stack1 : "")
    + "	if err != nil {\n		return nil, fmt.Errorf(\"open database: %w\", err)\n	}\n\n	sqlDB, err := db.DB()\n	if err != nil {\n		return nil, fmt.Errorf(\"access connection pool: %w\", err)\n	}\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":56,"column":6},"end":{"line":56,"column":28}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":56,"column":0},"end":{"line":61,"column":7}}})) != null ? stack1 : "")
    + "	sqlDB.SetConnMaxLifetime(5 * time.Minute)\n\n	if err := sqlDB.Ping(); err != nil {\n		return nil, fmt.Errorf(\"ping database: %w\", err)\n	}\n\n	return db, nil\n}\n\nfunc AutoMigrate(db *gorm.DB) error {\n	return db.AutoMigrate(&model.Item{})\n}";
},"useData":true} }],
  ["go/orm/gorm/internal/model/item.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "package model\n\nimport \"time\"\n\ntype Item struct {\n	ID        string    `gorm:\"type:varchar(36);primaryKey\" json:\"id\"`\n	Name      string    `json:\"name\"`\n	CreatedAt time.Time `json:\"created_at\"`\n	UpdatedAt time.Time `json:\"updated_at\"`\n}";
},"useData":true} }],
  ["go/orm/gorm/internal/repository/item.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package repository\n\nimport (\n	\"context\"\n	\"fmt\"\n\n	\"gorm.io/gorm\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":18}}}) : helper)))
    + "/internal/model\"\n)\n\ntype ItemRepository interface {\n	Create(ctx context.Context, item *model.Item) error\n	List(ctx context.Context) ([]model.Item, error)\n}\n\ntype gormItemRepository struct {\n	db *gorm.DB\n}\n\nfunc NewItemRepository(db *gorm.DB) ItemRepository {\n	return &gormItemRepository{db: db}\n}\n\nfunc (r *gormItemRepository) Create(ctx context.Context, item *model.Item) error {\n	if err := r.db.WithContext(ctx).Create(item).Error; err != nil {\n		return fmt.Errorf(\"insert item: %w\", err)\n	}\n	return nil\n}\n\nfunc (r *gormItemRepository) List(ctx context.Context) ([]model.Item, error) {\n	var items []model.Item\n	if err := r.db.WithContext(ctx).Order(\"created_at DESC\").Find(&items).Error; err != nil {\n		return nil, fmt.Errorf(\"select items: %w\", err)\n	}\n	return items, nil\n}";
},"useData":true} }],
  ["go/orm/sqlc/internal/db/db.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "	_ \"modernc.org/sqlite\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":34}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":16,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "	_ \"github.com/jackc/pgx/v5/stdlib\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":31}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":16,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "	_ \"github.com/go-sql-driver/mysql\"\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":24,"column":9},"end":{"line":24,"column":25}}}) : helper)))
    + ".db\"\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":10},"end":{"line":25,"column":34}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":29,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":26,"column":53},"end":{"line":26,"column":69}}}) : helper)))
    + "\"\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":31}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":29,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"root:password@tcp(localhost:3306)/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":28,"column":43},"end":{"line":28,"column":59}}}) : helper)))
    + "?parseTime=true\"\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "	db, err := sql.Open(\"sqlite\", databaseURL())\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":34}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":39,"column":0}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "	db, err := sql.Open(\"pgx\", databaseURL())\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":37,"column":31}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":39,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "	db, err := sql.Open(\"mysql\", databaseURL())\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "	db.SetMaxOpenConns(1)\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "	db.SetMaxOpenConns(25)\n	db.SetMaxIdleConns(25)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package db\n\nimport (\n	\"context\"\n	\"database/sql\"\n	\"fmt\"\n	\"os\"\n	\"time\"\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":16,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc databaseURL() string {\n	if dsn := os.Getenv(\"DATABASE_URL\"); dsn != \"\" {\n		return dsn\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":23,"column":28}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "")
    + "}\n\nfunc Connect() (*sql.DB, error) {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":33,"column":28}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":39,"column":7}}})) != null ? stack1 : "")
    + "	if err != nil {\n		return nil, fmt.Errorf(\"open database: %w\", err)\n	}\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":44,"column":6},"end":{"line":44,"column":28}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":44,"column":0},"end":{"line":49,"column":7}}})) != null ? stack1 : "")
    + "	db.SetConnMaxLifetime(5 * time.Minute)\n\n	if err := db.Ping(); err != nil {\n		return nil, fmt.Errorf(\"ping database: %w\", err)\n	}\n\n	return db, nil\n}\n\nfunc EnsureSchema(ctx context.Context, conn *sql.DB) error {\n	_, err := conn.ExecContext(ctx, `CREATE TABLE IF NOT EXISTS items (\n    id VARCHAR(36) PRIMARY KEY,\n    name TEXT NOT NULL,\n    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP\n);`)\n	if err != nil {\n		return fmt.Errorf(\"create items table: %w\", err)\n	}\n	return nil\n}";
},"useData":true} }],
  ["go/orm/sqlc/internal/model/item.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "package model\n\nimport \"time\"\n\ntype Item struct {\n	ID        string    `json:\"id\"`\n	Name      string    `json:\"name\"`\n	CreatedAt time.Time `json:\"created_at\"`\n}";
},"useData":true} }],
  ["go/orm/sqlc/internal/repository/item.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package repository\n\nimport (\n	\"context\"\n	\"database/sql\"\n	\"fmt\"\n\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":8,"column":18}}}) : helper)))
    + "/internal/db/sqlc\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":18}}}) : helper)))
    + "/internal/model\"\n)\n\ntype ItemRepository interface {\n	Create(ctx context.Context, item *model.Item) error\n	List(ctx context.Context) ([]model.Item, error)\n}\n\ntype sqlcItemRepository struct {\n	q *sqlc.Queries\n}\n\nfunc NewItemRepository(db *sql.DB) ItemRepository {\n	return &sqlcItemRepository{q: sqlc.New(db)}\n}\n\nfunc (r *sqlcItemRepository) Create(ctx context.Context, item *model.Item) error {\n	if err := r.q.CreateItem(ctx, sqlc.CreateItemParams{\n		ID:        item.ID,\n		Name:      item.Name,\n		CreatedAt: item.CreatedAt,\n	}); err != nil {\n		return fmt.Errorf(\"insert item: %w\", err)\n	}\n	return nil\n}\n\nfunc (r *sqlcItemRepository) List(ctx context.Context) ([]model.Item, error) {\n	rows, err := r.q.ListItems(ctx)\n	if err != nil {\n		return nil, fmt.Errorf(\"select items: %w\", err)\n	}\n	items := make([]model.Item, 0, len(rows))\n	for _, row := range rows {\n		items = append(items, model.Item{\n			ID:        row.ID,\n			Name:      row.Name,\n			CreatedAt: row.CreatedAt,\n		})\n	}\n	return items, nil\n}";
},"useData":true} }],
  ["go/orm/sqlc/queries/items.sql.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "$1, $2, $3";
},"1":function(container,depth0,helpers,partials,data) {
    return "?, ?, ?";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "-- name: ListItems :many\nSELECT id, name, created_at FROM items ORDER BY created_at DESC;\n\n-- name: CreateItem :exec\nINSERT INTO items (id, name, created_at)\nVALUES ("
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":6,"column":14},"end":{"line":6,"column":38}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":72}}})) != null ? stack1 : "")
    + ");";
},"useData":true} }],
  ["go/orm/sqlc/schema/schema.sql.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "CREATE TABLE items (\n    id         VARCHAR(36) NOT NULL,\n    name       TEXT      NOT NULL,\n    created_at TIMESTAMP NOT NULL,\n    PRIMARY KEY (id)\n);";
},"useData":true} }],
  ["go/orm/sqlc/sqlc.yaml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "postgresql";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":3,"column":65},"end":{"line":3,"column":86}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":55},"end":{"line":3,"column":107}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "mysql";
},"3":function(container,depth0,helpers,partials,data) {
    return "sqlite";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "version: \"2\"\nsql:\n  - engine: \""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":3,"column":19},"end":{"line":3,"column":43}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":3,"column":13},"end":{"line":3,"column":114}}})) != null ? stack1 : "")
    + "\"\n    queries: \"queries\"\n    schema: \"schema\"\n    gen:\n      go:\n        package: \"sqlc\"\n        out: \"internal/db/sqlc\"\n        sql_package: \"database/sql\"\n        emit_json_tags: true\n        emit_prepared_queries: true\n";
},"useData":true} }],
  ["go/orm/sqlx/internal/db/db.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "	_ \"modernc.org/sqlite\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":34}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":17,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "	_ \"github.com/jackc/pgx/v5/stdlib\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":15,"column":31}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":17,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "	_ \"github.com/go-sql-driver/mysql\"\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":25,"column":9},"end":{"line":25,"column":25}}}) : helper)))
    + ".db\"\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":34}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":30,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":27,"column":53},"end":{"line":27,"column":69}}}) : helper)))
    + "\"\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":31}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":30,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"root:password@tcp(localhost:3306)/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":29,"column":43},"end":{"line":29,"column":59}}}) : helper)))
    + "?parseTime=true\"\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "	db, err := sqlx.Open(\"sqlite\", databaseURL())\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":36,"column":34}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":40,"column":0}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "	db, err := sqlx.Open(\"pgx\", databaseURL())\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":10},"end":{"line":38,"column":31}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":40,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "	db, err := sqlx.Open(\"mysql\", databaseURL())\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "	db.SetMaxOpenConns(1)\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "	db.SetMaxOpenConns(25)\n	db.SetMaxIdleConns(25)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package db\n\nimport (\n	\"context\"\n	\"fmt\"\n	\"os\"\n	\"time\"\n\n	\"github.com/jmoiron/sqlx\"\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc databaseURL() string {\n	if dsn := os.Getenv(\"DATABASE_URL\"); dsn != \"\" {\n		return dsn\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":28}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + "}\n\nfunc Connect() (*sqlx.DB, error) {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":34,"column":28}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":34,"column":0},"end":{"line":40,"column":7}}})) != null ? stack1 : "")
    + "	if err != nil {\n		return nil, fmt.Errorf(\"open database: %w\", err)\n	}\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":45,"column":6},"end":{"line":45,"column":28}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "")
    + "	db.SetConnMaxLifetime(5 * time.Minute)\n\n	if err := db.Ping(); err != nil {\n		return nil, fmt.Errorf(\"ping database: %w\", err)\n	}\n\n	return db, nil\n}\n\nfunc EnsureSchema(ctx context.Context, conn *sqlx.DB) error {\n	_, err := conn.ExecContext(ctx, `CREATE TABLE IF NOT EXISTS items (\n    id VARCHAR(36) PRIMARY KEY,\n    name TEXT NOT NULL,\n    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP\n);`)\n	if err != nil {\n		return fmt.Errorf(\"create items table: %w\", err)\n	}\n	return nil\n}";
},"useData":true} }],
  ["go/orm/sqlx/internal/model/item.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "package model\n\nimport \"time\"\n\ntype Item struct {\n	ID        string    `db:\"id\" json:\"id\"`\n	Name      string    `db:\"name\" json:\"name\"`\n	CreatedAt time.Time `db:\"created_at\" json:\"created_at\"`\n}";
},"useData":true} }],
  ["go/orm/sqlx/internal/repository/item.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package repository\n\nimport (\n	\"context\"\n	\"fmt\"\n\n	\"github.com/jmoiron/sqlx\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":18}}}) : helper)))
    + "/internal/model\"\n)\n\ntype ItemRepository interface {\n	Create(ctx context.Context, item *model.Item) error\n	List(ctx context.Context) ([]model.Item, error)\n}\n\ntype sqlxItemRepository struct {\n	db *sqlx.DB\n}\n\nfunc NewItemRepository(db *sqlx.DB) ItemRepository {\n	return &sqlxItemRepository{db: db}\n}\n\nfunc (r *sqlxItemRepository) Create(ctx context.Context, item *model.Item) error {\n	if _, err := r.db.ExecContext(ctx, r.db.Rebind(\"INSERT INTO items (id, name, created_at) VALUES (?, ?, ?)\"),\n		item.ID, item.Name, item.CreatedAt); err != nil {\n		return fmt.Errorf(\"insert item: %w\", err)\n	}\n	return nil\n}\n\nfunc (r *sqlxItemRepository) List(ctx context.Context) ([]model.Item, error) {\n	var items []model.Item\n	if err := r.db.SelectContext(ctx, &items, r.db.Rebind(\"SELECT id, name, created_at FROM items ORDER BY created_at DESC\")); err != nil {\n		return nil, fmt.Errorf(\"select items: %w\", err)\n	}\n	return items, nil\n}";
},"useData":true} }],
  ["python/addons/docker/_dockerignore", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return ".git\n.gitignore\n.venv\nvenv\n__pycache__\n*.pyc\n.pytest_cache\n.mypy_cache\n.ruff_cache\n.env\n.env*.local\nDockerfile\n.dockerignore\n*.db\n*.sqlite3\n";
},"useData":true} }],
  ["python/addons/docker/docker-compose.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "    ports:\n      - \"8000:8000\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    environment:\n      DJANGO_SECRET_KEY: change-me\n      ALLOWED_HOSTS: localhost,127.0.0.1\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":35},"end":{"line":12,"column":56}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":57}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "      DB_HOST: db\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":15,"column":34}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":21,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    environment:\n      DATABASE_URL: "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":26},"end":{"line":17,"column":45}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":17,"column":88}}})) != null ? stack1 : "")
    + "://postgres:postgres@db:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":117},"end":{"line":17,"column":133}}}) : helper)))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "postgres";
},"6":function(container,depth0,helpers,partials,data) {
    return "postgresql+asyncpg";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":31}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":21,"column":0}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    environment:\n      DATABASE_URL: "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":26},"end":{"line":20,"column":45}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":80}}})) != null ? stack1 : "")
    + "://root:password@db:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":105},"end":{"line":20,"column":121}}}) : helper)))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "mysql";
},"10":function(container,depth0,helpers,partials,data) {
    return "mysql+asyncmy";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    depends_on:\n      - db\n\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_DB: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":31,"column":19},"end":{"line":31,"column":35}}}) : helper)))
    + "\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\nvolumes:\n  pgdata:\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":39,"column":10},"end":{"line":39,"column":31}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":0},"end":{"line":55,"column":0}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    depends_on:\n      - db\n\n  db:\n    image: mysql:8\n    environment:\n      MYSQL_ROOT_PASSWORD: password\n      MYSQL_DATABASE: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":47,"column":22},"end":{"line":47,"column":38}}}) : helper)))
    + "\n    ports:\n      - \"3306:3306\"\n    volumes:\n      - mysqldata:/var/lib/mysql\n\nvolumes:\n  mysqldata:\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "services:\n  app:\n    build: .\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":27}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":29}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":22,"column":30}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":55,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/addons/docker/Dockerfile.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "COPY --from=ghcr.io/astral-sh/uv:0.12 /uv /bin/uv\nCOPY pyproject.toml uv.lock* ./\nRUN uv sync --no-dev --no-install-project\nENV PATH=\"/app/.venv/bin:$PATH\"\n\nCOPY . .\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "COPY . .\nRUN pip install --no-cache-dir .\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "CMD [\"python\", \"-m\", \"src.main\"]\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "EXPOSE 8000\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fastapi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":29,"column":30}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "CMD [\"uvicorn\", \"src.main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":10},"end":{"line":31,"column":35}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":37,"column":0}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":33,"column":32}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":37,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "CMD [\"flask\", \"--app\", \"src.main\", \"run\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":33}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":37,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "CMD [\"gunicorn\", \"config.wsgi\", \"--bind\", \"0.0.0.0:8000\"]\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "FROM python:3.12-slim\n\nENV PYTHONDONTWRITEBYTECODE=1 \\\n    PYTHONUNBUFFERED=1 \\\n    PYTHONPATH=/app\n\nWORKDIR /app\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"packageManager") : depth0),"uv",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":30}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":19,"column":7}}})) != null ? stack1 : "")
    + "\nRUN useradd --create-home app && chown -R app:app /app\nUSER app\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":27}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":38,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/addons/github-actions/.github/workflows/ci.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "      - uses: astral-sh/setup-uv@v5\n      - name: Install dependencies\n        run: uv sync\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"packageManager") : depth0),"poetry",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":10},"end":{"line":20,"column":38}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":20,"column":0},"end":{"line":28,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "      - name: Install Poetry\n        run: pipx install poetry\n      - name: Install dependencies\n        run: poetry install\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      - name: Install dependencies\n        run: pip install -e \".[dev]\"\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      - name: Lint\n        run: "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"packageManager") : depth0),"uv",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":19},"end":{"line":31,"column":43}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":31,"column":13},"end":{"line":31,"column":110}}})) != null ? stack1 : "")
    + "ruff check .\n      - name: Format check\n        run: "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"packageManager") : depth0),"uv",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":19},"end":{"line":33,"column":43}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":33,"column":13},"end":{"line":33,"column":110}}})) != null ? stack1 : "")
    + "ruff format --check .\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "uv run ";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"packageManager") : depth0),"poetry",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":62},"end":{"line":31,"column":90}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":52},"end":{"line":31,"column":103}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "poetry run ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      - name: Type check\n        run: "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"packageManager") : depth0),"uv",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":19},"end":{"line":37,"column":43}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":37,"column":13},"end":{"line":37,"column":110}}})) != null ? stack1 : "")
    + "mypy .\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      - name: Test\n        run: "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"packageManager") : depth0),"uv",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":41,"column":19},"end":{"line":41,"column":43}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":41,"column":13},"end":{"line":41,"column":110}}})) != null ? stack1 : "")
    + "pytest\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: \"3.12\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"packageManager") : depth0),"uv",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":30}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":28,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"ruff",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":29,"column":30}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":34,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"mypy",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":35,"column":30}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":38,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"pytest",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":39,"column":6},"end":{"line":39,"column":32}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/addons/mypy/mypy.ini.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "plugins = mypy_django_plugin.main, mypy_drf_plugin.main\n\n[mypy.plugins.django-stubs]\ndjango_settings_module = config.settings.development\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "plugins = pydantic.mypy\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[mypy]\npython_version = 3.12\nstrict = True\nwarn_unused_configs = True\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":29}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":12,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/addons/pytest/tests/test_health.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from fastapi.testclient import TestClient\n\nfrom src.main import app\n\n\ndef test_health() -> None:\n    response = TestClient(app).get(\"/health\")\n    assert response.status_code == 200\n    assert response.json() == {\"status\": \"ok\"}\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":35}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":52,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "from litestar.testing import TestClient\n\nfrom src.main import app\n\n\ndef test_health() -> None:\n    response = TestClient(app).get(\"/health\")\n    assert response.status_code == 200\n    assert response.json() == {\"status\": \"ok\"}\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":32}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":52,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "from src.main import app\n\n\ndef test_health() -> None:\n    response = app.test_client().get(\"/health\")\n    assert response.status_code == 200\n    assert response.get_json() == {\"status\": \"ok\"}\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":33}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":52,"column":0}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "import os\n\nimport django\nfrom django.test import Client\n\nos.environ.setdefault(\"DJANGO_SETTINGS_MODULE\", \"config.settings.development\")\ndjango.setup()\n\n\ndef test_health() -> None:\n    response = Client().get(\"/api/health/\")\n    assert response.status_code == 200\n    assert response.json() == {\"status\": \"ok\"}\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "import pytest\n\nfrom src.main import main\n\n\ndef test_main(capsys: pytest.CaptureFixture[str]) -> None:\n    main()\n    assert \"Hello from\" in capsys.readouterr().out\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fastapi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":30}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":52,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/addons/ruff/ruff.toml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "\n[lint.per-file-ignores]\n\"config/settings/*.py\" = [\"F403\", \"F405\"]\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "line-length = 100\ntarget-version = \"py312\"\n\n[lint]\nselect = [\"E\", \"F\", \"I\", \"UP\", \"B\"]\nignore = []\n\n[lint.isort]\nknown-first-party = [\"src\"]\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":29}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/base/env.example.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DJANGO_SECRET_KEY=django-insecure-change-me\nALLOWED_HOSTS=localhost,127.0.0.1\nCORS_ALLOWED_ORIGINS=http://localhost:3000\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":30}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DB_NAME="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":24}}}) : helper)))
    + "\nDB_USER=postgres\nDB_PASSWORD=postgres\nDB_HOST=localhost\nDB_PORT=5432\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":31}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":17,"column":0}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DB_NAME="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":24}}}) : helper)))
    + "\nDB_USER=root\nDB_PASSWORD=password\nDB_HOST=localhost\nDB_PORT=3306\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "APP_NAME="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":19,"column":9},"end":{"line":19,"column":24}}}) : helper)))
    + "\nDEBUG=false\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":22,"column":26}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":28,"column":7}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":23,"column":25}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DATABASE_URL="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":19},"end":{"line":24,"column":41}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":24,"column":13},"end":{"line":24,"column":262}}})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "sqlite://./"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":24,"column":54},"end":{"line":24,"column":70}}}) : helper)))
    + ".db";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":83},"end":{"line":24,"column":107}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":24,"column":73},"end":{"line":24,"column":255}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":24,"column":153},"end":{"line":24,"column":169}}}) : helper)));
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":179},"end":{"line":24,"column":200}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":169},"end":{"line":24,"column":255}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":24,"column":239},"end":{"line":24,"column":255}}}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DATABASE_URL="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":19},"end":{"line":26,"column":41}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":26,"column":13},"end":{"line":26,"column":291}}})) != null ? stack1 : "")
    + "\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "sqlite+aiosqlite:///./"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":26,"column":65},"end":{"line":26,"column":81}}}) : helper)))
    + ".db";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":94},"end":{"line":26,"column":118}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":26,"column":84},"end":{"line":26,"column":284}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "postgresql+asyncpg://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":26,"column":174},"end":{"line":26,"column":190}}}) : helper)));
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":200},"end":{"line":26,"column":221}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":190},"end":{"line":26,"column":284}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "mysql+asyncmy://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":26,"column":268},"end":{"line":26,"column":284}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":29}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/base/pyproject-pip.toml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":4,"column":44},"end":{"line":4,"column":59}}}) : helper)))
    + "\"";
},"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\""
    + alias4(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":4,"column":69},"end":{"line":4,"column":84}}}) : helper)))
    + " - a "
    + alias4(((helper = (helper = lookupProperty(helpers,"framework") || (depth0 != null ? lookupProperty(depth0,"framework") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"framework","hash":{},"data":data,"loc":{"start":{"line":4,"column":89},"end":{"line":4,"column":102}}}) : helper)))
    + " project\"";
},"2":function(container,depth0,helpers,partials,data) {
    return "    \"pydantic-settings\",\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    \"fastapi\",\n    \"uvicorn[standard]\",\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":35}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":30}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":74}}})) != null ? stack1 : "")
    + ",\n    \"uvicorn[standard]\",\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "\"litestar[jinja]\"";
},"7":function(container,depth0,helpers,partials,data) {
    return "\"litestar\"";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":16,"column":33}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "    \"django\",\n    \"djangorestframework\",\n    \"django-cors-headers\",\n    \"gunicorn\",\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":32}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "    \"flask[async]\",\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "    \"psycopg[binary]\",\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":33}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":34,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":29}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":34,"column":0}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "    \"sqlmodel\",\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlalchemy",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":31}}}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":34,"column":0}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    return "    \"sqlalchemy[asyncio]\",\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":10},"end":{"line":31,"column":29}}}),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":34,"column":0}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "    \"tortoise-orm\",\n    \"tzdata\",\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "    \"jinja2\",\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "    \"alembic\",\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "    \"asyncpg\",\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":43,"column":15},"end":{"line":43,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":43,"column":39},"end":{"line":43,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":43,"column":10},"end":{"line":43,"column":61}}}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(26, data, 0),"data":data,"loc":{"start":{"line":43,"column":0},"end":{"line":49,"column":0}}})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    return "    \"asyncmy\",\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":45,"column":15},"end":{"line":45,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":45,"column":39},"end":{"line":45,"column":61}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":45,"column":10},"end":{"line":45,"column":62}}}),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(28, data, 0),"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":49,"column":0}}})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    return "    \"aiosqlite\",\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":47,"column":15},"end":{"line":47,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":47,"column":39},"end":{"line":47,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":61}}}),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":0},"end":{"line":49,"column":0}}})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    return "    \"mysqlclient\",\n";
},"30":function(container,depth0,helpers,partials,data) {
    return "    \"ruff\",\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    \"mypy\",\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":59,"column":6},"end":{"line":59,"column":29}}}),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":0},"end":{"line":62,"column":7}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    return "    \"django-stubs[compatible-mypy]\",\n    \"djangorestframework-stubs[compatible-mypy]\",\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "    \"pytest\",\n    \"httpx\",\n";
},"34":function(container,depth0,helpers,partials,data) {
    return "[tool.hatch.build.targets.wheel]\npackages = [\"config\", \"apps\"]\n\n[tool.hatch.build.targets.wheel.force-include]\ntemplates = \"templates\"\nstatic = \"static\"\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "[tool.hatch.build.targets.wheel]\npackages = [\"src\"]\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[project]\nname = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":24}}}) : helper)))
    + "\"\nversion = \"0.1.0\"\ndescription = "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":4,"column":20},"end":{"line":4,"column":41}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":118}}})) != null ? stack1 : "")
    + "\nrequires-python = \">=3.12\"\ndependencies = [\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":29}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fastapi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":30}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":11},"end":{"line":24,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":35},"end":{"line":24,"column":59}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":60}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":34,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":35,"column":11},"end":{"line":35,"column":34}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":35,"column":35},"end":{"line":35,"column":57}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":58},"end":{"line":35,"column":78}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":35,"column":79}}}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"alembic",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":6},"end":{"line":38,"column":31}}}),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":40,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":41,"column":11},"end":{"line":41,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":41,"column":35},"end":{"line":41,"column":59}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":41,"column":6},"end":{"line":41,"column":60}}}),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":41,"column":0},"end":{"line":49,"column":7}}})) != null ? stack1 : "")
    + "]\n\n[project.optional-dependencies]\ndev = [\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"ruff",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":54,"column":6},"end":{"line":54,"column":30}}}),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"mypy",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":57,"column":6},"end":{"line":57,"column":30}}}),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":0},"end":{"line":63,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"pytest",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":64,"column":6},"end":{"line":64,"column":32}}}),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":0},"end":{"line":67,"column":7}}})) != null ? stack1 : "")
    + "]\n\n[build-system]\nrequires = [\"hatchling\"]\nbuild-backend = \"hatchling.build\"\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":74,"column":6},"end":{"line":74,"column":29}}}),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.program(35, data, 0),"data":data,"loc":{"start":{"line":74,"column":0},"end":{"line":84,"column":7}}})) != null ? stack1 : "")
    + "\n[tool.pytest.ini_options]\npythonpath = [\".\"]";
},"useData":true} }],
  ["python/base/pyproject-poetry.toml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":4,"column":44},"end":{"line":4,"column":59}}}) : helper)))
    + "\"";
},"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\""
    + alias4(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":4,"column":69},"end":{"line":4,"column":84}}}) : helper)))
    + " - a "
    + alias4(((helper = (helper = lookupProperty(helpers,"framework") || (depth0 != null ? lookupProperty(depth0,"framework") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"framework","hash":{},"data":data,"loc":{"start":{"line":4,"column":89},"end":{"line":4,"column":102}}}) : helper)))
    + " project\"";
},"2":function(container,depth0,helpers,partials,data) {
    return "packages = [\n    { include = \"config\" },\n    { include = \"apps\" },\n    { include = \"templates\" },\n    { include = \"static\" },\n]\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "packages = [{ include = \"src\" }]\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "pydantic-settings = \"^2.7\"\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "fastapi = \"^0.115\"\nuvicorn = { extras = [\"standard\"], version = \"^0.34\" }\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":10},"end":{"line":25,"column":35}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":39,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":26}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + "uvicorn = { extras = [\"standard\"], version = \"^0.34\" }\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "litestar = { extras = [\"jinja\"], version = \"^2.23\" }\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "litestar = \"^2.23\"\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":10},"end":{"line":32,"column":33}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":32,"column":0},"end":{"line":39,"column":0}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "django = \"^5.1\"\ndjangorestframework = \"^3.15\"\ndjango-cors-headers = \"^4.6\"\ngunicorn = \"^23.0\"\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":37,"column":32}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":39,"column":0}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return "flask = { extras = [\"async\"], version = \"^3.1\" }\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "psycopg = { extras = [\"binary\"], version = \"^3.2\" }\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":33}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":50,"column":0}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":43,"column":10},"end":{"line":43,"column":29}}}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":43,"column":0},"end":{"line":50,"column":0}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    return "sqlmodel = \">=0.0.27,<0.1\"\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlalchemy",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":45,"column":10},"end":{"line":45,"column":31}}}),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":50,"column":0}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "sqlalchemy = { extras = [\"asyncio\"], version = \"^2.0\" }\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":29}}}),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":0},"end":{"line":50,"column":0}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    return "tortoise-orm = \"^1.1\"\ntzdata = \"^2025.2\"\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "jinja2 = \"^3.1\"\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "alembic = \"^1.14\"\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "asyncpg = \"^0.30\"\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":59,"column":15},"end":{"line":59,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":59,"column":39},"end":{"line":59,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":59,"column":10},"end":{"line":59,"column":61}}}),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(28, data, 0),"data":data,"loc":{"start":{"line":59,"column":0},"end":{"line":65,"column":0}}})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    return "asyncmy = \"^0.2\"\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":61,"column":15},"end":{"line":61,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":61,"column":39},"end":{"line":61,"column":61}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":61,"column":10},"end":{"line":61,"column":62}}}),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(30, data, 0),"data":data,"loc":{"start":{"line":61,"column":0},"end":{"line":65,"column":0}}})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    return "aiosqlite = \"^0.20\"\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":63,"column":15},"end":{"line":63,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":63,"column":39},"end":{"line":63,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":63,"column":10},"end":{"line":63,"column":61}}}),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":0},"end":{"line":65,"column":0}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    return "mysqlclient = \"^2.2\"\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[tool.poetry.group.dev.dependencies]\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"ruff",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":69,"column":6},"end":{"line":69,"column":30}}}),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":0},"end":{"line":71,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"mypy",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":72,"column":6},"end":{"line":72,"column":30}}}),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":0},"end":{"line":79,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"pytest",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":80,"column":6},"end":{"line":80,"column":32}}}),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":0},"end":{"line":83,"column":7}}})) != null ? stack1 : "")
    + "\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "ruff = \"^0.16\"\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":73,"column":6},"end":{"line":73,"column":29}}}),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(36, data, 0),"data":data,"loc":{"start":{"line":73,"column":0},"end":{"line":78,"column":7}}})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    return "django-stubs = { extras = [\"compatible-mypy\"], version = \"^6.1\" }\ndjangorestframework-stubs = { extras = [\"compatible-mypy\"], version = \"^3.18\" }\n";
},"36":function(container,depth0,helpers,partials,data) {
    return "mypy = \"^2.4\"\n";
},"37":function(container,depth0,helpers,partials,data) {
    return "pytest = \"^9.1\"\nhttpx = \"^0.28\"\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[tool.poetry]\nname = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":24}}}) : helper)))
    + "\"\nversion = \"0.1.0\"\ndescription = "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":4,"column":20},"end":{"line":4,"column":41}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":118}}})) != null ? stack1 : "")
    + "\nauthors = []\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":29}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "")
    + "\n[tool.poetry.dependencies]\npython = \">=3.12,<4.0\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":29}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fastapi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":22,"column":30}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":39,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":40,"column":11},"end":{"line":40,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":40,"column":35},"end":{"line":40,"column":59}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":40,"column":6},"end":{"line":40,"column":60}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":51,"column":11},"end":{"line":51,"column":34}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":51,"column":35},"end":{"line":51,"column":57}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":51,"column":58},"end":{"line":51,"column":78}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":51,"column":6},"end":{"line":51,"column":79}}}),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":0},"end":{"line":53,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"alembic",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":54,"column":6},"end":{"line":54,"column":31}}}),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":57,"column":11},"end":{"line":57,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":57,"column":35},"end":{"line":57,"column":59}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":57,"column":6},"end":{"line":57,"column":60}}}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(26, data, 0),"data":data,"loc":{"start":{"line":57,"column":0},"end":{"line":65,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"ruff",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":67,"column":10},"end":{"line":67,"column":34}}}),(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"mypy",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":67,"column":35},"end":{"line":67,"column":59}}}),(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"pytest",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":67,"column":60},"end":{"line":67,"column":86}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":67,"column":6},"end":{"line":67,"column":87}}}),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":0},"end":{"line":85,"column":7}}})) != null ? stack1 : "")
    + "[build-system]\nrequires = [\"poetry-core\"]\nbuild-backend = \"poetry.core.masonry.api\"\n\n[tool.pytest.ini_options]\npythonpath = [\".\"]\n";
},"useData":true} }],
  ["python/base/pyproject-uv.toml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":4,"column":44},"end":{"line":4,"column":59}}}) : helper)))
    + "\"";
},"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\""
    + alias4(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":4,"column":69},"end":{"line":4,"column":84}}}) : helper)))
    + " - a "
    + alias4(((helper = (helper = lookupProperty(helpers,"framework") || (depth0 != null ? lookupProperty(depth0,"framework") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"framework","hash":{},"data":data,"loc":{"start":{"line":4,"column":89},"end":{"line":4,"column":102}}}) : helper)))
    + " project\"";
},"2":function(container,depth0,helpers,partials,data) {
    return "    \"pydantic-settings\",\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    \"fastapi\",\n    \"uvicorn[standard]\",\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":35}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":30}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":74}}})) != null ? stack1 : "")
    + ",\n    \"uvicorn[standard]\",\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "\"litestar[jinja]\"";
},"7":function(container,depth0,helpers,partials,data) {
    return "\"litestar\"";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":16,"column":33}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "    \"django\",\n    \"djangorestframework\",\n    \"django-cors-headers\",\n    \"gunicorn\",\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":32}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "    \"flask[async]\",\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "    \"psycopg[binary]\",\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":33}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":34,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":29}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":34,"column":0}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "    \"sqlmodel\",\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlalchemy",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":31}}}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":34,"column":0}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    return "    \"sqlalchemy[asyncio]\",\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":10},"end":{"line":31,"column":29}}}),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":34,"column":0}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "    \"tortoise-orm\",\n    \"tzdata\",\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "    \"jinja2\",\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "    \"alembic\",\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "    \"asyncpg\",\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":43,"column":15},"end":{"line":43,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":43,"column":39},"end":{"line":43,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":43,"column":10},"end":{"line":43,"column":61}}}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(26, data, 0),"data":data,"loc":{"start":{"line":43,"column":0},"end":{"line":49,"column":0}}})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    return "    \"asyncmy\",\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":45,"column":15},"end":{"line":45,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":45,"column":39},"end":{"line":45,"column":61}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":45,"column":10},"end":{"line":45,"column":62}}}),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(28, data, 0),"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":49,"column":0}}})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    return "    \"aiosqlite\",\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":47,"column":15},"end":{"line":47,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":47,"column":39},"end":{"line":47,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":61}}}),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":0},"end":{"line":49,"column":0}}})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    return "    \"mysqlclient\",\n";
},"30":function(container,depth0,helpers,partials,data) {
    return "    \"ruff\",\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    \"mypy\",\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":59,"column":6},"end":{"line":59,"column":29}}}),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":0},"end":{"line":62,"column":7}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    return "    \"django-stubs[compatible-mypy]\",\n    \"djangorestframework-stubs[compatible-mypy]\",\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "    \"pytest\",\n    \"httpx\",\n";
},"34":function(container,depth0,helpers,partials,data) {
    return "[tool.hatch.build.targets.wheel]\npackages = [\"config\", \"apps\"]\n\n[tool.hatch.build.targets.wheel.force-include]\ntemplates = \"templates\"\nstatic = \"static\"\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "[tool.hatch.build.targets.wheel]\npackages = [\"src\"]\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[project]\nname = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":24}}}) : helper)))
    + "\"\nversion = \"0.1.0\"\ndescription = "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":4,"column":20},"end":{"line":4,"column":41}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":118}}})) != null ? stack1 : "")
    + "\nrequires-python = \">=3.12\"\ndependencies = [\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":29}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fastapi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":30}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":11},"end":{"line":24,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":35},"end":{"line":24,"column":59}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":60}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":34,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":35,"column":11},"end":{"line":35,"column":34}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":35,"column":35},"end":{"line":35,"column":57}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":58},"end":{"line":35,"column":78}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":35,"column":79}}}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"alembic",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":6},"end":{"line":38,"column":31}}}),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":40,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":41,"column":11},"end":{"line":41,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":41,"column":35},"end":{"line":41,"column":59}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":41,"column":6},"end":{"line":41,"column":60}}}),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":41,"column":0},"end":{"line":49,"column":7}}})) != null ? stack1 : "")
    + "]\n\n[dependency-groups]\ndev = [\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"ruff",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":54,"column":6},"end":{"line":54,"column":30}}}),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"mypy",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":57,"column":6},"end":{"line":57,"column":30}}}),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":0},"end":{"line":63,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"pytest",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":64,"column":6},"end":{"line":64,"column":32}}}),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":0},"end":{"line":67,"column":7}}})) != null ? stack1 : "")
    + "]\n\n[build-system]\nrequires = [\"hatchling\"]\nbuild-backend = \"hatchling.build\"\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":74,"column":6},"end":{"line":74,"column":29}}}),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.program(35, data, 0),"data":data,"loc":{"start":{"line":74,"column":0},"end":{"line":84,"column":7}}})) != null ? stack1 : "")
    + "\n[tool.pytest.ini_options]\npythonpath = [\".\"]";
},"useData":true} }],
  ["python/base/src/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/base/src/config.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\nDATABASE_NAME = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":6,"column":17},"end":{"line":6,"column":33}}}) : helper)))
    + "\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":25}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    database_url: str = f\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":32},"end":{"line":18,"column":54}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":18,"column":26},"end":{"line":18,"column":247}}})) != null ? stack1 : "")
    + "\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "sqlite://./{DATABASE_NAME}.db";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":95},"end":{"line":18,"column":119}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":18,"column":85},"end":{"line":18,"column":240}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "postgres://postgres:postgres@localhost:5432/{DATABASE_NAME}";
},"6":function(container,depth0,helpers,partials,data) {
    return "mysql://root:password@localhost:3306/{DATABASE_NAME}";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    database_url: str = f\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":32},"end":{"line":20,"column":54}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":20,"column":26},"end":{"line":20,"column":276}}})) != null ? stack1 : "")
    + "\"\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "sqlite+aiosqlite:///./{DATABASE_NAME}.db";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":106},"end":{"line":20,"column":130}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":20,"column":96},"end":{"line":20,"column":269}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "postgresql+asyncpg://postgres:postgres@localhost:5432/{DATABASE_NAME}";
},"11":function(container,depth0,helpers,partials,data) {
    return "mysql+asyncmy://root:password@localhost:3306/{DATABASE_NAME}";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from functools import lru_cache\n\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":26}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "\n\nclass Settings(BaseSettings):\n    model_config = SettingsConfigDict(env_file=\".env\", extra=\"ignore\")\n\n    app_name: str = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":13,"column":21},"end":{"line":13,"column":36}}}) : helper)))
    + "\"\n    debug: bool = False\n    cors_origins: list[str] = [\"http://localhost:3000\"]\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":26}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":22,"column":7}}})) != null ? stack1 : "")
    + "\n\n@lru_cache\ndef get_settings() -> Settings:\n    return Settings()\n";
},"useData":true} }],
  ["python/core/src/schemas/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/core/src/schemas/items.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from datetime import datetime\nfrom typing import Annotated\n\nfrom pydantic import BaseModel, ConfigDict, StringConstraints\n\n\nclass ItemCreate(BaseModel):\n    name: Annotated[str, StringConstraints(strip_whitespace=True, min_length=1, max_length=200)]\n\n\nclass ItemResponse(BaseModel):\n    model_config = ConfigDict(from_attributes=True)\n\n    id: str\n    name: str\n    created_at: datetime\n";
},"useData":true} }],
  ["python/core/src/services/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/core/src/services/items.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from ..db import AsyncSession\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "\n\nasync def create_item(payload: ItemCreate) -> ItemResponse:\n    return await items_repository.create_item(name=payload.name)\n\n\nasync def list_items() -> list[ItemResponse]:\n    return await items_repository.list_items()\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\n\nasync def create_item(session: AsyncSession, payload: ItemCreate) -> ItemResponse:\n    return await items_repository.create_item(session, name=payload.name)\n\n\nasync def list_items(session: AsyncSession) -> list[ItemResponse]:\n    return await items_repository.list_items(session)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":25}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":7}}})) != null ? stack1 : "")
    + "from ..repositories import items as items_repository\nfrom ..schemas.items import ItemCreate, ItemResponse\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":25}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/framework/django/apps/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/apps/core/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/apps/core/apps.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.apps import AppConfig\n\n\nclass CoreConfig(AppConfig):\n    default_auto_field = \"django.db.models.BigAutoField\"\n    name = \"apps.core\"\n";
},"useData":true} }],
  ["python/framework/django/apps/core/models.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/apps/core/urls.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.urls import path\n\nfrom . import views\n\nurlpatterns = [\n    path(\"health/\", views.health, name=\"health\"),\n]\n";
},"useData":true} }],
  ["python/framework/django/apps/core/views.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from rest_framework.decorators import api_view\nfrom rest_framework.request import Request\nfrom rest_framework.response import Response\n\n\n@api_view([\"GET\"])\ndef health(request: Request) -> Response:\n    return Response({\"status\": \"ok\"})\n";
},"useData":true} }],
  ["python/framework/django/apps/users/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/apps/users/apps.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.apps import AppConfig\n\n\nclass UsersConfig(AppConfig):\n    default_auto_field = \"django.db.models.BigAutoField\"\n    name = \"apps.users\"\n";
},"useData":true} }],
  ["python/framework/django/apps/users/models.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.contrib.auth.models import AbstractUser\n\n\nclass User(AbstractUser):\n    class Meta:\n        db_table = \"users\"\n";
},"useData":true} }],
  ["python/framework/django/apps/users/selectors.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from .models import User\n\n\ndef get_user_by_id(user_id: int) -> User | None:\n    try:\n        return User.objects.get(pk=user_id)\n    except User.DoesNotExist:\n        return None\n";
},"useData":true} }],
  ["python/framework/django/apps/users/serializers.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from rest_framework import serializers\n\nfrom .models import User\n\n\nclass UserSerializer(serializers.ModelSerializer[User]):\n    class Meta:\n        model = User\n        fields = [\"id\", \"username\", \"email\", \"first_name\", \"last_name\"]\n        read_only_fields = [\"id\"]\n";
},"useData":true} }],
  ["python/framework/django/apps/users/services.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.db.models import QuerySet\n\nfrom .models import User\n\n\ndef get_users() -> QuerySet[User]:\n    return User.objects.filter(is_active=True)\n";
},"useData":true} }],
  ["python/framework/django/apps/users/urls.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.urls import path\n\nfrom . import views\n\napp_name = \"users\"\n\nurlpatterns = [\n    path(\"\", views.UserListView.as_view(), name=\"user-list\"),\n]\n";
},"useData":true} }],
  ["python/framework/django/apps/users/views.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.db.models import QuerySet\nfrom rest_framework import generics\nfrom rest_framework.permissions import IsAuthenticated\n\nfrom .models import User\nfrom .serializers import UserSerializer\nfrom .services import get_users\n\n\nclass UserListView(generics.ListAPIView[User]):\n    serializer_class = UserSerializer\n    permission_classes = [IsAuthenticated]\n\n    def get_queryset(self) -> QuerySet[User]:\n        return get_users()\n";
},"useData":true} }],
  ["python/framework/django/config/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/config/asgi.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import os\n\nfrom django.core.asgi import get_asgi_application\n\nos.environ.setdefault(\"DJANGO_SETTINGS_MODULE\", \"config.settings.production\")\n\napplication = get_asgi_application()\n";
},"useData":true} }],
  ["python/framework/django/config/settings/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/config/settings/base.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "import os\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "    \"apps.web\",\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "DATABASES = {}\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":65,"column":10},"end":{"line":65,"column":32}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":65,"column":0},"end":{"line":94,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "DATABASES = {\n    \"default\": {\n        \"ENGINE\": \"django.db.backends.sqlite3\",\n        \"NAME\": BASE_DIR / \"db.sqlite3\",\n    }\n}\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":72,"column":10},"end":{"line":72,"column":34}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":72,"column":0},"end":{"line":94,"column":0}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DATABASES = {\n    \"default\": {\n        \"ENGINE\": \"django.db.backends.postgresql\",\n        \"NAME\": os.environ.get(\"DB_NAME\", \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":76,"column":43},"end":{"line":76,"column":59}}}) : helper)))
    + "\"),\n        \"USER\": os.environ.get(\"DB_USER\", \"postgres\"),\n        \"PASSWORD\": os.environ.get(\"DB_PASSWORD\", \"postgres\"),\n        \"HOST\": os.environ.get(\"DB_HOST\", \"localhost\"),\n        \"PORT\": os.environ.get(\"DB_PORT\", \"5432\"),\n    }\n}\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":83,"column":10},"end":{"line":83,"column":31}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":0},"end":{"line":94,"column":0}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DATABASES = {\n    \"default\": {\n        \"ENGINE\": \"django.db.backends.mysql\",\n        \"NAME\": os.environ.get(\"DB_NAME\", \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":87,"column":43},"end":{"line":87,"column":59}}}) : helper)))
    + "\"),\n        \"USER\": os.environ.get(\"DB_USER\", \"root\"),\n        \"PASSWORD\": os.environ.get(\"DB_PASSWORD\", \"password\"),\n        \"HOST\": os.environ.get(\"DB_HOST\", \"localhost\"),\n        \"PORT\": os.environ.get(\"DB_PORT\", \"3306\"),\n    }\n}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":56}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":57}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":7}}})) != null ? stack1 : "")
    + "from pathlib import Path\n\nBASE_DIR = Path(__file__).resolve().parent.parent.parent\n\nSECRET_KEY = \"django-insecure-change-me\"\n\nDEBUG = False\n\nALLOWED_HOSTS: list[str] = []\n\nINSTALLED_APPS = [\n    \"django.contrib.admin\",\n    \"django.contrib.auth\",\n    \"django.contrib.contenttypes\",\n    \"django.contrib.sessions\",\n    \"django.contrib.messages\",\n    \"django.contrib.staticfiles\",\n    \"corsheaders\",\n    \"rest_framework\",\n    \"apps.core\",\n    \"apps.users\",\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":26}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + "]\n\nAUTH_USER_MODEL = \"users.User\"\n\nMIDDLEWARE = [\n    \"corsheaders.middleware.CorsMiddleware\",\n    \"django.middleware.security.SecurityMiddleware\",\n    \"django.contrib.sessions.middleware.SessionMiddleware\",\n    \"django.middleware.common.CommonMiddleware\",\n    \"django.middleware.csrf.CsrfViewMiddleware\",\n    \"django.contrib.auth.middleware.AuthenticationMiddleware\",\n    \"django.contrib.messages.middleware.MessageMiddleware\",\n    \"django.middleware.clickjacking.XFrameOptionsMiddleware\",\n]\n\nROOT_URLCONF = \"config.urls\"\n\nTEMPLATES = [\n    {\n        \"BACKEND\": \"django.template.backends.django.DjangoTemplates\",\n        \"DIRS\": [BASE_DIR / \"templates\"],\n        \"APP_DIRS\": True,\n        \"OPTIONS\": {\n            \"context_processors\": [\n                \"django.template.context_processors.debug\",\n                \"django.template.context_processors.request\",\n                \"django.contrib.auth.context_processors.auth\",\n                \"django.contrib.messages.context_processors.messages\",\n            ],\n        },\n    },\n]\n\nWSGI_APPLICATION = \"config.wsgi.application\"\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":63,"column":6},"end":{"line":63,"column":26}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":63,"column":0},"end":{"line":94,"column":7}}})) != null ? stack1 : "")
    + "\nAUTH_PASSWORD_VALIDATORS = [\n    {\"NAME\": \"django.contrib.auth.password_validation.UserAttributeSimilarityValidator\"},\n    {\"NAME\": \"django.contrib.auth.password_validation.MinimumLengthValidator\"},\n    {\"NAME\": \"django.contrib.auth.password_validation.CommonPasswordValidator\"},\n    {\"NAME\": \"django.contrib.auth.password_validation.NumericPasswordValidator\"},\n]\n\nLANGUAGE_CODE = \"en-us\"\nTIME_ZONE = \"UTC\"\nUSE_I18N = True\nUSE_TZ = True\n\nSTATIC_URL = \"static/\"\nSTATIC_ROOT = BASE_DIR / \"staticfiles\"\nSTATICFILES_DIRS = [BASE_DIR / \"static\"]\n\nMEDIA_URL = \"media/\"\nMEDIA_ROOT = BASE_DIR / \"media\"\n\nDEFAULT_AUTO_FIELD = \"django.db.models.BigAutoField\"\n";
},"useData":true} }],
  ["python/framework/django/config/settings/development.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from .base import *\n\nDEBUG = True\n\nALLOWED_HOSTS = [\"*\"]\n\nCORS_ALLOW_ALL_ORIGINS = True\n";
},"useData":true} }],
  ["python/framework/django/config/settings/production.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import os\n\nfrom .base import *\n\nDEBUG = False\n\nSECRET_KEY = os.environ[\"DJANGO_SECRET_KEY\"]\n\nALLOWED_HOSTS = [host for host in os.environ.get(\"ALLOWED_HOSTS\", \"\").split(\",\") if host]\n\nCORS_ALLOW_ALL_ORIGINS = False\nCORS_ALLOWED_ORIGINS = [\n    origin for origin in os.environ.get(\"CORS_ALLOWED_ORIGINS\", \"\").split(\",\") if origin\n]\n";
},"useData":true} }],
  ["python/framework/django/config/urls.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "    path(\"\", include(\"apps.web.urls\")),\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from django.conf import settings\nfrom django.conf.urls.static import static\nfrom django.contrib import admin\nfrom django.urls import URLPattern, URLResolver, include, path\n\nurlpatterns: list[URLPattern | URLResolver] = [\n    path(\"admin/\", admin.site.urls),\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":26}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":10,"column":7}}})) != null ? stack1 : "")
    + "    path(\"api/\", include(\"apps.core.urls\")),\n    path(\"api/users/\", include(\"apps.users.urls\")),\n]\n\nif settings.DEBUG:\n    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)\n";
},"useData":true} }],
  ["python/framework/django/config/wsgi.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import os\n\nfrom django.core.wsgi import get_wsgi_application\n\nos.environ.setdefault(\"DJANGO_SETTINGS_MODULE\", \"config.settings.production\")\n\napplication = get_wsgi_application()\n";
},"useData":true} }],
  ["python/framework/django/manage.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "#!/usr/bin/env python\nimport os\nimport sys\n\n\ndef main() -> None:\n    os.environ.setdefault(\"DJANGO_SETTINGS_MODULE\", \"config.settings.development\")\n    from django.core.management import execute_from_command_line\n\n    execute_from_command_line(sys.argv)\n\n\nif __name__ == \"__main__\":\n    main()\n";
},"useData":true} }],
  ["python/framework/django/media/README.md", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "User-uploaded media files directory.\n";
},"useData":true} }],
  ["python/framework/django/static/README.md", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "Static assets directory — CSS, JS, images.\n";
},"useData":true} }],
  ["python/framework/django/templates/base.html.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>{% block title %}"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":6,"column":28},"end":{"line":6,"column":43}}}) : helper)))
    + "{% endblock %}</title>\n    {% block head %}{% endblock %}\n</head>\n<body>\n    {% block content %}{% endblock %}\n</body>\n</html>";
},"useData":true} }],
  ["python/framework/fastapi/src/api/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/fastapi/src/api/router.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from fastapi import APIRouter\n\nfrom .v1.router import router as v1_router\n\napi_router = APIRouter()\n\n\n@api_router.get(\"/health\")\nasync def health() -> dict[str, str]:\n    return {\"status\": \"ok\"}\n\n\napi_router.include_router(v1_router, prefix=\"/api/v1\")\n";
},"useData":true} }],
  ["python/framework/fastapi/src/api/v1/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/fastapi/src/api/v1/router.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "\nfrom .routes.items import router as items_router\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "router.include_router(items_router, prefix=\"/items\", tags=[\"items\"])\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from fastapi import APIRouter\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\nrouter = APIRouter()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":10,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/framework/fastapi/src/api/v1/routes/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/fastapi/src/api/v1/routes/items.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from fastapi import APIRouter\n\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "from typing import Annotated\n\nfrom fastapi import APIRouter, Depends\n\nfrom ....db import AsyncSession, get_session\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\nSessionDep = Annotated[AsyncSession, Depends(get_session)]\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\n\n@router.get(\"/\", response_model=list[ItemResponse])\nasync def list_items_endpoint() -> list[ItemResponse]:\n    return await list_items()\n\n\n@router.post(\"/\", response_model=ItemResponse, status_code=201)\nasync def create_item_endpoint(payload: ItemCreate) -> ItemResponse:\n    return await create_item(payload)\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "\n\n@router.get(\"/\", response_model=list[ItemResponse])\nasync def list_items_endpoint(session: SessionDep) -> list[ItemResponse]:\n    return await list_items(session)\n\n\n@router.post(\"/\", response_model=ItemResponse, status_code=201)\nasync def create_item_endpoint(payload: ItemCreate, session: SessionDep) -> ItemResponse:\n    return await create_item(session, payload)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":25}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":7}}})) != null ? stack1 : "")
    + "from ....schemas.items import ItemCreate, ItemResponse\nfrom ....services.items import create_item, list_items\n\nrouter = APIRouter()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":25}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":25}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":41,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/framework/fastapi/src/exceptions.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import logging\n\nfrom fastapi import FastAPI, Request, status\nfrom fastapi.responses import JSONResponse\n\nlogger = logging.getLogger(__name__)\n\n\nclass AppError(Exception):\n    status_code = status.HTTP_400_BAD_REQUEST\n\n\nclass NotFoundError(AppError):\n    status_code = status.HTTP_404_NOT_FOUND\n\n\ndef register_exception_handlers(app: FastAPI) -> None:\n    @app.exception_handler(AppError)\n    async def handle_app_error(request: Request, exc: AppError) -> JSONResponse:\n        return JSONResponse(status_code=exc.status_code, content={\"detail\": str(exc)})\n\n    @app.exception_handler(Exception)\n    async def handle_unhandled(request: Request, exc: Exception) -> JSONResponse:\n        logger.exception(\"Unhandled error: %s\", exc)\n        return JSONResponse(\n            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,\n            content={\"detail\": \"Internal server error\"},\n        )\n";
},"useData":true} }],
  ["python/framework/fastapi/src/main.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from .db import close_db, init_db\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":25}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":12,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "from .db import close_db\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    await init_db()\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "    await close_db()\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from collections.abc import AsyncIterator\nfrom contextlib import asynccontextmanager\n\nfrom fastapi import FastAPI\n\nfrom .api.router import api_router\nfrom .config import get_settings\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":8,"column":11},"end":{"line":8,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":27},"end":{"line":8,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":50}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":12,"column":7}}})) != null ? stack1 : "")
    + "from .exceptions import register_exception_handlers\nfrom .middleware import add_middleware\n\nsettings = get_settings()\n\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI) -> AsyncIterator[None]:\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":21,"column":11},"end":{"line":21,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":27},"end":{"line":21,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":21,"column":50}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + "    yield\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":21}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + "\n\ndef create_app() -> FastAPI:\n    app = FastAPI(title=settings.app_name, lifespan=lifespan)\n    add_middleware(app)\n    register_exception_handlers(app)\n    app.include_router(api_router)\n    return app\n\n\napp = create_app()\n";
},"useData":true} }],
  ["python/framework/fastapi/src/middleware.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\n\nfrom .config import get_settings\n\n\ndef add_middleware(app: FastAPI) -> None:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=get_settings().cors_origins,\n        allow_credentials=True,\n        allow_methods=[\"*\"],\n        allow_headers=[\"*\"],\n    )\n";
},"useData":true} }],
  ["python/framework/flask/src/api/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/flask/src/api/v1/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/flask/src/api/v1/router.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from .routes.items import items_bp\n\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "    v1_bp.register_blueprint(items_bp)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from flask import Blueprint, Flask, Response, jsonify\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "health_bp = Blueprint(\"health\", __name__)\nv1_bp = Blueprint(\"api_v1\", __name__, url_prefix=\"/api/v1\")\n\n\n@health_bp.get(\"/health\")\ndef health() -> Response:\n    return jsonify({\"status\": \"ok\"})\n\n\ndef register_v1_blueprints(app: Flask) -> None:\n    app.register_blueprint(health_bp)\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + "    app.register_blueprint(v1_bp)\n";
},"useData":true} }],
  ["python/framework/flask/src/api/v1/routes/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/flask/src/api/v1/routes/items.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from ....db import SessionLocal\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "    items = await list_items()\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "    async with SessionLocal() as session:\n        items = await list_items(session)\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    item = await create_item(payload)\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "    async with SessionLocal() as session:\n        item = await create_item(session, payload)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from flask import Blueprint, Response, jsonify, request\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":25}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "from ....schemas.items import ItemCreate\nfrom ....services.items import create_item, list_items\n\nitems_bp = Blueprint(\"items\", __name__, url_prefix=\"/items\")\n\n\n@items_bp.get(\"/\")\nasync def list_items_endpoint() -> Response:\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":25}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":19,"column":7}}})) != null ? stack1 : "")
    + "    return jsonify([item.model_dump(mode=\"json\") for item in items])\n\n\n@items_bp.post(\"/\")\nasync def create_item_endpoint() -> tuple[Response, int]:\n    payload = ItemCreate.model_validate(request.get_json())\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":25}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":31,"column":7}}})) != null ? stack1 : "")
    + "    return jsonify(item.model_dump(mode=\"json\")), 201\n";
},"useData":true} }],
  ["python/framework/flask/src/exceptions.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from flask import Flask, Response, jsonify\nfrom pydantic import ValidationError\nfrom werkzeug.exceptions import HTTPException\n\n\nclass AppError(Exception):\n    status_code: int = 400\n\n\nclass NotFoundError(AppError):\n    status_code: int = 404\n\n\ndef register_error_handlers(app: Flask) -> None:\n    @app.errorhandler(AppError)\n    def handle_app_error(exc: AppError) -> tuple[Response, int]:\n        return jsonify({\"detail\": str(exc)}), exc.status_code\n\n    @app.errorhandler(ValidationError)\n    def handle_validation_error(exc: ValidationError) -> tuple[Response, int]:\n        return jsonify({\"detail\": exc.errors(include_url=False, include_context=False)}), 422\n\n    @app.errorhandler(HTTPException)\n    def handle_http_error(exc: HTTPException) -> tuple[Response, int]:\n        return jsonify({\"detail\": exc.description}), exc.code or 500\n";
},"useData":true} }],
  ["python/framework/flask/src/main.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "import asyncio\n\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "from .db import init_db\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "    asyncio.run(init_db())\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":50}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":4,"column":7}}})) != null ? stack1 : "")
    + "from flask import Flask\n\nfrom .api.v1.router import register_v1_blueprints\nfrom .config import get_settings\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":9,"column":11},"end":{"line":9,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":9,"column":27},"end":{"line":9,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":50}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + "from .exceptions import register_error_handlers\n\nsettings = get_settings()\n\n\ndef create_app() -> Flask:\n    app = Flask(__name__)\n    app.config[\"DEBUG\"] = settings.debug\n    register_error_handlers(app)\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":21,"column":11},"end":{"line":21,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":27},"end":{"line":21,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":21,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + "    register_v1_blueprints(app)\n    return app\n\n\napp = create_app()\n";
},"useData":true} }],
  ["python/framework/litestar/app.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from src.main import app, create_app\n\n__all__ = [\"app\", \"create_app\"]\n";
},"useData":true} }],
  ["python/framework/litestar/src/api/v1/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/litestar/src/api/v1/router.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "\nfrom .routes.items import create_item_endpoint, list_items_endpoint\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "list_items_endpoint, create_item_endpoint";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from litestar import Router, get\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\n\n@get(\"/health\", tags=[\"health\"])\nasync def health() -> dict[str, str]:\n    return {\"status\": \"ok\"}\n\n\nrouter = Router(\n    path=\"/api/v1\",\n    route_handlers=["
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":26},"end":{"line":15,"column":41}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":20},"end":{"line":15,"column":91}}})) != null ? stack1 : "")
    + "],\n)\n";
},"useData":true} }],
  ["python/framework/litestar/src/api/v1/routes/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/litestar/src/api/v1/routes/items.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from litestar.di import NamedDependency, Provide\n\nfrom ....db import AsyncSession, get_session\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\n\n@get(\"/items\")\nasync def list_items_endpoint() -> list[ItemResponse]:\n    return await list_items()\n\n\n@post(\"/items\", status_code=201)\nasync def create_item_endpoint(data: ItemCreate) -> ItemResponse:\n    return await create_item(data)\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\nsession_dependency = {\"session\": Provide(get_session)}\n\n\n@get(\"/items\", dependencies=session_dependency)\nasync def list_items_endpoint(session: NamedDependency[AsyncSession]) -> list[ItemResponse]:\n    return await list_items(session)\n\n\n@post(\"/items\", status_code=201, dependencies=session_dependency)\nasync def create_item_endpoint(\n    data: ItemCreate, session: NamedDependency[AsyncSession]\n) -> ItemResponse:\n    return await create_item(session, data)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from litestar import get, post\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":25}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":8,"column":7}}})) != null ? stack1 : "")
    + "from ....schemas.items import ItemCreate, ItemResponse\nfrom ....services.items import create_item, list_items\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":25}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/framework/litestar/src/exceptions.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from typing import Any\n\nfrom litestar import Request, Response\nfrom litestar.status_codes import HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND\nfrom litestar.types import ExceptionHandlersMap\n\n\nclass AppError(Exception):\n    status_code = HTTP_400_BAD_REQUEST\n\n\nclass NotFoundError(AppError):\n    status_code = HTTP_404_NOT_FOUND\n\n\ndef _handle_app_error(request: Request[Any, Any, Any], exc: AppError) -> Response[Any]:\n    return Response(content={\"detail\": str(exc)}, status_code=exc.status_code)\n\n\nexception_handlers: ExceptionHandlersMap = {AppError: _handle_app_error}\n";
},"useData":true} }],
  ["python/framework/litestar/src/main.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from .db import close_db, init_db\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":9,"column":25}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":11,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "from .db import close_db\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        on_startup=[init_db],\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        on_shutdown=[close_db],\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from litestar import Litestar\nfrom litestar.config.cors import CORSConfig\n\nfrom .api.v1.router import health\nfrom .api.v1.router import router as v1_router\nfrom .config import get_settings\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":7,"column":27},"end":{"line":7,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":50}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + "from .exceptions import exception_handlers\n\nsettings = get_settings()\n\n\ndef create_app() -> Litestar:\n    return Litestar(\n        route_handlers=[health, v1_router],\n        debug=settings.debug,\n        cors_config=CORSConfig(allow_origins=settings.cors_origins),\n        exception_handlers=exception_handlers,\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":23,"column":11},"end":{"line":23,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":27},"end":{"line":23,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":23,"column":50}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":21}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":28,"column":7}}})) != null ? stack1 : "")
    + "    )\n\n\napp = create_app()\n";
},"useData":true} }],
  ["python/framework/none/src/main.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "def main() -> None:\n    print(\"Hello from "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":2,"column":37}}}) : helper)))
    + "!\")\n\n\nif __name__ == \"__main__\":\n    main()\n";
},"useData":true} }],
  ["python/frontend/htmx/app/src/main.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from collections.abc import AsyncIterator\nfrom contextlib import asynccontextmanager\nfrom pathlib import Path\n\nfrom fastapi import FastAPI\nfrom fastapi.staticfiles import StaticFiles\n\nfrom .api.router import api_router\nfrom .config import get_settings\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":11,"column":11},"end":{"line":11,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":27},"end":{"line":11,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":50}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "")
    + "from .exceptions import register_exception_handlers\nfrom .middleware import add_middleware\nfrom .web import web_router\n\nsettings = get_settings()\n\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI) -> AsyncIterator[None]:\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":25,"column":11},"end":{"line":25,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":27},"end":{"line":25,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":50}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + "    yield\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":29,"column":21}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":31,"column":7}}})) != null ? stack1 : "")
    + "\n\ndef create_app() -> FastAPI:\n    app = FastAPI(title=settings.app_name, lifespan=lifespan)\n    add_middleware(app)\n    register_exception_handlers(app)\n    app.include_router(api_router)\n    app.include_router(web_router)\n    static_dir = Path(__file__).resolve().parent.parent / \"static\"\n    app.mount(\"/static\", StaticFiles(directory=static_dir), name=\"static\")\n    return app\n\n\napp = create_app()\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "from .db import close_db, init_db\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":25}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":15,"column":0}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "from .db import close_db\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "    await init_db()\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "    await close_db()\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":46,"column":10},"end":{"line":46,"column":35}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":46,"column":0},"end":{"line":130,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from pathlib import Path\n\nfrom litestar import Litestar\nfrom litestar.config.cors import CORSConfig\nfrom litestar.plugins.jinja import JinjaTemplateEngine\nfrom litestar.static_files import create_static_files_router\nfrom litestar.template import TemplateConfig\n\nfrom .api.v1.router import health\nfrom .api.v1.router import router as v1_router\nfrom .config import get_settings\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":58,"column":11},"end":{"line":58,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":58,"column":27},"end":{"line":58,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":58,"column":6},"end":{"line":58,"column":50}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":58,"column":0},"end":{"line":62,"column":7}}})) != null ? stack1 : "")
    + "from .exceptions import exception_handlers\nfrom .web import web_routes\n\nsettings = get_settings()\n\n\ndef create_app() -> Litestar:\n    pkg_dir = Path(__file__).resolve().parent\n    return Litestar(\n        route_handlers=[\n            health,\n            v1_router,\n            *web_routes,\n            create_static_files_router(path=\"/static\", directories=[pkg_dir.parent / \"static\"]),\n        ],\n        debug=settings.debug,\n        cors_config=CORSConfig(allow_origins=settings.cors_origins),\n        template_config=TemplateConfig(directory=pkg_dir / \"templates\", engine=JinjaTemplateEngine),\n        exception_handlers=exception_handlers,\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":82,"column":11},"end":{"line":82,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":82,"column":27},"end":{"line":82,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":82,"column":6},"end":{"line":82,"column":50}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":0},"end":{"line":84,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":85,"column":6},"end":{"line":85,"column":21}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":0},"end":{"line":87,"column":7}}})) != null ? stack1 : "")
    + "    )\n\n\napp = create_app()\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "        on_startup=[init_db],\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "        on_shutdown=[close_db],\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":92,"column":10},"end":{"line":92,"column":32}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":92,"column":0},"end":{"line":130,"column":0}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":93,"column":11},"end":{"line":93,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":93,"column":27},"end":{"line":93,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":93,"column":6},"end":{"line":93,"column":50}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":0},"end":{"line":95,"column":7}}})) != null ? stack1 : "")
    + "from pathlib import Path\n\nfrom flask import Flask\n\nfrom .api.v1.router import register_v1_blueprints\nfrom .config import get_settings\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":102,"column":11},"end":{"line":102,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":102,"column":27},"end":{"line":102,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":102,"column":6},"end":{"line":102,"column":50}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":102,"column":0},"end":{"line":104,"column":7}}})) != null ? stack1 : "")
    + "from .exceptions import register_error_handlers\nfrom .web import register_web_blueprints\n\nsettings = get_settings()\n\n\ndef create_app() -> Flask:\n    pkg_dir = Path(__file__).resolve().parent\n    app = Flask(\n        __name__,\n        template_folder=pkg_dir / \"templates\",\n        static_folder=pkg_dir.parent / \"static\",\n        static_url_path=\"/static\",\n    )\n    app.config[\"DEBUG\"] = settings.debug\n    register_error_handlers(app)\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":121,"column":11},"end":{"line":121,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":121,"column":27},"end":{"line":121,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":121,"column":6},"end":{"line":121,"column":50}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":121,"column":0},"end":{"line":123,"column":7}}})) != null ? stack1 : "")
    + "    register_v1_blueprints(app)\n    register_web_blueprints(app)\n    return app\n\n\napp = create_app()\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "import asyncio\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "from .db import init_db\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "    asyncio.run(init_db())\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fastapi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":30}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":130,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/frontend/htmx/app/src/templates/base.html.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>{{ app_name }}</title>\n    <link rel=\"stylesheet\" href=\"/static/css/style.css\">\n    <script src=\"https://unpkg.com/htmx.org@2.0.10/dist/htmx.min.js\" integrity=\"sha384-H5SrcfygHmAuTDZphMHqBJLc3FhssKjG7w/CeCpFReSfwBWDTKpkzPP8c+cLsK+V\" crossorigin=\"anonymous\" defer></script>\n</head>\n<body>\n    <header>\n        <a href=\"/\">{{ app_name }}</a>\n        <a href=\"/api/v1/items\">API</a>\n    </header>\n    <main>\n        {% block content %}{% endblock %}\n    </main>\n</body>\n</html>";
},"useData":true} }],
  ["python/frontend/htmx/app/src/templates/home.html.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "<section id=\"items\"\n         hx-get=\"/web/items\"\n         hx-trigger=\"load\"\n         hx-swap=\"innerHTML\">\n    <p>Loading items…</p>\n</section>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "{% extends \"base.html\" %}\n{% block content %}\n<h1>{{ app_name }}</h1>\n<p>A TriStack project with an HTMX-powered web frontend.</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":12,"column":7}}})) != null ? stack1 : "")
    + "{% endblock %}";
},"useData":true} }],
  ["python/frontend/htmx/app/src/templates/items.html.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{% if items %}\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Created</th>\n        </tr>\n    </thead>\n    <tbody>\n        {% for item in items %}\n        <tr>\n            <td>{{ item.name }}</td>\n            <td>{{ item.created_at.strftime(\"%Y-%m-%d %H:%M\") }}</td>\n        </tr>\n        {% endfor %}\n    </tbody>\n</table>\n<button hx-get=\"/web/items\" hx-target=\"#items\" hx-swap=\"innerHTML\">Refresh</button>\n{% else %}\n<p>No items yet. Create one with <code>POST /api/v1/items</code>.</p>\n{% endif %}";
},"useData":true} }],
  ["python/frontend/htmx/app/src/web.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from pathlib import Path\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":3,"column":11},"end":{"line":3,"column":26}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":46}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":47}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":26}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":7,"column":27},"end":{"line":7,"column":46}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":47}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + "from fastapi.responses import HTMLResponse\nfrom fastapi.templating import Jinja2Templates\n\nfrom .config import get_settings\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":11},"end":{"line":16,"column":26}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":27},"end":{"line":16,"column":46}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":47}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":21}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + "\nsettings = get_settings()\n\nweb_router = APIRouter()\n\ntemplates = Jinja2Templates(directory=str(Path(__file__).resolve().parent / \"templates\"))\n\n\n@web_router.get(\"/\", response_class=HTMLResponse, include_in_schema=False)\nasync def home(request: Request) -> HTMLResponse:\n    return templates.TemplateResponse(request, \"home.html\", {\"app_name\": settings.app_name})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":33,"column":25}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    return "from typing import Annotated\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "from fastapi import APIRouter, Depends, Request\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "from fastapi import APIRouter, Request\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "from .db import AsyncSession, get_session\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "from .services.items import list_items\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "\n\n@web_router.get(\"/web/items\", response_class=HTMLResponse, include_in_schema=False)\nasync def items_fragment(request: Request) -> HTMLResponse:\n    items = await list_items()\n    return templates.TemplateResponse(request, \"items.html\", {\"items\": items})\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":40,"column":10},"end":{"line":40,"column":25}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":50,"column":0}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "\n\n@web_router.get(\"/web/items\", response_class=HTMLResponse, include_in_schema=False)\nasync def items_fragment(\n    request: Request,\n    session: Annotated[AsyncSession, Depends(get_session)],\n) -> HTMLResponse:\n    items = await list_items(session)\n    return templates.TemplateResponse(request, \"items.html\", {\"items\": items})\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":51,"column":10},"end":{"line":51,"column":35}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":51,"column":0},"end":{"line":134,"column":0}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from litestar import get\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":53,"column":11},"end":{"line":53,"column":26}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":53,"column":27},"end":{"line":53,"column":46}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":53,"column":6},"end":{"line":53,"column":47}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":0},"end":{"line":55,"column":7}}})) != null ? stack1 : "")
    + "from litestar.response import Template\nfrom litestar.types import ControllerRouterHandler\n\nfrom .config import get_settings\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":60,"column":11},"end":{"line":60,"column":26}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":60,"column":27},"end":{"line":60,"column":46}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":60,"column":6},"end":{"line":60,"column":47}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":0},"end":{"line":62,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":63,"column":6},"end":{"line":63,"column":21}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":0},"end":{"line":65,"column":7}}})) != null ? stack1 : "")
    + "\nsettings = get_settings()\n\n\n@get(\"/\", sync_to_thread=False, include_in_schema=False)\ndef home() -> Template:\n    return Template(template_name=\"home.html\", context={\"app_name\": settings.app_name})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":73,"column":6},"end":{"line":73,"column":25}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":73,"column":0},"end":{"line":91,"column":7}}})) != null ? stack1 : "")
    + "\n\nweb_routes: list[ControllerRouterHandler] = [home"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":94,"column":55},"end":{"line":94,"column":70}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":49},"end":{"line":94,"column":95}}})) != null ? stack1 : "")
    + "]\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "from litestar.di import NamedDependency, Provide\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "\n\n@get(\"/web/items\", include_in_schema=False)\nasync def items_fragment() -> Template:\n    items = await list_items()\n    return Template(template_name=\"items.html\", context={\"items\": items})\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":80,"column":10},"end":{"line":80,"column":25}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":0},"end":{"line":91,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "\n\n@get(\n    \"/web/items\",\n    include_in_schema=False,\n    dependencies={\"session\": Provide(get_session)},\n)\nasync def items_fragment(session: NamedDependency[AsyncSession]) -> Template:\n    items = await list_items(session)\n    return Template(template_name=\"items.html\", context={\"items\": items})\n";
},"15":function(container,depth0,helpers,partials,data) {
    return ", items_fragment";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":95,"column":10},"end":{"line":95,"column":32}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":0},"end":{"line":134,"column":0}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from flask import Blueprint, Flask, render_template\n\nfrom .config import get_settings\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":99,"column":11},"end":{"line":99,"column":26}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":99,"column":27},"end":{"line":99,"column":46}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":99,"column":6},"end":{"line":99,"column":47}}}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":0},"end":{"line":101,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":102,"column":6},"end":{"line":102,"column":21}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":102,"column":0},"end":{"line":104,"column":7}}})) != null ? stack1 : "")
    + "\nsettings = get_settings()\n\nweb_bp = Blueprint(\"web\", __name__)\n\n\n@web_bp.get(\"/\")\ndef home() -> str:\n    return render_template(\"home.html\", app_name=settings.app_name)\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":114,"column":6},"end":{"line":114,"column":25}}}),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":114,"column":0},"end":{"line":129,"column":7}}})) != null ? stack1 : "")
    + "\n\ndef register_web_blueprints(app: Flask) -> None:\n    app.register_blueprint(web_bp)\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "from .db import SessionLocal\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "\n\n@web_bp.get(\"/web/items\")\nasync def items_fragment() -> str:\n    items = await list_items()\n    return render_template(\"items.html\", items=items)\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":121,"column":10},"end":{"line":121,"column":25}}}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":121,"column":0},"end":{"line":129,"column":0}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    return "\n\n@web_bp.get(\"/web/items\")\nasync def items_fragment() -> str:\n    async with SessionLocal() as session:\n        items = await list_items(session)\n    return render_template(\"items.html\", items=items)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fastapi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":30}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":134,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/frontend/htmx/common/static/css/style.css.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return ":root {\n    color-scheme: light dark;\n    --text: #1a1a1a;\n    --muted: #666;\n    --border: #d9d9d9;\n    --accent: #f6a510;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: system-ui, -apple-system, \"Segoe UI\", sans-serif;\n    margin: 0;\n    line-height: 1.5;\n    color: var(--text);\n}\n\nheader {\n    display: flex;\n    align-items: baseline;\n    gap: 1.5rem;\n    padding: 0.75rem 1.5rem;\n    border-bottom: 1px solid var(--border);\n}\n\nheader a {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 600;\n}\n\nheader a:hover {\n    color: var(--accent);\n}\n\nmain {\n    max-width: 56rem;\n    margin: 2rem auto;\n    padding: 0 1.5rem;\n}\n\ntable {\n    width: 100%;\n    border-collapse: collapse;\n}\n\nth,\ntd {\n    padding: 0.5rem 0.75rem;\n    text-align: left;\n    border-bottom: 1px solid var(--border);\n}\n\nbutton {\n    font: inherit;\n    padding: 0.3rem 0.9rem;\n    border: 1px solid var(--border);\n    border-radius: 6px;\n    background: transparent;\n    cursor: pointer;\n}\n\nbutton:hover {\n    border-color: var(--accent);\n    color: var(--accent);\n}\n\ncode {\n    padding: 0.1rem 0.35rem;\n    border-radius: 4px;\n    background: #f2f2f2;\n}\n\n@media (prefers-color-scheme: dark) {\n    :root {\n        --text: #e8e8e8;\n        --border: #333;\n    }\n\n    code {\n        background: #222;\n    }\n}";
},"useData":true} }],
  ["python/frontend/htmx/django/apps/web/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/frontend/htmx/django/apps/web/urls.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.urls import path\n\nfrom . import views\n\nurlpatterns = [\n    path(\"\", views.home, name=\"home\"),\n    path(\"web/users/\", views.users_fragment, name=\"users-fragment\"),\n]\n";
},"useData":true} }],
  ["python/frontend/htmx/django/apps/web/views.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.contrib.auth import get_user_model\nfrom django.http import HttpRequest, HttpResponse\nfrom django.shortcuts import render\n\n\ndef home(request: HttpRequest) -> HttpResponse:\n    return render(request, \"home.html\")\n\n\ndef users_fragment(request: HttpRequest) -> HttpResponse:\n    users = get_user_model().objects.all().order_by(\"date_joined\")\n    return render(request, \"users_fragment.html\", {\"users\": users})\n";
},"useData":true} }],
  ["python/frontend/htmx/django/templates/base.html.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>{% block title %}"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":6,"column":28},"end":{"line":6,"column":43}}}) : helper)))
    + "{% endblock %}</title>\n    {% load static %}\n    <link rel=\"stylesheet\" href=\"{% static 'css/style.css' %}\">\n    <script src=\"https://unpkg.com/htmx.org@2.0.10/dist/htmx.min.js\" integrity=\"sha384-H5SrcfygHmAuTDZphMHqBJLc3FhssKjG7w/CeCpFReSfwBWDTKpkzPP8c+cLsK+V\" crossorigin=\"anonymous\"></script>\n    {% block head %}{% endblock %}\n</head>\n<body>\n    {% block content %}{% endblock %}\n</body>\n</html>";
},"useData":true} }],
  ["python/frontend/htmx/django/templates/home.html.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{% extends \"base.html\" %}\n{% block content %}\n<h1>Welcome</h1>\n<p>A TriStack project with an HTMX-powered web frontend.</p>\n<section id=\"users\"\n         hx-get=\"/web/users/\"\n         hx-trigger=\"load\"\n         hx-swap=\"innerHTML\">\n    <p>Loading users…</p>\n</section>\n{% endblock %}";
},"useData":true} }],
  ["python/frontend/htmx/django/templates/users_fragment.html.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{% if users %}\n<table>\n    <thead>\n        <tr>\n            <th>Username</th>\n            <th>Joined</th>\n        </tr>\n    </thead>\n    <tbody>\n        {% for user in users %}\n        <tr>\n            <td>{{ user.username }}</td>\n            <td>{{ user.date_joined|date:\"Y-m-d\" }}</td>\n        </tr>\n        {% endfor %}\n    </tbody>\n</table>\n<button hx-get=\"/web/users/\" hx-target=\"#users\" hx-swap=\"innerHTML\">Refresh</button>\n{% else %}\n<p>No users yet. Create one via the Django admin.</p>\n{% endif %}";
},"useData":true} }],
  ["python/migrations/alembic/alembic.ini", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "[alembic]\nscript_location = migrations\nprepend_sys_path = .\nsqlalchemy.url =\n\n[loggers]\nkeys = root,sqlalchemy,alembic\n\n[handlers]\nkeys = console\n\n[formatters]\nkeys = generic\n\n[logger_root]\nlevel = WARN\nhandlers = console\nqualname =\n\n[logger_sqlalchemy]\nlevel = WARN\nhandlers =\nqualname = sqlalchemy.engine\n\n[logger_alembic]\nlevel = INFO\nhandlers =\nqualname = alembic\n\n[handler_console]\nclass = StreamHandler\nargs = (sys.stderr,)\nlevel = NOTSET\nformatter = generic\n\n[formatter_generic]\nformat = %(levelname)-5.5s [%(name)s] %(message)s\ndatefmt = %H:%M:%S\n";
},"useData":true} }],
  ["python/migrations/alembic/migrations/env.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "\nfrom src.config import get_settings\nfrom src.models import Item\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlalchemy",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":31}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":16,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "\nfrom src.config import get_settings\nfrom src.models import Base\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "target_metadata = Item.metadata\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlalchemy",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":10},"end":{"line":25,"column":31}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":27,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "target_metadata = Base.metadata\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "import asyncio\nfrom logging.config import fileConfig\n\nfrom alembic import context\nfrom sqlalchemy import pool\nfrom sqlalchemy.engine import Connection\nfrom sqlalchemy.ext.asyncio import async_engine_from_config\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":25}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":16,"column":7}}})) != null ? stack1 : "")
    + "\nconfig = context.config\n\nif config.config_file_name is not None:\n    fileConfig(config.config_file_name)\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":23,"column":25}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + "\nsettings = get_settings()\n\n\ndef run_migrations_offline() -> None:\n    context.configure(\n        url=settings.database_url,\n        target_metadata=target_metadata,\n        literal_binds=True,\n        dialect_opts={\"paramstyle\": \"named\"},\n        compare_type=True,\n    )\n\n    with context.begin_transaction():\n        context.run_migrations()\n\n\ndef do_run_migrations(connection: Connection) -> None:\n    context.configure(connection=connection, target_metadata=target_metadata, compare_type=True)\n\n    with context.begin_transaction():\n        context.run_migrations()\n\n\nasync def run_async_migrations() -> None:\n    configuration = config.get_section(config.config_ini_section, {})\n    configuration[\"sqlalchemy.url\"] = settings.database_url\n\n    connectable = async_engine_from_config(\n        configuration,\n        prefix=\"sqlalchemy.\",\n        poolclass=pool.NullPool,\n    )\n\n    async with connectable.connect() as connection:\n        await connection.run_sync(do_run_migrations)\n\n    await connectable.dispose()\n\n\ndef run_migrations_online() -> None:\n    asyncio.run(run_async_migrations())\n\n\nif context.is_offline_mode():\n    run_migrations_offline()\nelse:\n    run_migrations_online()\n";
},"useData":true} }],
  ["python/migrations/alembic/migrations/script.py.mako", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "import sqlmodel\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from typing import Sequence, Union\n\nfrom alembic import op\nimport sqlalchemy as sa\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":25}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "${imports if imports else \"\"}\n\nrevision: str = ${repr(up_revision)}\ndown_revision: Union[str, None] = ${repr(down_revision)}\nbranch_labels: Union[str, Sequence[str], None] = ${repr(branch_labels)}\ndepends_on: Union[str, Sequence[str], None] = ${repr(depends_on)}\n\n\ndef upgrade() -> None:\n    ${upgrades if upgrades else \"pass\"}\n\n\ndef downgrade() -> None:\n    ${downgrades if downgrades else \"pass\"}\n";
},"useData":true} }],
  ["python/migrations/alembic/migrations/versions/.gitkeep", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/orm/sqlalchemy/src/db.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from sqlalchemy.pool import NullPool\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "engine = create_async_engine(settings.database_url, echo=settings.debug, poolclass=NullPool)\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "engine = create_async_engine(settings.database_url, echo=settings.debug)\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\n\nasync def init_db() -> None:\n    from .models import Base\n\n    async with engine.begin() as conn:\n        await conn.run_sync(Base.metadata.create_all)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from collections.abc import AsyncIterator\n\nfrom sqlalchemy.ext.asyncio import AsyncSession as AsyncSession\nfrom sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "\nfrom .config import get_settings\n\nsettings = get_settings()\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":28}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + "SessionLocal = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)\n\n\nasync def get_session() -> AsyncIterator[AsyncSession]:\n    async with SessionLocal() as session:\n        yield session\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":28}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":32,"column":7}}})) != null ? stack1 : "")
    + "\n\nasync def close_db() -> None:\n    await engine.dispose()\n";
},"useData":true} }],
  ["python/orm/sqlalchemy/src/models.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from datetime import UTC, datetime\nfrom uuid import uuid4\n\nfrom sqlalchemy import DateTime, String\nfrom sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column\n\n\nclass Base(DeclarativeBase):\n    pass\n\n\nclass Item(Base):\n    __tablename__ = \"items\"\n\n    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=lambda: str(uuid4()))\n    name: Mapped[str] = mapped_column(String(255))\n    created_at: Mapped[datetime] = mapped_column(\n        DateTime(timezone=True), default=lambda: datetime.now(UTC)\n    )\n";
},"useData":true} }],
  ["python/orm/sqlalchemy/src/repositories/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/orm/sqlalchemy/src/repositories/items.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from sqlalchemy import select\nfrom sqlalchemy.ext.asyncio import AsyncSession\n\nfrom ..models import Item\nfrom ..schemas.items import ItemResponse\n\n\nasync def create_item(session: AsyncSession, *, name: str) -> ItemResponse:\n    item = Item(name=name)\n    session.add(item)\n    await session.commit()\n    await session.refresh(item)\n    return ItemResponse.model_validate(item)\n\n\nasync def list_items(session: AsyncSession) -> list[ItemResponse]:\n    result = await session.execute(select(Item).order_by(Item.created_at.desc()))\n    items = result.scalars().all()\n    return [ItemResponse.model_validate(i) for i in items]\n";
},"useData":true} }],
  ["python/orm/sqlmodel/src/db.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from sqlalchemy.pool import NullPool\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "from .models import Item\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "engine = create_async_engine(settings.database_url, echo=settings.debug, poolclass=NullPool)\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "engine = create_async_engine(settings.database_url, echo=settings.debug)\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "\n\nasync def init_db() -> None:\n    async with engine.begin() as conn:\n        await conn.run_sync(Item.metadata.create_all)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from collections.abc import AsyncIterator\n\nfrom sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "from sqlmodel.ext.asyncio.session import AsyncSession as AsyncSession\n\nfrom .config import get_settings\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":28}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":12,"column":7}}})) != null ? stack1 : "")
    + "\nsettings = get_settings()\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":28}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + "SessionLocal = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)\n\n\nasync def get_session() -> AsyncIterator[AsyncSession]:\n    async with SessionLocal() as session:\n        yield session\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":27,"column":28}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":33,"column":7}}})) != null ? stack1 : "")
    + "\n\nasync def close_db() -> None:\n    await engine.dispose()\n";
},"useData":true} }],
  ["python/orm/sqlmodel/src/models.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from datetime import UTC, datetime\nfrom uuid import uuid4\n\nfrom sqlalchemy import Column, DateTime\nfrom sqlmodel import Field, SQLModel\n\n\nclass Item(SQLModel, table=True):\n    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True, max_length=36)\n    name: str = Field(max_length=255)\n    created_at: datetime = Field(\n        default_factory=lambda: datetime.now(UTC),\n        sa_column=Column(DateTime(timezone=True), nullable=False),\n    )\n";
},"useData":true} }],
  ["python/orm/sqlmodel/src/repositories/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/orm/sqlmodel/src/repositories/items.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from sqlmodel import col, select\nfrom sqlmodel.ext.asyncio.session import AsyncSession\n\nfrom ..models import Item\nfrom ..schemas.items import ItemResponse\n\n\nasync def create_item(session: AsyncSession, *, name: str) -> ItemResponse:\n    item = Item(name=name)\n    session.add(item)\n    await session.commit()\n    await session.refresh(item)\n    return ItemResponse.model_validate(item)\n\n\nasync def list_items(session: AsyncSession) -> list[ItemResponse]:\n    result = await session.exec(select(Item).order_by(col(Item.created_at).desc()))\n    items = result.all()\n    return [ItemResponse.model_validate(i) for i in items]\n";
},"useData":true} }],
  ["python/orm/tortoise/src/db.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from tortoise import Tortoise\n\nfrom .config import get_settings\n\nsettings = get_settings()\n\n\nasync def init_db() -> None:\n    await Tortoise.init(\n        db_url=settings.database_url,\n        modules={\"models\": [\"src.models\"]},\n        _enable_global_fallback=True,\n    )\n    await Tortoise.generate_schemas()\n\n\nasync def close_db() -> None:\n    await Tortoise.close_connections()\n";
},"useData":true} }],
  ["python/orm/tortoise/src/models.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from tortoise import fields\nfrom tortoise.models import Model\n\n\nclass Item(Model):\n    id = fields.UUIDField(primary_key=True)\n    name = fields.CharField(max_length=255)\n    created_at = fields.DatetimeField(auto_now_add=True)\n\n    class Meta:\n        table = \"items\"\n";
},"useData":true} }],
  ["python/orm/tortoise/src/repositories/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/orm/tortoise/src/repositories/items.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from ..models import Item\nfrom ..schemas.items import ItemResponse\n\n\ndef _to_response(item: Item) -> ItemResponse:\n    return ItemResponse(id=str(item.id), name=item.name, created_at=item.created_at)\n\n\nasync def create_item(*, name: str) -> ItemResponse:\n    return _to_response(await Item.create(name=name))\n\n\nasync def list_items() -> list[ItemResponse]:\n    return [_to_response(item) for item in await Item.all().order_by(\"-created_at\")]\n";
},"useData":true} }],
  ["rust/addons/clippy/clippy.toml", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "allow-unwrap-in-tests = true\n";
},"useData":true} }],
  ["rust/addons/docker/_dockerignore", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "target/\n.env\n.env.local\n.git\n.gitignore\n*.md\nDockerfile*\n";
},"useData":true} }],
  ["rust/addons/docker/docker-compose.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "    ports:\n      - \"8000:8000\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      DATABASE_URL: postgres://postgres:postgres@db:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":12,"column":57},"end":{"line":12,"column":73}}}) : helper)))
    + "\n    depends_on:\n      db:\n        condition: service_healthy\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":16,"column":31}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":24,"column":0}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      DATABASE_URL: mysql://root:password@db:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":50},"end":{"line":17,"column":66}}}) : helper)))
    + "\n    depends_on:\n      db:\n        condition: service_healthy\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":32}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":24,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "    volumes:\n      - appdata:/data\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  db:\n    image: postgres:16\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_DB: "
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":31,"column":19},"end":{"line":31,"column":35}}}) : helper)))
    + "\n    ports:\n      - \"5432:5432\"\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U postgres -d "
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":35,"column":53},"end":{"line":35,"column":69}}}) : helper)))
    + "\"]\n      interval: 5s\n      timeout: 5s\n      retries: 20\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":41,"column":10},"end":{"line":41,"column":31}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":0},"end":{"line":56,"column":0}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  db:\n    image: mysql:8\n    environment:\n      MYSQL_ROOT_PASSWORD: password\n      MYSQL_DATABASE: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":46,"column":22},"end":{"line":46,"column":38}}}) : helper)))
    + "\n    ports:\n      - \"3306:3306\"\n    healthcheck:\n      test: [\"CMD-SHELL\", \"MYSQL_PWD=$$MYSQL_ROOT_PASSWORD mysql -h 127.0.0.1 -u root -e 'SELECT 1'\"]\n      interval: 5s\n      timeout: 5s\n      retries: 20\n    volumes:\n      - mysqldata:/var/lib/mysql\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "volumes:\n  pgdata:\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":61,"column":10},"end":{"line":61,"column":31}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":61,"column":0},"end":{"line":67,"column":0}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "volumes:\n  mysqldata:\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":64,"column":10},"end":{"line":64,"column":32}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":0},"end":{"line":67,"column":0}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return "volumes:\n  appdata:\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "services:\n  app:\n    build: .\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":27}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "    environment:\n      APP_NAME: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":9,"column":32}}}) : helper)))
    + "\n      PORT: \"8000\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":30}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":30}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":58,"column":6},"end":{"line":58,"column":30}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":58,"column":0},"end":{"line":67,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/addons/docker/Dockerfile.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":30}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":8,"column":7}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    return "RUN apt-get update && apt-get install -y --no-install-recommends libpq-dev && rm -rf /var/lib/apt/lists/*\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":6,"column":10},"end":{"line":6,"column":31}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":8,"column":0}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "RUN apt-get update && apt-get install -y --no-install-recommends default-libmysqlclient-dev pkg-config && rm -rf /var/lib/apt/lists/*\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":111},"end":{"line":15,"column":135}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":15,"column":105},"end":{"line":15,"column":196}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return " libpq5";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":154},"end":{"line":15,"column":175}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":144},"end":{"line":15,"column":189}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return " libmariadb3";
},"8":function(container,depth0,helpers,partials,data) {
    return " && mkdir /data && chown app /data";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "ENV DATABASE_URL="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":23},"end":{"line":19,"column":40}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":19,"column":17},"end":{"line":19,"column":125}}})) != null ? stack1 : "")
    + "\nVOLUME /data\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "/data/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":48},"end":{"line":19,"column":64}}}) : helper)))
    + ".db";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "sqlite:///data/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":90},"end":{"line":19,"column":106}}}) : helper)))
    + ".db?mode=rwc";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "FROM rust:1-slim-bookworm AS builder\nWORKDIR /app\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":23}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "")
    + "COPY . .\nRUN cargo build --release\n\nFROM debian:bookworm-slim\nWORKDIR /app\nRUN apt-get update && apt-get install -y --no-install-recommends ca-certificates"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":86},"end":{"line":15,"column":103}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":80},"end":{"line":15,"column":203}}})) != null ? stack1 : "")
    + " && rm -rf /var/lib/apt/lists/*\nRUN useradd --system --uid 10001 --no-create-home app"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":59},"end":{"line":16,"column":81}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":53},"end":{"line":16,"column":124}}})) != null ? stack1 : "")
    + "\nCOPY --from=builder /app/target/release/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":40},"end":{"line":17,"column":56}}}) : helper)))
    + " /usr/local/bin/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":72},"end":{"line":17,"column":88}}}) : helper)))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":28}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + "USER app\n\nEXPOSE 8000\nENTRYPOINT [\"/usr/local/bin/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":25,"column":28},"end":{"line":25,"column":44}}}) : helper)))
    + "\"]\n";
},"useData":true} }],
  ["rust/addons/github-actions/.github/workflows/ci.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "      - name: Lint\n        run: cargo clippy --all-targets --all-features -- -D warnings\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: dtolnay/rust-toolchain@stable\n        with:\n          components: rustfmt, clippy\n      - name: Build\n        run: cargo build --all-targets\n      - name: Test\n        run: cargo test\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"clippy",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":38}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":23,"column":13}}})) != null ? stack1 : "")
    + "      - name: Format check\n        run: cargo fmt -- --check\n";
},"useData":true} }],
  ["rust/base/_gitignore", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "/target/\n**/*.rs.bk\n*.pdb\n.env\n.env.local\n.idea\n.vscode\n*.swp\n.DS_Store\nThumbs.db";
},"useData":true} }],
  ["rust/base/.gitkeep", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["rust/base/Cargo.toml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "serde = { version = \"1\", features = [\"derive\"] }\nchrono = { version = \"0.4\", features = [\"serde\"] }\nuuid = { version = \"1\", features = [\"v4\"] }\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "axum = \"0.8\"\ntokio = { version = \"1\", features = [\"full\"] }\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"actix-web",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":38,"column":0}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "actix-web = \"4\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":20,"column":23}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":0},"end":{"line":22,"column":7}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "tokio = { version = \"1\", features = [\"rt\"] }\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"rocket",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":10},"end":{"line":23,"column":33}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":38,"column":0}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "rocket = { version = \"0.5\", features = [\"json\"] }\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":23}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"warp",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":31}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":38,"column":0}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "warp = \"0.3\"\ntokio = { version = \"1\", features = [\"full\"] }\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"salvo",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":10},"end":{"line":31,"column":32}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":38,"column":0}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":32,"column":10},"end":{"line":32,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":26},"end":{"line":32,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":32,"column":47}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":32,"column":0},"end":{"line":36,"column":7}}})) != null ? stack1 : "")
    + "tokio = { version = \"1\", features = [\"full\"] }\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "salvo = { version = \"0.75\", features = [\"affix-state\"] }\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "salvo = \"0.75\"\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "askama = \"0.14\"\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":45,"column":6},"end":{"line":45,"column":28}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":51,"column":7}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    return "sea-orm = { version = \"1\", features = [\"sqlx-sqlite\", \"runtime-tokio-rustls\"] }\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":34}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":47,"column":0},"end":{"line":51,"column":0}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "sea-orm = { version = \"1\", features = [\"sqlx-postgres\", \"runtime-tokio-rustls\"] }\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":49,"column":10},"end":{"line":49,"column":31}}}),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":0},"end":{"line":51,"column":0}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return "sea-orm = { version = \"1\", features = [\"sqlx-mysql\", \"runtime-tokio-rustls\"] }\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":52,"column":10},"end":{"line":52,"column":27}}}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":52,"column":0},"end":{"line":69,"column":0}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":53,"column":6},"end":{"line":53,"column":28}}}),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":53,"column":0},"end":{"line":60,"column":7}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    return "diesel = { version = \"2\", features = [\"sqlite\", \"r2d2\", \"chrono\"] }\nlibsqlite3-sys = { version = \"0.32\", features = [\"bundled\"] }\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":56,"column":10},"end":{"line":56,"column":34}}}),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":56,"column":0},"end":{"line":60,"column":0}}})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    return "diesel = { version = \"2\", features = [\"postgres\", \"r2d2\", \"chrono\"] }\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":58,"column":10},"end":{"line":58,"column":31}}}),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":0},"end":{"line":60,"column":0}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    return "diesel = { version = \"2\", features = [\"mysql\", \"r2d2\", \"chrono\"] }\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx-rust",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":61,"column":10},"end":{"line":61,"column":30}}}),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":0},"end":{"line":69,"column":0}}})) != null ? stack1 : "");
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":62,"column":6},"end":{"line":62,"column":28}}}),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(30, data, 0),"data":data,"loc":{"start":{"line":62,"column":0},"end":{"line":68,"column":7}}})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    return "sqlx = { version = \"0.8\", features = [\"runtime-tokio\", \"sqlite\", \"chrono\"] }\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":64,"column":10},"end":{"line":64,"column":34}}}),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":64,"column":0},"end":{"line":68,"column":0}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    return "sqlx = { version = \"0.8\", features = [\"runtime-tokio\", \"tls-rustls\", \"postgres\", \"chrono\"] }\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":66,"column":10},"end":{"line":66,"column":31}}}),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":0},"end":{"line":68,"column":0}}})) != null ? stack1 : "");
},"33":function(container,depth0,helpers,partials,data) {
    return "sqlx = { version = \"0.8\", features = [\"runtime-tokio\", \"tls-rustls\", \"mysql\", \"chrono\"] }\n";
},"34":function(container,depth0,helpers,partials,data) {
    return "\n[dev-dependencies]\nsalvo = { version = \"0.75\", features = [\"test\"] }\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "\n[lints.clippy]\nall = { level = \"warn\", priority = -1 }\ndbg_macro = \"warn\"\ntodo = \"warn\"\nunwrap_used = \"warn\"\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[package]\nname = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":24}}}) : helper)))
    + "\"\nversion = \"0.1.0\"\nedition = \"2021\"\n\n[dependencies]\ndotenvy = \"0.15\"\nserde_json = \"1\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":13,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"axum",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":27}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":38,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":40,"column":6},"end":{"line":40,"column":26}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"seaorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":44,"column":6},"end":{"line":44,"column":23}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":44,"column":0},"end":{"line":69,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"salvo",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":70,"column":6},"end":{"line":70,"column":28}}}),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":0},"end":{"line":74,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"clippy",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":75,"column":6},"end":{"line":75,"column":32}}}),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":0},"end":{"line":82,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/base/env.example.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DATABASE_URL="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":19},"end":{"line":5,"column":41}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":328}}})) != null ? stack1 : "")
    + "\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":49},"end":{"line":5,"column":66}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":5,"column":43},"end":{"line":5,"column":139}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":68},"end":{"line":5,"column":84}}}) : helper)))
    + ".db";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "sqlite://"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":104},"end":{"line":5,"column":120}}}) : helper)))
    + ".db?mode=rwc";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":149},"end":{"line":5,"column":173}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":5,"column":139},"end":{"line":5,"column":321}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":219},"end":{"line":5,"column":235}}}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":245},"end":{"line":5,"column":266}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":235},"end":{"line":5,"column":321}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "mysql://root:password@127.0.0.1:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":305},"end":{"line":5,"column":321}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "APP_NAME="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":24}}}) : helper)))
    + "\nPORT=8000\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":26}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/core/src/config.rs.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "pub struct Config {\n    pub app_name: String,\n    pub port: u16,\n}\n\nimpl Config {\n    pub fn from_env() -> Self {\n        dotenvy::dotenv().ok();\n        let default_name = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":9,"column":28},"end":{"line":9,"column":43}}}) : helper)))
    + "\";\n        let app_name = std::env::var(\"APP_NAME\").unwrap_or_else(|_| default_name.to_string());\n        let port: u16 = std::env::var(\"PORT\")\n            .unwrap_or_else(|_| \"8000\".to_string())\n            .parse()\n            .expect(\"PORT must be a valid u16\");\n        Self { app_name, port }\n    }\n}\n";
},"useData":true} }],
  ["rust/framework/actix-web/src/api.rs.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "use actix_web::{web, HttpResponse};\nuse serde_json::json;\n\nuse crate::service::{self, ServiceError};\nuse crate::AppState;\n\npub async fn list_items(state: web::Data<AppState>) -> HttpResponse {\n    match service::list_items(&state.db).await {\n        Ok(items) => HttpResponse::Ok().json(items),\n        Err(err) => error_response(&err),\n    }\n}\n\npub async fn create_item(state: web::Data<AppState>, body: web::Bytes) -> HttpResponse {\n    match service::create_item(&state.db, &body).await {\n        Ok(item) => HttpResponse::Created().json(item),\n        Err(err) => error_response(&err),\n    }\n}\n\nfn error_response(err: &ServiceError) -> HttpResponse {\n    let mut response = match err {\n        ServiceError::BadRequest(_) => HttpResponse::BadRequest(),\n        ServiceError::Internal(_) => HttpResponse::InternalServerError(),\n    };\n    response.json(json!({ \"error\": err.to_string() }))\n}\n";
},"useData":true} }],
  ["rust/framework/actix-web/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod api;\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "mod db;\nmod models;\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "mod pages;\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "mod service;\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "mod views;\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n#[derive(Clone)]\npub struct AppState {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":26}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":21}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + "}\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "    pub app_name: String,\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    pub db: db::Db,\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "    let db = db::connect().await.unwrap_or_else(|err| {\n        eprintln!(\"database not ready: {err}\");\n        std::process::exit(1);\n    });\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":46,"column":6},"end":{"line":46,"column":26}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":46,"column":0},"end":{"line":55,"column":7}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    let state = AppState {\n        app_name: app_config.app_name,\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":49,"column":6},"end":{"line":49,"column":21}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":0},"end":{"line":51,"column":7}}})) != null ? stack1 : "")
    + "    };\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        db,\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "    let state = AppState { db };\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "    HttpServer::new(move || {\n        App::new()\n            .app_data(web::Data::new(state.clone()))\n            .configure(routes)\n    })\n    .bind(addr)?\n    .run()\n    .await\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "    HttpServer::new(|| App::new().configure(routes))\n        .bind(addr)?\n        .run()\n        .await\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "    cfg.service(\n        web::resource(\"/api/v1/items\")\n            .route(web::get().to(api::list_items))\n            .route(web::post().to(api::create_item)),\n    );\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "    cfg.route(\"/\", web::get().to(pages::index));\n    cfg.route(\"/web/now\", web::get().to(pages::now));\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "    cfg.route(\"/web/items\", web::get().to(pages::items));\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use actix_web::{web, App, HttpResponse, HttpServer};\nuse serde_json::json;\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "mod config;\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":26}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":26}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":26},"end":{"line":21,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":21,"column":47}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":32,"column":7}}})) != null ? stack1 : "")
    + "\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    let app_config = config::Config::from_env();\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":21}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "")
    + "    let addr = format!(\"0.0.0.0:{}\", app_config.port);\n    println!(\"{} listening on {}\", app_config.app_name, addr);\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":45,"column":10},"end":{"line":45,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":45,"column":26},"end":{"line":45,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":45,"column":6},"end":{"line":45,"column":47}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":58,"column":10},"end":{"line":58,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":58,"column":26},"end":{"line":58,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":58,"column":6},"end":{"line":58,"column":47}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":58,"column":0},"end":{"line":72,"column":7}}})) != null ? stack1 : "")
    + "}\n\nfn routes(cfg: &mut web::ServiceConfig) {\n    cfg.route(\"/health\", web::get().to(health));\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":77,"column":6},"end":{"line":77,"column":21}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":0},"end":{"line":83,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":84,"column":6},"end":{"line":84,"column":26}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":84,"column":0},"end":{"line":87,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":88,"column":11},"end":{"line":88,"column":31}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":88,"column":32},"end":{"line":88,"column":47}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":88,"column":6},"end":{"line":88,"column":48}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":0},"end":{"line":90,"column":7}}})) != null ? stack1 : "")
    + "}\n\nasync fn health() -> HttpResponse {\n    HttpResponse::Ok().json(json!({ \"status\": \"ok\" }))\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[actix_web::test]\n    async fn health_returns_status_ok() {\n        let app =\n            actix_web::test::init_service(App::new().route(\"/health\", web::get().to(health))).await;\n        let request = actix_web::test::TestRequest::get()\n            .uri(\"/health\")\n            .to_request();\n        let response = actix_web::test::call_service(&app, request).await;\n        assert!(response.status().is_success());\n    }\n}\n";
},"useData":true} }],
  ["rust/framework/actix-web/src/pages.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "use crate::service;\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "\npub async fn items(state: web::Data<AppState>) -> HttpResponse {\n    match service::list_items(&state.db).await {\n        Ok(items) => html(views::items(&items)),\n        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),\n    }\n}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use actix_web::{web, HttpResponse};\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "use crate::views;\nuse crate::AppState;\n\npub async fn index(state: web::Data<AppState>) -> HttpResponse {\n    html(views::index(&state.app_name))\n}\n\npub async fn now() -> HttpResponse {\n    html(views::now())\n}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "")
    + "\nfn html(body: String) -> HttpResponse {\n    HttpResponse::Ok()\n        .content_type(\"text/html; charset=utf-8\")\n        .body(body)\n}\n";
},"useData":true} }],
  ["rust/framework/axum/src/api.rs.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "use axum::body::Bytes;\nuse axum::extract::State;\nuse axum::http::StatusCode;\nuse axum::response::{IntoResponse, Response};\nuse axum::Json;\nuse serde_json::json;\n\nuse crate::service::{self, ServiceError};\nuse crate::AppState;\n\npub async fn list_items(State(state): State<AppState>) -> Response {\n    match service::list_items(&state.db).await {\n        Ok(items) => Json(items).into_response(),\n        Err(err) => error_response(&err),\n    }\n}\n\npub async fn create_item(State(state): State<AppState>, body: Bytes) -> Response {\n    match service::create_item(&state.db, &body).await {\n        Ok(item) => (StatusCode::CREATED, Json(item)).into_response(),\n        Err(err) => error_response(&err),\n    }\n}\n\nfn error_response(err: &ServiceError) -> Response {\n    let status = match err {\n        ServiceError::BadRequest(_) => StatusCode::BAD_REQUEST,\n        ServiceError::Internal(_) => StatusCode::INTERNAL_SERVER_ERROR,\n    };\n    (status, Json(json!({ \"error\": err.to_string() }))).into_response()\n}\n";
},"useData":true} }],
  ["rust/framework/axum/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod api;\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "mod db;\nmod models;\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "mod pages;\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "mod service;\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "mod views;\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n#[derive(Clone)]\npub struct AppState {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":26}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":21}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + "}\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "    pub app_name: String,\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    pub db: db::Db,\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "    let db = db::connect().await.unwrap_or_else(|err| {\n        eprintln!(\"database not ready: {err}\");\n        std::process::exit(1);\n    });\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":47,"column":6},"end":{"line":47,"column":26}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":47,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "")
    + "\n    let router = Router::new()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":59,"column":6},"end":{"line":59,"column":21}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":0},"end":{"line":61,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":62,"column":6},"end":{"line":62,"column":26}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":0},"end":{"line":65,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":66,"column":11},"end":{"line":66,"column":31}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":66,"column":32},"end":{"line":66,"column":47}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":66,"column":6},"end":{"line":66,"column":48}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":0},"end":{"line":68,"column":7}}})) != null ? stack1 : "")
    + "        .with_state(state)\n        .route(\"/health\", get(health));\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    let state = AppState {\n        app_name: app_config.app_name,\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":50,"column":6},"end":{"line":50,"column":21}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":0},"end":{"line":52,"column":7}}})) != null ? stack1 : "")
    + "    };\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        db,\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "    let state = AppState { db };\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        .route(\"/api/v1/items\", get(api::list_items).post(api::create_item))\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "        .route(\"/\", get(pages::index))\n        .route(\"/web/now\", get(pages::now))\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "        .route(\"/web/items\", get(pages::items))\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "    let router = Router::new().route(\"/health\", get(health));\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use axum::{routing::get, Json, Router};\nuse serde_json::{json, Value};\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "mod config;\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":26}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":26}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":26},"end":{"line":21,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":21,"column":47}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":32,"column":7}}})) != null ? stack1 : "")
    + "\n#[tokio::main]\nasync fn main() {\n    let app_config = config::Config::from_env();\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":21}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "")
    + "    let addr = format!(\"0.0.0.0:{}\", app_config.port);\n    println!(\"{} listening on {}\", app_config.app_name, addr);\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":46,"column":10},"end":{"line":46,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":46,"column":26},"end":{"line":46,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":46,"column":6},"end":{"line":46,"column":47}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":46,"column":0},"end":{"line":73,"column":7}}})) != null ? stack1 : "")
    + "\n    let listener = tokio::net::TcpListener::bind(&addr)\n        .await\n        .expect(\"failed to bind\");\n    axum::serve(listener, router).await.expect(\"server error\");\n}\n\nasync fn health() -> Json<Value> {\n    Json(json!({ \"status\": \"ok\" }))\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[tokio::test]\n    async fn health_returns_status_ok() {\n        assert_eq!(health().await.0, json!({ \"status\": \"ok\" }));\n    }\n}\n";
},"useData":true} }],
  ["rust/framework/axum/src/pages.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "use axum::http::StatusCode;\nuse axum::response::{Html, IntoResponse, Response};\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "use axum::response::Html;\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "use crate::service;\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\npub async fn items(State(state): State<AppState>) -> Response {\n    match service::list_items(&state.db).await {\n        Ok(items) => Html(views::items(&items)).into_response(),\n        Err(err) => (StatusCode::INTERNAL_SERVER_ERROR, err.to_string()).into_response(),\n    }\n}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use axum::extract::State;\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":21}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + "use crate::views;\nuse crate::AppState;\n\npub async fn index(State(state): State<AppState>) -> Html<String> {\n    Html(views::index(&state.app_name))\n}\n\npub async fn now() -> Html<String> {\n    Html(views::now())\n}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":22,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/framework/none/src/main.rs.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "fn main() {\n    println!(\"Hello from "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":2,"column":25},"end":{"line":2,"column":40}}}) : helper)))
    + "!\");\n}";
},"useData":true} }],
  ["rust/framework/rocket/src/api.rs.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "use rocket::http::Status;\nuse rocket::serde::json::Json;\nuse rocket::State;\nuse serde_json::{json, Value};\n\nuse crate::models::Item;\nuse crate::service::{self, ServiceError};\nuse crate::AppState;\n\ntype ApiError = (Status, Json<Value>);\n\n#[get(\"/api/v1/items\")]\npub async fn list_items(state: &State<AppState>) -> Result<Json<Vec<Item>>, ApiError> {\n    service::list_items(&state.db)\n        .await\n        .map(Json)\n        .map_err(|err| error_response(&err))\n}\n\n#[post(\"/api/v1/items\", data = \"<body>\")]\npub async fn create_item(\n    state: &State<AppState>,\n    body: Vec<u8>,\n) -> Result<(Status, Json<Item>), ApiError> {\n    service::create_item(&state.db, &body)\n        .await\n        .map(|item| (Status::Created, Json(item)))\n        .map_err(|err| error_response(&err))\n}\n\nfn error_response(err: &ServiceError) -> ApiError {\n    let status = match err {\n        ServiceError::BadRequest(_) => Status::BadRequest,\n        ServiceError::Internal(_) => Status::InternalServerError,\n    };\n    (status, Json(json!({ \"error\": err.to_string() })))\n}\n";
},"useData":true} }],
  ["rust/framework/rocket/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod api;\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "mod db;\nmod models;\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "mod pages;\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "mod service;\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "mod views;\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n#[derive(Clone)]\npub struct AppState {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":26}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":31,"column":21}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":33,"column":7}}})) != null ? stack1 : "")
    + "}\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "    pub app_name: String,\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    pub db: db::Db,\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "    let db = db::connect().await.unwrap_or_else(|err| {\n        eprintln!(\"database not ready: {err}\");\n        std::process::exit(1);\n    });\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":61,"column":6},"end":{"line":61,"column":26}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":61,"column":0},"end":{"line":70,"column":7}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    let state = AppState {\n        app_name: app_config.app_name,\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":64,"column":6},"end":{"line":64,"column":21}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":0},"end":{"line":66,"column":7}}})) != null ? stack1 : "")
    + "    };\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        db,\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "    let state = AppState { db };\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    rocket::custom(config)\n        .manage(state)\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":76,"column":6},"end":{"line":76,"column":21}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":0},"end":{"line":78,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":79,"column":6},"end":{"line":79,"column":26}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":0},"end":{"line":81,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":82,"column":11},"end":{"line":82,"column":31}}}),(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":82,"column":32},"end":{"line":82,"column":47}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":82,"column":6},"end":{"line":82,"column":48}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":0},"end":{"line":84,"column":7}}})) != null ? stack1 : "")
    + "        .mount(\"/\", routes![health])\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "        .mount(\"/\", routes![api::list_items, api::create_item])\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "        .mount(\"/\", routes![pages::index, pages::now])\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "        .mount(\"/\", routes![pages::items])\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "    rocket::custom(config).mount(\"/\", routes![health])\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "#[macro_use]\nextern crate rocket;\n\nuse rocket::serde::json::Json;\nuse serde_json::{json, Value};\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "")
    + "mod config;\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":26}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":21,"column":26}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":24,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":26},"end":{"line":24,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":47}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "")
    + "\n#[get(\"/health\")]\nfn health() -> Json<Value> {\n    Json(json!({ \"status\": \"ok\" }))\n}\n\n#[launch]\nasync fn rocket() -> _ {\n    let app_config = config::Config::from_env();\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":45,"column":6},"end":{"line":45,"column":21}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "")
    + "    let config = rocket::Config {\n        address: std::net::Ipv4Addr::UNSPECIFIED.into(),\n        port: app_config.port,\n        ..rocket::Config::default()\n    };\n    println!(\n        \"{} listening on 0.0.0.0:{}\",\n        app_config.app_name, config.port,\n    );\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":60,"column":10},"end":{"line":60,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":60,"column":26},"end":{"line":60,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":60,"column":6},"end":{"line":60,"column":47}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":0},"end":{"line":71,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":73,"column":10},"end":{"line":73,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":73,"column":26},"end":{"line":73,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":73,"column":6},"end":{"line":73,"column":47}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":73,"column":0},"end":{"line":88,"column":7}}})) != null ? stack1 : "")
    + "}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn health_returns_status_ok() {\n        assert_eq!(health().0, json!({ \"status\": \"ok\" }));\n    }\n}\n";
},"useData":true} }],
  ["rust/framework/rocket/src/pages.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "use rocket::http::Status;\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "use crate::service;\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\n#[get(\"/web/items\")]\npub async fn items(state: &State<AppState>) -> Result<RawHtml<String>, (Status, String)> {\n    service::list_items(&state.db)\n        .await\n        .map(|items| RawHtml(views::items(&items)))\n        .map_err(|err| (Status::InternalServerError, err.to_string()))\n}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":7}}})) != null ? stack1 : "")
    + "use rocket::response::content::RawHtml;\nuse rocket::State;\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "")
    + "use crate::views;\nuse crate::AppState;\n\n#[get(\"/\")]\npub fn index(state: &State<AppState>) -> RawHtml<String> {\n    RawHtml(views::index(&state.app_name))\n}\n\n#[get(\"/web/now\")]\npub fn now() -> RawHtml<String> {\n    RawHtml(views::now())\n}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":22,"column":21}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":31,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/framework/salvo/src/api.rs.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "use salvo::prelude::*;\nuse serde_json::json;\n\nuse crate::service::{self, ServiceError};\nuse crate::AppState;\n\npub fn router() -> Router {\n    Router::with_path(\"api/v1/items\")\n        .get(list_items)\n        .post(create_item)\n}\n\n#[handler]\nasync fn list_items(depot: &mut Depot, res: &mut Response) {\n    let state = AppState::from_depot(depot);\n    match service::list_items(&state.db).await {\n        Ok(items) => res.render(Json(items)),\n        Err(err) => error_response(res, &err),\n    }\n}\n\n#[handler]\nasync fn create_item(req: &mut Request, depot: &mut Depot, res: &mut Response) {\n    let body = req\n        .payload()\n        .await\n        .map(|bytes| bytes.to_vec())\n        .unwrap_or_default();\n    let state = AppState::from_depot(depot);\n    match service::create_item(&state.db, &body).await {\n        Ok(item) => {\n            res.status_code(StatusCode::CREATED);\n            res.render(Json(item));\n        }\n        Err(err) => error_response(res, &err),\n    }\n}\n\nfn error_response(res: &mut Response, err: &ServiceError) {\n    res.status_code(match err {\n        ServiceError::BadRequest(_) => StatusCode::BAD_REQUEST,\n        ServiceError::Internal(_) => StatusCode::INTERNAL_SERVER_ERROR,\n    });\n    res.render(Json(json!({ \"error\": err.to_string() })));\n}\n";
},"useData":true} }],
  ["rust/framework/salvo/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod api;\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "mod db;\nmod models;\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "mod pages;\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "mod service;\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "mod views;\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n#[derive(Clone)]\npub struct AppState {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":26}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":21}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + "}\n\nimpl AppState {\n    pub fn from_depot(depot: &Depot) -> &Self {\n        depot\n            .obtain::<Self>()\n            .expect(\"AppState is injected in main\")\n    }\n}\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "    pub app_name: String,\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    pub db: db::Db,\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "    let db = db::connect().await.unwrap_or_else(|err| {\n        eprintln!(\"database not ready: {err}\");\n        std::process::exit(1);\n    });\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":59,"column":6},"end":{"line":59,"column":26}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":59,"column":0},"end":{"line":68,"column":7}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    let state = AppState {\n        app_name: app_config.app_name,\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":62,"column":6},"end":{"line":62,"column":21}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":0},"end":{"line":64,"column":7}}})) != null ? stack1 : "")
    + "    };\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        db,\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "    let state = AppState { db };\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    let router = Router::new()\n        .hoop(affix_state::inject(state))\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":74,"column":6},"end":{"line":74,"column":21}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":0},"end":{"line":76,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":77,"column":6},"end":{"line":77,"column":26}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":0},"end":{"line":79,"column":7}}})) != null ? stack1 : "")
    + "        .push(Router::with_path(\"health\").get(health));\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "        .push(api::router())\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "        .push(pages::router())\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "    let router = Router::with_path(\"health\").get(health);\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use salvo::prelude::*;\nuse serde_json::json;\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "mod config;\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":26}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":26}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":26},"end":{"line":21,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":21,"column":47}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":40,"column":7}}})) != null ? stack1 : "")
    + "\n#[handler]\nasync fn health(res: &mut Response) {\n    res.render(Json(json!({ \"status\": \"ok\" })));\n}\n\n#[tokio::main]\nasync fn main() {\n    let app_config = config::Config::from_env();\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":50,"column":6},"end":{"line":50,"column":21}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":0},"end":{"line":55,"column":7}}})) != null ? stack1 : "")
    + "    let addr = format!(\"0.0.0.0:{}\", app_config.port);\n    println!(\"{} listening on {}\", app_config.app_name, addr);\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":58,"column":10},"end":{"line":58,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":58,"column":26},"end":{"line":58,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":58,"column":6},"end":{"line":58,"column":47}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":0},"end":{"line":69,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":71,"column":10},"end":{"line":71,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":71,"column":26},"end":{"line":71,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":71,"column":6},"end":{"line":71,"column":47}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":71,"column":0},"end":{"line":83,"column":7}}})) != null ? stack1 : "")
    + "\n    let listener = TcpListener::new(addr).bind().await;\n    Server::new(listener).serve(router).await;\n}\n\n#[cfg(test)]\nmod tests {\n    use salvo::test::{ResponseExt, TestClient};\n\n    use super::*;\n\n    #[tokio::test]\n    async fn health_returns_status_ok() {\n        let service = Service::new(Router::with_path(\"health\").get(health));\n        let body = TestClient::get(\"http://127.0.0.1/health\")\n            .send(&service)\n            .await\n            .take_string()\n            .await\n            .expect(\"response body\");\n        assert_eq!(body, r#\"{\"status\":\"ok\"}\"#);\n    }\n}\n";
},"useData":true} }],
  ["rust/framework/salvo/src/pages.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "use crate::service;\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "        .push(Router::with_path(\"web/items\").get(items))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\n#[handler]\nasync fn items(depot: &mut Depot, res: &mut Response) {\n    let state = AppState::from_depot(depot);\n    match service::list_items(&state.db).await {\n        Ok(list) => res.render(Text::Html(views::items(&list))),\n        Err(err) => {\n            res.status_code(StatusCode::INTERNAL_SERVER_ERROR);\n            res.render(Text::Plain(err.to_string()));\n        }\n    }\n}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use salvo::prelude::*;\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "use crate::views;\nuse crate::AppState;\n\npub fn router() -> Router {\n    Router::new()\n        .get(index)\n        .push(Router::with_path(\"web/now\").get(now))\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "")
    + "}\n\n#[handler]\nasync fn index(depot: &mut Depot, res: &mut Response) {\n    let state = AppState::from_depot(depot);\n    res.render(Text::Html(views::index(&state.app_name)));\n}\n\n#[handler]\nasync fn now(res: &mut Response) {\n    res.render(Text::Html(views::now()));\n}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":21}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":41,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/framework/warp/src/api.rs.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "use std::convert::Infallible;\n\nuse serde_json::json;\nuse warp::http::StatusCode;\nuse warp::hyper::body::Bytes;\nuse warp::reply::{self, Response};\nuse warp::{Filter, Rejection, Reply};\n\nuse crate::service::{self, ServiceError};\nuse crate::AppState;\n\nconst MAX_BODY_BYTES: u64 = 1024 * 1024;\n\npub fn routes(state: AppState) -> impl Filter<Extract = (Response,), Error = Rejection> + Clone {\n    let with_state = warp::any().map(move || state.clone());\n    let list = warp::path!(\"api\" / \"v1\" / \"items\")\n        .and(warp::get())\n        .and(with_state.clone())\n        .and_then(list_items);\n    let create = warp::path!(\"api\" / \"v1\" / \"items\")\n        .and(warp::post())\n        .and(warp::body::content_length_limit(MAX_BODY_BYTES))\n        .and(warp::body::bytes())\n        .and(with_state)\n        .and_then(create_item);\n    list.or(create).unify()\n}\n\nasync fn list_items(state: AppState) -> Result<Response, Infallible> {\n    Ok(match service::list_items(&state.db).await {\n        Ok(items) => reply::json(&items).into_response(),\n        Err(err) => error_response(&err),\n    })\n}\n\nasync fn create_item(body: Bytes, state: AppState) -> Result<Response, Infallible> {\n    Ok(match service::create_item(&state.db, &body).await {\n        Ok(item) => reply::with_status(reply::json(&item), StatusCode::CREATED).into_response(),\n        Err(err) => error_response(&err),\n    })\n}\n\nfn error_response(err: &ServiceError) -> Response {\n    let status = match err {\n        ServiceError::BadRequest(_) => StatusCode::BAD_REQUEST,\n        ServiceError::Internal(_) => StatusCode::INTERNAL_SERVER_ERROR,\n    };\n    reply::with_status(reply::json(&json!({ \"error\": err.to_string() })), status).into_response()\n}\n";
},"useData":true} }],
  ["rust/framework/warp/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod api;\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "mod db;\nmod models;\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "mod pages;\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "mod service;\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "mod views;\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n#[derive(Clone)]\npub struct AppState {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":26}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":21}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + "}\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "    pub app_name: String,\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    pub db: db::Db,\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "    let db = db::connect().await.unwrap_or_else(|err| {\n        eprintln!(\"database not ready: {err}\");\n        std::process::exit(1);\n    });\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":48,"column":6},"end":{"line":48,"column":26}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":48,"column":0},"end":{"line":57,"column":7}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    let state = AppState {\n        app_name: app_config.app_name,\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":51,"column":6},"end":{"line":51,"column":21}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":0},"end":{"line":53,"column":7}}})) != null ? stack1 : "")
    + "    };\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        db,\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "    let state = AppState { db };\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    let routes = health()\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":62,"column":6},"end":{"line":62,"column":21}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":0},"end":{"line":64,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":65,"column":6},"end":{"line":65,"column":26}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":0},"end":{"line":67,"column":7}}})) != null ? stack1 : "")
    + "        .with(warp::cors().allow_any_origin());\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        .or(api::routes(state"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":63,"column":35},"end":{"line":63,"column":55}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":29},"end":{"line":63,"column":72}}})) != null ? stack1 : "")
    + "))\n";
},"15":function(container,depth0,helpers,partials,data) {
    return ".clone()";
},"16":function(container,depth0,helpers,partials,data) {
    return "        .or(pages::routes(state))\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "    let routes = health().with(warp::cors().allow_any_origin());\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use serde_json::json;\nuse warp::{Filter, Rejection, Reply};\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "mod config;\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":26}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":26}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":26},"end":{"line":21,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":21,"column":47}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":32,"column":7}}})) != null ? stack1 : "")
    + "\n#[tokio::main]\nasync fn main() {\n    let app_config = config::Config::from_env();\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":21}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "")
    + "    println!(\n        \"{} listening on 0.0.0.0:{}\",\n        app_config.app_name, app_config.port,\n    );\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":47,"column":26},"end":{"line":47,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":47,"column":6},"end":{"line":47,"column":47}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":0},"end":{"line":58,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"or")||(depth0 && lookupProperty(depth0,"or"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":60,"column":10},"end":{"line":60,"column":25}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"frontend") : depth0),"htmx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":60,"column":26},"end":{"line":60,"column":46}}}),{"name":"or","hash":{},"data":data,"loc":{"start":{"line":60,"column":6},"end":{"line":60,"column":47}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":60,"column":0},"end":{"line":71,"column":7}}})) != null ? stack1 : "")
    + "    warp::serve(routes)\n        .run(([0, 0, 0, 0], app_config.port))\n        .await;\n}\n\nfn health() -> impl Filter<Extract = (impl Reply,), Error = Rejection> + Clone {\n    warp::path!(\"health\")\n        .and(warp::get())\n        .map(|| warp::reply::json(&json!({ \"status\": \"ok\" })))\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[tokio::test]\n    async fn health_returns_status_ok() {\n        let response = warp::test::request().path(\"/health\").reply(&health()).await;\n        assert_eq!(response.status(), warp::http::StatusCode::OK);\n        assert_eq!(response.body().as_ref(), br#\"{\"status\":\"ok\"}\"#);\n    }\n}\n";
},"useData":true} }],
  ["rust/framework/warp/src/pages.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "use std::convert::Infallible;\n\nuse warp::http::StatusCode;\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "use crate::service;\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "    let with_state = warp::any().map(move || state.clone());\n    let index = warp::path::end()\n        .and(warp::get())\n        .and(with_state.clone())\n        .map(|state: AppState| reply::html(views::index(&state.app_name)).into_response());\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    let index = warp::path::end()\n        .and(warp::get())\n        .map(move || reply::html(views::index(&state.app_name)).into_response());\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "    let items = warp::path!(\"web\" / \"items\")\n        .and(warp::get())\n        .and(with_state)\n        .and_then(items);\n    index.or(now).unify().or(items).unify()\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "    index.or(now).unify()\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "\nasync fn items(state: AppState) -> Result<Response, Infallible> {\n    Ok(match service::list_items(&state.db).await {\n        Ok(items) => reply::html(views::items(&items)).into_response(),\n        Err(err) => {\n            reply::with_status(err.to_string(), StatusCode::INTERNAL_SERVER_ERROR).into_response()\n        }\n    })\n}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "use warp::reply::{self, Response};\nuse warp::{Filter, Rejection, Reply};\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + "use crate::views;\nuse crate::AppState;\n\npub fn routes(state: AppState) -> impl Filter<Extract = (Response,), Error = Rejection> + Clone {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":26,"column":7}}})) != null ? stack1 : "")
    + "    let now = warp::path!(\"web\" / \"now\")\n        .and(warp::get())\n        .map(|| reply::html(views::now()).into_response());\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":30,"column":21}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":38,"column":7}}})) != null ? stack1 : "")
    + "}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":40,"column":6},"end":{"line":40,"column":21}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/frontend/htmx/common/src/views.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "use crate::models::Item;\n\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "\n#[derive(Template)]\n#[template(path = \"items.html\")]\nstruct ItemsTemplate<'a> {\n    items: &'a [Item],\n}\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\npub fn items(items: &[Item]) -> String {\n    render(&ItemsTemplate { items })\n}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use askama::Template;\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "#[derive(Template)]\n#[template(path = \"index.html\")]\nstruct IndexTemplate<'a> {\n    app_name: &'a str,\n}\n\n#[derive(Template)]\n#[template(path = \"now.html\")]\nstruct NowTemplate {\n    now: u64,\n}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "")
    + "\npub fn index(app_name: &str) -> String {\n    render(&IndexTemplate { app_name })\n}\n\npub fn now() -> String {\n    let now = std::time::SystemTime::now()\n        .duration_since(std::time::UNIX_EPOCH)\n        .map(|elapsed| elapsed.as_secs())\n        .unwrap_or_default();\n    render(&NowTemplate { now })\n}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":38,"column":6},"end":{"line":38,"column":21}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":43,"column":7}}})) != null ? stack1 : "")
    + "\nfn render(template: &impl Template) -> String {\n    template.render().unwrap_or_else(|err| err.to_string())\n}\n";
},"useData":true} }],
  ["rust/frontend/htmx/common/templates/index.html.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "        <section id=\"items\"\n                 hx-get=\"/web/items\"\n                 hx-trigger=\"load\"\n                 hx-swap=\"innerHTML\">\n            <p>Loading items…</p>\n        </section>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>{{ app_name }}</title>\n    <style>\n        :root {\n            color-scheme: light dark;\n            --text: #1a1a1a;\n            --muted: #666;\n            --border: #d9d9d9;\n            --accent: #f6a510;\n        }\n\n        * {\n            box-sizing: border-box;\n        }\n\n        body {\n            font-family: system-ui, -apple-system, \"Segoe UI\", sans-serif;\n            margin: 0;\n            line-height: 1.5;\n            color: var(--text);\n        }\n\n        header {\n            display: flex;\n            align-items: baseline;\n            gap: 1.5rem;\n            padding: 0.75rem 1.5rem;\n            border-bottom: 1px solid var(--border);\n        }\n\n        header a {\n            color: inherit;\n            text-decoration: none;\n            font-weight: 600;\n        }\n\n        header a:hover {\n            color: var(--accent);\n        }\n\n        main {\n            max-width: 56rem;\n            margin: 2rem auto;\n            padding: 0 1.5rem;\n        }\n\n        table {\n            border-collapse: collapse;\n            margin-bottom: 1rem;\n        }\n\n        th,\n        td {\n            padding: 0.4rem 0.75rem;\n            border-bottom: 1px solid var(--border);\n            text-align: left;\n        }\n\n        code {\n            padding: 0.1rem 0.35rem;\n            border-radius: 4px;\n            background: #f2f2f2;\n        }\n\n        @media (prefers-color-scheme: dark) {\n            :root {\n                --text: #e8e8e8;\n                --border: #333;\n            }\n\n            code {\n                background: #222;\n            }\n        }\n    </style>\n    <script src=\"https://unpkg.com/htmx.org@2.0.10/dist/htmx.min.js\" integrity=\"sha384-H5SrcfygHmAuTDZphMHqBJLc3FhssKjG7w/CeCpFReSfwBWDTKpkzPP8c+cLsK+V\" crossorigin=\"anonymous\" defer></script>\n</head>\n<body>\n    <header>\n        <a href=\"/\">{{ app_name }}</a>\n    </header>\n    <main>\n        <h1>{{ app_name }}</h1>\n        <p>A TriStack project with an HTMX-powered web frontend.</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":89,"column":6},"end":{"line":89,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":89,"column":0},"end":{"line":96,"column":7}}})) != null ? stack1 : "")
    + "        <section id=\"clock\"\n                 hx-get=\"/web/now\"\n                 hx-trigger=\"load\"\n                 hx-swap=\"innerHTML\">\n            <p>Loading…</p>\n        </section>\n    </main>\n</body>\n</html>";
},"useData":true} }],
  ["rust/frontend/htmx/common/templates/items.html.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{% if items.is_empty() %}\n<p>No items yet. Create one with <code>POST /api/v1/items</code>.</p>\n{% else %}\n<table>\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Created</th>\n        </tr>\n    </thead>\n    <tbody>\n        {% for item in items %}\n        <tr>\n            <td>{{ item.name }}</td>\n            <td>{{ item.created_at.format(\"%Y-%m-%d %H:%M\") }}</td>\n        </tr>\n        {% endfor %}\n    </tbody>\n</table>\n{% endif %}\n<button hx-get=\"/web/items\" hx-target=\"#items\" hx-swap=\"innerHTML\">Refresh</button>\n";
},"useData":true} }],
  ["rust/frontend/htmx/common/templates/now.html.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Server time: {{ now }} (Unix seconds)</p>";
},"useData":true} }],
  ["rust/items/src/models.rs.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "use chrono::{DateTime, Utc};\nuse serde::Serialize;\n\n#[derive(Debug, Clone, Serialize)]\npub struct Item {\n    pub id: String,\n    pub name: String,\n    pub created_at: DateTime<Utc>,\n}\n";
},"useData":true} }],
  ["rust/items/src/service.rs.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "use std::fmt;\n\nuse chrono::{SubsecRound, Utc};\nuse serde::Deserialize;\nuse uuid::Uuid;\n\nuse crate::db::{self, Db};\nuse crate::models::Item;\n\nconst MAX_NAME_CHARS: usize = 200;\n\n#[derive(Debug)]\npub enum ServiceError {\n    BadRequest(String),\n    Internal(&'static str),\n}\n\nimpl fmt::Display for ServiceError {\n    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {\n        match self {\n            Self::BadRequest(message) => f.write_str(message),\n            Self::Internal(message) => f.write_str(message),\n        }\n    }\n}\n\n#[derive(Deserialize)]\nstruct NewItem {\n    name: String,\n}\n\npub async fn list_items(db: &Db) -> Result<Vec<Item>, ServiceError> {\n    db::list_items(db)\n        .await\n        .map_err(|err| internal(\"could not list items\", &err))\n}\n\npub async fn create_item(db: &Db, body: &[u8]) -> Result<Item, ServiceError> {\n    let input: NewItem = serde_json::from_slice(body)\n        .map_err(|_| ServiceError::BadRequest(\"invalid request body\".to_string()))?;\n    validate_name(&input.name)?;\n    let item = Item {\n        id: Uuid::new_v4().to_string(),\n        name: input.name,\n        created_at: Utc::now().trunc_subsecs(6),\n    };\n    db::insert_item(db, &item)\n        .await\n        .map_err(|err| internal(\"could not create item\", &err))?;\n    Ok(item)\n}\n\nfn validate_name(name: &str) -> Result<(), ServiceError> {\n    if name.trim().is_empty() {\n        return Err(ServiceError::BadRequest(\n            \"invalid input: name must not be empty\".to_string(),\n        ));\n    }\n    if name.chars().count() > MAX_NAME_CHARS {\n        return Err(ServiceError::BadRequest(format!(\n            \"invalid input: name must be at most {MAX_NAME_CHARS} characters\"\n        )));\n    }\n    Ok(())\n}\n\nfn internal(message: &'static str, err: &db::Error) -> ServiceError {\n    eprintln!(\"{message}: {err}\");\n    ServiceError::Internal(message)\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn validate_name_accepts_valid_names() {\n        assert!(validate_name(\"abc\").is_ok());\n        assert!(validate_name(\"  spaced name  \").is_ok());\n        assert!(validate_name(&\"a\".repeat(MAX_NAME_CHARS)).is_ok());\n    }\n\n    #[test]\n    fn validate_name_rejects_invalid_names() {\n        assert!(validate_name(\"\").is_err());\n        assert!(validate_name(\"   \").is_err());\n        assert!(validate_name(&\"a\".repeat(MAX_NAME_CHARS + 1)).is_err());\n    }\n}\n";
},"useData":true} }],
  ["rust/orm/diesel/src/db.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "use diesel::r2d2::{ConnectionManager, CustomizeConnection, Pool};\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "use diesel::r2d2::{ConnectionManager, Pool};\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "pub type Db = Pool<ConnectionManager<SqliteConnection>>;\n\nconst CREATE_ITEMS: &str = \"CREATE TABLE IF NOT EXISTS items (id VARCHAR(36) PRIMARY KEY, name VARCHAR(200) NOT NULL, created_at TIMESTAMP NOT NULL)\";\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":34}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":26,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "pub type Db = Pool<ConnectionManager<PgConnection>>;\n\nconst CREATE_ITEMS: &str = \"CREATE TABLE IF NOT EXISTS items (id VARCHAR(36) PRIMARY KEY, name VARCHAR(200) NOT NULL, created_at TIMESTAMP NOT NULL)\";\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":22,"column":10},"end":{"line":22,"column":31}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":26,"column":0}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "pub type Db = Pool<ConnectionManager<MysqlConnection>>;\n\nconst CREATE_ITEMS: &str = \"CREATE TABLE IF NOT EXISTS items (id VARCHAR(36) PRIMARY KEY, name VARCHAR(200) NOT NULL, created_at DATETIME(6) NOT NULL)\";\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "Datetime";
},"8":function(container,depth0,helpers,partials,data) {
    return "Timestamp";
},"9":function(container,depth0,helpers,partials,data) {
    return "#[derive(Debug)]\nstruct SqliteBusyTimeout;\n\nimpl CustomizeConnection<SqliteConnection, diesel::r2d2::Error> for SqliteBusyTimeout {\n    fn on_acquire(&self, conn: &mut SqliteConnection) -> Result<(), diesel::r2d2::Error> {\n        diesel::sql_query(\"PRAGMA busy_timeout = 5000\")\n            .execute(conn)\n            .map(|_| ())\n            .map_err(diesel::r2d2::Error::QueryError)\n    }\n}\n\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "        let db = Pool::builder()\n            .connection_customizer(Box::new(SqliteBusyTimeout))\n            .build(ConnectionManager::new(database_url()))?;\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        let db = Pool::builder().build(ConnectionManager::new(database_url()))?;\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "    std::env::var(\"DATABASE_URL\").unwrap_or_else(|_| format!(\"{DATABASE_NAME}.db\"))\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "    std::env::var(\"DATABASE_URL\")\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "        .unwrap_or_else(|_| format!(\"postgres://postgres:postgres@localhost:5432/{DATABASE_NAME}\"))\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":123,"column":10},"end":{"line":123,"column":31}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":123,"column":0},"end":{"line":125,"column":0}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "        .unwrap_or_else(|_| format!(\"mysql://root:password@127.0.0.1:3306/{DATABASE_NAME}\"))\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use chrono::{DateTime, NaiveDateTime, Utc};\nuse diesel::prelude::*;\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "\nuse crate::models::Item;\n\npub type Error = Box<dyn std::error::Error + Send + Sync>;\n\nconst DATABASE_NAME: &str = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":13,"column":29},"end":{"line":13,"column":45}}}) : helper)))
    + "\";\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":28}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":26,"column":7}}})) != null ? stack1 : "")
    + "\ndiesel::table! {\n    items (id) {\n        id -> Text,\n        name -> Text,\n        created_at -> "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":28},"end":{"line":32,"column":49}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":32,"column":22},"end":{"line":32,"column":83}}})) != null ? stack1 : "")
    + ",\n    }\n}\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":6},"end":{"line":36,"column":28}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":49,"column":7}}})) != null ? stack1 : "")
    + "#[derive(Queryable, Insertable)]\n#[diesel(table_name = items)]\nstruct ItemRow {\n    id: String,\n    name: String,\n    created_at: NaiveDateTime,\n}\n\npub async fn connect() -> Result<Db, Error> {\n    blocking(|| {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":60,"column":6},"end":{"line":60,"column":28}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":60,"column":0},"end":{"line":66,"column":7}}})) != null ? stack1 : "")
    + "        diesel::sql_query(CREATE_ITEMS).execute(&mut db.get()?)?;\n        Ok(db)\n    })\n    .await\n}\n\npub async fn insert_item(db: &Db, item: &Item) -> Result<(), Error> {\n    let db = db.clone();\n    let row = ItemRow {\n        id: item.id.clone(),\n        name: item.name.clone(),\n        created_at: item.created_at.naive_utc(),\n    };\n    blocking(move || {\n        diesel::insert_into(items::table)\n            .values(&row)\n            .execute(&mut db.get()?)?;\n        Ok(())\n    })\n    .await\n}\n\npub async fn list_items(db: &Db) -> Result<Vec<Item>, Error> {\n    let db = db.clone();\n    let rows: Vec<ItemRow> = blocking(move || {\n        Ok(items::table\n            .order(items::created_at.desc())\n            .load(&mut db.get()?)?)\n    })\n    .await?;\n    Ok(rows\n        .into_iter()\n        .map(|row| Item {\n            id: row.id,\n            name: row.name,\n            created_at: DateTime::<Utc>::from_naive_utc_and_offset(row.created_at, Utc),\n        })\n        .collect())\n}\n\nasync fn blocking<T, F>(task: F) -> Result<T, Error>\nwhere\n    T: Send + 'static,\n    F: FnOnce() -> Result<T, Error> + Send + 'static,\n{\n    tokio::task::spawn_blocking(task).await?\n}\n\nfn database_url() -> String {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":116,"column":6},"end":{"line":116,"column":28}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":116,"column":0},"end":{"line":120,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":121,"column":6},"end":{"line":121,"column":30}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":121,"column":0},"end":{"line":125,"column":7}}})) != null ? stack1 : "")
    + "}\n";
},"useData":true} }],
  ["rust/orm/seaorm/src/db.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "\nconst CREATE_ITEMS: &str = \"CREATE TABLE IF NOT EXISTS items (id VARCHAR(36) PRIMARY KEY, name VARCHAR(200) NOT NULL, created_at TIMESTAMP NOT NULL)\";\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":34}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":18,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "\nconst CREATE_ITEMS: &str = \"CREATE TABLE IF NOT EXISTS items (id VARCHAR(36) PRIMARY KEY, name VARCHAR(200) NOT NULL, created_at TIMESTAMPTZ NOT NULL)\";\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":15,"column":31}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":18,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "\nconst CREATE_ITEMS: &str = \"CREATE TABLE IF NOT EXISTS items (id VARCHAR(36) PRIMARY KEY, name VARCHAR(200) NOT NULL, created_at DATETIME(6) NOT NULL)\";\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        .unwrap_or_else(|_| format!(\"sqlite://{DATABASE_NAME}.db?mode=rwc\"))\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":73,"column":10},"end":{"line":73,"column":34}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":73,"column":0},"end":{"line":77,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "        .unwrap_or_else(|_| format!(\"postgres://postgres:postgres@localhost:5432/{DATABASE_NAME}\"))\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":75,"column":10},"end":{"line":75,"column":31}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":0},"end":{"line":77,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "        .unwrap_or_else(|_| format!(\"mysql://root:password@127.0.0.1:3306/{DATABASE_NAME}\"))\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use sea_orm::{ConnectionTrait, Database, DatabaseConnection, EntityTrait, QueryOrder, Set};\n\nuse crate::models::Item;\n\npub type Db = DatabaseConnection;\npub type Error = Box<dyn std::error::Error + Send + Sync>;\n\nconst DATABASE_NAME: &str = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":29},"end":{"line":8,"column":45}}}) : helper)))
    + "\";\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "")
    + "\nmod item {\n    use sea_orm::entity::prelude::*;\n\n    #[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n    #[sea_orm(table_name = \"items\")]\n    pub struct Model {\n        #[sea_orm(primary_key, auto_increment = false)]\n        pub id: String,\n        pub name: String,\n        pub created_at: DateTimeUtc,\n    }\n\n    #[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\n    pub enum Relation {}\n\n    impl ActiveModelBehavior for ActiveModel {}\n}\n\npub async fn connect() -> Result<Db, Error> {\n    let db = Database::connect(database_url()).await?;\n    db.execute_unprepared(CREATE_ITEMS).await?;\n    Ok(db)\n}\n\npub async fn insert_item(db: &Db, item: &Item) -> Result<(), Error> {\n    let row = item::ActiveModel {\n        id: Set(item.id.clone()),\n        name: Set(item.name.clone()),\n        created_at: Set(item.created_at),\n    };\n    item::Entity::insert(row).exec_without_returning(db).await?;\n    Ok(())\n}\n\npub async fn list_items(db: &Db) -> Result<Vec<Item>, Error> {\n    let rows = item::Entity::find()\n        .order_by_desc(item::Column::CreatedAt)\n        .all(db)\n        .await?;\n    Ok(rows\n        .into_iter()\n        .map(|row| Item {\n            id: row.id,\n            name: row.name,\n            created_at: row.created_at,\n        })\n        .collect())\n}\n\nfn database_url() -> String {\n    std::env::var(\"DATABASE_URL\")\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":71,"column":6},"end":{"line":71,"column":28}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":71,"column":0},"end":{"line":77,"column":7}}})) != null ? stack1 : "")
    + "}\n";
},"useData":true} }],
  ["rust/orm/sqlx-rust/src/db.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "pub type Db = sqlx::SqlitePool;\n\nconst CREATE_ITEMS: &str = \"CREATE TABLE IF NOT EXISTS items (id VARCHAR(36) PRIMARY KEY, name VARCHAR(200) NOT NULL, created_at TIMESTAMP NOT NULL)\";\nconst INSERT_ITEM: &str = \"INSERT INTO items (id, name, created_at) VALUES (?, ?, ?)\";\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":34}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "pub type Db = sqlx::PgPool;\n\nconst CREATE_ITEMS: &str = \"CREATE TABLE IF NOT EXISTS items (id VARCHAR(36) PRIMARY KEY, name VARCHAR(200) NOT NULL, created_at TIMESTAMPTZ NOT NULL)\";\nconst INSERT_ITEM: &str = \"INSERT INTO items (id, name, created_at) VALUES ($1, $2, $3)\";\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":31}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "pub type Db = sqlx::MySqlPool;\n\nconst CREATE_ITEMS: &str = \"CREATE TABLE IF NOT EXISTS items (id VARCHAR(36) PRIMARY KEY, name VARCHAR(200) NOT NULL, created_at DATETIME(6) NOT NULL)\";\nconst INSERT_ITEM: &str = \"INSERT INTO items (id, name, created_at) VALUES (?, ?, ?)\";\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        .unwrap_or_else(|_| format!(\"sqlite://{DATABASE_NAME}.db?mode=rwc\"))\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":60,"column":10},"end":{"line":60,"column":34}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":60,"column":0},"end":{"line":64,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "        .unwrap_or_else(|_| format!(\"postgres://postgres:postgres@localhost:5432/{DATABASE_NAME}\"))\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":62,"column":10},"end":{"line":62,"column":31}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":0},"end":{"line":64,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "        .unwrap_or_else(|_| format!(\"mysql://root:password@127.0.0.1:3306/{DATABASE_NAME}\"))\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use sqlx::Row;\n\nuse crate::models::Item;\n\npub type Error = Box<dyn std::error::Error + Send + Sync>;\n\nconst DATABASE_NAME: &str = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":45}}}) : helper)))
    + "\";\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + "\npub async fn connect() -> Result<Db, Error> {\n    let db = Db::connect(&database_url()).await?;\n    sqlx::query(CREATE_ITEMS).execute(&db).await?;\n    Ok(db)\n}\n\npub async fn insert_item(db: &Db, item: &Item) -> Result<(), Error> {\n    sqlx::query(INSERT_ITEM)\n        .bind(&item.id)\n        .bind(&item.name)\n        .bind(item.created_at)\n        .execute(db)\n        .await?;\n    Ok(())\n}\n\npub async fn list_items(db: &Db) -> Result<Vec<Item>, Error> {\n    let rows = sqlx::query(\"SELECT id, name, created_at FROM items ORDER BY created_at DESC\")\n        .fetch_all(db)\n        .await?;\n    rows.iter()\n        .map(|row| {\n            Ok(Item {\n                id: row.try_get(\"id\")?,\n                name: row.try_get(\"name\")?,\n                created_at: row.try_get(\"created_at\")?,\n            })\n        })\n        .collect()\n}\n\nfn database_url() -> String {\n    std::env::var(\"DATABASE_URL\")\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":58,"column":6},"end":{"line":58,"column":28}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":58,"column":0},"end":{"line":64,"column":7}}})) != null ? stack1 : "")
    + "}\n";
},"useData":true} }]
]);

export const TEMPLATE_COUNT = 181;
