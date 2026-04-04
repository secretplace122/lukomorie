const directionsData = [
    { id: 1, name: "Айкидо", category: "sport", price: "700 ₽", age: "4+", desc: "Восточное боевое искусство развивает силу духа, координацию, выносливость. Айкидо для детей доступно с 4 лет. Философия этого боевого искусства заключается в использовании силы противника против него самого. Что можно развить: уверенность в себе, внимательность, координацию, выносливость, силу, гибкость, спокойствие. Также есть выездные мероприятия, показательные выступления, фестивали, семинары, летние лагеря и учебно-тренировочные сборы.", img: "img/aikido.webp" },
    { id: 2, name: "Английский язык", category: "intellect", price: "600 ₽", age: "4+", desc: "Развитие речи, словарный запас, игровые методики. Занятия в мини-группах и индивидуально. Английский язык для детей от 4 лет и школьников. Подготовка к школе, помощь с домашним заданием, разговорный клуб.", img: "img/angliskiiyazyk.webp" },
    { id: 3, name: "Курс каллиграфии", category: "intellect", price: "8500 ₽ (курс)", age: "7+", desc: "Красивый почерк за 20 уроков, снижение стресса при письме. Одна из больных тем почти у всех младших школьников – это почерк. Преподаватели часто снижают оценки, когда буквы и цифры вылезают за линии. Курс «Красивый почерк за 20 уроков» создавался для младших школьников, но оказался востребованным и у старшеклассников, и даже у взрослых.", img: "img/kyrsikalligrafii.webp" },
    { id: 4, name: "Скорочтение", category: "intellect", price: "700 ₽", age: "7+", desc: "Повышение скорости чтения в 3-5 раз, развитие памяти. Скорочтение позволяет повысить скорость восприятия информации в 3-5 раз. Развивается память и концентрация внимания. Способность к усидчивости и вдумчивой работе помогает психологически подготовится к школе, в дальнейшем упрощает процесс обучения в целом.", img: "img/kyrsiskorochtenia.webp" },
    { id: 5, name: "Лепка из глины", category: "art", price: "700 ₽", age: "4+", desc: "Создание интерьерных изделий, посуды, развитие креативности. Глина имеет неповторимую и приятную консистенцию. Дети любят возиться с ней и играть. Наш преподаватель научит разным техникам лепки. Взрослым предлагаем лепить полезные интерьерные изделия, посуду, тарелочки, тематические фигурки.", img: "img/lepka.webp" },
    { id: 6, name: "Логопед и дефектолог", category: "health", price: "1500 ₽", age: "3+", desc: "Коррекция речи, постановка звуков, развитие фонематического слуха. Логопед – это педагог, занимающийся коррекцией и развитием речи. Диагностика речевых нарушений, коррекция звукопроизношения, развитие артикуляционного аппарата и дикции, работа над слоговой структурой слова, развитие связной речи, развитие высших психических функций.", img: "img/logoped.webp" },
    { id: 7, name: "Логопедическое чтение", category: "health", price: "700 ₽", age: "5+", desc: "Звуковая мозаика, развитие речи через чтение. Специальная методика сочетающая логопедические упражнения с чтением. Помогает детям с речевыми трудностями освоить чтение и улучшить произношение одновременно.", img: "img/logopedchtenie.webp" },
    { id: 8, name: "Логоритмика", category: "health", price: "700 ₽", age: "3+", desc: "Развитие чувства ритма, речи и координации движений. Логоритмика сочетает движение, музыку и речь. Это отличный способ развить речевой слух, чувство ритма и общую моторику ребенка.", img: "img/logoritmika.webp" },
    { id: 9, name: "Мастер-классы", category: "art", price: "от 600 ₽", age: "4+", desc: "Бисероплетение, роспись, керамика, слаймы и другое. Мастер-классы для детей: бисероплетение, живопись шерстью, лепка из самозатвердевающей глины, роспись футболок и пряников, керамика, изготовление слайма.", img: "img/masterklass.webp" },
    { id: 10, name: "Мини-сад", category: "health", price: "1500 ₽", age: "3-7 лет", desc: "Комплексное развитие, речь, логика, творчество, присмотр педагогов. Мини-сад открыт с 10:00 до 13:00 для детей от 3-х лет. Занятия направлены на всестороннее комплексное развитие: зрительные, тактильные, звуковые ощущения, развитие речи, социальное воспитание, физическую активность, мелкую моторику, логику, творчество.", img: "img/minisad.webp" },
    { id: 11, name: "Музыка", category: "art", price: "700 ₽", age: "3+", desc: "Развитие слуха, чувства ритма, вокальные навыки. Музыкальные занятия развивают слух, чувство ритма, память и творческие способности. Дети учатся петь, играть на простых инструментах и понимать музыку.", img: "img/muzika.webp" },
    { id: 12, name: "Нейрофитнес", category: "health", price: "700 ₽", age: "4+", desc: "Гимнастика для мозга, улучшение памяти и концентрации. Нейрофитнес - это научно обоснованная гимнастика для тренировки мозга. Позволяет развивать одновременно правое и левое полушарие мозга, повышает нейропластичность. Улучшает концентрацию внимания, память, скорость мышления, помогает подготовиться к школе, снижает проявления СДВГ.", img: "img/neirofitness.webp" },
    { id: 13, name: "Общее развитие", category: "intellect", price: "700 ₽", age: "1+", desc: "Занятия с мамой, сенсорика, мелкая моторика. Развивающие занятия для самых маленьких. Вместе с мамой малыши познают мир через сенсорные игры, развивают мелкую моторику, речь и координацию.", img: "img/obsheerazvitie.webp" },
    { id: 14, name: "Подготовка к школе", category: "intellect", price: "600 ₽", age: "5-7 лет", desc: "Комплексная подготовка детей к школе. Обучение чтению, письму, счету, развитие логического мышления, памяти и внимания. Психологическая подготовка к школьной жизни.", img: "img/podgotovkakshkole.webp" },
    { id: 15, name: "Психолог и нейропсихолог", category: "health", price: "2000 ₽", age: "3+", desc: "Профессиональная помощь психолога и нейропсихолога. Диагностика готовности к школе, коррекция трудностей обучения, развитие высших психических функций, работа с тревожностью и поведенческими проблемами.", img: "img/psyholog.webp" },
    { id: 16, name: "Развивающие занятия", category: "intellect", price: "600 ₽", age: "1-3 года", desc: "Раннее развитие для малышей от 1 года. Занятия проходят вместе с мамой. Развитие речи, сенсорики, мелкой моторики, музыкальных и творческих способностей.", img: "img/razvivayshiezanatia.webp" },
    { id: 17, name: "Репетитор русский язык", category: "intellect", price: "1200 ₽", age: "7+", desc: "Индивидуальные занятия по русскому языку. Помощь в освоении школьной программы, подготовка к ВПР, ОГЭ и ЕГЭ. Устранение пробелов в знаниях.", img: "img/repetitorruskiyazik.webp" },
    { id: 18, name: "Рисование", category: "art", price: "700 ₽", age: "3+", desc: "Рисование для детей группы от 3-х лет, 4-7 лет, школьники. Рисование оказывает на психику ребенка терапевтическое воздействие, помогает справиться со стрессом и страхами. Развивает чувство пропорции, гармонии и красоты, пространственное и абстрактное мышление.", img: "img/risovanie.webp" },
    { id: 19, name: "Ритмика", category: "sport", price: "600 ₽", age: "3+", desc: "Ритмика для детей. Развитие чувства ритма, музыкального слуха, координации движений, пластики и грации. Подготовка к танцам и хореографии.", img: "img/ritmika.webp" },
    { id: 20, name: "Робототехника", category: "intellect", price: "1200 ₽", age: "5+", desc: "Робототехника для детей от 5 лет в мини-группах. Развивает физические и умственные способности ребенка. Сочетает математику, физику, информатику и логику, творческую деятельность и коммуникацию.", img: "img/robototehnika.webp" },
    { id: 21, name: "Шахматы", category: "intellect", price: "700 ₽", age: "5+", desc: "Шахматы для детей от 5 лет в мини-группах и индивидуально. Развитие памяти и логического мышления. Навыки, приобретенные во время игры, пригодятся ребенку в будущем в учебе и жизни.", img: "img/shahmaty.webp" },
    { id: 22, name: "Столярная мастерская", category: "art", price: "900 ₽", age: "4-13 лет", desc: "Детская столярная мастерская, где ребята от 4 до 13 лет мастерят из дерева, работают ручным инструментом и на станке, создают собственные проекты. Абонемент на 4 занятия - 3000 рублей. Все поделки дети уносят домой!", img: "img/stolyarka.webp" },
    { id: 23, name: "Вокал", category: "art", price: "1000 ₽", age: "5+", desc: "Вокал для детей. Постановка голоса, развитие музыкального слуха и чувства ритма. Подготовка к выступлениям, участие в концертах.", img: "img/vokal.webp" },
    { id: 24, name: "Курс 'Учим цифры'", category: "intellect", price: "700 ₽", age: "4-6 лет", desc: "Универсальный инструмент для обучения ребенка цифрам и основам нумерации. В комплекте: рабочая тетрадь, наглядные пособия. Ребенок научится соотносить количество предметов с числом, записывать цифры, выполнять графические диктанты.", img: "img/kyrsikalligrafii.webp" }
];

