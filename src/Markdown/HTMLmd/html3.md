# HTML Image and Video Tags
---
Images can improve the design and the appearance of a web page.

The HTML ```<img>``` tag is used to embed an image in a web page.

Images are not technically inserted into a web page; images are linked to web pages. The ```<img>``` tag creates a holding space for the referenced image.

The ```<img>``` tag is empty, it contains attributes only, and does not have a closing tag.

The ```<img>``` tag has two required attributes:

   * src - Specifies the path to the image
   * alt - Specifies an alternate text for the image

## The src Attribute

The required src attribute specifies the path (URL) to the image.

**Note:** When a web page loads, it is the browser, at that moment, that gets the image from a web server and inserts it into the page. Therefore, make sure that the image actually stays in the same spot in relation to the web page, otherwise your visitors will get a broken link icon. The broken link icon and the alt text are shown if the browser cannot find the image.
```html
<img src="https://images.hindustantimes.com/img/2022/09/08/550x309/Emirates-Asia-Cup-Cricket-44_1662651873143_1662651873143_1662651900814_1662651900814.jpg" alt="Image of Virat Kohli">
```

## The alt Attribute

The required alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

The value of the alt attribute should describe the image:

```html
<img src="vkImage.jpg" alt="Image of Virat Kohli">
```
## Image Size - Width and Height

You can use the style attribute to specify the width and height of an image.
### Example
```html
<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">
```
Alternatively, you can use the width and height attributes:
### Example
```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```
The width and height attributes always define the width and height of the image in pixels.

**Note:** Always specify the width and height of an image. If width and height are not specified, the web page might flicker while the image loads.

## Width and Height, or Style?

The width, height, and style attributes are all valid in HTML.

However, we suggest using the style attribute. It prevents styles sheets from changing the size of images:

### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
img {
  width: 100%;
}
</style>
</head>
<body>

<img src="html5.gif" alt="HTML5 Icon" width="128" height="128">

<img src="html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">

</body>
</html> 
```
# The HTML ```<picture>``` Element

The HTML ```<picture>``` element gives web developers more flexibility in specifying image resources.

The ```<picture>``` element contains one or more ```<source>``` elements, each referring to different images through the srcset attribute. This way the browser can choose the image that best fits the current view and/or device.

Each ```<source>``` element has a media attribute that defines when the image is the most suitable.
### Example

Show different images for different screen sizes:
```html
<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture> 
```
## For Better Under Standing Watch video => [Hindi]() or [Bengali]()

---
# The HTML ```<video>``` Element

To show a video in HTML, use the ```<video>``` element:
### Example
```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video> 
```
## How it Works

The controls attribute adds video controls, like play, pause, and volume.

It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads.

The ```<source>``` element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.

The text between the ```<video>``` and ```</video>``` tags will only be displayed in browsers that do not support the ```<video>``` element.

## HTML ```<video>``` Autoplay

To start a video automatically, use the autoplay attribute:
### Example
```html
<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```


**Note:** Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.

Add muted after autoplay to let your video start playing automatically (but muted):
### Example
```html
<video width="320" height="240" autoplay muted>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>  
```

## For Better Understanding Watch video => [Hindi]() or [Bengali]()
---