/**
 * Represents text alignment options for tables.
 * @class
 */
class Alignment {
  /**
   * Left-align text in the table cell.
   * @static
   * @returns {number} - The LEFT alignment constant.
   */
  static get LEFT(): number {
    return -1;
  }

  /**
   * Center-align text in the table cell.
   * @static
   * @returns {number} - The CENTER alignment constant.
   */
  static get CENTER(): number {
    return 0;
  }

  /**
   * Right-align text in the table cell.
   * @static
   * @returns {number} - The RIGHT alignment constant.
   */
  static get RIGHT(): number {
    return 1;
  }
}

/**
 * A class for building Markdown content programmatically.
 * @class
 */
class MarkdownWizard {
  private markdown: string;

  /**
   * Creates a new instance of MarkdownWizard.
   * @constructor
   */
  constructor() {
    this.markdown = "";
  }

  /**
   * Creates a new MarkdownWizard instance for composing a block of content.
   * @returns {MarkdownWizard} - A new MarkdownWizard instance.
   */
  block(): MarkdownWizard {
    return new MarkdownWizard();
  }

  /**
   * Appends a paragraph of text to the Markdown content.
   * @param {string} text - The text to add as a paragraph.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  p(text: string): MarkdownWizard {
    return this.writeln(text).br();
  }

  /**
   * Appends an H1 header to the Markdown content.
   * @param {string} header - The header text.
   * @param {boolean} [underline=false] - Whether to underline the header.
   * @param {number} [level=0] - The indentation level.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  h1(header: string, underline: boolean = false, level: number = 0): MarkdownWizard {
    header = this.singleLine(header);

    const result = this.writeln(`# ${header}`, level);

    if (underline) {
      result.writeln("-".repeat(header.length));
    }

    return result.br();
  }

  /**
   * Appends an H2 header to the Markdown content.
   * @param {string} header - The header text.
   * @param {boolean} [underline=false] - Whether to underline the header.
   * @param {number} [level=0] - The indentation level.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  h2(header: string, underline: boolean = false, level: number = 0): MarkdownWizard {
    header = this.singleLine(header);

    const result = this.writeln(`## ${header}`, level);

    if (underline) {
      result.writeln("-".repeat(header.length), level);
    }

    return result.br();
  }

  /**
   * Appends an H3 header to the Markdown content.
   * @param {string} header - The header text.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  h3(header: string): MarkdownWizard {
    header = this.singleLine(header);

    return this.writeln("### " + header).br();
  }

  /**
   * Appends a blockquote to the Markdown content.
   * @param {string} text - The blockquote text.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  blockquote(text: string): MarkdownWizard {
    const lines = text.split("\n");
    const newLines = lines.map((line) => {
      return "> " + line.trim();
    });
    const content = newLines.join("\n");

    return this.p(content);
  }

  /**
   * Appends a horizontal rule (hr) to the Markdown content.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  hr(): MarkdownWizard {
    return this.p("---------------------------------------");
  }

  /**
   * Appends a code block to the Markdown content.
   * @param {string} code - The code to be included in the code block.
   * @param {string} [lang=""] - The language identifier for syntax highlighting.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  codeBlock(code: string, lang: string = ""): MarkdownWizard {
    return this.writeln("```" + lang)
      .writeln(code)
      .writeln("```")
      .br();
  }

  /**
   * Appends a table to the Markdown content.
   * @param {Array} columns - An array of column headers.
   * @param {Array} rows - An array of arrays representing table rows.
   * @param {Array} [alignments=[]] - An array of text alignment options for columns.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  table(columns: string[], rows: string[][], alignments: number[] = []): MarkdownWizard {
    this.writeln("|" + columns.join("|") + "|");

    this.write("|");
    for (let i = 0; i < columns.length; ++i) {
      const alignment = alignments[i] || Alignment.LEFT;
      switch (alignment) {
        case Alignment.LEFT:
          this.write(":-|");
          break;
        case Alignment.CENTER:
          this.write(":-:|");
          break;
        case Alignment.RIGHT:
          this.write("-:|");
          break;
      }
    }

    this.br();

    rows.forEach((row) => {
      this.writeln("|" + row.join("|") + "|");
    });

    return this;
  }

  /**
   * Appends a line break to the Markdown content.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  br(): MarkdownWizard {
    this.write("\n");
    return this;
  }

  /**
   * Formats text as inline code.
   * @param {string} code - The text to be formatted as inline code.
   * @returns {string} - The formatted inline code.
   */
  inlineCode(code: string): string {
    return "`" + code + "`";
  }

  /**
   * Formats text as italic using asterisks.
   * @param {string} string - The text to be formatted as italic.
   * @returns {string} - The formatted italic text.
   */
  inlineItalic(string: string): string {
    return "*" + string + "*";
  }

  /**
   * Formats text as bold using double asterisks.
   * @param {string} string - The text to be formatted as bold.
   * @returns {string} - The formatted bold text.
   */
  inlineBold(string: string): string {
    return "**" + string + "**";
  }