const holidaysData = [
    { name: "День Рождения", price: "от 5000 ₽", desc: "Аниматоры, шоу, лабиринт, батуты, фотозона. Площадь помещения 270 м2, большая игровая зона, лабиринт, сухой бассейн, батуты. Богатый выбор аниматорских программ. День Рождения в ЛУКОМОРЬЕ от 5000 ₽.", img: "img/denrozhdenia.webp" },
    { name: "Аниматор", price: "4500 ₽", desc: "Любимые герои: Железный человек, Человек-паук, Леди Баг, Черепашки-ниндзя, Тролли и многие другие! Зажигательный праздник с любимым супер-героем.", img: "img/animator.webp" },
    { name: "Аренда зала", price: "1500 ₽", desc: "Зеркальный зал с 3D граффити на стене. Ярко оформленный зеркальный зал подходит для вечеринок и фотосессий. Отдельный малый зал для проведения мероприятий и праздников 30 м2.", img: "img/arendazala.webp" },
    { name: "Бумажное шоу", price: "2000 ₽", desc: "Неоновая дискотека с бумагой тишью. Белоснежные мягкие полоски бумаги, музыкальное и неоновое световое сопровождение. Эффект 100% потрясающий.", img: "img/bymazhnoeshou.webp" },
    { name: "Пиньята", price: "2000 ₽", desc: "Сладкий сюрприз, конфетти. Полная игрушка из папье-маше, наполненная конфетами, киндер-сюрпризами, серпантином, маленькими сувенирами.", img: "img/pinyata.webp" },
    { name: "Пиратский квест", price: "4500 ₽", desc: "Поиск сокровищ, 7+ лет. Пиратский квест «В поисках сокровищ»: поиски карты, сундука с сокровищами, логические задания, головоломки, загадки. История пиратства, азбука Морзе, вязание морских узлов.", img: "img/piratskiikvest.webp" },
    { name: "Поролон-шоу", price: "7500 ₽", desc: "Море веселья и мягкий поролон. Поролон-шоу на День Рождения ребенка гарантирует море веселья и океан позитивных эмоций.", img: "img/porolonshou.webp" },
    { name: "Шоу мыльных пузырей", price: "3500 ₽", desc: "Мыльные пузыри вызывают восторг у любого ребенка. Радость у маленьких деток и их родителей!", img: "img/shoumylnihpuzirei.webp" },
    { name: "Сердце-курьер", price: "1500 ₽", desc: "Поздравление с праздником, признание. Сердце-курьер поздравит с Днем Рождения, 8 марта, 23 февраля или годовщиной. Вручит подарок-впечатление, букет цветов, признается в любви.", img: "img/serdcekurier.webp" },
    { name: "Украшение шарами", price: "от 130 ₽", desc: "Оформление праздника. Заказать оформление шарами можно в нашем центре. Различные варианты оформления, тематика, цветовая гамма.", img: "img/ukrasheniesharami.webp" },
    { name: "Отдельный зал 30м2", price: "1500 ₽", desc: "Малый зал для мероприятий. Отдельный малый зал для проведения мероприятий и праздников 30 м2. Зеркальный зал с 3D граффити на стене.", img: "img/otdelniyzal.webp" }
];

