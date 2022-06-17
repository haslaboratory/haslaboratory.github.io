---
title: Members
layout: page
permalink: /members/
---

{% assign advisors = site.data.members | where:'degree', "Advisor" | sort:'join' %}
{% assign doctors = site.data.members | where:'degree', "Doctor" | sort:'join' %}
{% assign masters = site.data.members | where:'degree', "Master" | sort:'join' %}
{% assign undergraduates = site.data.members | where:'degree', "Undergraduate" | sort:'join' %}

{% include bulma_members.html name="Advisor" members=advisors %}
{% include bulma_members.html name="Ph.D. Students" members=doctors %}
{% include bulma_members.html name="Master Students" members=masters %}
{% include bulma_members.html name="Undergraduate Students" members=undergraduates %}

## Past Students

{% for member in site.data.members %}
{% if member.leave != Nil %}
{% if member.degree != "Undergraduate" %}
<article class="message is-{% cycle 'dark', 'primary', 'link', 'info', 'success', 'warning', 'danger'%}">
    <div class="message-body">
        <strong>{{ member.name }}</strong> <em>{{ member.degree}}</em> <em>{{ member.leave }} {{ member.description }}</em>
  </div>
</article>
{% endif %}
{% endif %}
{% endfor %}