# MarkdownWizard Documentation
----------------------------

Navigate to:

-  [Creating an Instance](#creating-an-instance)
-  [Paragraphs](#paragraphs)
-  [Headings](#headings)
-  [Blockquotes](#blockquotes)
-  [Horizontal Rule](#horizontal-rule)
-  [Code Blocks](#code-blocks)
-  [Tables](#tables)
-  [Line Breaks](#line-breaks)
-  [Inline Code](#inline-code)
-  [Inline Formatting](#inline-formatting)
-  [Links](#links)
-  [Images](#images)
-  [Getting the Markdown](#getting-the-markdown)
-  [Line Indentation](#line-indentation)
-  [Single Line](#single-line)
-  [Bulleted Lists](#bulleted-lists)
-  [Ordered Lists](#ordered-lists)
-  [Collapsible Sections](#collapsible-sections)
-  [Badge](#badge)

## Installing

You can install `MarkdownWizard` either through npm or unpkg.

### With NPM

```
npm install markdown-wizard
```

### With UNPKG

```html
<script src="https://www.unpkg.com/markdown-wizard@1.0.3/main.js"></script>
```

Usage when installed with UNPKG

```html

<script>
  const wiz = new sk.MarkdownWizard()
  wiz.h1("Rest is up to you :)")
</script>

```

## Creating an Instance

To get started with the `MarkdownWizard`, create a new instance:

```javascript
const builder = new MarkdownWizard();
```

**Description**: Creates a new instance of the `MarkdownWizard` class.

## Paragraphs

You can add paragraphs of text using the `p(text)` method:

```javascript
builder.p("This is a paragraph of text.");
```

**Description**: Appends a paragraph of text to the Markdown content with the specified `text`.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`text`|The text to add as a paragraph.|
## Headings

You can add headings using the `h1(header, underline, level)`, `h2(header, underline, level)`, and `h3(header)` methods:

```javascript
builder.h1("Heading 1");
```

**Description**: Appends a level 1 heading to the Markdown content with the specified `header`.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`header`|The header text.|
|`underline` (optional)|Whether to underline the header (default is `false`).|
|`level` (optional)|The indentation level (default is `0`).|
```javascript
builder.h2("Heading 2");
```

**Description**: Appends a level 2 heading to the Markdown content with the specified `header`.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`header`|The header text.|
|`underline` (optional)|Whether to underline the header (default is `false`).|
|`level` (optional)|The indentation level (default is `0`).|
```javascript
builder.h3("Heading 3");
```

**Description**: Appends a level 3 heading to the Markdown content with the specified `header`.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`header`|The header text.|
## Blockquotes

You can add blockquotes using the `blockquote(text)` method:

```javascript
builder.blockquote("This is a blockquote.\nIt can have multiple lines.");
```

> Don't love what you do, do what you love. - SK.

**Description**: Appends a blockquote to the Markdown content with the specified `text`.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`text`|The blockquote text.|
## Horizontal Rule

You can add a horizontal rule using the `hr()` method:

```javascript
builder.hr();
```

**Description**: Appends a horizontal rule (hr) to the Markdown content.

## Code Blocks

You can add code blocks using the `codeBlock(code, lang)` method:

```javascript
builder.codeBlock("const x = 10;\nconsole.log(x);", "javascript");
```

**Description**: Appends a code block to the Markdown content with the specified `code` and optional `lang` (language) identifier.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`code`|The code to be included in the code block.|
|`lang` (optional)|The language identifier for syntax highlighting (default is an empty string).|
## Tables

You can add tables using the `table(columns, rows, alignments)` method:

```javascript
const columns = ["Header 1", "Header 2"];
```

```javascript
const rows = [["Row 1 Cell 1", "Row 1 Cell 2"], ["Row 2 Cell 1", "Row 2 Cell 2"]];
```

```javascript
const alignments = [Alignment.LEFT, Alignment.RIGHT];
```

```javascript
builder.table(columns, rows, alignments);
```

**Description**: Appends a table to the Markdown content with specified `columns`, `rows`, and optional `alignments` for each column.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`columns`|An array of column headers.|
|`rows`|An array of arrays representing table rows.|
|`alignments` (optional)|An array of text alignment options for columns. Alignments can be `Alignment.LEFT`, `Alignment.CENTER`, or `Alignment.RIGHT`.|
## Line Breaks

You can add a line break using the `br()` method:

```javascript
builder.br();
```

**Description**: Adds a line break to the Markdown content.

## Inline Code

You can format text as inline code using the `inlineCode(code)` method:

```javascript
const inlineCodeText = builder.inlineCode("console.log('Hello, World!');");
```

**Description**: Formats text as inline code by wrapping it in backticks (`code`).

**Parameters**:

|Parameter|Description|
|:-|:-|
|`code`|The text to be formatted as inline code.|
## Inline Formatting

You can format text as italic or bold using the `inlineItalic(string)` and `inlineBold(string)` methods:

```javascript
const italicText = builder.inlineItalic("This is italic text.");
```

```javascript
const boldText = builder.inlineBold("This is bold text.");
```

**Description**: Formats text as italic or bold by enclosing it in asterisks (`*`) or double asterisks (`**`).

**Parameters**:

|Parameter|Description|
|:-|:-|
|`string`|The text to be formatted as italic or bold.|
## Links

You can create links using the `link(url, text, title)` method:

```javascript
const linkText = builder.link("https://example.com", "Visit Example", "Go to Example Website");
```

**Description**: Creates a hyperlink with the specified `url`, `text`, and optional `title`.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`url`|The URL to link to.|
|`text`|The link text.|
|`title` (optional)|The optional link title.|
## Images

You can insert images using the `image(url, altText, title)` method:

```javascript
const imageTag = builder.image("https://example.com/image.jpg", "Alt Text", "Image Title");
```

**Description**: Inserts an image into the Markdown content with the specified `url`, `altText`, and optional `title`.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`url`|The URL of the image.|
|`altText`|The alternative text for the image.|
|`title` (optional)|The optional image title.|
## Getting the Markdown

To retrieve the generated Markdown content, use the `getMarkdown()` method:

```javascript
const markdown = builder.getMarkdown();
```

**Description**: Returns the generated Markdown content as a string.

## Line Indentation

You can control line indentation using the `write(string, level)` and `writeln(string, level)` methods. The `level` parameter determines the number of spaces to indent:

```javascript
builder.writeln("Indented Text", 1);
```

**Description**: Appends a line of text followed by a line break. The `level` parameter controls the indentation level.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`string`|The text to append.|
|`level` (optional)|The indentation level (default is `0`).|
## Single Line

You can remove extra spaces and convert multiple lines into a single line using the `singleLine(string)` method:

```javascript
const input = "  This   is\na\nmultiline\n    text.   ";
```

```javascript
const singleLineText = builder.singleLine(input);
```

**Description**: Trims and removes extra spaces from a string to make it a single line.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`string`|The input string.|
## Bulleted Lists

You can create bulleted lists using the `bulletedList(list, levels)` method:

```javascript
const list = ["Item 1", "Item 2", "Item 3"];
```

```javascript
builder.bulletedList(list);
```

**Description**: Appends a bulleted list to the Markdown content from an array of items.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`list`|An array of items to be listed in the bulleted list.|
|`levels` (optional)|An optional array of indentation levels for each item.|
## Ordered Lists

You can create ordered (numbered) lists using the `orderedList(list)` method:

```javascript
const orderedListItems = ["First Item", "Second Item", "Third Item"];
```

```javascript
builder.orderedList(orderedListItems);
```

**Description**: Appends an ordered (numbered) list to the Markdown content from an array of items.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`list`|An array of items to be listed in the ordered list.|
## Collapsible Sections

You can create collapsible sections using the `collapsible(title, initiallyCollapsed, level)` and `endCollapsible()` methods:

```javascript
builder.collapsible("Click to Expand", true);
```

**Description**: Starts a collapsible section in the Markdown content with the specified `title`. You can choose to make it initially collapsed or expanded by setting `initiallyCollapsed`. The `level` parameter controls the indentation level.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`title`|The title of the collapsible section.|
|`initiallyCollapsed` (optional)|Whether the section is initially collapsed (default is `false`).|
|`level` (optional)|The indentation level (default is `0`).|
```javascript
builder.endCollapsible();
```

**Description**: Ends the current collapsible section in the Markdown content.

## Badge

You can add badges to your Markdown content using the `badge(type, ...params)` method:

```javascript
builder.badge("BuyMeACoffee", "your-username");
```

```javascript
builder.badge("GitHub", "your-username", "your-repo");
```

```javascript
builder.badge("Twitter", "your-twitter-username");
```

**Description**: Adds a badge to the Markdown content for various services like BuyMeACoffee, GitHub, and Twitter.

**Parameters**:

|Parameter|Description|
|:-|:-|
|`type`|The type of badge (e.g., 'BuyMeACoffee', 'GitHub', 'Twitter').|
|`params`|Parameters specific to the badge type.|