const scheduleData = {
    "Понедельник": [
        { time: "09:00-12:00", lesson: "Продлёнка", teacher: "", duration: "3ч" },
        { time: "13:00-18:00", lesson: "Продлёнка", teacher: "", duration: "5ч" },
        { time: "14:00-15:00", lesson: "Психолог", teacher: "Говоркова В.В.", duration: "1ч" },
        { time: "18:00-19:00", lesson: "Айкидо младшая", teacher: "Шабалов И.Н.", duration: "1ч" },
        { time: "19:00-20:00", lesson: "Айкидо средняя", teacher: "Шабалов И.Н.", duration: "1ч" },
        { time: "20:00-21:00", lesson: "Айкидо старшая", teacher: "Шабалов И.Н.", duration: "1ч" },
        { time: "09:00-20:00", lesson: "Игровая комната", teacher: "по записи", duration: "11ч" }
    ],
    "Вторник": [
        { time: "09:00-12:00", lesson: "Продлёнка", teacher: "", duration: "3ч" },
        { time: "11:00-11:45", lesson: "Вместе с мамой 1-2", teacher: "Черкасова Т.Г.", duration: "45мин" },
        { time: "12:00-12:45", lesson: "Вместе с мамой 2-2.5", teacher: "Черкасова Т.Г.", duration: "45мин" },
        { time: "13:00-18:00", lesson: "Продлёнка", teacher: "", duration: "5ч" },
        { time: "17:00-18:00", lesson: "Каллиграфия", teacher: "Черкасова Т.Г.", duration: "1ч" },
        { time: "17:00-18:00", lesson: "Айкидо новички", teacher: "Головин И.И.", duration: "1ч" },
        { time: "17:30-18:15", lesson: "Ритмика", teacher: "", duration: "45мин" },
        { time: "18:00-19:00", lesson: "Айкидо", teacher: "Головин И.И.", duration: "1ч" },
        { time: "18:15-19:00", lesson: "Рисование младшая", teacher: "Никитина О.А.", duration: "45мин" },
        { time: "19:00-20:00", lesson: "Рисование старшая", teacher: "Никитина О.А.", duration: "1ч" },
        { time: "19:00-20:00", lesson: "Дошколята (5+)", teacher: "Плотникова С.В.", duration: "1ч" }
    ],
    "Среда": [
        { time: "09:00-12:00", lesson: "Продлёнка", teacher: "", duration: "3ч" },
        { time: "13:00-18:00", lesson: "Продлёнка", teacher: "", duration: "5ч" },
        { time: "11:00-14:00", lesson: "Мини сад", teacher: "Черкасова Т.Г.", duration: "3ч" },
        { time: "15:00-15:45", lesson: "Английский язык", teacher: "Коржатов В.И.", duration: "45мин" },
        { time: "16:00-16:45", lesson: "Шахматы", teacher: "Коржатов В.И.", duration: "45мин" },
        { time: "18:00-19:00", lesson: "Айкидо младшая", teacher: "Шабалов И.Н.", duration: "1ч" },
        { time: "19:00-20:00", lesson: "Айкидо средняя", teacher: "Шабалов И.Н.", duration: "1ч" },
        { time: "19:00-19:45", lesson: "Английский язык", teacher: "Коржатов В.И.", duration: "45мин" },
        { time: "20:00-21:00", lesson: "Айкидо старшая", teacher: "Шабалов И.Н.", duration: "1ч" }
    ],
    "Четверг": [
        { time: "09:00-12:00", lesson: "Продлёнка", teacher: "", duration: "3ч" },
        { time: "11:00-11:45", lesson: "Вместе с мамой 1-2", teacher: "Черкасова Т.Г.", duration: "45мин" },
        { time: "12:00-12:45", lesson: "Вместе с мамой 2-2.5", teacher: "Черкасова Т.Г.", duration: "45мин" },
        { time: "13:00-18:00", lesson: "Продлёнка", teacher: "", duration: "5ч" },
        { time: "17:00-18:00", lesson: "Каллиграфия", teacher: "Черкасова Т.Г.", duration: "1ч" },
        { time: "17:00-18:00", lesson: "Айкидо новички", teacher: "Головин И.И.", duration: "1ч" },
        { time: "17:30-18:15", lesson: "Ритмика", teacher: "", duration: "45мин" },
        { time: "18:00-19:00", lesson: "Айкидо основная", teacher: "Головин И.И.", duration: "1ч" },
        { time: "18:15-19:15", lesson: "Цигун (взрослые)", teacher: "Черкасов О.Б.", duration: "1ч" },
        { time: "18:15-19:00", lesson: "Рисование младшая", teacher: "Никитина О.А.", duration: "45мин" },
        { time: "19:00-20:00", lesson: "Рисование старшая", teacher: "Никитина О.А.", duration: "1ч" },
        { time: "19:00-20:00", lesson: "Дошколята (5+)", teacher: "Плотникова С.В.", duration: "1ч" }
    ],
    "Пятница": [
        { time: "09:00-12:00", lesson: "Продлёнка", teacher: "", duration: "3ч" },
        { time: "10:00-13:00", lesson: "Мини сад 4-5", teacher: "Черкасова Т.Г.", duration: "3ч" },
        { time: "13:00-18:00", lesson: "Продлёнка", teacher: "", duration: "5ч" },
        { time: "11:00-14:00", lesson: "Мини сад", teacher: "Черкасова Т.Г.", duration: "3ч" },
        { time: "14:00-14:45", lesson: "Английский 5-6", teacher: "Карина О.", duration: "45мин" },
        { time: "15:00-15:45", lesson: "Английский 10кл", teacher: "Карина О.", duration: "45мин" },
        { time: "16:00-16:45", lesson: "Английский язык", teacher: "Карина О.", duration: "45мин" },
        { time: "17:00-18:00", lesson: "Каллиграфия", teacher: "Черкасова Т.Г.", duration: "1ч" },
        { time: "17:30-19:00", lesson: "Столярная", teacher: "Черкасов О.Б.", duration: "1.5ч" },
        { time: "18:00-19:00", lesson: "Айкидо младшая", teacher: "Шабалов И.Н.", duration: "1ч" },
        { time: "18:00-19:00", lesson: "Нейрофитнес", teacher: "Черкасова Т.Г.", duration: "1ч" },
        { time: "19:00-20:00", lesson: "Айкидо средняя", teacher: "Шабалов И.Н.", duration: "1ч" },
        { time: "19:00-20:30", lesson: "Столярная", teacher: "Черкасов О.Б.", duration: "1.5ч" },
        { time: "19:00-20:00", lesson: "Каллиграфия", teacher: "Черкасова Т.Г.", duration: "1ч" },
        { time: "20:00-21:00", lesson: "Айкидо старшая", teacher: "Шабалов И.Н.", duration: "1ч" }
    ],
    "Суббота": [
        { time: "12:00-15:00", lesson: "День рождения", teacher: "по записи", duration: "3ч" },
        { time: "15:00-18:00", lesson: "День рождения", teacher: "по записи", duration: "3ч" },
        { time: "18:00-21:00", lesson: "День рождения", teacher: "по записи", duration: "3ч" },
        { time: "09:30-11:00", lesson: "Дошколята", teacher: "Плотникова С.В.", duration: "1.5ч" },
        { time: "10:00-11:00", lesson: "Каллиграфия", teacher: "Черкасова Т.Г.", duration: "1ч" },
        { time: "11:15-12:00", lesson: "Английский шк.", teacher: "Коржатов В.И.", duration: "45мин" },
        { time: "12:00-12:45", lesson: "Английский шк.", teacher: "Коржатов В.И.", duration: "45мин" },
        { time: "13:00-13:45", lesson: "Шахматы", teacher: "Коржатов В.И.", duration: "45мин" },
        { time: "13:45-14:30", lesson: "Шахматы", teacher: "Коржатов В.И.", duration: "45мин" },
        { time: "14:30-15:15", lesson: "Английский шк.", teacher: "Коржатов В.И.", duration: "45мин" },
        { time: "15:15-16:00", lesson: "Английский шк.", teacher: "Коржатов В.И.", duration: "45мин" },
        { time: "16:00-17:00", lesson: "Лепка старшая", teacher: "Тарасова Л.Ю.", duration: "1ч" },
        { time: "17:00-18:00", lesson: "Лепка младшая", teacher: "Тарасова Л.Ю.", duration: "1ч" },
        { time: "18:00-19:00", lesson: "Лепка взрослые", teacher: "Тарасова Л.Ю.", duration: "1ч" }
    ],
    "Воскресенье": [
        { time: "11:00-14:00", lesson: "День рождения", teacher: "по записи", duration: "3ч" },
        { time: "14:00-17:00", lesson: "День рождения", teacher: "по записи", duration: "3ч" },
        { time: "17:00-20:00", lesson: "День рождения", teacher: "по записи", duration: "3ч" },
        { time: "10:00-15:00", lesson: "Логопед-дефектолог", teacher: "", duration: "5ч" },
        { time: "16:00-18:00", lesson: "Рисование старшая", teacher: "Никитина О.А.", duration: "2ч" }
    ]
};

