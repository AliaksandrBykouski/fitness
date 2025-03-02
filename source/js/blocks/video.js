document.addEventListener('DOMContentLoaded', function() {
  // Загрузка YouTube API скрипта
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Функция для воспроизведения видео
  window.playVideo = function() {
    // Скрываем постер и кнопку
    document.getElementById('poster').style.display = 'none';
    document.getElementById('playButton').style.display = 'none';

    // Показываем iframe
    var player = document.getElementById('player');
    player.style.display = 'block';

    // Инициализация YouTube API
    var iframe = player.getElementsByTagName('iframe')[0];
    var playerInstance = new YT.Player(iframe, {
      events: {
        'onReady': function(event) {
          event.target.playVideo(); // Автоматически воспроизводим видео при готовности
        }
      }
    });
  };
});
