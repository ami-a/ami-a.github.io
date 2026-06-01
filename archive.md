---
layout: page
title: Project Archive
permalink: /archive/
---

# Project Archive

Archived research and student projects from 2007-2020. These represent exploratory work and proof-of-concept implementations, not active client deliverables.

**Note:** These projects are preserved for reference only. Technologies and approaches may be dated. For current work, see [Case Studies]({{ '/case-studies/' | relative_url }}).

---

{% assign sorted_projects = site.projects | sort: "ind" %}

{% if sorted_projects.size > 0 %}
  <div class="archive-container">
    {% for project in sorted_projects %}
      <article class="project-card">
        <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
        <p class="project-year"><strong>Year:</strong> {{ project.year }}</p>
        <p class="project-summary">{{ project.sdisc }}</p>
        {% if project.c_lang %}
        <p class="project-languages"><strong>Languages:</strong> {{ project.c_lang | join: ", " }}</p>
        {% endif %}
        <p><a href="{{ project.url | relative_url }}">View details &rarr;</a></p>
      </article>
    {% endfor %}
  </div>
{% else %}
  No archived projects available.
{% endif %}
