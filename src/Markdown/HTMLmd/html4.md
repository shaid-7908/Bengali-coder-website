# HTML Lists and Tables
---
HTML lists allow web developers to group a set of related items in lists.
## * Unordered HTML List

An unordered list starts with the ```<ul>``` tag. Each list item starts with the ```<li>``` tag.

The list items will be marked with bullets (small black circles) by default.

### * Ordered HTML List

An ordered list starts with the ```<ol>``` tag. Each list item starts with the ```<li>``` tag.

The list items will be marked with numbers by default:

### Example
```html
<!DOCTYPE html >
<html >
<head>
<title>First Website</title>
</head>
<body>
<h1>This is A Unordered List</h1>
<ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
    <li>item4</li>
</ul>
<h1>This is a Ordered List</h1>
<ol>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
    <li>item4</li>
</ol>
</body>
</html >
```
### Out Put

![Image exm](https://res.cloudinary.com/dnszaem4s/image/upload/v1666165893/ul-li-exm_q00bhp.jpg)

---
# HTML Tables

HTML tables allow web developers to arrange data into rows and columns.

### Define an HTML Table

A table in HTML consists of table cells inside rows and columns.

### Table Cells

Each table cell is defined by a ```<td>``` and a ```</td>``` tag.

td stands for table data.

Everything between ```<td>``` and ```</td>``` are the content of the table cell.
### Table Rows

Each table row starts with a ```<tr>``` and ends with a ```</tr>``` tag.

### Table Headers

Sometimes you want your cells to be table header cells. In those cases use the ```<th>``` tag instead of the ```<td>``` tag.

### Example

```html
<!DOCTYPE html>
<html>
<style>
table, th, td {
  border:1px solid black;
}
</style>
<body>

<h2>TH elements define table headers</h2>

<table style="width:100%">
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>

<p>To understand the example better, we have added borders to the table.</p>

</body>
</html>

```
### Out Put
![Image exm](https://res.cloudinary.com/dnszaem4s/image/upload/v1666166853/table-example_mlgq6h.jpg)

### Watch Tutorial=> [Hindi]() or [Bengali]() 
---