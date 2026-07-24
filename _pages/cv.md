---
layout: default
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume/
---

# 陈旭天

chenxutian@buaa.edu.cn | [github.com/Blossom0913](https://github.com/Blossom0913) | [blossom0913.github.io](https://blossom0913.github.io/) | 17369720372

---

## 教育经历

[**北京航空航天大学**](https://iai.buaa.edu.cn) | 2025/9 -- 至今
人工智能硕士 | 北京，中国
- 主要课程：强化学习、深度学习、无人集群智能、算法设计与分析等

[**暨南大学**](https://sisse.jnu.edu.cn) | 2021/9 -- 2025/7
人工智能学士 | 珠海，中国
- 主要课程：自然语言处理、机器学习、人工智能原理、敏捷软件开发等

---

## 实习经历

[**美团 无人车业务部**](https://www.meituan.com/) | 2026/3 -- 至今
实习生 - 决策规划算法 | 北京，中国

- 优化自动驾驶路口交互决策算法，深入理解路口出口道判断逻辑，改进相关规则函数，引入自车转向完成度指标，设计基于带饱和的线性插值的动态边界计算方案，并通过仿真回归验证算法一致性；同期完成路口参考线生成模块的性能分析与代码优化。
- 修复与建设路口数据闭环 Pipeline，排查并修复路口人驾数据 daily 采集 Pipeline（Jenkins Workflow），定位上游数据缺失、Proto 编译冲突等故障；补齐历史断档人驾路口数据；参照已有框架搭建路口自驾数据 daily 采集 Pipeline，制作路口左转、右转自驾全量数据集，完成数据清洗与过滤逻辑设计。
- 调研与验证端到端模型训练，完成路口 Decoder 模型的特征导出、数据重刷及模型训练流程打通，完成对上游 encoder 的模型适配，验证训练脚本可用性，为后续路口选出口道模型迭代提供数据与流程基础。

---

## 科研经历

[**广东省智能科学与技术研究院**](https://www.gdiist.cn/research/team_detail/84) | 2025/2 -- 2025/9
实习生 | 珠海，中国
- 作为前三作者，研究成果已申请2项软件著作权：[**物流仓库多智能体机器人路径规划系统**](https://gitee.com/chenxutian/imagebed/blob/master/Software%20Copyrights/%E7%89%A9%E6%B5%81%E4%BB%93%E5%BA%93%E5%A4%9A%E6%99%BA%E8%83%BD%E4%BD%93%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%AF%E5%BE%84%E8%A7%84%E5%88%92%E7%B3%BB%E7%BB%9F%20%E8%BD%AF%E8%91%97%E8%AF%81%E4%B9%A6.pdf) 与 [**基于积分任务管理与账单追踪的轻量化工具平台**](https://gitee.com/chenxutian/imagebed/blob/master/Software%20Copyrights/%E5%9F%BA%E4%BA%8E%E7%A7%AF%E5%88%86%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86%E4%B8%8E%E8%B4%A6%E5%8D%95%E8%BF%BD%E8%B8%AA%E7%9A%84%E8%BD%BB%E9%87%8F%E5%8C%96%E5%B7%A5%E5%85%B7%E5%B9%B3%E5%8F%B0%20%E8%BD%AF%E8%91%97%E8%AF%81%E4%B9%A6.pdf)。
- 设计大鼠社会与攻击性行为分类的实验框架与基准数据集，使用 [**DeepLabCut**](https://github.com/DeepLabCut/DeepLabCut) 标注身体关键点协同，并以 [**LightGBM**](https://github.com/microsoft/LightGBM) 对比 LSTM、CNN、GMM 等模型的性能；项目代码：[**DLC_train**](https://blossom0913.github.io/Mouse-Behavior-Classifier-Train/)；研究成果以共同第一作者身份发表于 *Scientific Data*：[**A Benchmark Dataset for Rat Social and Aggressive Behavior Classification**](https://doi.org/10.1038/s41597-026-07888-8)。
- 使用AutoDock Tools处理受体蛋白靶点，完成约 430 万个小分子的分子对接（Docking）实验，为药物研发的大规模计算任务，通过结合能和状态筛选药物分子；设计并行框架并在 4 块 RTX 2080Ti 上部署，源代码：[**Dock**](https://github.com/Blossom0913/Dock)。

**多智能体路径规划** | 2024/3 -- 2024/7
研究助理 | 珠海，中国
- 复现 CL-CBS 多智能体路径规划算法，完成环境搭建、代码调试、结果可视化与实验链路打通，形成可复现基线。论文：[**CL-MAPF：具有运动学与时空约束的类车机器人多智能体路径规划**](https://arxiv.org/abs/2011.00441)。
- 搭建批量实验与结果分析脚本，实现实例自动求解、视频生成、超时跳过、CSV 汇总及性能曲线绘制，用于 CL-CBS 与 Standard CBS 对比评估。
- 基于 profiling 定位算法瓶颈，分析 Spatiotemporal Hybrid-State A\* 的关键优化机制，包括三重启发、解析终端扩展、时空状态建模与代价惩罚设计。

---

## 竞赛经历

**ASC2022** | 2021/11 -- 2022/6
团队成员 | 珠海，中国
- 项目目标：在有限算力（8× Tesla V100 16GB）和功耗约束下，完成 47 亿参数"源1.0"大语言模型的预训练，并实现 55% 的训练加速（从 45h 降至 28h）。
- 内存优化：主导应用 **`ZeRO-Offload 与 ZeRO Stage 1`** 技术，成功将 75.2GB 的模型状态（参数、梯度、优化器状态）卸载至CPU内存，在仅 8×16GB 显存上跑通 47 亿参数模型，解决了 CUDA OOM 瓶颈。
- 训练加速：部署 **`Megatron-DeepSpeed`** 框架，设计并实施 4路张量并行 + 2路流水线并行 的策略，相较单纯8路张量并行，将训练吞吐从 4.08 samples/s 提升至 4.66 samples/s。引入混合精度训练 **`(AMP)`**，在 NVIDIA Tensor Core 上利用 FP16 算术加速计算，并解决精度溢出问题。用 Intel MKL 数学库编译 PyTorch，并将其与针对CPU卸载优化的 DeepSpeed CPU Adam 优化器结合，显著加速了 CPU 端的优化器计算步骤。

---

## 获奖经历

- 2022 年世界大学生超算竞赛 国二等奖（rank 26）
- 2023 年广东省大学生数学竞赛 省二等奖
- 2024 年广东省大学生数学竞赛 省一等奖

---

## 技能

**编程语言：** Python, C/C++, Java

**技术技能：** PyTorch, TensorFlow, DeepSpeed, Megatron, CUDA, Git, Jenkins, SSH, SQL

**核心能力：** 算法性能分析与优化，数据挖掘与清洗闭环，模型性能评测
