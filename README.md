# ng-useless

ng-useless is ...

## Install

```bash
bower install --save ng-useless
```

## Testing

Just once:

```
gulp test
```

Over and over:

```
gulp tdd
```

Debug your tests in Chrome:

```
gulp tdd:debug
```

## Documentation

You can view the documentation in your browser.

```
gulp docs
```

## Release New Versions

The following tasks:

* bump the version numbers in bower.json & package.json
* commit the changes
* tag the commit

```bash
gulp patch  #bump patch version x.x.1 -> x.x.2
gulp minor  #bump feature version x.1.x -> x.2.0
gulp major  #bump major version 1.x.x -> 2.x.x
```

After running the tasks you should be ready to push your commit & tags:

```bash
git push origin master
git push --tags origin master
```

## Reports

### Coverage

```
gulp coverage
```

### [Plato](https://github.com/es-analysis/plato) - JavaScript source code visualization, static analysis, and complexity tool

```
gulp plato
```
