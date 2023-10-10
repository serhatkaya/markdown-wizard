const { MarkdownWizard } = require("./../src/main.js");

const builder = new MarkdownWizard();

// Navigation Links
builder.h1("MarkdownWizard Documentation", true);
builder.p("Navigate to:");
builder.bulletedList([
  " [Creating an Instance](#creating-an-instance)",
  " [Paragraphs](#paragraphs)",
  " [Headings](#headings)",
  " [Blockquotes](#blockquotes)",
  " [Horizontal Rule](#horizontal-rule)",
  " [Code Blocks](#code-blocks)",
  " [Tables](#tables)",
  " [Line Breaks](#line-breaks)",
  " [Inline Code](#inline-code)",
  " [Inline Formatting](#inline-formatting)",
  " [Links](#links)",
  " [Images](#images)",
  " [Getting the Markdown](#getting-the-markdown)",
  " [Line Indentation](#line-indentation)",
  " [Single Line](#single-line)",
  " [Bulleted Lists](#bulleted-lists)",
  " [Ordered Lists](#ordered-lists)",
  " [Collapsible Sections](#collapsible-sections)",
  " [Badge](#badge)",
]);

// Documenting Creating an Instance
builder.h2("Creating an Instance");
builder.p("To get started with the `MarkdownWizard`, create a new instance:");
builder.codeBlock("const builder = new MarkdownWizard();", "javascript");
builder.p(
  "**Description**: Creates a new instance of the `MarkdownWizard` class."
);

// Documenting Paragraphs
builder.h2("Paragraphs");
builder.p("You can add paragraphs of text using the `p(text)` method:");
builder.codeBlock('builder.p("This is a paragraph of text.");', "javascript");
builder.p(
  "**Description**: Appends a paragraph of text to the Markdown content with the specified `text`."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [["`text`", "The text to add as a paragraph."]]
);

// Documenting Headings
builder.h2("Headings");
builder.p(
  "You can add headings using the `h1(header, underline, level)`, `h2(header, underline, level)`, and `h3(header)` methods:"
);
builder.codeBlock('builder.h1("Heading 1");', "javascript");
builder.p(
  "**Description**: Appends a level 1 heading to the Markdown content with the specified `header`."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [
    ["`header`", "The header text."],
    [
      "`underline` (optional)",
      "Whether to underline the header (default is `false`).",
    ],
    ["`level` (optional)", "The indentation level (default is `0`)."],
  ]
);

builder.codeBlock('builder.h2("Heading 2");', "javascript");
builder.p(
  "**Description**: Appends a level 2 heading to the Markdown content with the specified `header`."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [
    ["`header`", "The header text."],
    [
      "`underline` (optional)",
      "Whether to underline the header (default is `false`).",
    ],
    ["`level` (optional)", "The indentation level (default is `0`)."],
  ]
);

builder.codeBlock('builder.h3("Heading 3");', "javascript");
builder.p(
  "**Description**: Appends a level 3 heading to the Markdown content with the specified `header`."
);
builder.p("**Parameters**:");
builder.table(["Parameter", "Description"], [["`header`", "The header text."]]);

// Documenting Blockquotes
builder.h2("Blockquotes");
builder.p("You can add blockquotes using the `blockquote(text)` method:");
builder.codeBlock(
  'builder.blockquote("This is a blockquote.\\nIt can have multiple lines.");',
  "javascript"
);
builder.blockquote("Don't love what you do, do what you love. - SK.");
builder.p(
  "**Description**: Appends a blockquote to the Markdown content with the specified `text`."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [["`text`", "The blockquote text."]]
);

// Documenting Horizontal Rule
builder.h2("Horizontal Rule");
builder.p("You can add a horizontal rule using the `hr()` method:");
builder.codeBlock("builder.hr();", "javascript");
builder.p(
  "**Description**: Appends a horizontal rule (hr) to the Markdown content."
);

// Documenting Code Blocks
builder.h2("Code Blocks");
builder.p("You can add code blocks using the `codeBlock(code, lang)` method:");
builder.codeBlock(
  'builder.codeBlock("const x = 10;\\nconsole.log(x);", "javascript");',
  "javascript"
);
builder.p(
  "**Description**: Appends a code block to the Markdown content with the specified `code` and optional `lang` (language) identifier."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [
    ["`code`", "The code to be included in the code block."],
    [
      "`lang` (optional)",
      "The language identifier for syntax highlighting (default is an empty string).",
    ],
  ]
);

