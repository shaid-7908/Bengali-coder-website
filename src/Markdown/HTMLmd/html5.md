# HTML Links
---
Links are found in nearly all web pages. Links allow users to click their way from page to page.
HTML links are hyperlinks.

You can click on a link and jump to another document.

When you move the mouse over a link, the mouse arrow will turn into a little hand.

**Note:** A link does not have to be text. A link can be an image or any other HTML element!

## HTML Links - Syntax

The HTML ```<a>``` tag defines a hyperlink. It has the following syntax:
```html 
<a href="url">link text</a>
```

The most important attribute of the ```<a>``` element is the **href** attribute, which indicates the link's destination.

The link text is the part that will be visible to the reader.

Clicking on the link text, will send the reader to the specified URL address.
### Example
This example shows how to create a link to Bengalicoder.com:
```html
<a href="https://www.Bengalicoder.com/">Visit Bengalicoder.com!</a>
```
By default, links will appear as follows in all browsers:

   * An unvisited link is underlined and blue
   * A visited link is underlined and purple
   * An active link is underlined and red

**Tip:** Links can of course be styled with CSS, to get another look!

HTML Links - The target Attribute

By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

The ```target``` attribute specifies where to open the linked document.

The ```target``` attribute can have one of the following values:

   * ```_self ``` - Default. Opens the document in the same window/tab as it was clicked
  * ``` _blank ```- Opens the document in a new window or tab
  * ``` _parent``` - Opens the document in the parent frame
  * ``` _top``` - Opens the document in the full body of the window

### Example

Use ```target="_blank"``` to open the linked document in a new browser window or tab:

```html
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a> 
```
---
## Absolute URLs vs. Relative URLs

Both examples above are using an absolute URL (a full web address) in the href attribute.

A local link (a link to a page within the same website) is specified with a relative URL (without the "https://www" part):
### Example
```html
<h2>Absolute URLs</h2>
<p><a href="https://www.Bengalicoder.com/">Bengali Coder</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="/about">about</a></p>
<p><a href="/course/css">CSS Tutorial</a></p> 
```
---
## For Better Understanding Watch video => [Hindi]() or [Bengali]()
---