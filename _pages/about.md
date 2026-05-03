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

Hello! I'm **Xutian Chen**, a passionate researcher and engineer in the field of Artificial Intelligence and Machine Learning. I am currently pursuing my Master's degree in Electronic Information at [Beihang University](https://www.buaa.edu.cn/), having graduated with a Bachelor's degree in Artificial Intelligence from [Jinan University](https://www.jnu.edu.cn/). 

My research interests lie in the intersection of **Machine Learning**, **Deep Learning**, **Computer Vision**, and **Multi-Agent Path Planning**. I have extensive experience in algorithm development and engineering practice with proficiency in multiple programming languages and cutting-edge technologies.

📧 **Contact**: [chenxutian@buaa.edu.cn](mailto:chenxutian@buaa.edu.cn)  
🔗 **GitHub**: [github.com/Blossom0913](https://github.com/Blossom0913)  
🔗 **Gitee**: [gitee.com/chenxutian](https://gitee.com/chenxutian)


> Remember brick walls let us show our dedication. They are there to separate us from the people who don't really want to achieve their childhood dreams. 
>
>                               ——Randy Pausch's last lecture

# 🔥 News
- *2025.09*: &nbsp;🎉🎉 Started Master's program at Beihang University!
- *2025.09*: &nbsp;📢📢 Completed algorithm internship at Guangdong Institute of Intelligent Science and Technology.
- *2025.07*: &nbsp;🎓🎓 Graduated with Bachelor's degree in Artificial Intelligence from Jinan University.

# 📖 Education
- **2025.09 - Present**: Master of Engineering in **Electronic Information**, [Beihang University](https://www.buaa.edu.cn/), Beijing, China
  - **Major Courses**: Machine Learning, Deep Learning, Computer Vision and 15 others
  
- **2021.09 - 2025.07**: Bachelor of Engineering in **Artificial Intelligence**, [Jinan University](https://www.jnu.edu.cn/), Zhuhai, China
  - **A+ Courses**: Computer Network, Data Structure, Advanced Programming Language and 15 others

# 💼 Working Experience

## Decision & Planning Intern | 美团 无人车业务部
*2026.03 - 2026.10 | Beijing, China*

- Improved rule-based planning and refined trajectory feasibility checks for intersection exit decisions
- Built data pipelines and Jenkins workflows to establish a daily quantitative expert data loop for model and rule evaluation
- Collaborated on sim-to-real alignment and debugging, producing reusable evaluation and traceability processes

## Research Experience

### Research Intern | Guangdong Institute of Intelligent Science and Technology
*2025.02 - 2025.09 | Zhuhai, China*

- Applied for **2 software copyright certificates** as Top-3 co-author:
  - Logistics warehouse multi-intelligent robot path planning system
  - Lightweight tool platform based on point task management and billing tracking
- Designed experiment framework for mouse social behavior classification using **DeepLabCut** to label body coordination and **LightGBM** compared with LSTM, CNN, GMM model performance
- Completed **43.8 million small molecules docking experiment**, a large-scale computing task in drug development. Designed parallel framework and deployed on **4 RTX 2080Ti** GPUs
- Source code available at: [Dock Repository](https://github.com/Blossom0913)

### Multi-agent Path Planning
*2024.03 - 2024.07 | Research Assistant | Zhuhai, China*

- Software developer in research group, designed and implemented message interaction models for information communication between AGV platform and local server
- Reproduced the baseline of **CL-CBS**, a multi-agent path planning algorithm designed by APRIL Lab of Zhejiang University
- Modified and applied algorithm to simulation AGV platform: [CL-MAPF: Multi-Agent Path Finding for Car-Like Robots with Kinematic and Spatiotemporal Constraints](https://github.com/Blossom0913)
- Investigated and analyzed feasibility of CL-CBS in real business scenarios, achieving **5x speed improvement** over original algorithms like Hybrid A* in a 3-month period

# 🎖 Honors and Awards
- **2022.06**: 🥈 **National Second Prize** in ASC2022 (Student Supercomputer Challenge), ranked **22nd** among all participants
- **2022.07**: Attended the ASC final as visitors at USTC
- **2024**: 🥇 **Provincial First Prize** (preliminary) in Chinese Mathematics Competition (CMC), Guangdong Division
- **2023**: 🥈 **Provincial Second Prize** (preliminary) in Chinese Mathematics Competition (CMC), Guangdong Division

# 🚀 Projects

# 竞赛经历

## ASC2022 Student Supercomputer Challenge
*2021.11 - 2022.06 | Team Member | Zhuhai, China*

- **Project goal**: Under limited compute (8× Tesla V100 16GB) and power constraints, pre-train a 4.7B-parameter Yuan-1.0 language model and achieve a **55% training speedup** (from 45h to 28h).
- **Memory optimization**: Led application of **ZeRO-Offload** and **ZeRO Stage 1** to offload model states (parameters, gradients, optimizer states) to CPU memory, enabling training of a 4.7B model on 8×16GB GPUs and resolving CUDA OOM issues.
- **Parallel & acceleration strategy**: Deployed **Megatron-DeepSpeed** and designed a hybrid parallel scheme with **4-way tensor parallelism + 2-way pipeline parallelism**, improving throughput from **4.08 → 4.66 samples/s** compared with pure 8-way tensor parallelism.
- **Engineering optimizations**: Adopted mixed precision training (AMP), built PyTorch with Intel MKL, and used DeepSpeed's CPU Adam to optimize CPU offload computation and communication.
- **Convergence tuning**: Tuned learning rate scaling and warmup strategies alongside data pipelines and micro-batching, achieving a final training loss of **5.826** in reproduction runs.
- **Deliverables**: Responsible for parallel strategy evaluation, memory/performance analysis, and engineering implementation; project notes and partial experiment logs at: [ASC Student Supercomputer Challenge Proposal](https://github.com/Blossom0913)

## Open-Source Contributions

### PlayTask - Time Management APP
*Personal Project*

- 📱 Designed and built a time management APP from scratch
- 🛠️ Learned **Version Control Systems (VCS)**, **Event Response** and basic debugging tools in Android Studio
- 🎨 Designed **UI/UX** with ViewPage2, TabLayout and Fragment independently
- 📝 Source code: [Blossom0913/PlayTask](https://github.com/Blossom0913/PlayTask)

## Tiny-llm
*2026.04 -- 2026.06*

- Focused on Attention implementation and lightweight LLM training/inference pipelines
- Tech stack: vLLM, SGLang, Tool Calling
- Reference: [https://github.com/skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)

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


