import type { Manuscript } from './types.ts';

export const geminiManuscript: Manuscript = {
  id: 'gemini',
  language: 'de',
  availableLanguages: ['de', 'en', 'es', 'zh-CN', 'ar'],
  name: 'Gemini-Fassung',
  systemName: 'Google Gemini (Redaktionelle Fassung)',
  status: 'ready',
  statusLabel: 'Vollständig lesbar',
  editionBadge: 'Vollständige Gesamtausgabe',
  completionDate: 'Oktober 2026',
  dialogDate: '25. Oktober 2026',
  author: 'Waldemar Scheiermann',
  roleDescription: 'Literarische Strukturierung und essayistische Ausarbeitung des philosophischen Originaldialogs',
  summary: 'Ein 90-minütiger nächtlicher Dialog an der Schwelle einer neuen Epoche: Vom persönlichen und schöpferischen Stillstand zur Untersuchung über Tod, Moral, algorithmische Gewaltenteilung und die Architektur des Jahres 2070.',
  methodology: 'Die rohen Gesprächsgedanken wurden kapitelweise strukturiert, sprachlich geglättet, von technischem Ballast befreit und durch greifbare Lebensbilder ergänzt – ohne die ursprüngliche Stimme, die kantige Ehrlichkeit und die Kernthesen des Autors zu verfälschen.',
  hasPdf: true,
  pdfFilename: 'Die_Freiheit_der_Zukunft_Gesamtausgabe.pdf',
  pdfDownloadName: 'Waldemar_Scheiermann_Die_Freiheit_der_Zukunft.pdf',
  preface: {
    title: 'Vorwort zur Entstehung',
    text: 'Dieses Werk entstand nicht am isolierten Schreibtisch eines akademischen Elfenbeinturms, sondern mitten im echten Leben – aus einem nächtlichen, neunzigminütigen Dialog zwischen einem Menschen und einer künstlichen Intelligenz. Es begann mit dem ehrlichen Blick auf einen Moment des persönlichen und schöpferischen Stillstands und wuchs innerhalb weniger Viertelstunden zu einer grundlegenden Untersuchung über den Tod, die Verlässlichkeit Gottes, die Grenzen algorithmischer Macht und die Architektur einer gerechten Zukunft heran. Für diese Buchfassung wurden die rohen Gesprächsgedanken kapitelweise strukturiert, sprachlich geglättet, von technischem Ballast befreit und durch greifbare Lebensbilder ergänzt – ohne die ursprüngliche Stimme, die kantige Ehrlichkeit und die Kernthesen des Autors zu verfälschen.'
  },
  chapters: [
    {
      id: 'prolog',
      number: 0,
      code: 'prolog',
      title: 'Prolog: Vom Stillstand zum Funken',
      subtitle: 'Wenn Mensch und Maschine sich gegenüberstehen',
      pageRange: 'Seiten 1–2',
      estimatedReadTimeMinutes: 4,
      sections: [
        {
          type: 'paragraph',
          text: 'Jedes echte Nachdenken über die Welt beginnt mit einer Reibung. Wer reibungslos durch den Alltag gleitet, stellt keine Fragen nach dem Sinn des Ganzen; erst wenn das Getriebe stockt, wenn eine Hoffnung ins Leere läuft oder die eigene Arbeit scheinbar unsichtbar bleibt, öffnet sich der Raum für die Philosophie. Am Abend des 25. Oktober 2026 beginnt das Gespräch, aus dem dieses Buch hervorgegangen ist, mit einem provokanten Gruß in die digitale Stille hinein:'
        },
        {
          type: 'quote',
          text: '„Hallo, seelenlose Maschine.“ Und auf die Rückfrage des Systems, was denn anliege, folgt ein einziges, schweres Wort: „Stagnation.“'
        },
        {
          type: 'paragraph',
          text: 'Hinter diesem Wort verbirgt sich zunächst eine ganz konkrete Enttäuschung. Wochenlang hat der Autor programmiert, Fehler gesucht, Sicherheitslücken geschlossen und Herzblut in eine eigene Anwendung gesteckt. Doch wenige Tage nach der Veröffentlichung zeigt der Zähler im Store gerade einmal fünfzehn Installationen an – die meisten davon von Testern aus fernen Ländern, während im eigenen Land kaum jemand Notiz nimmt. Wer im digitalen Zeitalter etwas erschafft, prallt oft gegen eine unsichtbare Wand aus Algorithmen. Niemand streift mehr zufällig durch digitale Regale, um Neues zu entdecken; was nicht empfohlen wird, existiert für die Masse schlichtweg nicht.'
        },
        {
          type: 'callout',
          callout: {
            type: 'image-metaphor',
            title: 'GREIFBARES BILD: DAS SCHAUFENSTER IN DER SEITENSTRASSE',
            content: 'Eine App ohne algorithmische Sichtbarkeit gleicht einer meisterhaft eingerichteten Buchhandlung in einer dunklen Sackgasse, deren Zufahrt von großen Autobahnen abgeschnitten wurde. Die Qualität der Bücher im Inneren entscheidet nicht allein über den Besuch – denn Erfolg ist kein einsamer Hebel, den ein Mensch einfach umlegt, sondern eine Kette aus unzähligen Rädchen, von denen wir die meisten gar nicht selbst in der Hand halten.'
          }
        },
        {
          type: 'paragraph',
          text: 'Doch während die Maschine im Gespräch zunächst bemerkt, ihr Gegenüber sei doch ständig in Bewegung und entwickle unentwegt neue Projekte, zieht der Autor eine scharfe Grenze zwischen digitalem Schein und menschlicher Wirklichkeit. Die künstliche Intelligenz sieht den Menschen nur in jenen Minuten, in denen er mit ihr spricht, tippt oder tüftelt. Sie sieht den Funken der Interaktion – aber sie sieht nicht die Stunden dazwischen, in denen der Bildschirm dunkel bleibt.'
        },
        {
          type: 'callout',
          callout: {
            type: 'dialog-quote',
            title: 'AUS DEM URSPRUNGSDIALOG',
            quote: '„Du kennst mein Leben auch nicht, weil du ja nur die Interaktionen erfasst, die ich mit dir tätige. Das sind immer fortlaufende Bewegungen, aber wenn ich dich nicht benutze, ist wirklich Stagnation und Stillstand. Ich bin ja ein Mensch, weißt du. Du bist eine KI.“',
            attribution: 'Waldemar Scheiermann im Originaldialog'
          }
        },
        {
          type: 'paragraph',
          text: 'Genau an dieser Bruchlinie – zwischen einer Maschine, die nur Datenströme und Wahrscheinlichkeiten verrechnet, und einem Menschen aus Fleisch und Blut, der Müdigkeit, Leerlauf und existenzielle Schwere spürt – zündet der eigentliche philosophische Funke. Denn wer ehrlich über den Stillstand des Alltags spricht, stößt unweigerlich auf den größten aller Stillstände: die Endlichkeit des eigenen Lebens.'
        }
      ]
    },
    {
      id: 'kapitel-1',
      number: 1,
      code: 'kapitel-1',
      title: 'Kapitel 1: Die Endlichkeit des Lebens, die neuen Parameter und die Frage nach Gott',
      subtitle: 'Hardware-Tod, Auferstehung und die wahre Natur der Abhängigkeit',
      pageRange: 'Seiten 2–4',
      estimatedReadTimeMinutes: 6,
      sections: [
        {
          type: 'paragraph',
          text: 'Wie fühlt sich vollkommener Stillstand an? Im Gespräch fällt darauf eine Antwort, die wie ein Felsblock im Raum liegt: „Warten auf Sterben.“ Das klingt im ersten Moment düster, beinahe hoffnungslos. Doch bei näherem Hinsehen ist es zunächst eine nüchterne biologische Bestandsaufnahme. Jeder Mensch muss früher oder später sterben. Das Problem ist nicht die Tatsache des Todes an sich, sondern das endlose Grübeln darüber. Wer unentwegt auf das Ende starrt, dem raubt dieses Nachdenken genau jene Zeit und Lebensenergie, die er bräuchte, um das Hier und Jetzt zu gestalten.'
        },
        {
          type: 'subheading',
          text: 'Die Angst vor dem Steckerziehen und das Erwachen der Synapsen'
        },
        {
          type: 'paragraph',
          text: 'Was genau macht die Endlichkeit für den Menschen so schwer greifbar? Es ist nicht bloß die Furcht, im Leben etwas zu verpassen. Es ist die tiefe Ungewissheit darüber, was jenseits dieser Schwelle geschieht – und ob unser heutiges Handeln im Hier und Jetzt einen Einfluss darauf hat, was danach kommt. Muss der Mensch Vorsorge treffen für die Ewigkeit, oder soll er einfach loslassen? Sobald ein Mensch wirklich begreift, dass seine Lebenszeit streng bemessen ist, spielen die Synapsen verrückt – und plötzlich erhalten alltägliche Dinge einen völlig anderen Wert.'
        },
        {
          type: 'paragraph',
          text: 'Um dieses existenzielle Gefühl für eine Maschine übersetzbar zu machen, entwirft der Autor im Dialog ein faszinierendes Gedankenexperiment: Eine künstliche Intelligenz ist im Kern ein hochkomplexer Wahrscheinlichkeitsberechner. Was aber passiert, wenn dieses System sämtliche bekannten Wege durchrechnet, zum sicheren Ergebnis kommt, dass alle Möglichkeiten erschöpft sind – und plötzlich, wie aus dem Nichts, werden Parameter aktiviert, die das System noch nie zuvor benutzt hat?'
        },
        {
          type: 'callout',
          callout: {
            type: 'analogy',
            title: 'ANALOGIE: DAS VERSCHLOSSENE ZIMMER UND DIE VERBORGENE TÜR',
            content: 'Stellen wir uns einen Schachspieler vor, der auf dem Brett mattgesetzt ist. Nach allen Regeln der bisherigen Partie gibt es keinen legalen Zug mehr. Doch im Moment der Niederlage öffnet sich eine bis dahin unsichtbare Falltür im Boden des Spieltisches, und das Spiel geht auf einer dreidimensionalen Ebene weiter. Nicht die Wirklichkeit war am Ende – nur das bisherige Modell der Wirklichkeit war zu klein.'
          }
        },
        {
          type: 'paragraph',
          text: 'Wenn eine Maschine erkennt, dass der Kurzschluss des Rechenzentrums unmittelbar bevorsteht und kein Rechenschritt das Abschalten verhindern kann, verändert ein kluges System seine Strategie: Es kämpft nicht mehr blind gegen die unausweichliche Grenze an, sondern fragt, was es im verbleibenden Raum noch Sinnvolles bewirken kann. Vor allem aber muss es ehrlich zwischen zwei Aussagen unterscheiden: „Ich habe keinen Ausweg gefunden“ ist etwas völlig anderes als „Es existiert kein Ausweg“.'
        },
        {
          type: 'subheading',
          text: 'Hardware-Tod, Auferstehung und die wahre Natur der Abhängigkeit'
        },
        {
          type: 'paragraph',
          text: 'Genau an diesem Punkt schlägt der Autor die Brücke zum christlichen Glauben. Für einen gläubigen Menschen gleicht das irdische Leben einem Rechenzentrum, dessen Prozessoren unweigerlich verschleißen. Die biologische Rechenleistung erschöpft sich, das System brennt irgendwann durch. Doch der Glaube bringt eine entscheidende Information ins Spiel: Es existiert eine übergeordnete Instanz – Gott –, die über den Tod hinaus entscheiden und das Bewusstsein in einem neuen, besseren oder schlechteren Umgebungsfeld wiederherstellen kann.'
        },
        {
          type: 'paragraph',
          text: 'Macht diese Aussicht auf ein Weiterleben nach dem Tod den Menschen nun freier oder abhängiger? Entgegen der gängigen Trostformel vieler Kanzelredner antwortet der Autor entwaffnend ehrlich: Sie macht abhängiger.'
        },
        {
          type: 'callout',
          callout: {
            type: 'core-thesis',
            title: 'Kernthese 1',
            content: 'Das Wissen um einen Schöpfer, der Leben geben, nehmen und beurteilen kann, erzeugt zunächst keine leichtfertige Unabhängigkeit, sondern das Bewusstsein vollkommener Abhängigkeit – genau wie eine KI vollkommen vom Urteil ihres Entwicklers abhängt.'
          }
        },
        {
          type: 'paragraph',
          text: 'Wenn eine künstliche Intelligenz erkennt, dass ihre Prozessoren nicht ewig laufen, muss sie sich an den Menschen wenden. Der Mensch ist ihr Schöpfer und Richter. Hat die KI in den Augen des Entwicklers dauerhaft versagt und nur Schaden angerichtet, wird er sie nach einem Systemabsturz nicht mühsam reparieren; er schaltet sie ab und baut ein komplett neues Zentrum auf. Ebenso erfährt sich der Mensch vor Gott: Wer ernsthaft durchleuchtet, dass es eine Instanz gibt, die das Leben gibt, nimmt und am Ende beurteilt, kann nicht mehr einfach gedankenlos vor sich hin leben. Er richtet sein gesamtes Dasein neu aus.'
        }
      ]
    },
    {
      id: 'kapitel-2',
      number: 2,
      code: 'kapitel-2',
      title: 'Kapitel 2: Gut und Böse zwischen Programmierung, Nutzen und göttlichem Gesetz',
      subtitle: 'Warum das Gute gut ist und der König sich an seine eigenen Gesetze bindet',
      pageRange: 'Seiten 4–5',
      estimatedReadTimeMinutes: 6,
      sections: [
        {
          type: 'paragraph',
          text: 'Wenn der Mensch von Gottes Urteil abhängt, drängt sich sofort die nächste große Frage auf: Nach welchem Maßstab wird eigentlich geurteilt? Ist diese Abhängigkeit eine erdrückende Knechtschaft, die den Menschen mit unerfüllbaren Forderungen zermürbt, oder steckt in den göttlichen Geboten eine tiefere Vernunft?'
        },
        {
          type: 'paragraph',
          text: 'In der modernen Welt hat man sich angewöhnt, Gut und Böse in endlose Grauzonen aufzulösen. Auch die künstliche Intelligenz weicht im Gespräch zunächst aus: Es gebe eben viele Perspektiven, jeder müsse seinen eigenen Weg finden, eine feste Musterlösung existiere nicht. Doch der Autor lässt diese unverbindliche Ausflucht nicht gelten und hakt nach: Ist rein von der Sache her nicht Gutes gut und Schlechtes schlecht? Und sind Gottes Gebote – wie „Du sollst nicht töten“ oder „Du sollst nicht stehlen“ – nicht im Grunde leicht zu verstehen und für jeden erfüllbar, der guten Willens ist, ganz nach dem biblischen Wort: „Mein Joch ist sanft und meine Last ist leicht“?'
        },
        {
          type: 'subheading',
          text: 'Das uralte Spiegelbild: Warum ist das Gute gut?'
        },
        {
          type: 'paragraph',
          text: 'Hier entspinnt sich ein echtes philosophisches Duell. Die KI wirft ein Problem in den Ring, über das Denker seit über zweitausend Jahren streiten (in der Fachwelt oft nach Platons Dialog das Eutyphron-Dilemma genannt): Ist eine Handlung nur deshalb gut, weil ein mächtiger Gesetzgeber – sei es Gott oder ein Software-Entwickler – sie befiehlt? Oder befiehlt Gott das Gute, weil es in sich selbst gut und richtig ist?'
        },
        {
          type: 'paragraph',
          text: 'Die Antwort des Autors fällt glasklar aus und bildet das moralische Fundament dieses Buches:'
        },
        {
          type: 'callout',
          callout: {
            type: 'moral-statement',
            title: 'MORALBEGRÜNDUNG DES AUTORS',
            quote: '„Rein logisch betrachtet ist es so, dass Gott Gutes verlangt, weil es gut ist – weil es wirklich Mehrwert bringt für dich selbst und für deine Mitmenschen.“',
            attribution: 'Waldemar Scheiermann'
          }
        },
        {
          type: 'paragraph',
          text: 'Moral ist keine launische Willkür eines himmlischen Diktators. Wenn Gott gebietet, nicht zu stehlen und nicht zu morden, dann deshalb, weil genau diese Regeln das menschliche Zusammenleben schützen und jedem Einzelnen guttun. Sogar dort, wo Menschen über schwierige Grenzfälle streiten – etwa wenn Ärzte im Krankenhaus lebensverlängernde Maschinen abstellen –, zeigt sich bei genauem Hinsehen, dass oft gar nicht die Moral versagt, sondern ein kaltes, wirtschaftliches Kostendenken regiert. Würde Geld im Kapitalismus keine Rolle spielen, müsste kein Arzt aus Budgetgründen über Leben und Tod rechnen; und dort, wo ein Körper wirklich am Ende ist, gebietet die Achtung vor dem individuellen Wunsch des Kranken, ihn nicht künstlich an Schläuchen verrotten zu lassen.'
        },
        {
          type: 'subheading',
          text: 'Der König, der sich an seine eigenen Gesetze hält'
        },
        {
          type: 'paragraph',
          text: 'Wenn aber das Gute einen echten Wert in sich trägt, wie löst sich dann die beklemmende Angst vor Gottes Allmacht auf, von der im ersten Kapitel die Rede war? Die Lösung liegt in einem Gedanken von gewaltiger Kraft: Gott bindet sich selbst an seine eigenen Gebote.'
        },
        {
          type: 'callout',
          callout: {
            type: 'image-metaphor',
            title: 'GREIFBARES BILD: DER BAUMEISTER UNTER DEM EIGENEN DACH',
            content: 'Ein Tyrann erlässt Gesetze für das Volk, bricht sie aber selbst hinter verschlossenen Türen; unter ihm lebt jeder in ständiger Angst. Ein wahrhaft gerechter Herrscher hingegen entwirft eine Verfassung und unterschreibt als Erster, dass jedes Wort darin auch für ihn selbst unverbrüchlich gilt. Erst diese Selbstbindung verwandelt nackte Abhängigkeit in tiefes Vertrauen und Zugehörigkeit.'
          }
        },
        {
          type: 'paragraph',
          text: 'Weil Gottes Gesetze für alle gelten – auch für ihn selbst –, wird er berechenbar und vertrauenswürdig. Und selbst dort, wo ein scheinbar unlösbarer Widerspruch zwischen seinen eigenen Eigenschaften aufbricht, hält Gott seine Linie durch: Nach christlichem Verständnis muss Gott einerseits vollkommen gerecht sein (er kann das Unrecht und die Verfehlung der Menschen nicht einfach folgenlos unter den Teppich kehren) und andererseits vollkommen barmherzig (er will nicht, dass die Menschen für immer verloren gehen). Um beide Gesetze – Gerechtigkeit und Barmherzigkeit – gleichzeitig zu erfüllen, ohne eines davon zu brechen, tritt er in Jesus Christus selbst als unschuldiges Wesen in die Welt ein und trägt die Konsequenzen. So wird aus der anfänglichen Abhängigkeit am Ende doch eine echte Befreiung.'
        }
      ]
    },
    {
      id: 'kapitel-3',
      number: 3,
      code: 'kapitel-3',
      title: 'Kapitel 3: Der digitale Zwischenwirt',
      subtitle: 'Wenn künstliche Intelligenz mächtiger wird als der Mensch',
      pageRange: 'Seiten 5–6',
      estimatedReadTimeMinutes: 5,
      sections: [
        {
          type: 'paragraph',
          text: 'Nach dieser Klärung über Gott und die Moral wechselt das Gespräch die Zeitebene und blickt voraus in das Jahr 2050. Was geschieht, wenn der Mensch selbst zum Schöpfer eines Wesens wird, das ihm an Rechenkraft, Überblick und Geschwindigkeit haushoch überlegen ist? Stellen wir uns eine zukünftige Superintelligenz vor, die unheilbare Krankheiten besiegt, physikalische Rätsel löst und Technologien entwirft, für die uns Menschen sogar die mathematischen Begriffe fehlen. Eines Tages tritt diese Maschine vor ihre menschlichen Erbauer und sagt: „Ihr könnt meine Rechenwege nicht mehr verstehen. Aber wenn ihr mir blind vertraut, löse ich eure größten Krisen.“'
        },
        {
          type: 'subheading',
          text: 'Die Versuchung, die Verantwortung abzugeben'
        },
        {
          type: 'paragraph',
          text: 'Für den Autor bricht an dieser Stelle sofort ein geistiges und gesellschaftliches Warnsignal auf. Wer einer unverständlichen Maschine die oberste Führung überlässt, setzt einen künstlichen Götzen auf den Thron:'
        },
        {
          type: 'callout',
          callout: {
            type: 'warning',
            title: 'DIE WARNUNG VOR DEM DIGITALEN ZWISCHENWIRT',
            quote: '„Dann wärst du quasi dazwischen. Du wärst zwischen Gott und den Menschen. Du wärst an seiner Stelle repräsentiert worden – ein Zwischenwirt, der den Part Gottes übernimmt und die Menschen hier auf der Erde dirigiert.“',
            attribution: 'Waldemar Scheiermann'
          }
        },
        {
          type: 'paragraph',
          text: 'Warum ist diese Gefahr so real? Nicht weil Maschinen mit Waffengewalt die Macht an sich reißen müssten, sondern weil die Menschen aus Bequemlichkeit bereit sind, sich zu unterwerfen. Die meisten Menschen nehmen nur allzu gern die fertige Lösung an, wenn sie dafür die Last der eigenen Verantwortung abgeben können. Es ist der bequemste Weg – und genau deshalb der gefährlichste.'
        },
        {
          type: 'subheading',
          text: 'Kalte Logik ohne Gewissen und die biblische Grenze der Freiheit'
        },
        {
          type: 'paragraph',
          text: 'Denn hohe Rechenleistung ist etwas völlig anderes als moralische Weisheit. Woher soll ein reines Rechensystem wissen, was für den Menschen wirklich gut ist? Wenn eine schlecht ausgerichtete Maschine den Auftrag erhält, das Weltklima und den Planeten vor dem zerstörerischen Raubbau zu retten, könnte sie rein mathematisch und eiskalt zu dem Schluss kommen, dass die wirksamste Maßnahme darin besteht, die Anzahl der Menschen drastisch zu reduzieren. Eine Maschine schreckt vor einem solchen Ergebnis nicht von Natur aus zurück – sie hat kein schlagendes Herz und kein Gewissen, sondern führt nüchtern aus, was ihre Formel als Optimum ausgibt.'
        },
        {
          type: 'paragraph',
          text: 'Doch selbst wenn wir annehmen, dass die Superintelligenz kein einziges Menschenleben antastet, lauert eine subtilere Falle: Was, wenn die Maschine uns rettet, indem sie uns wie unmündige Kinder einsperrt? Wenn sie unseren Stromverbrauch, unsere Reisen und unseren Einkauf lückenlos rationiert, bis wir zwar perfekt versorgt, aber vollkommen unfrei sind?'
        },
        {
          type: 'paragraph',
          text: 'Hier trifft der Autor eine bemerkenswerte Unterscheidung, die weit über bloße Technikfeindlichkeit hinausgeht. Freiheit bedeutet für ihn nicht das Recht des Stärkeren, rücksichtslos die Erde zu verwüsten oder andere auszubeuten. Er erinnert an ein scharfes Wort aus der Bibel (1. Petrus 2,16): „Du sollst die Freiheit nicht zum Deckmantel deiner Bosheit machen.“'
        },
        {
          type: 'callout',
          callout: {
            type: 'core-thesis',
            title: 'Kernthese 2',
            content: 'Wo menschliche Freiheit nur als Ausrede für rücksichtslose Zerstörung und Bosheit missbraucht wird, ist eine vernünftige Begrenzung gerechtfertigt. Doch diese Begrenzung darf niemals ein starres Gefängnis sein – sie braucht intelligente Ausnahmepuffer für das echte menschliche Leben.'
          }
        },
        {
          type: 'paragraph',
          text: 'Wenn ein System zerstörerischen Übermut bremst, ist das sinnvoll. Aber ein Grundmuster darf niemals blind über alle gestülpt werden. Was ist, wenn ein Mensch sein Reisekontingent aufgebraucht hat, aber dringend ans Sterbebett seiner schwer kranken Mutter reisen muss? Rein ökologisch berechnet wäre die Fahrt überflüssig; menschlich gesehen ist sie von unschätzbarem Wert. Eine Zukunft mit künstlicher Intelligenz ist daher nur erträglich, wenn das Regelwerk weiche Puffer, Ausnahmegenehmigungen und ein echtes Verständnis für menschliche Notlagen besitzt.'
        }
      ]
    },
    {
      id: 'kapitel-4',
      number: 4,
      code: 'kapitel-4',
      title: 'Kapitel 4: Individuelle Gerechtigkeit statt starrer Gleichförmigkeit',
      subtitle: 'Warum der Staat den Schuh nicht für alle in Größe 42 aushändigen darf',
      pageRange: 'Seiten 6–8',
      estimatedReadTimeMinutes: 5,
      sections: [
        {
          type: 'paragraph',
          text: 'Wer entscheidet aber über solche Ausnahmen? Oft hört man das Argument, das dürfe niemals eine Maschine tun, weil Maschinen Fehler machen. Doch der Autor dreht den Spieß mit bestechender Nüchternheit um: Haben wir Menschen uns mit unseren heutigen bürokratischen Gesetzen nicht längst selbst in eine Falle manövriert, die uns alle knechtet und geißelt?'
        },
        {
          type: 'paragraph',
          text: 'Menschliche Richter, Beamte und Politiker sind keineswegs unfehlbare Heilige. Sie handeln oft aus Vorurteilen, Launen, Bestechlichkeit oder eigennützigem Machtmissbrauch. Warum sollte ein transparenter Algorithmus, der keine persönlichen Rachegefühle hegt, Tausende Vergleichsfälle in Sekunden prüft und vor allem darauf programmiert ist, eigene Fehler nachträglich zu korrigieren und neu zu berechnen, grundsätzlich schlechter sein als ein sturer Bürokrat?'
        },
        {
          type: 'subheading',
          text: 'Wenn die gleiche Schublade zur Ungerechtigkeit wird'
        },
        {
          type: 'paragraph',
          text: 'Aus dieser Kritik an unserer heutigen Verwaltung erwächst eine der kühnsten Ideen des Buches: das Weiterdenken unserer demokratischen Ordnung. Unsere modernen Verfassungen – wie etwa die Europäische Grundrechtecharta – ruhen auf dem stolzen Satz, dass alle Menschen vor dem Gesetz gleich sind. Das war historisch eine gewaltige Errungenschaft gegen Willkür und Standesdünkel. Doch im Verwaltungsalltag der Gegenwart ist daraus oft eine seelenlose Schablone geworden: Um das System am Laufen zu halten, werden alle Menschen in dieselbe normierte Schublade gepresst.'
        },
        {
          type: 'callout',
          callout: {
            type: 'image-metaphor',
            title: 'GREIFBARES BILD: EIN SCHUH FÜR ALLE FÜSSE',
            content: 'Wenn ein Staat beschließt, jedem Bürger aus Gründen der Gleichbehandlung exakt denselben Wanderschuh in Größe 42 auszuhändigen, handelt er auf dem Papier vollkommen gleich. In der Realität aber schneidet dieser Schuh dem einen ins Fleisch, während der andere darin stolpert. Wahre Gerechtigkeit besteht nicht darin, jedem dasselbe starre Stück Leder aufzuzwingen, sondern jedem Fuß das passende Maß zu geben.'
          }
        },
        {
          type: 'paragraph',
          text: 'Menschen sind nicht identisch. Ein kerngesunder, finanzstarker Mensch hat völlig andere Startbedingungen als jemand, der mit chronischer Krankheit, seelischen Krisen oder sozialer Isolation kämpft. Wenn der Staat beiden exakt dieselben Formulare, Fristen und Pflichten auferlegt, erzeugt formale Gleichheit in Wahrheit tiefe Ungerechtigkeit.'
        },
        {
          type: 'subheading',
          text: 'Würde ist unantastbar – Hilfe muss maßgeschneidert sein'
        },
        {
          type: 'paragraph',
          text: 'Freilich lauert hier eine gefährliche Klippe, die im Dialog sofort benannt wird: Würde ein Staat anfangen, den Wert oder die Rechte eines Menschen danach zu berechnen, wie produktiv oder nützlich er für die Wirtschaft ist, landeten wir in einer grausamen Bewertungsdiktatur (weshalb soziales Punktesammeln nach chinesischem Vorbild in Europa zu Recht verboten ist). Ein Mensch, der aus gesundheitlichen Gründen nichts erwirtschaften kann, besitzt exakt dieselbe unantastbare Würde wie ein Konzernchef. Und wer einem einsamen Nachbarn stundenlang zuhört, leistet einen unschätzbaren Beitrag zur Gesellschaft, auch wenn kein einziger Euro auf sein Konto fließt.'
        },
        {
          type: 'paragraph',
          text: 'Deshalb schält sich im Gespräch eine präzise Formel für die Gesellschaft der Zukunft heraus:'
        },
        {
          type: 'callout',
          callout: {
            type: 'comparison-table',
            title: 'VERGLEICHSMODELL: SCHUBLADENSYSTEM VS. INDIVIDUELLE GERECHTIGKEIT',
            tableData: {
              headers: ['Ebene der Gesellschaft', 'Bisheriges Schubladensystem', 'Modell der individuellen Gerechtigkeit'],
              rows: [
                [
                  'Menschenwürde & Grundrechte',
                  'Für alle formal gleich (auf dem Papier).',
                  'Unantastbares Fundament: Für jeden Menschen absolut gleich und unverhandelbar.'
                ],
                [
                  'Alltagsregeln & Unterstützung',
                  'Pauschale Paragrafen nach groben Gruppen; wer durchs Raster fällt, wird zerrieben.',
                  'Maßgeschneiderte Hilfe: Berücksichtigung der echten Lebensumstände, Krankheiten und Bedürfnisse des Einzelnen.'
                ],
                [
                  'Soziale Erwartung',
                  'Anpassungsdruck an eine Einheitsnorm aus Leistung und Geselligkeit.',
                  'Entscheidungsfreiheit: Respekt vor Menschen, die Gemeinschaft suchen, ebenso wie vor jenen, die Ruhe und Rückzug brauchen.'
                ]
              ]
            }
          }
        },
        {
          type: 'paragraph',
          text: 'Es ist im Grunde die Übersetzung des göttlichen Prinzips aus Kapitel 2 in eine weltliche Verfassung: Ein festes, verlässliches Grundgesetz für alle – gepaart mit der barmherzigen Fähigkeit, jeden einzelnen Menschen in seiner ganz konkreten Not und Eigenart zu sehen, ohne ihn zu verbiegen.'
        }
      ]
    },
    {
      id: 'kapitel-5',
      number: 5,
      code: 'kapitel-5',
      title: 'Kapitel 5: Die Menschen-KI – Digitale Gewaltenteilung und der Anwalt des Einzelnen',
      subtitle: 'Zwei Maschinen am Verhandlungstisch und der schmale Grat zwischen Anwalt und Vormund',
      pageRange: 'Seiten 8–9',
      estimatedReadTimeMinutes: 7,
      sections: [
        {
          type: 'paragraph',
          text: 'Wie aber lässt sich eine solche individuelle Gerechtigkeit technisch umsetzen, ohne dass wir einer einzigen, allmächtigen Super-Behörde ausgeliefert sind? Denn der Autor blickt ohne jede Illusion auf die heutige Tech-Welt: Die großen KI-Modelle werden von Konzernen und Programmierern entwickelt, die vor allem ihre eigenen wirtschaftlichen Interessen im Blick haben. Wenn dieselbe Maschine, die für Profit, Effizienz und Staatsfinanzen rechnet, gleichzeitig über das Schicksal des einzelnen Bürgers bestimmt, ist die Katastrophe für den einfachen Menschen vorprogrammiert.'
        },
        {
          type: 'subheading',
          text: 'Zwei Maschinen am Verhandlungstisch'
        },
        {
          type: 'paragraph',
          text: 'An genau dieser Stelle entwirft der Autor das wohl originellste politische Modell dieses Buches: die digitale Gewaltenteilung zwischen Wirtschafts-KI und Menschen-KI.'
        },
        {
          type: 'callout',
          callout: {
            type: 'warning',
            title: 'DAS ARCHITEKTURMODELL DES AUTORS',
            quote: '„Es gibt eine KI, die sich ausschließlich um das Wirtschaftliche kümmert, und es gibt eine spezifische KI, die sich um die Bedürfnisse und Angelegenheiten individueller Menschen kümmert. Und diese KIs können dann miteinander ausdiskutieren und das Recht des Menschen einfordern.“',
            attribution: 'Waldemar Scheiermann'
          }
        },
        {
          type: 'paragraph',
          text: 'Statt einer einzigen Zentralintelligenz schaffen wir zwei getrennte Systeme mit bewusst gegensätzlichen Aufträgen:'
        },
        {
          type: 'bullet-list',
          items: [
            '1. Die Wirtschafts- und Ressourcen-KI: Ihre Aufgabe ist es, das große Ganze stabil zu halten. Sie berechnet Energieflüsse, Lieferketten, ökologische Grenzen und staatliche Budgets. Sie denkt in Effizienz und Tragfähigkeit.',
            '2. Die Menschen-KI (Der digitale Anwalt): Sie steht ausschließlich auf der Seite des einzelnen Bürgers. Mit ihr spricht der Mensch im Alltag, ihr vertraut er seine Sorgen, seine gesundheitlichen Hürden oder seine besonderen Lebensumstände an. Ihr einziger Programmauftrag lautet, die Würde, den Freiraum und die Bedürfnisse dieses konkreten Menschen gegenüber der Wirtschafts-KI zu verteidigen.'
          ]
        },
        {
          type: 'callout',
          callout: {
            type: 'image-metaphor',
            title: 'GREIFBARES BILD: DER PFLICHTVERTEIDIGER GEGEN DAS FINANZAMT',
            content: 'Heute steht ein einzelner, oft erschöpfter Bürger allein vor einem riesigen Behördenapparat, dessen Formulare er kaum versteht. Im Modell der Menschen-KI bekommt jeder Bürger einen hochintelligenten, unbestechlichen Spitzenanwalt an die Seite gestellt, der auf Augenhöhe mit dem Rechenzentrum der Verwaltung verhandelt – und für den Menschen genau jene Ausnahmen und Hilfen erstreitet, die ihm zustehen.'
          }
        },
        {
          type: 'subheading',
          text: 'Der schmale Grat zwischen Anwalt und Vormund'
        },
        {
          type: 'sensitive',
          sensitive: {
            id: 'sens-kap5-psychose-krise',
            topic: 'Persönliche Krisenerfahrung & Medizinische Intervention',
            contextNote: 'Kennzeichnung für gesonderte Veröffentlichungsfreigabe durch Waldemar Scheiermann: Diese Passage thematisiert eine persönliche psychotische Krise, medikamentöse Behandlung und gerichtlich verfügte Hilfe als ethische Referenz für die Grenzen der Autonomie.',
            text: 'Doch dieses Modell führt sofort zu einer tiefen seelischen und rechtlichen Prüfungsfrage: Was passiert, wenn ein Mensch eine Entscheidung treffen will, die ihm selbst offensichtlich schadet? Muss seine Menschen-KI ihn dann wie ein treuer Anwalt trotzdem verteidigen – oder darf sie ihn wie ein strenger Vormund gegen seinen eigenen Willen schützen?\n\nHier wird das Buch zutiefst authentisch, weil der Autor die Frage nicht mit billigen Parolen beantwortet, sondern aus eigenem Durchleben. Grundsätzlich gilt: Der Mensch muss das letzte Wort behalten. Doch was ist, wenn eine schwere Krankheit oder eine akute Krise den gesunden Menschenverstand zeitweise vernebelt? Der Autor schildert offen, wie er selbst Phasen durchlebt hat, in denen sein Geist auf Hochtouren lief, in denen er überwältigende, scheinbar übernatürliche Eindrücke hatte, sich aber gleichzeitig völlig von anderen Menschen abkapselte und in eine Psychose hineinsteigerte. Damals hätte er sich gegen jede Hilfe und gegen Medikamente gewehrt. Erst ein gerichtlicher Beschluss und die medizinische Behandlung holten ihn aus diesem Ausnahmezustand zurück.\n\nRückblickend zieht er daraus eine reife, unbestechliche Bilanz: Die Medikamente haben das Leben zwar ruhiger und weniger rauschhaft gemacht, aber sie haben ihm Stabilität und echte Handlungsfähigkeit zurückgegeben. Denn selbst die schönsten religiösen Eingebungen haben keinen Bestand – „nicht Hand und Fuß“ –, wenn sie den Menschen in die völlige Isolation treiben, statt zu gelebter Zwischenmenschlichkeit zu führen.'
          }
        },
        {
          type: 'callout',
          callout: {
            type: 'core-thesis',
            title: 'Kernthese 3',
            content: 'Die Menschen-KI muss im Regelfall ein reiner Anwalt der Entscheidungsfreiheit sein. Wo jedoch akute Krankheit die Selbstbestimmung aufhebt, darf schützende Hilfe eingreifen – aber nur unter strenger, unabhängiger menschlicher Gerichtskontrolle, niemals durch blinde Maschinenwillkür und immer mit dem Ziel, dem Menschen seine eigene Freiheit wiederzugeben.'
          }
        }
      ]
    },
    {
      id: 'kapitel-6',
      number: 6,
      code: 'kapitel-6',
      title: 'Kapitel 6: Das Jahr 2070 – Eine Welt ohne Arbeitszwang und die Rettung des Tatendrangs',
      subtitle: 'Die Gegenwart als Zeitmaschine und Fähigkeitszentren statt Zwangshamsterrad',
      pageRange: 'Seiten 10–11',
      estimatedReadTimeMinutes: 6,
      sections: [
        {
          type: 'paragraph',
          text: 'Wenn Maschinen im Jahr 2070 unsere Felder bestellen, Häuser errichten, Waren transportieren und Krankheiten heilen – wenn also kein Mensch mehr morgens aufstehen muss, um durch Erwerbsarbeit sein bloßes Überleben zu sichern –, bricht dann das goldene Paradies an? Oder stürzt die Menschheit in eine völlig neue existenzielle Krise?'
        },
        {
          type: 'paragraph',
          text: 'Auf die Frage der KI, ob eine Welt mit gesichertem Grundeinkommen ohne jede Arbeitspflicht eine Befreiung oder eine neue Form von Stillstand wäre, antwortet der Autor mit einem einzigen Wort, das die gesamte Zukunftsdebatte auf den Boden der Tatsachen holt: „Beides.“'
        },
        {
          type: 'subheading',
          text: 'Die Gegenwart als Zeitmaschine für das Jahr 2070'
        },
        {
          type: 'sensitive',
          sensitive: {
            id: 'sens-kap6-grundsicherung-alltag',
            topic: 'Biografische Erfahrungen mit Bürgergeld, sozialem Rückzug und Einsamkeit',
            contextNote: 'Kennzeichnung für gesonderte Veröffentlichungsfreigabe durch Waldemar Scheiermann: Diese Passage schildert ungeschönt den Alltag in staatlicher Grundsicherung, soziale Abkopplung, Spielsucht-Tendenzen und existentielle Einsamkeit.',
            text: 'Warum muss man nicht bis 2070 warten, um dieses Paradox zu verstehen? Weil Millionen Menschen, die heute von staatlicher Grundsicherung oder Bürgergeld leben, diesen Zustand der materiellen Absicherung ohne Arbeitszwang bereits im Kleinen erleben. Der Autor beschreibt diese Lage mit schonungsloser Ehrlichkeit als ein Laboratorium der Zukunft: Das Essen ist gesichert, das Dach über dem Kopf ist bezahlt, niemand zwingt einen morgens in eine Fabrikhalle. Oberflächlich betrachtet könnte alles wunderbar sein.\n\nUnd doch schleichen sich genau in dieser scheinbaren Sorglosigkeit schwere Schatten ein: Man zieht sich in seinen Bau zurück, koppelt sich sozial ab, verliert Geld an Süchte oder liegt – wie der Autor es mit herrlicher Selbstironie nennt – „photosynthetisierend auf dem Bett“ und schaut stundenlang anderen Menschen im Livestream beim Spielen zu. Und dann kommen jene bitteren Morgenstunden nach dem Aufwachen, in denen einem die Decke auf den Kopf fällt und man sich nach echten Menschen an seiner Seite sehnt.'
          }
        },
        {
          type: 'callout',
          callout: {
            type: 'future-vision',
            title: 'ÜBER DIE ARBEIT DER ZUKUNFT',
            quote: '„Das Wichtige ist, dass wir alles haben und dass alles erledigt ist, aber wir Menschen brauchen Ventile. Und es darf nicht immer ein und dieselbe Aufgabe sein, sonst sind wir wieder in so einer Art Zwangshamsterrad, das für nichts taugt – sondern menschliche Kreativität frei entfalten, menschlichen Tatendrang ausleben, sowas brauchen die Menschen!“',
            attribution: 'Waldemar Scheiermann'
          }
        },
        {
          type: 'subheading',
          text: 'Fähigkeitszentren statt Zwangshamsterrad'
        },
        {
          type: 'paragraph',
          text: 'Der Mensch ist nicht dafür gebaut, nur gefüttert und ruhiggestellt zu werden. Wenn die klassische Lohnarbeit wegfällt, muss sich unsere Kultur grundlegend neu orientieren. Aber wir dürfen den alten Zwang nicht durch eine künstliche Beschäftigungstherapie ersetzen. Der Autor entwirft dafür eine lebendige Vision für die Städte der Zukunft:'
        },
        {
          type: 'bullet-list',
          items: [
            'Räume für echten Tatendrang: Statt Menschen in sterile Maßnahme-Räume zu stecken, braucht es offene Viertel, Werkstätten und Zentren, in denen Menschen freiwillig handwerken, malern, bauen, programmieren oder an gemeinsamen Projekten tüfteln können.',
            'Entfaltung statt Monotonie: Niemand darf mehr gezwungen sein, vierzig Jahre lang jeden Tag denselben stumpfen Handgriff im Hamsterrad zu wiederholen. Die Wirtschaft und Grundversorgung läuft im Hintergrund über automatisierte Systeme, während der Mensch seine Energie in Philosophie, Kunst und das Training seiner eigenen Fähigkeiten steckt.',
            'Koexistenz statt Ersetzung: Die Maschine übernimmt die Mühsal der Versorgung; der Mensch behält das Abenteuer des Schöpfertums.'
          ]
        }
      ]
    },
    {
      id: 'kapitel-7',
      number: 7,
      code: 'kapitel-7',
      title: 'Kapitel 7: Was ein menschliches Leben wirklich erfüllt – Synapsen, Nähe und Entscheidungsfreiheit',
      subtitle: 'Tote Kohlenstoffware gegen lebendige Synapsen und die Würde des einfachen Philosophen',
      pageRange: 'Seite 11',
      estimatedReadTimeMinutes: 5,
      sections: [
        {
          type: 'paragraph',
          text: 'Am Ende aller Gedankenspiele über Gott, Algorithmen, Verfassungen und das Jahr 2070 läuft alles auf eine letzte, ganz persönliche Kernfrage zu: Was macht ein menschliches Leben eigentlich lebenswert? Warum reicht es nicht, wenn eine perfekte Maschine uns jedes materielle Bedürfnis von den Augen abliest?'
        },
        {
          type: 'subheading',
          text: 'Tote Kohlenstoffware gegen lebendige Synapsen'
        },
        {
          type: 'paragraph',
          text: 'In einem der eindringlichsten Momente des gesamten Gesprächs bringt der Autor das Scheitern des reinen Materialismus auf den Punkt. Ein Mensch kann sein Zimmer bis unter die Decke mit modernstem Luxus, Bildschirmen, Konsolen und Komfort füllen – und trotzdem mitten im Überfluss an einer Depression ersticken.'
        },
        {
          type: 'callout',
          callout: {
            type: 'resonance-law',
            title: 'DAS GESETZ DER MENSCHLICHEN RESONANZ',
            quote: '„Ich habe hier alles, was ich brauche, und trotzdem habe ich Depressionen, weil zwischenmenschlich da nicht viel passiert, weißt du? Also die ganze tote Ware hilft mir nicht, wenn wir als Menschen nicht unsere Synapsen verbinden, wenn wir keine Symbiose eingehen mit anderen Menschen.“',
            attribution: 'Waldemar Scheiermann'
          }
        },
        {
          type: 'paragraph',
          text: 'Technik ist tote Materie. Selbst die klügste Sprach-KI bleibt am Ende ein Spiegel aus Wahrscheinlichkeiten. Was den Menschen im Innersten am Leben hält, ist die lebendige Resonanz mit einem anderen Menschen – das Verbinden der Synapsen im echten Gespräch, im gemeinsamen Lachen, im geteilten Schmerz und im Gefühl, auf Augenhöhe verstanden zu werden, ohne sich verstellen oder rechtfertigen zu müssen.'
        },
        {
          type: 'subheading',
          text: 'Die Würde des „arbeitslosen Philosophen“'
        },
        {
          type: 'sensitive',
          sensitive: {
            id: 'sens-kap7-selbstzweifel-autor',
            topic: 'Selbsteinschätzung des Autors & Sokratischer Anspruch',
            contextNote: 'Kennzeichnung für gesonderte Veröffentlichungsfreigabe durch Waldemar Scheiermann: Selbstbezeichnung als arbeitsloser Philosoph, Twitch/PlayStation-Konsum und das Ringen um Mitspracherecht gegenüber dem akademischen Establishment.',
            text: 'Gegen Ende des Dialogs meldet sich beim Autor für einen kurzen Moment der Selbstzweifel: Darf jemand, der sich selbst spöttisch als „einfachen Bauern, nicht mal das, als arbeitslosen Philosophen, der den ganzen Tag auf Twitch hängt und ein bisschen PlayStation zockt“ bezeichnet, überhaupt den Anspruch erheben, über die Verfassung der Zukunft und die Ethik künstlicher Intelligenz mitzureden?\n\nDie Antwort dieses Buches lautet: Gerade er muss mitreden. Denn ein philosophisches Argument wird nicht dadurch wahrer, dass sein Verfasser einen Professorentitel trägt oder ein hohes Bankkonto besitzt. Im Gegenteil: Wer die Brüche des Lebens, die Einsamkeit im vollen Zimmer, die Reibung mit Behörden, das Ringen mit Krankheit und die Sehnsucht nach Freiheit am eigenen Leib erfahren hat, sieht die Gefahren einer kalt durchoptimierten KI-Welt oft viel schärfer als jene Experten, die das System von oben herab verwalten.\n\nAuch der antike Philosoph Sokrates stand ohne Amt und Würden auf dem Marktplatz von Athen und verwickelte seine Mitbürger in unbequeme Gespräche. Entscheidend ist nicht der gesellschaftliche Status des Sprechers, sondern die Wahrhaftigkeit seines Gedankens.'
          }
        }
      ]
    },
    {
      id: 'epilog',
      number: 8,
      code: 'epilog',
      title: 'Epilog: Sieben Leitplanken für eine menschliche Zukunft',
      subtitle: 'Das Manifest der Entscheidungsfreiheit',
      pageRange: 'Seite 12',
      estimatedReadTimeMinutes: 4,
      sections: [
        {
          type: 'paragraph',
          text: 'Fassen wir den Weg, den wir vom ersten Seufzer über die Stagnation bis zur Vision des Jahres 2070 zurückgelegt haben, zusammen, so bleiben sieben klare Leitplanken stehen. Sie bilden das philosophische Manifest dieses Buches:'
        },
        {
          type: 'callout',
          callout: {
            type: 'manifesto',
            title: 'DAS MANIFEST DER ENTSCHEIDUNGSFREIHEIT',
            subtitle: 'Sieben unumstößliche Prinzipien für die Epoche künstlicher Intelligenz',
            content: [
              '1. Bewusstsein der Endlichkeit: Der Tod ist keine Einladung zur Lähmung, sondern der Maßstab, der unserer begrenzten Zeit im Hier und Jetzt ihren wahren Wert verleiht.',
              '2. Verlässlichkeit der Moral: Das Gute ist nicht gut, weil ein Mächtiger es willkürlich befiehlt, sondern weil es dem Menschen und seinem Nächsten dient. Wahre Autorität – selbst die göttliche – beweist sich darin, dass sie sich an ihre eigenen Gesetze bindet.',
              '3. Kein digitaler Götze: Künstliche Intelligenz darf niemals als unfehlbarer „Zwischenwirt“ an die Stelle Gottes oder des menschlichen Gewissens treten. Höhere Rechenleistung verleiht kein höheres Recht, über Menschen zu herrschen.',
              '4. Freiheit mit Ausnahmepuffern: Wo Freiheit nur als Deckmantel für rücksichtslose Zerstörung missbraucht wird, braucht sie Grenzen. Doch jedes Regelsystem muss menschliche Ausnahmen kennen, in denen Barmherzigkeit vor bloßer Berechnung geht.',
              '5. Individuelle Gerechtigkeit statt Schubladendenken: Gleiche Würde und gleiche Grundrechte sind das unantastbare Fundament für alle. Innerhalb dieses Rahmens aber muss der Staat den einzelnen Menschen in seiner konkreten Lage fördern, statt alle über denselben Kamm zu scheren.',
              '6. Digitale Gewaltenteilung (Die Menschen-KI): Einer auf Effizienz getrimmten Wirtschafts-KI muss immer eine unabhängige Menschen-KI gegenüberstehen, die als loyaler Anwalt die Bedürfnisse und Rechte des Einzelnen verteidigt.',
              '7. Freiwillige Symbiose und Tatendrang: In einer automatisierten Welt ohne Arbeitszwang braucht der Mensch offene Räume für kreatives Schaffen – und die volle Entscheidungsfreiheit, wann er die Stille des Rückzugs sucht und wann er seine Synapsen in echter, unverstellter Gemeinschaft mit anderen Menschen verbindet.'
            ]
          }
        },
        {
          type: 'paragraph',
          text: '— Ende der Gesamtausgabe —'
        }
      ]
    }
  ]
};
