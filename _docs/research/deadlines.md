---
layout: doc
title: 截稿日期
permalink: /deadlines.html
redirect_from: /docs/research/deadlines.html
order: 10
---

科学技术不是第一生产力，deadline才是。

{% capture today %}{{'now' | date: '%Y-%m-%d'}}{% endcapture %}
{% assign deadlines = site.data.deadlines | sort: "deadline" %}

### 生产力列表

<div class="menu">
    <ul class="menu-list">
        {% for this in deadlines %}
        {% capture deadline %}{{this.deadline | date: '%Y-%m-%d'}}{% endcapture %}
        {% if deadline >= today %}
        <li>
            <a href="{{ this.url }}">
                <strong>{{ this.deadline }}</strong> {{ this.conference }} {{ this.description }}
            </a>
        </li>
        {% endif %}
        {% endfor %}
    </ul>
</div>