
# jQuery Radar Plugin

A jQuery plugin which allows you to bind a new event to a jQuery object and track the distance between it and your mouse cursor.

## Example Usage

Use the plugin by binding the `radar` event to a DOM element:

```js
var $options = {
    max: 100,
    min: 0,
    throttle: 0,
    outOfRange: 1
}

$("#target").on("radar", $options, function(event, radar, distance) {
    // Do something neat!
}
```
#### Options:

**max**: Measured in pixels, this is the maximum range of the radar sensor. When the cursor is beyond this distance it will be treated as out of range. [default: 100].

**min**: Measured in pixels, this is the minimum range of the radar sensor . When the cursor is closer than this number, or inside the bounds of the target element, it will be treated as a collison. If set to something above zero, it acts as a sort of padding around the target element in order to trigger a collision before the cursor actually reaches the target.[default: 0].

**throttle**: Measured in milliseconds, this is the maximum frequency that your event handler will be called. If your experiencing performance issues, you can increase the throttle to reduce the processing load. [default: 0].

**outOfRange**: 

In most cases, the default values won't need to be set (except for `max`), but they can be changed after binding an event by setting your `event.data` which is passed into your handler.

#### Callback Data:

**event**: A standard jquery event object
**radar**: a number between 0 and 1. The radar sensor value. 0 being out of range, or on the very limit of the boundry. 1 being a collision with the target element.
**distance**: Measured in pixels, this is the distabce between the cursor and the target element.


#### Demo:
To see a working example of this plugin, demo.html has been provided as part of the package.

## Notes & Contribution

Feel free to send me changes and improvements, or file an issue if you notice something isn't working as well as it should be.

This is one of my first Open Source contributions, so be gentle with your feedback!
