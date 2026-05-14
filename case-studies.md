---
layout: page
title: Case Studies
permalink: /case-studies/
description: Selected case studies in medical imaging AI, spatial AI, computer vision, signal processing, and AI R&D leadership.
---

# Case Studies

Selected work across medical imaging AI, computer vision, spatial AI, signal processing, and research-to-product execution.

Some details are generalized because of client confidentiality, NDA-sensitive research, or patent sensitivity.

{% assign sorted_studies = site.case_studies | sort: "ind" %}

{% if sorted_studies.size > 0 %}
  <div class="case-study-grid">
    {% for study in sorted_studies %}
      <article class="case-study-card">
        <p class="case-domain">{{ study.domain }}</p>
        <h2><a href="{{ study.url | relative_url }}">{{ study.title }}</a></h2>
        <p class="case-summary">{{ study.summary }}</p>

        {% if study.metrics %}
          <ul class="case-metrics">
            {% for metric in study.metrics %}
              <li><strong>{{ metric.value }}</strong> {{ metric.label }}</li>
            {% endfor %}
          </ul>
        {% endif %}

        {% if study.stack %}
          <p class="case-stack">
            {% for item in study.stack %}
              <span class="stack-chip">{{ item }}</span>{% unless forloop.last %} {% endunless %}
            {% endfor %}
          </p>
        {% endif %}

        <p><a href="{{ study.url | relative_url }}">Read case study &rarr;</a></p>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p>No case studies available yet.</p>
{% endif %}

## Looking for help with a difficult technical problem?

If your team is dealing with imaging, spatial AI, computer vision, feasibility risk, or technical diligence, the usual first step is a short technical assessment.

[Request a technical assessment]({{ '/contact/' | relative_url }}){: .cta-button .cta-primary }
