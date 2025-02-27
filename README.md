# Для проекта нужна node v20.11.1

- установите зависимости командой `npm install`
- командой `npm run convert-rastr` создайте `webp` версии растровых изображений в папке `source/img/content`
- команда `npm run dev` запускает сервер для разработки
- команда `npm run build` собирает оптимизированную версию проекта в папке `dist`
- команда `npm run preview` запускает сервер с оптимизированной версией
- спрайт с иконками собран из файлов в папке `source/img/sprite/`
- для доступа к спрайту из html используйте путь `href="./__spritemap#sprite-{название файла иконки}"`
- команда `npm run w3c` проверяет валидность HTML
- команда `npm run linthtml` проверяет стиль HTML
- команда `npm run html-validate` проверяет ошибки HTML
- команда `npm run stylelint` проверяет валидность стилей
- команда `npm run lint-js` проверяет валидность JavaScript
- команда `npm run ls-lint` проверяет названия файлов
- команда `npm run editorconfig` проверяет формат файлов
