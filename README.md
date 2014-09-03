#Weather (Angular Directive)

An Angular Directive using the [**OpenWeather API**](http://www.openweathermap.org/api).

##Usage

Just include the following tag and don't forget to specify `ng-app="clickWeatherWidget"`.

```html
<!DOCTYPE html>
<html lang="pt-BR" ng-app="clickWeatherWidget">

...

<click-weather data-city="[city name]" data-unit="[unit of measure]" data-lang="[language]" />

...

</body>
</html>
```

###Options Quick Reference

Option | Description | Default
---|---|---
data-city | The name of the city of your choice |
data-unit | Unit of measure wanted. Options available: `metric` for Celsius and `imperial` for Fahrenheit | `metric`
data-lang | Language. Options available: English - `en`, Russian - `ru`, Italian - `it`, Spanish - `es` (or `sp`), Ukrainian - `uk` (or `ua`), German - `de`, Portuguese - `pt`, Romanian - `ro`, Polish - `pl`, Finnish - `fi`, Dutch - `nl`, French - `fr`, Bulgarian - `bg`, Swedish - `sv` (or `se`), Chinese Traditional - `zh_tw`, Chinese Simplified - `zh` (or `zh_cn`), Turkish - `tr`, Croatian - `hr`, Catalan - `ca`  | `en`

Visit the [**OpenWeather API Documentation**](http://www.openweathermap.org/api) for more info.

##Thanks

Thanks to [**OpenWeather**](http://www.openweathermap.org) for the amazing [**API**](http://www.openweathermap.org/api) and to [**Erik Flowers**](https://github.com/erikflowers) for the incredible [**Weather Icons**](https://github.com/erikflowers/weather-icons) set.