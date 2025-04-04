const dangerEvent = [
  {
    dependence: 'Скользкие, обледенелые, зажиренные, мокрые поверхности',
    ID: '1.1.1',
    label:
      'Падение работника из-за потери равновесия при поскальзывании при передвижении',
  },

  {
    dependence: 'Перепад высот, отсутствие ограждения на высоте',
    ID: '1.2.1',
    label:
      'Падение работника с высоты, в том числе при выполнении альпинистских работ',
  },
  {
    dependence:
      'Груз, инструмент или предмет, перемещаемый или поднимаемый, в том числе на высоту',
    ID: '1.3.1',
    label:
      'Удар работника или падение на работника предмета, тяжелого инструмента или груза, упавшего при перемещении или подъеме',
  },

  {
    dependence: 'Плохо или неправильно закрепленные детали или заготовки',
    ID: '1.4.1',
    label:
      'Удар работника деталями или заготовками, которые могут отлететь из-за плохого или неправильного закрепления',
  },
  {
    dependence: 'Вращающиеся или движущие детали оборудования или инструменты',
    ID: '1.5.1',
    label:
      'Удар работника инструментом при неправильной эксплуатации, удар вращающимися или движущимися частями оборудования',
  },

  {
    dependence: 'Осколки оборудования, деталей, инструмента, стекла',
    ID: '1.6.1',
    label:
      'Удар и/или порез работника отлетающими осколками оборудования, деталей, инструмента, стекла, в том числе оконного',
  },

  {
    dependence:
      'Упругий элемент применяемых материалов или оборудования, или конструкций',
    ID: '1.7.1',
    label:
      'Удар работника упругим элементом применяемого материала, оборудования или конструкции в результате их деформации',
  },

  {
    dependence:
      'Предметы и элементы конструкции, расположенные на путях следования, в том числе из-за неправильной организации рабочего места',
    ID: '1.8.1',
    label:
      'Столкновение работника с неподвижным предметом или элементом конструкции, оказавшимся на пути следования',
  },

  {
    dependence: 'Другие опасности, связанные с получением работником удара',
    ID: '1.9.1.',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами обеспечения работников средствами индивидуальной защиты и смывающими средствами, утвержденными приказом Минтруда России от 29 октября 2021 г. N 766н (зарегистрирован Минюстом России __ декабря 2021 г., регистрационный N ____) (далее - Правила), и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence:
      'Неподвижная или подвижная, в том числе вращающаяся колющая поверхность (острие)',
    ID: '1.10.1',
    label:
      'Укол или прокол мягких тканей работника, из-за натыкания на неподвижную колющую поверхность (острие), в том числе штыри, арматуру, углы, анкерные устройства и другие, а также в результате воздействия движущихся колющих частей механизмов и машин',
  },

  {
    dependence:
      'Другие опасности, связанные с получением работником колотой раны или прокола',
    ID: '1.11.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Подвижные части машин и механизмов',
    ID: '1.12.1',
    label:
      'Затягивание в подвижные части машин и механизмов одежды, волос и отдельных частей тела работника',
  },

  {
    dependence:
      'Другие опасности, связанные с затягиванием работника в механизмы и агрегаты',
    ID: '1.13.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence:
      'Абразивные материалы, в том числе необработанная древесина (в том числе вертикальные и горизонтальные поверхности)',
    ID: '1.14.1',
    label:
      'Воздействие движущегося и неподвижного абразивного элемента, необработанной древесины на кожу работника, проникновение заноз под кожу',
  },

  {
    dependence:
      'Другие опасности, связанные с трением или абразивным воздействием при соприкосновении',
    ID: '1.15.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Движущиеся режущие части механизмов, машин',
    ID: '1.16.1',
    label:
      'Порез мягких тканей или ампутация отдельных частей тела работника в результате воздействия движущихся режущих частей механизмов, машин',
  },

  {
    dependence: 'Острые кромки и заусенцы',
    ID: '1.17.1',
    label:
      'Порез мягких тканей работника в результате воздействия острых кромок и заусенцев',
  },

  {
    dependence: 'Дисковые ножи, дисковые пилы и другое (кроме ножей поварских)',
    ID: '1.18.1',
    label:
      'Порез мягких тканей или ампутация отдельных частей тела работника в результате воздействия острого режущего инструмента (дисковые ножи, дисковые пилы и другое (кроме ножей поварских)',
  },

  {
    dependence: 'Ножи и приспособления, применяемые при обвалке мяса',
    ID: '1.19.1',
    label:
      'Порез мягких тканей или ампутация отдельных частей тела работника в результате воздействия острого режущего инструмента (обвалка мяса и другое)',
  },
  {
    dependence: 'Ручная цепная пила',
    ID: '1.20.1',
    label:
      'Порез мягких тканей или ампутация отдельных частей тела работника в результате воздействия ручной цепной пилы',
  },

  {
    dependence:
      'Металлическая стружка с острыми кромками, возникающая при механической обработке металлических заготовок и деталей',
    ID: '1.21.1',
    label:
      'Порез мягких тканей или ампутация, или повреждение отдельных частей тела работника острыми кромками металлической стружки (при механической обработке металлических заготовок и деталей)',
  },

  {
    dependence:
      'Стеклянные, фарфоровые или керамические предметы, а также пластиковые изделия острыми кромками',
    ID: '1.22.1',
    label:
      'Порез мягких тканей работника разбившимися стеклянными, фарфоровыми и/или керамическими предметами, а также пластиковыми изделиями с острыми краями',
  },
  {
    dependence: 'Другие опасности, связанные с порезом частей тела работника',
    ID: '1.23.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Мелкие стружки, мелкие осколки, крупнодисперсная пыль',
    ID: '1.24.1',
    label:
      'Попадание в глаза работника стружки, мелких осколков, крупнодисперсной пыли',
  },
  {
    dependence:
      'Другие опасности, связанные с повреждением глаз вследствие попадания инородного тела',
    ID: '1.25.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence:
      'Выполнение работ на значительной глубине в туннелях, под землей, в открытых разрезах, в том числе связанных с добычей полезных ископаемых и эксплуатацией шахт',
    ID: '1.26.1',
    label:
      'Травмы и профессиональные заболевания, связанные с выполнением работ на значительной глубине в туннелях, под землей, в открытых разрезах, в том числе связанных с добычей полезных ископаемых и эксплуатацией шахт',
  },

  {
    dependence: 'Другие опасности, связанные с работой на глубине',
    ID: '1.27.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Прочие механические опасности',
    ID: '1.28.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Общие производственные загрязнения',
    ID: '2.1.1',
    label:
      'Ухудшения здоровья работника в результате воздействие общих производственных загрязнений',
  },

  {
    dependence: 'Общие производственные загрязнения',
    ID: '2.1.2',
    label:
      'Другие опасные события, связанные с общими производственными загрязнениями',
  },
  {
    dependence: 'Электрический ток',
    ID: '3.1.1',
    label:
      'Удар током и другие травмы, полученные в результате контакта с токоведущими частями, которые находятся под напряжением до 1000 В',
  },

  {
    dependence: 'Электрический ток',
    ID: '3.1.2',
    label:
      'Травмы при контакте с токоведущими частями, которые находятся под напряжением выше 1000 В',
  },

  {
    dependence: 'Шаговое напряжение',
    ID: '3.2.1',
    label:
      'Воздействие электрического тока на работника, вследствие его прохождения через ткани и органы',
  },
  {
    dependence:
      'Искры, возникающие вследствие накопления статического электричества, в том числе при работе во взрывопожарноопасной среде',
    ID: '3.3.1',
    label:
      'Возникновение ожога вследствие поджигания взрывопожарноопасной среды',
  },

  {
    dependence:
      'Наведенное напряжение в отключенной электрической цепи (электромагнитное воздействие параллельной воздушной электрической линии или электричества, циркулирующего в контактной сети)',
    ID: '3.4.1',
    label: 'Поражение током от наведенного напряжения',
  },
  {
    dependence: 'Энергия, выделяемая при возникновении электрической дуги',
    ID: '3.5.1',
    label:
      'Ожоги кожных покровов работника, вследствие термического воздействия электрической дуги',
  },

  {
    dependence:
      'Другие опасности, связанные с воздействием электрического тока, статического электричества, а также с воздействием термических рисков электрической дуги',
    ID: '3.6.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence:
      'Поверхности, имеющие высокую температуру (воздействие конвективной теплоты)',
    ID: '4.1.1',
    label:
      'Ожог кожных покровов работника вследствие контакта с поверхностью имеющую высокую температуру',
  },

  {
    dependence: 'Материал, жидкость или газ, имеющие высокую температуру',
    ID: '4.2.1',
    label:
      'Ожог кожных покровов и слизистых работника в следствие контакта с материалом, жидкостью или газом, имеющим высокую температуру',
  },

  {
    dependence:
      'Другие опасности, связанные с воздействием конвективной теплоты',
    ID: '4.3.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence:
      'Энергия открытого пламени, выплесков металлов, искр и брызг расплавленного металла и металлической окалины',
    ID: '4.4.1',
    label:
      'Ожог кожных покровов и слизистых работника воздействия открытого пламени',
  },

  {
    dependence:
      'Энергия открытого пламени, выплесков металлов, искр и брызг расплавленного металла и металлической окалины',
    ID: '4.4.2',
    label:
      'Ожог роговицы глаза работника горячими жидкостями и газами, а также тепловым излучением и воздействием открытого пламени',
  },
  {
    dependence:
      'Энергия открытого пламени, выплесков металлов, искр и брызг расплавленного металла и металлической окалины',
    ID: '4.4.3',
    label:
      'Ожог кожных покровов и слизистых работника от воздействия искр и брызг расплавленного металла и окалины',
  },

  {
    dependence:
      'Энергия открытого пламени, выплесков металлов, искр и брызг расплавленного металла и металлической окалины',
    ID: '4.4.4',
    label:
      'Ожог кожных покровов и слизистых работника вследствие выплеска расплавленного металла',
  },

  {
    dependence:
      'Энергия открытого пламени, выплесков металлов, искр и брызг расплавленного металла и металлической окалины',
    ID: '4.4.5',
    label: 'Другие опасные события, связанные с получением ожога',
  },
  {
    dependence: 'Охлажденная поверхность, охлажденная жидкость или газ',
    ID: '4.5.1',
    label:
      'Обморожение мягких тканей работника из-за контакта с поверхностью имеющую низкую температуру, с охлажденной жидкостью или газом',
  },

  {
    dependence:
      'Другие опасности, связанные с повышенными и пониженными температурами',
    ID: '4.6.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence:
      'Низкая температура окружающей среды в рабочей зоне, в том числе связанная с климатом',
    ID: '4.7.1',
    label:
      'Простудное заболевание работника из-за воздействия пониженной температуры воздуха, обморожения мягких тканей, в том числе мягких тканей конечностей',
  },

  {
    dependence:
      'Высокая температура окружающей среды, в рабочей зоне, в том числе связанная с климатом',
    ID: '4.8.1',
    label:
      'Тепловой удар при длительном нахождении на открытом воздухе при прямом воздействии лучей солнца на незащищенную поверхность головы',
  },

  {
    dependence:
      'Высокая температура окружающей среды, в рабочей зоне, в том числе связанная с климатом',
    ID: '4.8.2',
    label:
      'Тепловой удар при длительном нахождении в помещении с высокой температурой воздуха;',
  },

  {
    dependence:
      'Высокая влажность окружающей среды в рабочей зоне, в том числе, связанная с климатом',
    ID: '4.9.1',
    label:
      'Воздействие влажности в виде тумана, росы, атмосферных осадков, конденсата, струй и капель жидкости',
  },

  {
    dependence: 'Низкая температура окружающей среды и ветер на рабочем месте',
    ID: '4.10.1',
    label:
      'Заболевание работника из-за воздействия движения воздуха и (или) пониженной температуры',
  },

  {
    dependence: 'Низкая температура окружающей среды и ветер на рабочем месте',
    ID: '4.10.2',
    label: 'Другие опасные события, связанные с климатом в рабочей зоне',
  },
  {
    dependence:
      'Недостаток кислорода в воздухе рабочей зоны в замкнутых технологических емкостях, из-за вытеснения его другими газами или жидкостями',
    ID: '5.1.1',
    label: 'Развитие гипоксии или удушья из-за недостатка кислорода',
  },
  {
    dependence:
      'Недостаток кислорода в воздухе рабочей зоны при работе в подземных сооружениях',
    ID: '5.2.1',
    label: 'Развитие гипоксии или удушья из-за недостатка кислорода',
  },
  {
    dependence:
      'Другие опасности, связанные с недостатком кислорода в воздухе рабочей зоны',
    ID: '5.3.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Вода и растворы нетоксичных веществ',
    ID: '6.1.1',
    label:
      'Повреждение здоровья работника вследствие контакта с водой и/или растворами нетоксичных веществ',
  },

  {
    dependence: 'Вода и растворы нетоксичных веществ',
    ID: '6.1.2',
    label:
      'Другие опасные события, связанные с контактом с водой и растворами нетоксичных веществ',
  },
  {
    dependence: 'Высокоопасные вещества',
    ID: '6.2.1',
    label:
      'Химические ожоги кожи при контакте с опасными веществами и/или поражение слизистых при контакте с опасными веществами и/или отравление организма при контакте с высокоопасными веществами и/или вдыхание высокоопасных веществ и/или контакт с патогенными микроорганизмами',
  },

  {
    dependence:
      'Растворы кислот, щелочей, смазочно-охлаждающих жидкостей на водной основе, щелочемасляных эмульсий',
    ID: '6.3.1',
    label:
      'Дерматиты, химические ожоги и другие воздействия на кожные покровы работника кислот, щелочей, смазочно-охлаждающих жидкостей на водной основе, щелочемасляных эмульсий',
  },

  {
    dependence:
      'Повышенная концентрация паров вредных жидкостей, газов в воздухе рабочей зоны (а также пыль, туман, дым)',
    ID: '6.4.1',
    label:
      'Вдыхание работником паров вредных жидкостей, газов (а также пыли, тумана, дыма); поражение легких от вдыхания вредных паров или газов; поражение слизистых оболочек дыхательных путей от вдыхания вредных паров или газов',
  },
  {
    dependence: 'Вещества, способные вызвать химический ожог роговицы глаза',
    ID: '6.5.1',
    label:
      'Химический ожог роговицы глаза работника из-за попадания опасных веществ в глаза',
  },
  {
    dependence:
      'Токсичные пары, газы, аэрозоли, выделяемые при нагревании или горении, не связанном с технологическим процессом производства, в том числе при пожаре',
    ID: '6.6.1',
    label:
      'Вдыхание работником токсичных паров, газов, аэрозолей, образовавшихся при нагревании веществ, при их горении, в том числе при пожаре',
  },

  {
    dependence:
      'Нефть, нефтепродукты, смазочные масла, воздействующие на кожные покровы',
    ID: '6.7.1',
    label:
      'Дерматиты вследствие воздействия на кожные покровы работника технических (смазочных) масел, нефти и/или нефтепродуктов',
  },

  {
    dependence: 'Чистящие и обеззараживающие, дезинфицирующие вещества',
    ID: '6.8.1',
    label:
      'Дерматиты, вследствие воздействия на кожные покровы чистящих и обеззараживающих, дезинфицирующих веществ',
  },

  {
    dependence:
      'Другие опасности, связанные с воздействием химического фактора на работника',
    ID: '6.9.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Пыль в воздухе рабочей зоны',
    ID: '7.1.1',
    label: 'Негативное воздействия пыли на глаза работника',
  },

  {
    dependence: 'Пыль в воздухе рабочей зоны',
    ID: '7.1.2',
    label: 'Негативное воздействия пыли на органы дыхания',
  },
  {
    dependence: 'Пыль в воздухе рабочей зоны',
    ID: '7.1.3',
    label: 'Негативное воздействия пыли на кожу (дерматиты)',
  },

  {
    dependence: 'Взвеси вредных химических веществ в воздухе рабочей зоны',
    ID: '7.2.1',
    label:
      'Негативное воздействие воздушных взвесей вредных химических веществ на организм работника',
  },

  {
    dependence:
      'Аэрозоли, воздушные взвеси, содержащие смазочные масла, чистящие и обезжиривающие вещества в воздухе рабочей зоны',
    ID: '7.3.1',
    label:
      'Воздействия на органы дыхания работников воздушных взвесей, содержащих смазочные масла, чистящие и обезжиривающие вещества',
  },
  {
    dependence: 'Другие опасности, связанные с воздействием АПФД на работника',
    ID: '7.4.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence:
      'Наличие микроорганизмов-продуцентов, препаратов, содержащих живые клетки и споры микроорганизмов в окружающей среде: воздухе, воде, на поверхностях',
    ID: '8.1.1',
    label:
      'Заражение работника вследствие воздействия микроорганизмов-продуцентов, препаратов, содержащих живые клетки и споры микроорганизмов в воздухе, воде, на поверхностях',
  },

  {
    dependence: 'Патогенные микроорганизмы',
    ID: '8.2.1',
    label:
      'Заболевание работника, связанное с воздействием патогенных микроорганизмов',
  },

  {
    dependence:
      'Наличие на рабочем месте паукообразных и кровососущих насекомых, способных являться переносчиками тяжелых инфекций',
    ID: '8.3.1',
    label:
      'Заражение работника вследствие инфекции от укуса паукообразных и насекомых, микроорганизмами, переносчиками которых они являются',
  },

  {
    dependence:
      'Другие опасности, связанные с воздействием биологического фактора на работника',
    ID: '8.4.1',
    label: 'Другое 8.4',
  },
  {
    dependence:
      'Физические перегрузки при чрезмерных физических усилиях при подъеме предметов и деталей, при перемещении предметов и деталей',
    ID: '9.1.1',
    label:
      'Повреждение костно-мышечного аппарата работника от физических перегрузок при чрезмерных физических усилиях при подъеме предметов и деталей, а также при перемещении предметов и деталей',
  },
  {
    dependence:
      'Физические перегрузки при стереотипных рабочих движениях, а также при статических нагрузках',
    ID: '9.2.1',
    label:
      'Повреждение костно-мышечного аппарата работника при физических перегрузках от стереотипных рабочих движений, а также при статических нагрузках',
  },
  {
    dependence:
      'Физические перегрузки при неудобной рабочей позе, в том числе при наклонах корпуса тела работника более чем на 30°',
    ID: '9.3.1',
    label:
      'Повреждение костно-мышечного аппарата работника при физических перегрузках вследствие перегрузок при неудобной рабочей позе, в том числе при наклонах корпуса тела работника более чем на 30°',
  },
  {
    dependence: 'Другие опасности, связанные с физической перегрузкой',
    ID: '9.4.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence:
      'Повышенный уровня шума и другие неблагоприятные характеристики шума',
    ID: '10.1.1',
    label:
      'Снижение остроты слуха, тугоухость, глухота, вследствие воздействия повышенного уровня шума и других неблагоприятных характеристик шума',
  },
  {
    dependence:
      'Повышенный (низкочастотный) уровень ультразвуковых колебаний (воздушный и контактный ультразвук)',
    ID: '10.2.1',
    label:
      'Негативное воздействие повышенного (низкочастотный) уровень ультразвуковых колебаний (воздушный и контактный ультразвук) на работника',
  },

  {
    dependence:
      'Другие опасности, связанные с повышенным уровнем шума в рабочей зоне',
    ID: '10.3.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Повышенная вибрация при использовании ручных механизмов',
    ID: '11.1.1',
    label:
      'Воздействие локальной вибрации на руки работника при использовании ручных механизмов (сужение сосудов, болезнь белых пальцев)',
  },
  {
    dependence: 'Повышенная общая вибрация',
    ID: '11.2.1',
    label: 'Воздействие общей вибрации на тело работника',
  },
  {
    dependence:
      'Другие опасности, связанные с воздействием повышенной вибрации',
    ID: '11.3.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence:
      'Недостаточная видимость (различимость) работника для других лиц, в том числе управляющих опасными машинами, механизмами',
    ID: '12.1.1',
    label:
      'Получение работником травм (механических) в связи с недостаточной различимостью работника',
  },
  {
    dependence: 'Повышенная яркость света',
    ID: '12.2.1',
    label:
      'Повреждение органов зрения работника вследствие повышенной яркости света (фотоофтальмия)',
  },

  {
    dependence: 'Пониженная контрастность',
    ID: '12.3.1',
    label: 'Травма работника вследствие повышенной контрастности',
  },

  {
    dependence: 'Другие опасности, связанные с воздействием световой среды',
    ID: '12.4.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Электростатические поля',
    ID: '13.1.1',
    label: 'Воздействие на организм работника электростатического поля',
  },

  {
    dependence: 'Электромагнитные поля',
    ID: '13.2.1',
    label: 'Воздействие на организм работника электромагнитного поля',
  },
  {
    dependence: 'Электрические поля промышленной частоты',
    ID: '13.3.1',
    label:
      'Воздействие на организм работника электрического поля промышленной частоты',
  },
  {
    dependence: 'Тепловое излучение',
    ID: '13.4.1',
    label:
      'Ожоги кожных покровов и слизистых оболочек работника вследствие воздействия тепловое излучения',
  },

  {
    dependence: 'Лазерное излучение',
    ID: '13.5.1',
    label:
      'Ожоги кожных покровов и слизистых оболочек работника вследствие воздействия лазерного излучения',
  },
  {
    dependence: 'Ультрафиолетовое излучение',
    ID: '13.6.1',
    label:
      'Ожоги роговицы глаза и кожных покровов работника вследствие воздействия ультрафиолетового излучения',
  },
  {
    dependence:
      'Другие опасности, связанные с воздействием неионизирующих излучений',
    ID: '13.7.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Гамма-излучение',
    ID: '14.1.1',
    label:
      'Проявление лучевой болезни и других проявлений у работника вследствие воздействия гамма-излучения',
  },

  {
    dependence: 'Рентгеновское излучение',
    ID: '14.2.1',
    label:
      'Проявление лучевой болезни и других проявлений у работника вследствие воздействия рентгеновского-излучения',
  },

  {
    dependence:
      'Альфа-, бета-излучение, электронное или ионное и нейтронное излучение',
    ID: '14.3.1',
    label:
      'Проявление лучевой болезни и других проявлений у работника вследствие альфа-, бета-излучений, электронного или ионного и нейтронного излучения',
  },

  {
    dependence:
      'Другие опасности, связанные с воздействием ионизирующих излучений',
    ID: '14.4.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Дикие или домашние животные',
    ID: '15.1.1',
    label: 'Последствия укуса работника животным',
  },
  {
    dependence: 'Дикие или домашние животные',
    ID: '15.1.2',
    label: 'Заражение работника вследствие прямого контакта с животными',
  },

  {
    dependence:
      'Другие опасности, связанные с воздействием животных на работника',
    ID: '15.2.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Пыльца, фитонциды и другие вещества, выделяемые растениями',
    ID: '16.1.1',
    label:
      'Дерматиты и аллергические реакции работника вследствие воздействия пыльцы, фитонцидов и других веществ, выделяемых растениями',
  },

  {
    dependence: 'Растения, выделяющие вещества, приводящие к ожогам',
    ID: '16.2.1',
    label:
      'Дерматиты и аллергические реакции, ожоги кожных покровов и слизистых оболочек работника вследствие воздействия растений, выделяющих вещества, приводящие к ожогам',
  },

  {
    dependence: 'Растения с листьями и стеблями, способными повредить кожу',
    ID: '16.3.1',
    label:
      'Механические повреждения кожных покровов работника растениями с листьями и стеблями',
  },

  {
    dependence: 'Другие опасности, связанные с воздействием растений',
    ID: '16.4.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence:
      'Наличие в атмосфере дыма, паров вредных газов и пыли при пожаре',
    ID: '17.1.1',
    label:
      'Гипоксия, удушье, вследствие вдыхания дыма, паров вредных газов и пыли при пожаре',
  },
  {
    dependence: 'Другие опасности, связанные с пожаром',
    ID: '17.2.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Транспортное средство, в том числе погрузчик',
    ID: '18.1.1',
    label:
      'Механические травмы работника вследствие наезда транспортного средства',
  },
  {
    dependence: 'Транспортное средство, в том числе погрузчик',
    ID: '18.1.2',
    label:
      'Механические травмы работника вследствие, раздавливания между двумя сближающимися транспортными средствами',
  },
  {
    dependence: 'Другие опасности, связанные с транспортными средствами',
    ID: '18.2.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Горючие вещества способные к самовозгоранию',
    ID: '19.1.1',
    label:
      'Ожог кожных покровов работника по причине самовозгорания горючих веществ',
  },

  {
    dependence:
      'Наличие огнеопасных веществ на рабочем месте, способных взорваться при действии открытого пламени, в том числе при пожаре',
    ID: '19.2.1',
    label:
      'Ожог кожных покровов работника по причине взрыва огнеопасных веществ при пожаре',
  },

  {
    dependence: 'Ударная волна от взрыва',
    ID: '19.3.1',
    label: 'Повреждения работника вследствие действия ударной волны',
  },

  {
    dependence:
      'Другие опасности, связанные с работой во взрывопожароопасной среде',
    ID: '19.4.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
  {
    dependence: 'Трудносмываемые загрязнители',
    ID: '20.1.1',
    label:
      'Воздействием трудно смываемых загрязнителей на кожу работника, в том числе в связи с выходом из строя одежды специальной многократного применения',
  },
  {
    dependence: 'Другие опасности, связанные с загрязнением одежды специальной',
    ID: '20.2.1',
    label:
      'В случае идентификации иных опасностей на рабочем месте работник обеспечивается средствами индивидуальной защиты, необходимыми для защиты от идентифицированных опасностей. Номенклатуру, количество и сроки носки определяет работодатель в соответствии с Правилами и на основании нормативно-технической документации изготовителя',
  },
];
export default dangerEvent;
