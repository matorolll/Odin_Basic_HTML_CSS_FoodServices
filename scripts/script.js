const LoadMockupData = () =>{


const MockupData = [
    {
        id: 1,
        imageSrc: 'statics/dish1.png',
        imageAlt: 'Spaghetti',
        category: 'Food',
        title: 'Spaghetti',
        excerpt: 'Historia spaghetti: Spaghetti jest tradycyjną włoską potrawą, która pochodzi z regionu Neapolu. Pierwsze wzmianki o spaghetti można znaleźć w dokumentach datowanych na XIII wiek. Współcześnie spaghetti jest popularne na całym świecie i jest podawane w różnych wariantach z różnymi sosami i dodatkami.',
        allergens: "Gluten,Jajka, Mleko",
        how2: "Składniki <br> 400 g makaronu spaghetti <br> 500 g mielonej wołowiny <br> 1 cebula posiekana <br> 2 ząbki czosnku posiekane <br> 400 g krojonych pomidorów z puszki <br>  2 łyżki koncentratu pomidorowego <br> 1 łyżeczka suszonego oregano <br> 1 łyżeczka suszonego bazylii <br> Sól i pieprz do smaku <br> Starty parmezan do podania <br>Instrukcje:<br> Gotuj makaron według wskazówek na opakowaniu, aż będzie al dente. W dużym garnku podsmaż mieloną wołowinę na średnim ogniu, aż będzie dobrze przyrumieniona. Dodaj cebulę i czosnek, i smaż aż będą miękkie. Dodaj pomidory z puszki, koncentrat pomidorowy, oregano, bazylię, sól i pieprz. Mieszaj i gotuj na małym ogniu przez 15-20 minut. Podawaj sos na ugotowanym makaronie, posyp parmezanem",    
        others: "Czas przygotowania: około 30 minut <br> Porcje: 4 <br> Poziom trudności: łatwy <br> Potrawa wegetariańska: Nie <br>Potrawa wegańska: Nie"
    },  
    {
        id: 2,
        imageSrc: 'statics/dish2.png',
        imageAlt: 'Salad',
        category: 'Food',
        title: 'Salad',
        excerpt: 'Historia sałatki: Sałatka jest lekkim daniem składającym się z różnych świeżych składników takich jak warzywa, owoce, mięso lub ryby. Pierwsze sałatki pojawiły się już w starożytności, gdzie były spożywane jako środek na ochłodzenie organizmu. Obecnie sałatki są szeroko rozpowszechnione i istnieje wiele różnych rodzajów sałatek z różnymi składnikami i sosami.',
        allergens: "Orzeszki ziemne, Orzechy, Soja",
        how2: "Składniki:<br> - 1 główka sałaty mieszanej<br> - 1 ogórek, pokrojony w plasterki<br> - 1 pomidor, pokrojony w kostkę<br> - 1 czerwona cebula, pokrojona w piórka<br> - 1 papryka (dowolnego koloru), pokrojona w paseczki<br> - 100 g ser feta, pokruszony<br> - 50 g czarnych oliwek<br> - 2 łyżki posiekanej natki pietruszki<br> - 3 łyżki oliwy z oliwek<br> - 2 łyżki octu balsamicznego<br> - Sól i pieprz do smaku<br> Instrukcje:<br> 1. Sałatę umyj, osusz i rozłóż na talerzu.<br> 2. Dodaj ogórek, pomidora, cebulę, paprykę, ser feta, oliwki i natkę pietruszki.<br> 3. W osobnym naczyniu wymieszaj oliwę z oliwek, ocet balsamiczny, sól i pieprz.<br> 4. Polej dressingiem sałatkę i delikatnie wymieszaj.<br> 5. Sałatkę podawaj od razu, najlepiej jako lekkie danie obiadowe lub kolację.",
        others: "Czas przygotowania: około 15 minut<br> Porcje: 2<br> Poziom trudności: łatwy<br> Potrawa wegetariańska: Tak<br> Potrawa wegańska: Nie"
    },
    {   
        id: 3,
        imageSrc: 'statics/dish3.png',
        imageAlt: 'Pizza',
        category: 'Food',
        title: 'Pizza',
        excerpt: 'Historia pizzy: Pizza jest klasycznym daniem włoskim, które ma długą historię sięgającą starożytności. Pierwsze wzmianki o podobnych daniach do pizzy pochodzą z czasów starożytnego Egiptu i Grecji. Jednak współczesna pizza, z charakterystycznym ciastem z pomidorowym sosem i różnymi dodatkami, wywodzi się z Neapolu w XIX wieku. Dziś pizza jest jednym z najpopularniejszych dań na świecie.',
        allergens: "Gluten, Mleko",
        how2: "Składniki:<br> - Ciasto na pizzę<br> - 200 g sosu pomidorowego<br> - 150 g startego sera mozzarella<br> - 50 g szynki, pokrojonej w plasterki<br> - 50 g pieczarek, pokrojonych w plastry<br> - 1 czerwona papryka, pokrojona w paseczki<br> - 1 cebula, pokrojona w cienkie piórka<br> - 2 łyżki oliwy z oliwek<br> - 1 łyżeczka suszonego oregano<br> - 1 łyżeczka suszonego bazylii<br> - Sól i pieprz do smaku<br> Instrukcje:<br> 1. Rozgrzej piekarnik do temperatury 220°C (425°F).<br> 2. Rozwałkuj ciasto na pizzę na posypanej mąką powierzchni, tworząc okrągły placek o żądanej grubości.<br> 3. Przenieś ciasto na posmarowaną oliwą blachę do pizzy lub na kamień do pizzy.<br> 4. Rozprowadź sos pomidorowy na cieście, pozostawiając niewielki margines na brzegach.<br> 5. Posyp startym serem mozzarella.<br> 6. Nałóż plasterki szynki, plastry pieczarek, paseczki czerwonej papryki i cienkie piórka cebuli.<br> 7. Posyp całość suszonym oregano i bazylią, dodaj szczyptę soli i pieprzu.<br> 8. Piecz pizzę w nagrzanym piekarniku przez około 12-15 minut lub aż ciasto będzie rumiane, a ser roztopiony i lekko zrumieniony.<br> 9. Wyjmij pizzę z piekarnika i pozwól jej nieco ostygnąć przed pokrojeniem i podaniem.",
        others: "Czas przygotowania: około 30 minut<br> Czas pieczenia: 12-15 minut<br> Porcje: 2-3<br> Poziom trudności: średni<br> Potrawa wegetariańska: Nie<br> Potrawa wegańska: Nie"
    },
    {
        id: 4,
        imageSrc: 'statics/dish4.png',
        imageAlt: 'Burger',
        category: 'Food',
        title: 'Burger',
        excerpt: 'Historia burgera: Burger, znany również jako hamburger, jest popularnym daniem fast foodowym. Pierwsze hamburgery zaczęły się pojawiać w XIX wieku w Stanach Zjednoczonych. Powszechnie uważa się, że pierwszy hamburger został stworzony w 1900 roku przez Louisa Laskera, który otworzył swoją restaurację w New Haven, Connecticut. Od tego czasu hamburgery zdobyły ogromną popularność i stały się symbolem kultury fast foodowej.',
        allergens: "Gluten, Jajka, Mleko",
        how2: "Składniki:<br> - 500 g mięsa mielonego (wołowe lub mieszane)<br> - 4 bułki do hamburgerów<br> - 4 plastry sera cheddar<br> - 4 plasterki pomidora<br> - 4 liście sałaty<br> - 1 cebula, pokrojona w plastry<br> - 4 plasterki ogórka kiszonego<br> - 4 łyżki majonezu<br> - 2 łyżki ketchupu<br> - 1 łyżeczka musztardy<br> - Sól i pieprz do smaku<br> - Oliwa lub olej do smażenia<br> Instrukcje:<br> 1. W misce wymieszaj mięso mielone, sól i pieprz. Formuj 4 płaskie kotlety o średnicy zbliżonej do średnicy bułek.<br> 2. Rozgrzej oliwę lub olej na patelni lub grillu. Smaż kotlety na średnim ogniu przez 4-5 minut z każdej strony lub aż będą dobrze przypieczone.<br> 3. W międzyczasie podgrzej bułki na grillu lub na suchej patelni.<br> 4. Przygotuj sos, mieszając majonez, ketchup i musztardę.<br> 5. Na dolną część każdej bułki połóż liść sałaty, plaster pomidora i plaster ogórka.<br> 6. Na sałacie umieść usmażony kotlet mięsny, a na nim połóż plasterek sera cheddar.<br> 7. Na wierzch mięsa połóż plaster cebuli.<br> 8. Skrop burger sosem i przykryj górną częścią bułki.<br> 9. Serwuj gorące burgery z frytkami lub sałatką.",
        others: "Czas przygotowania: około 25 minut<br> Porcje: 4<br> Poziom trudności: średni<br> Potrawa wegetariańska: Nie<br> Potrawa wegańska: Nie"
    },
    {
        id: 5,
        imageSrc: 'statics/dish5.png',
        imageAlt: 'Sushi',
        category: 'Food',
        title: 'Sushi',
        excerpt: 'Historia sushi: Sushi jest tradycyjnym japońskim daniem, które ma ponad 1000 lat historii. Pierwsze formy sushi pojawiły się w VIII wieku w Japonii i były używane jako sposób na przechowywanie ryb w fermentowanym ryżu. Wraz z upływem czasu sushi ewoluowało i różne style sushi powstały w różnych regionach Japonii. Dziś sushi jest popularne na całym świecie i jest znane ze swojej świeżości, precyzji i różnorodności.',
        allergens: "Ryby, Soja",
        how2: "Składniki:<br> - 500 g surowego łososia lub tuńczyka, w plasterkach<br> - 2 szklanki ryżu sushi<br> - 1/4 szklanki octu ryżowego<br> - 2 łyżki cukru<br> - 1 łyżeczka soli<br> - Arkusze nori (prażonych alg)<br> - Wasabi i marynowany imbir do podania<br> - Sojowy sos do podania<br> Instrukcje:<br> 1. Ryż sushi dokładnie płucz pod bieżącą wodą, aż woda stanie się przezroczysta. Odstaw na 30 minut do odsączenia.<br> 2. Gotuj ryż według instrukcji na opakowaniu lub w specjalnym urządzeniu do gotowania ryżu.<br> 3. W małym rondlu podgrzej ocet ryżowy, cukier i sól, aż cukier się rozpuści. Zdejmij z ognia i pozostaw do ostygnięcia.<br> 4. Gdy ryż będzie gotowy, przenieś go do dużej miski i polej przygotowanym octem, delikatnie mieszając, aby cały ryż został pokryty.<br> 5. Przygotuj bambusowy dywanik do zwijania sushi (makisu). Nałóż na niego arkusz nori, matową stroną do góry.<br> 6. Wilgotnymi rękami ułóż cienką warstwę ryżu na nori, pozostawiając górną krawędź wolną o szerokości około 1 cm.<br> 7. Na środku ryżu umieść plasterki łososia lub tuńczyka.<br> 8. Delikatnie podnieś dolną krawędź maty i zacznij zwijać sushi wzdłuż długości, dociskając lekko, ale nie za mocno.<br> 9. Gdy sushi jest już zwinięte, zwilż górną krawędź nori wodą, aby zamknąć rolkę.<br> 10. Powtarzaj ten proces, aż skończą się składniki.<br> 11. Ostrym nożem pokrój sushi na plasterki o grubości około 2 cm.<br> 12. Podawaj sushi z wasabi, marynowanym imbirem i sojowym sosem.",
        others: "Czas przygotowania: około 45 minut<br> Porcje: 4<br> Poziom trudności: zaawansowany<br> Potrawa wegetariańska: Nie<br> Potrawa wegańska: Nie"
    },
    {
        id: 6,
        imageSrc: 'statics/dish6.png',
        imageAlt: 'Taco',
        category: 'Food',
        title: 'Taco',
        excerpt: 'Historia taco: Taco jest tradycyjnym meksykańskim daniem, które ma długą historię sięgającą czasów prekolumbijskich. Pierwsze tacos były przygotowywane przez Azteków i Mayów, którzy używali tortilli do owinięcia różnych składników, takich jak mięso, warzywa i owoce morza. Tacos zyskały popularność w Meksyku i zostały przyjęte przez inne kultury na całym świecie. Dziś taco jest jednym z najbardziej rozpoznawalnych dań meksykańskich.',
        allergens: "Gluten, Jajka, Mleko",
        how2: "Składniki:<br> - 500 g mięsa mielonego (wołowe lub wieprzowe)<br> - 8 tortilli pszennych<br> - 1 cebula, posiekana<br> - 2 ząbki czosnku, posiekane<br> - 1 łyżka oliwy z oliwek<br> - 2 łyżki przyprawy do taco (lub mieszanka własnych przypraw)<br> - 1 papryka, pokrojona w paseczki<br> - 1 pomidor, pokrojony w kostkę<br> - 1/2 szklanki kukurydzy<br> - 1/2 szklanki czerwonej fasoli, odsączonej<br> - 1 szklanka startego sera cheddar<br> - Świeża kolendra, posiekana<br> - Sól i pieprz do smaku<br> Instrukcje:<br> 1. W dużym garnku na średnim ogniu podsmaż cebulę i czosnek na oliwie, aż staną się miękkie i lekko zeszklą.<br> 2. Dodaj mięso mielone i przyprawę do taco. Smaż, mieszając, aż mięso będzie dobrze przyrumienione.<br> 3. Dodaj pokrojoną paprykę, pomidora, kukurydzę i czerwoną fasolę do mięsa mielonego. Smaż przez kilka minut, aż warzywa będą miękkie.<br> 4. Przygotuj tortille pszenne, podgrzewając je na suchej patelni przez kilka sekund z każdej strony.<br> 5. Na każdej tortilli rozłóż porcję nadzienia mięsnego i warzywnego.<br> 6. Posyp startym serem cheddar i posypaj posiekaną kolendrą.<br> 7. Dopraw solą i pieprzem według potrzeby.<br> 8. Zwijaj tortille, formując charakterystyczną 'kopertę'.<br> 9. Taco podawaj od razu, można je podać z sosem salsa, guacamole lub śmietaną.",
        others: "Czas przygotowania: około 30 minut<br> Porcje: 4<br> Poziom trudności: łatwy<br> Potrawa wegetariańska: Nie<br> Potrawa wegańska: Nie"
    },
    {
        id: 7,
        imageSrc: 'statics/dish7.png',
        imageAlt: 'Pierogi',
        category: 'Food',
        title: 'Pierogi',
        excerpt: 'Historia pierogów: Pierogi są tradycyjnym daniem kuchni słowiańskiej, szczególnie popularnym w Polsce, Rosji, Ukrainie i innych krajach regionu. Pierwsze wzmianki o pierogach pochodzą z XIII wieku, ale przepis na pierogi był przekazywany z pokolenia na pokolenie przez wieki. Pierogi są małymi pierożkami, które są wypełnione różnymi składnikami, takimi jak mięso, kapusta, ser, owoce i inne. Są gotowane lub smażone i często podawane z sosem.',
        allergens: "Gluten, Jajka, Mleko",
        how2: "Składniki:<br> - 500 g mąki pszennej<br> - 250 ml ciepłej wody<br> - 1 jajko<br> - 300 g mięsa mielonego (wieprzowe lub mieszane)<br> - 1 cebula, posiekana<br> - 2 ząbki czosnku, posiekane<br> - 2 łyżki oleju roślinnego<br> - 1/2 łyżeczki suszonego majeranku<br> - Sól i pieprz do smaku<br> - 2 łyżki masła<br> - Opcjonalnie: kwaśna śmietana do podania<br> Instrukcje:<br> 1. Przygotuj ciasto: W misce wymieszaj mąkę, ciepłą wodę, jajko i szczyptę soli, aż powstanie jednolite ciasto. Odstaw na około 30 minut, przykryte ściereczką.<br> 2. Przygotuj farsz: W dużym garnku podsmaż cebulę i czosnek na oleju roślinnym, aż staną się miękkie i lekko zeszklą.<br> 3. Dodaj mięso mielone, majeranek, sól i pieprz. Smaż, mieszając, aż mięso będzie dobrze przyrumienione.<br> 4. Odstaw farsz do wystudzenia.<br> 5. Na stolnicy posypanej mąką rozwałkuj ciasto na cienkie placki.<br> 6. Wykrawaj kółka z ciasta (np. szklanką), nałóż na środek każdego kółka porcję farszu.<br> 7. Złącz brzegi ciasta i dokładnie zlep pierogi, formując charakterystyczną półksiężycową lub trójkątną kształt.<br> 8. W garnku z osolonym wrzącą wodą gotuj pierogi partiami. Gdy wypłyną na powierzchnię, gotuj je jeszcze przez około 2-3 minuty.<br> 9. Wyjmij pierogi cedzakiem i przełóż do głębokiego naczynia.<br> 10. Roztop masło i polej nim ugotowane pierogi.<br> 11. Opcjonalnie podawaj pierogi z kwaśną śmietaną.",
        others: "Czas przygotowania: około 60 minut<br> Porcje: 4-6<br> Poziom trudności: średni<br> Potrawa wegetariańska: Nie<br> Potrawa wegańska: Nie"
    },
    {
        id: 8,
        imageSrc: 'statics/dish8.png',
        imageAlt: 'Curry',
        category: 'Food',
        title: 'Curry',
        excerpt: 'Historia curry: Curry to popularne danie z kuchni indyjskiej, które ma długą historię sięgającą tysiące lat. Pierwsze wzmianki o curry można znaleźć w starożytnych tekstach indyjskich datowanych na IV wiek p.n.e. Curry składa się z różnych przypraw, takich jak kurkuma, kolendra, cynamon, kardamon i inne, które są używane do przygotowania aromatycznego sosu. Curry jest podawane z różnymi składnikami, takimi jak mięso, ryby, warzywa i ryż.',
        allergens: "Mleko",
        how2: "Składniki:<br> - 500 g mięsa (kurczak, wołowina lub krewetki), pokrojonego w kawałki<br> - 2 łyżki oleju roślinnego<br> - 1 duża cebula, posiekana<br> - 3 ząbki czosnku, posiekane<br> - 1 łyżka świeżo startego imbiru<br> - 2 łyżki pasty curry (można użyć gotowej pasty lub przygotować własną)<br> - 400 ml mleka kokosowego<br> - 2 łyżki sosu rybnego (opcjonalnie, dla wersji mięsnej)<br> - 2 marchewki, pokrojone w plasterki<br> - 1 papryka, pokrojona w paseczki<br> - 1 ziemniak, pokrojony w kostkę<br> - Świeża kolendra, posiekana<br> - Sól i pieprz do smaku<br> - Ryż do podania<br> Instrukcje:<br> 1. W dużym garnku lub głębokiej patelni rozgrzej olej roślinny na średnim ogniu.<br> 2. Dodaj cebulę, czosnek i imbir, smaż aż będą miękkie i aromatyczne.<br> 3. Dodaj mięso (kurczaka, wołowinę lub krewetki) i smaż, aż mięso będzie dobrze przyrumienione.<br> 4. Dodaj pastę curry i dobrze wymieszaj, aby mięso zostało pokryte przyprawami.<br> 5. Wlej mleko kokosowe i sos rybny (opcjonalnie) do garnka, gotuj na małym ogniu przez 15-20 minut, aż mięso będzie miękkie i soczyste.<br> 6. Dodaj pokrojone warzywa (marchewki, paprykę, ziemniaka) i gotuj, aż będą miękkie, ale jeszcze chrupiące.<br> 7. Dopraw curry solą i pieprzem według własnego smaku.<br> 8. Podawaj curry na ugotowanym ryżu, posypane świeżo posiekaną kolendrą.",
        others: "Czas przygotowania: około 45 minut<br> Porcje: 4<br> Poziom trudności: średni<br> Potrawa wegetariańska: Nie<br> Potrawa wegańska: Nie"
        
    }, 
    {
        id: 9,
        imageSrc: 'statics/dish9.png',
        imageAlt: 'Steak',
        category: 'Food',
        title: 'Steak',
        excerpt: 'Historia steka: Steak jest popularnym daniem mięsnym, szczególnie cenionym przez miłośników wołowiny. Historia steka sięga starożytnych czasów, kiedy to ludzie zaczęli spożywać mięso z zwierząt łownych. Jednak jako potrawa specjalna i rytualna, przygotowanie steka zaczęło się rozwijać wraz z rozwojem technik kulinarnych i sztuki grillowania. Dziś stek jest często podawany z różnymi dodatkami, takimi jak sosy, warzywa czy ziemniaki.',
        allergens: "Brak alergenów",
        how2: "Składniki:<br> - 2 kawałki steka (np. wołowego, antrykot lub rostbef) o grubości około 2,5 cm<br> - 2 łyżki oliwy z oliwek<br> - 2 ząbki czosnku, rozgniecione<br> - 2 gałązki rozmarynu<br> - 2 gałązki tymianku<br> - Sól i pieprz do smaku<br> - 2 łyżki masła<br> Instrukcje:<br> 1. Wyjmij steki z lodówki na około 30 minut przed przygotowaniem, aby osiągnęły temperaturę pokojową.<br> 2. W międzyczasie posól i popieprz steki z obu stron.<br> 3. Rozgrzej oliwę na dużej patelni lub grillu na średnim ogniu.<br> 4. Dodaj rozgniecione ząbki czosnku, gałązki rozmarynu i tymianku do gorącej oliwy. Smaż przez chwilę, aby uwalniły aromat.<br> 5. Umieść steki na patelni lub grillu i smaż przez 3-4 minuty z każdej strony (czas smażenia może się różnić w zależności od preferowanego stopnia wysmażenia).<br> 6. W trakcie smażenia dodaj masło na patelnię i podlewaj nim steki, aby były soczyste i aromatyczne.<br> 7. Gdy steki osiągną pożądany stopień wysmażenia, wyjmij je z patelni i pozostaw do odrobinę odpoczynku na talerzu przez kilka minut, aby mięso odpoczęło i równomiernie się rozprowadziły soki.<br> 8. Podawaj steki z ulubionymi dodatkami, np. pieczonymi ziemniakami i warzywami.",
        others: "Czas przygotowania: około 40 minut (wliczając czas na osiągnięcie temperatury pokojowej steków)<br> Porcje: 2<br> Poziom trudności: średni<br> Potrawa wegetariańska: Nie<br> Potrawa wegańska: Nie"
        
    },  
    {
        id: 10,
        imageSrc: 'statics/dish10.png',
        imageAlt: 'Kebab',
        category: 'Food',
        title: 'Kebab',
        excerpt: 'Historia kebaba: Kebab jest tradycyjnym daniem kuchni Bliskiego Wschodu, które ma długą historię sięgającą starożytności. Pierwsze wzmianki o kebabie można znaleźć w starożytnych tekstach perskich datowanych na I tysiąclecie p.n.e. Kebab składa się z kawałków mięsa, takich jak wołowina, baranina, kurczak lub mięso mielone, które są grillowane na rożnie lub smażone. Kebab jest często podawany wraz z warzywami, sałatkami i sosem.',
        allergens: "Gluten, Jajka",
        how2: "Składniki:<br> - 500 g mięsa mielonego (jagnięcina, kurczak lub mieszanka mięs)<br> - 2 łyżki oliwy z oliwek<br> - 2 ząbki czosnku, posiekane<br> - 1 cebula, posiekana<br> - 1 łyżka przyprawy kebab (można użyć gotowej mieszanki lub przygotować własną)<br> - 1/2 łyżeczki mielonego kuminu<br> - 1/2 łyżeczki mielonej papryki<br> - 1/2 łyżeczki mielonego imbiru<br> - Sól i pieprz do smaku<br> - 4 placki do kebaba (np. tortille lub chleb pita)<br> - Sałata, pomidory, cebula, ogórek - pokrojone w plasterki<br> - Opcjonalnie: jogurt naturalny lub sos czosnkowy<br> Instrukcje:<br> 1. W misce wymieszaj mięso mielone, oliwę, czosnek, cebulę, przyprawę kebab, kumin, paprykę, imbir, sól i pieprz, aż składniki się połączą.<br> 2. Formuj cienkie i długie kotlety z mięsa mielonego.<br> 3. Na rozgrzanej grillowej patelni lub grillu smaż kebaby z obu stron, aż będą dobrze przyrumienione i miękkie.<br> 4. Podgrzej placki do kebaba według instrukcji na opakowaniu lub na suchej patelni.<br> 5. Na każdym placku umieść sałatę, plasterki pomidorów, cebulę i ogórka.<br> 6. Połóż na warzywach jeden kotlet kebaba i zwiń placki w charakterystyczny kształt rolki.<br> 7. Kebaby podawaj ciepłe, można je polać jogurtem naturalnym lub sosem czosnkowym.",
        others: "Czas przygotowania: około 30 minut<br> Porcje: 4<br> Poziom trudności: łatwy<br> Potrawa wegetariańska: Nie<br> Potrawa wegańska: Nie" 
    }
];
return MockupData
}

