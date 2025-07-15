# Date

```jsx
let myVariable = new Date(); // Without parameters, current date(PC configuration) is made as instance.
let myVariable = new Date(); // Milisecond as parameter
let myVariable = new Date("YYYY-MM-DDTHH:mm:ss.sssTZD"); // 
let myVariable = new Date();
let myVariable = new Date
```

- An object that represents dates and times.
- Provides methods to manipulate date and time.

1. 引数なし、現在時刻
2. 1970.01.01.0:00からのミリ秒
- GMT
- UTC
- JST

### Present time

### 1970/1/1 0P.M.

### YYYY-MM-DDTHH:mm:ss.sssTZD

### RFC2822

```jsx
const localTime = new Date(")
```

# Method

## Dynamic

| Method | Return Value | Description |
| --- | --- | --- |
| `getDate()` | `dateInt` | Returns the day of the Date object (as an integer). |
| `getUTCDate()` | `dayInt` | Returns the day of the week of the Date object (as an integer). 0 (Sunday) to 6 (Saturday). |
| `getDay()` | `dayInt` | Returns the day of the week of the Date object (as an integer). |
| `getMonth()` | `monthInt` | Returns the month of the Date object (as an integer). 0 (January) to 11 (December). |
| `getUTCMonth()` | `monthInt` | Returns the month of the Date object (as an integer in UTC time). |
| `getFullYear()` | `yyyy` | Returns the year of the Date object as a 4-digit number. |
| `getUTCFullYear()` | `yyyy` | Returns the year of the Date object in UTC as a 4-digit number. |
| `getYear()` | `yearInt` | Returns the year minus 1900 (deprecated; use `getFullYear()` instead). |
| `getHours()` | `hourInt` | Returns the hours of the Date object (as an integer). |
| `getUTCHours()` | `hourInt` | Returns the hours of the Date object in UTC (as an integer). |
| `getMinutes()` | `minuteInt` | Returns the minutes of the Date object (as an integer). |
| `getUTCMinutes()` | `minuteInt` | Returns the minutes of the Date object in UTC (as an integer). |
| `getSeconds()` | `minuteInt` | Returns the seconds of the Date object (as an integer). |
| `getUTCSeconds()` | `minuteInt` | Returns the seconds of the Date object in UTC (as an integer). |
| `getMilliseconds()` | `msInt` | Returns the milliseconds of the Date object (as an integer). |
| `getUTCMilliseconds()` | `msInt` | Returns the milliseconds of the Date object in UTC (as an integer). |
| `getTime()` | `ms` | Returns the number of milliseconds since the Unix Epoch (January 1, 1970). |
| `getTimezoneOffset()` | `tzOffset` | Returns the difference in minutes between the UTC and local time (e.g., JST: -540). |
| `toString()` | `datetimeStr` | Returns the Date object as a string (local time format). |
| `toISOString()` | `datetimeStr` | Returns the Date object as a string in ISO8601 format. |
| `toJSON()` | `jsonStr` | Converts the Date object to a JSON string (similar to `toISOString()`). |
| `toDateString()` | `dateStr` | Returns the Date object as a string in the "Day Month Date Year" format. |
| `toTimeString()` | `timeStr` | Returns the time portion of the Date object as a string. |
| `toLocaleString(locales, options)` | `datetimeStr` | Returns the Date object as a localized string. Example: `(new Date()).toLocaleString("ja-JP", { timeZone: "UTC" })` results in "2021/5/4 10:53:40". |
| `toLocaleDateString(locales, options)` | `dateStr` | Returns the date portion of the Date object as a localized string. |
| `toLocaleTimeString(locales, options)` | `timeStr` | Returns the time portion of the Date object as a localized string. |
| `toUTCString()` | `utcDatetimeStr` | Converts the Date object to a string in UTC format. Example: `(new Date("2021-05-04T02:35:00")).toUTCString()` results in "Mon, 03 May 2021 17:35:00 GMT". |

```jsx

```

## Static

# Method