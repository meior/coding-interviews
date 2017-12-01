# 二进制中1的个数
## 题目描述
输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

## 问题分析
涉及到二进制的表示，首先应该想到的是位运算。对于整数可以将其和1进行与运算，如果二进制最后一位为1，则运算结果为1，否则为0，然后将整数右移一位，继续用此方法检测下一位，直到最终整数为0。该方法对非负数有效，如果输入为负数，在右移过程中会自动补1，程序会陷入死循环。

其实主要是要实现每检测一位，就将该位去除（或清0），不必要再保留。如果不采取移位操作来实现，那么可以采用位运算清0。将整数减1后，其二进制表示中最后一位1将变为0，后面的其他位全部由0变为1，如果再与该整数原来的值做与运算，则最后一位1将变为0，其余位均保持不变，达到了检测一位就清除一位的效果。重复上述步骤，直到整数变为0，重复步数即为1的个数（一次清除一个1）。