  /**
   * Creates a Markdown link.
   * @param {string} url - The URL to link to.
   * @param {string} text - The link text.
   * @param {string} [title=null] - The optional link title.
   * @returns {string} - The Markdown link.
   */
  link(url: string, text: string, title: string | null = null): string {
    if (title) {
      return `[${text}](${url} "${title}")`;
    }

    return `[${text}](${url})`;
  }

  /**
   * Inserts an image into the Markdown content.
   * @param {string} url - The URL of the image.
   * @param {string} altText - The alternative text for the image.
   * @param {string} [title=null] - The optional image title.
   * @returns {string} - The Markdown image tag.
   */
  image(url: string, altText: string, title: string | null = null): string {
    if (title) {
      return `![${altText}](${url} "${title}")`;
    }

    return `![${altText}](${url})`;
  }

  /**
   * Gets the generated Markdown content.
   * @returns {string} - The generated Markdown content.
   */
  getMarkdown(): string {
    return this.markdown.trim();
  }

  /**
   * Appends a line of text followed by a line break.
   * @param {string} string - The text to append.
   * @param {number} [level=0] - The indentation level.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  writeln(string: string, level: number = 0): MarkdownWizard {
    this.write(string, level);
    this.br();
    return this;
  }

  /**
   * Appends a line of text.
   * @param {string} string - The text to append.
   * @param {number} [level=0] - The indentation level.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  write(string: string, level: number = 0): MarkdownWizard {
    const tabLevel = "  ".repeat(level);
    this.markdown += tabLevel + string;
    return this;
  }

  /**
   * Trims and removes extra spaces from a string to make it a single line.
   * @param {string} string - The input string.
   * @returns {string} - The processed single-line string.
   */
  singleLine(string: string): string {
    const result = string.replace(/(\r\n|\r|\n|\s)\s*/g, " ").trim();
    if (typeof result !== "string") {
      throw new Error("Unexpected result");
    }
    return result;
  }

  /**
   * Gets the Markdown content as a string.
   * @returns {string} - The generated Markdown content.
   */
  toString(): string {
    return this.getMarkdown();
  }

  /**
   * Appends a bulleted list to the Markdown content.
   * @param {Array} list - An array of items to be listed in the bulleted list.
   * @param {Array} levels - An optional array of indentation levels for each item.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  bulletedList(list: string[], levels: number[] = []): MarkdownWizard {
    list.forEach((item, index) => {
      let prefix = "- ";
      for (let i = 0; i < levels[index]; i++) {
        prefix = "  " + prefix;
      }
      this.writeln(`${prefix}${item}`);
    });
    this.br();
    return this;
  }

  /**
   * Appends an ordered (numbered) list to the Markdown content.
   * @param {Array} list - An array of items to be listed in the ordered list.
   * @param {Array} levels - An optional array of indentation levels for each item.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  orderedList(list: string[], levels: number[] = []): MarkdownWizard {
    list.forEach((item, index) => {
      const level = levels[index] || 0;
      const indentation = "  ".repeat(level);
      this.writeln(`${indentation}${index + 1}. ${item}`);
    });
    this.br();
    return this;
  }

  /**
   * Starts a collapsible section in the Markdown content.
   * @param {string} title - The title of the collapsible section.
   * @param {boolean} [initiallyCollapsed=false] - Whether the section is initially collapsed.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  collapsible(title: string, initiallyCollapsed: boolean = false, level: number = 0): MarkdownWizard {
    // Determine the initial state of the collapsible section
    const collapseIndicator = initiallyCollapsed
      ? "<details closed>"
      : "<details>";

    // Create the collapsible section
    const section = [
      `${collapseIndicator}`,
      `  <summary>${title}</summary>`,
    ].join("\n");

    this.writeln(section, level);
    return this;
  }

  /**
   * Ends the current collapsible section in the Markdown content.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  endCollapsible(): MarkdownWizard {
    this.writeln("  </details>");
    return this;
  }

  /**
   * Adds a badge to the Markdown content.
   * @param {string} type - The type of badge (e.g., "BuyMeACoffee", "GitHub", "Twitter").
   * @param {...string} params - Parameters specific to the badge type.
   * @returns {MarkdownWizard} - The current MarkdownWizard instance for method chaining.
   */
  badge(type: string, ...params: string[]): MarkdownWizard {
    let badgeMarkdown = "";

    switch (type.toLowerCase()) {
      case "buymeacoffee":
        const username = params[0];
        badgeMarkdown = `[![Buy Me a Coffee](https://img.shields.io/badge/Donate-Buy%20Me%20a%20Coffee-orange.svg)](https://www.buymeacoffee.com/${username})`;
        break;
      case "github":
        const githubUsername = params[0];
        const githubRepo = params[1];
        badgeMarkdown = `[![GitHub](https://img.shields.io/github/followers/${githubUsername}?style=social)](https://github.com/${githubUsername}/${githubRepo})`;
        break;
      case "twitter":
        const twitterUsername = params[0];
        badgeMarkdown = `[![Twitter](https://img.shields.io/twitter/follow/${twitterUsername}?style=social)](https://twitter.com/${twitterUsername})`;
        break;

      default:
        console.error("Unsupported badge type:", type);
        break;
    }

    return this.write(badgeMarkdown);
  }
}

export { Alignment, MarkdownWizard };
