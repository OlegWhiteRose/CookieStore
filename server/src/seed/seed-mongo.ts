import mongoose from 'mongoose';
import { connectDB } from '@config/db.config';
import { Cookie } from '@models/cookie.model';
import { Stat } from '@models/stat.model';
import { Contact } from '@models/contact.model';

const cookiesData = [
  { title: "Кристальная Нежность", price: 240, format: "common", type: "Сахарное", imgUrl: "/cookies/sugar-crystal.webp", description: "Классическое сахарное печенье, посыпанное крупными кристаллами сахара для приятного хруста.", ingredients: "Мука пшеничная высшего сорта, масло сливочное 82.5%, сахар-песок, яйцо куриное, ванилин, разрыхлитель.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 250 },
  { title: "Утренний Заряд", price: 280, format: "common", type: "Овсяное", imgUrl: "/cookies/oatmeal-morning-boost.webp", description: "Сытное и полезное овсяное печенье по традиционному рецепту с добавлением сочного изюма.", ingredients: "Хлопья овсяные 'Геркулес', мука пшеничная 1 сорта, сахар тростниковый, масло подсолнечное, изюм, корица молотая.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 180 },
  { title: "Шоколадная Мечта", price: 480, format: "special", type: "Сдобное", imgUrl: "/cookies/choco-dream.webp", description: "Богатое сдобное печенье с крупными каплями настоящего темного бельгийского шоколада.", ingredients: "Мука пшеничная в/с, масло сливочное 82.5%, сахар, шоколад темный (72%), какао-порошок, яйцо куриное. Может содержать следы фундука.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 70 },
  { title: "Сырный Хруст", price: 290, format: "common", type: "Крекеры", imgUrl: "/cookies/cheese-crunch-crackers.webp", description: "Хрустящие соленые крекеры с насыщенным вкусом тертого сыра 'Пармезан'. Идеально для закуски.", ingredients: "Мука пшеничная, сыр 'Пармезан' тертый, маргарин, вода питьевая, соль морская, паприка.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 150 },
  { title: "Мария", price: 160, format: "common", type: "Галеты", imgUrl: "/cookies/galettes-maria.webp", description: "Легкое, нежирное и хрустящее печенье. Классический вкус, который подходит ко всему.", ingredients: "Мука пшеничная высшего сорта, вода, сахар, масло растительное, инвертный сироп, разрыхлители, соль.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 300 },
  { title: "Зоологическое", price: 195, format: "common", type: "Затяжное", imgUrl: "/cookies/zoo-cookies.webp", description: "Классическое затяжное печенье в форме различных зверушек. Вкус, знакомый с детства.", ingredients: "Мука пшеничная, маргарин, сахар, крахмал кукурузный, сухое обезжиренное молоко, соль, сода пищевая.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 220 },
  { title: "Лимонное Настроение", price: 320, format: "special", type: "Сахарное", imgUrl: "/cookies/lemon-mood.webp", description: "Освежающее сахарное печенье с добавлением натуральной лимонной цедры и легкой кислинкой.", ingredients: "Мука пшеничная в/с, масло сливочное, сахар, яйцо куриное, свежая лимонная цедра, сок лимона.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 85 },
  { title: "Ореховое Ассорти", price: 550, format: "special", type: "Сдобное", imgUrl: "/cookies/nut-assorti.webp", description: "Рассыпчатое сдобное печенье, богато украшенное смесью дробленого фундука, миндаля и грецкого ореха.", ingredients: "Мука пшеничная, масло сливочное, сахар, фундук, миндаль, грецкий орех, яйцо куриное. Содержит орехи!", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 55 },
  { title: "Энергия Злаков", price: 360, format: "special", type: "Овсяное", imgUrl: "/cookies/grain-energy.webp", description: "Полезный перекус для активных людей. Овсяное печенье без сахара, с семенами льна и подсолнечника.", ingredients: "Хлопья овсяные, мука цельнозерновая, яблочное пюре, семена льна, семена подсолнечника, растительное масло.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 90 },
  { title: "Прованские травы", price: 285, format: "common", type: "Крекеры", imgUrl: "/cookies/provence-herbs-crackers.webp", description: "Ароматные хрустящие крекеры с букетом трав Прованса: розмарин, тимьян и орегано.", ingredients: "Мука пшеничная, вода, масло оливковое, соль морская, смесь сушеных трав, дрожжи.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 130 },
  { title: "Злаковый микс", price: 210, format: "common", type: "Галеты", imgUrl: "/cookies/grain-mix-galettes.webp", description: "Диетические галеты из смеси нескольких видов муки с добавлением отрубей. Источник клетчатки.", ingredients: "Мука пшеничная, мука ржаная обдирная, отруби пшеничные, вода, масло подсолнечное, соль.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 180 },
  { title: "Молочное", price: 200, format: "common", type: "Затяжное", imgUrl: "/cookies/milk-cookies.webp", description: "Нежное затяжное печенье с легким сливочно-молочным вкусом. Прекрасно сочетается с молоком.", ingredients: "Мука пшеничная, сахар, маргарин, молоко сухое цельное, сироп инвертный, разрыхлители, соль.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 200 },
  { title: "Курабье", price: 420, format: "special", type: "Сдобное", imgUrl: "/cookies/kurabie.webp", description: "Традиционное восточное лакомство. Рассыпчатое песочное печенье с каплей абрикосового джема.", ingredients: "Мука пшеничная в/с, масло сливочное, сахарная пудра, яичный белок, джем абрикосовый.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 70 },
  { title: "Шоколадный Овёс", price: 310, format: "common", type: "Овсяное", imgUrl: "/cookies/oatmeal-dark-choco.webp", description: "Мягкое овсяное печенье с кусочками благородного темного шоколада.", ingredients: "Хлопья овсяные, мука пшеничная, сахар, маргарин, темный шоколад, яйцо, какао-порошок.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 160 },
  { title: "Луковые", price: 265, format: "common", type: "Крекеры", imgUrl: "/cookies/onion-crackers.webp", description: "Пикантные хрустящие крекеры с насыщенным вкусом и ароматом жареного лука.", ingredients: "Мука пшеничная, масло растительное, сахар, соль, луковый порошок, разрыхлитель.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 140 },
  { title: "Кокосанка", price: 330, format: "common", type: "Сахарное", imgUrl: "/cookies/cocosanka.webp", description: "Ароматное сахарное печенье, обильно посыпанное кокосовой стружкой. Тропическое наслаждение!", ingredients: "Мука пшеничная, сахар, маргарин, кокосовая стружка, яйцо куриное, ароматизатор 'кокос'.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 110 },
  { title: "Творожные Ушки", price: 350, format: "common", type: "Сдобное", imgUrl: "/cookies/tvorog-ears.webp", description: "Нежное, слоеное печенье на основе натурального творога, посыпанное сахаром. Вкус, знакомый с детства.", ingredients: "Творог 9%, мука пшеничная в/с, масло сливочное, сахар, разрыхлитель.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 95 },
  { title: "Армейские", price: 150, format: "common", type: "Галеты", imgUrl: "/cookies/army-galettes.webp", description: "Простые, сытные и долгохранящиеся галеты по строгой рецептуре. Ничего лишнего.", ingredients: "Мука пшеничная 1 сорта, вода, дрожжи, соль.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 400 },
  { title: "Сливочное", price: 225, format: "common", type: "Затяжное", imgUrl: "/cookies/butter-hard-dough.webp", description: "Классическое затяжное печенье с выраженным вкусом натурального сливочного масла.", ingredients: "Мука пшеничная, сахар, масло сливочное, вода, сухое молоко, соль, сода, ванилин.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 190 },
  { title: "Маковый Хруст", price: 275, format: "common", type: "Крекеры", imgUrl: "/cookies/poppy-crackers.webp", description: "Необычное сочетание: хрустящий крекер с легкой сладостью и обилием маковых зерен.", ingredients: "Мука пшеничная, сахар, масло растительное, мак пищевой, сироп глюкозный, соль, разрыхлитель.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 135 },
  { title: "Мраморное", price: 295, format: "common", type: "Сахарное", imgUrl: "/cookies/marble-cookie.webp", description: "Эффектное двухцветное печенье, сочетающее в себе нежное ванильное и насыщенное шоколадное тесто.", ingredients: "Мука пшеничная, маргарин, сахар, яйцо, какао-порошок, ванилин.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 100 },
  { title: "Пряное Яблоко", price: 340, format: "special", type: "Овсяное", imgUrl: "/cookies/oatmeal-apple-cinnamon.webp", description: "Ароматное и мягкое овсяное печенье с кусочками сушеных яблок и пряной корицей.", ingredients: "Овсяные хлопья, мука цельнозерновая, сушеные яблоки, коричневый сахар, масло сливочное, корица.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 80 },
  { title: "Имбирное", price: 380, format: "special", type: "Сдобное", imgUrl: "/cookies/ginger-spice.webp", description: "Пряное печенье с имбирем, корицей и гвоздикой. Создает атмосферу уюта и праздника.", ingredients: "Мука пшеничная, масло сливочное, сахар тростниковый, мед, имбирь молотый, корица, гвоздика.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 65 },
  { title: "Томатные", price: 250, format: "special", type: "Галеты", imgUrl: "/cookies/tomato-galettes.webp", description: "Пикантные галеты с ярким вкусом вяленых томатов и ароматом базилика. Отличная закуска.", ingredients: "Мука пшеничная, вода, масло оливковое, томатная паста, сушеные томаты, сушеный базилик, соль.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 90 },
  { title: "Ржаное", price: 185, format: "common", type: "Затяжное", imgUrl: "/cookies/rye-style.webp", description: "Простое и сытное затяжное печенье на ржаной муке с легкой кислинкой. Хорошо утоляет голод.", ingredients: "Мука пшеничная 1с, мука ржаная обдирная, вода, сахар, маргарин, соль, сода.", address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2", quantity: 280 },
];

const statsData = [
  { number: "12408", statType: "cookies_sold" },
  { number: "1000+", statType: "clients" },
  { number: "3255", statType: "reviews" },
];

const contactData = {
  phone: "8 (xxx) xxx-xx-xx",
  email: "Hkikomori@yandex.ru",
  address: "г. Беллер, улица Селлер, д. 15",
  inn: "xxxxxxxxxx",
};

export const seedMongo = async (): Promise<void> => {
  await connectDB();

  const cookiesCount = await Cookie.countDocuments();
  if (cookiesCount > 0) {
    console.log("MongoDB allready filled");
    await mongoose.disconnect();
    return;
  }

  console.log("MongoDB: cookies...");
  await Cookie.insertMany(cookiesData);

  console.log("MongoDB: stats...");
  await Stat.insertMany(statsData);

  console.log("MongoDB: contacts...");
  await Contact.create(contactData);

  await mongoose.disconnect();
};

