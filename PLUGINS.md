# Plugins

A collection of plugins for Jekyll:

- Author Tag
- Call To Action Block
- Documents Tag
- File Tag
- Gallery Tag
- Links Tag
- Numbers Tag
- Questions Tag
- Quote Block
- Stickers Tag
- Video Tag


## Author Tag

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **name** | `string` | Author's full name | `"William Shakespearew"` | `""` |
| **position** | `string` | Author's position in the organization | `"Senior copywriter"` | `""` | 
| **image** | `string` | Path of the author's portrait or image | `"/media/willie_shakes.png"` | `""` | 
| **description** | `text` | Auhtor's biography or description | `"William Shakespeare was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's greatest dramatist. He is often called England's national poet and the "Bard of Avon"."` | `""` | 

```
{% author { "name": "William Shakespeare", "position": "Senior copywriter", "image": "/media/willie_shakes.png", "description": "William Shakespeare was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's greatest dramatist. He is often called England's national poet and the "Bard of Avon"." } %}
```


## Call To Action Block

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **url** | `string` | URL the button opens when clicked | `"https://platoniq.net"` | `""` |
| **label** | `string` | Text of the button | `"Click me"` | `""` | 

```
{% call_to_action {"url":"https://platoniq.net", "label": "call to action button"} %}
# This is my CTA

- one item
- two item
{% endcall_to_action %}
```

## Documents Tag

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **title** | `string` | Title of the list | `"Our documents"` | `""` |
| **items** | `array` | Items in the list | - | `[]` |
| **items[n].file** | `string` | File path | `"/media/the_book_of_platoniq.pdf"` | `""` |
| **items[n].title** | `string` | File title | `"The Book of Platoniq"` | `""` |

```
{% documents { "title": "Our documents", "items": [ { "file": "https://platoniq.net", "title": "Beginner's Guide to Platocracy"}, { "file": "/media/the_book_of_platoniq.pdf", "title": "The Book of Platoniq"} ] } %}
```

## File Tag

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **title** | `string` | Title of the section | `"Listen to our podcast"` | `""` |
| **info** | `string` | Information | `"1h 30'"` | `""` |
| **file** | `string` | File path | `"/media/the_book_of_platoniq.pdf"` | `""` |
| **image** | `string` | File's thumbnail image path | `"/media/book_cover.png"` | `""` |
| **button_text** | `string` | Text for the section button | `"Listen now"` | `"Download"`  |
| **button_icon** | `string`  | Icon for the section button (inside theme's `_includes/svg`) | `"icon-link"` | `"icon-download"` |

```
{% file { "title": "A very cool file", "info": "4kB PDF", "file": "/media/the_book_of_platoniq.pdf", "image": "/media/book_cover.png", "button_text": "Download", "button_icon": "icon-download" } %}
```


## Gallery Tag

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **simple** | `boolean` | Whether to display caption and credits and make image wide | `false` | `true` |
| **images** | `array` | Images in the gallery | `[]` | `""` |
| **images[n].path** | `string` | Image path | `"/media/image1.png"` | `""` |
| **images[n].alt** | `string` | Alternative text for the image | `"Picture of the galaxy"` | `""` |
| **images[n].caption** | `string` | Image caption | `"Picture of the galaxy when it was born"` | `""` |
| **images[n].credits** | `string` | Image credits | `"by Platoniq"` | `""` |

```
{% gallery { "images": [ { "path": "/media/image1.png", "alt": "Picture of the galaxy when it was born", "credits": "Ptolemy" }, { "path": "/media/image2.png", "alt": "Pie chart of my dreams", "caption": "In this pie chart you can see my dreams' evolution during the last year.", "credits": "Anonymous" } ] %}
```

## Links Tag

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **title** | `string` | - | "Our links" |
| **items** | `array` | - | - |
| **items[n].url** | `string` | - | "https://platoniq.net" |
| **items[n].title** | `string` | - | "Visit Platoniq" |

```
{% links { "title": "Our links", "items": [ { "url": "https://platoniq.net", "title": "Link to the galaxy and beyond"}, { "url": "https://platoniq.net", "title": "Visit Platoniq"} ] } %}
```

## Numbers Tag

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **items** | `array` | Items in the list | - | `[]` |
| **items[n].label** | `string` | Label to display under number | `"Number of page views"` | `""` |
| **items[n].number** | `string` | Number | `"1.000.000"` | `""` |

```
{% numbers { "items": [ { "label": "first label", "number": "0.123"}, { "label": "second label", "number": "50%" }, { "label": "third label", "number":  "123" } ] } %}
```

## Questions Tag

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **items** | `array` | - | - | `[]` |
| **items[n].question** | `string` | - | `"Are you there?"` | `""` |

```
{% questions { "items": [ { "question": "Are you there?" }, { "question": "Is it true?" } ] } %}
```


## Quote Block Tag

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **author** | `string` | Quote author or credits | `"William Shakespeare"` | `""` |

### Basic quote block

```liquid
{% quote %}
To quote or not to quote: That is the question.
{% endquote %}
```

### Quote block with params


```liquid
{% quote { "author": "William Shakespeare" } %}
To quote or not to quote: That is the question.
{% endquote %}
```

## Stickers Tag

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **layout** | `string` | Stickers layout ("none", "layout-one", "layout-two") | `"layout-one"` | `"none"` |
| **sticker_one** | `string` | Path of the first sticker | `"/media/sticker_1.png"` | `""` |
| **sticker_two** | `string` | Path of the second sticker | `"/media/sticker_2.png"` | `""` |
| **sticker_one_animation** | `string` | Animation name for the first sticker ("animation-none", "animation-glitch", "animation-breathe") | `"animation-breathe"` | `"animation-none"` |
| **sticker_two_animation** | `string` | Animation name for the second sticker ("animation-none", "animation-glitch", "animation-breathe") | `"animation-glitch"` | `"animation-none"` |

```
{% stickers { "layout": "layout-one", "sticker_one": "/media/stickers/wilder-journal-x/thumbs_up.png", "sticker_one_animation": "animation-glitch", "sticker_two": "/media/stickers/wilder-journal-x/heart.png", "sticker_two_animation": "animation-none" } %}
```

## Video Tag

| Option | Type | Description | Example | Default |
|---|---|---|---|---|
| **title** | `string` | Video title | `"I love cats"` | `""` |
| **url** | `string` | Video's embed URL | `"https://videos.com/embed/video-id"` | `""` |

```
{% video { "title": "I love cats", "url": "https://videos.com/embed/video-id" } %}
```

