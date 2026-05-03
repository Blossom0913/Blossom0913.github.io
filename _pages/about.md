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

Hello! I'm **Xutian Chen**, a passionate researcher and engineer in the field of Artificial Intelligence and Machine Learning. I am currently pursuing my Master's degree in Artificial Intelligence at [Beihang University](https://www.buaa.edu.cn/), having graduated with a Bachelor's degree in Artificial Intelligence from [Jinan University](https://www.jnu.edu.cn/). 

My research interests lie in the intersection of **Machine Learning**, **Deep Learning**, **Computer Vision**, and **Multi-Agent Path Planning**. I have extensive experience in algorithm development and engineering practice with proficiency in multiple programming languages and cutting-edge technologies.

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



# 📖 Education
- **2025.09 - Present**: Master of Engineering in **Artificial Intelligence**, [Beihang University](https://www.buaa.edu.cn/), Beijing, China
  - **Major Courses**: Machine Learning, Deep Learning, Computer Vision and 15 others
  
- **2021.09 - 2025.07**: Bachelor of Engineering in **Artificial Intelligence**, [Jinan University](https://www.jnu.edu.cn/), Zhuhai, China
  - **A+ Courses**: Computer Network, Data Structure, Advanced Programming Language and 15 others

# 💼 Internship

## Decision & Planning Intern |Meituan Autonomous Vehicle Department
*2026.03 - present | Beijing, China*

- Improved rule-based planning and refined trajectory feasibility checks for intersection exit decisions
- Built data pipelines and Jenkins workflows to establish a daily quantitative expert data loop for model and rule evaluation
- Collaborated on sim-to-real alignment and debugging, producing reusable evaluation and traceability processes

# 🚀 Competition Experience

## ASC2022 Student Supercomputer Challenge
*Team Member | 2021.11 - 2022.06 | Zhuhai, China*

- **Project goal**: Under limited compute (8× Tesla V100 16GB) and power constraints, pre-train a 4.7B-parameter Yuan-1.0 language model and achieve a **55% training speedup** (from 45h to 28h).
- **Memory optimization**: Led application of **ZeRO-Offload** and **ZeRO Stage 1** to offload model states (parameters, gradients, optimizer states) to CPU memory, enabling training of a 4.7B model on 8×16GB GPUs and resolving CUDA OOM issues.
- **Parallel & acceleration strategy**: Deployed **Megatron-DeepSpeed** and designed a hybrid parallel scheme with **4-way tensor parallelism + 2-way pipeline parallelism**, improving throughput from **4.08 → 4.66 samples/s** compared with pure 8-way tensor parallelism.
- **Engineering optimizations**: Adopted mixed precision training (AMP), built PyTorch with Intel MKL, and used DeepSpeed's CPU Adam to optimize CPU offload computation and communication.
- **Convergence tuning**: Tuned learning rate scaling and warmup strategies alongside data pipelines and micro-batching, achieving a final training loss of **5.826** in reproduction runs.
- **Deliverables**: Responsible for parallel strategy evaluation, memory/performance analysis, and engineering implementation; project notes and partial experiment logs at: [ASC Student Supercomputer Challenge Proposal](https://github.com/Blossom0913/ASC2022)

# 🔬 Research Experience

## Research on AI4S and AI+Chem | Guangdong Institute of Intelligent Science and Technology
*Research Intern | 2025.02 - 2025.09 | Zhuhai, China*

- Large-Scale Computational Framework: Engineered a parallel computing framework deployed on a 4-GPU (RTX 2080Ti) cluster, successfully processing 43.8 million molecular docking tasks to accelerate drug discovery pipelines.
- Algorithm Research & Benchmarking: Designed a mouse social behavior classification framework using DeepLabCut for keypoint labeling; conducted comparative experiments on LightGBM, LSTM, CNN, and GMM models to evaluate performance.
- System Development: Contributed to the development of a multi-robot path planning system and a lightweight task management platform, resulting in 2 software copyright registrations (Top-3 Author).
- Technical Stack: Python, Deep Learning, Parallel Computing, CUDA, Robotics Simulation.
- Source code available at: [Dock Repository](https://github.com/Blossom0913)

## Multi-agent Path Planning | Jinan University
*Research Assistant | 2024.03 - 2024.07 | Zhuhai, China*

- **Performance Analysis**: Designed controlled experiments scaling agents from 10 to 50, revealing that runtime increased 135x (2.3s → 312s) and success rate dropped to 67%. Profiling identified conflict detection (70% of runtime) and deep copy operations as primary bottlenecks.

- **Algorithm Optimization (C++/MAPF)**: Reduced conflict detection complexity from O(n²) to O(n) by implementing incremental checks—comparing only the current agent against others instead of full scans. Reduced memory overhead by replacing deep copies with Copy-on-Write, enabling multiple agents to share conflict tree nodes until a write is required.

- **Systems Thinking**: Applied knowledge of stack/heap allocation and shallow/deep copy semantics to guide optimization decisions. Derived complexity reduction (N² → N) and presented findings with clear problem-solution-impact narrative—demonstrating interpretability in engineering work.

- **Platform Integration**: Built messaging architecture between AGV fleet and local server for state synchronization under real-world constraints. Reproduced CL-CBS baseline (paper: [CL-MAPF](https://arxiv.org/abs/2011.00441)), fixed implementation bugs, and delivered faster planning than Hybrid A* baseline within a 3-month cycle.

# 🎖 Honors and Awards
- **2022.06**: 🥈 **National Second Prize** in ASC2022 (Student Supercomputer Challenge), ranked **22nd** among all participants
- **2022.07**: Attended the ASC final as visitors at USTC
- **2024**: 🥇 **Provincial First Prize** (preliminary) in Chinese Mathematics Competition (CMC), Guangdong Division
- **2023**: 🥈 **Provincial Second Prize** (preliminary) in Chinese Mathematics Competition (CMC), Guangdong Division




# 🌐 Open-Source Contributions


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



# 💻 Technical Skills

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

# 📝 Publications 

*Currently preparing manuscripts for submission. Feel free to reach out for collaboration opportunities!*


