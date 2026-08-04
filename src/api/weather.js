import axios from 'axios'

// 키는 코드에 직접 쓰지 않고 .env 에서 읽어온다 (.env 는 git에 올라가지 않음)
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

// 화면에 보여줄 도시 목록. OpenWeatherMap 조회용 이름과 짝지어 둔다
export const CITIES = [
  { id: 'city_01', name: '서울', query: 'Seoul' },
  { id: 'city_02', name: '수원', query: 'Suwon' },
  { id: 'city_03', name: '부산', query: 'Busan' },
]

export const findCityMeta = (id) => CITIES.find((city) => city.id === id)

const formatTime = (unixSeconds) =>
  new Date(unixSeconds * 1000).toLocaleString('ko-KR', {
    dateStyle: 'short',
    timeStyle: 'short',
  })

// 서버 응답을 화면이 쓰던 모양으로 바꿔준다
const toCityData = (city, data) => ({
  id: city.id,
  name: city.name,
  temp: Math.round(data.main.temp),
  status: data.weather[0].description,
  humidity: data.main.humidity,
  wind: data.wind.speed,
  rainfall: data.rain?.['1h'] ?? 0,
  observedAt: formatTime(data.dt),
})

export const fetchCity = async (city) => {
  const response = await axios.get(BASE_URL, {
    params: { q: city.query, appid: API_KEY, units: 'metric', lang: 'kr' },
  })
  return toCityData(city, response.data)
}

// 세 도시를 동시에 요청한다. 하나씩 기다리면 세 배 느려진다
export const fetchAllCities = () => Promise.all(CITIES.map(fetchCity))
