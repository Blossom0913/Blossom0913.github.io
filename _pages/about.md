---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👋 About Me

Hello! I'm **Xutian Chen**, a passionate student and researcher in the field of Artificial Intelligence and Machine Learning. I am currently pursuing my Master's degree in Artificial Intelligence at [Beihang University](https://www.buaa.edu.cn/), having graduated with a Bachelor's degree in Artificial Intelligence from [Jinan University](https://www.jnu.edu.cn/). 

My research interests lie in the intersection of **AI for Bio&Chem**, **Diffusion Models**, **LLM Inference Acceleration**, and **Autonomous Vehicle Path Planning**. I am always open to appropriate opportunities in research and tech industries, and I am excited about how GenAI can be applied to revolutionize specific problems in any domain.

🎓 **My Advisors**: During my undergraduate studies at Jinan University, I was fortunate to be advised by [Lecturer Deping Li](https://sisse.jnu.edu.cn/2021/0528/c12456a625793/page.htm), whose research focuses on intelligent visual perception, including 3D object pose estimation, point cloud processing, visual foundation models, SLAM, and robotic visual perception. At Beihang University, I am fortunate to be advised by [Prof. Huijie Zhao](https://iai.buaa.edu.cn/info/1013/1032.htm), whose research covers multi/hyperspectral intelligent perception, multi-modal perception and data fusion, and 3D visual perception and data processing, and [Associate Prof. Na Li](https://iai.buaa.edu.cn/info/1013/1035.htm) of the School of Artificial Intelligence.

📧 **Contact**: [chenxutian@buaa.edu.cn](mailto:chenxutian@buaa.edu.cn)  
🔗 **GitHub**: [github.com/Blossom0913](https://github.com/Blossom0913)  
🔗 **Gitee**: [gitee.com/chenxutian](https://gitee.com/chenxutian)


<blockquote style="border-left: 4px solid #ccc; padding-left: 15px; font-style: italic; color: #555;">
    <p>
        Remember brick walls let us show our dedication. They are there to separate us from the people who don't really want to achieve their childhood dreams.
    </p>
    <footer style="font-size: 0.85em; color: #888; text-align: right; margin-top: 10px;">
        &mdash; Randy Pausch's Last Lecture
    </footer>
</blockquote>



# 📰 News
- **2026.07**: Our paper "A Benchmark Dataset for Rat Social and Aggressive Behavior Classification" was published in *Scientific Data*.
- **2026.03**: Started my internship as a Decision & Planning Intern at Meituan Autonomous Vehicle Department, Beijing.
- **2025.09**: Started my Master's degree in Artificial Intelligence at Beihang University, Beijing.
- **2025.07**: Graduated from Jinan University with a Bachelor's degree in Artificial Intelligence.

# 📖 Education
- **2025.09 - Present**: Master of Engineering in **Artificial Intelligence**, [Beihang University](https://www.buaa.edu.cn/), Beijing, China
  - **Major Courses**: Reinforcement Learning, Deep Learning, Multi-Robot Swarm Intelligence, Algorithm Design and Analysis
  
- **2021.09 - 2025.07**: Bachelor of Engineering in **Artificial Intelligence**, [Jinan University](https://www.jnu.edu.cn/), Zhuhai, China
  - **Major Courses**: Natural Language Processing, Machine Learning, Principles of Artificial Intelligence, Agile Software Development

# 💼 Experience

## Internship

### Decision & Planning Intern | Meituan Autonomous Vehicle Department
*2026.03 - present | Beijing, China*

- **Intersection data closed loop:** Maintained and repaired the daily human-driving data pipeline, systematically resolving upstream data gaps, path inconsistencies, Protobuf migration, and dataset-loading issues; backfilled historical gaps and designed an automated collection workflow covering driving modes, turn types, RA-result fusion, filtering, and distribution statistics.
- **Large-scale dataset construction:** Built an autonomous right-turn intersection dataset spanning 2025.06–2026.05 through SQL extraction, RA mining, quality filtering, and timestamp alignment; distilled **2.789M cases / 13,501 hours** of raw data into **1.081M cases / 3,446 hours** ready for training, alongside a human-driving dataset.
- **Model training and simulation evaluation:** Delivered the end-to-end Query Decoder workflow—data reprocessing, feature export, Backbone/Head training, ONNX export, and simulation regression—while adapting to Shared Encoder 6.3; analyzed representative cases for trajectory avoidance, lane selection, and curvature, and improved Mviz visualization for intersection models.

## Research Experience

### Research on AI4S and AI+Chem | Guangdong Institute of Intelligent Science and Technology
*Research Intern | 2025.02 - 2025.09 | Zhuhai, China*

- Large-Scale Computational Framework: Engineered a parallel computing framework deployed on a 4-GPU (RTX 2080Ti) cluster, successfully processing 43.8 million molecular docking tasks to accelerate drug discovery pipelines. Source code: [Dock Repository](https://github.com/Blossom0913/Dock).
- Algorithm Research & Benchmarking: Designed an experimental framework and benchmark dataset for rat social and aggressive behavior classification, using DeepLabCut for keypoint labeling; conducted comparative experiments on LightGBM, LSTM, CNN, and GMM models to evaluate performance. Project code: [Mouse-Behavior-Classifier-Train](https://blossom0913.github.io/Mouse-Behavior-Classifier-Train/). This work was published as **co-first author** in *Scientific Data*: ["A Benchmark Dataset for Rat Social and Aggressive Behavior Classification"](https://doi.org/10.1038/s41597-026-07888-8).
- System Development: Contributed to the development of a multi-robot path planning system and a lightweight task management platform, resulting in 2 software copyright registrations (Top-3 Author).

### Multi-agent Path Planning | Jinan University
*Research Assistant | 2024.03 - 2024.07 | Zhuhai, China*

- **Performance Analysis**: Designed controlled experiments scaling agents from 10 to 50, revealing that runtime increased 135x (2.3s → 312s) and success rate dropped to 67%. Profiling identified conflict detection (70% of runtime) and deep copy operations as primary bottlenecks.

- **Algorithm Optimization (C++/MAPF)**: Reduced conflict detection complexity from O(n²) to O(n) by implementing incremental checks—comparing only the current agent against others instead of full scans. Reduced memory overhead by replacing deep copies with Copy-on-Write, enabling multiple agents to share conflict tree nodes until a write is required.

- **Systems Thinking**: Applied knowledge of stack/heap allocation and shallow/deep copy semantics to guide optimization decisions. Derived complexity reduction (N² → N) and presented findings with clear problem-solution-impact narrative—demonstrating interpretability in engineering work.

- **Platform Integration**: Built messaging architecture between AGV fleet and local server for state synchronization under real-world constraints. Reproduced CL-CBS baseline (paper: [CL-MAPF](https://arxiv.org/abs/2011.00441)), fixed implementation bugs, and delivered faster planning than Hybrid A* baseline within a 3-month cycle.

## Competition Experience

### ASC2022 Student Supercomputer Challenge
*Team Member | 2021.11 - 2022.06 | Zhuhai, China*

- **Project goal**: Under limited compute (8× Tesla V100 16GB) and power constraints, pre-train a 4.7B-parameter Yuan-1.0 language model and achieve a **55% training speedup** (from 45h to 28h).
- **Memory optimization**: Led application of **ZeRO-Offload** and **ZeRO Stage 1** to offload model states (parameters, gradients, optimizer states) to CPU memory, enabling training of a 4.7B model on 8×16GB GPUs and resolving CUDA OOM issues.
- **Parallel & acceleration strategy**: Deployed **Megatron-DeepSpeed** and designed a hybrid parallel scheme with **4-way tensor parallelism + 2-way pipeline parallelism**, improving throughput from **4.08 → 4.66 samples/s** compared with pure 8-way tensor parallelism.
- **Engineering optimizations**: Adopted mixed precision training (AMP), built PyTorch with Intel MKL, and used DeepSpeed's CPU Adam to optimize CPU offload computation and communication.
- **Convergence tuning**: Tuned learning rate scaling and warmup strategies alongside data pipelines and micro-batching, achieving a final training loss of **5.826** in reproduction runs.
- **Deliverables**: Responsible for parallel strategy evaluation, memory/performance analysis, and engineering implementation; project notes and partial experiment logs at: [ASC Student Supercomputer Challenge Proposal](https://github.com/Blossom0913/ASC2022)

# 📝 Publications 

- **Xutian Chen**\*, Guangyu Li\*, Zihan Zhang\*, Mingkun Xu, Zuoren Wang, Qianqian Shi. "[A Benchmark Dataset for Rat Social and Aggressive Behavior Classification](https://doi.org/10.1038/s41597-026-07888-8)." *Scientific Data*, 2026. (\*Co-first authors)

*More manuscripts are in preparation. Feel free to reach out for collaboration opportunities!*

# 🎖 Honors and Awards
- **2022.06**: 🥈 **National Second Prize** in ASC2022 (Student Supercomputer Challenge), ranked **22nd** among all participants
- **2022.07**: Attended the ASC final as visitors at USTC
- **2024**: 🥇 **Provincial First Prize** (preliminary) in Chinese Mathematics Competition (CMC), Guangdong Division
- **2023**: 🥈 **Provincial Second Prize** (preliminary) in Chinese Mathematics Competition (CMC), Guangdong Division




# 🚀 Projects


## Tiny-llm
*2026.04 -- present*

- Focused on Attention implementation and lightweight LLM training/inference pipelines
- Tech stack: vLLM, SGLang, Tool Calling
- Reference: [https://github.com/skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)

## PlayTask - Time Management APP
*2023.09 -- 2023.12 | Personal Project*

- 📱 Designed and built a time management APP from scratch
- 🛠️ Learned **Version Control Systems (VCS)**, **Event Response** and basic debugging tools in Android Studio
- 🎨 Designed **UI/UX** with ViewPage2, TabLayout and Fragment independently
- 📝 Source code: [Blossom0913/PlayTask](https://github.com/Blossom0913/PlayTask)



# 💻 Skills

## Programming Languages
- **Proficient**: Python, C/C++, Java
- **Experienced**: Rust, Kotlin

## Technical Skills
- **Development Tools**: Git, SSH, Android Studio
- **High Performance Computing**: CUDA, MPI, OpenMP
- **Distributed Training & Optimization**: DeepSpeed, Megatron, ZeRO, ZeRO-Offload
- **Precision & Acceleration**: Mixed Precision (AMP), Intel MKL optimizations
- **Machine Learning**: TensorFlow, PyTorch, Fine-Tuning
- **Systems**: Linux, Shell
- **Other**: Algorithm Design, Multi-Agent Systems, Computer Vision, Model Inference & Deployment


