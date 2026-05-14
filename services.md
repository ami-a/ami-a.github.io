---
layout: page
title: Services
permalink: /services/
---

# Services

Focused engineering services for medical imaging, computer vision, spatial AI, and technical diligence.

{% assign sorted_services = site.data.services.services | sort: "title" %}

{% if sorted_services.size > 0 %}
  <div class="services-container">
    {% for service in sorted_services %}
      <article class="service-item">
        <h2 id="{{ service.slug }}">{{ service.title }}</h2>
        <p><strong>For:</strong> {{ service.audience }}</p>
        <p>{{ service.summary }}</p>
        {% if service.best_for %}
        <h3>Best for:</h3>
        <ul>
          {% for item in service.best_for %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}
        {% if service.typical_problems %}
        <h3>Typical problems:</h3>
        <ul>
          {% for item in service.typical_problems %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}
        {% if service.typical_outcomes %}
        <h3>Typical outcomes:</h3>
        <ul>
          {% for item in service.typical_outcomes %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}
        {% if service.how_engagements_start %}
        <h3>How engagements start:</h3>
        <p>{{ service.how_engagements_start }}</p>
        {% endif %}
        {% if service.not_fit %}
        <h3>Not a fit:</h3>
        <ul>
          {% for item in service.not_fit %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}
        {% if service.example %}
        <h3>Example:</h3>
        <p>{{ service.example }}</p>
        {% endif %}
        <p><a href="/contact/">Contact for details →</a></p>
        <hr>
      </article>
    {% endfor %}
  </div>
  <section class="service-examples">
    <h2>Examples</h2>
    <p>Explore applied research examples in the <a href="/case-studies/">case studies</a> and reach out via <a href="/contact/">contact</a> for confidential details.</p>
  </section>
{% else %}
  No services listed yet.
{% endif %}
