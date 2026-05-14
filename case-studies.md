---
layout: page
title: Case Studies
permalink: /case-studies/
---

# Case Studies

Selected applied research and engineering work for medical imaging, spatial AI, computer vision, and signal processing.

{% assign sorted_studies = site.case_studies | sort: "ind" %}

{% if sorted_studies.size > 0 %}
  <div class="case-study-grid">
    {% for study in sorted_studies %}
      <article class="case-study-card">
        <p class="case-domain">{{ study.domain }}</p>
        <h2><a href="{{ site.url }}{{ study.url }}">{{ study.title }}</a></h2>
        <p class="case-summary">{{ study.summary }}</p>

        {% if study.metrics %}
          <ul class="case-metrics">
            {% for metric in study.metrics %}
              <li><strong>{{ metric.value }}</strong> {{ metric.label }}</li>
            {% endfor %}
          </ul>
        {% endif %}

        {% if study.stack %}
          <p class="case-stack">Stack: {{ study.stack | join: ", " }}</p>
        {% endif %}

        <p><a href="{{ site.url }}{{ study.url }}">Read full case study &rarr;</a></p>
      </article>
    {% endfor %}
  </div>

  <section class="case-cta">
    <p>See how these technical paths align with your project and contact Amitai for a confidentiality review.</p>
    <a href="/contact/" class="cta-button cta-primary">Contact for details</a>
    <p><a href="/services/">Review service offerings</a></p>
  </section>

  <p class="case-note">Some details are presented at a high level for confidentiality. Full technical scope is available on request.</p>
{% else %}
  <p>No case studies available yet.</p>
{% endif %}
