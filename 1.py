#coding=utf-8
# 本题为考试单行多行输入输出规范示例，无需提交，不计分。
import sys 

def decode(str):
    nums = []
    s = []
    res = ''
    temp = ''
    for i in range(len(str)):
        if str[i] == '[':
            j = i
            while str[j] != '|':
                j += 1
            # print(i,j,str[i+1:j])
            nums.append(int(str[i+1:j]))
            i = j
        elif str[i] == '|':
            j = i         
            while str[j] != ']' and str[j] != '[':
                # print(j,str[j])
                j += 1
            s.append(str[i+1:j])
            i = j
        elif str[i] == ']':
            num = nums.pop()
            s_reg = s.pop()
            # print(num,s_reg)
            if(len(nums) != 0):
                s.append(s.pop() + num * s_reg)
            else:
                res += num * s_reg
        else:
            if(len(nums) == 0):
                res += str[i]
            i += 1
    return res

if __name__ == "__main__":
    str = sys.stdin.readline().strip()
    print(decode(str))