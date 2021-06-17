<img src="https://user-images.githubusercontent.com/1423657/121065612-3ebf2400-c7c9-11eb-80bc-8688bdafbf91.png" width=120/>

# pipeLion
Pipelion is a simple, extensible, one-line expression language to pipe data through processing and transform functions. Pipelion stems from the guts of `timelion` and `kable` extending their caged potential to other projects and use-cases.

* status: experimental, unstable

### pipeLion Expressions
Pipelion functions are chained to each other, just like streams.

##### Data Input

Pipelion accepts 'strings',json objects, arrays of json objects

Strings will be modified into an object inside an array with key "data":"string"
Objects will be modified into array with an object inside


```json
[{"cpu_percent": 100, "time":123}, {"cpu_percent": 80, "time":124}, {"cpu_percent":30, "time":125}]
```

##### Pipelion

```javascript
.average(cpu_percent=true)
```

##### Data Output

```javascript
[
  { cpu_percent: 100, time: 123, cpu_percent_average: 70 },
  { cpu_percent: 80, time: 124, cpu_percent_average: 70 },
  { cpu_percent: 30, time: 125, cpu_percent_average: 70 }
]
```

### Installation
```bash
npm install -g pipelion
```
#### Usage
```bash
pipelion {expression} {input}
```

### Examples

Pipelion has a few small examples

#### Consuming a string

pipelion ".file(string.json)"

#### Consuming objects

pipelion ".file(loki.json).parseLoki().flatten()"

pipelion ".fetch('https://api.crossref.org/works?query.author=terry_pratchett').flatten()"
