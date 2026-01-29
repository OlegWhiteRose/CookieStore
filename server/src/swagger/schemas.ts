/**
 * @swagger
 * components:
 *   schemas:
 *     Error:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: error
 *         message:
 *           type: string
 *           example: Error message
 *     
 *     Cookie:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "6977fe87366d6120d772dc44"
 *         title:
 *           type: string
 *           example: "Шоколадная Мечта"
 *         price:
 *           type: number
 *           example: 480
 *         format:
 *           type: string
 *           example: "special"
 *         type:
 *           type: string
 *           example: "Сдобное"
 *         img_url:
 *           type: string
 *           example: "http://localhost:9000/cookies/cookies/choco-dream.webp"
 *         description:
 *           type: string
 *           example: "Богатое сдобное печенье с крупными каплями настоящего темного бельгийского шоколада."
 *         ingredients:
 *           type: string
 *           example: "Мука пшеничная в/с, масло сливочное 82.5%, сахар, шоколад темный (72%), какао-порошок, яйцо куриное. Может содержать следы фундука."
 *         address:
 *           type: string
 *           example: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2"
 *         quantity:
 *           type: number
 *           example: 70
 *     
 *     CookiesResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: ok
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Cookie'
 *           example:
 *             - id: "6977fe87366d6120d772dc44"
 *               title: "Шоколадная Мечта"
 *               price: 480
 *               format: "special"
 *               type: "Сдобное"
 *               img_url: "http://localhost:9000/cookies/cookies/choco-dream.webp"
 *               description: "Богатое сдобное печенье с крупными каплями настоящего темного бельгийского шоколада."
 *               ingredients: "Мука пшеничная в/с, масло сливочное 82.5%, сахар, шоколад темный (72%), какао-порошок, яйцо куриное. Может содержать следы фундука."
 *               address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2"
 *               quantity: 70
 *             - id: "6977fe87366d6120d772dc49"
 *               title: "Ореховое Ассорти"
 *               price: 550
 *               format: "special"
 *               type: "Сдобное"
 *               img_url: "http://localhost:9000/cookies/cookies/nut-assorti.webp"
 *               description: "Рассыпчатое сдобное печенье, богато украшенное смесью дробленого фундука, миндаля и грецкого ореха."
 *               ingredients: "Мука пшеничная, масло сливочное, сахар, фундук, миндаль, грецкий орех, яйцо куриное. Содержит орехи!"
 *               address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2"
 *               quantity: 55
 *             - id: "6977fe87366d6120d772dc4e"
 *               title: "Курабье"
 *               price: 420
 *               format: "special"
 *               type: "Сдобное"
 *               img_url: "http://localhost:9000/cookies/cookies/kurabie.webp"
 *               description: "Традиционное восточное лакомство. Рассыпчатое песочное печенье с каплей абрикосового джема."
 *               ingredients: "Мука пшеничная в/с, масло сливочное, сахарная пудра, яичный белок, джем абрикосовый."
 *               address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2"
 *               quantity: 70
 *         max_price:
 *           type: number
 *           example: 550
 *         max_quantity:
 *           type: number
 *           example: 400
 *     
 *     CookieResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: ok
 *         data:
 *           $ref: '#/components/schemas/Cookie'
 *       example:
 *         status: ok
 *         data:
 *           id: "6977fe87366d6120d772dc44"
 *           title: "Шоколадная Мечта"
 *           price: 480
 *           format: "special"
 *           type: "Сдобное"
 *           img_url: "http://localhost:9000/cookies/cookies/choco-dream.webp"
 *           description: "Богатое сдобное печенье с крупными каплями настоящего темного бельгийского шоколада."
 *           ingredients: "Мука пшеничная в/с, масло сливочное 82.5%, сахар, шоколад темный (72%), какао-порошок, яйцо куриное. Может содержать следы фундука."
 *           address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2"
 *           quantity: 70
 *     
 *     Contact:
 *       type: object
 *       properties:
 *         phone:
 *           type: string
 *           example: "+7 (999) 123-45-67"
 *         email:
 *           type: string
 *           example: "info@cookiestore.com"
 *         address:
 *           type: string
 *           example: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2"
 *         inn:
 *           type: string
 *           example: "1234567890"
 *     
 *     ContactResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: ok
 *         data:
 *           $ref: '#/components/schemas/Contact'
 *       example:
 *         status: ok
 *         data:
 *           phone: "+7 (999) 123-45-67"
 *           email: "info@cookiestore.com"
 *           address: "Россия, г. Тверь, ул. Школьников, д. 15, корп. 2"
 *           inn: "1234567890"
 *     
 *     Stat:
 *       type: object
 *       properties:
 *         number:
 *           type: string
 *           example: "12408"
 *         type:
 *           type: string
 *           example: "cookies_sold"
 *     
 *     StatsResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: ok
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Stat'
 *           example:
 *             - number: "12408"
 *               type: "cookies_sold"
 *             - number: "1000+"
 *               type: "clients"
 *             - number: "3255"
 *               type: "reviews"
 *     
 *     Feedback:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Иван Иванов"
 *         contactInfo:
 *           type: string
 *           example: "+7 (999) 123-45-67, ivan@example.com"
 *         message:
 *           type: string
 *           example: "Хочу узнать о доставке"
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     
 *     Order:
 *       type: object
 *       properties:
 *         phone:
 *           type: string
 *           example: "+7 (999) 123-45-67"
 *         email:
 *           type: string
 *           example: "ivan@example.com"
 *         city:
 *           type: string
 *           example: "Москва"
 *         postalCode:
 *           type: string
 *           example: "123456"
 *         street:
 *           type: string
 *           example: "Тверская улица"
 *         house:
 *           type: string
 *           example: "12"
 *         building:
 *           type: string
 *           example: "1"
 *         apartment:
 *           type: string
 *           example: "45"
 *         comment:
 *           type: string
 *           example: "Доставить после 18:00"
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               cookieId:
 *                 type: string
 *               title:
 *                 type: string
 *               quantity:
 *                 type: number
 *               price:
 *                 type: number
 *               totalPrice:
 *                 type: number
 *         totalAmount:
 *           type: number
 *           example: 960
 *         status:
 *           type: string
 *           enum: [pending, confirmed, delivered, cancelled]
 *           example: "pending"
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

