---
title: GNOME on Ubuntu
---

[Edit on Github](https://github.com/alex285/myGNOME/blob/master/pages/docs/ubuntu/index.md) {.edit-page}
<div class="clear"></div>

Ubuntu is, by far, the most popular Linux system today and that gives it the best community support you can get. Thus
it is an obvious good choice for getting GNOME, and is a good distro in general!

Although Ubuntu uses some GNOME components by default, Canonical patches these components so that they would work better under Unity (their desktop shell). This could cause some issues if we tried to use GNOME shell on top of these components.

This is a step by step guide, and copy/pasting commands will work, but please check out the official documentation at the links provided! {.box-info}

**So here is what you can do!**

## UBUNTU GNOME

If you are willing to reinstall Ubuntu, it is a good idea to directly get [Ubuntu GNOME](https://ubuntugnome.org/) that comes with GNOME by default.

Ubuntu GNOME is not officially connected with the GNOME Project, but it is an official spin of Ubuntu and has the official Ubuntu repos.

## GNOME 3.18

At the current time, the latest Ubuntu release is 16.04 (April 2016), and GNOME's latest release is 3.20 (March 2016). Ubuntu 16.04's repos have GNOME 3.18 apart from GNOME Files (aka Nautilus) which is on version 3.14 and GNOME Software which is on version 3.20.

### UPDATE GNOME FILES TO 3.18

You have to add the [GNOME 3 Team PPA](https://launchpad.net/~gnome3-team/+archive/ubuntu/gnome3) <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo add-apt-repository ppa:gnome3-team/gnome3
```

Then update <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo apt update
```

And finally upgrade. That will get you GNOME Files 3.18 <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo apt upgrade
```

CONGRATZ! YOU'RE DONE!

## GNOME 3.20

If you want to get GNOME 3.20 you need to add the [GNOME 3 Team Staging PPA](https://launchpad.net/~gnome3-team/+archive/ubuntu/gnome3-staging)

That is a massive update and you might run into issues. Or you might not! In any case you should be familiar with downgrading packages using [`ppa-purge`](http://manpages.ubuntu.com/manpages/trusty/man1/ppa-purge.1.html)  {.box-warning}

To add the staging PPA <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo add-apt-repository ppa:gnome3-team/gnome3-staging
```

Then update <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo apt update
```

And finally upgrade. You will get the latest and greatest GNOME! <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo apt upgrade
```

CONGRATZ! YOU'RE DONE! <br />
Now you can continue browsing on GNOME 3.20 guides on this site! But there aren't any yet! So come back later!

## TIPS

Are any special configurations needed under Ubuntu GNOME?