// Documenting Tables
builder.h2("Tables");
builder.p(
  "You can add tables using the `table(columns, rows, alignments)` method:"
);
builder.codeBlock('const columns = ["Header 1", "Header 2"];', "javascript");
builder.codeBlock(
  'const rows = [["Row 1 Cell 1", "Row 1 Cell 2"], ["Row 2 Cell 1", "Row 2 Cell 2"]];',
  "javascript"
);
builder.codeBlock(
  "const alignments = [Alignment.LEFT, Alignment.RIGHT];",
  "javascript"
);
builder.codeBlock("builder.table(columns, rows, alignments);", "javascript");
builder.p(
  "**Description**: Appends a table to the Markdown content with specified `columns`, `rows`, and optional `alignments` for each column."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [
    ["`columns`", "An array of column headers."],
    ["`rows`", "An array of arrays representing table rows."],
    [
      "`alignments` (optional)",
      "An array of text alignment options for columns. Alignments can be `Alignment.LEFT`, `Alignment.CENTER`, or `Alignment.RIGHT`.",
    ],
  ]
);

// Documenting Line Breaks
builder.h2("Line Breaks");
builder.p("You can add a line break using the `br()` method:");
builder.codeBlock("builder.br();", "javascript");
builder.p("**Description**: Adds a line break to the Markdown content.");

// Documenting Inline Code
builder.h2("Inline Code");
builder.p(
  "You can format text as inline code using the `inlineCode(code)` method:"
);
builder.codeBlock(
  "const inlineCodeText = builder.inlineCode(\"console.log('Hello, World!');\");",
  "javascript"
);
builder.p(
  "**Description**: Formats text as inline code by wrapping it in backticks (`code`)."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [["`code`", "The text to be formatted as inline code."]]
);

// Documenting Inline Formatting
builder.h2("Inline Formatting");
builder.p(
  "You can format text as italic or bold using the `inlineItalic(string)` and `inlineBold(string)` methods:"
);
builder.codeBlock(
  'const italicText = builder.inlineItalic("This is italic text.");',
  "javascript"
);
builder.codeBlock(
  'const boldText = builder.inlineBold("This is bold text.");',
  "javascript"
);
builder.p(
  "**Description**: Formats text as italic or bold by enclosing it in asterisks (`*`) or double asterisks (`**`)."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [["`string`", "The text to be formatted as italic or bold."]]
);

// Documenting Links
builder.h2("Links");
builder.p("You can create links using the `link(url, text, title)` method:");
builder.codeBlock(
  'const linkText = builder.link("https://example.com", "Visit Example", "Go to Example Website");',
  "javascript"
);
builder.p(
  "**Description**: Creates a hyperlink with the specified `url`, `text`, and optional `title`."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [
    ["`url`", "The URL to link to."],
    ["`text`", "The link text."],
    ["`title` (optional)", "The optional link title."],
  ]
);

// Documenting Images
builder.h2("Images");
builder.p(
  "You can insert images using the `image(url, altText, title)` method:"
);
builder.codeBlock(
  'const imageTag = builder.image("https://example.com/image.jpg", "Alt Text", "Image Title");',
  "javascript"
);
builder.p(
  "**Description**: Inserts an image into the Markdown content with the specified `url`, `altText`, and optional `title`."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [
    ["`url`", "The URL of the image."],
    ["`altText`", "The alternative text for the image."],
    ["`title` (optional)", "The optional image title."],
  ]
);

// Documenting Getting the Markdown
builder.h2("Getting the Markdown");
builder.p(
  "To retrieve the generated Markdown content, use the `getMarkdown()` method:"
);
builder.codeBlock("const markdown = builder.getMarkdown();", "javascript");
builder.p(
  "**Description**: Returns the generated Markdown content as a string."
);

