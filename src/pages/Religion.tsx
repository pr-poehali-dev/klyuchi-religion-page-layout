import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', href: '#' },
  { label: 'Администрация', href: '#' },
  { label: 'История', href: '#' },
  { label: 'Образование', href: '#' },
  { label: 'Предприятия', href: '#' },
  { label: 'Культура', href: '#' },
  { label: 'Религия', href: '#', active: true },
  { label: 'Транспорт', href: '#' },
  { label: 'Природа', href: '#' },
  { label: 'Магазины', href: '#' },
];

const architectureFeatures = [
  { icon: 'Building2', title: 'Четверик', desc: 'Двусветный четверик — основной объём храма, характерный для «русско-византийского» стиля по образцовым проектам' },
  { icon: 'Star', title: 'Пятиглавие', desc: 'Декоративное пятиглавие: крупная центральная глава с луковичным куполом и небольшие угловые главки' },
  { icon: 'Layers', title: 'Трапезная', desc: 'Просторная трапезная объединяет притвор с основным молитвенным помещением храма' },
  { icon: 'Columns', title: 'Колокольня', desc: 'Шатровая колокольня — характерный элемент уральских приходских церквей конца XIX — начала XX века' },
  { icon: 'Gem', title: 'Кирпичная кладка', desc: 'Стены выложены из красного кирпича по технологии, характерной для уральского церковного строительства' },
  { icon: 'MapPin', title: 'Образцовый проект', desc: 'Построен по «образцовому» проекту, аналогичному Успенскому храму города Бобров — типичная практика провинциального зодчества' },
];

const timeline = [
  { year: 'XIX в.', title: 'Часовня', desc: 'На месте нынешнего храма существовала деревянная часовня, вокруг которой складывалась приходская жизнь деревни Ключи.' },
  { year: '1910', title: 'Начало строительства', desc: 'Начата перестройка часовни в каменный однопрестольный храм по образцовому проекту, аналогичному Успенскому храму г. Бобров.' },
  { year: '1910–1915', title: 'Возведение храма', desc: 'Спасо-Преображенский кирпичный однопрестольный храм возведён. Здание — двусветный четверик с декоративным пятиглавием, трапезной и шатровой колокольней.' },
  { year: 'нач. XX в.', title: 'Освящение', desc: 'Каменный однопрестольный храм в честь Преображения Господня освящён. Приход входил в состав Екатеринбургской епархии.' },
  { year: '1937', title: 'Закрытие', desc: 'С приходом к власти богоборцев храм закрыт. Купола снесены, здание перестроено под сельскую библиотеку и клуб с актовым залом.' },
  { year: '2004', title: 'Возрождение', desc: '12 июля 2004 года в возвращаемом из поругания храме совершена первая Божественная литургия — в праздник святых апостолов Петра и Павла.' },
  { year: '19 авг. 2004', title: 'Престольный праздник', desc: 'В день Преображения Господня, впервые за 67 лет, в храме состоялось богослужение в честь престольного праздника.' },
  { year: '2018', title: 'Освящение купола', desc: '29 апреля 2018 года епископ Среднеуральский Евгений совершил чин освящения нового купола и креста восстанавливаемого Преображенского храма.' },
];

const services = [
  { day: 'Воскресенье', time: '9:00', type: 'Божественная Литургия' },
  { day: 'Суббота', time: '17:00', type: 'Всенощное бдение' },
  { day: 'Праздники', time: '9:00', type: 'Праздничная Литургия' },
  { day: 'Среда', time: '8:00', type: 'Молебен с акафистом' },
];

