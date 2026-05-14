---
layout: page
title: Services
permalink: /services/
---

# Services

Focused engineering services for medical imaging, computer vision, spatial AI, and technical diligence.

{% assign sorted_services = site.data.services.services %}

{% if sorted_services.size > 0 %}
  <div class="services-container">
    {% for service in sorted_services %}
      <article class="service-item">
        {% assign service_problems = service.problems | default: service.typical_problems %}
        {% assign service_outcomes = service.outcomes | default: service.typical_outcomes %}
        <h2 id="{{ service.slug }}">{{ service.title }}</h2>
        <p><strong>For:</strong> {{ service.audience }}</p>
        <p>{{ service.summary }}</p>

        {% if service.engagement_type or service.typical_start or service.typical_duration %}
        <div class="service-engagement-details">
          {% if service.engagement_type %}
          <p class="engagement-type"><strong>Engagement type:</strong> {{ service.engagement_type }}</p>
          {% endif %}
          {% if service.typical_start %}
          <p class="typical-start"><strong>Typical start:</strong> {{ service.typical_start }}</p>
          {% endif %}
          {% if service.typical_duration %}
          <p class="typical-duration"><strong>Typical duration:</strong> {{ service.typical_duration }}</p>
          {% endif %}
        </div>
        {% endif %}

        {% if service.best_for %}
        <h3>Best for:</h3>
        <ul>
          {% for item in service.best_for %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}
        {% if service.proof_hint %}
        <h3>Relevant proof:</h3>
        <p>{{ service.proof_hint }}</p>
        {% endif %}
        {% if service_problems %}
        <h3>Typical problems:</h3>
        <ul>
          {% for item in service_problems %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}
        {% if service_outcomes %}
        <h3>Typical outcomes:</h3>
        <ul>
          {% for item in service_outcomes %}
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
        <p><a href="/contact/">Contact for details &rarr;</a></p>
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
