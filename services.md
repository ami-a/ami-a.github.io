---
layout: page
title: Services
permalink: /services/
---

# Services

Focused engineering services for medical imaging, computer vision, spatial AI, and technical diligence.

{% assign sorted_services = site.data.services.services | sort: "title" %}

{% if sorted_services.size > 0 %}
  {% for service in sorted_services %}
    ## {{ service.title }}

    **For:** {{ service.audience }}

    {{ service.summary }}

    {% if service.best_for %}
    **Best for:**
    {% for item in service.best_for %}
    - {{ item }}
    {% endfor %}
    {% endif %}

    {% if service.typical_problems %}
    **Typical problems:**
    {% for item in service.typical_problems %}
    - {{ item }}
    {% endfor %}
    {% endif %}

    {% if service.typical_outcomes %}
    **Typical outcomes:**
    {% for item in service.typical_outcomes %}
    - {{ item }}
    {% endfor %}
    {% endif %}

    {% if service.how_engagements_start %}
    **How engagements start:** {{ service.how_engagements_start }}
    {% endif %}

    {% if service.not_fit %}
    **Not a fit:**
    {% for item in service.not_fit %}
    - {{ item }}
    {% endfor %}
    {% endif %}

    {% if service.example %}
    **Example:** {{ service.example }}
    {% endif %}

    [Contact for details →](/contact/)

    ---

  {% endfor %}
{% else %}
  No services listed yet.
{% endif %}
