# Hier entsteht ein Blog

## Vorwort
Es ist zwar nicht das erste Mal, dass dokumentiert wird, wie ein Blog entsteht, aber für mich ist es ein Anfang.
Ich sehe diese Seiten nicht als "lesenswerte Artikel", sondern eher als ausführliche Commitmessages.

## Ziele
Ich versuche hier im Blog meine Interessen rund um das Thema Webdevelopment zu sammeln und zu bündeln.
Alles was dazu gehört. Von Console Tools bis zu Editor Erweiterungen, von .htaccess bis SVG-Sprites.

## Erwartungesn
* Der Blog soll statisch sein. Als nicht in PHP oder node.js.
* Resposive Web Design
* Gulp als Taskrunner
* Jade für HTML und Logik
* Markdown (CommonMark) zu schreiben
* Stylus für CSS
* Browserify für JS (evtl. mit npm, component)
* GIT als Versionierungssystem
* GIT als Workflow (Branches für "Artikel")


# Sprint 1 - System Start
Folgende Ideen will und werde ich hoffentlich im ersten "Sprint" umsetzen:
* Statisches System (kompilieren von Jade, MD, Stylus)
* Gulp Basis Workflows
* Workflow mit Github (Deploy with a push)

## Link mit Artikel zum Thema
  * https://github.com/superhighfives/
  * http://www.snip2code.com/Snippet/127269/Gulp-Harp-BrowserSync
  * http://harpjs.com/docs/deployment/github-pages
  * http://www.michael-whelan.net/deploying-sandra-snow-to-github-pages-with-gulp/
  * http://charliegleason.com/articles/deploying-to-github-pages-with-gulp
  * http://charliegleason.com/articles/harp-gulp-and-browsersync

## Was bisher geschah

Es hat ganz gut funktioniert.
* Harp macht die Arbeit
* Harp hat einen lokalen Server
* Alles ins GULP eingebunden
* Gulp überwacht alle Dateien und BrowserSync aktualisiert die Seiten

Ich musste auch noch einige  Plugins in Sublime installieren, damit dort das Arbeiten mit Jade, Stylus und MD gut funktioniert. Außerdem natürlich noch ein neues Theme, Deutsche Rechtschreibprüfung, Git Plugin usw.

# Sprint 2 -- Trennung von Eingabe und statischen Seiten
Bisher liegen alle Dateien in einem Verzeichnis. Das wird dann mit der Zeit bestimmt unübersichtlich.
Ich will versuchen, dass es eine Trennung gibt, zwischen dem "System (also HARP)" und meinen Blogeinträgen.

Ich hab da die Idee, das mit Github-Pages zu machen.
Da gibts ein Plugin für Gulp:
https://github.com/rowoot/gulp-gh-pages
Vielleicht geht's damit, aber ich befürchte, daß das hauptsächlich nur für "Github Projektseiten" gemacht ist und nicht für "Github Personenseiten".

## Linkliste mit Artikel zum Thema
* http://charliegleason.com/articles/deploying-to-github-pages-with-gulp
* http://www.michael-whelan.net/deploying-sandra-snow-to-github-pages-with-gulp/
* http://cameronspear.com/blog/handling-sync-tasks-with-gulp-js/

## Erfolg mit Sprint 2
Es hat funktioniert.
Ich habe nun einen Branch "develop", auf welchem das ganze System läuft.
Jetzt gibt es einen Gulp Task "compile" und den Gulp Task "deploy".
Der Task "compile" baut alle statischen Seiten in das Verzeichnis "public".
Der Task "deploy" schiebt das Verzeichnis "public" via https://github.com/rowoot/gulp-gh-pages in den Masterbrach, welcher dann auf Github gepostet wird

# Sprint 3 -- Struktur für den Blog
Die Idee, die ich hab ist folgende:
* Jade macht den "Rahmen" für den Blog. Also Header , Footer  und dynamisch Listen
* Die Blogartikel liegen in einem eigenen Ordner (posts?) und sind dort entweder nummeriert, oder nach Datum benannt
* Die Blogartikel werden in reinem Markdown geschrieben, Metadaten usw. werden separat gespeichert

## Linkliste mit Artikel zum Thema
* http://harpjs.com/recipes/custom-title-description
* http://harpjs.com/recipes/blog-posts-list
* https://github.com/rosshj/baseline/blob/master/_layout.jade


