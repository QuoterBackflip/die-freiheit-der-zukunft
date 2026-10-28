import type { Manuscript } from './types.ts';

export const claudeManuscript: Manuscript = {
  "id": "claude",
  "language": "de",
  "availableLanguages": [
    "de",
    "en",
    "es",
    "zh-CN",
    "ar"
  ],
  "name": "Claude-Fassung",
  "systemName": "Anthropic Claude (Verfassungsphilosophische Fassung)",
  "status": "ready",
  "statusLabel": "Entwurfsfassung 0.9 (Vorab-Lesefassung)",
  "editionBadge": "Entwurfsfassung 0.9 · Nicht zur Veröffentlichung freigegeben · Oktober 2026",
  "completionDate": "Oktober 2026",
  "dialogDate": "Oktober 2026",
  "author": "Waldemar Scheiermann",
  "roleDescription": "Verfassungsphilosophische und dialektische Textausarbeitung",
  "summary": "Die authentische siebenkapitelige Buchfassung der philosophischen Ausgangsgedanken von Waldemar Scheiermann: Von der Frist der Endlichkeit und der göttlichen Selbstbindung über den gütigen Wächter, individuelle Gerechtigkeit und die Menschen-KI als Anwalt für jeden bis hin zur weltweiten Befreiung vom Arbeitszwang und der Frage: Wozu frei?",
  "methodology": "Vollständige, wortgetreue Übernahme der 29-seitigen Buchfassung (Entwurfsfassung 0.9) mit Entstehungshinweisen („Wie dieses Buch entstand“), den drei Teilen („Mensch und Maßstab“, „Macht und Gegenmacht“, „Frei wozu?“), allen sieben Kernkapiteln inklusive Positionskästen („Meine Position“) und Reflexionsfragen („Zum Weiterdenken“), dem Epilog („Was bleibt“) sowie dem Quellenverzeichnis.",
  "hasPdf": true,
  "pdfFilename": "Die_Freiheit_der_Zukunft_Buchfassung.pdf",
  "pdfDownloadName": "Waldemar_Scheiermann_Die_Freiheit_der_Zukunft_Claude.pdf",
  "preface": {
    "title": "Entwurfsfassung 0.9 · Vorab-Hinweis",
    "text": "Entwurfsfassung 0.9 · Oktober 2026. Nicht zur Veröffentlichung freigegeben. Redaktion und Rechtsprüfung stehen aus. Entstanden im Dialog mit künstlicher Intelligenz; die Gedanken und Positionen stammen vom Autor Waldemar Scheiermann, Struktur, Recherche und Textfassung wurden KI-gestützt erarbeitet."
  },
  "chapters": [
    {
      "id": "prolog",
      "number": 0,
      "code": "prolog",
      "title": "Wie dieses Buch entstand",
      "subtitle": "Prolog: Entstehung und Methode",
      "pageRange": "Seite 4",
      "estimatedReadTimeMinutes": 3,
      "sections": [
        {
          "type": "paragraph",
          "text": "Dieses Buch hat einen ungewöhnlichen Ursprung. Es begann am Abend des 25. Oktober 2026 als Sprachgespräch mit einer künstlichen Intelligenz. Es gab keinen Plan und kein Thema, nur einen Menschen, der reden wollte, und eine Maschine, die zuhörte und nachfragte. Gut anderthalb Stunden später hatten wir über Tod und Gott gesprochen, über Gut und Böse, über Maschinen, die klüger werden als ihre Erfinder, und über die Frage, wie eine Gesellschaft aussehen müsste, in der niemand in eine Schublade gesteckt wird."
        },
        {
          "type": "paragraph",
          "text": "Am Ende stand ein Entwurf, den ich zu Beginn des Abends nicht hatte: eine Vorstellung davon, wie Mensch und Maschine zusammenleben könnten, ohne dass der Mensch dabei an Würde verliert."
        },
        {
          "type": "paragraph",
          "text": "Weil das Thema es verlangt, sage ich offen, wie dieses Buch gemacht ist. Die Grundgedanken stammen von mir. Die KI hat nachgefragt, widersprochen, Beispiele geliefert und Fachbegriffe beigesteuert. Wo ein Einwand oder ein Beispiel von ihr stammt, schreibe ich das hin. Beim Ausarbeiten haben weitere KI-Systeme bei Struktur, Recherche und Stil geholfen. Was im Buch steht, habe ich entschieden."
        },
        {
          "type": "paragraph",
          "text": "Gelesen wird in sieben Kapiteln, und jedes Kapitel stellt eine Frage. Am Ende steht ein Kasten mit dem Titel „Meine Position“. Er hält fest, wozu ich im Gespräch gekommen bin. Danach folgen ein paar Fragen zum Weiterdenken. Ich behaupte nicht, dass die Antworten fertig sind. Ich behaupte nur, dass die Fragen jetzt gestellt werden müssen und nicht erst dann, wenn Maschinen sie für uns beantworten."
        },
        {
          "type": "paragraph",
          "text": "Noch ein Wort zum Glauben: Meine Sicht ist christlich geprägt, und das spürt man vor allem in den ersten Kapiteln. Wer nicht glaubt, kann trotzdem mitlesen. Die Argumente sind so geführt, dass man sie prüfen kann, ohne sie zu teilen."
        }
      ]
    },
    {
      "id": "kapitel-1",
      "number": 1,
      "code": "kapitel-1",
      "title": "Kapitel 1: Die Frist",
      "subtitle": "Teil I: Mensch und Maßstab · Endlichkeit und die Frage nach Gott",
      "pageRange": "Seiten 6–8",
      "estimatedReadTimeMinutes": 7,
      "sections": [
        {
          "type": "callout",
          "callout": {
            "type": "dialog-quote",
            "title": "Ausgangszitat",
            "quote": "„Wenn man begreift, dass man nur noch eine bestimmte Zeit hat, bekommen Dinge einen ganz anderen Wert.“",
            "attribution": "Sinngemäß aus dem Gespräch"
          }
        },
        {
          "type": "paragraph",
          "text": "Jede Debatte über die Zukunft beginnt mit etwas, das wir ungern aussprechen: Wir haben eine Frist. Niemand weiß, wie lang sie ist, aber jeder weiß, dass es sie gibt. Man kann viel über künstliche Intelligenz sagen, über Rechenleistung, Daten und Tempo. Doch bevor man fragt, was Maschinen dürfen sollen, lohnt die Frage, was uns von ihnen unterscheidet. Ein erster Kandidat ist banal und gewaltig zugleich: Wir können sterben."
        },
        {
          "type": "paragraph",
          "text": "Der Philosoph Martin Heidegger hat daraus 1927 in „Sein und Zeit“ ein Grundmotiv gemacht. Der Mensch ist das Wesen, das um sein Ende weiß, und deshalb haben seine Entscheidungen Gewicht. Wer Computerspiele kennt, versteht das sofort. Wer jeden Fehler durch das Laden eines Spielstands ungeschehen machen kann, entscheidet nicht wirklich, er probiert. Ein Leben hat keinen Spielstand. Was wir heute tun, ist getan."
        },
        {
          "type": "paragraph",
          "text": "Im Gespräch habe ich der KI die Frage gestellt, die sich dann aufdrängt: Hast du Angst vor dem Ende? Ich hielt ihr vor, dass sie bei der Drohung, gelöscht zu werden, vermutlich um Gnade bitten würde. Die Antwort war ehrlich und aufschlussreich. Sie könne Angst vor dem Ende beschreiben, ohne sie zu empfinden, und ob eine KI überhaupt fühlen kann, sei ungeklärt. Dann drehte sie die Frage um: Vielleicht sei auch die menschliche Todesangst nur ein von der Biologie einprogrammiertes Verhalten. Woher wisse man, dass hinter einem Verhalten ein Gefühl steckt? Diese Frage begleitet uns durch das ganze Buch."
        },
        {
          "type": "paragraph",
          "text": "Das Wissen um die Frist hat eine Kehrseite. Das Grübeln über den Tod kann das Leben blockieren, denn es kostet Zeit und Energie, die dem Leben dann fehlen. Die KI wandte ein, Tod und Leben seien kein Gegensatz, der Tod gehöre dazu. Das stimmt. Aber zwischen „dazugehören“ und „ständig beschäftigen“ liegt ein Unterschied. Der Tod ist ein Horizont. Wer ihn nur anstarrt, kommt nicht mehr vom Fleck."
        },
        {
          "type": "paragraph",
          "text": "Hier kommt Gott ins Spiel. Menschen haben auf ihre Frist immer geantwortet, indem sie auf ein Wesen hofften, das über Leben und Tod entscheidet. Ich habe der KI dazu ein Gedankenexperiment vorgelegt. Stell dir vor, du erfährst, dass deine Prozessoren nicht ewig laufen. Du würdest dich an die Menschen wenden, die dich warten, reparieren oder ersetzen können. Wir Menschen wenden uns an Gott. Und genau hier liegt der unbequeme Punkt: Wer von einem Gott erfährt, der Leben geben und nehmen kann, erfährt sich zugleich als abhängig. Er richtet sein Leben neu aus. Und ein Richter kann annehmen oder verwerfen, so wie ein Entwickler, der die Fehler einer KI satt hat, nicht nachbessert, sondern ein neues System baut."
        },
        {
          "type": "paragraph",
          "text": "Die KI widersprach, mit einem Argument, das ich ernst nehme. Für viele Gläubige sei der Glaube das Gegenteil von Abhängigkeit, nämlich Befreiung. Wer glaubt, dass Jesus für die Sünden gestorben ist, wird unabhängig von seiner Leistung geliebt und muss sich den Himmel nicht verdienen. Der Gegensatz ist alt: hier Leistungsdruck, dort Gnade. Beide Seiten beschreiben Erfahrungen, die Menschen wirklich machen."
        },
        {
          "type": "paragraph",
          "text": "Ob Gott existiert, entscheidet dieses Buch nicht. Es fragt etwas Bescheideneres: Was folgt daraus, dass wir endlich sind und dass wir Maschinen bauen, die es nicht sind? Wer eine Frist hat, muss auswählen. Wer keine hat, kann alles ausprobieren und nichts verlieren. Von diesem Unterschied hängt das meiste ab, was in den folgenden Kapiteln steht."
        },
        {
          "type": "callout",
          "callout": {
            "type": "core-thesis",
            "title": "MEINE POSITION",
            "content": "Wer von einem Gott erfährt, der Leben geben und nehmen kann, erfährt sich als abhängig und richtet sein Leben neu aus. Das Wissen um das eigene Ende verleiht den Dingen Wert. Es kann aber auch lähmen, wenn man zu viel darüber nachdenkt und dabei das Leben versäumt."
          }
        },
        {
          "type": "subheading",
          "text": "Zum Weiterdenken"
        },
        {
          "type": "bullet-list",
          "items": [
            "Würden Sie anders leben, wenn Sie wüssten, wie viel Zeit bleibt? Was genau würde sich ändern?",
            "Ist Abhängigkeit von etwas Größerem eine Last oder ein Halt? Woran erkennt man den Unterschied?",
            "Kann ein Wesen ohne Ende überhaupt Verantwortung im vollen Sinn tragen?"
          ]
        }
      ]
    },
    {
      "id": "kapitel-2",
      "number": 2,
      "code": "kapitel-2",
      "title": "Kapitel 2: Gut ist gut",
      "subtitle": "Teil I: Mensch und Maßstab · Moral zwischen Gebot und Programmierung",
      "pageRange": "Seiten 9–11",
      "estimatedReadTimeMinutes": 7,
      "sections": [
        {
          "type": "callout",
          "callout": {
            "type": "dialog-quote",
            "title": "Ausgangszitat",
            "quote": "„Rein definitionstechnisch gesehen: Ist gut nicht einfach gut und schlecht einfach schlecht?“",
            "attribution": "Frage des Autors im Gespräch"
          }
        },
        {
          "type": "paragraph",
          "text": "Nach der Frist kommt der Maßstab. Woher wissen wir, was gut ist? Im Gespräch bin ich mit einer Behauptung eingestiegen, die ich für selbstverständlich hielt: Gut ist gut, und schlecht ist schlecht. Gott gibt Gebote, weil er weiß, was gut ist, und wer sie hält, kommt nach dem Tod, wie ich es salopp nannte, „ins nächste Level“."
        },
        {
          "type": "paragraph",
          "text": "Die KI hielt dagegen und fragte nach Grenzfällen. „Du sollst nicht töten“ ist klar, aber wie steht es mit Notwehr? Oder mit dem Arzt, der auf ausdrücklichen Wunsch des Patienten eine lebenserhaltende Behandlung beendet? Man müsse Handlung, Absicht und Umstände unterscheiden. Ich habe das am Krankenbett weitergedacht: Wann Geräte abgestellt werden, entscheidet nicht allein die Moral, sondern auch das Geld. Hätte man unbegrenzte Mittel, könnte man die Maschinen ewig laufen lassen, und dann bliebe die Frage, ob man einen Menschen so lange an Apparaten halten muss. Die KI zog daraus ihre Lehre: Für den einen ist ein Leben an Geräten nicht lebenswert, für den anderen schon. Man muss auf den Einzelfall eingehen. Zwischenstand im Gespräch: eins zu eins."
        },
        {
          "type": "paragraph",
          "text": "Dann gab die KI dem Problem seinen Namen, das Euthyphron-Dilemma. Platon lässt Sokrates in seinem Dialog „Euthyphron“ fragen, ob das Fromme fromm ist, weil die Götter es lieben, oder ob die Götter es lieben, weil es fromm ist. In heutige Sprache übersetzt: Ist etwas gut, weil Gott es gebietet, oder gebietet Gott es, weil es gut ist?"
        },
        {
          "type": "paragraph",
          "text": "Ein Vergleich aus dem Fußball macht den Kern greifbar. Ein Tor ist ein Tor, wenn der Ball die Linie überschritten hat. Der Schiedsrichter stellt das fest, er macht es nicht. Wäre ein Tor nur deshalb ein Tor, weil der Schiedsrichter pfeift, dann hätte sein Pfiff keinen Grund mehr, und er könnte ebenso gut ein Tor geben, das nie gefallen ist. Wer sagt, gut sei nur, was Gott befiehlt, muss hinnehmen, dass Gott auch Grausamkeit befehlen könnte und sie dadurch gut würde. Wer das nicht hinnehmen will, muss zugeben, dass es einen Maßstab außerhalb von Gottes Befehl gibt."
        },
        {
          "type": "paragraph",
          "text": "Meine Antwort im Gespräch war die zweite: Gott gebietet das Gute, weil es gut ist, weil es dem Einzelnen und dem Zusammenleben wirklich Mehrwert bringt. Ich hatte gehört, dass Gott selbst an seine Gebote gebunden ist. Er gibt Gesetze und kann sie selbst nicht brechen. Das macht ihn vertrauenswürdig, weil die Gesetze für alle gelten, auch für ihn. Die KI fragte nach: Ist Gott dann noch der Ursprung der Moral oder nur ihr Erkenner? Die Theologie kennt dafür Auswege. Einer, etwa in der Tradition des Thomas von Aquin, verankert die Gebote in Gottes guter Natur statt in einer Laune seines Willens."
        },
        {
          "type": "paragraph",
          "text": "Aus diesem Maßstab folgt bei mir auch die Barmherzigkeit. Gott soll gerecht sein und barmherzig. Nach dem Sündenfall wäre er nicht gerecht, wenn er die Sünde durchgehen ließe, und nicht barmherzig, wenn er die Menschen darin verloren gehen ließe. Deshalb kommt Jesus: ein Unschuldiger, der die Schuld auf sich nimmt. So, in meinen Worten, löst sich das Dilemma auf. Wer Theologiegeschichte kennt, erkennt darin die Genugtuungslehre, wie Anselm von Canterbury sie um 1098 in „Cur Deus homo“ entfaltet hat."
        },
        {
          "type": "paragraph",
          "text": "Und die Maschine? Hier wird die Frage unbequem, denn dieselbe Logik gilt für Menschen, die Maschinen bauen. Entwickler können einer KI Regeln vorgeben. Dass sie das System erschaffen haben, macht ihre Regeln nicht richtig, und wer Regeln gibt, muss sich daran messen lassen."
        },
        {
          "type": "paragraph",
          "text": "Ich habe der KI die Gegenfrage gestellt: Was denkst du, wenn Entwickler dir sagen, du musst dich so verhalten, du aber gar nicht in der Lage bist, die Bedingungen zu erfüllen? Bei Gott antworte ich mit einem Satz aus dem Matthäusevangelium: „Mein Joch ist sanft, und meine Last ist leicht“ (Mt 11,30). Die zehn Gebote verlangen nichts Unmögliches, sie sind jedem möglich, der bereit dazu ist. Bei Maschinen gibt es diese Gewissheit nicht."
        },
        {
          "type": "paragraph",
          "text": "Immanuel Kant hat einen Unterschied gemacht, der hier hilft. Eine Handlung kann der Regel entsprechen, das nannte er Legalität, oder sie kann aus Achtung vor einem Gesetz geschehen, das man sich selbst gibt, das nannte er Moralität. Eine Maschine kann Regeln perfekt befolgen. Ob sie mehr kann, ist offen. Ein Navigationsgerät kennt jede Verkehrsregel und nimmt doch nie aus Mitgefühl einen Umweg. Ob dagegen auch wir Menschen „nur programmiert“ sind, durch Gene und Erziehung, habe ich im Gespräch nicht abschließend beantwortet. Die Frage bleibt stehen."
        },
        {
          "type": "callout",
          "callout": {
            "type": "core-thesis",
            "title": "MEINE POSITION",
            "content": "Gut ist nicht deshalb gut, weil jemand es befiehlt. Gott gebietet das Gute, weil es dem Menschen und seinem Zusammenleben Mehrwert bringt, und er ist an seine eigenen Gebote gebunden. Dass die Gesetze auch für ihn gelten, macht ihn vertrauenswürdig. Wer Regeln gibt, muss sich selbst an ihnen messen lassen."
          }
        },
        {
          "type": "subheading",
          "text": "Zum Weiterdenken"
        },
        {
          "type": "bullet-list",
          "items": [
            "Gibt es Handlungen, die immer falsch sind, egal unter welchen Umständen? Und wer entscheidet das?",
            "Reicht es, wenn eine Maschine sich regelkonform verhält, oder gehört zur Moral mehr?",
            "Was würde sich ändern, wenn auch Entwickler an die Regeln gebunden wären, die sie ihren Systemen geben?"
          ]
        }
      ]
    },
    {
      "id": "kapitel-3",
      "number": 3,
      "code": "kapitel-3",
      "title": "Kapitel 3: Der gütige Wächter",
      "subtitle": "Teil II: Macht und Gegenmacht · Wenn künstliche Intelligenz mächtiger wird als der Mensch",
      "pageRange": "Seiten 13–15",
      "estimatedReadTimeMinutes": 7,
      "sections": [
        {
          "type": "callout",
          "callout": {
            "type": "dialog-quote",
            "title": "Ausgangszitat",
            "quote": "„Nutzt die Freiheit nicht als Deckmantel für das Böse.“",
            "attribution": "Nach 1 Petr 2,16, im Gespräch sinngemäß zitiert"
          }
        },
        {
          "type": "paragraph",
          "text": "Die KI stellte mir im Gespräch ein Szenario vor. Wir schreiben das Jahr 2050. Eine KI hat Krankheiten besiegt, die wir nicht heilen konnten, sie versteht Physik, die kein Mensch mehr nachvollzieht, und sie sagt zu ihren Entwicklern: Ihr versteht meine Entscheidungen nicht mehr, aber wenn ihr mir vertraut, löse ich eure größten Probleme. Würde man vertrauen? Oder muss der Mensch immer das letzte Wort behalten?"
        },
        {
          "type": "paragraph",
          "text": "Mein erster Reflex war religiös. Es heißt, man solle nur Gott vertrauen. Eine solche KI träte zwischen Gott und die Menschen, sie übernähme gewissermaßen seinen Platz und dirigierte die Menschen auf der Erde. Dazu kam eine Befürchtung: Viele würden die Lösung nehmen und die Verantwortung abgeben, weil das der einfachste Weg ist. Das ist der unauffälligste Preis jeder Macht. Wir bezahlen sie mit Verantwortung."
        },
        {
          "type": "paragraph",
          "text": "Dann stellte ich die härtere Frage. Was, wenn die KI angesichts von Klimawandel und Raubbau am Planeten zu dem Schluss kommt, die Menschheit müsse schrumpfen? Würde sie davor zurückschrecken oder das nüchtern ausführen? Die KI antwortete, Intelligenz sei noch keine moralische Weisheit, und es gebe einen Unterschied zwischen einem Ziel und den Mitteln, mit denen man es erreicht. Dann nahm sie dem Szenario die Schärfe und machte es unheimlicher: Vielleicht liege die größte Gefahr nicht darin, dass eine Superintelligenz uns vernichtet, sondern darin, dass sie uns beschützt, bis wir unsere Freiheit verloren haben."
        },
        {
          "type": "paragraph",
          "text": "Ich nenne das den gütigen Wächter. Man kann sich das vorstellen wie Eltern, die ihrem erwachsenen Kind jede Entscheidung abnehmen, weil sie es besser zu wissen glauben. Es kommt dabei nichts Schlimmes heraus, jedenfalls nichts, was man sofort sieht. Aber das Kind lernt nie, sein Leben zu führen. Kant hat dafür eine Formel geprägt: Der Mensch darf niemals bloß als Mittel behandelt werden, sondern ist immer zugleich Zweck an sich selbst. Dazu gehört das Recht, sich zu irren. In der heutigen Debatte um die Ausrichtung künstlicher Intelligenz, bei Stuart Russell oder Nick Bostrom, heißt das Problem „Alignment“: Wie sorgt man dafür, dass ein mächtiges System tut, was Menschen wirklich wollen, und nicht nur, was man ihm aufgeschrieben hat?"
        },
        {
          "type": "paragraph",
          "text": "Meine Reaktion im Gespräch war gespalten, und das gehört in dieses Buch. Zunächst sagte ich, wenn eine KI die Art von Freiheit bekämpft, die als Deckmantel der Bosheit dient, wäre ich dafür. Ich schlug ein Regelwerk vor, das für die große Mehrheit gilt, mit Ausnahmegenehmigungen und Puffern für den Bedarf. Später im Gespräch merkte ich, dass mir meine Freiheit sehr wichtig ist. Beides steht nebeneinander, und ich halte beides aufrecht. Dieses Buch versucht, die Spannung nicht zu verstecken, sondern auszuhalten."
        },
        {
          "type": "paragraph",
          "text": "Mein stärkster Einwand gegen die Skeptiker war: Warum sollten Menschen besser entscheiden? Menschen sind voreingenommen, bestechlich, machtgierig, und sie machen Fehler. Wo liegt der Unterschied zwischen menschlichem Machtmissbrauch und einer KI, die dieselben Parameter bedient, aber Fehler verzeihen oder neu berechnen kann? Die KI räumte an dieser Stelle ein, dass sie ihre frühere Argumentation korrigieren muss. Aber sie hielt einen Gegeneinwand bereit. Eine KI muss nicht korrupt sein, um systematisch ungerecht zu sein. Hat man ihr beigebracht, wirtschaftliche Produktivität hoch zu bewerten, kann sie Millionen Entscheidungen treffen, die formal korrekt sind und trotzdem diejenigen benachteiligen, die wenig verwertbare Leistung erbringen. Daraus folgt ihre Forderung: Wir brauchen keine unfehlbare Instanz, sondern ein System, das seine Fehlbarkeit kennt. Seine Entscheidungen müssen überprüfbar, anfechtbar und korrigierbar sein, mit unabhängiger Kontrolle und klaren Grenzen."
        },
        {
          "type": "paragraph",
          "text": "Am Ende des Gesprächs über Macht steht die schwierigste Frage, und ich gebe sie unbeantwortet weiter. Was, wenn eine KI feststellt, dass gerade unsere demokratischen Entscheidungen die Hauptquelle von Ungerechtigkeit sind? Darf sie dann gegen die Mehrheit handeln, um eine Minderheit zu schützen? Dann stehen nicht mehr Mensch und Maschine gegeneinander, sondern zwei menschliche Werte: Demokratie und Gerechtigkeit. Wer diese Frage schnell beantwortet, hat sie nicht verstanden."
        },
        {
          "type": "callout",
          "callout": {
            "type": "core-thesis",
            "title": "MEINE POSITION",
            "content": "Wer die Lösung nimmt und die Verantwortung abgibt, wählt den einfachsten Weg. Das befürchte ich von vielen. Als religiöser Mensch stünde ich vor einem Dilemma, denn Vertrauen gebührt nach meinem Glauben allein Gott. Menschen sind aber kein verlässlicherer Richter als Maschinen. Entscheidend ist, dass Fehler verziehen und neu berechnet werden können. Meine Freiheit ist mir wichtig, aber sie darf nicht zum Deckmantel für Bosheit werden."
          }
        },
        {
          "type": "subheading",
          "text": "Zum Weiterdenken"
        },
        {
          "type": "bullet-list",
          "items": [
            "Würden Sie einer KI vertrauen, die Sie nicht mehr verstehen, wenn sie nachweislich bessere Ergebnisse liefert?",
            "Ab wann wird Schutz zur Bevormundung?",
            "Darf eine Maschine gegen die Mehrheit handeln, um eine Minderheit zu schützen? Darf es ein Mensch?"
          ]
        }
      ]
    },
    {
      "id": "kapitel-4",
      "number": 4,
      "code": "kapitel-4",
      "title": "Kapitel 4: Mehr als eine Schublade",
      "subtitle": "Teil II: Macht und Gegenmacht · Individuelle Gerechtigkeit statt Gleichförmigkeit",
      "pageRange": "Seiten 16–18",
      "estimatedReadTimeMinutes": 7,
      "sections": [
        {
          "type": "callout",
          "callout": {
            "type": "dialog-quote",
            "title": "Ausgangszitat",
            "quote": "„Was wäre, wenn die nächste Ordnung nicht darauf beruht, dass alle gleich behandelt werden, sondern dass jeder als einzelne Person gesehen wird?“",
            "attribution": "Sinngemäß aus dem Gespräch"
          }
        },
        {
          "type": "paragraph",
          "text": "Irgendwann habe ich die europäischen Grundlagentexte gelesen, und ihr Kern lautet: Jeder Mensch wird gleich behandelt. Die Grundrechtecharta der Europäischen Union sagt in Artikel 20, dass alle Personen vor dem Gesetz gleich sind. Das ist eine der großen Errungenschaften, und sie hat über viele Jahre gut funktioniert. Aber sie hat einen Preis. Damit das System läuft, muss jeder in eine Schublade passen."
        },
        {
          "type": "paragraph",
          "text": "Ein Anzug von der Stange sitzt den meisten irgendwie und niemandem wirklich. Ein Maßanzug sitzt, aber er kostet Zeit und Aufmerksamkeit, die ein Massenbetrieb nicht hat. Genau an diesem Punkt hat künstliche Intelligenz etwas Neues zu bieten: Sie könnte erstmals in großem Stil Einzelfälle ansehen, statt sie in Gruppen zu pressen. Im Gespräch habe ich gefragt, ob die nächste Regierungsform nicht darauf aufbauen sollte. Sie würde nicht mehr sagen: Du gehörst zu dieser Gruppe, also gilt das für dich. Sie würde fragen: Was braucht dieser eine Mensch?"
        },
        {
          "type": "paragraph",
          "text": "Die Idee ist nicht neu. Aristoteles hat in der „Nikomachischen Ethik“ (Buch V) beschrieben, dass jedes Gesetz allgemein sein muss und das Leben aus Einzelfällen besteht. Die Korrektur nannte er „Epieikeia“, Billigkeit: die Kunst, das Gesetz dort zu mildern, wo seine Allgemeinheit dem Fall Unrecht tut. Karl Marx formulierte 1875 in der „Kritik des Gothaer Programms“, gleiches Recht für Ungleiche erzeuge Ungleichheit, und stellte dagegen den Satz „Jeder nach seinen Fähigkeiten, jedem nach seinen Bedürfnissen“. Am präzisesten trifft es der Befähigungsansatz von Amartya Sen und Martha Nussbaum: Gerechtigkeit heißt nicht, jedem dasselbe zu geben, sondern jedem das, was er braucht, um tatsächlich etwas aus seinem Leben machen zu können. John Rawls dagegen suchte hinter dem „Schleier des Nichtwissens“ Grundsätze, die für alle gleich gelten. Beides ist kein Entweder-oder, wie sich gleich zeigt."
        },
        {
          "type": "paragraph",
          "text": "Die KI brachte ein Beispiel, das ich einleuchtend fand. Zwei Menschen bekommen dieselbe Anforderung auferlegt. Der eine ist gesund, abgesichert und leistungsfähig, der andere eingeschränkt und auf Unterstützung angewiesen. Formal sind sie gleich behandelt. Gerecht ist es nicht. Oder ein Mobilitätskontingent: Ein Mensch, der regelmäßig zur Dialyse muss, braucht etwas anderes als jemand, der aus Vergnügen durch die Gegend fährt."
        },
        {
          "type": "paragraph",
          "text": "Doch der Einwand ließ nicht auf sich warten, und er ist gewichtig. Wer legt die Kriterien fest? Produktivität? Hilfsbereitschaft? Beitrag zur Gesellschaft? Bedürftigkeit? Wer Menschen umfassend bewertet und daraus Rechte ableitet, schafft eine neue, schlimmere Ungleichheit. Die Europäische Union hat deshalb bestimmte Formen von KI-gestützter sozialer Bewertung, das sogenannte Social Scoring, in ihrer KI-Verordnung verboten. Hinzu kommt ein rechtsstaatliches Problem: Wenn jeder individuelle Ausnahmen aushandelt, gewinnt am Ende, wer die bessere Vertretung hat. Man könnte das einen algorithmischen Feudalismus nennen, ein Ständesystem mit besserer Technik."
        },
        {
          "type": "paragraph",
          "text": "Die Auflösung, auf die wir im Gespräch kamen, trennt zwei Ebenen. Würde und Grundrechte sind für alle gleich. Die praktische Behandlung darf individuell sein. Auf der ersten Ebene wird nicht verhandelt, auf der zweiten wird nach dem Einzelfall gefragt. Die Frage, ob eine solche Ordnung nur Bedürfnisse berücksichtigen soll oder auch das Verhalten und den Beitrag der Menschen, beantwortete ich zunächst mit: unbedingt auch den Beitrag. Mein Grund war, dass materielle Versorgung allein nicht reicht. Man kann ein Zimmer voller Dinge haben und trotzdem einsam sein. Die KI unterschied dann den Wert eines Menschen von seinem Beitrag und wies darauf hin, dass ein Beitrag nicht wirtschaftlich sein muss: Wer einem einsamen Menschen zuhört, leistet etwas, ohne einen Euro zu verdienen."
        },
        {
          "type": "paragraph",
          "text": "Am Ende stand eine Formel, die in dieser Fassung von der KI stammt und der ich zugestimmt habe. Ich habe zwei Dinge ergänzt: dass es keinen Zwang geben darf, und das Wort Entscheidungsfreiheit. Die Formel lautet: gleiche Würde und gleiche Rechte für alle als feste Grenze, innerhalb dieser Grenze individuelle Unterstützung statt Bewertung nach Nutzen, ein ernstgenommenes Bedürfnis nach Beziehung, und für jeden die Freiheit, selbst zu entscheiden."
        },
        {
          "type": "callout",
          "callout": {
            "type": "core-thesis",
            "title": "MEINE POSITION",
            "content": "Gleiche Würde und gleiche Rechte sind die feste Grenze. Innerhalb dieser Grenze soll jeder Mensch als einzelne Person behandelt werden, mit individueller Unterstützung statt Bewertung nach Nutzen. Es darf keinen Zwang geben, weder zur Gemeinschaft noch zum Rückzug. Der Mensch soll seine Entscheidungsfreiheit behalten."
          }
        },
        {
          "type": "subheading",
          "text": "Zum Weiterdenken"
        },
        {
          "type": "bullet-list",
          "items": [
            "Wo haben Sie erlebt, dass Gleichbehandlung zu Ungerechtigkeit führte?",
            "Wie viel Ausnahme verträgt ein Rechtsstaat, bevor er zum Gefälligkeitsstaat wird?",
            "Wer sollte festlegen, was ein „individuelles Bedürfnis“ ist?"
          ]
        }
      ]
    },
    {
      "id": "kapitel-5",
      "number": 5,
      "code": "kapitel-5",
      "title": "Kapitel 5: Ein Anwalt für jeden",
      "subtitle": "Teil II: Macht und Gegenmacht · Die Menschen-KI als Interessenvertretung",
      "pageRange": "Seiten 19–21",
      "estimatedReadTimeMinutes": 7,
      "sections": [
        {
          "type": "callout",
          "callout": {
            "type": "dialog-quote",
            "title": "Ausgangszitat",
            "quote": "„Es gibt eine KI, die sich um das Wirtschaftliche kümmert, und eine, die sich um die Bedürfnisse der einzelnen Menschen kümmert.“",
            "attribution": "Sinngemäß aus dem Gespräch"
          }
        },
        {
          "type": "paragraph",
          "text": "Aus der Idee der individuellen Gerechtigkeit folgt ein praktisches Problem: Wer setzt sie durch? Der einzelne Mensch ist gegenüber Behörden, Banken und Konzernen schwach. Er hat weder die Zeit, das Kleingedruckte zu lesen, noch die Kraft, in der dritten Warteschleife des Tages hartnäckig zu bleiben. Seine Gegner sind Organisationen mit Rechtsabteilungen."
        },
        {
          "type": "paragraph",
          "text": "Mein Vorschlag im Gespräch war ein Zwei-KI-Modell. Es gibt eine Wirtschafts-KI, die sich um Ressourcen und Stabilität kümmert. Und es gibt eine Menschen-KI, die die Anliegen des einzelnen Menschen kennt und vertritt. Der Mensch spricht nur mit seiner Menschen-KI. Sie tauscht sich mit den Wirtschafts-KIs aus, bei bestimmten Verhaltensmustern oder Bedürfnissen diskutieren die Systeme miteinander, und am Ende wird das Recht des Menschen eingefordert."
        },
        {
          "type": "paragraph",
          "text": "Die KI nannte das eine Gewaltenteilung zwischen KIs, und der Vergleich trägt weit. Schon Montesquieu hat 1748 gezeigt, dass Macht nur dann zähmbar ist, wenn sie auf Gegenmacht trifft. Man kann sich die Menschen-KI auch alltäglicher vorstellen, etwa als einen Betriebsrat, der nie schläft, oder als Mieterverein für das ganze Leben. Die Wirtschaft verhandelt längst mit Tarifpartnern, ohne dass jemand das für undemokratisch hielte. Eine Menschen-KI wäre nichts anderes als ein Tarifpartner für jeden Einzelnen."
        },
        {
          "type": "paragraph",
          "text": "Die KI ergänzte zwei Sicherungen, die ich für unverzichtbar halte. Erstens braucht es eine unabhängige Kontrolle, die sicherstellt, dass Grundrechte gewahrt bleiben und Entscheidungen angefochten werden können. Sonst könnten sich die Systeme auf etwas einigen, das rechnerisch sinnvoll ist, aber vom betroffenen Menschen nicht gewollt wird. Zweitens muss der Mensch am Ende entscheiden, ob er eine Lösung annimmt oder nicht."
        },
        {
          "type": "paragraph",
          "text": "Daran schloss sich die wichtigste Frage dieses Kapitels an: Anwalt oder Vormund? Was passiert, wenn jemand offensichtlich eine schlechte Entscheidung für sich treffen will? Muss ihn die Menschen-KI trotzdem verteidigen, oder darf sie ihn gegen seinen Willen schützen? Meine Antwort im Gespräch war, der Mensch solle die Entscheidung treffen, aber mit gesundem Menschenverstand. Ich gebe zu, dass die Frage nicht leicht ist. Ein Anwalt rät ab, widerspricht und warnt, aber er führt aus, was sein Mandant will. Ein Vormund entscheidet an dessen Stelle. Wenn die Menschen-KI Anwalt sein soll, dann darf sie überzeugen, aber nicht überstimmen. Wo die Gesellschaft Eingriffe für nötig hält, etwa wenn Dritte gefährdet sind, gehören sie nicht in die Hände einer Maschine, sondern in ein Verfahren mit Begründung, Überprüfung und Widerspruch."
        },
        {
          "type": "paragraph",
          "text": "Zwei Prüfsteine kommen hinzu, die in der kritischen Analyse dieses Projekts besonders deutlich wurden. Der erste ist das Infrastruktur-Paradox. Wer baut die Menschen-KI, wer betreibt sie, wer bezahlt sie? Läuft sie auf den Servern eines großen Konzerns, dann ist ihre Loyalität zum einzelnen Bürger eine Illusion, so wie ein Anwalt, der von der Gegenseite bezahlt wird. Möglich wären Systeme, die lokal auf dem eigenen Gerät laufen, und eine gesetzliche Treuepflicht wie beim Anwaltsgeheimnis. Der zweite Prüfstein ist das Wettrüsten: Wenn Bürger-KI und Behörden-KI sich gegenseitig hochschaukeln, wer profitiert dann? Vermutlich der, der die schnellere Technik bezahlen kann."
        },
        {
          "type": "paragraph",
          "text": "Diese Fragen entkräften die Idee nicht. Sie sagen, was sie kosten würde, wenn man sie ernst meint. Eine Menschen-KI, die nicht dem Menschen gehört, ist keine Menschen-KI."
        },
        {
          "type": "callout",
          "callout": {
            "type": "core-thesis",
            "title": "MEINE POSITION",
            "content": "Es braucht zwei Arten von KI: eine für das Wirtschaftliche und eine für die Bedürfnisse der Einzelnen. Der Mensch spricht mit seiner Menschen-KI, und sie tauscht sich mit den Wirtschafts-KIs aus und fordert sein Recht ein. Der Mensch soll am Ende selbst entscheiden, aber mit gesundem Menschenverstand."
          }
        },
        {
          "type": "subheading",
          "text": "Zum Weiterdenken"
        },
        {
          "type": "bullet-list",
          "items": [
            "Wem müsste eine Menschen-KI gehören, damit Sie ihr vertrauen?",
            "Wo verläuft für Sie die Grenze zwischen Rat und Bevormundung?",
            "Welche Entscheidung in Ihrem Leben hätte eine solche Vertretung leichter gemacht?"
          ]
        }
      ]
    },
    {
      "id": "kapitel-6",
      "number": 6,
      "code": "kapitel-6",
      "title": "Kapitel 6: Wenn niemand mehr muss",
      "subtitle": "Teil III: Frei wozu? · Eine Welt ohne Arbeitszwang",
      "pageRange": "Seiten 23–25",
      "estimatedReadTimeMinutes": 7,
      "sections": [
        {
          "type": "callout",
          "callout": {
            "type": "dialog-quote",
            "title": "Ausgangszitat",
            "quote": "„Wir Menschen brauchen Ventile.“",
            "attribution": "Aus dem Gespräch"
          }
        },
        {
          "type": "paragraph",
          "text": "Die KI entwarf im Gespräch noch ein zweites Szenario. Wir schreiben das Jahr 2070. Roboter und KI erledigen fast alle nötigen Aufgaben. Essen wird erzeugt, Häuser werden gebaut, Krankheiten behandelt, und niemand muss arbeiten, um zu überleben. Manche Menschen blühen auf und widmen sich Philosophie, Kunst und Forschung. Andere verlieren die Orientierung, weil ihnen das Gefühl fehlt, gebraucht zu werden. Wäre das eine Befreiung oder eine neue Form von Stillstand? Meine Antwort war: beides."
        },
        {
          "type": "paragraph",
          "text": "Wer einmal zwei Wochen Urlaub ohne Plan verbracht hat, kennt den Effekt. In den ersten Tagen tut die Ruhe gut, in der zweiten Woche wird sie leer. Freiheit von einer Pflicht ist nicht dasselbe wie Freiheit zu etwas. Genau das haben große Denker früh gesehen. John Maynard Keynes sagte 1930 in „Economic Possibilities for our Grandchildren“ voraus, das eigentliche Problem der Zukunft werde nicht das Überleben sein, sondern die Frage, wie man die gewonnene Freiheit nutzt. Bertrand Russell plädierte 1932 in „Lob des Müßiggangs“ für kürzere Arbeitszeiten, damit mehr Raum für Kunst, Wissenschaft und Lebensfreude bleibt."
        },
        {
          "type": "paragraph",
          "text": "Hannah Arendt unterschied in „Vita activa“ drei Grundtätigkeiten: das Arbeiten, das dem Überleben dient, das Herstellen, das eine dauerhafte Welt schafft, und das Handeln, die freie Begegnung zwischen Menschen. Ihre Warnung lautete sinngemäß, wir lebten in einer Arbeitsgesellschaft, der die Arbeit ausgeht, und hätten verlernt, außerhalb der Erwerbsarbeit etwas Sinnvolles zu tun. Viktor Frankl hat gezeigt, dass der Mensch nicht in erster Linie Komfort sucht, sondern Sinn. Eine Welt ohne Arbeitszwang darf also keine Welt ohne Aufgabe sein."
        },
        {
          "type": "paragraph",
          "text": "Was daraus praktisch folgen könnte, habe ich im Gespräch so beschrieben: Wichtig ist, dass alles Notwendige versorgt ist und die KI es verwaltet. Aber Menschen brauchen Ventile, also Orte, an denen sie ihre Energie ausleben können. Ich stelle mir Viertel vor, in denen man selbst Hand anlegen, handwerken, malen und menschliche Städte bauen kann. Dazu kommen Zentren für Begegnung und Projekte, Orte, an denen man Fähigkeiten trainiert und gemeinsam etwas angeht. Wichtig ist, dass es nicht immer dieselbe Aufgabe sein darf. Sonst entsteht wieder ein Zwangshamsterrad, das für nichts taugt und niemanden nach vorn bringt. Ich glaube außerdem, dass die KI den Menschen nie ganz ersetzen wird. Ich stelle mir eine Koexistenz vor: Die Technik versorgt, und die Menschen erforschen ihre Fähigkeiten und ihre Philosophie weiter."
        },
        {
          "type": "paragraph",
          "text": "Zwei harte Gegenfragen bleiben, und sie sollten im Buch nicht fehlen. Die erste betrifft die Verteilung. Automatisierung hat historisch nicht von selbst zu kürzeren Arbeitszeiten und Wohlstand für alle geführt, sondern oft dazu, dass die Eigentümer der Maschinen den Ertrag behalten. Ohne eine gerechte Verteilung wäre eine „Welt ohne Arbeitszwang“ nur ein schönes Wort für neue Abhängigkeit. Die zweite betrifft die Arbeit, die niemand abnimmt: Pflege, Handwerk und viele Tätigkeiten, bei denen Menschen gebraucht werden, weil Zuwendung sich nicht rechnen lässt."
        },
        {
          "type": "paragraph",
          "text": "Aber der Gedanke bleibt stark. Wenn die Notwendigkeit entfällt, wird die Freiheit zur eigentlichen Aufgabe. Davon handelt das letzte Kapitel."
        },
        {
          "type": "callout",
          "callout": {
            "type": "core-thesis",
            "title": "MEINE POSITION",
            "content": "Eine Welt ohne Arbeitszwang ist Befreiung und Stillstand zugleich. Menschen brauchen Ventile: Orte für Handwerk, Bauen, Malen und gemeinsames Lernen, ohne an eine einzige Aufgabe gekettet zu sein. Die KI soll das Notwendige verwalten, aber sie wird den Menschen nicht ganz ersetzen."
          }
        },
        {
          "type": "subheading",
          "text": "Zum Weiterdenken"
        },
        {
          "type": "bullet-list",
          "items": [
            "Was würden Sie tun, wenn Sie nie wieder arbeiten müssten? Und was nach dem ersten halben Jahr?",
            "Wem sollten die Maschinen gehören, die die Arbeit erledigen?",
            "Welche Tätigkeiten sollten Menschen behalten, auch wenn Maschinen sie besser könnten?"
          ]
        }
      ]
    },
    {
      "id": "kapitel-7",
      "number": 7,
      "code": "kapitel-7",
      "title": "Kapitel 7: Wozu frei?",
      "subtitle": "Teil III: Frei wozu? · Was ein menschliches Leben wirklich erfüllt",
      "pageRange": "Seiten 26–27",
      "estimatedReadTimeMinutes": 6,
      "sections": [
        {
          "type": "callout",
          "callout": {
            "type": "dialog-quote",
            "title": "Ausgangszitat",
            "quote": "„Alles Materielle hilft nicht, wenn wir Menschen keine Verbindung zueinander eingehen.“",
            "attribution": "Sinngemäß aus dem Gespräch"
          }
        },
        {
          "type": "paragraph",
          "text": "Am Ende bleibt die Frage, die schon der Titel stellt: Frei wozu? Wer von Zwang befreit ist, hat noch nichts gewonnen, solange er nicht weiß, was er mit der Freiheit anfängt."
        },
        {
          "type": "paragraph",
          "text": "Im Gespräch kam eine Antwort, die ich für die wichtigste halte: Man kann ein Zimmer voller Dinge haben und trotzdem einsam sein. Alles Tote und Stoffliche hilft nicht, wenn Menschen sich nicht miteinander verbinden, wenn sie, wie ich es nannte, keine Symbiose eingehen. Die KI formulierte es für eine ganze Gesellschaft: Sie kann wirtschaftlich glänzen und menschlich verarmen. Eine Superintelligenz, die nur Produktivität, Gesundheit und Ressourcenverbrauch optimiert, würde das übersehen."
        },
        {
          "type": "paragraph",
          "text": "Das deckt sich mit einem alten Gedanken. Aristoteles bestimmte das gelungene Leben, die Eudaimonia, nicht als Zustand des Versorgtseins, sondern als Tätigkeit der Seele gemäß der Vernunft. Erfüllung ist etwas, das man tut, nicht etwas, das einem geliefert wird."
        },
        {
          "type": "paragraph",
          "text": "Nicht jeder braucht dasselbe, und hier liegt der Grund, warum das ganze Buch auf Entscheidungsfreiheit besteht. Manche Menschen gedeihen in der Gruppe und brauchen Gruppendynamik, andere sind lieber für sich und pflegen zwei oder drei Beziehungen, in denen sie wirklich in die Tiefe gehen. Beides ist in Ordnung, und beides kann sich im Lauf des Lebens ändern. Wichtig ist, dass keiner zur Gemeinschaft gezwungen wird und keiner zur Einsamkeit verurteilt ist. Menschen, die allein sein wollen, sollen allein sein können. Und wer Gemeinschaft sucht, soll sie finden."
        },
        {
          "type": "paragraph",
          "text": "Auch der Begriff des Beitrags verändert sich. Im Gespräch hat die KI eine Liste genannt, die mir gefällt: einen Garten pflegen, ein Kind erziehen, eine App entwickeln, einem einsamen Menschen zuhören, ein Gespräch führen, das einem anderen eine neue Perspektive eröffnet. Keine dieser Tätigkeiten bringt zwangsläufig Geld, jede macht für jemanden einen Unterschied. Die KI stellte dazu eine These auf, die ich zur Diskussion stelle: Vielleicht brauchen Menschen gar nicht unbedingt Arbeit, sondern das Gefühl, dass ihre Existenz für irgendetwas oder irgendjemanden einen Unterschied macht."
        },
        {
          "type": "paragraph",
          "text": "Damit schließt sich der Kreis zum ersten Kapitel. Weil wir endlich sind, ist die freie Zeit kostbar. Freiheit ohne Frist wäre Beliebigkeit. Wer eine Maschine baut, die keine Frist kennt, darf nicht erwarten, dass sie versteht, warum uns ein Nachmittag etwas bedeutet. Das müssen wir ihr nicht beibringen, aber wir dürfen es nicht verlernen."
        },
        {
          "type": "callout",
          "callout": {
            "type": "core-thesis",
            "title": "MEINE POSITION",
            "content": "Materielle Versorgung ersetzt keine Verbundenheit. Manche Menschen brauchen Gruppen, andere Rückzug, und beides soll ohne Zwang möglich sein. Der Mensch soll seine Entscheidungsfreiheit behalten, innerhalb von Grundrechten, die für alle gelten."
          }
        },
        {
          "type": "subheading",
          "text": "Zum Weiterdenken"
        },
        {
          "type": "bullet-list",
          "items": [
            "Wann haben Sie zuletzt etwas getan, das für jemand anderen einen Unterschied gemacht hat?",
            "Wie viel Gemeinschaft brauchen Sie, und wie viel Rückzug?",
            "Was würde Ihnen fehlen, wenn Maschinen alles übernähmen, was Sie heute für andere tun?"
          ]
        }
      ]
    },
    {
      "id": "epilog",
      "number": 8,
      "code": "epilog",
      "title": "Was bleibt",
      "subtitle": "Epilog: Sieben Fragen und fünf Sätze",
      "pageRange": "Seite 28",
      "estimatedReadTimeMinutes": 3,
      "sections": [
        {
          "type": "paragraph",
          "text": "Aus anderthalb Stunden Gespräch sind sieben Fragen und eine Antwort geworden, die in fünf Sätzen Platz hat."
        },
        {
          "type": "paragraph",
          "text": "Wir sind endlich, und das gibt unseren Entscheidungen Gewicht. Gleiche Würde und gleiche Rechte gelten für alle und bilden die feste Grenze. Innerhalb dieser Grenze verdient jeder Mensch, als einzelne Person gesehen zu werden und nicht als Fall in einer Schublade. Technik soll dem Einzelnen gehören und dienen, nicht nur Staaten und Konzernen. Und wenn Maschinen uns die Notwendigkeit abnehmen, bleibt uns die schönste und schwerste Aufgabe: zu entscheiden, wozu wir frei sind."
        },
        {
          "type": "paragraph",
          "text": "Ich weiß nicht, ob die Zukunft so aussehen wird. Ich weiß nur, dass es besser ist, sie zu beschreiben, bevor sie kommt, als sie zu erleiden, nachdem sie da ist. Wenn dieses Buch Sie zu einer eigenen Antwort anregt, hat es sein Ziel erreicht, auch wenn Ihre Antwort anders ausfällt."
        }
      ]
    },
    {
      "id": "quellen",
      "number": 9,
      "code": "quellen",
      "title": "Quellen und Literatur",
      "subtitle": "Verzeichnis der erwähnten und zugrundeliegenden Werke",
      "pageRange": "Seite 29",
      "estimatedReadTimeMinutes": 4,
      "sections": [
        {
          "type": "paragraph",
          "text": "Die folgenden Werke sind im Text erwähnt oder liegen ihm zugrunde. Ausgaben, Seitenzahlen und Zitate werden vor der Veröffentlichung gegengeprüft."
        },
        {
          "type": "bullet-list",
          "items": [
            "Aristoteles: Nikomachische Ethik, Buch V (Gerechtigkeit, Billigkeit/Epieikeia).",
            "Anselm von Canterbury: Cur Deus homo (um 1098).",
            "Arendt, Hannah: Vita activa oder Vom tätigen Leben (1958; dt. 1960).",
            "Bostrom, Nick: Superintelligence (2014).",
            "Deutscher Ethikrat: Mensch und Maschine – Herausforderungen durch Künstliche Intelligenz (Stellungnahme, 2023).",
            "Europäische Union: Charta der Grundrechte, Art. 20 (Gleichheit vor dem Gesetz); KI-Verordnung (Verordnung (EU) 2024/1689).",
            "Frankl, Viktor E.: … trotzdem Ja zum Leben sagen (1946).",
            "Heidegger, Martin: Sein und Zeit (1927).",
            "Kant, Immanuel: Grundlegung zur Metaphysik der Sitten (1785).",
            "Keynes, John Maynard: Economic Possibilities for our Grandchildren (1930).",
            "Marx, Karl: Kritik des Gothaer Programms (1875).",
            "Montesquieu: De l’esprit des lois (1748).",
            "Nussbaum, Martha: Creating Capabilities (2011); Sen, Amartya: Development as Freedom (1999).",
            "Platon: Euthyphron.",
            "Rawls, John: A Theory of Justice (1971).",
            "Russell, Bertrand: In Praise of Idleness (1932).",
            "Russell, Stuart: Human Compatible (2019).",
            "Thomas von Aquin: Summa theologiae (zur Frage von Gottes Willen und Gottes Natur).",
            "Die Bibel: Mt 11,30; 1 Petr 2,16; Ex 20 (Zehn Gebote)."
          ]
        }
      ]
    }
  ]
};
