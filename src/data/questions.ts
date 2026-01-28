export interface Requirement {
  category: string;
  title: string;
  description?: string;
  link?: string;
}

export interface Question {
  id: string;
  title: string;
  hasDocument?: boolean;
  hasDeviation?: boolean;
  isAnswered?: boolean;
  answerText?: string;
  requiresDocumentation?: boolean;
  veilederRevisorText?: string;
  veilederText?: string;
  kravLinks?: Requirement[];
}

export interface QuestionGroup {
  id: string;
  title: string;
  questions: Question[];
}

export interface MainCategory {
  id: string;
  number: number;
  title: string;
  questionGroups: QuestionGroup[];
}

export const questionsData: MainCategory[] = [
  {
    id: 'category-1',
    number: 1,
    title: 'Generelle krav til gården',
    questionGroups: [
      {
        id: 'group-1-1',
        title: '1.1 Oversikt over dokumentasjon, analyseresultater og sertifiseringer',
        questions: [
          {
            id: '1.1.1',
            title: 'Oversikt over alle driftsmidler du har kjøpt og produkter du har solgt?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Ja, jeg fører oversikt i Excel-ark hvor alle innkjøp av fôr, gjødsel og plantevernmidler er registrert med dato og leverandør. For salg av produkter har jeg kvitteringer fra Tine og Nortura som viser alle melke- og kjøttleveranser gjennom året.',
            requiresDocumentation: true,
            veilederRevisorText: 'Kontroller at dokumentasjonen inkluderer:\n- Alle innkjøp av driftsmidler (fôr, gjødsel, plantevernmidler)\n- Leverandørkvitteringer eller fakturaer\n- Salgsoppgjør fra varemottak (meieri, slakteri)\n- Datoer og mengder må være tydelig dokumentert\n\nVurder om oversikten er fullstendig for hele perioden.',
            veilederText: 'Du må kunne vise oversikt over:\n- Hva du har kjøpt inn til gården (fôr, gjødsel, frø, plantevernmidler)\n- Hva du har solgt fra gården (melk, kjøtt, korn, andre produkter)\n- Kvitteringer og fakturaer som bekrefter kjøp og salg\n\nDette er viktig for å dokumentere sporbarhet i produksjonen.',
            kravLinks: [
              {
                category: 'KSL Sporbarhet',
                title: 'Krav 1.1 - Dokumentasjon av sporbarhet',
                description: 'Virksomheten skal kunne dokumentere kjøp og salg av produkter',
                link: 'https://www.ksl.no/regelverk/sporbarhet'
              }
            ]
          },
          {
            id: '1.1.2',
            title: 'En plan for håndtering eller tilbakekalling av helseskadelige produkter, inkludert varsling til Mattilsynet og varemottaker?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har en skriftlig beredskapsplan som ligger i kontoret med telefonnumre til Mattilsynet, Tine og våre faste kontakter. Planen beskriver hvordan vi skal varsle ved mistanke om helseskadelige produkter, og alle ansatte er informert om prosedyren.',
            veilederRevisorText: 'Sjekk at beredskapsplanen inneholder:\n- Kontaktinformasjon til Mattilsynet\n- Kontaktinformasjon til varemottakere\n- Beskrivelse av varslingsprosedyrer\n- Rutiner for tilbakekalling\n\nPlan må være kjent for alle som arbeider på gården.',
            veilederText: 'Du må ha en skriftlig plan som beskriver:\n- Hvordan du varsler Mattilsynet hvis noe går galt\n- Hvordan du varsler de som har kjøpt produktene dine\n- Hvordan du kan kalle tilbake produkter hvis det er nødvendig\n\nHusk å ha viktige telefonnumre lett tilgjengelig.',
            kravLinks: [
              {
                category: 'KSL Beredskap',
                title: 'Krav 1.2 - Beredskapsplan',
                description: 'Virksomheten skal ha en plan for håndtering av helseskadelige produkter'
              }
            ]
          },
          {
            id: '1.1.3',
            title: 'Arkivert analyseresultater, vedtak og tilbakemeldinger fra varemottaker og myndigheter?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Alle dokumenter er samlet i en perm i kontoret, organisert etter år. Her ligger melkekvalitetsrapporter fra meieriet, jordanalyser fra Eurofins, og all korrespondanse med Mattilsynet. Eldste dokumenter går 5 år tilbake.',
            veilederRevisorText: 'Kontroller at arkivet inneholder:\n- Analyseresultater (melk, jord, vann, etc.)\n- Vedtak fra Mattilsynet og andre myndigheter\n- Tilbakemeldinger fra varemottakere\n- Dokumenter må være oppbevart minst 5 år\n\nSjekk at dokumentene er organisert og lett tilgjengelige.',
            veilederText: 'Du skal oppbevare dokumentasjon fra:\n- Analyser av melk, jord, vann\n- Vedtak og tilsyn fra Mattilsynet\n- Tilbakemeldinger fra meieriet eller slakteriet\n\nDokumentene må oppbevares i minst 5 år og være lett å finne frem.',
            kravLinks: [
              {
                category: 'KSL Dokumentasjon',
                title: 'Krav 1.3 - Arkivering av dokumentasjon',
                description: 'Dokumentasjon skal oppbevares i minimum 5 år'
              }
            ]
          },
          {
            id: '1.1.4',
            title: 'Kontrollert og sertifisert utstyr i tråd med forskrifter?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Melkeanlegget ble kontrollert av Tine i mars i år. Sprøyteutstyr ble funksjonstestet av godkjent verksted i april 2024. Dokumentasjon på begge kontroller ligger tilgjengelig.',
            veilederRevisorText: 'Verifiser at følgende utstyr er kontrollert:\n- Melkeanlegg (årlig kontroll)\n- Sprøyteutstyr (påkrevd funksjonstest)\n- Annet sertifiseringspliktig utstyr\n\nDokumentasjon på kontroller må være tilgjengelig.',
            veilederText: 'Utstyr som må kontrolleres regelmessig:\n- Melkeanlegg: Kontroll hvert år\n- Sprøyteutstyr: Funksjonstest etter forskrift\n- Annet utstyr som krever sertifisering\n\nBehold dokumentasjonen fra kontrollene.',
            kravLinks: [
              {
                category: 'KSL Utstyr',
                title: 'Krav 1.4 - Kontroll av utstyr',
                description: 'Utstyr skal kontrolleres og sertifiseres etter forskrifter'
              }
            ]
          }
        ]
      },
      {
        id: 'group-1-2',
        title: '1.2 Gjødslingsplan og jordprøver',
        questions: [
          {
            id: '1.2.1',
            title: 'Har du en gyldig gjødslingsplan og skiftekart for året, basert på representative jordprøver?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Gjødslingsplanen for 2025 er utarbeidet av Norsk Landbruksrådgiving basert på jordprøver tatt høsten 2023. Alle skifte er kartlagt med GPS, og planen viser anbefalt gjødselmengde per dekar for hvert skifte.'
          },
          {
            id: '1.2.2',
            title: 'Noterer du gjødselmengdene som brukes?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Ja, vi fører gjødseljournal hvor vi noterer dato, skifte, type gjødsel og mengde for hver spredning. Dette gjør vi både for husdyrgjødsel og mineralgjødsel. Journalen oppdateres samme dag som spredningen skjer.'
          }
        ]
      },
      {
        id: 'group-1-3',
        title: '1.3 Lagring og bruk av husdyrgjødsel',
        questions: [
          {
            id: '1.3.1',
            title: 'Er husdyrgjødsel kun spredt på dyrket jord eller godkjent innmarksbeite?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'All husdyrgjødsel spres kun på våre registrerte jordbruksarealer som er klassifisert som fulldyrket jord. Vi sprer ikke på utmark eller på arealer som ikke er godkjent for gjødselspredning.'
          },
          {
            id: '1.3.2',
            title: 'Har du spredt husdyrgjødsel kun i perioden 15. februar–1. november, og på snø- og frostfri mark?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Ja, vi følger spredningskalenderen nøye. I år har all spredning skjedd mellom 1. april og 15. september på snø- og frostfri mark. Vi sjekker alltid værmelding og markforhold før spredning.'
          },
          {
            id: '1.3.3',
            title: 'Dersom gjødsel spres uten nedmolding/nedfelling, gjøres dette innen 1. september eller senere dato fastsatt av kommunen?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi bruker slepesko på hele arealet, så all gjødsel felles ned i graset. På åpen åker moldes gjødselen alltid ned. Siste spredning uten nedmolding ble gjort 25. august på etablert eng.'
          },
          {
            id: '1.3.4',
            title: 'Ved spredning på åpen åker, moldes gjødsla ned innen 18 timer?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Ja, vi harver alltid innen 6-8 timer etter spredning på åpen åker. Dette er standard praksis hos oss for å minimere ammoniakktap og lukt. Siste spredning på åker var 15. mai, og gjødselen ble moldet ned samme dag.'
          },
          {
            id: '1.3.5',
            title: 'Har du kontrollert gjødsellageret de siste 12 månedene?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Gjødsellager ble inspisert 10. mars 2025. Ingen lekkasjer eller sprekker ble funnet. Vi kontrollerer nivået hver måned og sjekker visuelt for tegn til slitasje. Siste omfattende vedlikehold var i 2022.',
            veilederRevisorText: 'Kontroller at bonden:\n- Har inspisert gjødsellageret siste 12 måneder\n- Har dokumentert inspeksjonen (dato, funn, tiltak)\n- Sjekker regelmessig for lekkasjer og sprekker\n- Utfører nødvendig vedlikehold\n\nVurder om gjødsellageret er i forsvarlig stand.',
            veilederText: 'Du må kontrollere gjødsellageret minst én gang i året:\n- Sjekk for lekkasjer og sprekker\n- Kontroller at nivåmålere fungerer\n- Se etter tegn til korrosjon eller slitasje\n- Dokumenter datoen for inspeksjonen og eventuelle funn\n\nUtfør nødvendig vedlikehold for å unngå utslipp.',
            kravLinks: [
              {
                category: 'Lovkrav',
                title: 'Forskrift om gjødselvarer mv. av organisk opphav',
                description: 'Krav til vedlikehold og kontroll av gjødsellager'
              }
            ]
          },
          {
            id: '1.3.6',
            title: 'Har du nok lagringskapasitet (min. 8 måneder)?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har gjødsellager på 850 m³ som dekker ca. 9-10 måneders produksjon med dagens dyretall (45 mjølkekyr). Lageret ble utvidet i 2020, og kapasiteten er beregnet av rådgiver fra Tine.'
          },
          {
            id: '1.3.7',
            title: 'Er husdyrgjødsel lagret på bakken skjermet mot overflatevann og plassert slik at avrenning hindres?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har midlertidig stabellagring av fast gjødsel på betongplate med oppdemt kant. Platen har fall mot midten og samlebrønn slik at væske ikke renner ut. Plasseringen er på høydedrag, langt fra bekker og drenering.'
          },
          {
            id: '1.3.8',
            title: 'Samler du opp gjødsel fra luftegårder og utendørs talle minst én gang årlig?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Gjødsel fra luftegården samles opp to ganger årlig, i mai og oktober. Gjødselen kjøres direkte til gjødsellager eller spres på eng. Siste opprydding var 5. oktober 2024.'
          }
        ]
      },
      {
        id: 'group-1-4',
        title: '1.4 Bruk av avløpsslam, kompost, biorest eller annen organisk gjødsel',
        questions: [
          {
            id: '1.4.1',
            title: 'Følger du gjeldende regelverk og bruksbegrensninger for slike materialer?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi bruker ikke avløpsslam, kompost eller biorest på gården. All gjødsling skjer med egen husdyrgjødsel og handelskjøpt mineralgjødsel.'
          },
          {
            id: '1.4.2',
            title: 'Har du meldt fra til kommunen før bruk av avløpsslam?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Dette er ikke relevant for vår gård da vi ikke bruker avløpsslam.'
          }
        ]
      },
      {
        id: 'group-1-5',
        title: '1.5 Lagring og bruk av plantevernmidler',
        questions: [
          {
            id: '1.5.1',
            title: 'Kan du dokumentere at plantevernmidler kun er brukt av personell med gyldig autorisasjon?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Jeg har gyldig plantevernkurs som ble fornyet i 2023. Autorisasjonsbeviset henger på kontoret. Kun jeg og en ansatt med autorisasjon håndterer og sprøyter plantevernmidler.',
            requiresDocumentation: true,
            veilederRevisorText: 'Dette bør du kontrollere på befaring:\n\n- at bonden har gyldig autorisasjon.\n- At eventuelle ansatte/annen hjelp som bruker har gyldig autorisasjon.\n\nHvis usikker, se presentasjon gitt av Mattilsynet 07.06.24 for revisorene. Ligger under: Nettmøter 2024 --> Presentasjon fra innledere',
            veilederText: 'For å oppfylle dette kravet må du:\n\nSørge for at plantevernmidler kun kan brukes av personer som har autorisasjon. Å bruke plantevernmidler omfatter i denne sammenhengen både å blande slike midler og å spre eller påføre dem.\n\n\nDette er forankret i forskrift om plantevernmidler.\n\n\n\n**Informasjon**\n\nAutorisasjonen er gyldig i ti år fra man avlegger prøve. Dersom det er andre enn du selv som har utført sprøytinga, skal du føre personens navn inn i plantevernjournalen, sammen med en kopi av hans eller hennes autorisasjonsbevis.\n\n\n\nAutorisasjonskravet gjelder ikke for preparater som er godkjent for bruk i hobbyhager og på stueplanter.',
            kravLinks: [
              {
                category: 'Lovkrav',
                title: 'Forskrift om plantevernmidler',
                link: '#'
              }
            ]
          },
          {
            id: '1.5.2',
            title: 'Er plantevernmidlene brukt i samsvar med godkjent etikett?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Ja, vi følger alltid etikettanvisningene nøye. Før hver behandling leser vi instruksjonene på emballasjen og noterer godkjent dosering, påfølgende kultur og behandlingsfrist. Vi sjekker også gjeldende godkjenning i Mattilsynets plantevernmiddelregister.',
            veilederRevisorText: 'Dette bør du kontrollere på befaring:\n\n- bonden kjenner til bruk av merkelapp og regler for godkjenning av plantevernmidler.',
            veilederText: 'For å oppfylle dette kravet må du:\n\n- Følge bruksanvisning som står på merkelappen, og sjekk at merkelappen er godkjent etikett.\n- Ikke å bruke plantevernmidler utenfor det godkjente bruksområdet eller å overskride tillatt dosering/konsentrasjon.\n- Være kjent med gjeldende regler for bruk av plantevernmidler som ikke lenger er godkjent.\n\n\nDette er i henhold til forskrift om plantevernmidler.\n\n\n\n**Informasjon**\n\n \n\nNår et plantevernmiddel ikke lenger er godkjent\n\nHvis et plantevernmiddel mister godkjenningen sin, kan du bruke og oppbevare det i inntil 18 måneder, med mindre Mattilsynet har vedtatt noe annet.\n\n\n\nFølg avviklingsreglene for bruk av preparater som ikke lenger er godkjent, og avviklingsreglene for preparater med gamle etiketter. Se Mattilsynets oversikt over godkjente produkter (lenke under "Krav").',
            kravLinks: [
              {
                category: 'Lovkrav',
                title: 'Forskrift om plantevernmidler',
                link: '#'
              },
              {
                category: 'Lovkrav',
                title: 'Mattilsynet plantevernmidler- Godkjente produkter og virksomheter',
                link: '#'
              }
            ]
          },
          {
            id: '1.5.4',
            title: 'Oppfyller du kravene til integrert plantevern, beskyttelse av vannmiljø, og journalføring?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Ja, jeg fører plantevernjournal og registrerer alle behandlinger digitalt.',
            requiresDocumentation: true,
            veilederRevisorText: 'Hvordan dokumenteres kravet:\n- Fullstendig plantevernjournal (tre deler).\n\nLukkefrist: 1. neste måned.',
            veilederText: 'For å oppfylle dette kravet må du:\n- følge de åtte prinsippene for integrert plantevern\n- gjøre tiltak for å redusere risikoen for forurensning av vann\n- føre tredelt plantevernjournal:\n  1. journal for integrert plantevern\n  2. journal for vannbeskyttelse\n  3. sprøytejournal\n\nDette er forankret i Forskrift om plantevernmidler.\n\n**Informasjon**\nNår du bruker plantevernmidler på gården, skal du føre plantevernjournal. Den består av tre deler:\n\n**Del 1 – journal for integrert plantevern**\nHer beskriver du hvilke prinsipper du har fulgt. Hvis du har brukt kjemikalier, skal du også angi hvilke alternativer du vurderte først. I tillegg skal du oppgi en begrunnelse for valgene du har gjort.\n\n**Del 2 – journal for vannbeskyttelse**\nHer beskriver du tiltak du har truffet for å redusere risikoen for vannforurensning ved sprøyting i nærheten av vannforekomster. Eksempel på tiltak kan være å gjennomføre tiltak til overflatevann og drikkevannkilder, dysevalg og vaskeplasser som reduserer faren for forurensning.\n\n**Del 3 – sprøytejournal**\nHer fører du opplysninger om\n- hvilke skifter og kulturer som er sprøytet\n- hvilke skadegjerere det dreier seg om\n- hvilke preparater som er brukt, og i hvilke doser\n- hvem som har utført sprøytinga\n- dato når sprøytinga er utført\n\nOppbevar sprøytejournalen i minst 3 år.\n\n**Når det andre som står for sprøytinga**\nSom gårdeier er du også ansvarlig for at det blir ført plantevernjournal dersom det er andre som sprøyter. Det skal stå i plantevernjournalen hvilket område plantevernmiddelet er brukt på.\n\nKravet om å føre plantevernjournal gjelder også for bruk av beisemidler til settepoteter og ved bruk av nyttedyr og mikroorganismer. Det skal også føres journal for planteekstrakter og plantevernmidler (inkl. godkjente basisstoff er) som blir brukt i økologisk landbruk.\n\nInformasjon om godkjente basisstoff er finner du på mattilsynet.no.\n\n**Kulturspesifikke veiledninger**\nNorsk Landbruksrådgiving (NLR) har i samarbeid med NIBIO utarbeidet veiledere som viser hvordan du kan bruke de åtte prinsippene for integrert plantevern i utvalgte kulturer. Veilederne gir deg en oversikt over tiltak som har betydning for plantevern, og hver er også med en kort begrunnelse for mer informasjon. Ikke alle foresl åtte tiltak vil passe for alle eller overalt, og veilederne er derfor ikke ment som en liste med krav, men som en hjelp og inspirasjon til å følge forskrift om plantevernmidler.\n\nMal for plantevernjournal og kulturspesifikke veiledere finner du ved å klikke på knappen "Krav".',
            kravLinks: [
              {
                category: 'Informasjon',
                title: 'Mal for plantevernjournal NLR',
                link: '#'
              },
              {
                category: 'Lovkrav',
                title: 'Forskrift om plantevernmidler',
                link: '#'
              },
              {
                category: 'Lovkrav',
                title: 'Forskrift om plantevernmidler',
                description: 'Vedlegg 2: Generelle prinsipper for integrert plantevern',
                link: '#'
              },
              {
                category: 'Lovkrav',
                title: 'Forskrift om plantevernmidler',
                link: '#'
              },
              {
                category: 'Lovkrav',
                title: 'Veileder om avdriftsreduksjon',
                description: 'Veileder om avdriftsreduksjon',
                link: '#'
              },
              {
                category: 'Informasjon',
                title: 'Kulturspesifikke veiledere NIBIO',
                link: '#'
              }
            ]
          },
          {
            id: '1.5.5',
            title: 'Oppbevarer du plantevernmidlene avlåst og merket, og i henhold til eventuelle tilleggskrav som står på etiketten?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Alle plantevernmidler lagres i eget avlåst skap i uthuset, merket med "Plantevernmidler - fare". Produktene står i originalemballasje, og vi har oversikt over beholdning. Temperatur er alltid over frysepunktet.',
            veilederRevisorText: 'Dette bør du kontrollere på befaring:\n\nplantevernmidler oppbevares ihht listen over.\n\n\nLukkefrist: 4+ uker, å rydde i plantevernskapet bør være mulig å gjennomføre forholdsvis raskt. Manglende avlåsning skal rettes umiddelbart (1. i neste mnd).',
            veilederText: 'For å oppfylle dette kravet må du:\n- Sørge for riktig oppbevaring av plantevernmidler, se under.\n\nSlik oppbevarer du plantevernmidler riktig:\n- Oppbevar midlene slik det står på etiketten (f.eks. «lagres frostfritt»).\n- Ha dem i et tett og avlåst skap eller rom som er tydelig merket med giftmerket og ordet «GIFT».\n- Hold rommet eller skapet rent, og sørg for kontinuerlig og effektiv ventilasjon dersom preparatene krever det.\n- Ikke oppbevar annet enn plantevernmidler og eventuelt andre kjemikalier, inkludert flytende gjødselblandinger, i skapet eller rommet.\n- Oppbevar åpne pakninger i en lukket og tett beholder.\n\nDette er i henhold til forskriften om plantevernmidler.',
            kravLinks: [
              {
                category: 'Lovkrav',
                title: 'Forskrift om plantevernmidler',
                link: '#'
              },
              {
                category: 'Informasjon',
                title: 'Veileder til regelverk om plantevernmidler',
                description: 'Fra Mattilsynet',
                link: '#'
              }
            ]
          }
        ]
      },
      {
        id: 'group-1-6',
        title: '1.6 Meldepliktig ugress og planteskadegjørere',
        questions: [
          {
            id: '1.6.1',
            title: 'Følger du opplysningsplikten for meldepliktige skadegjørere og floghavre?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har ingen kjente forekomster av meldepliktige skadegjørere eller floghavre på gården. Alle skifte inspiseres årlig, og vi kjenner til meldeplikten. Ved funn vil vi umiddelbart kontakte Mattilsynet.'
          },
          {
            id: '1.6.2',
            title: 'Informerer du utleier/leietaker om forekomst av slike skadegjørere?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi leier ut et skifte til naboen. I leiekontrakten er det inkludert informasjon om status for ugress og skadegjørere. Ingen problemer er registrert, men vi har årlig dialog om dette ved sesongstart.'
          },
          {
            id: '1.6.3',
            title: 'Har du rutiner for bekjempelse og forebygging av floghavre?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi praktiserer variert vekstskifte med eng, korn og belgvekster. Harving av stubb etter høsting og våronn før såing er fast rutine. Utstyr rengjøres alltid før flytting mellom skifte. Vi kjøper kun sertifisert såkorn.'
          },
          {
            id: '1.6.4',
            title: 'Har du kontrollert og eventuelt bekjempet hønsehirse?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Inspeksjon av alle maisarealer ble gjennomført i august 2024. Ingen hønsehirse ble funnet. Vi er oppmerksomme på problemet da vi har mais i vekstskiftet, og kontrollerer årlig.'
          }
        ]
      },
      {
        id: 'group-1-7',
        title: '1.7 Lagring av driftsmidler, punktutslipp og avfallshåndtering',
        questions: [
          {
            id: '1.7.1',
            title: 'Lagrer du mineralgjødsel sikkert?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Mineralgjødsel lagres i tørt uthus på paller, minimum 2 meter fra vegger. Sekker holdes lukket og er beskyttet mot fukt. Vi holder minimal lagerbeholdning og bestiller gjødsel ved behov gjennom sesongen.'
          },
          {
            id: '1.7.2',
            title: 'Lagrer du fôr slik at det ikke er fare for avrenning?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Grovfôr er lagret i lukket låve og tørkes til minimum 30% tørrstoff før innlegging. Kraftfôr lagres i silo inne i fjøset. Rundballene ute er pakket i plast og står på drenert grunn med god avstand til bekk og drenering.'
          },
          {
            id: '1.7.3',
            title: 'Har du en avfallshåndteringsplan for gården?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har skriftlig plan for kildesortering og avfallshåndtering. Plast leveres til Grønt Punkt, farlig avfall til kommunens mottaksstasjon. Kassert medisin leveres til veterinær. Vi brenner ikke avfall, og har eget område for midlertidig lagring av restavfall.'
          }
        ]
      },
      {
        id: 'group-1-8',
        title: '1.8 Skadegjørere i husdyrrom, lager, sorterings- og foredlingsrom',
        questions: [
          {
            id: '1.8.1',
            title: 'Jobber du systematisk med overvåking og bekjemping av skadedyr som kan påvirke mattryggheten?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har rottebokser plassert rundt fjøs og lager som kontrolleres månedlig. Alle åpninger i bygninger er tettet, og vi holder høy hygienisk standard. Fôr lagres i lukkede beholdere. Hittil i år er det ikke registrert mus eller rotter.'
          },
          {
            id: '1.8.2',
            title: 'Kan du dokumentere hvilke skadedyrmidler som brukes og hvor de er plassert?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi bruker Ratak-blokker (difenakumarol) i godkjente rottebokser. Vi har kart over plasseringen av 8 bokser rundt fjøset og 4 ved fôrlager. Inspeksjoner og forbruk føres i loggbok. Produktet oppbevares avlåst og utilgjengelig for dyr.'
          }
        ]
      },
      {
        id: 'group-1-9',
        title: '1.9 Et klimavennlig landbruk',
        questions: [
          {
            id: '1.9.1',
            title: 'Har du en plan for vedlikehold og fornyelse av hydrotekniske anlegg?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har grøfteplan som ble oppdatert i 2021. Alle drensledninger er kartlagt, og vi inspiserer utløp årlig om våren. I 2023 fornyet vi 200 meter grøfterør i nordre skiftet. Planlagt vedlikehold av østre felt er satt til 2026.'
          },
          {
            id: '1.9.2',
            title: 'Følger du lokale/regionale bestemmelser om jordarbeiding og miljøkrav?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi følger kommunens retningslinjer for høstpløying og unngår jordarbeiding når jorda er for våt. På arealer med stor erosjonsfare praktiserer vi direktesåing eller stubbdekke. Alt i tråd med regional forskrift for Østfold.'
          },
          {
            id: '1.9.3',
            title: 'Følger du særskilte miljøbestemmelser gitt av kommunen?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi overholder kommunens vedtak om 12 meters vegetasjonsbelte langs Sæterbekken som renner gjennom eiendommen. Vi har også fulgt pålegg om etablering av fangdam ved utløp fra drenering. Tilsyn fra kommunen i 2024 hadde ingen anmerkninger.'
          },
          {
            id: '1.9.4',
            title: 'Har du kartlagt kilder til klimagassutslipp og vurdert aktuelle tiltak for gården?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har brukt Klimasmart Landbruk-verktøyet fra Norsk Landbruksrådgivning og kartlagt utslipp fra husdyr, gjødsel og maskiner. Tiltak vi har iverksatt: økt grasandel i fôret, redusert proteininnhold, og bedre fôrutnyttelse. Tiltaksplan revideres årlig.'
          }
        ]
      },
      {
        id: 'group-1-10',
        title: '1.10 Kulturminner, kulturlandskap og biologisk mangfold',
        questions: [
          {
            id: '1.10.1',
            title: 'Har du merket av kulturminner og verdifulle kulturlandskapselementer på skiftekartet?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Ja, vi har et gammelt steingjerde fra 1800-tallet og tre enkelttrær (old eiker) som er markert på skiftekartet med symboler. En gammel steinmur langs nordre grense er også innmerket. Alt er registrert i dialog med kommunens kulturminnerådgiver.'
          },
          {
            id: '1.10.2',
            title: 'Har du minst 2 meter vegetasjonssone mot vassdrag med årssikker vannføring?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har 8-12 meters bredde på vegetasjonsbelte langs Sæterbekken. Beltet består av gras, busker og noen trær, og vi sprøyter eller gjødsler ikke her. GPS-registrering viser at nærmeste dyrket mark er minimum 8 meter fra vannkant.'
          },
          {
            id: '1.10.3',
            title: 'Gjennomføres tiltak som påvirker kulturminner/kulturlandskap i dialog med kommunen?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
          answerText: 'Ja, da vi planla grøfting nær steinmuren i 2022, tok vi kontakt med kommunen først. De kom på befaring, og vi justerte traseen slik at muren ikke ble berørt. Vi melder alltid fra ved planlagt aktivitet nær registrerte kulturminner.'
          },
          {
            id: '1.10.4',
            title: 'Ivaretar du fredede kulturminner med tilhørende sikringssone?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har ingen fredede kulturminner på eiendommen. Nærmeste fredede objekt er en gravhaug 400 meter unna på naboeiendommen. Skulle vi oppdage automatisk fredede kulturminner, vil vi umiddelbart melde fra til kulturmyndighetene.'
          }
        ]
      },
      {
        id: 'group-1-11',
        title: '1.11 Smitteforebygging ved kjøp av brukt utstyr fra utlandet',
        questions: [
          {
            id: '1.11.1',
            title: 'Kan du dokumentere at brukt utstyr innkjøpt fra utlandet ble rengjort og desinfisert før forsendelse til Norge?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            answerText: 'Vi har ikke kjøpt brukt utstyr fra utlandet de siste årene. Alt nødvendig utstyr er enten kjøpt nytt fra norske forhandlere eller brukt fra naboer. Ved eventuelt fremtidig kjøp fra utlandet vil vi sørge for dokumentert rengjøring og desinfeksjon.'
          }
        ]
      }
    ]
  },
  {
    id: 'category-10',
    number: 10,
    title: 'Helse, miljø og sikkerhet',
    questionGroups: []
  },
  {
    id: 'category-15',
    number: 15,
    title: 'Grovfôr, korn, frø, olje- og belgvekster',
    questionGroups: []
  },
  {
    id: 'category-30',
    number: 30,
    title: 'Drøvtyggere - generell',
    questionGroups: []
  },
  {
    id: 'category-32',
    number: 32,
    title: 'Småfe',
    questionGroups: []
  },
  {
    id: 'category-ksl',
    number: 0, // Special case - will display as "KSL"
    title: 'Overordnede spørsmål for revisor',
    questionGroups: []
  }
];

export const getQuestionById = (questionId: string): Question | undefined => {
  for (const category of questionsData) {
    for (const group of category.questionGroups) {
      const question = group.questions.find(q => q.id === questionId);
      if (question) return question;
    }
  }
  return undefined;
};

export const getAllQuestionIds = (): string[] => {
  const questionIds: string[] = [];
  for (const category of questionsData) {
    for (const group of category.questionGroups) {
      for (const question of group.questions) {
        questionIds.push(question.id);
      }
    }
  }
  return questionIds;
};

export const getNextQuestionId = (currentId: string): string | null => {
  const allIds = getAllQuestionIds();
  const currentIndex = allIds.indexOf(currentId);
  if (currentIndex === -1 || currentIndex === allIds.length - 1) {
    return null;
  }
  return allIds[currentIndex + 1];
};

export const getPreviousQuestionId = (currentId: string): string | null => {
  const allIds = getAllQuestionIds();
  const currentIndex = allIds.indexOf(currentId);
  if (currentIndex <= 0) {
    return null;
  }
  return allIds[currentIndex - 1];
};