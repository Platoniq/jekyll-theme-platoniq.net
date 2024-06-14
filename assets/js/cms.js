---
layout: none
dir_path: netlifycms/scripts/
scripts:
  - editor_component_quote_tag.liquid
  - editor_component_file_tag.liquid
  - editor_component_documents_tag.liquid
  - editor_component_links_tag.liquid
  - editor_component_numbers_tag.liquid
  - editor_component_questions_tag.liquid
  - editor_component_video_tag.liquid
  - editor_component_metrics_tag.liquid
---

{% for script in page.scripts %}
  {% assign path = page.dir_path | append: script %}

  {% include {{ path }} %}
{% endfor %}