document.getElementById('currentYear').textContent = new Date().getFullYear();

if (window.innerWidth > 768) {
    window.addEventListener("scroll", function () {
        var bg = document.getElementById("parallaxBg");
        if (bg) {
            var scrolled = window.scrollY;
            var maxScroll = document.body.scrollHeight - window.innerHeight;
            var percent = maxScroll > 0 ? scrolled / maxScroll : 0;
            var translateY = percent * 30;
            bg.style.transform = "translateY(" + translateY + "px)";
        }
    });
}

function createLeaves() {
    var container = document.getElementById("leavesContainer");
    if (!container) return;
    for (var i = 0; i < 20; i++) {
        var leaf = document.createElement("div");
        leaf.classList.add("leaf");
        leaf.style.left = Math.random() * 100 + "%";
        leaf.style.width = 12 + Math.random() * 16 + "px";
        leaf.style.height = leaf.style.width;
        leaf.style.animationDuration = 8 + Math.random() * 12 + "s";
        leaf.style.animationDelay = Math.random() * 10 + "s";
        leaf.style.opacity = 0.3 + Math.random() * 0.5;
        container.appendChild(leaf);
    }
}

function scrollToBooking() {
    var bookingSection = document.getElementById("booking");
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
    }
}

function openDetailModal(item) {
    var modal = document.getElementById("detailModal");
    var modalImg = document.getElementById("modalImg");
    var modalTitle = document.getElementById("modalTitle");
    var modalPrice = document.getElementById("modalPrice");
    var modalAge = document.getElementById("modalAge");
    var modalDesc = document.getElementById("modalDesc");
    modalImg.style.backgroundImage = "url('" + item.img + "')";
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.price;
    modalAge.innerHTML = "Возраст: " + (item.age || "любой");
    modalDesc.textContent = item.desc;
    modal.style.display = "flex";
}