export default function Religion() {
  return (
    <div className="min-h-screen bg-white font-golos text-black">

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm transition-all duration-200 pb-0.5 ${
                    item.active
                      ? 'text-black font-medium border-b-2 border-black'
                      : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button className="lg:hidden text-gray-500 hover:text-black">
              <Icon name="Menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src="https://sobory.ru/pic/11400/11408bb.jpg"
          alt="Церковь Преображения Господня, д. Ключи"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-5xl mx-auto w-full left-0 right-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-white" />
            <span className="text-white text-sm font-medium tracking-widest uppercase opacity-70">Религия · Сысертский округ · Свердловская область</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white leading-tight mb-3">
            Церковь Преображения<br />Господня
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Спасо-Преображенский кирпичный храм 1910–1915 годов — духовный центр деревни Ключи Екатеринбургской епархии
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-gray-400">
          <a href="#" className="hover:text-black transition-colors">Главная</a>
          <Icon name="ChevronRight" size={14} />
          <span className="text-black font-medium">Религия</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* INTRO */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="font-cormorant text-3xl font-bold text-black mb-4">О храме</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Спасо-Преображенский кирпичный однопрестольный храм в деревне Ключи был перестроен из часовни в 1910–1915 годах по образцовому проекту, аналогичному Успенскому храму города Бобров. Здание выполнено в «русско-византийском» стиле — двусветный четверик с декоративным пятиглавием, трапезной и шатровой колокольней.
            </p>
            <p className="text-gray-600 leading-relaxed">
              После закрытия в 1937 году и десятилетий запустения, в 2004 году в храме возобновились богослужения. Сегодня приход входит в состав Сысертского благочиния Екатеринбургской епархии Русской Православной Церкви. В здании одновременно располагается сельская библиотека и клуб — богослужения проходят в центральном молитвенном помещении.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: 'Calendar', label: 'Год постройки', value: '1910–1915' },
              { icon: 'Church', label: 'Епархия', value: 'Екатеринбургская' },
              { icon: 'MapPin', label: 'Адрес', value: 'ул. 9 Января, 4А' },
            ].map((info) => (
              <div key={info.label} className="border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Icon name={info.icon} size={18} className="text-black" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">{info.label}</div>
                  <div className="font-semibold text-black text-sm">{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ARCHITECTURE */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="font-cormorant text-3xl font-bold text-black">Архитектурные особенности</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {architectureFeatures.map((feat) => (
              <div key={feat.title} className="border border-gray-200 rounded-2xl p-5 hover:border-black transition-all duration-200 group">
                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center mb-4">
                  <Icon name={feat.icon} size={18} className="text-white" />
                </div>
                <h3 className="font-cormorant text-xl font-bold text-black mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="font-cormorant text-3xl font-bold text-black">История храма</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="relative">
            <div className="absolute left-[80px] top-0 bottom-0 w-px bg-gray-200" />
            <div className="flex flex-col gap-5">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-[80px] text-right pt-3">
                    <span className="font-cormorant text-lg font-bold text-black leading-tight">{item.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 flex items-start pt-[18px]">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black relative z-10 group-hover:bg-black transition-colors" />
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4 flex-1 hover:border-black transition-all duration-200 mb-1">
                    <h3 className="font-semibold text-black mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mb-16">
          <div className="bg-black rounded-2xl p-8 text-white">
            <h2 className="font-cormorant text-3xl font-bold mb-1">Расписание богослужений</h2>
            <p className="text-gray-400 text-sm mb-6">д. Ключи, ул. 9 Января, 4А · Сысертский округ, Свердловская область</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <div key={s.day} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{s.day} · {s.time}</div>
                    <div className="text-sm text-gray-400">{s.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-cormorant text-2xl font-bold text-black mb-4">Контакты прихода</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: 'MapPin', text: 'д. Ключи, ул. 9 Января, 4А, Сысертский округ' },
                  { icon: 'Globe', text: 'ural-hram.ru' },
                  { icon: 'Church', text: 'Сысертское благочиние, Екатеринбургская епархия' },
                ].map((c) => (
                  <div key={c.text} className="flex items-start gap-3 text-gray-600">
                    <Icon name={c.icon} size={16} className="text-black flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-cormorant text-2xl font-bold text-black mb-2">Как добраться</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Автобусы № 133 и 182а от Южного автовокзала Екатеринбурга. Остановка — «Поворот на Ключи». Деревня в 34 км к юго-востоку от Екатеринбурга.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Icon name="Bus" size={15} className="text-black" />
                <span>Автобус 133, 182а · Южный автовокзал</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="mt-16 bg-black text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-cormorant text-lg text-white">Деревня Ключи · Сысертский округ</span>
          <span className="text-sm">© 2024 Официальный сайт деревни Ключи</span>
        </div>
      </footer>
    </div>
  );
}