## Constants

<dl>
<dt><a href="#COLORS">COLORS</a> : <code>object</code></dt>
<dd><p>The built-in terminal text colors available for use</p>
</dd>
<dt><a href="#BACKGROUND_COLORS">BACKGROUND_COLORS</a> : <code>object</code></dt>
<dd><p>The built-in terminal background colors available for use</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#f">f(string, [options])</a> ⇒ <code>string</code></dt>
<dd><p>Format a string with colors and font</p>
</dd>
</dl>

<a name="COLORS"></a>

## COLORS : <code>object</code>
The built-in terminal text colors available for use

**Kind**: global constant  
**Default**: <code>{&quot;black&quot;:&quot;\u001b[30m&quot;,&quot;red&quot;:&quot;\u001b[31m&quot;,&quot;green&quot;:&quot;\u001b[32m&quot;,&quot;yellow&quot;:&quot;\u001b[33m&quot;,&quot;blue&quot;:&quot;\u001b[34m&quot;,&quot;magenta&quot;:&quot;\u001b[35m&quot;,&quot;cyan&quot;:&quot;\u001b[36m&quot;,&quot;white&quot;:&quot;\u001b[37m&quot;,&quot;default&quot;:&quot;&quot;}</code>  
<a name="BACKGROUND_COLORS"></a>

## BACKGROUND\_COLORS : <code>object</code>
The built-in terminal background colors available for use

**Kind**: global constant  
**Default**: <code>{&quot;black&quot;:&quot;\u001b[40m&quot;,&quot;red&quot;:&quot;\u001b[41m&quot;,&quot;green&quot;:&quot;\u001b[42m&quot;,&quot;yellow&quot;:&quot;\u001b[43m&quot;,&quot;blue&quot;:&quot;\u001b[44m&quot;,&quot;magenta&quot;:&quot;\u001b[45m&quot;,&quot;cyan&quot;:&quot;\u001b[46m&quot;,&quot;white&quot;:&quot;\u001b[47m&quot;,&quot;default&quot;:&quot;&quot;}</code>  
<a name="f"></a>

## f(string, [options]) ⇒ <code>string</code>
Format a string with colors and font

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The string to format |
| [options] | <code>object</code> | <code>{}</code> |  |
| [options.color] | <code>string</code> | <code>&quot;default&quot;</code> | The text color to use, name (e.g. 'red') or hex (e.g. '#ff0000') |
| [options.bg_color] | <code>string</code> | <code>&quot;default&quot;</code> | The background color to use, name (e.g. 'red') or hex (e.g. '#ff0000') |
| [options.bold] | <code>boolean</code> | <code>false</code> | Whether to use bold font |
| [options.faint] | <code>boolean</code> | <code>false</code> | Whether to use faint font |
| [options.underlined] | <code>boolean</code> | <code>false</code> | Whether to use underlined font |
| [options.blink] | <code>boolean</code> | <code>false</code> | Whether to use blinking font |

