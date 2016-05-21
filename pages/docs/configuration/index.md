---
title: Configuration
---

[Edit on Github](https://github.com/alex285/myGNOME/blob/master/pages/docs/configuration/index.md) {.edit-page}
<div class="clear"></div>

This page lists popular configuration options.

## APP MENUS ON WINDOW

That will move the application menu from GNOME Shell top bar, to application window itself, and it will place a new icon on the left side of title or CSD bar.

From GNOME Tweak Tool

```
Top Bar ->  Show Application Menu > Set to Off
```

That does 2 things. First removes the App Menu from GNOME Shell

```
org.gnome.settings-daemon.plugins.xsettings overrides {'Gtk/ShellShowsAppMenu': <0>}
```

Second it adds the menu on GTK apps ( Revisit this! )

```
org.gnome.desktop.wm.preferences button-layout 'appmenu:minimize,maximize,close'
```

## ENABLE ALL WINDOW CONTROLS

By default GNOME will only use close button {x}. To enable minimize and maximize, from GNOME Tweak Tool

```
Windows -> Titlebar Buttons -> Set {Maximize, Minimize} to On
```
IF YOU WANT TO CHANGE THE ORDER

You need to use DCONF-EDITOR. Usually systems don't ship it by default. If you don't have it

```
$ sudo apt install dconf-editor
```

Navigate to

```
org.gnome.settings-daemon.plugins.xsettings overrides
```

And you should see something like

```
'{'Gtk/ShellShowsAppMenu': <0>}'
```

Now lets expand this value a bit by adding all the window controls

```
{'Gtk/ShellShowsAppMenu': <0>, 'Gtk/DecorationLayout': <'menu, :minimize,maximize,close'>}
```

The value is space sensitive! {.box-danger}

That won't change anything, and we don't want to change anything yet! Now try re-arranging the controls adding close first

```
{'Gtk/ShellShowsAppMenu': <0>, 'Gtk/DecorationLayout': <'menu, :close,minimize,maximize'>}
```

Now you see the controls arrangement will be {x _ [ ])

If you want to move the close on the left side, you change

```
{'Gtk/ShellShowsAppMenu': <0>, 'Gtk/DecorationLayout': <'close,menu:minimize,maximize'>}
```
That will work **only for GTK Windows.** If you want to apply the changes to everything, and for example to move all the controls to the left like Ubuntu, set

```
org.gnome.desktop.wm.preferences button-layout 'close,maximize,minimize,appmenu:'
```

and

```
org.gnome.settings-daemon.plugins.xsettings overrides {'Gtk/ShellShowsAppMenu': <0>}
```

From CLI you can simply give these two

```
$ gsettings set org.gnome.desktop.wm.preferences button-layout 'close,maximize,minimize,appmenu:'
$ gsettings set org.gnome.settings-daemon.plugins.xsettings overrides "{'Gtk/ShellShowsAppMenu': <0>}"

```

This guide needs a rewrite, but you get the point! {.box-warning}

## SET GLOBAL GTK THEME TO DARK

From GNOME Tweak Tool

```
Appearance -> Global Dark Theme -> Set to On
```

That actually adding

```
$ less ~/.config/gtk-3.0

[Settings]
gtk-application-prefer-dark-theme=1
```

If you want the root user have dark theme  too, you can edit root's GTK config

Notice the changes to be applied need restart. Some apps like Nautilus don't close by {x}. You need to kill it and start it again {.box-warning}
