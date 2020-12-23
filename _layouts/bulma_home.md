---
layout: bulma
---

{% include bulma_navbar.html %}

<section class="section">
    <div class="container">
        <h1 class="title">{{page.title}}</h1>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="content">
                    {{content}}
                </div>
            </div>
            <div class="column">
                <aside class="menu">
                    <p class="menu-label">最新文章</p>
                    <ul class="menu-list">
                        {% for post in site.posts limit: 10 %}
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
        </div>
    </div>
</section>

{% include bulma_footer.html %}