import { getPadTime } from "../../utils/getPadTime"
import {BsSnow2} from 'react-icons/bs'
import {SiSpring} from 'react-icons/si'
import {FaSun, FaCanadianMapleLeaf} from 'react-icons/fa'

export const getTime = (time) => {
    const titles = {
        ru: {
          day: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
          season: ['зима', 'весна', 'лето', 'осень'],
          month: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        },
        en: {
          day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          season: ['winter', 'spring', 'summer', 'autumn'],
          month: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
        }
      }
      
      const seasonIcons = [
        <BsSnow2/>,
        <SiSpring/>,
        <FaSun/>,
        <FaCanadianMapleLeaf/>
      ]
      
      const seasonColors = [
        '#1389e9',
        '#dbcc17',
        '#5ad006',
        '#fd8901'
      ]



    const year = time.getFullYear()
    const date = time.getDate()
    const month = time.getMonth()
    const day = time.getDay() 
    const h = getPadTime(time.getHours())
    const m = getPadTime(time.getMinutes())
    const s = getPadTime(time.getSeconds())
  
    const getSeason = () => {
      let season;
  
      if (month <= 1 || month === 11) {
        season = 0
      } else if (month >= 2 && month <= 4) {
        season = 1
      } else if (month >= 5 && month <= 7) {
        season = 2
      } else {
        season = 3
      }
  
      return season
    }
  
    const slider = document.querySelector('#slider')
    const control = document.querySelector('#control')
  
    const setRuClock = () => [
      slider.childNodes[0].style.opacity = '1',
      slider.childNodes[1].style.opacity = '0',
      slider.childNodes[2].style.opacity = '0',
      control.childNodes[0].style.backgroundColor = '#ff5b00',
      control.childNodes[1].style.backgroundColor = '#202020',
      control.childNodes[2].style.backgroundColor = '#202020',
    ]
  
    const setEnClock = () => [
      slider.childNodes[0].style.opacity = '0',
      slider.childNodes[1].style.opacity = '1',
      slider.childNodes[2].style.opacity = '0',
      control.childNodes[0].style.backgroundColor = '#202020',
      control.childNodes[1].style.backgroundColor = '#ff5b00',
      control.childNodes[2].style.backgroundColor = '#202020',
    ]
  
    const setDfClock = () => [
      slider.childNodes[0].style.opacity = '0',
      slider.childNodes[1].style.opacity = '0',
      slider.childNodes[2].style.opacity = '1',
      control.childNodes[0].style.backgroundColor = '#202020',
      control.childNodes[1].style.backgroundColor = '#202020',
      control.childNodes[2].style.backgroundColor = '#ff5b00',
    ]

    return {year, date, month, day, h, m, s, getSeason, setDfClock, setEnClock, setRuClock, titles, seasonIcons, seasonColors}
}