// 1. Получить информацию о Интернет-адресе Web-страницы
function getReferrer() {
    return document.referrer;
  }
  
  // 2. Вывести информацию однократно через 5 секунд после запуска страницы
  setTimeout(function() {
    alert(getReferrer());
  }, 5000);


function showWelcome()
{
   var element = document.getElementById('imageElement');
   element.style.transform = 'scale(2)';
   element.style.border = '1px solid green';}


function hideWelcome()
{
   var element = document.getElementById('imageElement');
   element.style.transform = 'none';
   element.style.border = 'none';}


   // 1. Получить информацию о размерах экрана монитора пользователя
function getScreenSize() {
    return {
      width: window.screen.width,
      height: window.screen.height
    };
  }
  
  // 2. Отобразить полученную информацию в новом окне
  setTimeout(function() {
    const screenSize = getScreenSize();
    const infoWindow = window.open('', '', 'width=200,height=100');
    infoWindow.document.write(`Ширина экрана: ${screenSize.width}, Высота экрана: ${screenSize.height}`);
  }, 3000);

  
 
  
