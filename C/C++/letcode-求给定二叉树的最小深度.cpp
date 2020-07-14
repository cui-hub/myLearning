

class Solution {
public:
    int run(TreeNode *root) {
        if(root == nullptr) {//出口：如果root是空节点，返回0
            return 0;
        };
        if(root->left == nullptr){// 若左子树为空，则返回右子树的最小深度+1
            return run(root->right) +1;
        };
        if(root->right == nullptr){// 若右子树为空，则返回左子树的最小深度+1
            return run(root->left) +1;
        };
        //// 左右子树都不为空时，取较小值
        int leftDepth = run(root->left)+1;
        int rightDepth = run(root->right)+1;
        return (leftDepth > rightDepth)?(rightDepth):(leftDepth);
    }
};