function renderDirections(filter) {
    if (filter === undefined) filter = "all";
    var grid = document.getElementById("directionsGrid");
    if (!grid) return;
    var filtered = filter === "all" ? directionsData : directionsData.filter(function (d) { return d.category === filter; });
    var html = "";
    for (var i = 0; i < filtered.length; i++) {
        var d = filtered[i];
        html += '<div class="card">' +
            '<div class="card__img" style="background-image: url(\'' + d.img + '\');">' +
            '<span class="card__badge">' + d.age + '</span>' +
            '</div>' +
            '<div class="card__content">' +
            '<h3 class="card__title">' + d.name + '</h3>' +
            '<div class="card__price">' + d.price + '</div>' +
            '<p class="card__desc">' + d.desc.substring(0, 100) + '...</p>' +
            '<div class="card__buttons">' +
            '<button class="btn btn--card" data-service="' + d.name + '">Выбрать</button>' +
            '<button class="btn btn--details" data-detail=\'' + JSON.stringify(d).replace(/'/g, "&#39;") + '\'>Подробнее</button>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    grid.innerHTML = html;

    var cardBtns = document.querySelectorAll(".btn--card");
    for (var j = 0; j < cardBtns.length; j++) {
        cardBtns[j].addEventListener("click", function (e) {
            var service = this.getAttribute("data-service");
            var commentField = document.getElementById("comment");
            if (commentField) {
                var currentComment = commentField.value;
                commentField.value = currentComment ? currentComment + "\nУслуга: " + service : "Услуга: " + service;
            }
            scrollToBooking();
        });
    }

    var detailBtns = document.querySelectorAll(".btn--details");
    for (var k = 0; k < detailBtns.length; k++) {
        detailBtns[k].addEventListener("click", function (e) {
            var data = JSON.parse(this.getAttribute("data-detail"));
            openDetailModal(data);
        });
    }
}

function renderHolidays() {
    var container = document.getElementById("holidaysGrid");
    if (!container) return;
    var html = "";
    for (var i = 0; i < holidaysData.length; i++) {
        var h = holidaysData[i];
        html += '<div class="holiday-card">' +
            '<div class="holiday-card__img" style="background-image: url(\'' + h.img + '\');"></div>' +
            '<div class="holiday-card__content">' +
            '<h3 class="holiday-card__title">' + h.name + '</h3>' +
            '<div class="card__price">' + h.price + '</div>' +
            '<p class="card__desc">' + h.desc.substring(0, 100) + '...</p>' +
            '<div class="card__buttons">' +
            '<button class="btn btn--card" data-service="' + h.name + '">Выбрать</button>' +
            '<button class="btn btn--details" data-detail=\'' + JSON.stringify(h).replace(/'/g, "&#39;") + '\'>Подробнее</button>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    container.innerHTML = html;

    var cardBtns = document.querySelectorAll(".btn--card");
    for (var j = 0; j < cardBtns.length; j++) {
        cardBtns[j].addEventListener("click", function (e) {
            var service = this.getAttribute("data-service");
            var commentField = document.getElementById("comment");
            if (commentField) {
                var currentComment = commentField.value;
                commentField.value = currentComment ? currentComment + "\nУслуга: " + service : "Услуга: " + service;
            }
            scrollToBooking();
        });
    }

    var detailBtns = document.querySelectorAll(".btn--details");
    for (var k = 0; k < detailBtns.length; k++) {
        detailBtns[k].addEventListener("click", function (e) {
            var data = JSON.parse(this.getAttribute("data-detail"));
            openDetailModal(data);
        });
    }
}

function renderScheduleCarousel() {
    var weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    var track = document.getElementById("scheduleTrack");
    if (!track) return;
    var html = "";
    for (var i = 0; i < weekdays.length; i++) {
        var day = weekdays[i];
        var lessons = scheduleData[day] || [];
        var lessonsHtml = "";
        for (var j = 0; j < lessons.length; j++) {
            var l = lessons[j];
            lessonsHtml += '<div class="schedule-row">' +
                '<span class="schedule-time-compact">' + l.time + '</span>' +
                '<span class="schedule-name-compact">' + l.lesson + '</span>' +
                '<span class="schedule-teacher-compact">' + (l.teacher || '—') + '</span>' +
                '<span class="schedule-duration-compact">' + (l.duration || '—') + '</span>' +
                '</div>';
        }
        html += '<div class="schedule-card">' +
            '<div class="schedule-day">' + day + '</div>' +
            '<div class="schedule-table-compact">' +
            '<div class="schedule-header">' +
            '<span>Время</span>' +
            '<span>Мероприятие</span>' +
            '<span>Преподаватель</span>' +
            '<span>Длит.</span>' +
            '</div>' +
            lessonsHtml +
            '</div>' +
            '</div>';
    }
    track.innerHTML = html;
}

function initPhoneMasks() {
    var phoneInputs = document.querySelectorAll('#phone');
    for (var i = 0; i < phoneInputs.length; i++) {
        var input = phoneInputs[i];
        input.addEventListener('input', function (e) {
            var value = this.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            var formatted = '+7';
            if (value.length > 1) formatted += ' (' + value.slice(1, 4);
            if (value.length >= 5) formatted += ') ' + value.slice(4, 7);
            if (value.length >= 8) formatted += '-' + value.slice(7, 9);
            if (value.length >= 10) formatted += '-' + value.slice(9, 11);
            this.value = formatted;
            var errorSpan = document.getElementById("phoneError");
            if (errorSpan) {
                var isValid = value.length === 11;
                errorSpan.style.display = isValid ? "none" : "block";
                this.style.borderColor = isValid ? "#e2cfb0" : "#d9534f";
            }
        });
    }
}

function bindForms() {
    var form = document.getElementById("bookingForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var phone = document.getElementById("phone").value.replace(/\D/g, '');
            if (phone.length !== 11) {
                document.getElementById("phoneError").style.display = "block";
                return;
            }
            alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
            form.reset();
        });
    }
    var openBtns = document.querySelectorAll("#openFormBtnHeader, #openFormBtnHero");
    for (var i = 0; i < openBtns.length; i++) {
        openBtns[i].onclick = function (e) {
            e.preventDefault();
            scrollToBooking();
        };
    }
}

function filterEvents() {
    var btns = document.querySelectorAll(".filter-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            for (var j = 0; j < btns.length; j++) {
                btns[j].classList.remove("active");
            }
            this.classList.add("active");
            renderDirections(this.dataset.filter);
        });
    }
}

