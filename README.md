<img src="https://user-images.githubusercontent.com/1423657/121065612-3ebf2400-c7c9-11eb-80bc-8688bdafbf91.png" width=120/>

# pipeLion
Pipelion is a simple, extensible, one-line expression language to pipe data through processing and transform functions. Pipelion stems from the guts of `timelion` and `kable` extending their caged potential to other projects and use-cases.

## pipeLion Expressions
Pipelion functions are chained to each other, just like streams.

##### Data Input
```json
[{"cpu_percent": 100, "time":123}, {"cpu_percent": 80, "time":124}, {"cpu_percent":30, "time":125}]
```
##### Pipelion
```
.average(cpu_percent=true)
```
##### Data Output
```
[
  { cpu_percent: 100, time: 123, cpu_percent_average: 70 },
  { cpu_percent: 80, time: 124, cpu_percent_average: 70 },
  { cpu_percent: 30, time: 125, cpu_percent_average: 70 }
]
```