const MockupData = LoadMockupData();


const articleContainer = document.getElementsByClassName('article-container')[0];

function createArticleElement(data) {
    const article = document.createElement('article');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const a = document.createElement('a');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    article.className = 'article-card';
    article.id = data.id;
    figure.className = 'article-image';
    div.className = 'article-content';
    a.className = 'card-category';
    h3.className = 'card-title';
    p.className = 'card-excerpt';

    img.src = data.imageSrc;
    img.alt = data.imageAlt;
    a.href = '#';
    a.textContent = data.category;
    h3.textContent = data.title;
    p.textContent = data.excerpt;

    figure.appendChild(img);
    div.appendChild(a);
    div.appendChild(h3);
    div.appendChild(p);
    article.appendChild(figure);
    article.appendChild(div);

    return article;
}

function renderArticles() {
    MockupData.forEach((data, index) => {
        data.id = index+1;
        const article = createArticleElement(data);
        articleContainer.appendChild(article);
    });
}

function filterContentByString() {
    const inputValue = document.querySelector('input[name="q"]').value.toLowerCase();
    const articles = articleContainer.getElementsByClassName('article-card');

    Array.from(articles).forEach(article => {
        const title = article.querySelector('.card-title').textContent.toLowerCase();
        const excerpt = article.querySelector('.card-excerpt').textContent.toLowerCase();
        const category = article.querySelector('.card-category').textContent.toLowerCase();

        if (title.includes(inputValue) || excerpt.includes(inputValue)  || category.includes(inputValue)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

renderArticles();


function WhichDetailCategory(category) {
    document.getElementById('ShowingDetails').setAttribute('name', category);
}

const basicActiveDetail = {
    Allegrens: "W tym miejscu po wyborze dania pojawia sie informacje o alergenach zawartych w daniu",
    How2: "W tym miejscu po wyborze dania pojawia sie informacje o tym jak ugotować to danie",
    Others: "W tym miejscu po wyborze dania pojawia sie informacje dodatkowe"
};

var lastClickedId;

function showArticleDetails(event) {
    var activeDetail = document.getElementById('ShowingDetails');

    if (!event.currentTarget){ 
        if (lastClickedId == null){
            activeDetail.innerHTML = basicActiveDetail[event];
            activeDetail.setAttribute('name', event);
        }
        else{
            const articleData = MockupData.find(data => data.id == lastClickedId);
            activeDetail.innerHTML = basicActiveDetail[event];
            activeDetail.setAttribute('name', event);
            if (activeDetail.getAttribute('name') == "Allegrens")
                activeDetail.innerHTML = "Alergeny dla " + articleData.title + "<br>" + articleData.allergens;
    
            if (activeDetail.getAttribute('name') == "How2")
                activeDetail.innerHTML = "How2 dla " + articleData.title + "<br>" + articleData.how2;
    
            if (activeDetail.getAttribute('name') == "Others")
                activeDetail.innerHTML = "Others dla " + articleData.title +"<br>" + articleData.others;
        }
    }
    else{
        lastClickedId = event.currentTarget.id;
        const articleData = MockupData.find(data => data.id == event.currentTarget.id);

        if (activeDetail.getAttribute('name') == "Allegrens")
        activeDetail.innerHTML = "Alergeny dla " + articleData.title + "<br>" + articleData.allergens;

        if (activeDetail.getAttribute('name') == "How2")
            activeDetail.innerHTML = "How2 dla " + articleData.title + "<br>" + articleData.how2;

        if (activeDetail.getAttribute('name') == "Others")
            activeDetail.innerHTML = "Others dla " + articleData.title +"<br>" + articleData.others;
    }
}






const articleCards = document.getElementsByClassName('article-card');
Array.from(articleCards).forEach(card => {
    card.addEventListener('click', showArticleDetails);
});


const ShowMoreDetails = (event) =>{
    const articleData = MockupData.find(data => data.id == event.currentTarget.id);
    console.log("Double tapped on card id: "+ articleData.id);
}

Array.from(articleCards).forEach(card => {
    card.addEventListener('dblclick', ShowMoreDetails);
});

