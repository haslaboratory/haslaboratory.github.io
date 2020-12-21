---
title: High-performance Architecture and System Laboratory
layout: page
permalink: /
---

<section class="section">
    <div class="container">
        <aside class="menu">
            <p class="menu-label">最新文章</p>
            <ul class="menu-list">
                {% for post in site.posts %}
                <li>
                    <a href="{{ site.baseurl }}{{ post.url }}">
                        {{ post.title }}
                        {% for tag in post.tags %}
                        <span class="tag is-small is-link is-light">{{ tag }}</span>
                        {% endfor %}
                    </a>
                </li>
                {% endfor %}
            </ul>
        </aside>
    </div>
</section>
