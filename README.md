<h1> TinyGU </h1>

- [Requirements](#requirements)
- [Continuous Integration](#continuous-integration)
  * [Travis-CI](#travis-ci)
  * [Automatic deployment on GitHub Pages](#automatic-deployment-on-github-pages)
- [Material Design](#material-design)
  * [Color Style](#color-style)
- [Angular CLI](#angular-cli)
  * [Development server](#development-server)
  * [Build Angular App](#build-angular-app)
- [Dev](#dev)
  * [Update Angular](#update-angular)
  * [Versioning](#versioning)
- [Localization](#localization)
  * [i18n](#i18n)
  * [Translation Tools](#translation-tools)
  * [LingoHub](#lingohub)
  * [Transifex](#transifex)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


<!--
https://pandao.github.io/editor.md/en.html
-->

<!--
https://badges.github.io/gh-badges/
https://badges.github.io/
https://shields.io
https://github.com/dustinmoris/CI-BuildStats
https://github.com/boennemann/badges
https://github.com/dwyl/repo-badges
-->

___

[![DEMO](https://img.shields.io/badge/DEMO-physikonline.github.io%2FTinyGU-blue.svg?style=for-the-badge)](https://PhysikOnline.github.io/TinyGU/)

[![Angular Style Guide](https://img.shields.io/badge/Angular-Styleguide-red.svg)](https://angular.io/guide/styleguide)
[![license](https://img.shields.io/github/license/PhysikOnline/TinyGU.svg)]()

[![Build history](https://buildstats.info/travisci/chart/PhysikOnline/TinyGU?buildCount=100)](https://travis-ci.org/PhysikOnline/TinyGU)

[![Travis branch](https://img.shields.io/travis/PhysikOnline/TinyGU/master.svg?label=master&nbsp;branch&nbsp;build)](https://github.com/PhysikOnline/TinyGU)
[![Build Status](https://travis-ci.org/PhysikOnline/TinyGU.svg)](https://travis-ci.org/PhysikOnline/TinyGU) 
[ ![Codeship Status for PhysikOnline/TinyGU](https://app.codeship.com/projects/f401c6b0-d1e0-0135-f946-2eb09e3049d8/status?branch=master)](https://app.codeship.com/projects/262465)

[![Maintainability](https://api.codeclimate.com/v1/badges/41e4da50ab5d83a0064b/maintainability)](https://codeclimate.com/github/PhysikOnline/TinyGU/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/41e4da50ab5d83a0064b/test_coverage)](https://codeclimate.com/github/PhysikOnline/TinyGU/test_coverage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a8fd3dd85f8a44589b62187d11a42bf1)](https://www.codacy.com/app/klezm/PO-TinyGU?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=PhysikOnline/TinyGU&amp;utm_campaign=Badge_Grade)
[![bitHound Overall Score](https://www.bithound.io/github/PhysikOnline/TinyGU/badges/score.svg)](https://www.bithound.io/github/PhysikOnline/TinyGU)
[![bitHound Dependencies](https://www.bithound.io/github/PhysikOnline/TinyGU/badges/dependencies.svg)](https://www.bithound.io/github/PhysikOnline/TinyGU/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/PhysikOnline/TinyGU/badges/devDependencies.svg)](https://www.bithound.io/github/PhysikOnline/TinyGU/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/PhysikOnline/TinyGU/badges/code.svg)](https://www.bithound.io/github/PhysikOnline/TinyGU)
[![Coverage Status](https://coveralls.io/repos/github/PhysikOnline/TinyGU/badge.svg?branch=master)](https://coveralls.io/github/PhysikOnline/TinyGU?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/physikonline/tinygu/badge.svg)](https://snyk.io/test/github/physikonline/tinygu)
[![dependencies Status](https://david-dm.org/PhysikOnline/TinyGU/status.svg)](https://david-dm.org/PhysikOnline/TinyGU)

[![Issue Stats](http://issuestats.com/github/PhysikOnline/TinyGU/badge/issue?style=flat)](http://issuestats.com/github/PhysikOnline/TinyGU)
[![Issue Stats](http://issuestats.com/github/PhysikOnline/TinyGU/badge/pr?style=flat)](http://issuestats.com/github/PhysikOnline/TinyGU)

[![GitHub release](https://img.shields.io/github/release/PhysikOnline/TinyGU/all.svg)](https://github.com/PhysikOnline/TinyGU/releases)
[![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/PhysikOnline/TinyGU.svg?label=prerelease&nbsp;date)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/PhysikOnline/TinyGU.svg)]()
[![GitHub last commit (branch)](https://img.shields.io/github/last-commit/PhysikOnline/TinyGU/prototype.svg?label=last&nbsp;commit&nbsp;(prototype))]()
[![](https://img.shields.io/github/issues-raw/PhysikOnline/TinyGU.svg)]()
[![](https://img.shields.io/github/issues-closed-raw/PhysikOnline/TinyGU.svg)]()
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/PhysikOnline/TinyGU.svg)]()
[![GitHub top language](https://img.shields.io/github/languages/top/PhysikOnline/TinyGU.svg)]()
[![GitHub language count](https://img.shields.io/github/languages/count/PhysikOnline/TinyGU.svg)]()

<!--
[![Github All Releases](https://img.shields.io/github/downloads/PhysikOnline/TinyGU/total.svg?label=all&nbsp;releases)](https://github.com/PhysikOnline/TinyGU/releases)
[![GitHub Release Date](https://img.shields.io/github/release-date/PhysikOnline/TinyGU.svg)]()
[![Github commits (since latest release)](https://img.shields.io/github/commits-since/PhysikOnline/TinyGU/latest.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/PhysikOnline/TinyGU.svg)](https://github.com/PhysikOnline/TinyGU/issues)
[![Github search hit counter](https://img.shields.io/github/search/PhysikOnline/TinyGU/goto.svg)]()
[![Github file size](https://img.shields.io/github/size/PhysikOnline/TinyGU/src/locale/messages.en-US.xlf.svg?=filesize)]()
-->

## Requirements
- https://angular.io/
- https://material.angular.io/
- https://github.com/angular/flex-layout
- ~~https://github.com/trimox/angular-mdc-web (only for the mdc-textfield-box)~~

## Continuous Integration
### Travis-CI
via Travis CI the Project is automatically built and pushed to the gh-pages branch. The .travis.yml-config file is in the root directoy. Branches with the suffix `nobuild` or `nb` seperated by `.` `-` `_` `/` `\ ` are not built on travis.  
Not set up yet but generally possible would be an integration of greenkeeper.io which automatically updates the packages for the builds at travis.

### Automatic deployment on GitHub Pages

[![Build Status](https://travis-ci.org/PhysikOnline/TinyGU.svg)](https://travis-ci.org/PhysikOnline/TinyGU)

[![DEMO](https://img.shields.io/badge/DEMO-physikonline.github.io%2FTinyGU-blue.svg?style=for-the-badge)](https://PhysikOnline.github.io/TinyGU/)

## Material Design
### Color Style

https://material.io/color/#!/?primary.color=005ea8  
http://mcg.mbitson.com/#!?mcgpalette0=%23005ea8

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

### Development server

Run 
`ng serve` 
for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Alternatively when using Webstorm, you can set up a run command. Open "edit configurations" in the "Run" Menu. Add a "Bash" configuration. Now put in your Interpreter Path (cmd on Windows should be located at 
`C:\Windows\system32\cmd.exe`
). And as Interpreter options enter 
`/k ng serve --port 4200`. 
now you can run the server by simply running the project.

`ng serve --i18nFile src/locale/messages.de-DE.xlf --i18nFormat xlf --locale de --missingTranslation ignore -p 4200`

<details>
  <summary>"run" configuration for webstorm @windows</summary>
  when using webstorm with windows you can add these lines to your .idea/workspace.xml Insert after "RunDashboard" and before "ShelveChangesManager":

```
<component name="RunManager" selected="Bash.-p 4201 en">
  <configuration name="-p 4201 de" type="BashConfigurationType" factoryName="Bash">
    <option name="INTERPRETER_OPTIONS" value="/k ng s -p 4201 --aot --i18nFile src/locale/messages.de-DE.xlf --i18nFormat xlf --locale de --missingTranslation ignore" />
    <option name="INTERPRETER_PATH" value="C:\Windows\system32\cmd.exe" />
    <option name="WORKING_DIRECTORY" value="" />
    <option name="PARENT_ENVS" value="true" />
    <option name="SCRIPT_NAME" value="" />
    <option name="PARAMETERS" value="" />
    <module name="" />
    <envs />
  </configuration>
  <configuration name="-p 4201 en" type="BashConfigurationType" factoryName="Bash">
    <option name="INTERPRETER_OPTIONS" value="/k ng s -p 4201 --aot --i18nFile src/locale/messages.en-US.xlf --i18nFormat xlf --locale en --missingTranslation ignore" />
    <option name="INTERPRETER_PATH" value="C:\Windows\system32\cmd.exe" />
    <option name="WORKING_DIRECTORY" value="" />
    <option name="PARENT_ENVS" value="true" />
    <option name="SCRIPT_NAME" value="" />
    <option name="PARAMETERS" value="" />
    <module name="" />
    <envs />
  </configuration>
  <configuration name="-p 4201" type="BashConfigurationType" factoryName="Bash">
    <option name="INTERPRETER_OPTIONS" value="/k ng serve --port 4201" />
    <option name="INTERPRETER_PATH" value="C:\Windows\system32\cmd.exe" />
    <option name="WORKING_DIRECTORY" value="" />
    <option name="PARENT_ENVS" value="true" />
    <option name="SCRIPT_NAME" value="" />
    <option name="PARAMETERS" value="" />
    <module name="" />
    <envs />
  </configuration>
  <list size="3">
    <item index="0" class="java.lang.String" itemvalue="Bash.-p 4201" />
    <item index="1" class="java.lang.String" itemvalue="Bash.-p 4201 de" />
    <item index="2" class="java.lang.String" itemvalue="Bash.-p 4201 en" />
  </list>
</component>
```
</details>

### Build Angular App

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Dev

### Update Angular
to update Angular: https://angular-update-guide.firebaseapp.com/

`npm outdated`, `npm update` and `npm ls --depth=0` are very handy commands  

replace the version number `@'^5.0.0'` with `@latest` and probably add --save to the end of the command.
On windows run cmd as admin!

to update Angular-CLI: https://github.com/angular/angular-cli#updating-angular-cli

if webpack is missing (`ng version`) install it with 
`npm install --save-dev webpack` 

`npm-check-updates` makes it very easy to update packeges if you dont want use greenkeeper.io
run 
`ncu -x typescript -u -a` 

### Versioning

we use the semantic versioning for this app:
https://docs.npmjs.com/getting-started/semantic-versioning
http://nodesource.com/blog/semver-a-primer/


```
                       Major   Patch   Metadata
                          \     /         /
Semantic Version:          1.2.3-beta.1+meta
                            /      \
                         Minor   (Pre)release
```

<!--
<mxfile userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36" version="7.8.8" editor="www.draw.io">
    <diagram id="86b4737d-eb70-a640-dca0-72b86ba362cf" name="Page-1">5Vhdb9owFP01kbYHUGwnDjwW6LaXSpU6ac8mMYm3EGfGKWG/fjfEBkJCy9QwVMoDuj7+ujnnOLqOQ6bL8qtiefIgI5462I1Kh8wcjGkwhv8K2NQACVANxEpENXQAPIk/3ICuQQsR8VVjoJYy1SJvgqHMMh7qBsaUkuvmsIVMm7vmLOYt4ClkaRv9ISKd1OgIB3v8GxdxYndG1DzwnIW/YiWLzOznYLLY/uruJbNrmQddJSyS6wOI3DtkqqTUdbQspzytqLW01fO+nOjd5a14ps+ZQOoJzywtuM2YpjB1sspZBnFcxRZbSFgVktYbQxT9XUjbMVhtZbyDAZBBue+0q6AhHpLBnGs2hDwnSwjswpBgvXZzP4CbaeDG7ljzssITvUwBQBAqDlmw+XaAC+1cikxvzeBPHH8GCCu0rDPdTmCpiDOIU76olnrmSgvwwZ2BtcxrLkKRxd+rxmzg7VKpRvPyJPVoJyicEy7hgdUGhpgJ2DMe2Fjvm/Z67zg0Mlhy4DbrHWZMHu+W3gsNgdG6W3e/Q/cjcsGaeRWGhUo3EwXG5hVD60Ro/gSEVH1rOP1HAlTe59GupZkWsmJyMHYvxBset3mjbdpQD7QFV6LNGNYd0oAGnodG1PWoj+D49kOpj5uUEq9FqbVM35SO3rETA3I1J46v7kTjQURxMHZ92g+lxPWalCJylhOtgd9CqZXlPVqRBP6rvHVZ0euDN3SyiDi3YBh11QsP7KdUJyuEmyoFyNGLhAQt9bwLVQIIX0g9kX0U9fyjd5ZH/5963mXUe2Q6TD6GevZqeo2z11VPvv361anop0fFB58VTzlb8X+9d9XwXN2oBcavH2B6KQt01b99vH7hdh2xF27YtyQgoUfVT8cZ9vsREJr7rzPbvoMvYOT+Lw==</diagram>
</mxfile>
-->

We also use GitFlow Workflow

<details>
  <summary>Links</summary>
    <a href="https://danielkummer.github.io/git-flow-cheatsheet/">https://danielkummer.github.io/git-flow-cheatsheet/</a><br>
    <a href="https://robinsvahn.wordpress.com/2017/04/03/git-flow-einfach-gemacht-sourcetree/">https://robinsvahn.wordpress.com/2017/04/03/git-flow-einfach-gemacht-sourcetree/</a><br>
    <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow</a><br>
</details>

## Localization
### i18n

to generate the source file:
`ng xi18n --locale en-US --i18nFormat=xlf --outputPath src/locale --out-file messages.en-US.xlf` 

### Translation Tools

as an alternative to transifex there are some other companies that offer free accounts for open source projects like:

<details>
  <summary>List of globalization management systems (GMS)</summary>
    <ul>
      <li><a href="https://applanga.com" rel="nofollow">https://applanga.com</a></li>
      <li><a href="https://lingohub.com" rel="nofollow">https://lingohub.com</a> (seems to be very promising since it has a github & bitbucket integration -> easiest set up!)</li>
        <ul>
         <li>lingohub provides a nice page with many services like theirs: <a href="https://lingohub.com/alternative-to" rel="nofollow">https://lingohub.com/alternative-to</a></li>
        </ul>
      <li><a href="https://phraseapp.com" rel="nofollow">https://phraseapp.com</a> (also offers github sync (requires `.phraseapp.yml`))</li>
      <li><a href="https://www.textunited.com" rel="nofollow">https://www.textunited.com</a></li>
    </ul>
  </summary>
</details>

### LingoHub
We switched to LingoHub since it is very easy to use. It connects with a GitHub or Bitbucket account and pulls the 
source automatically and offers to push the new strings to the repo directly or as PR  

### Transifex
since we switched to LingoHub we dont use Transifex anymore
<details>
  <summary>how to use Transifex in this project</summary>

<br>
<p><a href="https://docs.transifex.com/client/installing-the-client" rel="nofollow">install the client</a><br>
<code>tx init</code>
dont change Transifex instance and <a href="https://www.transifex.com/user/settings/api/" rel="nofollow">get a token</a><br>
<code>tx set --auto-remote https://www.transifex.com/PhysikOnline/TinyGU</code><br>
<code>tx push --source</code><br>
<code>tx pull --all</code></p>
<p>some useful links:</p>
<ul>
<li><a href="https://docs.transifex.com/integrations/github#section-integrating-with-travis-ci" rel="nofollow">https://docs.transifex.com/integrations/github#section-integrating-with-travis-ci</a></li>
<li><a href="https://sites.google.com/site/transjoomla/transifex-tutorials/start-local-project" rel="nofollow">https://sites.google.com/site/transjoomla/transifex-tutorials/start-local-project</a></li>
<li><a href="https://wiki.dolibarr.org/index.php/Translator_documentation" rel="nofollow">https://wiki.dolibarr.org/index.php/Translator_documentation</a></li>
</ul>

</details>
