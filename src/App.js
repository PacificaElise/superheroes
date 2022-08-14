import React from 'react';
import Hero from './components/Hero';
import './styles/App.css';

const heroes = [
    {name:"Железный человек", alterego:"Тони Старк", description:"Гений, миллиардер, плейбой, филантроп. Высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы.", img:"https://i.pinimg.com/originals/65/05/19/650519bfc10535195d736ee390983d20.png"},
    {name:"Человек-паук", alterego:"Питер Паркер", description:"Борец за справедливость, студент, фотограф. Сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины.", img:"https://e7.pngegg.com/pngimages/71/62/png-clipart-spider-man-wolverine-venom-chibi-marvel-comics-spider-marvel-spider-man-illustration-heroes-superhero.png"},
    {name:"Капитан Америка", alterego:"Стивен Роджерс", description:"Супер-солдат. Сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя.", img:"https://fikiwiki.com/uploads/posts/2022-02/1644828403_18-fikiwiki-com-p-kapitan-amerika-kartinki-supergeroya-20.png"},
    {name:"Тор", alterego:"полное имя — Тор Одинсон", description:"Борец за справедливость, скандинавский бог. Все, что может бог, плюс молот Мьелнир.", img:"https://i.pinimg.com/originals/db/14/89/db14895e59e30676cb5376f2389419e9.png"},
    {name:"Халк", alterego:"Брюс Беннер", description:"Супергерой, борец за справедливость, ученый-биохимик. Сверхчеловеческая сила искорость, выносливость, полет.", img:"https://e7.pngegg.com/pngimages/930/888/png-clipart-marvel-comics-incredible-hulk-hulk-youtube-cartoon-drawing-she-hulk-fictional-characters-superhero.png"},
    {name:"Черная вдова", alterego:"Наташа Романофф", description:"Супергероиня, шпионка. Пик человеческого физического потенциала, замедленное старение, знание многих языков", img:"https://w7.pngwing.com/pngs/715/410/png-transparent-black-widow-drawing-cartoon-black-widow-comics-black-widow-fictional-character.png"},{name:"Дэдпул", alterego:"Уэйд Уинстон Уилсон","description":"Антигерой, наемник. Высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система", img:"https://e7.pngegg.com/pngimages/609/700/png-clipart-deadpool-deadpool-drawing-chibi-comic-book-animation-deadpool-comics-fictional-character.png"},
    {name:"Сорвиголова", alterego:"Мэ́ттью Майкл «Мэтт» Мёрдок", description:"Обладает четырьмя обострёнными чувствами восприятия, лишён зрения, развито «радарное чутьё», напоминающее эхолокацию", img:"https://all-t-shirts.ru/goods_images/ru122172II000d26aff66ea5be268599f73c499b16d68.jpg"}
]

function App() {
    return (
      <div className='App'>
        {
            heroes.map((hero)=>
            <Hero name={hero.name} alterego={hero.alterego} description={hero.description} img={hero.img}/>
            )
        }
      </div>
    );
  }

  export default App;