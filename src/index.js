/**
 * アロー関数
 */

// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です"));

// 従来の関数2
const func1_ = function (str) {
  return str;
};
console.log(func1_("func1_です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

// returnを省略して一行で記述も可能。
const func2_ = (str) => str;
console.log(func2_("func2_です"));

// 引数が2つの場合
const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

/**
 * 分割代入
 */

// オブジェクト代入
const myProfile = {
  name: "しん",
  age: 1
};

// ここで分割代入
const { name, age } = myProfile;

// プロパティのみでOK
const msg = `名前は${name}です。年齢は${age}です。`;
console.log(msg);

// 配列も可能
const myProfile2 = ["しん", 1];
const [name2, age2] = myProfile2; // 取り出す順番が大事
const msg2 = `名前は${name2}です。年齢は${age2}です。`;
console.log(msg2);

/**
 * デフォルト値、引数など
 */

// 引数が無い場合のデフォルト値を設定
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
sayHello();

/**
 * スプレッド構文
 */

// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "山田"];

// 従来
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

// mapを使った方法
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name) => console.log(name));

// filterの使用（条件に合った要素のみ抽出する）
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);

/**
 * 三項演算子
 */
const val = 1 > 0 ? "true" : "false";
console.log(val);
