const fileUtil = require('./utils/fileUtil');
const path = require('path');

// 题目基础路径
const base = path.join(__dirname, 'src');

// 保存分类与题目
let categories = [];
let questions = [];

// 异步流程处理
Promise.resolve()
  // 读取分类及数量
  .then(() => fileUtil.readDir(base))
  // 对每个类别并行处理Promise流程，以获取题目数量
  .then((files) => {
    categories = files;
    const dirs = categories.map(dir => fileUtil.readDir(path.resolve(base, dir)));
    return Promise.all(dirs);
  })
  // 处理并行流程将所有的所有结果，获取题目及数量
  .then((subDirs) => {
    subDirs.forEach((question) => {
      questions = questions.concat(question);
    });

    console.log(`Welcome! Now, there are totally ${categories.length} categories and ${questions.length} questions of coding interview.`);
    console.log('Categories:');
    categories.map((category, index) => console.log(`${index + 1}. ${category}`));
    console.log('Questions:');
    questions.map((question, index) => console.log(`${index + 1}. ${question}`));
  })
  // 异常捕捉
  .catch((err) => {
    throw new Error(err);
  });
