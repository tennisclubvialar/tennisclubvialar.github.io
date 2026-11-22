const BACHECA = {
  secondiPerSlide: 12,      // usato solo se il calcolo automatico non è possibile
  /* Durata automatica: più testo c'è, più a lungo resta la schermata (tra minimo e massimo).
     Per forzare una durata su una singola schermata aggiungi  durata: 15  nella sua configurazione. */
  durataMinima: 7,
  durataMassima: 15,
  durataLocandina: 10,
  instagram: "tennisclubvialar",
  postInRotazione: 3,       // quanti post recenti mostrare a tutto schermo tra una slide e l'altra
  /* Striscia avvisi in basso: compare solo se qui c'è almeno un avviso, es. "Circolo chiuso il 25 dicembre".
     Per farlo sparire da solo: { testo: "...", finoAl: "AAAA-MM-GG" } (resta visibile fino a quel giorno compreso) */
  avvisi: [
    { testo: "Scuola Adulti · II trimestre: il rinnovo è automatico. Chi non vuole rinnovare lo comunica in segreteria entro lunedì 23 novembre, pagamento entro venerdì 27 novembre. Pausa natalizia dal 24 dicembre al 4 gennaio", finoAl: "2026-11-27" },
    { testo: "Sabato 21 novembre ore 11:00 · Body Flow: open day gratuito di pilates, ingresso libero per tutti e tutte", finoAl: "2026-11-21" },
    { testo: "Sabato 21 novembre 8:00-14:00 · Move better, play better: valutazione fisioterapica gratuita di 30 minuti, sono rimasti solo 4 posti! Prenota in segreteria", finoAl: "2026-11-21" }
  ],
  /* Torneo Sociale in primo piano: queste categorie girano molto più spesso (iscritti + info), fino al giorno indicato compreso */
  socialeFocus: { categorie: ["Open Maschile", "Over 50 Maschile"], finoAl: "2026-11-23" },
  // Domenica del torneo: dalle 10:45 alle 15:30 la bacheca mostra soprattutto le info live per i partecipanti
  modalitaTorneo: { data: "2026-11-15", dalle: "10:00", alle: "23:59" },
  /* Calendario della stagione: stato "fatto" oppure "da fare". Solo il mese, perché le date possono cambiare. */
  calendario: [
    { titolo: "Scuola tennis", chi: "Per i ragazzi della scuola tennis", eventi: [
      { mese: "Settembre", nome: "Orange Cup", tipo: "Torneo orange", stato: "fatto" },
      { mese: "Ottobre", nome: "Green Cup", tipo: "Torneo green", stato: "fatto" },
      { mese: "Novembre", nome: "Autumn Tennis Party", tipo: "Torneo over 14 M/F", stato: "fatto" },
      { mese: "Dicembre", nome: "Christmas Party", tipo: "Torneo red + orange", stato: "da fare" },
      { mese: "Gennaio", nome: "New Year Tennis Trophy", tipo: "Torneo green", stato: "da fare" },
      { mese: "Febbraio", nome: "Carnival Tennis Cup", tipo: "Torneo over 14 M/F", stato: "da fare" },
      { mese: "Marzo", nome: "Spring Tennis Cup", tipo: "Torneo red + orange", stato: "da fare" },
      { mese: "Aprile", nome: "Easter Tennis Open", tipo: "Torneo green", stato: "da fare" },
      { mese: "Maggio", nome: "Internazionali BNL Open", tipo: "Torneo over 14 M/F", stato: "da fare" },
      { mese: "Giugno", nome: "Master Finale", tipo: "Festa di fine anno", stato: "da fare" }
    ] },
    { titolo: "Adulti", chi: "Rodei per i soci adulti", eventi: [
      { mese: "Settembre", nome: "Vialar Open", tipo: "Rodeo open", stato: "fatto" },
      { mese: "Ottobre", nome: "Ladies Cup", tipo: "Rodeo femminile", stato: "fatto" },
      { mese: "Novembre", nome: "Gentlemen's Cup", tipo: "Rodeo maschile · domenica 15", stato: "fatto" },
      { mese: "Dicembre", nome: "Silver Cup", tipo: "Rodeo over 45 open", stato: "da fare" },
      { mese: "Gennaio", nome: "Pickleball Open", tipo: "Rodeo open", stato: "da fare" },
      { mese: "Febbraio", nome: "Doppio Open", tipo: "Rodeo open", stato: "da fare" },
      { mese: "Marzo", nome: "Davis Cup Vialar", tipo: "Rodeo a squadre", stato: "da fare" },
      { mese: "Aprile", nome: "Torneo di Pickleball", tipo: "Rodeo open", stato: "da fare" },
      { mese: "Maggio", nome: "Internazionali BNL Open", tipo: "Rodeo open", stato: "da fare" },
      { mese: "Giugno", nome: "Master Finale Top 8", tipo: "Tabellone finale", stato: "da fare" }
    ] }
  ],
  /* Calendario eventi: aggiungi righe come { data: "2026-11-22", titolo: "Torneo sociale", luogo: "T.C. Vialar" } */
  eventi: [],
  /* Locandine a tutto schermo: metti l'immagine in assets/locandine/ e aggiungi { immagine: "assets/locandine/nome.jpg", titolo: "..." } */
  locandine: [
    { immagine: "assets/locandine/sponsor-pi-servizi.jpg", titolo: "Professionisti Immobiliari: servizi gratuiti per i soci" },
    { immagine: "assets/locandine/sponsor-pi-valutazione.jpg", titolo: "Professionisti Immobiliari: valuta la tua casa" },
    { immagine: "assets/locandine/sponsor-pi-stranieri.jpg", titolo: "Professionisti Immobiliari: vendi casa agli stranieri" },
    { immagine: "assets/locandine/fisioterapista-luca-merli.jpg", titolo: "Fisioterapista Luca Merli, OMPT" },
    { immagine: "assets/locandine/diventa-partner-bacheca.jpg", verticale: "assets/locandine/diventa-partner-storia.jpg", pieno: true, titolo: "Diventa partner del T.C. Vialar" },
    { immagine: "assets/locandine/move-better-bacheca.jpg", verticale: "assets/locandine/move-better-storia.jpg", pieno: true, sfondo: "#070707", finoAl: "2026-11-21", titolo: "Move better, play better" },
    // Torneo Sociale 2026-27: in bacheca fino alla chiusura dell'ultima iscrizione (Open Femminile, lun 8 marzo)
    { immagine: "assets/locandine/torneo-sociale-1.jpg", verticale: "assets/locandine/torneo-sociale-1-storia.jpg", pieno: true, sfondo: "#081238", finoAl: "2027-03-08", titolo: "Torneo Sociale 2026-27: lascia il segno" },
    { immagine: "assets/locandine/torneo-sociale-2.jpg", pieno: true, sfondo: "#081238", finoAl: "2027-03-08", titolo: "Torneo Sociale 2026-27: categorie e date" },
    { immagine: "assets/locandine/torneo-sociale-3.jpg", verticale: "assets/locandine/torneo-sociale-3-storia.jpg", pieno: true, sfondo: "#081238", finoAl: "2027-03-08", titolo: "Torneo Sociale 2026-27: come si gioca" },
    { immagine: "assets/locandine/scuola-adulti-rinnovo-bacheca.jpg", verticale: "assets/locandine/scuola-adulti-rinnovo-storia.jpg", pieno: true, sfondo: "#6b2c1a", finoAl: "2026-11-27", titolo: "Scuola Adulti II trimestre: rinnovo automatico" },
    { immagine: "assets/locandine/body-flow-bacheca.jpg", verticale: "assets/locandine/body-flow-storia.jpg", pieno: true, sfondo: "#140829", finoAl: "2026-11-21", titolo: "Body Flow: open day di pilates" }
  ],
  slide: [
    {
      tipo: "testo", finoAl: "2026-11-15", durata: 15,
      kicker: "Domenica 15 novembre · ore 11:00",
      titolo: "Gentlemen's Cup",
      testo: "Il rodeo maschile con Breakpoint official sponsor: allestimento con attrezzatura e gadget per tutti i partecipanti. Ogni partita vale punti per la Race to Finals 2027. Tabellone al completo: 16 giocatori in campo, vieni a fare il tifo!",
      chips: ["Tabellone completo", "Official sponsor Breakpoint", "16 giocatori"],
      immagine: "assets/locandine/gentlemens-cup.jpg"
    },
    {
      tipo: "videopieno", pulito: true, finoAl: "2026-11-15", durata: 18,
      video: "assets/video/gentlemens-cup-bacheca.mp4", poster: "assets/video/gentlemens-cup-bacheca.jpg",
      videoVerticale: "assets/video/gentlemens-cup-verticale.mp4"
    },
    {
      tipo: "testo",
      kicker: "Campi", icona: "campo",
      titolo: "Il campo ti aspetta",
      testo: "Prenota in segreteria o su WhatsApp. Se ti manca il compagno, ci pensiamo noi.",
      fatti: [
        { label: "Singolare", note: "campo, giorno / sera", value: "16 / 19 €" },
        { label: "Doppio", note: "a persona, giorno / sera", value: "6 / 7,50 €" },
        { label: "Lezione individuale", note: "costo del campo +", value: "+20 €" },
        { label: "Lezione in coppia", note: "costo del campo +", value: "+30 €" }
      ]
    },
    {
      tipo: "videopieno",
      kicker: "Questo è il Vialar",
      titolo: "Si gioca, si cresce, ci si diverte",
      video: "assets/video/vialar-in-campo.mp4", poster: "assets/video/vialar-in-campo.jpg",
      durata: 17
    },
    {
      tipo: "testo",
      kicker: "Diventa socio", icona: "tessera",
      titolo: "Benvenuto in famiglia",
      testo: "Con l'iscrizione annuale fai parte del circolo e sei tesserato FITP. Chiedi in segreteria.",
      fatti: [
        { label: "Iscrizione al circolo", note: "annuale · tessera FITP inclusa", value: "85 €" },
        { label: "Parcheggio interno", note: "abbonamento annuale", value: "50 €" }
      ]
    },
    {
      tipo: "testo",
      kicker: "Area fitness", icona: "fitness",
      titolo: "I tuoi orari, il tuo ritmo", fascia: "mattina sera",
      testo: "Accesso alle zone fitness del circolo con l'abbonamento più adatto a te. Chiedi in segreteria.",
      fatti: [
        { label: "Mensile", value: "50 €" },
        { label: "Trimestrale", value: "120 €" },
        { label: "Annuale", note: "la formula più conveniente", value: "200 €" }
      ]
    },
    {
      tipo: "testo",
      kicker: "Cerca compagno", icona: "compagno",
      titolo: "Il compagno lo troviamo noi",
      testo: "Il servizio è attivo tutti i giorni: dicci quando vuoi giocare e ti abbiniamo a un socio del tuo livello.",
      fatti: [
        { label: "Lunedì – Giovedì", value: "8–15 · 21–23" },
        { label: "Venerdì", value: "8–15 · 19–23" },
        { label: "Sabato", value: "8–21" },
        { label: "Domenica", value: "8–23" }
      ]
    },
    {
      tipo: "testo",
      kicker: "Classifica sociale", icona: "trofeo",
      titolo: "Sfida. Vinci. Sali.", fascia: "mattina sera",
      testo: "Registrati su vialadder.com, inserisci i risultati dei tuoi match al circolo e scopri dove sei arrivato.",
      fatti: [
        { label: "Registrati", note: "sul portale vialadder.com" },
        { label: "Inserisci i risultati", note: "vittorie e sconfitte dei match al circolo" },
        { label: "Report personale", note: "posizione in classifica e statistiche" },
        { label: "Aggiornamento", note: "ogni settimana", value: "lunedì" }
      ],
      qr: "assets/qr/vialadder.png",   // QR verso https://vialadder.com
      qrTesto: "Inquadra e registrati"
    },
    {
      tipo: "testo",
      kicker: "Scuola Tennis",
      titolo: "Crescere giocando", fascia: "pomeriggio",
      testo: "Un'ora di tennis e un'ora di preparazione atletica, con giorni fissi tutta la stagione e partite extra nel weekend.",
      chips: ["Avviamento", "Pre-perfezionamento", "Perfezionamento", "Specializzazione"],
      fatti: [
        { label: "Dai 5 ai 13 anni", value: "17–19" },
        { label: "Dai 14 ai 18 anni", value: "15–17" },
        { label: "Scuola tennis base", note: "lun e mer oppure mar e gio" },
        { label: "Venerdì", note: "solo perfezionamento e specializzazione" }
      ]
    },
    {
      tipo: "video", finoAl: "2027-03-08", durata: 35,
      kicker: "Torneo Sociale 2026-27",
      titolo: "Lascia il segno",
      testo: "4 categorie, singolare e doppio, e una grande festa delle finali domenica 4 aprile. Iscrizioni in segreteria: si parte sabato 28 novembre.",
      video: "assets/video/torneo-sociale-reel.mp4", poster: "assets/video/torneo-sociale-reel.jpg"
    },
    {
      tipo: "video",
      kicker: "Scuola tennis",
      titolo: "Il dettaglio che fa la differenza", fascia: "pomeriggio",
      testo: "Il maestro accanto, il gesto corretto, la ripetizione giusta: così nasce un buon colpo.",
      video: "assets/video/lezione-tecnica.mp4", poster: "assets/video/lezione-tecnica.jpg"
    },
    {
      tipo: "foto",
      kicker: "Scuola Tennis",
      titolo: "Una grande famiglia", fascia: "pomeriggio",
      testo: "Ragazzi, maestri e preparatori: ogni stagione cresciamo insieme, in campo e fuori.",
      immagine: "assets/foto/scuola-tennis-gruppo.jpg"
    },
    {
      tipo: "staff",
      kicker: "Lo staff del circolo",
      titolo: "Chi guida il Vialar",
      gruppi: [
        { settore: "Direzione", membri: [
          { nome: "Fabio Meringolo", ruolo: "Maestro nazionale · Direttore tecnico della scuola tennis", resp: true, tag: "Presidente" },
          { nome: "Gianmarco Meringolo", ruolo: "Istruttore 1° grado · Preparatore fisico 2° grado FITP", resp: true, tag: "Direttore sportivo" }
        ] },
        { settore: "Segreteria", membri: [
          { nome: "Francesca Dell'Osa", ruolo: "Segreteria del circolo · Responsabile area abbigliamento", resp: true, tag: "Segreteria" }
        ] }
      ]
    },
    {
      tipo: "staff",
      kicker: "Lo staff tecnico",
      titolo: "Dove si costruiscono i campioni", fascia: "pomeriggio",
      gruppi: [
        { settore: "Settore specializzazione", membri: [
          { nome: "Lorenzo Vincenti", ruolo: "Maestro nazionale · Preparatore fisico 2° grado FITP · Laureato in Scienze Motorie", resp: true },
          { nome: "Giordano Barozzi", ruolo: "Istruttore 2° grado" },
          { nome: "Riccardo Casavola", ruolo: "Istruttore 1° grado" }
        ] }
      ]
    },
    {
      tipo: "staff",
      kicker: "Lo staff tecnico",
      titolo: "In campo con i ragazzi", fascia: "pomeriggio",
      gruppi: [
        { settore: "Perfezionamento · settore B", membri: [
          { nome: "Matteo Capuano", ruolo: "Istruttore 2° grado", resp: true },
          { nome: "Gabriele Labbadia", ruolo: "Istruttore 1° grado · a supporto dei settori B e C" }
        ] },
        { settore: "Perfezionamento · settore C", membri: [
          { nome: "Federica Taborra", ruolo: "Istruttrice 2° grado · Laureata in Scienze Motorie", resp: true },
          { nome: "Paolo Masala", ruolo: "Istruttore 2° grado", resp: true }
        ] }
      ]
    },
    {
      tipo: "staff",
      kicker: "Lo staff tecnico",
      titolo: "I primi passi in campo", fascia: "pomeriggio",
      gruppi: [
        { settore: "Settore avviamento · i più piccoli", membri: [
          { nome: "Gianmarco Meringolo", ruolo: "Istruttore 1° grado · Preparatore fisico 2° grado FITP · Laureato in Scienze Motorie", resp: true },
          { nome: "Giordano Barozzi", ruolo: "Istruttore 2° grado" },
          { nome: "Valentina Conia", ruolo: "Istruttrice 1° grado · a supporto" }
        ] }
      ]
    },
    {
      tipo: "staff",
      kicker: "Lo staff tecnico",
      titolo: "La forza dietro ogni colpo",
      gruppi: [
        { settore: "Preparazione atletica", membri: [
          { nome: "Mario Paura", ruolo: "Preparatore fisico 1° grado FITP · Laurea triennale e magistrale in Scienze Motorie", resp: true, tag: "Responsabile settore atletico" },
          { nome: "Emanuele Greco", ruolo: "Preparatore fisico 1° grado FITP · Laureato in Scienze Motorie" },
          { nome: "Carlo Acierno", ruolo: "Preparatore fisico 1° grado FITP · Laureato in Scienze Motorie" }
        ] }
      ]
    },
    {
      tipo: "galleria", tema: "rosso",
      kicker: "Under 11 · doppio",
      titolo: "Campione italiano!",
      testo: "Tommaso Maria Salvatori è campione italiano di doppio Under 11! Complimenti a Tommaso e al suo maestro.",
      immagini: ["assets/foto/campione-italiano-locandina.jpg", "assets/foto/campione-italiano-maestro.jpg"],
      durata: 12
    },
    {
      tipo: "galleria", tema: "rosso",
      kicker: "Settore performance",
      titolo: "Coppe, podi e sorrisi", fascia: "pomeriggio",
      testo: "Tornei FITP, trasferte e allenamenti: i ragazzi del Vialar si fanno valere ovunque.",
      immagini: ["assets/foto/podio-ragazza-1.jpg", "assets/foto/podio-ragazza-2.jpg", "assets/foto/allievi-maestro.jpg", "assets/foto/squadra-agonisti.jpg"],
      durata: 13
    },
    {
      tipo: "video", tema: "rosso",
      kicker: "Settore performance",
      titolo: "Ogni colpo conta", fascia: "pomeriggio",
      testo: "Tecnica, ritmo e intensità, con il maestro sempre a fianco: così si allenano i nostri ragazzi.",
      video: "assets/video/agonista-colpi.mp4", poster: "assets/video/agonista-colpi.jpg"
    },
    {
      tipo: "foto", tema: "rosso",
      kicker: "Settore performance",
      titolo: "Sempre in campo", fascia: "pomeriggio",
      testo: "Il gruppo performance in trasferta al Piatti Tennis Center.",
      immagine: "assets/foto/trasferta-piatti.jpg"
    },
    {
      tipo: "testo", tema: "rosso",
      kicker: "Perfezionamento e agonistica",
      titolo: "Nati per competere", fascia: "pomeriggio",
      testo: "L'obiettivo è formare giocatori capaci di competere a livelli sempre più alti, con un'organizzazione al massimo livello.",
      fatti: [
        { label: "Maestri in campo", note: "3 maestri ogni 2 campi", value: "3 : 2" },
        { label: "Atleti per 2 campi", note: "spesso 5 nel primo turno", value: "max 7" },
        { label: "Allenamenti", note: "a settimana", value: "5" }
      ]
    },
    {
      tipo: "testo", tema: "rosso",
      kicker: "Perfezionamento e agonistica",
      titolo: "Cinque giorni, zero scorciatoie", fascia: "pomeriggio",
      testo: "Ogni seduta comincia con il riscaldamento e si chiude con il defaticamento, e comprende un'ora di preparazione atletica.",
      fatti: [
        { label: "Sedute di tennis da 2 ore", value: "3" },
        { label: "Sedute di tennis da 1 ora e mezza", value: "2" },
        { label: "Preparazione atletica", note: "a ogni seduta", value: "1 h" },
        { label: "Riscaldamento e defaticamento", note: "a inizio e fine seduta", value: "30' + 30'" }
      ]
    },
    {
      tipo: "testo", tema: "rosso",
      kicker: "Perfezionamento e agonistica",
      titolo: "Ogni colpo, misurato", fascia: "pomeriggio", icona: "video",
      testo: "Ogni atleta ha la sua dashboard con le valutazioni di tutto lo staff.",
      chips: ["Tecnica", "Tattica", "Fisica", "Mentale", "Nutrizione"],
      fatti: [
        { label: "Report e valutazioni", note: "aggiornati dallo staff" },
        { label: "Videoanalisi", note: "tecnica e tattica, rivista con i maestri" },
        { label: "Dieta personalizzata", note: "con il nutrizionista" },
        { label: "Programma di allenamento", note: "su misura, specifico per il tennis" }
      ]
    },
    {
      tipo: "qrgrande",
      kicker: "Recensioni Google",
      titolo: "Lasciaci 5 stelle su Google",
      testo: "Bastano 30 secondi: inquadra il QR e racconta il tuo Vialar. Ci aiuti a farci conoscere. Grazie a tutti i soci!",
      qr: "assets/qr/recensioni-google.png",   // https://g.page/r/CXh-i2Dn9xjAEAE/review
      qrTesto: "Inquadra e recensisci"
    },
    {
      tipo: "video",
      kicker: "Scuola tennis · avviamento",
      titolo: "Si comincia giocando", fascia: "pomeriggio",
      testo: "Coordinazione, equilibrio e i primi colpi: il tennis dei più piccoli è movimento e divertimento.",
      video: "assets/video/minitennis.mp4", poster: "assets/video/minitennis.jpg"
    },
    {
      tipo: "testo",
      kicker: "Corsi adulti", icona: "gruppo",
      titolo: "Mai troppo tardi per iniziare", fascia: "mattina sera",
      testo: "Formula trimestrale: un'ora di tennis e un'ora di preparazione atletica in gruppo, con lavoro di rinforzo mirato al tennis.",
      chips: ["Lunedì e mercoledì", "Martedì e giovedì"],
      fatti: [
        { label: "Orario", note: "due sere a settimana", value: "19–21" },
        { label: "Tennis", note: "maestro / allievi", value: "1:4" },
        { label: "Preparazione atletica", note: "preparatore / allievi", value: "1:8" }
      ]
    },
    {
      tipo: "testo",
      kicker: "Allenamento avanzato · dal 4.1 FITP",
      titolo: "Alza il livello", fascia: "mattina sera", icona: "bersaglio",
      testo: "Gruppo per giocatori dal 4.1 FITP in su: ritmo alto, partite vere e preparazione atletica facoltativa prima del campo.",
      fatti: [
        { label: "Lunedì sera", note: "Maestri Matteo e Giordano", value: "21–23" },
        { label: "Preparazione atletica", note: "lunedì, prima del campo", value: "20–21" },
        { label: "Venerdì", note: "Maestro Lorenzo", value: "13–15" }
      ]
    },
    {
      tipo: "video",
      kicker: "Allenamento avanzato",
      titolo: "Ritmo da torneo", fascia: "sera",
      testo: "Palleggi intensi, scambi veri e i maestri in campo: la sera, il gruppo avanzato alza il livello.",
      video: "assets/video/allenamento-avanzato.mp4", poster: "assets/video/allenamento-avanzato.jpg",
      durata: 15
    },
    {
      tipo: "testo",
      kicker: "Allenamento avanzato",
      titolo: "Più ti alleni, meno spendi", fascia: "sera",
      testo: "Il pacchetto comprende 4 allenamenti da fare entro il mese. Stessi prezzi il lunedì e il venerdì.",
      fatti: [
        { label: "Allenamento singolo", value: "25 €" },
        { label: "Pacchetto 4 allenamenti", note: "20 € a lezione", value: "80 €" },
        { label: "Preparazione atletica singola", value: "8 €" },
        { label: "Pacchetto 4 preparazioni", note: "entro il mese", value: "25 €" }
      ]
    },
    {
      tipo: "testo", tema: "rosso",
      kicker: "Preparazione atletica",
      titolo: "Più forte. Più veloce. Senza dolore.", fascia: "mattina sera", icona: "fitness",
      testo: "Il corpo è il tuo primo colpo.",
      chips: ["Over 60", "Agonisti", "Fitness", "Riabilitazione"],
      cta: "Inizia ora →"
    },
    {
      tipo: "testo", tema: "rosso", griglia: true,
      kicker: "Scegli il tuo obiettivo",
      titolo: "Un percorso per ognuno.", fascia: "mattina",
      testo: "Seguiti da uno staff qualificato: laureati in Scienze Motorie, Invictus Trainer, preparatore fisico di 2° livello FITP.",
      fatti: [
        { label: "Over 60" }, { label: "Agonisti" },
        { label: "Rinforzo muscolare" }, { label: "Pilates e mobilità" },
        { label: "Riabilitazione" }, { label: "Nutrizione" }
      ]
    },
    {
      tipo: "video", tema: "rosso",
      kicker: "Preparazione atletica",
      titolo: "Piedi veloci, colpi migliori", fascia: "mattina pomeriggio",
      testo: "Rapidità, coordinazione e cambi di direzione: il tennis si gioca prima di tutto con le gambe.",
      video: "assets/video/atletica-rapidita.mp4", poster: "assets/video/atletica-rapidita.jpg"
    },
    {
      tipo: "testo", tema: "rosso",
      kicker: "Inizia ora",
      titolo: "Inizia dai tuoi numeri.", fascia: "mattina sera",
      testo: "Test iniziale, programma su misura e report grafico ogni mese. Per costi e percorsi chiedi in segreteria.",
      fatti: [
        { label: "Lunedì – venerdì", note: "fascia mattutina", value: "9–12" },
        { label: "Sabato e domenica", note: "mattina e anche pomeriggio" },
        { label: "Individuale, di coppia o di gruppo", note: "da concordare con il preparatore" },
        { label: "Prenota la valutazione", note: "392 621 8466 · devialar@alice.it" }
      ]
    },
    {
      tipo: "testo",
      kicker: "Incordatura", icona: "racchetta",
      titolo: "Corde perfette, ogni volta",
      testo: "Salviamo corda e tensione nella tua scheda: la reincordiamo sempre uguale, finché non decidi di cambiare.",
      fatti: [
        { label: "Incordatura", note: "in base alla corda", value: "18–25 €" },
        { label: "Pronta in 2–3 giorni", note: "lavorativi" },
        { label: "Grip e overgrip", note: "sostituzione in segreteria" },
        { label: "Racchette test Dunlop e Yonex", note: "in collaborazione con Breakpoint" }
      ]
    },
    {
      tipo: "testo",
      kicker: "Il nostro negozio",
      titolo: "Breakpoint",
      testo: "Il nostro racket sports partner per tennis e padel, in via Trionfale 59.",
      logo: "assets/sponsor/breakpoint.png",
      fatti: [
        { label: "Racchette test", note: "Dunlop e Yonex, da provare in campo" },
        { label: "Tennis e padel", note: "attrezzatura, abbigliamento, accessori" },
        { label: "Chiedi in segreteria", note: "ti mettiamo in contatto con Breakpoint" }
      ]
    },
    {
      tipo: "testo",
      kicker: "Il nostro staff", icona: "salute",
      titolo: "Un team che pensa a te",
      testo: "Preparatori atletici laureati in Scienze Motorie e istruttori di 2° grado FITP. Per i percorsi individuali basta prenotare.",
      fatti: [
        { label: "Flavio Andreozzi", note: "Nutrizionista · su prenotazione" },
        { label: "Luca Merli", note: "Fisioterapista OMPT · su prenotazione" },
        { label: "Danilo Monsone", note: "Preparatore mentale · su prenotazione" },
        { label: "Visita medica", note: "centro VESA, convenzionato per i tesserati" }
      ]
    },
    {
      tipo: "testo",
      kicker: "Visite medico-sportive", icona: "stetoscopio",
      titolo: "Gioca sereno, gioca in regola",
      testo: "Visite medico-sportive convenzionate al centro VESA, in via degli Scipioni 252.",
      icona: "stetoscopio",
      fatti: [
        { label: "Ogni lunedì", note: "centro medico VESA", value: "14:30–19:30" },
        { label: "Dott. Luca Mengozzi", note: "medico sportivo" },
        { label: "Prenota", note: "tesserati del circolo", value: "06 69302798" }
      ]
    },
    {
      tipo: "testo",
      kicker: "Shop ufficiale · ora online",
      titolo: "Indossa i colori del Vialar",
      testo: "La linea dei nostri maestri, con il logo Vialar, per soci, atleti e famiglie. Ordina online e ricevila al circolo o a casa. Info: Francesca in segreteria.",
      immagine: "assets/locandine/shop-ufficiale.jpg",
      qr: "assets/qr/shop.png",   // https://shop.teamsport-id.com/store-tennis-club-vialar-roma
      qrTesto: "Inquadra e acquista",
      password: "Tcvialar2026!"
    },
    {
      tipo: "testo",
      kicker: "Feste di compleanno", icona: "festa",
      titolo: "Una festa da campioni", fascia: "pomeriggio",
      testo: "Maestri e preparatori organizzano una lezione a tema, dinamica e divertente per tutti i festeggiati.",
      chips: ["Mini tennis", "Tennis", "Pickleball", "Ping pong"],
      fatti: [
        { label: "Bambini", note: "lezione ludica a tema" },
        { label: "Bambini e genitori", note: "giochi e sfide insieme" },
        { label: "Adulti", note: "torneo a tema o lezione collettiva a punti" },
        { label: "Buffet", note: "le aree del circolo a vostra disposizione" }
      ],
      cta: "Chiedi in segreteria la proposta su misura"
    },
    {
      tipo: "testo",
      kicker: "Partner",
      titolo: "Nidea",
      logo: "assets/sponsor/nidea.png", logoSfondo: "#202020",
      testo: "Non ti rendiamo virale, ti rendiamo riconoscibile: presenza, identità, coerenza e fiducia per il tuo brand.",
      fatti: [
        { label: "Strategia e posizionamento", note: "identità, tono di voce, obiettivi" },
        { label: "Contenuti social", note: "post, reel, stories e piani editoriali" },
        { label: "Siti web ed e-commerce", note: "coerenti con l'identità del brand" },
        { label: "Campagne ads", note: "dalla visibilità alla conversione" }
      ],
      cta: "nideawebagency.it · 389 96 25254"
    },
    {
      tipo: "galleria",
      kicker: "Tornei del circolo",
      titolo: "Che emozione, ragazzi!", fascia: "pomeriggio",
      testo: "Tornei, sfide e premiazioni: ogni torneo al Vialar è una festa per tutta la scuola tennis.",
      immagini: ["assets/foto/premiazione-1.jpg", "assets/foto/premiazione-2.jpg", "assets/foto/premiazione-3.jpg", "assets/foto/premiazione-4.jpg", "assets/foto/premiazione-5.jpg"],
      durata: 15
    },
    {
      tipo: "testo",
      kicker: "Partner · Professionisti Immobiliari",
      titolo: "Quanto vale oggi la tua casa?",
      testo: "Il Punto, la rivista della casa a Roma: i prezzi di tutte le 51 zone, mutui, bonus e le aste del mese. Leggila gratis dal telefono.",
      immagine: "assets/locandine/il-punto-n1.jpg",
      qr: "assets/qr/il-punto.png",
      qrTesto: "Inquadra e leggi la newsletter di novembre"
    },
    {
      tipo: "viaggi", durata: 16, finoAl: "2027-01-02",
      kicker: "Tennis & Padel in vacanza",
      titolo: "Si gioca anche in viaggio",
      testo: "Clinic di tennis e padel in Italia e all'estero: prenota con il codice partner del T.C. Vialar.",
      codice: "TPV-VIALAR27",
      contatto: "WhatsApp 338 214 2074",
      viaggi: [
        { immagine: "assets/viaggi/verona-5-8-dic.jpg", titolo: "Padel Clinic & Terme a Verona, 5-8 dicembre", finoAl: "2026-12-04" },
        { immagine: "assets/viaggi/abano-5-8-dic.jpg", titolo: "Tennis, Padel e Relax ad Abano, 5-8 dicembre", finoAl: "2026-12-04" },
        { immagine: "assets/viaggi/grosseto-5-8-dic.jpg", titolo: "Tennis & Padel Clinic in Maremma, 5-8 dicembre", finoAl: "2026-12-04" },
        { immagine: "assets/viaggi/mauritius-9-17-dic.jpg", titolo: "Tennis, Padel & Golf alle Mauritius, 9-17 dicembre", finoAl: "2026-12-08" },
        { immagine: "assets/viaggi/sotogrande-capodanno.jpg", titolo: "Capodanno a Sotogrande, 29 dicembre - 4 gennaio", finoAl: "2026-12-28" },
        { immagine: "assets/viaggi/marbella-3-7-gen.jpg", titolo: "Padel & Tennis Clinic a Marbella, 3-7 gennaio", finoAl: "2027-01-02" }
      ]
    },
    {
      // vacanze studio: in modo discreto, una sola schermata breve e solo nei pomeriggi feriali (genitori della scuola tennis)
      tipo: "galleria", durata: 12, fascia: "pomeriggio", finoAl: "2027-06-30",
      kicker: "Estate 2027",
      titolo: "Vacanze studio",
      testo: "Londra dal 1° al 15 luglio e New York dal 20 luglio al 3 agosto, con partenza da Roma. Codice gruppo RM55SI.",
      immagini: ["assets/viaggi/vacanza-studio-londra-2027.jpg", "assets/viaggi/vacanza-studio-new-york-2027.jpg"]
    },
    {
      tipo: "sponsor",
      kicker: "Partner",
      titolo: "Sponsor e partner",
      testo: "Grazie alle aziende che sostengono il T.C. Vialar e le sue attività.",
      invito: { titolo: "Diventa partner", testo: "Porta il tuo marchio al T.C. Vialar: chiedi in segreteria" },
      sponsor: [
        { nome: "Centro medico VESA · Main sponsor", logo: "assets/sponsor/vesa.png", sfondo: "#0b2a6e" },
        { nome: "Tennis & Padel in vacanza", logo: "assets/sponsor/tennis-padel-in-vacanza.png", sfondo: "#ffffff" },
        { nome: "Professionisti Immobiliari", logo: "assets/sponsor/professionisti-immobiliari.png", sfondo: "#3d485a" },
        { nome: "Breakpoint", logo: "assets/sponsor/breakpoint.png", sfondo: "#d9dee4" },
        { nome: "Nidea Web Marketing Agency", logo: "assets/sponsor/nidea.png", sfondo: "#202020" }
      ]
    },
    {
      tipo: "testo", tema: "notte", icona: "megafono",
      kicker: "Partnership",
      titolo: "Diventa partner del T.C. Vialar",
      testo: "Porta il tuo marchio nella community del circolo, a 200 metri dal Vaticano. Quattro livelli di partnership, anche su misura.",
      fatti: [
        { label: "Community WhatsApp", note: "soci attivi raggiunti ogni giorno", value: "600+" },
        { label: "Presenze al circolo", note: "atleti, famiglie, maestri e staff", value: "200+" },
        { label: "Follower su Instagram", note: "pagina curata da un'agenzia", value: "1.200" },
        { label: "4 livelli di partnership", note: "Main Sponsor, Gold, Silver e Supporter" }
      ],
      cta: "Scopri i livelli di partnership in segreteria"
    },
    {
      tipo: "testo", tema: "notte", icona: "trofeo",
      kicker: "Partnership · i livelli",
      titolo: "Scegli il tuo livello",
      testo: "Dal grande marchio all'attività di quartiere: c'è un pacchetto per ogni realtà che vuole crescere con il T.C. Vialar.",
      fatti: [
        { label: "Main Sponsor", note: "logo sulle divise di staff e agonisti, banner principali e spot in club house" },
        { label: "Partner Gold", note: "banner in campo, logo sull'abbigliamento e mini spot in bacheca" },
        { label: "Partner Silver", note: "banner negli spazi comuni, logo su materiali digitali e social" },
        { label: "Supporter", note: "logo in bacheca e ringraziamenti ufficiali sui social" }
      ],
      cta: "Informazioni e prezzi in segreteria"
    },
    { tipo: "calendario", indice: 0 },
    { tipo: "calendario", indice: 1 },
    {
      tipo: "qrgrande",
      kicker: "Community WhatsApp",
      titolo: "Non perderti nessun aggiornamento",
      testo: "Entra nella community WhatsApp del T.C. Vialar: novità, eventi e avvisi del circolo direttamente sul tuo telefono.",
      qr: "assets/qr/whatsapp-gruppo.png",   // https://chat.whatsapp.com/DfALH8CXwwS9tKxs5amval
      qrTesto: "Inquadra ed entra"
    },
    { tipo: "instagram" }
  ]
};
