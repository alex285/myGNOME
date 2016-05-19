---
title: Extensions
---

[Edit on Github](https://github.com/alex285/myGNOME/blob/master/pages/docs/extensions/index.md) {.edit-page}
<div class="clear"></div>

Extensions provide to GNOME Shell additional features, or modify interface elements. When you enable an extension, you actually hot-loading code
directly to GNOME Shell. Extensions can cause weird issues, and when that is the case you should unload the extension, and try again.

When you disable an extension from GNOME Tweak Tool the extension is trying to revert the default Shell code, but it is not unloaded.
You should always restart GNOME Shell <i class="fa fa-arrow-circle-down" aria-hidden="true"></i> {.box-warning}


```
alt + f2 / r
```

In Wayland session, GNOME Shell cannot be restarted, so you need to relog.

Because there isn't an API for extensions, each extension can override another one, fully or partially,
depending the loading order. {.box-info}  


## HOW DO I INSTALL AN EXTENSION?

First you need GNOME Tweak Tool <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo apt-get install gnome-tweak-tool
```

You will find GNOME Shell extensions [on EGO](https://extensions.gnome.org) or in your Linux repositories. Starting from GNOME 3.22
extensions will be available via GNOME Software App.

Keep on mind that usually Github repos are far more updated than  EGO or distro repos, therefore is good idea to directly get some extensions from there.


## WHERE THE EXTENSIONS ARE INSTALLED?

**On XDG-Folders.** That will be  <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
/usr/share/gnome-shell/extensions      (system-wide)
~/.local/share/gnome-shell/extensions  (user-specific)
```

## NOTICEABLE EXTENSIONS

[The official GNOME Shell Extensions](https://github.com/GNOME/gnome-shell-extensions)
These are the extensions made by GNOME Project. 13 in total! {.my-subtext}


[Dash to Dock](https://github.com/micheleg/dash-to-dock)
A dock for the Gnome Shell. This extension moves the dash out of the overview transforming it in a dock for an easier launching
of applications and a faster switching between windows and desktops. {.my-subtext}

[Dynamic Transparency](https://github.com/rockon999/dynamic-panel-transparency/)
Adds Transparency To The Gnome Shell Panel, with a fade in / out effects for max / unmax windows {.my-subtext}

[Workspaces to Dock](https://github.com/passingthru67/workspaces-to-dock)
A gnome shell extension that transforms the workspaces into an intellihide dock {.my-subtext}

[Window Overlay Icons](https://github.com/sustmi/gnome-shell-extensions-sustmi)
Add application icons to GNOME Shell window overview {.my-subtext}

## TIPS

**Disable Version Validation**

If you're using a new or unstable version of GNOME, you may notice that some extensions don't get loaded. Thats happening because
extensions check for compatibility against GNOME version. You can disable this check by
<i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ gsettings set org.gnome.shell disable-extension-version-validation true
```
