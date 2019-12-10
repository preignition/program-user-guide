# How do I format text in html?

### Question

Certain fields of Preignition, such as [notifications](https://program-user-docs.preignition.org/~/edit/drafts/-LFWwbAsAH6jKOL1M1X_/users-program-and-advanced/portfolio/resources/notifications), currently require users to format text using html.  I am not familiar with html and so need some help.

### Answer

We intend to develop Preignition so text can be formatted without users needing to use html.  For now some basic knowledge of html is required.

The following guidance is taken from a website called [Tutorials Point.](https://www.tutorialspoint.com/html/html_basic_tags.htm)  Tutorials Point includes a lot more useful and accessible information about html.  

### Heading tag

Most documents start with a heading. You can use different sizes for your headings. HTML has six levels of headings, which use the elements **&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;,** and **&lt;h6&gt;**. 

While displaying any heading, a browser adds one line before and one line after that heading.

#### Example

```text
      <h1>This is heading 1</h1>
      <h2>This is heading 2</h2>
      <h3>This is heading 3</h3>
      <h4>This is heading 4</h4>
      <h5>This is heading 5</h5>
      <h6>This is heading 6</h6>  
```

This will produce the following result:

![](../.gitbook/assets/image%20%2890%29.png)

### Paragraph Tag

The **&lt;p&gt;** tag offers a way to structure your text into different paragraphs. Each paragraph of text should go in between an opening &lt;p&gt; and a closing &lt;/p&gt; tag as shown below in the example below:



```text
      <p>Here is a first paragraph of text.</p>
      <p>Here is a second paragraph of text.</p>
      <p>Here is a third paragraph of text.</p>
```

 This will produce the following result-

Here is a first paragraph of text.

Here is a second paragraph of text.

Here is a third paragraph of text.

### Line break tag

Whenever you use the **&lt;br /&gt;** element, anything following it starts from the next line. This tag is an example of an **empty** element, where you do not need opening and closing tags, as there is nothing to go in between them.

The &lt;br /&gt; tag has a space between the characters **br** and the forward slash. If you omit this space, older browsers will have trouble rendering the line break, while if you miss the forward slash character and just use &lt;br&gt; it is not valid in XHTML.

```text
         <p>Hello<br />
         You delivered your assignment ontime.<br />
         Thanks<br />
         Mahnaz</p>
```

This will produce the following result-

Hello  
You delivered your assignment on time.  
Thanks  
Mahnaz

### Bold text

Anything that appears within **&lt;b&gt;...&lt;/b&gt;** element, is displayed in bold as shown below −

```text
<p>The following word uses a <b>bold</b> typeface.</p>
```

This will produce the following result-

The following word uses a **bold** typeface.

### Display name feature

This enables a entrepreneurs name to be included in a notification.  For example say an entrepreneurs name is 'John Smith'.  The following code

&lt;p&gt;Dear {{displayName}},&lt;/p&gt;

Will produce the following result-

Dear John Smith,

### Conclusion

We do not expect users to become html experts.  Therefore if you need help with html, or you want to do something which is not covered here please contact help@preignition.org.

