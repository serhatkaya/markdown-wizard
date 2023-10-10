declare class Alignment {
    static LEFT: number;
    static CENTER: number;
    static RIGHT: number;
  }
  
  declare class MarkdownWizard {
    constructor();
    block(): MarkdownWizard;
    p(text: string): MarkdownWizard;
    h1(header: string, underline?: boolean, level?: number): MarkdownWizard;
    h2(header: string, underline?: boolean, level?: number): MarkdownWizard;
    h3(header: string): MarkdownWizard;
    blockquote(text: string): MarkdownWizard;
    hr(): MarkdownWizard;
    codeBlock(code: string, lang?: string): MarkdownWizard;
    table(columns: string[], rows: string[][], alignments?: number[]): MarkdownWizard;
    br(): MarkdownWizard;
    inlineCode(code: string): string;
    inlineItalic(text: string): string;
    inlineBold(text: string): string;
    link(url: string, text: string, title?: string): string;
    image(url: string, altText: string, title?: string): string;
    getMarkdown(): string;
    writeln(text: string, level?: number): MarkdownWizard;
    write(text: string, level?: number): MarkdownWizard;
    singleLine(text: string): string;
    toString(): string;
    bulletedList(list: string[], levels?: number[]): MarkdownWizard;
    orderedList(list: string[], levels?: number[]): MarkdownWizard;
    collapsible(title: string, initiallyCollapsed?: boolean, level?: number): MarkdownWizard;
    endCollapsible(): MarkdownWizard;
    badge(type: string, ...params: string[]): MarkdownWizard;
  }
  
  export { Alignment, MarkdownWizard };
  