from xml.parsers.expat import ParserCreate

class DefaultSaxHandler(object):
    def start_element(self,name,attr):
        print('sax:start_element:%s,attr:%s'%(name,attr))
    def end_element(self,name):
        print('sax:end_element:%s'%name)
    def char_data(self,text):
        print('sax:char_data:%s'%text)
xml = r'''<?xml version = "1.0"?>
<ol>
    <li><a href="/python">Python</a></li>
    <li><a href="/ruby">Ruby</a></li>
</ol>
'''
handler = DefaultSaxHandler()
parser = ParserCreate()
parser.StartElementHandler = handler.start_element
parser.EndElementHandler = handler.end_element
parser.CharacterDataHandler = handler.char_data
parser.Parse(xml)
print('-'*40)
import re
from pyexpat import ParserCreate
from urllib import request

#创建xml解释器函数，解释xml_str
def parseXml(xml_str):
    handler = WeatherSaxHandler()
    parser = ParserCreate()
    parser.StartElementHandler = handler.start_element
    parser.EndElementHandler = handler.end_element
    parser.CharacterDataHandler = handler.char_data
    parser.Parse(xml_str)
    return handler.cityweather.__dict__()


class CityWeather(object):

    def __init__(self):
        self.city = None
        self.forecast = []

    def __getcityweatherforecast(self):
        cityweatherforecast = {}
        cityweatherforecast['city'] = self.city
        cityweatherforecast['forecast'] = [
            {'date': weatherforecast.date, 'day': weatherforecast.day,
             'high_tem': weatherforecast.high_tem, 'low_tem': weatherforecast.low_tem,
             'weather': weatherforecast.weather} for weatherforecast in
            self.forecast]
        return cityweatherforecast

    def __dict__(self):
        return self.__getcityweatherforecast()


class Forecast(object):
    __slots__ = ('date', 'day', 'high_tem', 'low_tem', 'weather')

    weekday = {
        'Mon': '一',
        'Tue': '二',
        'Wed': '三',
        'Thu': '四',
        'Fri': '五',
        'Sat': '六',
        'Sun': '日',
    }
    month = {
        'Jan': 1,
        'Feb': 2,
        'Mar': 3,
        'Apr': 4,
        'May': 5,
        'June': 6,
        'July': 7,
        'Aug': 8,
        'Sep': 9,
        'Oct': 10,
        'Nov': 11,
        'Dec': 12
    }

    def __init__(self, date, day, high_tem, low_tem, weather):
        self.date = date
        self.day = day
        self.high_tem = high_tem
        self.low_tem = low_tem
        self.weather = weather


class WeatherSaxHandler(object):

    @property
    def cityweather(self):
        return self.__cityweather

    def start_element(self, name, attrs):
        if name == 'channel':
            self.__cityweather = CityWeather()
        self.__nodename = name
        self.__nodenameattrs = attrs

    def end_element(self, name):
        if name == 'yweather:location':
            self.__cityweather.city = self.__nodenameattrs['city']
        if name == 'yweather:forecast':
            def forecastformat(attrs):
                date = re.split(r'\s+', attrs['date'])[::-1]
                date[1] = Forecast.month[date[1]]
                date = '-'.join([str(int(n)) for n in date])
                day = '星期' + Forecast.weekday[attrs['day']]
                heigh_tem = '%.1f ºC' % ((float(attrs['high']) - 32) / 1.8)
                low_tem = '%.1f ºC' % ((float(attrs['low']) - 32) / 1.8)
                weather = attrs['text']
                return date, day, heigh_tem, low_tem, weather

            forecast = Forecast(*forecastformat(self.__nodenameattrs))
            self.__cityweather.forecast.append(forecast)

    def char_data(self, text):
        return