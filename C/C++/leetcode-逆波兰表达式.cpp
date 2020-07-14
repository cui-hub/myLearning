// 计算逆波兰式（后缀表达式）的值
// 运算符仅包含"+","-","*"和"/"，被操作数可能是整数或其他表达式
// 例如：
//   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
//   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6


class Solution {
public:
    /*逆波兰表达式的解释器一般是基于堆栈的。
    解释过程一般是：操作数入栈；遇到操作符时，操作数出栈，求值，将结果入栈；
    当一遍后，栈顶就是表达式的值。*/
    int evalRPN(vector<string> &tokens) {
        stack<int> res;//创建栈
        for(auto x: tokens){//遍历每一个输入，注意是字符串类型
            if(x=="+" || x=="-" || x=="*" || x=="/"){//如果当前字符串是操作符
                if(res.size()<2) return 0;//如果栈内数字不足两个，即无法进行运算，则返回0
                int a=res.top();res.pop();//依次将栈内两个数字出栈进行操作运算
                int b=res.top();res.pop();
                int c=0;//用c表示每次运算的结果
                if(x=="+") c=b+a;
                if(x=="-") c=b-a;
                if(x=="*") c=b*a;
                if(x=="/") c=b/a;
                res.push(c);
            }
            else{//如果当前字符串是数字
                res.push(atoi(x.c_str()));//操作数入栈，注意先将string字符串转为char字符，再转为int数字
            }
        }
        return res.top();
        
    }
};