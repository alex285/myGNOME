---
title: Contribute
---

[Edit on Github](https://github.com/alex285/myGNOME/blob/master/pages/contribute/index.md) {.edit-page}
<div class="clear"></div>


This is a doc project and thus you can contribute with documentation. You can edit pages and pull requests, or you can just [open an issue](https://github.com/alex285/myGNOME/issues) and propose changes and additions.

**IMPORTANT!** All guides should be written and tested on latest GNOME! Currently 3.20 {.box-danger}

Pages are written on [markdown-it](https://github.com/markdown-it/markdown-it) and we use some plugins like [markdown-it-atts](https://github.com/arve0/markdown-it-attrs), that allows embed additional styles.

## BOXES

When you want to highlight something you can use a "box" by adding a class inside curly brackets

This is a danger message! {.box-danger}

Markdown

```
This is a danger message! {.box-danger}
```

THERE ARE 4 STYLES YOU CAN USE

.box-danger

This is a danger message! {.box-danger}

.box-warning

This is a warning message! {.box-warning}

.box-info

This is a info message! {.box-info}

.box-success

This is a success message! {.box-success}

## ICONS

We use the latest [Font Awesome](http://fontawesome.io/) so you can add any icon from there. Although there is a Markdown loader for it, it is preferable to use normal HTML

<i class="fa fa-android fa-3x fa-spin fa-fw"></i>

Markdown

```
<i class="fa fa-android fa-3x fa-spin fa-fw"></i>
```

## TYPOGRAPHY

Nothing much, than always use H2 for sub-titles with capital

## ADD A NEW PAGE

First of, you do not need to clone anything. Just fork the repo and work from Github's web interface. All you need to do is to make a new file

```
pages/docs/my-new-doc-page/index.md
```

You always start a new page like

```
---
title: My New Doc Page
---

[Edit on Github](https://github.com/alex285/myGNOME/blob/master/docs/my-new-doc-page/index.md) {.edit-page}
<div class="clear"></div>

```

Yeah, the edit link is stupid, I will write a helper for it!

## LINKS

If you want to link, you add the path

```
[DOCS!](docs/extensions)
```

As you may notice that doesn't use React Router and causes page to refresh. I will fix that! Also I will fix the Anchors that are not supported yet!
