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

  return "root = \".\"\r\ntmp_dir = \"tmp\"\r\n\r\n[build]\r\n  cmd = \"go build -o ./tmp/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":27},"end":{"line":5,"column":43}}}) : helper)))
    + " ./cmd/api\"\r\n  bin = \"./tmp/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":6,"column":15},"end":{"line":6,"column":31}}}) : helper)))
    + "\"\r\n  include_ext = [\"go\", \"html\", \"env\"]\r\n  exclude_dir = [\"tmp\", \"bin\", \"vendor\"]\r\n\r\n[log]\r\n  time = false\r\n\r\n[misc]\r\n  clean_on_exit = true";
},"useData":true} }],
  ["go/addons/docker/_dockerignore", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return ".git\r\n.gitignore\r\nbin\r\nvendor\r\n.env\r\n.env*.local\r\nDockerfile\r\n.dockerignore";
},"useData":true} }],
  ["go/addons/docker/docker-compose.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  db:\r\n    image: postgres:16\r\n    environment:\r\n      POSTGRES_USER: postgres\r\n      POSTGRES_PASSWORD: postgres\r\n      POSTGRES_DB: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":19},"end":{"line":8,"column":35}}}) : helper)))
    + "\r\n    ports:\r\n      - \"5432:5432\"\r\n    volumes:\r\n      - pgdata:/var/lib/postgresql/data\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":31}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  db:\r\n    image: mysql:8\r\n    environment:\r\n      MYSQL_ROOT_PASSWORD: password\r\n      MYSQL_DATABASE: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":22},"end":{"line":18,"column":38}}}) : helper)))
    + "\r\n    ports:\r\n      - \"3306:3306\"\r\n    volumes:\r\n      - mysqldata:/var/lib/mysql\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  pgdata:\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":31}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":30,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "  mysqldata:\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "services:\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":30}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + "\r\nvolumes:\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":30}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["go/addons/docker/Dockerfile.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "# syntax=docker/dockerfile:1\r\n\r\nFROM golang:1.22-alpine AS builder\r\nWORKDIR /app\r\n\r\nCOPY go.mod go.sum* ./\r\nRUN go mod download\r\n\r\nCOPY . .\r\nRUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags=\"-s -w\" -o /out/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":10,"column":73},"end":{"line":10,"column":89}}}) : helper)))
    + " ./cmd/api\r\n\r\nFROM gcr.io/distroless/static-debian12:nonroot\r\nWORKDIR /app\r\n\r\nCOPY --from=builder /out/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":25},"end":{"line":15,"column":41}}}) : helper)))
    + " /usr/local/bin/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":57},"end":{"line":15,"column":73}}}) : helper)))
    + "\r\n\r\nEXPOSE 8000\r\nENTRYPOINT [\"/usr/local/bin/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":44}}}) : helper)))
    + "\"]\r\n";
},"useData":true} }],
  ["go/addons/github-actions/.github/workflows/ci.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "      - name: Generate queries (sqlc)\r\n        run: |\r\n          go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest\r\n          sqlc generate\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "      - name: Verify formatting\r\n        run: test -z \"$(gofmt -l .)\"\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      - name: Lint\r\n        uses: golangci/golangci-lint-action@v6\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name: CI\r\n\r\non:\r\n  push:\r\n    branches: [main]\r\n  pull_request:\r\n\r\njobs:\r\n  test:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - uses: actions/setup-go@v5\r\n        with:\r\n          go-version: \"stable\"\r\n          cache: true\r\n      - name: Install dependencies\r\n        run: go mod tidy\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":27}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"air",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":35}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":28,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"golangci-lint",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":45}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + "      - name: Vet\r\n        run: go vet ./...\r\n      - name: Test\r\n        run: go test -race ./...\r\n";
},"useData":true} }],
  ["go/addons/golangci-lint/.golangci.yml.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "run:\r\n  timeout: 5m\r\n  tests: true\r\n\r\nlinters:\r\n  enable:\r\n    - gofmt\r\n    - govet\r\n    - staticcheck\r\n    - errcheck\r\n    - ineffassign\r\n    - unused";
},"useData":true} }],
  ["go/base/_gitignore", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "*.exe\n*.exe~\n*.dll\n*.so\n*.dylib\nbin/\n!bin/\n*.test\n*.out\n*.prof\nvendor/\ngo.work\ngo.work.sum\ntmp/\n.env\n.env.local\n.idea\n.vscode\n*.swp";
},"useData":true} }],
  ["go/base/.gitkeep", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["go/base/env.example.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "# SQLite:  ./"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":29}}}) : helper)))
    + ".db\n# Postgres: postgres://postgres:postgres@localhost:5432/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":6,"column":56},"end":{"line":6,"column":72}}}) : helper)))
    + "\n# MySQL:   mysql://root:password@localhost:3306/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":7,"column":48},"end":{"line":7,"column":64}}}) : helper)))
    + "\nDATABASE_URL="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":19},"end":{"line":8,"column":41}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":8,"column":13},"end":{"line":8,"column":251}}})) != null ? stack1 : "")
    + "\n";
},"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":59}}}) : helper)))
    + ".db";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":72},"end":{"line":8,"column":96}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":8,"column":62},"end":{"line":8,"column":244}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":142},"end":{"line":8,"column":158}}}) : helper)));
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":168},"end":{"line":8,"column":189}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":158},"end":{"line":8,"column":244}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":228},"end":{"line":8,"column":244}}}) : helper)));
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
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":26}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["go/base/go.mod.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "require github.com/gin-gonic/gin v1.10.0\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fiber",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":32}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":13,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "require github.com/gofiber/fiber/v2 v2.52.5\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"echo",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":9,"column":31}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":13,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "require github.com/labstack/echo/v4 v4.12.0\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"chi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":30}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":13,"column":0}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "require github.com/go-chi/chi/v5 v5.1.0\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "require gorm.io/gorm v1.25.12\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":28}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "require github.com/glebarez/sqlite v1.11.0\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":34}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "require gorm.io/driver/postgres v1.5.9\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":31}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "require gorm.io/driver/mysql v1.5.7\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":24,"column":25}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":41,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "require github.com/jmoiron/sqlx v1.4.0\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":28}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":32,"column":7}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    return "require modernc.org/sqlite v1.34.1\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":34}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":32,"column":0}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "require github.com/jackc/pgx/v5 v5.7.1\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":30,"column":31}}}),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":32,"column":0}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return "require github.com/go-sql-driver/mysql v1.8.1\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":33,"column":25}}}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":41,"column":0}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":34,"column":28}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":34,"column":0},"end":{"line":40,"column":7}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    return "require github.com/pressly/goose/v3 v3.22.1\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"golang-migrate",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":45,"column":10},"end":{"line":45,"column":42}}}),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":47,"column":0}}})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    return "require github.com/golang-migrate/migrate/v4 v4.18.1\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "require github.com/google/uuid v1.6.0\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "module "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":1,"column":7},"end":{"line":1,"column":23}}}) : helper)))
    + "\r\n\r\ngo 1.22\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"gin",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":26}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":13,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":21}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":41,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"goose",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":43,"column":6},"end":{"line":43,"column":29}}}),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":43,"column":0},"end":{"line":47,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":49,"column":6},"end":{"line":49,"column":21}}}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":0},"end":{"line":51,"column":7}}})) != null ? stack1 : "");
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
    return "\ngenerate:\n	sqlc generate\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\nmigrate-up:\n	go run github.com/pressly/goose/v3/cmd/goose@latest -dir migrations up\n\nmigrate-down:\n	go run github.com/pressly/goose/v3/cmd/goose@latest -dir migrations down\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"golang-migrate",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":36,"column":42}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":51,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":6},"end":{"line":38,"column":30}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":44,"column":7}}})) != null ? stack1 : "")
    + "\nmigrate-up:\n	go run -tags '$(MIGRATE_TAGS)' github.com/golang-migrate/migrate/v4/cmd/migrate@latest -path db/migrations -database \"$$DATABASE_URL\" up\n\nmigrate-down:\n	go run -tags '$(MIGRATE_TAGS)' github.com/golang-migrate/migrate/v4/cmd/migrate@latest -path db/migrations -database \"$$DATABASE_URL\" down\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "MIGRATE_TAGS := postgres\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":40,"column":10},"end":{"line":40,"column":31}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "MIGRATE_TAGS := mysql\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "MIGRATE_TAGS := sqlite3\n";
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
    + " ./cmd/api\n\nrun:\n	go run ./cmd/api\n\ntest:\n	go test -race ./...\n\nvet:\n	go vet ./...\n\nfmt:\n	gofmt -l .\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlc",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":23,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"goose",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":29,"column":29}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":51,"column":7}}})) != null ? stack1 : "");
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
    + "/internal/repository\"\n)\n\nvar ErrInvalidInput = errors.New(\"invalid input\")\n\ntype ItemService struct {\n	repo repository.ItemRepository\n}\n\nfunc NewItemService(repo repository.ItemRepository) *ItemService {\n	return &ItemService{repo: repo}\n}\n\nfunc (s *ItemService) CreateItem(ctx context.Context, name string) (model.Item, error) {\n	if err := validateName(name); err != nil {\n		return model.Item{}, err\n	}\n	item := model.Item{\n		ID:        uuid.NewString(),\n		Name:      name,\n		CreatedAt: time.Now(),\n	}\n	if err := s.repo.Create(ctx, &item); err != nil {\n		return model.Item{}, fmt.Errorf(\"create item: %w\", err)\n	}\n	return item, nil\n}\n\nfunc (s *ItemService) ListItems(ctx context.Context) ([]model.Item, error) {\n	items, err := s.repo.List(ctx)\n	if err != nil {\n		return nil, fmt.Errorf(\"list items: %w\", err)\n	}\n	return items, nil\n}\n\nfunc validateName(name string) error {\n	if strings.TrimSpace(name) == \"\" {\n		return fmt.Errorf(\"%w: name must not be empty\", ErrInvalidInput)\n	}\n	if len([]rune(name)) > 200 {\n		return fmt.Errorf(\"%w: name must be at most 200 characters\", ErrInvalidInput)\n	}\n	return nil\n}";
},"useData":true} }],
  ["go/framework/chi/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
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

  return "	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":11},"end":{"line":31,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":27},"end":{"line":31,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":31,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	h := handler.NewHandler(service.NewItemService(repo))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	r.Get(\"/items\", h.ListItems)\n	r.Post(\"/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/go-chi/chi/v5\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":14,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc main() {\n	cfg := config.Load()\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":38,"column":7}}})) != null ? stack1 : "")
    + "\n	r := chi.NewRouter()\n	r.Get(\"/health\", func(w http.ResponseWriter, r *http.Request) {\n		w.Header().Set(\"Content-Type\", \"application/json\")\n		w.WriteHeader(http.StatusOK)\n		_, _ = w.Write([]byte(`{\"status\":\"ok\"}`))\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":46,"column":6},"end":{"line":46,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":0},"end":{"line":49,"column":7}}})) != null ? stack1 : "")
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
    + "/internal/service\"\n)\n\ntype Handler struct {\n	items *service.ItemService\n}\n\nfunc NewHandler(items *service.ItemService) Handler {\n	return Handler{items: items}\n}\n\nfunc (h Handler) ListItems(w http.ResponseWriter, r *http.Request) {\n	items, err := h.items.ListItems(r.Context())\n	if err != nil {\n		writeJSON(w, http.StatusInternalServerError, map[string]string{\"error\": \"could not list items\"})\n		return\n	}\n	writeJSON(w, http.StatusOK, items)\n}\n\nfunc (h Handler) CreateItem(w http.ResponseWriter, r *http.Request) {\n	var body struct {\n		Name string `json:\"name\"`\n	}\n	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {\n		writeJSON(w, http.StatusBadRequest, map[string]string{\"error\": \"invalid request body\"})\n		return\n	}\n	item, err := h.items.CreateItem(r.Context(), body.Name)\n	if err != nil {\n		if errors.Is(err, service.ErrInvalidInput) {\n			writeJSON(w, http.StatusBadRequest, map[string]string{\"error\": err.Error()})\n			return\n		}\n		writeJSON(w, http.StatusInternalServerError, map[string]string{\"error\": \"could not create item\"})\n		return\n	}\n	writeJSON(w, http.StatusCreated, item)\n}\n\nfunc writeJSON(w http.ResponseWriter, status int, body any) {\n	w.Header().Set(\"Content-Type\", \"application/json\")\n	w.WriteHeader(status)\n	_ = json.NewEncoder(w).Encode(body)\n}";
},"useData":true} }],
  ["go/framework/echo/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
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

  return "	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":11},"end":{"line":31,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":27},"end":{"line":31,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":31,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	h := handler.NewHandler(service.NewItemService(repo))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	e.GET(\"/items\", h.ListItems)\n	e.POST(\"/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/labstack/echo/v4\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":14,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc main() {\n	cfg := config.Load()\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":38,"column":7}}})) != null ? stack1 : "")
    + "\n	e := echo.New()\n	e.GET(\"/health\", func(c echo.Context) error {\n		return c.JSON(http.StatusOK, map[string]string{\"status\": \"ok\"})\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":44,"column":6},"end":{"line":44,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":0},"end":{"line":47,"column":7}}})) != null ? stack1 : "")
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
    + "/internal/service\"\n)\n\ntype Handler struct {\n	items *service.ItemService\n}\n\nfunc NewHandler(items *service.ItemService) Handler {\n	return Handler{items: items}\n}\n\nfunc (h Handler) ListItems(c echo.Context) error {\n	items, err := h.items.ListItems(c.Request().Context())\n	if err != nil {\n		return c.JSON(http.StatusInternalServerError, map[string]string{\"error\": \"could not list items\"})\n	}\n	return c.JSON(http.StatusOK, items)\n}\n\nfunc (h Handler) CreateItem(c echo.Context) error {\n	var body struct {\n		Name string `json:\"name\"`\n	}\n	if err := c.Bind(&body); err != nil {\n		return c.JSON(http.StatusBadRequest, map[string]string{\"error\": \"invalid request body\"})\n	}\n	item, err := h.items.CreateItem(c.Request().Context(), body.Name)\n	if err != nil {\n		if errors.Is(err, service.ErrInvalidInput) {\n			return c.JSON(http.StatusBadRequest, map[string]string{\"error\": err.Error()})\n		}\n		return c.JSON(http.StatusInternalServerError, map[string]string{\"error\": \"could not create item\"})\n	}\n	return c.JSON(http.StatusCreated, item)\n}";
},"useData":true} }],
  ["go/framework/fiber/cmd/api/main.go.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":14,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":16,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":11},"end":{"line":29,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":27},"end":{"line":29,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":29,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":33,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	h := handler.NewHandler(service.NewItemService(repo))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	app.Get(\"/items\", h.ListItems)\n	app.Post(\"/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"log\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/gofiber/fiber/v2\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":12,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc main() {\n	cfg := config.Load()\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":36,"column":7}}})) != null ? stack1 : "")
    + "\n	app := fiber.New(fiber.Config{\n		ReadTimeout:  10 * time.Second,\n		WriteTimeout: 10 * time.Second,\n		IdleTimeout:  60 * time.Second,\n	})\n	app.Get(\"/health\", func(c *fiber.Ctx) error {\n		return c.JSON(fiber.Map{\"status\": \"ok\"})\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":46,"column":6},"end":{"line":46,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":0},"end":{"line":49,"column":7}}})) != null ? stack1 : "")
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

  return "	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":11},"end":{"line":31,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":27},"end":{"line":31,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":31,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	h := handler.NewHandler(service.NewItemService(repo))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	r.GET(\"/items\", h.ListItems)\n	r.POST(\"/items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\"github.com/gin-gonic/gin\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":14,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc main() {\n	cfg := config.Load()\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":38,"column":7}}})) != null ? stack1 : "")
    + "\n	r := gin.Default()\n	r.GET(\"/health\", func(c *gin.Context) {\n		c.JSON(http.StatusOK, gin.H{\"status\": \"ok\"})\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":44,"column":6},"end":{"line":44,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":0},"end":{"line":47,"column":7}}})) != null ? stack1 : "")
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
    + "/internal/service\"\n)\n\ntype Handler struct {\n	items *service.ItemService\n}\n\nfunc NewHandler(items *service.ItemService) Handler {\n	return Handler{items: items}\n}\n\nfunc (h Handler) ListItems(c *gin.Context) {\n	items, err := h.items.ListItems(c.Request.Context())\n	if err != nil {\n		c.JSON(http.StatusInternalServerError, gin.H{\"error\": \"could not list items\"})\n		return\n	}\n	c.JSON(http.StatusOK, items)\n}\n\nfunc (h Handler) CreateItem(c *gin.Context) {\n	var body struct {\n		Name string `json:\"name\"`\n	}\n	if err := c.ShouldBindJSON(&body); err != nil {\n		c.JSON(http.StatusBadRequest, gin.H{\"error\": \"invalid request body\"})\n		return\n	}\n	item, err := h.items.CreateItem(c.Request.Context(), body.Name)\n	if err != nil {\n		if errors.Is(err, service.ErrInvalidInput) {\n			c.JSON(http.StatusBadRequest, gin.H{\"error\": err.Error()})\n			return\n		}\n		c.JSON(http.StatusInternalServerError, gin.H{\"error\": \"could not create item\"})\n		return\n	}\n	c.JSON(http.StatusCreated, item)\n}";
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
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":14,"column":18}}}) : helper)))
    + "/internal/db\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":18}}}) : helper)))
    + "/internal/handler\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":16,"column":18}}}) : helper)))
    + "/internal/repository\"\n	\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":18}}}) : helper)))
    + "/internal/service\"\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	conn, err := db.Connect()\n	if err != nil {\n		log.Fatalf(\"database not ready: %v\", err)\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"gorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":11},"end":{"line":29,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":27},"end":{"line":29,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":29,"column":50}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":33,"column":7}}})) != null ? stack1 : "")
    + "	repo := repository.NewItemRepository(conn)\n	h := handler.NewHandler(service.NewItemService(repo))\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	if err := db.AutoMigrate(conn); err != nil {\n		log.Fatalf(\"auto-migrate failed: %v\", err)\n	}\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	mux.HandleFunc(\"GET /items\", h.ListItems)\n	mux.HandleFunc(\"POST /items\", h.CreateItem)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package main\n\nimport (\n	\"context\"\n	\"errors\"\n	\"log\"\n	\"net/http\"\n	\"os/signal\"\n	\"syscall\"\n	\"time\"\n\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":12,"column":18}}}) : helper)))
    + "/internal/config\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "")
    + ")\n\nfunc main() {\n	cfg := config.Load()\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":36,"column":7}}})) != null ? stack1 : "")
    + "\n	mux := http.NewServeMux()\n	mux.HandleFunc(\"GET /health\", func(w http.ResponseWriter, r *http.Request) {\n		w.Header().Set(\"Content-Type\", \"application/json\")\n		w.WriteHeader(http.StatusOK)\n		_, _ = w.Write([]byte(`{\"status\":\"ok\"}`))\n	})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":44,"column":6},"end":{"line":44,"column":21}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":0},"end":{"line":47,"column":7}}})) != null ? stack1 : "")
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
    + "/internal/service\"\n)\n\ntype Handler struct {\n	items *service.ItemService\n}\n\nfunc NewHandler(items *service.ItemService) Handler {\n	return Handler{items: items}\n}\n\nfunc (h Handler) ListItems(w http.ResponseWriter, r *http.Request) {\n	items, err := h.items.ListItems(r.Context())\n	if err != nil {\n		writeJSON(w, http.StatusInternalServerError, map[string]string{\"error\": \"could not list items\"})\n		return\n	}\n	writeJSON(w, http.StatusOK, items)\n}\n\nfunc (h Handler) CreateItem(w http.ResponseWriter, r *http.Request) {\n	var body struct {\n		Name string `json:\"name\"`\n	}\n	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {\n		writeJSON(w, http.StatusBadRequest, map[string]string{\"error\": \"invalid request body\"})\n		return\n	}\n	item, err := h.items.CreateItem(r.Context(), body.Name)\n	if err != nil {\n		if errors.Is(err, service.ErrInvalidInput) {\n			writeJSON(w, http.StatusBadRequest, map[string]string{\"error\": err.Error()})\n			return\n		}\n		writeJSON(w, http.StatusInternalServerError, map[string]string{\"error\": \"could not create item\"})\n		return\n	}\n	writeJSON(w, http.StatusCreated, item)\n}\n\nfunc writeJSON(w http.ResponseWriter, status int, body any) {\n	w.Header().Set(\"Content-Type\", \"application/json\")\n	w.WriteHeader(status)\n	_ = json.NewEncoder(w).Encode(body)\n}";
},"useData":true} }],
  ["go/migrations/golang-migrate/db/migrations/0001_create_items.down.sql.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "DROP TABLE items;";
},"useData":true} }],
  ["go/migrations/golang-migrate/db/migrations/0001_create_items.up.sql.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "CREATE TABLE items (\r\n    id TEXT PRIMARY KEY,\r\n    name TEXT NOT NULL,\r\n    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP\r\n);";
},"useData":true} }],
  ["go/migrations/goose/migrations/0001_create_items.sql.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "-- +goose Up\r\nCREATE TABLE items (\r\n    id TEXT PRIMARY KEY,\r\n    name TEXT NOT NULL,\r\n    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP\r\n);\r\n\r\n-- +goose Down\r\nDROP TABLE items;";
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

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":11},"end":{"line":12,"column":35}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":1},"end":{"line":16,"column":1}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "	\"gorm.io/driver/postgres\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":14,"column":11},"end":{"line":14,"column":32}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":1},"end":{"line":16,"column":1}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "	\"gorm.io/driver/mysql\"\n	";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":26,"column":9},"end":{"line":26,"column":25}}}) : helper)))
    + ".db\"\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":27,"column":11},"end":{"line":27,"column":35}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":27,"column":1},"end":{"line":31,"column":1}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":28,"column":53},"end":{"line":28,"column":69}}}) : helper)))
    + "\"\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":11},"end":{"line":29,"column":32}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":1},"end":{"line":31,"column":1}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":30,"column":46},"end":{"line":30,"column":62}}}) : helper)))
    + "\"\n	";
},"10":function(container,depth0,helpers,partials,data) {
    return "	db, err := gorm.Open(sqlite.Open(databaseURL()), &gorm.Config{\n		Logger: logger.Default.LogMode(logger.Warn),\n	})\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":39,"column":11},"end":{"line":39,"column":35}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":39,"column":1},"end":{"line":47,"column":1}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "	db, err := gorm.Open(postgres.Open(databaseURL()), &gorm.Config{\n		Logger: logger.Default.LogMode(logger.Warn),\n	})\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":43,"column":11},"end":{"line":43,"column":32}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":1},"end":{"line":47,"column":1}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "	db, err := gorm.Open(mysql.Open(databaseURL()), &gorm.Config{\n		Logger: logger.Default.LogMode(logger.Warn),\n	})\n	";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package db\n\nimport (\n	\"fmt\"\n	\"os\"\n	\"time\"\n\n	\"gorm.io/gorm\"\n	\"gorm.io/gorm/logger\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":10,"column":7},"end":{"line":10,"column":29}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":16,"column":8}}})) != null ? stack1 : "")
    + "\n	\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":18,"column":18}}}) : helper)))
    + "/internal/model\"\n)\n\nfunc databaseURL() string {\n	if dsn := os.Getenv(\"DATABASE_URL\"); dsn != \"\" {\n		return dsn\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":7},"end":{"line":25,"column":29}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":25,"column":1},"end":{"line":31,"column":8}}})) != null ? stack1 : "")
    + "}\n\nfunc Connect() (*gorm.DB, error) {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":7},"end":{"line":35,"column":29}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":35,"column":1},"end":{"line":47,"column":8}}})) != null ? stack1 : "")
    + "	if err != nil {\n		return nil, fmt.Errorf(\"open database: %w\", err)\n	}\n\n	sqlDB, err := db.DB()\n	if err != nil {\n		return nil, fmt.Errorf(\"access connection pool: %w\", err)\n	}\n\n	sqlDB.SetMaxOpenConns(25)\n	sqlDB.SetMaxIdleConns(25)\n	sqlDB.SetConnMaxLifetime(5 * time.Minute)\n\n	if err := sqlDB.Ping(); err != nil {\n		return nil, fmt.Errorf(\"ping database: %w\", err)\n	}\n\n	return db, nil\n}\n\nfunc AutoMigrate(db *gorm.DB) error {\n	return db.AutoMigrate(&model.Item{})\n}";
},"useData":true} }],
  ["go/orm/gorm/internal/model/item.go.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "package model\n\nimport \"time\"\n\ntype Item struct {\n	ID        string    `gorm:\"primarykey\" json:\"id\"`\n	Name      string    `json:\"name\"`\n	CreatedAt time.Time `json:\"created_at\"`\n	UpdatedAt time.Time `json:\"updated_at\"`\n}";
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

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":10,"column":11},"end":{"line":10,"column":35}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":14,"column":1}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "	_ \"github.com/jackc/pgx/v5/stdlib\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":11},"end":{"line":12,"column":32}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":1},"end":{"line":14,"column":1}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "	_ \"github.com/go-sql-driver/mysql\"\n	";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":22,"column":9},"end":{"line":22,"column":25}}}) : helper)))
    + ".db\"\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":11},"end":{"line":23,"column":35}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":23,"column":1},"end":{"line":27,"column":1}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":24,"column":53},"end":{"line":24,"column":69}}}) : helper)))
    + "\"\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":11},"end":{"line":25,"column":32}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":1},"end":{"line":27,"column":1}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":26,"column":46},"end":{"line":26,"column":62}}}) : helper)))
    + "\"\n	";
},"10":function(container,depth0,helpers,partials,data) {
    return "	db, err := sql.Open(\"sqlite\", databaseURL())\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":11},"end":{"line":33,"column":35}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":33,"column":1},"end":{"line":37,"column":1}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "	db, err := sql.Open(\"pgx\", databaseURL())\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":35,"column":11},"end":{"line":35,"column":32}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":1},"end":{"line":37,"column":1}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "	db, err := sql.Open(\"mysql\", databaseURL())\n	";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package db\n\nimport (\n	\"database/sql\"\n	\"fmt\"\n	\"os\"\n	\"time\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":7},"end":{"line":8,"column":29}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":8,"column":1},"end":{"line":14,"column":8}}})) != null ? stack1 : "")
    + ")\n\nfunc databaseURL() string {\n	if dsn := os.Getenv(\"DATABASE_URL\"); dsn != \"\" {\n		return dsn\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":7},"end":{"line":21,"column":29}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":21,"column":1},"end":{"line":27,"column":8}}})) != null ? stack1 : "")
    + "}\n\nfunc Connect() (*sql.DB, error) {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":7},"end":{"line":31,"column":29}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":31,"column":1},"end":{"line":37,"column":8}}})) != null ? stack1 : "")
    + "	if err != nil {\n		return nil, fmt.Errorf(\"open database: %w\", err)\n	}\n\n	db.SetMaxOpenConns(25)\n	db.SetMaxIdleConns(25)\n	db.SetConnMaxLifetime(5 * time.Minute)\n\n	if err := db.Ping(); err != nil {\n		return nil, fmt.Errorf(\"ping database: %w\", err)\n	}\n\n	return db, nil\n}";
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
    return "CREATE TABLE items (\n    id         TEXT      NOT NULL,\n    name       TEXT      NOT NULL,\n    created_at TIMESTAMP NOT NULL,\n    PRIMARY KEY (id)\n);";
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

  return "version: \"2\"\r\nsql:\r\n  - engine: \""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":3,"column":19},"end":{"line":3,"column":43}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":3,"column":13},"end":{"line":3,"column":114}}})) != null ? stack1 : "")
    + "\"\r\n    queries: \"queries\"\r\n    schema: \"schema\"\r\n    gen:\r\n      go:\r\n        package: \"sqlc\"\r\n        out: \"internal/db/sqlc\"\r\n        sql_package: \"database/sql\"\r\n        emit_json_tags: true\r\n        emit_prepared_queries: true\r\n";
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

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":11},"end":{"line":11,"column":35}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":11,"column":1},"end":{"line":15,"column":1}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "	_ \"github.com/jackc/pgx/v5/stdlib\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":11},"end":{"line":13,"column":32}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":1},"end":{"line":15,"column":1}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "	_ \"github.com/go-sql-driver/mysql\"\n	";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":23,"column":9},"end":{"line":23,"column":25}}}) : helper)))
    + ".db\"\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":11},"end":{"line":24,"column":35}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":24,"column":1},"end":{"line":28,"column":1}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":25,"column":53},"end":{"line":25,"column":69}}}) : helper)))
    + "\"\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":11},"end":{"line":26,"column":32}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":1},"end":{"line":28,"column":1}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	return \"mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":27,"column":46},"end":{"line":27,"column":62}}}) : helper)))
    + "\"\n	";
},"10":function(container,depth0,helpers,partials,data) {
    return "	db, err := sqlx.Open(\"sqlite\", databaseURL())\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":34,"column":11},"end":{"line":34,"column":35}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":34,"column":1},"end":{"line":38,"column":1}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "	db, err := sqlx.Open(\"pgx\", databaseURL())\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":11},"end":{"line":36,"column":32}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":1},"end":{"line":38,"column":1}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "	db, err := sqlx.Open(\"mysql\", databaseURL())\n	";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "package db\n\nimport (\n	\"fmt\"\n	\"os\"\n	\"time\"\n\n	\"github.com/jmoiron/sqlx\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":9,"column":7},"end":{"line":9,"column":29}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":15,"column":8}}})) != null ? stack1 : "")
    + ")\n\nfunc databaseURL() string {\n	if dsn := os.Getenv(\"DATABASE_URL\"); dsn != \"\" {\n		return dsn\n	}\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":22,"column":7},"end":{"line":22,"column":29}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":22,"column":1},"end":{"line":28,"column":8}}})) != null ? stack1 : "")
    + "}\n\nfunc Connect() (*sqlx.DB, error) {\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":7},"end":{"line":32,"column":29}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":32,"column":1},"end":{"line":38,"column":8}}})) != null ? stack1 : "")
    + "	if err != nil {\n		return nil, fmt.Errorf(\"open database: %w\", err)\n	}\n\n	db.SetMaxOpenConns(25)\n	db.SetMaxIdleConns(25)\n	db.SetConnMaxLifetime(5 * time.Minute)\n\n	if err := db.Ping(); err != nil {\n		return nil, fmt.Errorf(\"ping database: %w\", err)\n	}\n\n	return db, nil\n}";
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
    return ".git\r\n.gitignore\r\n.venv\r\nvenv\r\n__pycache__\r\n*.pyc\r\n.pytest_cache\r\n.mypy_cache\r\n.ruff_cache\r\n.env\r\n.env*.local\r\nDockerfile\r\n.dockerignore\r\n";
},"useData":true} }],
  ["python/addons/docker/docker-compose.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  db:\n    image: postgres:16\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_DB: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":19},"end":{"line":8,"column":35}}}) : helper)))
    + "\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":31}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  db:\n    image: mysql:8\n    environment:\n      MYSQL_ROOT_PASSWORD: password\n      MYSQL_DATABASE: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":22},"end":{"line":18,"column":38}}}) : helper)))
    + "\n    ports:\n      - \"3306:3306\"\n    volumes:\n      - mysqldata:/var/lib/mysql\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  pgdata:\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":31}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":30,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "  mysqldata:\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "services:\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":30}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + "\nvolumes:\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":30}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/addons/docker/Dockerfile.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "CMD [\"uv\", \"run\", \"uvicorn\", \"src.main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":35}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":32}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "CMD [\"uv\", \"run\", \"flask\", \"--app\", \"src.main\", \"run\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":33}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "CMD [\"uv\", \"run\", \"gunicorn\", \"config.wsgi\", \"--bind\", \"0.0.0.0:8000\"]\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "FROM python:3.12-slim\n\nWORKDIR /app\n\nCOPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/\n\nCOPY pyproject.toml ./\nRUN uv sync --no-install-project --no-dev\n\nCOPY . .\n\nENV PYTHONPATH=/app\nEXPOSE 8000\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fastapi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":30}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/addons/github-actions/.github/workflows/ci.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "      - name: Lint\n        run: uv run ruff check .\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "      - name: Type check\n        run: uv run mypy .\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      - name: Test\n        run: uv run pytest\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: \"3.12\"\n      - uses: astral-sh/setup-uv@v5\n      - name: Install dependencies\n        run: uv sync\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"ruff",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":36}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"mypy",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":23,"column":36}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":26,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"pytest",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":38}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/addons/mypy/mypy.ini.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "[mypy]\npython_version = \"3.12\"\nstrict = true\nwarn_unused_configs = true\nplugins = [\"pydantic.mypy\"]\n\n[[tool.mypy.overrides]]\nmodule = \"src.*\"\nfollow_imports = \"normal\"\n";
},"useData":true} }],
  ["python/addons/pytest/tests/test_health.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from fastapi.testclient import TestClient\n\nfrom src.main import app\n\nclient = TestClient(app)\n\ndef test_health():\n    response = client.get(\"/health\")\n    assert response.status_code == 200\n    assert response.json() == {\"status\": \"ok\"}\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":35}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":49,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "from litestar.testing import TestClient\n\nfrom src.main import app\n\nclient = TestClient(app)\n\ndef test_health():\n    with client:\n        response = client.get(\"/health\")\n        assert response.status_code == 200\n        assert response.json() == {\"status\": \"ok\"}\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":24,"column":32}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":49,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "from src.main import app\n\nclient = app.test_client()\n\ndef test_health():\n    response = client.get(\"/health\")\n    assert response.status_code == 200\n    assert response.get_json() == {\"status\": \"ok\"}\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":33,"column":33}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":49,"column":0}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "import os\n\nimport django\n\nos.environ.setdefault(\"DJANGO_SETTINGS_MODULE\", \"config.settings.development\")\ndjango.setup()\n\nfrom django.test import Client\n\nclient = Client()\n\ndef test_health():\n    response = client.get(\"/api/health/\")\n    assert response.status_code == 200\n    assert response.json() == {\"status\": \"ok\"}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fastapi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":30}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":49,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/addons/ruff/ruff.toml.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "line-length = 100\ntarget-version = \"py312\"\n\n[lint]\nselect = [\"E\", \"F\", \"I\", \"UP\", \"B\"]\nignore = []\n\n[lint.isort]\nknown-first-party = [\"src\"]\n";
},"useData":true} }],
  ["python/base/env.example.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "DJANGO_SECRET_KEY=django-insecure-change-me\nDJANGO_DEBUG=true\nALLOWED_HOSTS=localhost,127.0.0.1\nCORS_ALLOWED_ORIGINS=http://localhost:3000\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "APP_NAME="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":7,"column":9},"end":{"line":7,"column":24}}}) : helper)))
    + "\nDEBUG=false\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":26}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":22,"column":7}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":25}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "# SQLite:  sqlite://./"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":12,"column":22},"end":{"line":12,"column":38}}}) : helper)))
    + ".db\n# Postgres: postgres://postgres:postgres@localhost:5432/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":13,"column":56},"end":{"line":13,"column":72}}}) : helper)))
    + "\n# MySQL:   mysql://root:password@localhost:3306/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":14,"column":48},"end":{"line":14,"column":64}}}) : helper)))
    + "\nDATABASE_URL="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":19},"end":{"line":15,"column":41}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":15,"column":13},"end":{"line":15,"column":262}}})) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "sqlite://./"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":54},"end":{"line":15,"column":70}}}) : helper)))
    + ".db";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":83},"end":{"line":15,"column":107}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":15,"column":73},"end":{"line":15,"column":255}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":153},"end":{"line":15,"column":169}}}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":179},"end":{"line":15,"column":200}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":169},"end":{"line":15,"column":255}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":15,"column":239},"end":{"line":15,"column":255}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "# SQLite:  sqlite+aiosqlite:///./"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":33},"end":{"line":17,"column":49}}}) : helper)))
    + ".db\n# Postgres: postgresql+asyncpg://postgres:postgres@localhost:5432/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":66},"end":{"line":18,"column":82}}}) : helper)))
    + "\n# MySQL:   mysql+asyncmy://root:password@localhost:3306/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":56},"end":{"line":19,"column":72}}}) : helper)))
    + "\nDATABASE_URL="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":19},"end":{"line":20,"column":41}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":20,"column":13},"end":{"line":20,"column":291}}})) != null ? stack1 : "")
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "sqlite+aiosqlite:///./"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":65},"end":{"line":20,"column":81}}}) : helper)))
    + ".db";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":94},"end":{"line":20,"column":118}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":20,"column":84},"end":{"line":20,"column":284}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "postgresql+asyncpg://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":174},"end":{"line":20,"column":190}}}) : helper)));
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":20,"column":200},"end":{"line":20,"column":221}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":190},"end":{"line":20,"column":284}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "mysql+asyncmy://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":268},"end":{"line":20,"column":284}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":29}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "");
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

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":35}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "    \"litestar\",\n    \"uvicorn[standard]\",\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":16,"column":33}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "    \"django\",\n    \"djangorestframework\",\n    \"django-cors-headers\",\n    \"gunicorn\",\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":32}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "    \"flask\",\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "    \"psycopg[binary]\",\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":29}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":32,"column":0}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "    \"sqlmodel\",\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlalchemy",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":31}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":32,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "    \"sqlalchemy[asyncio]\",\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":30,"column":29}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":32,"column":0}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "    \"tortoise-orm\",\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "    \"alembic\",\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "    \"asyncpg\",\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":38,"column":15},"end":{"line":38,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":39},"end":{"line":38,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":38,"column":10},"end":{"line":38,"column":61}}}),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "    \"asyncmy\",\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":40,"column":15},"end":{"line":40,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":40,"column":39},"end":{"line":40,"column":61}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":40,"column":10},"end":{"line":40,"column":62}}}),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    return "    \"aiosqlite\",\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":42,"column":15},"end":{"line":42,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":42,"column":39},"end":{"line":42,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":61}}}),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    return "    \"mysqlclient\",\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "[tool.hatch.build.targets.wheel]\npackages = [\"config\", \"apps\"]\n\n[tool.hatch.build.targets.wheel.force-include]\ntemplates = \"templates\"\nstatic = \"static\"\n";
},"26":function(container,depth0,helpers,partials,data) {
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
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":29}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":32,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"alembic",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":33,"column":31}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":36,"column":11},"end":{"line":36,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":35},"end":{"line":36,"column":59}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":36,"column":6},"end":{"line":36,"column":60}}}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":44,"column":7}}})) != null ? stack1 : "")
    + "]\n\n[project.optional-dependencies]\ndev = [\n    \"pytest\",\n    \"ruff\",\n    \"mypy\",\n]\n\n[build-system]\nrequires = [\"hatchling\"]\nbuild-backend = \"hatchling.build\"\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":58,"column":6},"end":{"line":58,"column":29}}}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(26, data, 0),"data":data,"loc":{"start":{"line":58,"column":0},"end":{"line":68,"column":7}}})) != null ? stack1 : "")
    + "\n[tool.pytest.ini_options]\npythonpath = [\"src\"]";
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

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":10},"end":{"line":25,"column":35}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":35,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "litestar = \"^2.14\"\nuvicorn = { extras = [\"standard\"], version = \"^0.34\" }\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":33}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":35,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "django = \"^5.1\"\ndjangorestframework = \"^3.15\"\ndjango-cors-headers = \"^4.6\"\ngunicorn = \"^23.0\"\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":33,"column":32}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":35,"column":0}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "flask = \"^3.1\"\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "psycopg = { extras = [\"binary\"], version = \"^3.2\" }\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":10},"end":{"line":38,"column":29}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "sqlmodel = \"^0.0.22\"\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlalchemy",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":40,"column":10},"end":{"line":40,"column":31}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "sqlalchemy = { extras = [\"asyncio\"], version = \"^2.0\" }\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":29}}}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    return "tortoise-orm = \"^0.24\"\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "alembic = \"^1.14\"\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "asyncpg = \"^0.30\"\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":50,"column":15},"end":{"line":50,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":50,"column":39},"end":{"line":50,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":50,"column":10},"end":{"line":50,"column":61}}}),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":50,"column":0},"end":{"line":56,"column":0}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    return "asyncmy = \"^0.2\"\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":52,"column":15},"end":{"line":52,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":52,"column":39},"end":{"line":52,"column":61}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":52,"column":10},"end":{"line":52,"column":62}}}),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":52,"column":0},"end":{"line":56,"column":0}}})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    return "aiosqlite = \"^0.20\"\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":54,"column":15},"end":{"line":54,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":54,"column":39},"end":{"line":54,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":54,"column":10},"end":{"line":54,"column":61}}}),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":0},"end":{"line":56,"column":0}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    return "mysqlclient = \"^2.2\"\n";
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
    + "\n[tool.poetry.dependencies]\npython = \">=3.12\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":29}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"fastapi",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":22,"column":30}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":6},"end":{"line":36,"column":29}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":44,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"alembic",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":45,"column":6},"end":{"line":45,"column":31}}}),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":47,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":48,"column":11},"end":{"line":48,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":48,"column":35},"end":{"line":48,"column":59}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":48,"column":6},"end":{"line":48,"column":60}}}),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":48,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "")
    + "\n[build-system]\nrequires = [\"poetry-core\"]\nbuild-backend = \"poetry.core.masonry.api\"";
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

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"litestar",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":35}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "    \"litestar\",\n    \"uvicorn[standard]\",\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":16,"column":33}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "    \"django\",\n    \"djangorestframework\",\n    \"django-cors-headers\",\n    \"gunicorn\",\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"flask",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":32}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "    \"flask\",\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "    \"psycopg[binary]\",\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":29}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":32,"column":0}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "    \"sqlmodel\",\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlalchemy",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":31}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":32,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "    \"sqlalchemy[asyncio]\",\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":30,"column":29}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":32,"column":0}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "    \"tortoise-orm\",\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "    \"alembic\",\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "    \"asyncpg\",\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":38,"column":15},"end":{"line":38,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":39},"end":{"line":38,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":38,"column":10},"end":{"line":38,"column":61}}}),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "    \"asyncmy\",\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":40,"column":15},"end":{"line":40,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":40,"column":39},"end":{"line":40,"column":61}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":40,"column":10},"end":{"line":40,"column":62}}}),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    return "    \"aiosqlite\",\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":42,"column":15},"end":{"line":42,"column":38}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":42,"column":39},"end":{"line":42,"column":60}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":61}}}),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    return "    \"mysqlclient\",\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "    \"ruff\",\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "    \"mypy\",\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "    \"pytest\",\n    \"httpx\",\n";
},"28":function(container,depth0,helpers,partials,data) {
    return "[tool.hatch.build.targets.wheel]\npackages = [\"config\", \"apps\"]\n\n[tool.hatch.build.targets.wheel.force-include]\ntemplates = \"templates\"\nstatic = \"static\"\n";
},"29":function(container,depth0,helpers,partials,data) {
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
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":29}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":32,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"alembic",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":33,"column":31}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":36,"column":11},"end":{"line":36,"column":34}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":35},"end":{"line":36,"column":59}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":36,"column":6},"end":{"line":36,"column":60}}}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":44,"column":7}}})) != null ? stack1 : "")
    + "]\n\n[dependency-groups]\ndev = [\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"ruff",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":49,"column":6},"end":{"line":49,"column":30}}}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":0},"end":{"line":51,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"mypy",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":52,"column":6},"end":{"line":52,"column":30}}}),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":0},"end":{"line":54,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"pytest",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":55,"column":6},"end":{"line":55,"column":32}}}),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":0},"end":{"line":58,"column":7}}})) != null ? stack1 : "")
    + "]\n\n[build-system]\nrequires = [\"hatchling\"]\nbuild-backend = \"hatchling.build\"\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"django",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":65,"column":6},"end":{"line":65,"column":29}}}),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":65,"column":0},"end":{"line":75,"column":7}}})) != null ? stack1 : "")
    + "\n[tool.pytest.ini_options]\npythonpath = [\"src\"]";
},"useData":true} }],
  ["python/base/src/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/base/src/config.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":29}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    database_url: str = \"sqlite://./"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":14,"column":36},"end":{"line":14,"column":52}}}) : helper)))
    + ".db\"\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    database_url: str = \"sqlite+aiosqlite:///./"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":16,"column":47},"end":{"line":16,"column":63}}}) : helper)))
    + ".db\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":14},"end":{"line":18,"column":38}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":30,"column":4}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":29}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":23,"column":11}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    database_url: str = \"postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":20,"column":69},"end":{"line":20,"column":85}}}) : helper)))
    + "\"\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    database_url: str = \"postgresql+asyncpg://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":22,"column":79},"end":{"line":22,"column":95}}}) : helper)))
    + "\"\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":14},"end":{"line":24,"column":35}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":4}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":10},"end":{"line":25,"column":29}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":29,"column":11}}})) != null ? stack1 : "")
    + "    ";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    database_url: str = \"mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":26,"column":62},"end":{"line":26,"column":78}}}) : helper)))
    + "\"\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    database_url: str = \"mysql+asyncmy://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":28,"column":70},"end":{"line":28,"column":86}}}) : helper)))
    + "\"\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from functools import lru_cache\n\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\n\nclass Settings(BaseSettings):\n    model_config = SettingsConfigDict(env_file=\".env\", extra=\"ignore\")\n\n    app_name: str = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":8,"column":21},"end":{"line":8,"column":36}}}) : helper)))
    + "\"\n    debug: bool = False\n    cors_origins: list[str] = [\"http://localhost:3000\"]\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":32}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "\n@lru_cache\ndef get_settings() -> Settings:\n    return Settings()\n";
},"useData":true} }],
  ["python/core/src/schemas/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/core/src/schemas/items.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from datetime import datetime\n\nfrom pydantic import BaseModel, ConfigDict\n\nclass ItemCreate(BaseModel):\n\n    name: str\n\nclass ItemResponse(BaseModel):\n\n    model_config = ConfigDict(from_attributes=True)\n\n    id: str\n    name: str\n    created_at: datetime";
},"useData":true} }],
  ["python/core/src/services/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/core/src/services/items.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from ..repositories.items import (\n    create_item as repo_create_item,\n    list_items as repo_list_items,\n)\nfrom ..schemas.items import ItemCreate, ItemResponse\n\nasync def create_item(payload: ItemCreate) -> ItemResponse:\n\n    return await repo_create_item(name=payload.name)\n\nasync def list_items() -> list[ItemResponse]:\n\n    return await repo_list_items()\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "from sqlalchemy.ext.asyncio import AsyncSession\n\nfrom ..repositories.items import (\n    create_item as repo_create_item,\n    list_items as repo_list_items,\n)\nfrom ..schemas.items import ItemCreate, ItemResponse\n\nasync def create_item(session: AsyncSession, payload: ItemCreate) -> ItemResponse:\n\n    return await repo_create_item(session, name=payload.name)\n\nasync def list_items(session: AsyncSession) -> list[ItemResponse]:\n\n    return await repo_list_items(session)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":25}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":31,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/framework/django/apps/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/apps/core/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/apps/core/apps.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.apps import AppConfig\n\nclass CoreConfig(AppConfig):\n    default_auto_field = \"django.db.models.BigAutoField\"\n    name = \"apps.core\"";
},"useData":true} }],
  ["python/framework/django/apps/core/models.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.db import models";
},"useData":true} }],
  ["python/framework/django/apps/core/urls.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.urls import path\n\nfrom . import views\n\nurlpatterns = [\n    path(\"health/\", views.health, name=\"health\"),\n]";
},"useData":true} }],
  ["python/framework/django/apps/core/utils.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/apps/core/views.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.http import HttpRequest\n\nfrom rest_framework.decorators import api_view\nfrom rest_framework.response import Response\n\n@api_view([\"GET\"])\ndef health(request: HttpRequest) -> Response:\n    return Response({\"status\": \"ok\"})";
},"useData":true} }],
  ["python/framework/django/apps/users/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/apps/users/apps.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.apps import AppConfig\n\nclass UsersConfig(AppConfig):\n    default_auto_field = \"django.db.models.BigAutoField\"\n    name = \"apps.users\"";
},"useData":true} }],
  ["python/framework/django/apps/users/models.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.contrib.auth.models import AbstractUser\nfrom django.db import models\n\nclass User(AbstractUser):\n\n    class Meta:\n        db_table = \"users\"";
},"useData":true} }],
  ["python/framework/django/apps/users/selectors.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from .models import User\n\ndef get_user_by_id(user_id: int) -> User | None:\n\n    try:\n        return User.objects.get(pk=user_id)\n    except User.DoesNotExist:\n        return None";
},"useData":true} }],
  ["python/framework/django/apps/users/serializers.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from rest_framework import serializers\n\nfrom .models import User\n\nclass UserSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = User\n        fields = [\"id\", \"username\", \"email\", \"first_name\", \"last_name\"]\n        read_only_fields = [\"id\"]";
},"useData":true} }],
  ["python/framework/django/apps/users/services.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.db.models import QuerySet\n\nfrom .models import User\n\ndef get_users() -> QuerySet[User]:\n\n    return User.objects.filter(is_active=True)";
},"useData":true} }],
  ["python/framework/django/apps/users/urls.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.urls import path\n\nfrom . import views\n\napp_name = \"users\"\n\nurlpatterns = [\n    path(\"\", views.UserListView.as_view(), name=\"user-list\"),\n]";
},"useData":true} }],
  ["python/framework/django/apps/users/views.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from rest_framework import generics\nfrom rest_framework.permissions import IsAuthenticated\n\nfrom .models import User\nfrom .serializers import UserSerializer\n\nclass UserListView(generics.ListAPIView):\n    queryset = User.objects.all()\n    serializer_class = UserSerializer\n    permission_classes = [IsAuthenticated]";
},"useData":true} }],
  ["python/framework/django/config/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/config/asgi.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import os\n\nfrom django.core.asgi import get_asgi_application\n\nos.environ.setdefault(\"DJANGO_SETTINGS_MODULE\", \"config.settings.development\")\n\napplication = get_asgi_application()\n";
},"useData":true} }],
  ["python/framework/django/config/settings/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/django/config/settings/base.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "DATABASES = {}\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":59,"column":10},"end":{"line":59,"column":32}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":59,"column":0},"end":{"line":88,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "DATABASES = {\n    \"default\": {\n        \"ENGINE\": \"django.db.backends.sqlite3\",\n        \"NAME\": BASE_DIR / \"db.sqlite3\",\n    }\n}\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":66,"column":10},"end":{"line":66,"column":34}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":66,"column":0},"end":{"line":88,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DATABASES = {\n    \"default\": {\n        \"ENGINE\": \"django.db.backends.postgresql\",\n        \"NAME\": \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":70,"column":17},"end":{"line":70,"column":33}}}) : helper)))
    + "\",\n        \"USER\": \"postgres\",\n        \"PASSWORD\": \"postgres\",\n        \"HOST\": \"localhost\",\n        \"PORT\": \"5432\",\n    }\n}\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":77,"column":10},"end":{"line":77,"column":31}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":0},"end":{"line":88,"column":0}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "DATABASES = {\n    \"default\": {\n        \"ENGINE\": \"django.db.backends.mysql\",\n        \"NAME\": \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":81,"column":17},"end":{"line":81,"column":33}}}) : helper)))
    + "\",\n        \"USER\": \"root\",\n        \"PASSWORD\": \"password\",\n        \"HOST\": \"localhost\",\n        \"PORT\": \"3306\",\n    }\n}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from pathlib import Path\n\nBASE_DIR = Path(__file__).resolve().parent.parent.parent\n\nSECRET_KEY = \"django-insecure-change-me\"\n\nDEBUG = False\n\nALLOWED_HOSTS: list[str] = []\n\nINSTALLED_APPS = [\n    \"django.contrib.admin\",\n    \"django.contrib.auth\",\n    \"django.contrib.contenttypes\",\n    \"django.contrib.sessions\",\n    \"django.contrib.messages\",\n    \"django.contrib.staticfiles\",\n    \"corsheaders\",\n    \"rest_framework\",\n    \"apps.core\",\n    \"apps.users\",\n]\n\nAUTH_USER_MODEL = \"users.User\"\n\nMIDDLEWARE = [\n    \"corsheaders.middleware.CorsMiddleware\",\n    \"django.middleware.security.SecurityMiddleware\",\n    \"django.contrib.sessions.middleware.SessionMiddleware\",\n    \"django.middleware.common.CommonMiddleware\",\n    \"django.middleware.csrf.CsrfViewMiddleware\",\n    \"django.contrib.auth.middleware.AuthenticationMiddleware\",\n    \"django.contrib.messages.middleware.MessageMiddleware\",\n    \"django.middleware.clickjacking.XFrameOptionsMiddleware\",\n]\n\nROOT_URLCONF = \"config.urls\"\n\nTEMPLATES = [\n    {\n        \"BACKEND\": \"django.template.backends.django.DjangoTemplates\",\n        \"DIRS\": [BASE_DIR / \"templates\"],\n        \"APP_DIRS\": True,\n        \"OPTIONS\": {\n            \"context_processors\": [\n                \"django.template.context_processors.debug\",\n                \"django.template.context_processors.request\",\n                \"django.contrib.auth.context_processors.auth\",\n                \"django.contrib.messages.context_processors.messages\",\n            ],\n        },\n    },\n]\n\nWSGI_APPLICATION = \"config.wsgi.application\"\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":57,"column":6},"end":{"line":57,"column":26}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":57,"column":0},"end":{"line":88,"column":7}}})) != null ? stack1 : "")
    + "\nAUTH_PASSWORD_VALIDATORS = [\n    {\"NAME\": \"django.contrib.auth.password_validation.UserAttributeSimilarityValidator\"},\n    {\"NAME\": \"django.contrib.auth.password_validation.MinimumLengthValidator\"},\n    {\"NAME\": \"django.contrib.auth.password_validation.CommonPasswordValidator\"},\n    {\"NAME\": \"django.contrib.auth.password_validation.NumericPasswordValidator\"},\n]\n\nLANGUAGE_CODE = \"en-us\"\nTIME_ZONE = \"UTC\"\nUSE_I18N = True\nUSE_TZ = True\n\nSTATIC_URL = \"static/\"\nSTATIC_ROOT = BASE_DIR / \"staticfiles\"\n\nMEDIA_URL = \"media/\"\nMEDIA_ROOT = BASE_DIR / \"media\"\n\nDEFAULT_AUTO_FIELD = \"django.db.models.BigAutoField\"\n\nREST_FRAMEWORK = {}\n";
},"useData":true} }],
  ["python/framework/django/config/settings/development.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from .base import *  # noqa: F401,F403\n\nDEBUG = True\n\nALLOWED_HOSTS = [\"*\"]\n\nCORS_ALLOW_ALL_ORIGINS = True\n";
},"useData":true} }],
  ["python/framework/django/config/settings/production.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import os\n\nfrom .base import *  # noqa: F401,F403\n\nSECRET_KEY = os.environ.get(\"DJANGO_SECRET_KEY\", SECRET_KEY)  # noqa: F405\n\nALLOWED_HOSTS = os.environ.get(\"ALLOWED_HOSTS\", \"\").split(\",\")  # type: ignore[assignment]\n\nCORS_ALLOW_ALL_ORIGINS = False\nCORS_ALLOWED_ORIGINS = os.environ.get(\"CORS_ALLOWED_ORIGINS\", \"\").split(\",\")  # type: ignore[assignment]\n";
},"useData":true} }],
  ["python/framework/django/config/urls.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from django.conf import settings\nfrom django.conf.urls.static import static\nfrom django.contrib import admin\nfrom django.urls import include, path\n\nurlpatterns = [\n    path(\"admin/\", admin.site.urls),\n    path(\"api/\", include(\"apps.core.urls\")),\n    path(\"api/users/\", include(\"apps.users.urls\")),\n]\n\nif settings.DEBUG:\n    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)\n";
},"useData":true} }],
  ["python/framework/django/config/wsgi.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import os\n\nfrom django.core.wsgi import get_wsgi_application\n\nos.environ.setdefault(\"DJANGO_SETTINGS_MODULE\", \"config.settings.development\")\n\napplication = get_wsgi_application()\n";
},"useData":true} }],
  ["python/framework/django/manage.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "#!/usr/bin/env python\n\nimport os\nimport sys\n\ndef main():\n    os.environ.setdefault(\"DJANGO_SETTINGS_MODULE\", \"config.settings.development\")\n    try:\n        from django.core.management import execute_from_command_line\n    except ImportError as exc:\n        raise ImportError(\n            \"Couldn't import Django. Are you sure it's installed?\",\n        ) from exc\n    execute_from_command_line(sys.argv)\n\nif __name__ == \"__main__\":\n    main()\n";
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
    return "from fastapi import APIRouter\n\nfrom .v1.router import router as v1_router\n\napi_router = APIRouter()\napi_router.include_router(v1_router, prefix=\"/v1\")";
},"useData":true} }],
  ["python/framework/fastapi/src/api/v1/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/fastapi/src/api/v1/router.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from .routes.items import router as items_router\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "router.include_router(items_router, prefix=\"/items\", tags=[\"items\"])\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from fastapi import APIRouter\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\nrouter = APIRouter()\n\n@router.get(\"/health\")\nasync def health() -> dict[str, str]:\n    return {\"status\": \"ok\"}\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/framework/fastapi/src/api/v1/routes/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/fastapi/src/api/v1/routes/items.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from fastapi import Depends\nfrom sqlalchemy.ext.asyncio import AsyncSession\n\nfrom ....db import get_session\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "@router.get(\"/\", response_model=list[ItemResponse])\nasync def list_items_endpoint() -> list[ItemResponse]:\n    return await list_items()\n\n@router.post(\"/\", response_model=ItemResponse, status_code=201)\nasync def create_item_endpoint(payload: ItemCreate) -> ItemResponse:\n    return await create_item(payload)\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "@router.get(\"/\", response_model=list[ItemResponse])\nasync def list_items_endpoint(\n    session: AsyncSession = Depends(get_session),\n) -> list[ItemResponse]:\n    return await list_items(session)\n\n@router.post(\"/\", response_model=ItemResponse, status_code=201)\nasync def create_item_endpoint(\n    payload: ItemCreate,\n    session: AsyncSession = Depends(get_session),\n) -> ItemResponse:\n    return await create_item(session, payload)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from fastapi import APIRouter\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":25}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "from ....schemas.items import ItemCreate, ItemResponse\nfrom ....services.items import create_item, list_items\n\nrouter = APIRouter()\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":25}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":34,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/framework/fastapi/src/exceptions.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import logging\n\nfrom fastapi import FastAPI, Request, status\nfrom fastapi.responses import JSONResponse\n\nlogger = logging.getLogger(__name__)\n\nclass AppError(Exception):\n\n    status_code = status.HTTP_400_BAD_REQUEST\n\nclass NotFoundError(AppError):\n    status_code = status.HTTP_404_NOT_FOUND\n\ndef register_exception_handlers(app: FastAPI) -> None:\n\n    @app.exception_handler(AppError)\n    async def handle_app_error(request: Request, exc: AppError) -> JSONResponse:\n        return JSONResponse(status_code=exc.status_code, content={\"detail\": str(exc)})\n\n    @app.exception_handler(Exception)\n    async def handle_unhandled(request: Request, exc: Exception) -> JSONResponse:\n        logger.exception(\"Unhandled error: %s\", exc)\n        return JSONResponse(\n            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,\n            content={\"detail\": \"Internal server error\"},\n        )";
},"useData":true} }],
  ["python/framework/fastapi/src/main.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "@asynccontextmanager\nasync def lifespan(app: FastAPI) -> AsyncIterator[None]:\n    from .db import init_db\n\n    await init_db()\n    yield\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "@asynccontextmanager\nasync def lifespan(app: FastAPI) -> AsyncIterator[None]:\n    yield\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from collections.abc import AsyncIterator\nfrom contextlib import asynccontextmanager\n\nfrom fastapi import FastAPI\n\nfrom .config import get_settings\nfrom .exceptions import register_exception_handlers\nfrom .middleware import add_middleware\n\nsettings = get_settings()\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":12,"column":11},"end":{"line":12,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":27},"end":{"line":12,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":50}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + "\ndef create_app() -> FastAPI:\n\n    app = FastAPI(title=settings.app_name, lifespan=lifespan)\n\n    add_middleware(app)\n    register_exception_handlers(app)\n\n    from .api.router import api_router\n\n    app.include_router(api_router)\n\n    return app\n\napp = create_app()";
},"useData":true} }],
  ["python/framework/fastapi/src/middleware.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import logging\nfrom collections.abc import Awaitable, Callable\n\nfrom fastapi import FastAPI, Request\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom starlette.middleware.base import BaseHTTPMiddleware\nfrom starlette.responses import Response\n\nfrom .config import get_settings\n\nlogger = logging.getLogger(__name__)\n\ndef add_middleware(app: FastAPI) -> None:\n\n    settings = get_settings()\n\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=settings.cors_origins,\n        allow_credentials=True,\n        allow_methods=[\"*\"],\n        allow_headers=[\"*\"],\n    )\n    app.add_middleware(BaseHTTPMiddleware, dispatch=request_logging)\n\nasync def request_logging(\n    request: Request, call_next: Callable[[Request], Awaitable[Response]]\n) -> Response:\n\n    response = await call_next(request)\n    logger.info(\"%s %s -> %s\", request.method, request.url.path, response.status_code)\n    return response";
},"useData":true} }],
  ["python/framework/flask/src/api/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/flask/src/api/v1/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/flask/src/api/v1/router.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from .routes.items import items_bp\n";
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
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\nv1_bp = Blueprint(\"api_v1\", __name__, url_prefix=\"/api/v1\")\n\n@v1_bp.get(\"/health\")\ndef health() -> Response:\n    return jsonify({\"status\": \"ok\"})\n\ndef register_v1_blueprints(app: Flask) -> None:\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":15,"column":25}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "    app.register_blueprint(v1_bp)";
},"useData":true} }],
  ["python/framework/flask/src/api/v1/routes/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/flask/src/api/v1/routes/items.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "    items = await list_items()\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "    from ....db import SessionLocal\n\n    async with SessionLocal() as session:\n        items = await list_items(session)\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "    item = await create_item(data)\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    from ....db import SessionLocal\n\n    async with SessionLocal() as session:\n        item = await create_item(session, data)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from flask import Blueprint, Response, jsonify, request\n\nitems_bp = Blueprint(\"items\", __name__, url_prefix=\"/items\")\n\n@items_bp.get(\"/\")\nasync def list_items_endpoint() -> Response:\n    from ....services.items import list_items\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":9,"column":29}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":16,"column":11}}})) != null ? stack1 : "")
    + "    return jsonify([item.model_dump(mode=\"json\") for item in items])\n\n@items_bp.post(\"/\")\nasync def create_item_endpoint() -> Response:\n    from ....schemas.items import ItemCreate\n    from ....services.items import create_item\n\n    data = ItemCreate(**request.get_json() or {})\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":10},"end":{"line":25,"column":29}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":32,"column":11}}})) != null ? stack1 : "")
    + "    return jsonify(item.model_dump(mode=\"json\")), 201";
},"useData":true} }],
  ["python/framework/flask/src/exceptions.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import logging\n\nfrom flask import Flask, Response, jsonify\n\nlogger = logging.getLogger(__name__)\n\nclass AppError(Exception):\n\n    status_code: int = 400\n\nclass NotFoundError(AppError):\n    status_code: int = 404\n\ndef register_error_handlers(app: Flask) -> None:\n\n    @app.errorhandler(AppError)\n    def handle_app_error(exc: AppError) -> tuple[Response, int]:\n        return jsonify({\"detail\": str(exc)}), exc.status_code\n\n    @app.errorhandler(NotFoundError)\n    def handle_not_found(exc: NotFoundError) -> tuple[Response, int]:\n        return jsonify({\"detail\": str(exc)}), exc.status_code\n\n    @app.errorhandler(Exception)\n    def handle_unhandled(exc: Exception) -> tuple[Response, int]:\n        logger.exception(\"Unhandled error: %s\", exc)\n        return jsonify({\"detail\": \"Internal server error\"}), 500";
},"useData":true} }],
  ["python/framework/flask/src/main.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "    from .db import init_db\n\n    asyncio.run(init_db())\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "import asyncio\n\nfrom flask import Flask\n\nfrom .config import get_settings\nfrom .exceptions import register_error_handlers\nfrom .middleware import register_middleware\n\nsettings = get_settings()\n\ndef create_app() -> Flask:\n\n    app = Flask(__name__)\n    app.config[\"DEBUG\"] = settings.debug\n\n    register_middleware(app)\n    register_error_handlers(app)\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":19,"column":15},"end":{"line":19,"column":30}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":31},"end":{"line":19,"column":53}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":54}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":23,"column":11}}})) != null ? stack1 : "")
    + "\n    from .api.v1.router import register_v1_blueprints\n\n    register_v1_blueprints(app)\n\n    return app\n\napp = create_app()";
},"useData":true} }],
  ["python/framework/flask/src/middleware.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from flask import Flask, request\n\ndef register_middleware(app: Flask) -> None:\n\n    @app.before_request\n    def log_request() -> None:\n        app.logger.info(\"%s %s\", request.method, request.path)";
},"useData":true} }],
  ["python/framework/litestar/src/api/v1/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/litestar/src/api/v1/router.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from .routes.items import create_item_endpoint, list_items_endpoint\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "router = Router(\n    path=\"/v1\",\n    route_handlers=[health, list_items_endpoint, create_item_endpoint],\n)\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "router = Router(\n    path=\"/v1\",\n    route_handlers=[health],\n)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from litestar import Router, get\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\n@get(\"/health\", tags=[\"health\"])\nasync def health() -> dict[str, str]:\n    return {\"status\": \"ok\"}\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/framework/litestar/src/api/v1/routes/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/framework/litestar/src/api/v1/routes/items.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from litestar import Provide\nfrom sqlalchemy.ext.asyncio import AsyncSession\n\nfrom ....db import get_session\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "@get(\"/\", path=\"/items\", response_model=list[ItemResponse])\nasync def list_items_endpoint() -> list[ItemResponse]:\n    return await list_items()\n\n@post(\n    \"/\",\n    path=\"/items\",\n    response_model=ItemResponse,\n    status_code=201,\n)\nasync def create_item_endpoint(data: ItemCreate) -> ItemResponse:\n    return await create_item(data)\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "@get(\"/\", path=\"/items\", response_model=list[ItemResponse])\nasync def list_items_endpoint(\n    session: AsyncSession = Provide(get_session),\n) -> list[ItemResponse]:\n    return await list_items(session)\n\n@post(\n    \"/\",\n    path=\"/items\",\n    response_model=ItemResponse,\n    status_code=201,\n)\nasync def create_item_endpoint(\n    data: ItemCreate,\n    session: AsyncSession = Provide(get_session),\n) -> ItemResponse:\n    return await create_item(session, data)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from litestar import get, post\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":25}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "from ....schemas.items import ItemCreate, ItemResponse\nfrom ....services.items import create_item, list_items\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"tortoise",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":25}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/framework/litestar/src/exceptions.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import logging\n\nfrom litestar import Request\nfrom litestar.responses import JSONResponse\nfrom litestar.status_codes import HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR\n\nlogger = logging.getLogger(__name__)\n\nclass AppError(Exception):\n\n    status_code = HTTP_400_BAD_REQUEST\n\nclass NotFoundError(AppError):\n    status_code = HTTP_404_NOT_FOUND\n\nasync def _handle_app_error(request: Request, exc: AppError) -> JSONResponse:\n    return JSONResponse(status_code=exc.status_code, content={\"detail\": str(exc)})\n\nasync def _handle_unhandled(request: Request, exc: Exception) -> JSONResponse:\n    logger.exception(\"Unhandled error: %s\", exc)\n    return JSONResponse(\n        status_code=HTTP_500_INTERNAL_SERVER_ERROR,\n        content={\"detail\": \"Internal server error\"},\n    )\n\nexception_handlers = {\n    AppError: _handle_app_error,\n    Exception: _handle_unhandled,\n}";
},"useData":true} }],
  ["python/framework/litestar/src/main.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "@asynccontextmanager\nasync def lifespan(app: Litestar) -> AsyncIterator[None]:\n    from .db import init_db\n\n    await init_db()\n    yield\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "@asynccontextmanager\nasync def lifespan(app: Litestar) -> AsyncIterator[None]:\n    yield\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from collections.abc import AsyncIterator\nfrom contextlib import asynccontextmanager\n\nfrom litestar import Litestar\nfrom litestar.config.cors import CORSConfig\n\nfrom .config import get_settings\nfrom .exceptions import exception_handlers\nfrom .middleware import RequestLoggingMiddleware\n\nsettings = get_settings()\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"and")||(depth0 && lookupProperty(depth0,"and"))||alias2).call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":13,"column":11},"end":{"line":13,"column":26}}}),(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":27},"end":{"line":13,"column":49}}}),{"name":"and","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":50}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "")
    + "\ndef create_app() -> Litestar:\n\n    from .api.v1.router import router as v1_router\n\n    return Litestar(\n        route_handlers=[v1_router],\n        debug=settings.debug,\n        cors_config=CORSConfig(allow_origins=settings.cors_origins),\n        exception_handlers=exception_handlers,\n        middleware=[RequestLoggingMiddleware],\n        lifespan=lifespan,\n    )\n\napp = create_app()";
},"useData":true} }],
  ["python/framework/litestar/src/middleware.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import logging\nfrom typing import Any\n\nfrom litestar.middleware import PureMiddleware\nfrom litestar.types import ASGIApp, Receive, Scope, Send\n\nlogger = logging.getLogger(__name__)\n\nclass RequestLoggingMiddleware(PureMiddleware):\n\n    def __init__(self, app: ASGIApp) -> None:\n        self.app = app\n\n    async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:\n        if scope[\"type\"] != \"http\":\n            await self.app(scope, receive, send)\n            return\n\n        method = scope[\"method\"]\n        path = scope[\"path\"]\n\n        async def send_wrapper(message: dict[str, Any]) -> None:\n            if message[\"type\"] == \"http.response.start\":\n                logger.info(\"%s %s -> %s\", method, path, message.get(\"status\", \"??\"))\n            await send(message)\n\n        await self.app(scope, receive, send_wrapper)";
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
    + "!\")\n\n\nif __name__ == \"__main__\":\n    main()";
},"useData":true} }],
  ["python/migrations/alembic/alembic.ini", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "[alembic]\r\nscript_location = migrations\r\nprepend_sys_path = .\r\nsqlalchemy.url =\r\n\r\n[loggers]\r\nkeys = root,sqlalchemy,alembic\r\n\r\n[handlers]\r\nkeys = console\r\n\r\n[formatters]\r\nkeys = generic\r\n\r\n[logger_root]\r\nlevel = WARN\r\nhandlers = console\r\nqualname =\r\n\r\n[logger_sqlalchemy]\r\nlevel = WARN\r\nhandlers =\r\nqualname = sqlalchemy.engine\r\n\r\n[logger_alembic]\r\nlevel = INFO\r\nhandlers =\r\nqualname = alembic\r\n\r\n[handler_console]\r\nclass = StreamHandler\r\nargs = (sys.stderr,)\r\nlevel = NOTSET\r\nformatter = generic\r\n\r\n[formatter_generic]\r\nformat = %(levelname)-5.5s [%(name)s] %(message)s\r\ndatefmt = %H:%M:%S\r\n";
},"useData":true} }],
  ["python/migrations/alembic/migrations/env.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "from sqlmodel import SQLModel\n\nfrom src.config import get_settings\nfrom src.models import Item  # noqa: F401\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlalchemy",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":31}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":17,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "from src.config import get_settings\nfrom src.models import Base\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "target_metadata = SQLModel.metadata\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlalchemy",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":31}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":28,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "target_metadata = Base.metadata\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "import asyncio\nfrom logging.config import fileConfig\n\nfrom alembic import context\nfrom sqlalchemy import pool\nfrom sqlalchemy.engine import Connection\nfrom sqlalchemy.ext.asyncio import async_engine_from_config\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":25}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + "\nconfig = context.config\n\nif config.config_file_name is not None:\n    fileConfig(config.config_file_name)\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlmodel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":25}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":28,"column":7}}})) != null ? stack1 : "")
    + "\nsettings = get_settings()\n\ndef run_migrations_offline() -> None:\n    context.configure(\n        url=settings.database_url,\n        target_metadata=target_metadata,\n        literal_binds=True,\n        dialect_opts={\"paramstyle\": \"named\"},\n        compare_type=True,\n    )\n\n    with context.begin_transaction():\n        context.run_migrations()\n\ndef do_run_migrations(connection: Connection) -> None:\n    context.configure(connection=connection, target_metadata=target_metadata, compare_type=True)\n\n    with context.begin_transaction():\n        context.run_migrations()\n\nasync def run_async_migrations() -> None:\n    configuration = config.get_section(config.config_ini_section, {})\n    configuration[\"sqlalchemy.url\"] = settings.database_url\n\n    connectable = async_engine_from_config(\n        configuration,\n        prefix=\"sqlalchemy.\",\n        poolclass=pool.NullPool,\n    )\n\n    async with connectable.connect() as connection:\n        await connection.run_sync(do_run_migrations)\n\n    await connectable.dispose()\n\ndef run_migrations_online() -> None:\n    asyncio.run(run_async_migrations())\n\nif context.is_offline_mode():\n    run_migrations_offline()\nelse:\n    run_migrations_online()\n";
},"useData":true} }],
  ["python/migrations/alembic/migrations/script.py.mako", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\nfrom typing import Sequence, Union\r\n\r\nfrom alembic import op\r\nimport sqlalchemy as sa\r\n${imports if imports else \"\"}\r\n\r\nrevision: str = ${repr(up_revision)}\r\ndown_revision: Union[str, None] = ${repr(down_revision)}\r\nbranch_labels: Union[str, Sequence[str], None] = ${repr(branch_labels)}\r\ndepends_on: Union[str, Sequence[str], None] = ${repr(depends_on)}\r\n\r\n\r\ndef upgrade() -> None:\r\n    ${upgrades if upgrades else \"pass\"}\r\n\r\n\r\ndef downgrade() -> None:\r\n    ${downgrades if downgrades else \"pass\"}\r\n";
},"useData":true} }],
  ["python/migrations/alembic/migrations/versions/README.md", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "# Alembic migration versions are generated with:\n\n# uv run alembic revision --autogenerate -m \"initial\"\n\n# Generated revisions are placed in this directory.\n";
},"useData":true} }],
  ["python/orm/sqlalchemy/src/db.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "async def init_db() -> None:\n\n    from .models import Base\n\n    async with engine.begin() as conn:\n        await conn.run_sync(Base.metadata.create_all)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from collections.abc import AsyncIterator\n\nfrom sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine\n\nfrom .config import get_settings\n\nsettings = get_settings()\n\nengine = create_async_engine(settings.database_url, echo=settings.debug)\nSessionLocal = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)\n\nasync def get_session() -> AsyncIterator[AsyncSession]:\n\n    async with SessionLocal() as session:\n        yield session\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/orm/sqlalchemy/src/models.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from datetime import datetime, timezone\n\nfrom sqlalchemy import Column, DateTime, String\nfrom sqlalchemy.orm import DeclarativeBase\n\nclass Base(DeclarativeBase):\n    pass\n\nclass Item(Base):\n    __tablename__ = \"items\"\n\n    id = Column(String, primary_key=True)\n    name = Column(String, nullable=False)\n    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))";
},"useData":true} }],
  ["python/orm/sqlalchemy/src/repositories/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/orm/sqlalchemy/src/repositories/items.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from sqlalchemy import select\nfrom sqlalchemy.ext.asyncio import AsyncSession\n\nfrom ..models import Item\nfrom ..schemas.items import ItemResponse\n\nasync def create_item(session: AsyncSession, *, name: str) -> ItemResponse:\n    item = Item(name=name)\n    session.add(item)\n    await session.commit()\n    await session.refresh(item)\n    return ItemResponse.model_validate(item)\n\nasync def list_items(session: AsyncSession) -> list[ItemResponse]:\n    result = await session.execute(select(Item))\n    items = result.scalars().all()\n    return [ItemResponse.model_validate(i) for i in items]";
},"useData":true} }],
  ["python/orm/sqlmodel/src/db.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "async def init_db() -> None:\n\n    from . import models  # noqa: F401\n\n    async with engine.begin() as conn:\n        await conn.run_sync(SQLModel.metadata.create_all)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from collections.abc import AsyncIterator\n\nfrom sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine\nfrom sqlmodel import SQLModel\n\nfrom .config import get_settings\n\nsettings = get_settings()\n\nengine = create_async_engine(settings.database_url, echo=settings.debug)\nSessionLocal = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)\n\nasync def get_session() -> AsyncIterator[AsyncSession]:\n\n    async with SessionLocal() as session:\n        yield session\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/orm/sqlmodel/src/models.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from datetime import datetime, timezone\nfrom uuid import uuid4\n\nfrom sqlmodel import Field, SQLModel\n\ndef utcnow() -> datetime:\n    return datetime.now(timezone.utc)\n\nclass Item(SQLModel, table=True):\n\n    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True)\n    name: str\n    created_at: datetime = Field(default_factory=utcnow)\n";
},"useData":true} }],
  ["python/orm/sqlmodel/src/repositories/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/orm/sqlmodel/src/repositories/items.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from sqlmodel import AsyncSession, select\n\nfrom ..models import Item\nfrom ..schemas.items import ItemResponse\n\nasync def create_item(session: AsyncSession, *, name: str) -> ItemResponse:\n    item = Item(name=name)\n    session.add(item)\n    await session.commit()\n    await session.refresh(item)\n    return ItemResponse.model_validate(item)\n\nasync def list_items(session: AsyncSession) -> list[ItemResponse]:\n    result = await session.exec(select(Item))\n    items = result.all()\n    return [ItemResponse.model_validate(i) for i in items]";
},"useData":true} }],
  ["python/orm/tortoise/src/db.py.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "    await Tortoise.generate_schemas()\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "from tortoise import Tortoise\n\nfrom .config import get_settings\n\nsettings = get_settings()\n\nasync def init_db() -> None:\n\n    await Tortoise.init(\n        db_url=settings.database_url,\n        modules={\"models\": [\"src.models\"]},\n    )\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"migrations") : depth0),"none",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":32}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "");
},"useData":true} }],
  ["python/orm/tortoise/src/models.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from tortoise import fields\nfrom tortoise.models import Model\n\nclass Item(Model):\n\n    id = fields.UUIDField(pk=True)\n    name = fields.CharField(max_length=255)\n    created_at = fields.DatetimeField(auto_now_add=True)\n\n    class Meta:\n        table = \"items\"";
},"useData":true} }],
  ["python/orm/tortoise/src/repositories/__init__.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["python/orm/tortoise/src/repositories/items.py.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "from ..models import Item\nfrom ..schemas.items import ItemResponse\n\nasync def create_item(*, name: str) -> ItemResponse:\n    item = await Item.create(name=name)\n    return ItemResponse.model_validate(item)\n\nasync def list_items() -> list[ItemResponse]:\n    items = await Item.all()\n    return [ItemResponse.model_validate(item) for item in items]";
},"useData":true} }],
  ["rust/addons/docker/_dockerignore", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "target/\r\n.env\r\n.env.local\r\n.git\r\n.gitignore\r\n*.md\r\nDockerfile*";
},"useData":true} }],
  ["rust/addons/docker/docker-compose.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  db:\r\n    image: postgres:16\r\n    environment:\r\n      POSTGRES_USER: postgres\r\n      POSTGRES_PASSWORD: postgres\r\n      POSTGRES_DB: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":19},"end":{"line":8,"column":35}}}) : helper)))
    + "\r\n    ports:\r\n      - \"5432:5432\"\r\n    volumes:\r\n      - pgdata:/var/lib/postgresql/data\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":31}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  db:\r\n    image: mysql:8\r\n    environment:\r\n      MYSQL_ROOT_PASSWORD: password\r\n      MYSQL_DATABASE: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":18,"column":22},"end":{"line":18,"column":38}}}) : helper)))
    + "\r\n    ports:\r\n      - \"3306:3306\"\r\n    volumes:\r\n      - mysqldata:/var/lib/mysql\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  pgdata:\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":31}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":30,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "  mysqldata:\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "services:\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":30}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + "\r\nvolumes:\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":30}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/addons/docker/Dockerfile.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "# syntax=docker/dockerfile:1\r\n\r\nFROM rust:1.80-slim AS builder\r\nWORKDIR /app\r\n\r\nCOPY Cargo.toml Cargo.lock* ./\r\nCOPY src ./src\r\nRUN cargo build --release\r\n\r\nCOPY . .\r\nRUN cargo build --release\r\n\r\nFROM debian:bookworm-slim\r\nWORKDIR /app\r\n\r\nCOPY --from=builder /app/target/release/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":16,"column":40},"end":{"line":16,"column":56}}}) : helper)))
    + " /usr/local/bin/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":16,"column":72},"end":{"line":16,"column":88}}}) : helper)))
    + "\r\n\r\nEXPOSE 8000\r\nENTRYPOINT [\"/usr/local/bin/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":28},"end":{"line":19,"column":44}}}) : helper)))
    + "\"]";
},"useData":true} }],
  ["rust/addons/github-actions/.github/workflows/ci.yml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "      - name: Lint\r\n        run: cargo clippy --all-targets --all-features -- -D warnings\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name: CI\r\n\r\non:\r\n  push:\r\n    branches: [main]\r\n  pull_request:\r\n\r\njobs:\r\n  test:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - uses: dtolnay/rust-toolchain@stable\r\n        with:\r\n          components: [rustfmt, clippy]\r\n      - name: Build\r\n        run: cargo build --all-targets\r\n      - name: Test\r\n        run: cargo test\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"includes")||(depth0 && lookupProperty(depth0,"includes"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"addons") : depth0),"clippy",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":38}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":23,"column":13}}})) != null ? stack1 : "")
    + "      - name: Format check\r\n        run: cargo fmt -- --check";
},"useData":true} }],
  ["rust/base/_gitignore", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "/target/\n**/*.rs.bk\n*.pdb\n.env\n.env.local\n.idea\n.vscode\n*.swp\n.DS_Store\nThumbs.db";
},"useData":true} }],
  ["rust/base/.gitkeep", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true} }],
  ["rust/base/Cargo.toml.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "axum = \"0.8\"\r\ntokio = { version = \"1\", features = [\"full\"] }\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"actix-web",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":36}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":26,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "actix-web = \"4\"\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"rocket",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":16,"column":33}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":26,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "rocket = \"0.5\"\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"warp",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":31}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":26,"column":0}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "warp = \"0.3\"\r\ntokio = { version = \"1\", features = [\"full\"] }\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"salvo",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":32}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":26,"column":0}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "salvo = \"0.75\"\r\ntokio = { version = \"1\", features = [\"full\"] }\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"loco",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":24,"column":31}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":26,"column":0}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "loco-rs = \"0.4\"\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":29,"column":28}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "sea-orm = { version = \"1\", features = [\"sqlx-sqlite\", \"runtime-tokio-rustls\"] }\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":31,"column":10},"end":{"line":31,"column":34}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":35,"column":0}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "sea-orm = { version = \"1\", features = [\"sqlx-postgres\", \"runtime-tokio-rustls\"] }\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":33,"column":31}}}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":35,"column":0}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "sea-orm = { version = \"1\", features = [\"sqlx-mysql\", \"runtime-tokio-rustls\"] }\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":36,"column":27}}}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":53,"column":0}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":28}}}),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":44,"column":7}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return "diesel = { version = \"2\", features = [\"sqlite\"] }\r\nlibsqlite3-sys = { version = \"0.32\", features = [\"bundled\"] }\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":40,"column":10},"end":{"line":40,"column":34}}}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    return "diesel = { version = \"2\", features = [\"postgres\"] }\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":31}}}),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":44,"column":0}}})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    return "diesel = { version = \"2\", features = [\"mysql\"] }\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"sqlx-rust",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":45,"column":10},"end":{"line":45,"column":30}}}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":53,"column":0}}})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":46,"column":6},"end":{"line":46,"column":28}}}),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":46,"column":0},"end":{"line":52,"column":7}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    return "sqlx = { version = \"0.8\", features = [\"runtime-tokio\", \"sqlite\"] }\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":48,"column":10},"end":{"line":48,"column":34}}}),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":48,"column":0},"end":{"line":52,"column":0}}})) != null ? stack1 : "");
},"28":function(container,depth0,helpers,partials,data) {
    return "sqlx = { version = \"0.8\", features = [\"runtime-tokio\", \"postgres\"] }\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":50,"column":10},"end":{"line":50,"column":31}}}),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":0},"end":{"line":52,"column":0}}})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    return "sqlx = { version = \"0.8\", features = [\"runtime-tokio\", \"mysql\"] }\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[package]\r\nname = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":24}}}) : helper)))
    + "\"\r\nversion = \"0.1.0\"\r\nedition = \"2021\"\r\n\r\n[dependencies]\r\nserde = { version = \"1\", features = [\"derive\"] }\r\nserde_json = \"1\"\r\ndotenvy = \"0.15\"\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"framework") : depth0),"axum",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":27}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":26,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"seaorm",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":23}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":53,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/base/env.example.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "# SQLite:  ./"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":29}}}) : helper)))
    + ".db\n# Postgres: postgres://postgres:postgres@localhost:5432/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":6,"column":56},"end":{"line":6,"column":72}}}) : helper)))
    + "\n# MySQL:   mysql://root:password@localhost:3306/"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":7,"column":48},"end":{"line":7,"column":64}}}) : helper)))
    + "\nDATABASE_URL="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":19},"end":{"line":8,"column":41}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":8,"column":13},"end":{"line":8,"column":251}}})) != null ? stack1 : "")
    + "\n";
},"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":59}}}) : helper)))
    + ".db";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":72},"end":{"line":8,"column":96}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":8,"column":62},"end":{"line":8,"column":244}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":142},"end":{"line":8,"column":158}}}) : helper)));
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":168},"end":{"line":8,"column":189}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":158},"end":{"line":8,"column":244}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":228},"end":{"line":8,"column":244}}}) : helper)));
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
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":26}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/core/src/config.rs.hbs", { kind: "precompiled", spec: {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "pub struct Config {\n    pub app_name: String,\n    pub port: u16,\n}\n\nimpl Config {\n    pub fn from_env() -> Self {\n        dotenvy::dotenv().ok();\n        let app_name = std::env::var(\"APP_NAME\").unwrap_or_else(|_| \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":9,"column":69},"end":{"line":9,"column":84}}}) : helper)))
    + "\".to_string());\n        let port: u16 = std::env::var(\"PORT\")\n            .unwrap_or_else(|_| \"8000\".to_string())\n            .parse()\n            .expect(\"PORT must be a valid u16\");\n        Self { app_name, port }\n    }\n}";
},"useData":true} }],
  ["rust/framework/actix-web/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod db;\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":27}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":16,"column":11}}})) != null ? stack1 : "")
    + "        eprintln!(\"database not ready: {err}\");\r\n    }\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect() {\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect().await {\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use actix_web::{get, web, App, HttpServer, HttpResponse, Responder};\r\n\r\nmod config;\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "#[actix_web::main]\r\nasync fn main() -> std::io::Result<()> {\r\n    let app_config = config::Config::from_env();\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":19,"column":7}}})) != null ? stack1 : "")
    + "    let addr = format!(\"0.0.0.0:{}\", app_config.port);\r\n\r\n    println!(\"{} listening on {}\", app_config.app_name, addr);\r\n\r\n    HttpServer::new(|| App::new().route(\"/health\", web::get().to(health)))\r\n        .bind(addr)?\r\n        .run()\r\n        .await\r\n}\r\n\r\nasync fn health() -> impl Responder {\r\n    HttpResponse::Ok()\r\n        .content_type(\"application/json\")\r\n        .body(\"{\\\"status\\\":\\\"ok\\\"}\")\r\n}\r\n\r\n#[cfg(test)]\r\nmod tests {\r\n    use super::*;\r\n\r\n    #[actix_web::test]\r\n    async fn health_returns_status_ok() {\r\n        let app = App::new().route(\"/health\", web::get().to(health));\r\n        let request = actix_web::test::TestRequest::get()\r\n            .uri(\"/health\")\r\n            .to_request();\r\n        let response = actix_web::test::call_service(&app, request).await;\r\n        assert!(response.status().is_success());\r\n    }\r\n}";
},"useData":true} }],
  ["rust/framework/axum/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod db;\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":27}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":16,"column":11}}})) != null ? stack1 : "")
    + "        eprintln!(\"database not ready: {err}\");\r\n    }\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect() {\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect().await {\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use axum::{routing::get, Router};\r\n\r\nmod config;\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "#[tokio::main]\r\nasync fn main() {\r\n    let app_config = config::Config::from_env();\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":19,"column":7}}})) != null ? stack1 : "")
    + "    let router = Router::new().route(\"/health\", get(health));\r\n\r\n    let addr = format!(\"0.0.0.0:{}\", app_config.port);\r\n\r\n    println!(\"{} listening on {}\", app_config.app_name, addr);\r\n\r\n    let listener = tokio::net::TcpListener::bind(&addr)\r\n        .await\r\n        .expect(\"failed to bind\");\r\n\r\n    axum::serve(listener, router).await.expect(\"server error\");\r\n}\r\n\r\nasync fn health() -> &'static str {\r\n    \"{\\\"status\\\":\\\"ok\\\"}\"\r\n}\r\n\r\n#[cfg(test)]\r\nmod tests {\r\n    use super::*;\r\n\r\n    #[tokio::test]\r\n    async fn health_returns_status_ok() {\r\n        assert_eq!(health().await, \"{\\\"status\\\":\\\"ok\\\"}\");\r\n    }\r\n}";
},"useData":true} }],
  ["rust/framework/loco/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod db;\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":27}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":16,"column":11}}})) != null ? stack1 : "")
    + "        eprintln!(\"database not ready: {err}\");\r\n    }\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect() {\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect().await {\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use loco_rs::prelude::*;\r\n\r\nmod config;\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "#[tokio::main]\r\nasync fn main() -> Result<()> {\r\n    let app_config = config::Config::from_env();\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":19,"column":7}}})) != null ? stack1 : "")
    + "    println!(\"{} initialized\", app_config.app_name);\r\n\r\n    Ok(())\r\n}";
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
  ["rust/framework/rocket/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod db;\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect().await {\r\n        eprintln!(\"database not ready: {err}\");\r\n    }\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "#[macro_use]\r\nextern crate rocket;\r\n\r\nmod config;\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "#[get(\"/health\")]\r\nfn health() -> &'static str {\r\n    \"{\\\"status\\\":\\\"ok\\\"}\"\r\n}\r\n\r\n#[rocket::main]\r\nasync fn main() -> Result<(), rocket::Error> {\r\n    let app_config = config::Config::from_env();\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + "    let config = rocket::Config {\r\n        port: app_config.port,\r\n        ..Default::default()\r\n    };\r\n\r\n    println!(\r\n        \"{} listening on 0.0.0.0:{}\",\r\n        app_config.app_name, config.port,\r\n    );\r\n\r\n    let _ = rocket::custom(config).mount(\"/\", routes![health]).launch().await?;\r\n    Ok(())\r\n}\r\n\r\n#[cfg(test)]\r\nmod tests {\r\n    use super::*;\r\n\r\n    #[test]\r\n    fn health_returns_status_ok() {\r\n        assert_eq!(health(), \"{\\\"status\\\":\\\"ok\\\"}\");\r\n    }\r\n}";
},"useData":true} }],
  ["rust/framework/salvo/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod db;\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":27}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":21,"column":11}}})) != null ? stack1 : "")
    + "        eprintln!(\"database not ready: {err}\");\r\n    }\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect() {\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect().await {\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use salvo::prelude::*;\r\n\r\nmod config;\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "#[handler]\r\nasync fn health() -> &'static str {\r\n    \"{\\\"status\\\":\\\"ok\\\"}\"\r\n}\r\n\r\n#[tokio::main]\r\nasync fn main() {\r\n    let app_config = config::Config::from_env();\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "")
    + "    let router = Router::new().path(\"health\").get(health);\r\n\r\n    let addr = format!(\"0.0.0.0:{}\", app_config.port);\r\n\r\n    println!(\"{} listening on {}\", app_config.app_name, addr);\r\n\r\n    let listener = TcpListener::bind(&addr).await.expect(\"failed to bind\");\r\n    Server::new(listener).serve(router).await;\r\n}";
},"useData":true} }],
  ["rust/framework/warp/src/main.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "mod db;\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"diesel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":27}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":21,"column":11}}})) != null ? stack1 : "")
    + "        eprintln!(\"database not ready: {err}\");\r\n    }\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect() {\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    if let Err(err) = db::connect().await {\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use warp::{Filter, Rejection, Reply};\r\n\r\nmod config;\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":21}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "fn routes() -> impl Filter<Extract = impl Reply, Error = Rejection> {\r\n    let health = warp::path(\"health\").map(|| \"{\\\"status\\\":\\\"ok\\\"}\");\r\n    health.with(warp::cors().allow_any_origin())\r\n}\r\n\r\n#[tokio::main]\r\nasync fn main() {\r\n    let app_config = config::Config::from_env();\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"ne")||(depth0 && lookupProperty(depth0,"ne"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"orm") : depth0),"none",{"name":"ne","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":21}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "")
    + "\r\n    println!(\r\n        \"{} listening on 0.0.0.0:{}\",\r\n        app_config.app_name, app_config.port,\r\n    );\r\n\r\n    warp::serve(routes()).run(([0, 0, 0, 0], app_config.port)).await;\r\n}\r\n\r\n#[cfg(test)]\r\nmod tests {\r\n    use super::*;\r\n\r\n    #[tokio::test]\r\n    async fn health_returns_status_ok() {\r\n        let response = warp::test::request().path(\"/health\").reply(routes()).await;\r\n        assert_eq!(response.status(), warp::http::StatusCode::OK);\r\n    }\r\n}";
},"useData":true} }],
  ["rust/orm/diesel/src/db.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "use diesel::SqliteConnection;\r\n\r\npub type DbConnection = SqliteConnection;\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":34}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":15,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "use diesel::PgConnection;\r\n\r\npub type DbConnection = PgConnection;\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":31}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":15,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "use diesel::MysqlConnection;\r\n\r\npub type DbConnection = MysqlConnection;\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "fn database_default() -> &'static str {\r\n    \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":27,"column":5},"end":{"line":27,"column":21}}}) : helper)))
    + ".db\"\r\n}\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":34}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":37,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "fn database_default() -> &'static str {\r\n    \"postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":31,"column":49},"end":{"line":31,"column":65}}}) : helper)))
    + "\"\r\n}\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":33,"column":31}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":37,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "fn database_default() -> &'static str {\r\n    \"mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":35,"column":42},"end":{"line":35,"column":58}}}) : helper)))
    + "\"\r\n}\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use diesel::{Connection, ConnectionError};\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "")
    + "\r\npub fn connect() -> Result<DbConnection, ConnectionError> {\r\n    <DbConnection as Connection>::establish(&database_url())\r\n}\r\n\r\nfn database_url() -> String {\r\n    std::env::var(\"DATABASE_URL\").unwrap_or_else(|_| String::from(database_default()))\r\n}\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":28}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/orm/seaorm/src/db.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "fn database_default() -> String {\r\n    \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":13,"column":5},"end":{"line":13,"column":21}}}) : helper)))
    + ".db\".to_string()\r\n}\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":15,"column":34}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "fn database_default() -> String {\r\n    \"postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":17,"column":49},"end":{"line":17,"column":65}}}) : helper)))
    + "\".to_string()\r\n}\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":31}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":23,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "fn database_default() -> String {\r\n    \"mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":21,"column":42},"end":{"line":21,"column":58}}}) : helper)))
    + "\".to_string()\r\n}\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use sea_orm::{Database, DatabaseConnection, DbErr};\r\n\r\npub async fn connect() -> Result<DatabaseConnection, DbErr> {\r\n    Database::connect(database_url()).await\r\n}\r\n\r\nfn database_url() -> String {\r\n    std::env::var(\"DATABASE_URL\").unwrap_or_else(|_| database_default())\r\n}\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "");
},"useData":true} }],
  ["rust/orm/sqlx-rust/src/db.rs.hbs", { kind: "precompiled", spec: {"0":function(container,depth0,helpers,partials,data) {
    return "use sqlx::SqlitePool;\r\n\r\npub type OrmPool = SqlitePool;\r\n\r\npub async fn connect() -> Result<OrmPool, Error> {\r\n    SqlitePool::connect(&database_url()).await\r\n}\r\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":34}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":27,"column":0}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "use sqlx::PgPool;\r\n\r\npub type OrmPool = PgPool;\r\n\r\npub async fn connect() -> Result<OrmPool, Error> {\r\n    PgPool::connect(&database_url()).await\r\n}\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":31}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":27,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "use sqlx::MySqlPool;\r\n\r\npub type OrmPool = MySqlPool;\r\n\r\npub async fn connect() -> Result<OrmPool, Error> {\r\n    MySqlPool::connect(&database_url()).await\r\n}\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "fn database_default() -> &'static str {\r\n    \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":35,"column":5},"end":{"line":35,"column":21}}}) : helper)))
    + ".db\"\r\n}\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"postgres",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":37,"column":34}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":45,"column":0}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "fn database_default() -> &'static str {\r\n    \"postgres://postgres:postgres@localhost:5432/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":39,"column":49},"end":{"line":39,"column":65}}}) : helper)))
    + "\"\r\n}\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"mysql",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":41,"column":10},"end":{"line":41,"column":31}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":0},"end":{"line":45,"column":0}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "fn database_default() -> &'static str {\r\n    \"mysql://root:password@localhost:3306/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"project_slug") || (depth0 != null ? lookupProperty(depth0,"project_slug") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_slug","hash":{},"data":data,"loc":{"start":{"line":43,"column":42},"end":{"line":43,"column":58}}}) : helper)))
    + "\"\r\n}\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "use sqlx::Error;\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":28}}}),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "")
    + "\r\nfn database_url() -> String {\r\n    std::env::var(\"DATABASE_URL\").unwrap_or_else(|_| String::from(database_default()))\r\n}\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"database") : depth0),"sqlite",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":33,"column":28}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":33,"column":0},"end":{"line":45,"column":7}}})) != null ? stack1 : "");
},"useData":true} }]
]);

export const TEMPLATE_COUNT = 145;
