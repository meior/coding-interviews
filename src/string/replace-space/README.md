# 替换空格
## 题目描述
请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

## 问题分析
题目本意在于对字符串的理解，不考虑JavaScript中针对字符串的函数以及正则表达式。将空格替换成"%20"，将多出2个字符，如果在原字符串中处理需要将字符元素移动，腾出空间后插入"%20"。

若从前往后替换，后面的字符要不断往后移动，在每一次替换过程中重复后移，效率低下。从后往前替换，先计算需要多少空间，然后从后往前移动，则每个字符只会移动一次，效率较高。