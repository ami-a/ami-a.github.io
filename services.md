---
layout: page
title: Services
permalink: /services/
description: Senior AI research engineering services for medical imaging, computer vision, spatial AI, and technical diligence.
---

# Services

I work with funded biotech, medical-AI, and frontier-AI teams when the problem requires both research judgment and implementation ownership.

The strongest fit is a technical problem where failure is expensive: unreliable imaging accuracy, ambiguous R&D, weak feasibility evidence, poor spatial alignment, or AI claims that need independent review.

{% assign services = site.data.services.services | default: site.data.services %}

{% if services.size > 0 %}
  <div class="services-container">
    {% for service in services %}
      <article class="service-item">
        {% assign service_problems = service.problems | default: service.typical_problems %}
        {% assign service_outcomes = service.outcomes | default: service.typical_outcomes %}
        <h2 id="{{ service.slug }}">{{ service.title }}</h2>
        {% if service.featured %}
        <p class="service-featured-label">Primary focus</p>
        {% endif %}
        <p><strong>For:</strong> {{ service.audience }}</p>
        <p>{{ service.summary }}</p>

        {% if service.typical_duration or service.engagement_type %}
        <div class="service-engagement-details">
          {% if service.typical_duration %}
          <p><strong>Typical duration:</strong> {{ service.typical_duration }}</p>
          {% endif %}
          {% if service.engagement_type %}
          <p><strong>Engagement type:</strong> {{ service.engagement_type }}</p>
          {% endif %}
        </div>
        {% endif %}

        {% if service_problems %}
        <h3>Typical problems</h3>
        <ul>
          {% for item in service_problems %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}

        {% if service_outcomes %}
        <h3>Typical outcomes</h3>
        <ul>
          {% for item in service_outcomes %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}

        {% if service.proof_hint %}
        <h3>Relevant proof</h3>
        <p>{{ service.proof_hint }}</p>
        {% endif %}

        <p><a href="{{ '/contact/' | relative_url }}">Request a technical assessment &rarr;</a></p>
        <hr>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p>No services listed yet.</p>
{% endif %}

## How engagements usually start

1. **Technical assessment:** Clarify the problem, data, constraints, risk, and likely implementation path.

2. **Sprint or technical plan:** Build a prototype, benchmark, feasibility study, or architecture plan.

3. **Retainer or advisory relationship:** Continue with reserved senior R&D capacity, implementation ownership, or technical review.

## Not a fit

- Commodity dashboard or CRUD work
- Low-budget MVP factories
- Academic ghostwriting
- Crypto projects
- Work that depends on unsupported or inflated AI claims

If the problem is difficult, technical, and expensive to get wrong, send a concise technical brief.

Available for selected contract, advisory, and retained R&D engagements.

[Request a technical assessment]({{ '/contact/' | relative_url }}){: .cta-button .cta-primary }
