---
title: GNOME on Ubuntu
---

[Edit on Github](https://github.com/alex285/myGNOME/blob/master/pages/docs/ubuntu/index.md) {.edit-page}
<div class="clear"></div>

Ubuntu is the most popular Linux system by far today and that gives it the best community support you can get. Thus
it is an obvious good choice for getting GNOME, and get a good Linux in general!

**However.** Ubuntu although is a GNOME desktop based system, isn't quite famous for its GNOME interplay. That happens
because Canonical is patching GNOME, so it can work better under Unity (their desktop shell), and that causes lot of
issues.

This is a step by step guide, and copy paste commands will work. Pretty please though, follow the official documentation
on the links provided! {.box-info}

**So here is what you can do!**

## UBUNTU GNOME

If you are willing to go with GNOME is a good idea to directly get
[Ubuntu-GNOME](https://ubuntugnome.org/) (uGNOME)
that comes with GNOME desktop as default.

uGNOME is not officially connected with GNOME Project, but is an official spin of Ubuntu, and therefore carries the restrictions
of its mother. All Ubuntu spins, are obligated to use packages from official Ubuntu repos.

## GNOME 3.18

At the time, latest Ubuntu release is version 16.04, releases in April, and GNOME's latest release is 3.20 release in March.
Ubuntu 16.04 ships a full GNOME stack apart GNOME Files (aka Nautilus) which is on version 3.14.

### UPDATE GNOME FILES IN 3.18

You have to add the
[GNOME 3 Team PPA](https://launchpad.net/~gnome3-team/+archive/ubuntu/gnome3) <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo add-apt-repository ppa:gnome3-team/gnome3
```

Then update <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo apt-get update
```

And finally upgrade. That will get you GNOME Files 3.18 <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo apt-get upgrade
```

GRATZ! YOU'RE DONE!

## GNOME 3.20

If you want to upgrade on GNOME 3.20 you need to add the
[GNOME 3 TEAM Staging PPA](https://launchpad.net/~gnome3-team/+archive/ubuntu/gnome3-staging)

That is a massive update and you might run into issues. Or might not! In any case you should be familiar with
downgrade packages with [PPA-PURGE](http://manpages.ubuntu.com/manpages/trusty/man1/ppa-purge.1.html)  {.box-warning}

To add the staging PPA <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo add-apt-repository ppa:gnome3-team/gnome3-staging
```

Then update <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo apt-get update
```

And finally upgrade. That will get you the latest and greatest GNOME! <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>

```
$ sudo apt-get upgrade
```

GRATZ! YOU'RE DONE! <br />
Now you can continue browsing on GNOME 3.20 guides on this site! But there aren't any yet! So come back later!

## TIPS

Does special configuration is needed under UBUNTU GNOME?
