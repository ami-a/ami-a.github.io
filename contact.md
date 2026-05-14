---
layout: page
title: Contact
permalink: /contact/
description: Contact Amitai Assayag for senior AI research engineering, medical imaging AI, computer vision, spatial AI, or technical diligence.
---

# Contact

Best first message:

- What you are building
- The technical bottleneck
- Current data type or technical stack
- Timeline
- Whether this is advisory, sprint, or ongoing R&D work
- Any confidentiality constraints

I usually start with a short technical assessment before deeper implementation work.

Available for selected contract, advisory, and retained R&D engagements.

{% assign email_subject = "Technical assessment request" | url_encode %}
{% capture email_body %}What we are building:
Technical bottleneck:
Current data/stack:
Timeline:
Engagement type:
Confidentiality constraints:{% endcapture %}

[Email Amitai](mailto:{{ site.email }}?subject={{ email_subject }}&body={{ email_body | url_encode }}){: .cta-button .cta-primary }

{% if site.calendar_url and site.calendar_url != "" %}
## Book a 20-min intro call

[Book a 20-min intro call]({{ site.calendar_url }})
{% endif %}

## Best fit

- Medical imaging, microscopy, pathology, segmentation, registration, calibration, or spatial alignment
- Computer-vision systems that need research-level judgment
- Spatial-AI or 3D scene-representation problems
- AI technical diligence or feasibility review

## Not a fit

- Academic ghostwriting
- Crypto projects
- Low-budget generic automation
- Projects that require inflated or unsupported AI claims

## Learn more

- [Services]({{ '/services/' | relative_url }})
- [Case Studies]({{ '/case-studies/' | relative_url }})
