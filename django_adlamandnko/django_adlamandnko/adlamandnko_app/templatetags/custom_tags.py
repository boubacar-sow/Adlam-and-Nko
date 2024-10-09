# adlamandnko_app/templatetags/custom_tags.py

from django import template

register = template.Library()

@register.simple_tag(takes_context=True)
def get_body_class(context):
    return context.get('body_class', 'with-background')
