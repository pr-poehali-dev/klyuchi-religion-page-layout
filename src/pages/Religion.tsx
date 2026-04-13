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
  { icon: 'Building2', title: 'Колокольня', desc: 'Трёхъярусная колокольня высотой 28 метров с пятью колоколами, отлитыми в XIX веке' },
  { icon: 'Star', title: 'Купола', desc: 'Пять куполов в форме луковиц, символизирующих Иисуса Христа и четырёх евангелистов' },
  { icon: 'Layers', title: 'Росписи', desc: 'Внутренние фрески выполнены в академическом стиле конца XIX века, частично сохранились оригинальные росписи' },
  { icon: 'Columns', title: 'Портик', desc: 'Входной портик с четырьмя колоннами коринфского ордера, характерный для классицизма эпохи Александра I' },
  { icon: 'Gem', title: 'Иконостас', desc: 'Четырёхъярусный резной иконостас из белого мрамора с позолотой, установлен в 1847 году' },
  { icon: 'MapPin', title: 'Апсида', desc: 'Полукруглая апсида с витражными окнами — редкость для православных храмов Сибири того времени' },
];

const timeline = [
  { year: '1802', title: 'Основание прихода', desc: 'Первые жители деревни Ключи основали приходскую общину. Богослужения проводились в деревянной часовне.' },
  { year: '1834', title: 'Начало строительства', desc: 'По решению Томской епархии начато строительство каменного храма. Проект разработан архитектором Михаилом Праве.' },
  { year: '1841', title: 'Освящение храма', desc: 'Главный престол освящён архиереем Томской епархии. В торжестве участвовали более 500 прихожан из окрестных сёл.' },
  { year: '1847', title: 'Установка иконостаса', desc: 'Завершены внутренние отделочные работы. Установлен мраморный иконостас, написаны иконы петербургскими мастерами.' },
  { year: '1886', title: 'Расширение храма', desc: 'К основному зданию пристроены два боковых придела — в честь Николая Чудотворца и Казанской иконы Божией Матери.' },
  { year: '1937', title: 'Закрытие', desc: 'В период советских репрессий храм закрыт. Здание использовалось как склад зерна, часть икон и утвари была утрачена.' },
  { year: '1991', title: 'Возрождение', desc: 'После распада СССР приход возобновил деятельность. Начаты масштабные реставрационные работы силами прихожан.' },
  { year: '2003', title: 'Освящение после реставрации', desc: 'Полностью восстановленный храм освящён повторно. Возвращены колокола, восстановлены росписи и купола.' },
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
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <span className="font-cormorant text-xl font-semibold tracking-wide text-white">
              Деревня Ключи
            </span>
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                    item.active
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button className="lg:hidden text-gray-400 hover:text-white">
              <Icon name="Menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/90399748-251f-48eb-9dea-c10958dd6c32/files/bdfac9a3-7809-4ace-99d5-9803dee75149.jpg"
          alt="Церковь Преображения Господня"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-5xl mx-auto w-full left-0 right-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-white" />
            <span className="text-white text-sm font-medium tracking-widest uppercase opacity-70">Религия</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white leading-tight mb-3">
            Церковь Преображения<br />Господня
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Православный храм XIX века — духовный центр деревни Ключи на протяжении более 180 лет
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
              Церковь Преображения Господня — главная православная святыня деревни Ключи. Построенная в 1834–1841 годах в стиле позднего классицизма, она является одним из наиболее хорошо сохранившихся памятников церковного зодчества XIX века в регионе.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Храм пережил закрытие в советские годы, но был возрождён и полностью отреставрирован в 1991–2003 годах. Сегодня приход объединяет более 400 прихожан из деревни и окрестных сёл.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: 'Calendar', label: 'Год основания', value: '1841' },
              { icon: 'Users', label: 'Прихожан', value: '400+' },
              { icon: 'MapPin', label: 'Адрес', value: 'ул. Центральная, 1' },
            ].map((info) => (
              <div key={info.label} className="border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Icon name={info.icon} size={18} className="text-black" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">{info.label}</div>
                  <div className="font-semibold text-black">{info.value}</div>
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
            <div className="absolute left-[68px] top-0 bottom-0 w-px bg-gray-200" />
            <div className="flex flex-col gap-5">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-[68px] text-right pt-3">
                    <span className="font-cormorant text-2xl font-bold text-black">{item.year}</span>
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
            <p className="text-gray-400 text-sm mb-6">Все богослужения проводятся в храме по адресу ул. Центральная, 1</p>
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
              <h3 className="font-cormorant text-2xl font-bold text-black mb-4">Контакты</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: 'MapPin', text: 'ул. Центральная, 1, деревня Ключи' },
                  { icon: 'Phone', text: '+7 (385) 000-00-00' },
                  { icon: 'Mail', text: 'church.klyuchi@mail.ru' },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-3 text-gray-600">
                    <Icon name={c.icon} size={16} className="text-black flex-shrink-0" />
                    <span className="text-sm">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-cormorant text-2xl font-bold text-black mb-2">Помочь храму</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Церковь принимает пожертвования на реставрацию боковых приделов и обновление росписей.
              </p>
              <button className="bg-black text-white font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                Сделать пожертвование
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="mt-16 bg-black text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-cormorant text-lg text-white">Деревня Ключи</span>
          <span className="text-sm">© 2024 Официальный сайт деревни Ключи</span>
        </div>
      </footer>
    </div>
  );
}
