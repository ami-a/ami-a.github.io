---
layout: page
title: Project Archive
permalink: /archive/
---

# Project Archive

Placeholder introduction to archived projects and research work.

{% assign sorted_projects = site.projects | sort: "ind" %}

{% if sorted_projects.size > 0 %}
  {% for project in sorted_projects %}
    ## [{{ project.title }}]({{ site.url }}{{ project.url }})

    **Year:** {{ project.year }}

    {{ project.sdisc }}

    {% if project.c_lang %}
    **Languages:** {{ project.c_lang | join: ", " }}
    {% endif %}

    [View details →]({{ site.url }}{{ project.url }})

    ---

  {% endfor %}
{% else %}
  No archived projects available.
{% endif %}
