// 関数式
const sum = function(x, y) {
    return x+y;
}

//アロー関数
const sum2 = (x,y) => {
    return x+y;
}

// 暗黙的なreturn
const sum3 = (x,y) => x+y;

const rollDies = () => {
    return Math.floor(Math.random() * 6 + 1);
}

// 暗黙的なreturn
const rollDies2 = () => (
    Math.floor(Math.random() * 6 + 1)
);

const movies = [
    {
        title: 'Moana',
        score: 88,
        year: 2016
    },
    {
        title: 'Frozen',
        score: 78,
        year: 2013
    },
    {
        title: 'Up',
        score: 90,
        year: 2009
    },
    {
        title: 'Zootopia',
        score: 100,
        year: 2016
    }
    {
        title: 'Tangled',
        score: 98,
        year: 2010
    }
];

//$ テンプレートリテラル
//JavaScriptでは、テンプレートリテラル（Template literals）と呼ばれる機能を使用して、
//文字列内に変数や式を埋め込むことができます。
const newMovies  = movies.map(function(movie) {
    return `${movie.title} - ${movie.score/10}`;
})

// 暗黙的なreturn
const newMovies2  = movies.map (movie => `${movie.title} - ${movie.score/10}`);

console.log('おーい');

//遅延実行
//param1: 関数‘，param2: ミリ秒
const idTimeout = setTimeout(() => {
    console.log('やっほー');
},3000);

//setTimeoutのキャンセル
clearTimeout(idTimeout);

//5秒ごとに繰り返す
const id = setInterval(() =>{console.log(Math.random)}, 5000);

//setIntervalのキャンセル
clearInterval(id);

//filter------------------------------------------------------
//提供されｔらテスト関数を満たす要素からなる新しい配列を生成する
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,  14, 15, 16, 17, 18];

numbers.filter(num => {return num === 4;});

//評価の良い映画に絞りこむ
const goodMovies = movies.filter(movie => movie.score > 90);

//よい映画のタイトルだけ表示したいとき
const goodMovieTitles = movies
    .filter(movie => movie.score > 90)
    .map(movie => movie.title);

//someとevery--------------------------------------------------
//some: 1つでもテスト関数を満たす要素があればtrueをかえす
//every:すべての要素が指定されたテスト関数を満たしたらtrueを返す

const exams = [15, 89, 90, 78, 69, 90, 89];

//false
exams.every(exam => exam > 60);

//true
exams.some(exam => exam > 60);


//reduce---------------------------------------------------------
//配列の各要素に対して引数で与えられたreducer関数を実行して，単一の出力値を生成する．
// 複数の要素から一つのものを作り上げる

[3,5,7,9,11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

//出力
//8, 15, 24, 35

const prices = [980, 1500, 1980, 8000, 2090];

let total = 0;
for(let price of prices){
    total += price;
}

prices.reduce((total, price) => {
    return total + price;
})

prices.reduce((total, price) => total + price);

// 配列の中の最小値
prices.reduce((min, price) => {
    if(min < price){
        return price;
    }
    return min;
});


//オブジェクト同士の比較
movies.reduce((bestMovie, movie) => {
    if(bestMovie.score < movie.score){
        return movie;
    }
    return bestMovie;
});

//2番目の引数
const evens = [2, 4, 6, 8];

const sum4 = evens.reduce((sum, num) => {return  sum + num;}); //20

//初期値を与えることができる
const sum5 = evens.reduce((sum, num) => {return  sum + num;}, 100); //120
