---
title: "欢迎来到我的博客"
date: 2026-07-27
categories:
  - 随笔
tags:
  - 博客
  - Markdown
excerpt: "这是我个人主页新上线的博客板块，本文演示了中文排版、图片、数学公式与代码块的渲染效果，欢迎大家常来看看。"
---

欢迎来到我的博客！这个板块是为了记录我在学习和科研过程中的一些思考、笔记与实践经验而搭建的。你只需要写一篇 Markdown（`.md`）格式的中文文章，放入 `_posts/` 目录中，就可以自动生成一篇新的博客文章，并展示在 [Blog 列表页](/blog/) 上。

## 写作说明

新建博客文章非常简单，只需要在仓库的 `_posts/` 目录下新建一个文件，文件名格式为：

```
YYYY-MM-DD-文章标题（英文或拼音）.md
```

例如本文对应的文件名是 `2026-07-27-welcome-to-my-blog.md`。文件开头需要填写 YAML Front Matter，例如：

```yaml
---
title: "文章标题"
date: 2026-07-27
categories:
  - 分类名
tags:
  - 标签1
  - 标签2
excerpt: "文章摘要，会展示在博客列表页"
---
```

接下来就可以在下方用标准 Markdown 语法撰写正文了。

## 中文排版

中文正文的渲染完全没有问题，标点符号、加粗（**加粗文字**）、斜体（*斜体文字*）、[超链接](https://github.com/Blossom0913) 等常见 Markdown 语法都能正常显示。也支持较长的段落排版，方便撰写技术笔记与心得总结。

## 插入图片

在 Markdown 中插入图片的方式如下：

```markdown
![图片描述](/images/blog/example.png)
```

建议将博客配图统一放在 `images/blog/` 目录下，并使用相对路径引用，例如 `/images/blog/2026-07-27-example.png`，方便管理。

## 插入数学公式

本站已经集成 MathJax，支持行内公式与独立公式块的渲染。

行内公式示例：变量 $x$ 与 $y$ 满足关系 $y = f(x)$。

独立公式示例，例如经典的强化学习贝尔曼方程：

$$
V^{\pi}(s) = \mathbb{E}_{\pi}\left[ \sum_{t=0}^{\infty} \gamma^{t} r_{t+1} \,\middle|\, s_0 = s \right]
$$

再比如 Softmax 函数：

$$
\text{softmax}(z_i) = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}}
$$

## 插入代码块

代码块支持语法高亮，例如一段 Python 代码：

```python
import torch
import torch.nn as nn

class MLP(nn.Module):
    def __init__(self, in_dim, hidden_dim, out_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, out_dim),
        )

    def forward(self, x):
        return self.net(x)

model = MLP(in_dim=10, hidden_dim=64, out_dim=2)
print(model)
```

也支持其他语言，比如 C++：

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> nums = {1, 2, 3, 4, 5};
    int sum = 0;
    for (int n : nums) {
        sum += n;
    }
    std::cout << "Sum: " << sum << std::endl;
    return 0;
}
```

以及 Shell 命令：

```bash
cd _posts
touch 2026-08-01-my-new-post.md
```

## 小结

以上就是本站博客系统支持的主要功能：中文排版、图片、数学公式与代码高亮。希望这个板块能帮助我更好地记录学习与科研中的点滴。欢迎持续关注！
