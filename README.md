# Hier entstejt ein Blog

## Vorwort
Es sit zwar nicht das erste Mal, dass dokumentiert widre, wie ein Blog entsteht, aber für mich ist es ein Anfang.
Ich sehe diese Seiten nicht als "lesenswerte Artikel", sondern eher als ausführliche Commitmessages.

## Ziele
Ich versuche hier im Blog meine Interessen rund um das Thema Webdevelopment zu sammeln und zu bündeln.
Alles was dazu gehört. Von Console Tools bis zu Editor Erweiterungen, von .htaccess bis SVG-Sprites.

## Erwartungesn
* Der Blog soll staisch sein. Als nicht in PHP oder node.js.
* Resposive Web Design
* Gulp als Taskrunner
* Jade für HMTML und Logik
* Markdown (CommonMark) zu schreiben
* Stylus für CSS
* Browserify für JS (evtl. mit npm, component)
* GIT als Versionierungssystem
* GIT als Workflow (Branches für "Atikkel")


# Sprint 1
Folgende Ideen will und werde ich hoffentlich im ersten "Sprint" umsetzen:
* Statisches System (komilieren von Jade, MD, Stylus)
* Gulp Basis Workflows
* Workflow mit Github (Deploy with a push)

## Was bisher geschah

Es hat ganz gut funktioniert.
* Harp macht die Arbeit
* Harp hat einen lokalen Server
* Alles ins GULP eingebunden
* Gulp überwacht alle Dateien und BrowserSync aktualisiert die Seiten

Ich musste auch noch einige  Plugins in Sublime installieren, damit dort das Arbeiten mit Jade, Stylus und MD gut funktioniert. Außerdem natürlich noch ein neues Theme, Deutsche Rechtschreibprüfung, Git Plugin usw.

# Sprint 2
Bisher liegen alle Dateien in einem Verzeichnis. Das wird dann mit der Zeit bestimmt unübersichtlich.
Ich will versuchen, dass es eine Trennung gibt, zwischen dem "System (also HARP)" und meinen Blogeinträgen.

Ich hab da die Idee, das mit Github-Pages zu machen.
Da gibts ein Plugin für Gulp:
https://github.com/rowoot/gulp-gh-pages
Vielleicht geht's damit, aber ich befürchte, daß das hauptsächlich nur für "Github Projektseiten" gemacht ist und nicht für "Github Personenseiten".

## Linkliste mit Artikeln zum Thema
* http://charliegleason.com/articles/deploying-to-github-pages-with-gulp
* http://www.michael-whelan.net/deploying-sandra-snow-to-github-pages-with-gulp/

## Erfolg mit Sprint 2
Es hat funktioniert.
Ich habe nun einen Branch "develop", auf welchem das ganze System läuft.
Jetzt gibt es einen Gulp Task "compile" und den Gulp Task "deploy".
Der Task 'compile'

# Ablage

## Ablage für Ideen und Anmerkungen
  * https://github.com/superhighfives/
  * http://www.snip2code.com/Snippet/127269/Gulp-Harp-BrowserSync
  * http://harpjs.com/docs/deployment/github-pages
  * http://www.michael-whelan.net/deploying-sandra-snow-to-github-pages-with-gulp/
  * http://charliegleason.com/articles/deploying-to-github-pages-with-gulp
  * http://charliegleason.com/articles/harp-gulp-and-browsersync