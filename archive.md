---
layout: page
title: Project Archive
permalink: /archive/
---

# Project Archive

Archived research and student projects from 2007–2020. These represent exploratory work and proof-of-concept implementations, not active client deliverables.

**Note:** These projects are preserved for reference only. Technologies and approaches may be dated. For current work, see [Case Studies](/case-studies/).

---

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
