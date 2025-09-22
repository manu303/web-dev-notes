# JavaScript Date Object - Quick Reference Notes

## Creating Date Objects

### 1. Current Date and Time
```javascript
const now = new Date();
// Creates a date object with current date and time
```

### 2. Specific Date (Year, Month, Day)
```javascript
const specificDate = new Date(2024, 10, 29);
// Note: Month is 0-indexed (0 = January, 11 = December)
// So 10 = November
```

### 3. Date from String
```javascript
const dateFromString = new Date("2024-11-29");
// Uses ISO format: YYYY-MM-DD
```

### 4. Using Timestamps
```javascript
const fromTimestamp = new Date(1732845690000);
// Creates date from milliseconds since January 1, 1970 UTC
```

### 5. Complete Constructor Format
```javascript
new Date(year, month, day, hours, minutes, seconds, milliseconds);
// All parameters after year are optional
```

## Getting Date & Time Components

```javascript
const now = new Date();

// Date Components
console.log(now.getFullYear());     // Year (e.g., 2024)
console.log(now.getMonth());        // Month (0-11, 0 = January)
console.log(now.getDate());         // Day of month (1-31)
console.log(now.getDay());          // Day of week (0-6, 0 = Sunday)

// Time Components
console.log(now.getHours());        // Hour (0-23)
console.log(now.getMinutes());      // Minutes (0-59)
console.log(now.getSeconds());      // Seconds (0-59)
console.log(now.getMilliseconds()); // Milliseconds (0-999)
```

### Important Notes:
- **Month**: 0-indexed (January = 0, December = 11)
- **Day of Week**: 0-indexed (Sunday = 0, Saturday = 6)
- **Day of Month**: 1-indexed (1-31)

## Setting Date Components

```javascript
const date = new Date();

// Modify date components
date.setFullYear(2030);    // Set year
date.setMonth(5);          // Set month (0-11)
date.setDate(15);          // Set day of month
date.setHours(10);         // Set hour
date.setMinutes(45);       // Set minutes
date.setSeconds(30);       // Set seconds

console.log(date); // Shows modified date
```

## Formatting Dates

### Built-in Formatting Methods

```javascript
const date = new Date();

// Different format options
console.log(date.toString());           // Full date string
console.log(date.toISOString());        // ISO format: 2024-11-29T05:00:00.000Z
console.log(date.toUTCString());        // UTC format: Fri, 29 Nov 2024 05:00:00 GMT
console.log(date.toLocaleDateString()); // Local date: 11/29/2024
console.log(date.toLocaleTimeString()); // Local time: 10:30:00 AM
console.log(date.toLocaleString());     // Local date & time: 11/29/2024, 10:30:00 AM
```

### Format Examples:
- `toString()`: "Fri Nov 29 2024 10:30:00 GMT+0530 (India Standard Time)"
- `toISOString()`: "2024-11-29T05:00:00.000Z"
- `toUTCString()`: "Fri, 29 Nov 2024 05:00:00 GMT"
- `toLocaleDateString()`: "11/29/2024"
- `toLocaleTimeString()`: "10:30:00 AM"
- `toLocaleString()`: "11/29/2024, 10:30:00 AM"

## Date Calculations

### Finding Difference Between Dates
```javascript
const date1 = new Date("2024-11-01");
const date2 = new Date("2024-11-29");

const difference = date2 - date1; // Difference in milliseconds
console.log(difference); // 2419200000 (milliseconds)

// Convert to days
const differenceInDays = difference / (1000 * 60 * 60 * 24);
console.log(differenceInDays); // 28 days
```

### Useful Conversion Factors
- 1 second = 1000 milliseconds
- 1 minute = 60 seconds = 60,000 milliseconds
- 1 hour = 60 minutes = 3,600,000 milliseconds
- 1 day = 24 hours = 86,400,000 milliseconds

## Quick Tips & Reminders

1. **Month Index**: Always remember months are 0-indexed (January = 0)
2. **Immutable Operations**: Most get/set operations modify the original date object
3. **UTC vs Local**: Be aware of timezone differences when working with dates
4. **Date Arithmetic**: Subtracting dates gives milliseconds difference
5. **Invalid Dates**: Check for invalid dates using `isNaN(date.getTime())`

## Common Use Cases

### Check if Date is Valid
```javascript
const date = new Date("invalid-date");
if (isNaN(date.getTime())) {
    console.log("Invalid date");
}
```

### Add Days to Date
```javascript
const today = new Date();
const futureDate = new Date(today);
futureDate.setDate(today.getDate() + 7); // Add 7 days
```

### Format for Input Fields
```javascript
const date = new Date();
const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
```