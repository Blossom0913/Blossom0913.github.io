(function () {
  var STORAGE_KEY = "site-language";
  var SUPPORTED = ["en", "zh"];

  var translations = {
    en: {
      navHome: "Homepage",
      navAbout: "About Me",
      navNews: "News",
      navEducation: "Education",
      navExperience: "Experience",
      navProjects: "Projects",
      navSkills: "Skills",
      navBlog: "Blog",
      navCV: "CV",
      authorBio: "Machine Learning",
      siteDescription: "I'm currently learning: Generative AI, Reinforcement Learning, Model Inference Acceleration"
    },
    zh: {
      navHome: "主页",
      navAbout: "关于我",
      navNews: "新闻",
      navEducation: "教育经历",
      navExperience: "经历",
      navProjects: "项目",
      navSkills: "技能",
      navBlog: "博客",
      navCV: "简历",
      authorBio: "机器学习",
      siteDescription: "我目前重点学习：生成式人工智能、强化学习、模型推理加速"
    }
  };

  function resolveLanguage() {
    var saved = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.indexOf(saved) !== -1) {
      return saved;
    }

    var browserLang = (navigator.language || "en").toLowerCase();
    return browserLang.indexOf("zh") === 0 ? "zh" : "en";
  }

  function applyLanguage(lang) {
    var effectiveLang = SUPPORTED.indexOf(lang) !== -1 ? lang : "en";
    var dict = translations[effectiveLang];

    document.documentElement.lang = effectiveLang === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-lang]").forEach(function (el) {
      el.hidden = el.getAttribute("data-lang") !== effectiveLang;
    });

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
      var selected = button.getAttribute("data-lang-switch") === effectiveLang;
      button.setAttribute("aria-pressed", selected ? "true" : "false");
      button.classList.toggle("is-active", selected);
    });

    window.localStorage.setItem(STORAGE_KEY, effectiveLang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = resolveLanguage();

    document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
      button.addEventListener("click", function () {
        applyLanguage(button.getAttribute("data-lang-switch"));
      });
    });

    applyLanguage(lang);
  });
})();
