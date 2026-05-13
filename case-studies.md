---
layout: page
title: Case Studies
permalink: /case-studies/
---

# Case Studies

Placeholder introduction to case studies and research work.

{% assign sorted_studies = site.case_studies | sort: "ind" %}

{% if sorted_studies.size > 0 %}
  {% for study in sorted_studies %}
    ## [{{ study.title }}]({{ site.url }}{{ study.url }})

    **Domain:** {{ study.domain }}

    {{ study.summary }}

    {% if study.metrics %}
    **Key Metrics:**
    {% for metric in study.metrics %}
    - {{ metric.value }} — {{ metric.label }}
    {% endfor %}
    {% endif %}

    {% if study.stack %}
    **Stack:** {{ study.stack | join: ", " }}
    {% endif %}

    [Read more →]({{ site.url }}{{ study.url }})

    ---

  {% endfor %}
{% else %}
  No case studies available yet.
{% endif %}
