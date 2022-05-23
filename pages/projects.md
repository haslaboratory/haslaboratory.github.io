---
title: 科研项目
layout: page
permalink: /projects.html
---


{% assign starts = site.data.projects | group_by: 'start' | sort: 'name' | reverse %}

{% for start in starts %}
<h2>{{ start.name }}</h2>

{% assign ends = start.items | group_by: 'end' | sort: 'name' | reverse %}

{% for end in ends %}

{% assign projects = end.items | sort: 'amount' |reverse %}

{% for project in projects %}

<div class="box">
  {% if project.type == '基金' %}
  <span class="tag is-danger">
    {{project.type}}
  </span>
  {% else %}
  <span class="tag is-warning">
    {{project.type}}
  </span>
  {% endif %}
  {% if project.role == '主持' %}
  <span class="tag is-primary">
    {{project.role}}
  </span>
  {% else %}
  <span class="tag is-link">
    {{project.role}}
  </span>
  {% endif %}
  {{project.grant}}，{{project.title}}，{{project.amount}}万，{{project.start}}-{{project.end}}。
</div>

{% endfor %}

{% endfor %}
{% endfor %}