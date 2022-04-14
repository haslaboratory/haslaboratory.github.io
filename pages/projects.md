---
title: Projects
layout: page
permalink: /projects.html
---

{% assign projects = site.data.projects | sort: 'end' | sort: 'start' | reverse %}
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
  {{project.grant}}，{{project.title}}，{{project.start}}-{{project.end}}。
</div>

{% endfor %}