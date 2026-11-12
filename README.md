# Schockanruf-Trainer

Üben, was man tut, wenn Betrüger anrufen. Eine einzelne Webseite für ältere
Menschen und ihre Familien, ohne Anmeldung, ohne Server, ohne Werbung.

Schockanrufe, falsche Polizisten und der Enkeltrick funktionieren, weil die
Angerufenen überrumpelt werden. Info-Blätter helfen wenig, wenn das Telefon
klingelt und jemand weint. Wer die Situation einmal in Ruhe durchgespielt hat,
legt eher auf.

## Was die Seite kann

- **Vier Übungs-Anrufe:** der Unfall (Schockanruf), die 110 im Display
  (falscher Polizist), „Rate mal, wer dran ist“ (Enkeltrick) und die vertraute
  Stimme (mit dem Computer nachgemacht). Man wählt eine Reaktion und liest,
  warum sie gut oder gefährlich war.
- **Vorlesen:** Der Text des Anrufers lässt sich vom Browser vorlesen.
- **Sieben Regeln** zum Merken.
- **Karte fürs Telefon:** Namen und Nummern zum Zurückrufen eintragen,
  ausdrucken, neben das Telefon legen.

Nichts, was man eintippt, wird gespeichert oder verschickt.

## Benutzen

Dieses Projekt herunterladen (grüner Knopf „Code“, dann „Download ZIP“),
entpacken und `index.html` im Browser öffnen. Mehr ist nicht nötig. Die Seite
funktioniert ohne Internet.

Am besten gemeinsam: Enkel oder Kinder setzen sich mit den Großeltern hin,
spielen die Anrufe durch und vereinbaren danach ein Familien-Kennwort.

## Woher die Inhalte stammen

Die Regeln folgen den Ratschlägen der Polizei:

- [Polizeiliche Kriminalprävention: Schockanrufe](https://www.polizei-beratung.de/aktuelles/detailansicht/schockanrufe-panikmache-am-telefon-legen-sie-sofort-auf/)
- [Polizeiliche Kriminalprävention: Enkeltrick](https://www.polizei-beratung.de/themen-und-tipps/betrug/enkeltrick/)
- [Polizeiliche Kriminalprävention: Falsche Polizisten](https://www.polizei-beratung.de/themen-und-tipps/betrug/betrug-durch-falsche-polizisten/)
- [Bayerische Polizei: Telefonbetrug und Familien-Kennwort](https://www.polizei.bayern.de/schuetzen-und-vorbeugen/senioren/034562/index.html)

Die Gespräche sind erfunden und diesen Beschreibungen nachempfunden. Das ist
ein privates Projekt und kein Angebot der Polizei. Ob Üben am Bildschirm
Betrug wirklich verhindert, ist nicht untersucht.

Wer gerade einen verdächtigen Anruf bekommen hat: auflegen und selbst die 110
wählen.

## Mitmachen

Neue Übungs-Anrufe stehen in [`szenarien.js`](szenarien.js) und sind schnell
ergänzt. Jeder Schritt braucht genau eine gute Antwort und zu jeder Antwort
eine Erklärung. Der Test prüft das:

```bash
node --test
```

Korrekturen von Menschen aus Polizei, Seniorenarbeit oder Verbraucherschutz
sind besonders willkommen.

## Lizenz

MIT
