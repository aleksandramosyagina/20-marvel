
let hero = `[{
    "name": "Бэтмен",
    "Universe": "DC Comics",
    "alter_ego": "Брюс Уэйн",
    "who": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "power": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "photo": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
    "description": "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом."
},{
    "name": "Супермен",
    "Universe": "DC Comics",
    "alter_ego": "Кларк Кент",
    "who": "борец за справедливость",
    "friends": "собака Крипто",
    "power": "Непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "photo": "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
    "description": "полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
},{
    "name": "Железный человек",
    "Universe": "Marvel Comics",
    "alter_ego": "Тони Старк",
    "who": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "power": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмыепробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "photo": "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
    "description": "Пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже. Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз. Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна."
}]`;

document.addEventListener("DOMContentLoaded", function(event) {

    let parsedHeroes = JSON.parse(hero);

    let heroesContent = "";
    for(let marvel of parsedHeroes) {
        heroesContent += `<div class='hero'>
        <h2>${marvel.name}</h2>
        <div><b>Вселенная</b>: ${marvel.Universe}</div>
        <div><b>Альтер эго</b>: ${marvel.alter_ego}</div>
        <div><b>Род деятельности</b>: ${marvel.who}</div>
        <div><b>Друзья:</b> ${marvel.friends}</div>
        <div><b>Суперсилы:</b> ${marvel.power}</div>
        <div><img src='${marvel.photo}'></div>
        <div><b>Подробнее:</b> ${marvel.description}</div>

        </div>`;
    }
document.getElementById("marvel-wrap").innerHTML = heroesContent;

});
