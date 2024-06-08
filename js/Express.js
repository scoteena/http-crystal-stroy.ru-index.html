const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit_form', (req, res) => {
   const { name, phone, message } = req.body;

   // Создаем транспорт для отправки писем
   const transporter = nodemailer.createTransport({
      service: 'yandex',
      auth: {
         user: 'sdchzhtch@yandex.ru',    // Ваша почта
         pass: 'Y%S&,J(8S)6fefj'   // Ваш пароль
      }
   });

   // Настройка письма
   const mailOptions = {
      from: 'sdchzhtch@yandex.ru',    // Отправитель
      to: 'joseg26356@ahieh.com',    // Получатель
      subject: 'Новая форма связи',    // Тема письма
      text: `Имя: ${name}\nНомер телефона: ${phone}\nСообщение: ${message}`    // Текст письма
   };

   // Отправка письма
   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         console.log(error);
         res.status(500).send('Произошла ошибка при отправке письма.');
      } else {
         console.log('Письмо успешно отправлено: ' + info.response);
         res.status(200).send('Письмо успешно отправлено.');
      }
   });
});

app.listen(3000, () => {
   console.log('Сервер запущен на порту 3000');
});