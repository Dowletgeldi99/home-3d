Имеется json-файл, описывающий картинки комнаты в 3д-туре, (1.json) и json-файл, описывающий геометрию комнат в 2д, вид сверху (2.json). 
Задача: построить сцену в three.js из комнат на основе данных json-файлика. Нанести шейдером картинки на стены внутри комнат.

Пояснения:
1.json 
{
  "activeRoom": "srv_2gil2141r5.JPG", //id текущей комнаты 
  "rooms": { //список комнат
    "srv_2gil2141r5.JPG": {
    "filename": "srv_2gil2141r5.JPG", //id комнаты
    "url": "https://img.immoviewer.com/items/mnikitin/5ab27bc54cedfd0053a66a41/Tour/2688-images/srv_2gil2141r5.JPG?v=1521646584636", //адрес картинки
    "urlMobile": "https://img.immoviewer.com/items/mnikitin/5ab27bc54cedfd0053a66a41/Tour/1606-images/srv_2gil2141r5.JPG?v=1521646584636",
    "thumbnail": "https://img.immoviewer.com/items/mnikitin/5ab27bc54cedfd0053a66a41/Tour/150-images/srv_2gil2141r5.JPG?v=1521646584636",
    }, 
} 

2.json 
{
  "corners": { //поворотные точки стен
    "x": 167.01802160842922, //координаты
    "y": -189.8476657149123, //координаты
    "wallStarts": [
      {
        "id": "5da6b453-7e61-aa27-fa62-0265d84afc0f", //id стены, которая начинается в данной точке
      }
    ],
    "wallEnds": [
      {
        "id": "5da6b453-7e61-aa27-fa62-0265d84afc0f", //id стены, которая заканчивается в данной точке
      }
    ]
  },
  "rooms": [ //список комнат
    {
      "corners": [], //список точек данной комнаты
      "interiorCorners": [], //список внутренних точек данной комнаты
      "roomName": "Bedroom"
    }
  ],
  "cameras": [ //список камер
    {
      "id": "srv_2gil2141r5.JPG",
      "x": 0,
      "y": 5.486400000000003,
      "mergeAngle": -80.86704043944846, //угол поворота
      "roomName": "Bedroom"
    }
  ]
}