GET запрос был сделан с помощью Axios

```javascript
componentDidMount() {
        axios.get(`https://s3-eu-west-1.amazonaws.com/sequeniatesttask/films.json`)
            .then(res => {
                ...
            })
            .catch(error => console.log('error:', error));
}
```

***

На экране отображенна информация о фильмах, а так же имеется кнопка для сортировки по году:
![Иллюстрация к проекту](https://github.com/SuperPananda/mywebspa/raw/master/image/84LAmJw-9jY.jpg)

***

Внутри года можно сортировать по рейтингу:
![Иллюстрация к проекту](https://github.com/SuperPananda/mywebspa/raw/master/image/xKO6pF1nBGI.jpg)

***

В модальном окне отображается полная информация о фильме:
![Иллюстрация к проекту](https://github.com/SuperPananda/mywebspa/raw/master/image/tbS_29xbbmE.jpg)
