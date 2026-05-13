---
layout: page
title: Services
permalink: /services/
---

# Services

Placeholder introduction to services offered.

{% assign sorted_services = site.data.services.services | sort: "title" %}

{% if sorted_services.size > 0 %}
  {% for service in sorted_services %}
    ## {{ service.title }}

    **For:** {{ service.audience }}

    {{ service.summary }}

    {% if service.outcomes %}
    **Outcomes:**
    {% for outcome in service.outcomes %}
    - {{ outcome }}
    {% endfor %}
    {% endif %}

    ---

  {% endfor %}
{% else %}
  No services listed yet.
{% endif %}
