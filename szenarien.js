// Übungs-Anrufe für den Schockanruf-Trainer. Läuft im Browser
// (window.SZENARIEN) und in Node (Test).
// Die Regeln in den Erklärungen stammen von der Polizeilichen
// Kriminalprävention (polizei-beratung.de) und der Bayerischen Polizei.
// Jeder Schritt hat genau eine gute Antwort.
(function (root) {
  const SZENARIEN = [
    {
      id: 'schockanruf',
      titel: 'Der Unfall',
      masche: 'Schockanruf',
      schritte: [
        {
          anrufer: 'Eine weinende Stimme: „Mama? Ich bin es. Es ist etwas Schreckliches passiert. Ich hatte einen Unfall, eine Frau ist schwer verletzt. Ich gebe dich an den Polizisten weiter.“',
          antworten: [
            { text: '„Um Himmels willen, Anna, bist du verletzt?“', gut: false, erklaerung: 'Sie haben selbst einen Namen genannt. Den benutzen die Täter ab jetzt. Schluchzen dient dazu, dass Sie die fremde Stimme nicht erkennen.' },
            { text: 'Auflegen und das eigene Kind unter der bekannten Nummer anrufen.', gut: true, erklaerung: 'Richtig. Ein Anruf bei der echten Nummer klärt in einer Minute, ob etwas passiert ist. Auflegen ist nicht unhöflich.' },
            { text: 'Dranbleiben und abwarten, was der Polizist sagt.', gut: false, erklaerung: 'Je länger Sie zuhören, desto stärker wird der Druck. Genau darauf ist das Gespräch angelegt.' },
          ],
        },
        {
          anrufer: 'Eine ruhige Männerstimme: „Kriminalpolizei. Ihre Tochter hat einen tödlichen Unfall verursacht. Sie kommt in Haft, außer es wird heute eine Kaution von 30.000 Euro hinterlegt. Wie viel Bargeld haben Sie zu Hause?“',
          antworten: [
            { text: '„Ich habe etwa 8.000 Euro hier und noch Schmuck.“', gut: false, erklaerung: 'Verraten Sie nie, was Sie an Geld oder Wertsachen besitzen. Die Polizei fragt das nicht am Telefon.' },
            { text: '„Ich gehe zur Bank. Wo soll ich das Geld hinbringen?“', gut: false, erklaerung: 'In Deutschland kauft man niemanden mit einer Kaution am Telefon frei. Die Polizei verlangt niemals Geld.' },
            { text: 'Auflegen. Danach selbst die 110 wählen und den Anruf melden.', gut: true, erklaerung: 'Richtig. Echte Polizisten fordern am Telefon nie Geld oder Wertsachen. Melden Sie den Anruf, auch wenn nichts passiert ist.' },
          ],
        },
      ],
      merksatz: 'Drama am Telefon und Geld gefordert: sofort auflegen und selbst zurückrufen.',
    },
    {
      id: 'falscher-polizist',
      titel: 'Die 110 im Display',
      masche: 'Falscher Polizeibeamter',
      schritte: [
        {
          anrufer: 'Im Display steht 110. „Polizei, Hauptkommissar Berger. Wir haben in Ihrer Straße Einbrecher festgenommen. Auf deren Liste steht Ihre Adresse. Haben Sie Bargeld oder Schmuck im Haus?“',
          antworten: [
            { text: '„Die Nummer stimmt ja, also: ja, im Schlafzimmer.“', gut: false, erklaerung: 'Die Nummer im Display lässt sich fälschen. Die Polizei ruft niemals unter der 110 an. Das tun nur Betrüger.' },
            { text: 'Auflegen. Dann den Hörer neu abnehmen und selbst 110 wählen.', gut: true, erklaerung: 'Richtig. Wählen Sie selbst und benutzen Sie nicht die Rückruftaste, sonst landen Sie wieder bei den Tätern.' },
            { text: 'Die Rückruftaste drücken, um zu prüfen, ob es die Polizei ist.', gut: false, erklaerung: 'Die Rückruftaste verbindet Sie mit dem Anrufer von eben, also mit den Betrügern. Wählen Sie die 110 selbst.' },
          ],
        },
        {
          anrufer: '„Zu Ihrer Sicherheit holt gleich ein Kollege in Zivil Ihre Wertsachen ab und verwahrt sie auf der Wache. Legen Sie alles in eine Tüte vor die Haustür. Und sprechen Sie mit niemandem darüber, die Ermittlungen sind geheim.“',
          antworten: [
            { text: 'Die Tüte packen. Sicher ist sicher.', gut: false, erklaerung: 'Die Polizei holt niemals Geld oder Wertsachen ab, um sie zu verwahren. Was Sie vor die Tür legen, ist weg.' },
            { text: 'Niemandem etwas sagen und auf den Kollegen warten.', gut: false, erklaerung: 'Das Schweigegebot soll verhindern, dass jemand Sie warnt. Wer Ihnen verbietet, mit anderen zu reden, ist ein Betrüger.' },
            { text: 'Auflegen, nichts herausgeben und mit jemandem aus der Familie oder Nachbarschaft sprechen.', gut: true, erklaerung: 'Richtig. Übergeben Sie nie Geld oder Wertsachen an Unbekannte, auch nicht an angebliche Polizisten.' },
          ],
        },
      ],
      merksatz: 'Die Polizei ruft nie unter 110 an und holt nie Wertsachen ab.',
    },
    {
      id: 'enkeltrick',
      titel: 'Rate mal, wer dran ist',
      masche: 'Enkeltrick',
      schritte: [
        {
          anrufer: '„Hallo Oma! Na, rate mal, wer hier ist. Erkennst du mich etwa nicht?“',
          antworten: [
            { text: '„Bist du das, Jonas?“', gut: false, erklaerung: 'Jetzt kennt der Anrufer einen Namen und spielt ab sofort Jonas. Raten Sie nie.' },
            { text: '„Sagen Sie mir bitte Ihren Namen.“', gut: true, erklaerung: 'Richtig. Lassen Sie den Anrufer seinen Namen selbst nennen. Wer ausweicht, ist verdächtig.' },
            { text: '„Deine Stimme klingt aber anders.“', gut: false, erklaerung: 'Darauf folgt die Ausrede „Ich bin erkältet“. Besser: den Namen verlangen oder gleich auflegen.' },
          ],
        },
        {
          anrufer: '„Ich sitze gerade beim Notar. Ich kann eine Wohnung kaufen, aber mir fehlen 20.000 Euro bis morgen. Kannst du mir das leihen? Ich kann nicht selbst kommen, ein Bekannter holt das Geld gleich bei dir ab.“',
          antworten: [
            { text: 'Das Geld bereitlegen, es ist ja für die Familie.', gut: false, erklaerung: 'Der Abholer ist ein Komplize. Übergeben Sie nie Geld an jemanden, den Sie nicht kennen.' },
            { text: 'Auflegen und den Enkel unter der Nummer anrufen, die Sie schon lange haben.', gut: true, erklaerung: 'Richtig. Ein Rückruf unter der bekannten Nummer deckt den Trick sofort auf.' },
            { text: 'Nach der neuen Handynummer fragen und dort zurückrufen.', gut: false, erklaerung: 'Eine Nummer, die der Anrufer Ihnen gibt, führt wieder zu ihm. Nehmen Sie nur die Nummer aus Ihrem eigenen Telefonbuch.' },
          ],
        },
      ],
      merksatz: 'Nicht raten. Namen nennen lassen und unter der bekannten Nummer zurückrufen.',
    },
    {
      id: 'ki-stimme',
      titel: 'Die vertraute Stimme',
      masche: 'Nachgeahmte Stimme',
      schritte: [
        {
          anrufer: 'Die Stimme klingt genau wie Ihre Enkelin: „Opa, ich bin es, Lena. Mein Handy ist kaputt, ich rufe von einem anderen an. Ich stecke in Schwierigkeiten und brauche heute noch 3.000 Euro. Bitte sag Mama nichts.“',
          antworten: [
            { text: '„Natürlich, Kind. Wohin soll ich es überweisen?“', gut: false, erklaerung: 'Stimmen lassen sich heute mit Computerprogrammen nachmachen. Eine vertraute Stimme ist kein Beweis mehr.' },
            { text: '„Wie lautet unser Familien-Kennwort?“', gut: true, erklaerung: 'Richtig. Ein geheimes Kennwort kennt nur die echte Familie. Die Polizei empfiehlt es gerade wegen nachgemachter Stimmen.' },
            { text: '„Du klingst wirklich wie Lena, dann wird es stimmen.“', gut: false, erklaerung: 'Genau darauf setzen die Täter. Prüfen Sie mit dem Kennwort oder mit einem Rückruf unter der bekannten Nummer.' },
          ],
        },
        {
          anrufer: '„Opa, dafür ist jetzt keine Zeit! Ich weiß das Kennwort gerade nicht, ich bin so durcheinander. Bitte, es ist dringend!“',
          antworten: [
            { text: 'Nachgeben, sie ist ja ganz aufgelöst.', gut: false, erklaerung: 'Zeitdruck ist das wichtigste Werkzeug der Betrüger. Wer das Kennwort nicht weiß, bekommt kein Geld.' },
            { text: 'Eine Frage stellen, die nur Lena beantworten kann, und dann überweisen.', gut: false, erklaerung: 'Vieles über Ihre Familie steht im Internet. Verlassen Sie sich auf das Kennwort und den Rückruf, nicht auf Quizfragen.' },
            { text: 'Auflegen und Lena oder ihre Mutter unter der bekannten Nummer anrufen.', gut: true, erklaerung: 'Richtig. Ist wirklich etwas passiert, erfahren Sie es so auch. Und „Sag Mama nichts“ ist immer ein Warnzeichen.' },
          ],
        },
      ],
      merksatz: 'Eine Stimme beweist nichts mehr. Kennwort fragen oder zurückrufen.',
    },
  ];

  if (typeof module !== 'undefined' && module.exports) module.exports = SZENARIEN;
  else root.SZENARIEN = SZENARIEN;
})(typeof window !== 'undefined' ? window : globalThis);