// Documenting Line Indentation
builder.h2("Line Indentation");
builder.p(
  "You can control line indentation using the `write(string, level)` and `writeln(string, level)` methods. The `level` parameter determines the number of spaces to indent:"
);
builder.codeBlock('builder.writeln("Indented Text", 1);', "javascript");
builder.p(
  "**Description**: Appends a line of text followed by a line break. The `level` parameter controls the indentation level."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [
    ["`string`", "The text to append."],
    ["`level` (optional)", "The indentation level (default is `0`)."],
  ]
);

// Documenting Single Line
builder.h2("Single Line");
builder.p(
  "You can remove extra spaces and convert multiple lines into a single line using the `singleLine(string)` method:"
);
builder.codeBlock(
  'const input = "  This   is\\na\\nmultiline\\n    text.   ";',
  "javascript"
);
builder.codeBlock(
  "const singleLineText = builder.singleLine(input);",
  "javascript"
);
builder.p(
  "**Description**: Trims and removes extra spaces from a string to make it a single line."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [["`string`", "The input string."]]
);

// Documenting Bulleted Lists
builder.h2("Bulleted Lists");
builder.p(
  "You can create bulleted lists using the `bulletedList(list, levels)` method:"
);
builder.codeBlock('const list = ["Item 1", "Item 2", "Item 3"];', "javascript");
builder.codeBlock("builder.bulletedList(list);", "javascript");
builder.p(
  "**Description**: Appends a bulleted list to the Markdown content from an array of items."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [
    ["`list`", "An array of items to be listed in the bulleted list."],
    [
      "`levels` (optional)",
      "An optional array of indentation levels for each item.",
    ],
  ]
);

// Documenting Ordered Lists
builder.h2("Ordered Lists");
builder.p(
  "You can create ordered (numbered) lists using the `orderedList(list)` method:"
);
builder.codeBlock(
  'const orderedListItems = ["First Item", "Second Item", "Third Item"];',
  "javascript"
);
builder.codeBlock("builder.orderedList(orderedListItems);", "javascript");
builder.p(
  "**Description**: Appends an ordered (numbered) list to the Markdown content from an array of items."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [["`list`", "An array of items to be listed in the ordered list."]]
);

// Documenting Collapsible Sections
builder.h2("Collapsible Sections");
builder.p(
  "You can create collapsible sections using the `collapsible(title, initiallyCollapsed, level)` and `endCollapsible()` methods:"
);
builder.codeBlock(
  'builder.collapsible("Click to Expand", true);',
  "javascript"
);
builder.p(
  "**Description**: Starts a collapsible section in the Markdown content with the specified `title`. You can choose to make it initially collapsed or expanded by setting `initiallyCollapsed`. The `level` parameter controls the indentation level."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [
    ["`title`", "The title of the collapsible section."],
    [
      "`initiallyCollapsed` (optional)",
      "Whether the section is initially collapsed (default is `false`).",
    ],
    ["`level` (optional)", "The indentation level (default is `0`)."],
  ]
);

builder.codeBlock("builder.endCollapsible();", "javascript");
builder.p(
  "**Description**: Ends the current collapsible section in the Markdown content."
);

// Documenting Badge Method
builder.h2("Badge");
builder.p(
  "You can add badges to your Markdown content using the `badge(type, ...params)` method:"
);
builder.codeBlock(
  'builder.badge("BuyMeACoffee", "your-username");',
  "javascript"
);
builder.codeBlock(
  'builder.badge("GitHub", "your-username", "your-repo");',
  "javascript"
);
builder.codeBlock(
  'builder.badge("Twitter", "your-twitter-username");',
  "javascript"
);
builder.p(
  "**Description**: Adds a badge to the Markdown content for various services like BuyMeACoffee, GitHub, and Twitter."
);
builder.p("**Parameters**:");
builder.table(
  ["Parameter", "Description"],
  [
    [
      "`type`",
      "The type of badge (e.g., 'BuyMeACoffee', 'GitHub', 'Twitter').",
    ],
    ["`params`", "Parameters specific to the badge type."],
  ]
);

// Getting the Final Markdown
const markdownDocumentation = builder.getMarkdown();

const fs = require("fs");
const path = require("path");
fs.writeFileSync(
  path.resolve(__dirname, "../README.md"),
  markdownDocumentation,
  "utf-8"
);