function mobileMenu() {
    var menuBtn = document.getElementById("mobileMenuBtn");
    var nav = document.getElementById("mainNav");
    if (menuBtn && nav) {
        menuBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            nav.classList.toggle("open");
        });
        document.addEventListener('click', function (e) {
            if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('open')) {
                nav.classList.remove('open');
            }
        });
    }
}

function initModals() {
    var modal = document.getElementById("detailModal");
    var closeBtn = document.querySelector(".modal__close");
    if (closeBtn) {
        closeBtn.onclick = function () { modal.style.display = "none"; };
    }
    window.onclick = function (e) { if (e.target === modal) modal.style.display = "none"; };
}

function initCarouselButtons() {
    var container = document.getElementById("scheduleTrackContainer");
    var prevBtn = document.getElementById("schedulePrev");
    var nextBtn = document.getElementById("scheduleNext");
    if (prevBtn && nextBtn && container) {
        prevBtn.onclick = function () { container.scrollBy({ left: -400, behavior: "smooth" }); };
        nextBtn.onclick = function () { container.scrollBy({ left: 400, behavior: "smooth" }); };
    }
}

function initScrollAnimations() {
    var fadeElements = document.querySelectorAll('.fade-on-scroll, .fade-left, .fade-right');
    var observer = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.add('visible');
            }
        }
    }, { threshold: 0.1 });
    for (var i = 0; i < fadeElements.length; i++) {
        observer.observe(fadeElements[i]);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    renderDirections();
    renderHolidays();
    renderScheduleCarousel();
    bindForms();
    filterEvents();
    createLeaves();
    mobileMenu();
    initPhoneMasks();
    initModals();
    initCarouselButtons();
    initScrollAnimations();

    var navLinks = document.querySelectorAll('.nav__link');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function (e) {
            var hash = this.getAttribute('href');
            if (hash && hash.startsWith('#')) {
                e.preventDefault();
                var target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    if (window.innerWidth <= 768) {
                        var nav = document.getElementById("mainNav");
                        if (nav) nav.classList.remove("open");
                    }
                }
            }
        });
    }
    setTimeout(function () {
        var titleElement = document.querySelector('.logo__title');
        if (titleElement && !titleElement.hasAttribute('data-animated')) {
            titleElement.setAttribute('data-animated', 'true');
            var text = titleElement.innerText;
            var letters = text.split('');
            titleElement.innerHTML = '';
            titleElement.style.opacity = '1';

            for (var i = 0; i < letters.length; i++) {
                var span = document.createElement('span');
                span.textContent = letters[i];
                span.style.display = 'inline-block';
                span.style.opacity = '0';
                span.style.transform = 'scale(0.5) rotate(0deg)';
                span.style.transition = 'all 0.25s ease';
                span.style.willChange = 'transform, opacity, color';

                var rotateValue = 0;

                if (letters[i] === 'Л') {
                    rotateValue = -6;
                } else if (letters[i] === 'у') {
                    rotateValue = 6;
                } else if (letters[i] === 'к') {
                    rotateValue = -4;
                } else if (letters[i] === 'о') {
                    rotateValue = 0;
                } else if (letters[i] === 'м') {
                    rotateValue = 5;
                } else if (letters[i] === 'р') {
                    rotateValue = -5;
                } else if (letters[i] === 'ь') {
                    rotateValue = 4;
                } else if (letters[i] === 'е') {
                    rotateValue = -3;
                } else {
                    rotateValue = (i % 2 === 0) ? 5 : -5;
                }

                titleElement.appendChild(span);

                (function (index, element, rot) {
                    setTimeout(function () {
                        element.style.opacity = '1';
                        element.style.transform = 'scale(1.25) rotate(' + rot + 'deg)';
                        element.style.color = '#ffd966';

                        setTimeout(function () {
                            element.style.transform = 'scale(1.05) rotate(' + (rot * -0.3) + 'deg)';
                            element.style.color = '#ffe5a3';

                            setTimeout(function () {
                                element.style.transform = 'scale(1) rotate(0deg)';
                                element.style.color = '#ffffff';
                            }, 130);
                        }, 130);
                    }, index * 100);
                })(i, span, rotateValue);
            }
        }
    }, 400);
});