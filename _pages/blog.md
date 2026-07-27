---
layout: default
permalink: /blog/
title: ""
excerpt: ""
author_profile: true
---

# 📝 Blog

<div class="entries-list">
  {% for post in site.posts %}
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
        <h2 class="archive__item-title" itemprop="headline">
          <a href="{{ post.url | relative_url }}" rel="permalink">{{ post.title }}</a>
        </h2>
        <p class="page__meta">
          <i class="fas fa-fw fa-calendar-alt" aria-hidden="true"></i>
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y年%m月%d日" }}</time>
          {% if post.categories and post.categories.size > 0 %}
            <span class="page__meta-sep">·</span>
            <i class="fas fa-fw fa-folder-open" aria-hidden="true"></i>
            {% for cat in post.categories %}{{ cat }}{% unless forloop.last %}, {% endunless %}{% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="archive__item-excerpt">{{ post.excerpt | strip_html | truncatewords: 60 }}</p>
        {% endif %}
      </article>
    </div>
  {% else %}
    <p>暂时还没有博客文章，敬请期待～</p>
  {% endfor %}
</div>
