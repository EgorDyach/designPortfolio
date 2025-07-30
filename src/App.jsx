import { useState } from 'react';
import './App.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import img9 from './assets/img9.jpg'
import img10 from './assets/img10.jpg'
const content = [
  { title: "Презентация кандидата в студенческий совет", link: "https://www.figma.com/design/pP237afBj5NISaExhxwtYa/%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%B4%D0%B0%D1%82%D0%B0-%D0%B2-%D1%81%D1%82%D1%83%D0%B4%D1%81%D0%BE%D0%B2%D0%B5%D1%82?node-id=0-1&t=INNSgIUCO84SvB4T-1", img: "https://sun9-19.userapi.com/s/v1/if2/878vmyc5VTta0phEutWQdNYNT8xCjCqWj22ALOHMRsPeNqDOCK2R_bTC3SAsu_NktoJQNPaB7ntx9BZU0thNJKiZ.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,1920x1080&from=bu&cs=1920x0", descr: `Передо мной стояла задача создать презентацию для кандидата в студенческий совет университета. Я разработал презентацию, которая в полной мере отражает характер канидата, его цели и задачи на выборах.`},
  { title: "Историческая презентация о развитии наук", link: "https://www.figma.com/design/roQLqRAHPza0MJgKRDDzyp/%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%BE-%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B8-%D0%BD%D0%B0%D1%83%D0%BA?node-id=0-1&t=HK4VsNZIifAhKEy4-1", img: "https://sun9-43.userapi.com/s/v1/if2/Nl6LH1HZBTocWaKyZXpnon8vH__b_Vzj72xDItYgxwvRo_xTEJM8VZ6E9vGT2DQT8J90hCrnq0zsVPwBTT2dFBEl.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,1920x1080&from=bu&cs=1920x0", descr: `Я разработал презентацию для спикера, у которого было выступление по теме "Становление и развитие наук". Презентация полностью отражает тему и специально стилизована, чтобы передавать атмосферу самых первых времён, когда наука только зарождалась.`},
  { title: "Презентация команды на хакатоне Осень 2024", link: "https://www.figma.com/design/qkDPWvAjAbuCY9hLgYtqJD/%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%A5%D0%B0%D0%BA%D0%B0%D1%82%D0%BE%D0%BD-%D0%9E%D1%81%D0%B5%D0%BD%D1%8C-2024?node-id=0-1&t=A868vXhBmVnkOFiz-1", img: "https://sun9-64.userapi.com/s/v1/if2/I9wIj9IqlaMXA9AdjFE6CHVUPKVE4jkxK8XPgV_CzJu2m8jaL0Z7cYp7GhDlarkrHctw2VkYArAA3FOAEi7hDMRR.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,1920x1080&from=bu&cs=1920x0", descr: `Необходимо было создать презентацию для команды на хакатоне, которая бы полностью отражала проблему, которую поставили перед командой, и решение этой проблемы. По итогам хакатона команда заняла второе место.`},
  { title: "Презентация команды на хакатоне Весна 2025", link: "https://www.figma.com/design/HVF1rrOykgHC7HcDfOj3pe/%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%A5%D0%B0%D0%BA%D0%B0%D1%82%D0%BE%D0%BD-%D0%92%D0%B5%D1%81%D0%BD%D0%B0-2025?node-id=1-2&t=UeMJMDstzJkqUZmQ-1", img: "https://psv4.userapi.com/s/v1/d2/52X4WoHRBgny2oZvRenHPuql2Q47Gh4Rv6rGutDg2ssMU9lRFd6m9EPlvFvQFPbgDQf55xTIJMRc2AH8pAsNxL403odRGOZ2NvEzRYDd8Z72K18Kk5kuLdkFRwag19bIRidNdRT2uYFm/Slayd_1.png", descr: `Необходимо было создать презентацию для команды на хакатоне, которая бы полностью отражала проблему, которую поставили перед командой, и решение этой проблемы. По итогам хакатона команда заняла третье место.`},
  { title: " Разработка фирменного стиля для компании по предоставлению психологических услуг", link: "https://drive.google.com/drive/folders/1Klq1wg-r2LOKmwEmSfSp_CBILsmgkYMo?usp=sharing", img: img6, descr: "В рамках данного проекта я разработал фирменный стиль для компании. Мною был разработан логотип, множество вариантов использования логотипа, фирменные цвета компании, паттерн и подобран шрифт. Также был разработан дизайн для бланка и письма. Предоставлены варианты использования логотипа в реальной жизни, например на карточке или на футболке." },
  { title: "Дизайн лендинга для компании по предоставлению услуг безопасности", link: "https://www.figma.com/design/p8DTST7CwK12sEUAMOaBej/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-%22%D0%9F%D0%A3%D0%A1%D0%9A%22?node-id=0-1&t=GMtvTX4SkdkRveAi-1", img: "https://sun9-76.userapi.com/s/v1/if2/eGuuknPtKWANu6rOVWtRv39YmvRfRl6T8qoopLSq_JFuHfXRW4LSxyNzEwWdZluvV_TouAtLcUnqhhwufHtHXMif.jpg?quality=95&as=32x16,48x24,72x36,108x54,160x80,240x120,360x180,480x240,540x270,640x320,720x360,1080x540,1280x640,1440x720,1920x960&from=bu&cs=1920x0", descr: `Моей задачей было разработать дизайн сайта для компании ПУСК. В рамках данного проекта я разработал фирменный стиль для компании и на его основе создал дизайн сайта, который полностью удовлетворил потребности заказчика.`},
  { title: "Дизайн лендинга для компании, занимающейся компрессорами", link: "https://www.figma.com/design/ca67nsGadHOO9Gw3Gb3Ccz/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-%22%D0%9A%D0%9A%D0%A1%22?node-id=0-1&t=xI03aqpG1EXQ1DDx-1", img: "https://sun9-25.userapi.com/s/v1/if2/qVZic1Jgj1qXenArpAAt6MWi8CYUJCgJbxdQh8ejRuTcZGXuqkymqeLpksWwY9VDXj9G7dvC4gt_hRrfP3Nur7Um.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1920x1280&from=bu&cs=1920x0", descr: `Моей задачей было разработать дизайн сайта для компании ККС. По итогу я создал дизайн, который полностью устроил заказчика, его цели и задачи.`},
  { title: "Дизайн сайта Бессмертного полка в «Сириусе»", link: "https://www.figma.com/design/SK2bnGhzf1gPjZvFzJ8wM2/9_May?node-id=410-237&t=7DOzjqWoLf7ReG95-1", img: "https://sun9-61.userapi.com/impg/9EvlsucE66gZ-tqEQFSEfhXeVijPwBpO9m-9cA/e3iVbdHHuMo.jpg?size=1108x506&quality=96&sign=13833eaaf4ffb61a5b48a582bc5f39c5&type=album", descr: ``},
  { title: "Дизайн лендинга для компании по предоставлению банкротских услуг", link: "https://www.figma.com/file/CLCBDZ6lfMqqZsnYj9Aefr/Bankruptcy?type=design&node-id=1%3A23&mode=design&t=VH5wWqGtsZ7572DF-1", img: "https://sun9-52.userapi.com/impg/DkwC0r8NfSANr06pP-KL8Bdi33_OvtPmXG1kgw/5hV1uLKCjsU.jpg?size=1063x593&quality=96&sign=bb829b533cf83e1df723d3b94e282968&type=album", descr: `В рамках данного проекта  я реализовал лендинг для компании, по предоставлению банкротских услуг. Мной был разработан фирменный стиль и стилевые элементы. Разработан сам лендинг и адаптив под 3 разрешения`},
  { title: "Дизайн лендинга для сервиса по поиску единомышленников", link: "https://www.figma.com/file/E4DTM0AooeogVryjqKnXqu/LikeMind-Landing?type=design&node-id=0%3A1&mode=design&t=eEtBemElrXK3nDlM-1", img: img2, descr: `В рамках данного проекта я разработал дизайн для сервиса по поиску единомышленников под названием "LikeMind". Отрисовал элементы фирменного стиля и использовал их в дизайне. Создал несколько тем и создал адаптивный дизайн для 3 разрешений.` },
  { title: "Дизайн лендинга для компании по предоставлению экологических услуг", link: "https://www.figma.com/file/RMhXPAISua54XzXTDtgSrj/Eco-Landing?type=design&node-id=0%3A1&mode=design&t=dVir9bC44IYlF4ND-1", img: img3, descr: "В рамках данного проекта я разработал дизайн для главной страницы сайта компании по предоставлению экологических услуг. Провёл бриф с заказчиком и выявил его пожелания и предпочтения." },
  { title: "Презентация приложения для знакомств", link: "https://docs.google.com/presentation/d/1X8dB0LCo6Jqz-qBlZ_exzskQCCIDwDX1gkpIXepWosE/edit?usp=sharing", descr: ``, img: "https://sun9-45.userapi.com/impg/WnxH65riZhRcUmBaIuS2XJqcy-iZ7R6RpGIVEA/S36uoE4MkI8.jpg?size=1068x606&quality=96&sign=db9413bbf3c412d973d46fc747011e15&type=album"},
  { title: "Презентация для команды на хакатоне", link: "https://1drv.ms/p/s!AhX7vequkTOzgtdLbv0MlrArMN1oqw?e=x6GOOH&nav=eyJzSWQiOjI1NiwiY0lkIjozMDM5MTU1NDU3fQ", img: img1, descr: "По итогам хакатона мною была создана презентация, описывающая всю суть нашего командного проекта и предоставляющая информацию о ходе разработки, используемых технологиях и так далее." }
];


function App() {
  const [numOfCard, setNumOfCard] = useState(null);
  return (
    <>
      <div>

        <h2 className='title'>
          Мои работы
        </h2>
        <div className='container' style={{ display: "flex", flexWrap: "wrap" }}>
          {content.map(e => {
            return (
              <div className={content.indexOf(e) === numOfCard ? 'item itemActive' : 'item'} key={content.indexOf(e)} onMouseOver={() => {
                setNumOfCard(content.indexOf(e))
              }} onMouseLeave={() => setNumOfCard(null)}>
                <a target="_blank" href={e.link} className='item__text'>{e.title}</a>
                <img className='item__img' src={e.img} alt="" />
                <p className='item__descr'>
                  {e.descr}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
