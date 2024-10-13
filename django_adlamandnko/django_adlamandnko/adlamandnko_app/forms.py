from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django import forms
from .models import Annotation

class AnnotationForm(forms.ModelForm):
    class Meta:
        model = Annotation
        fields = ['original_text', 'latin_text', 'translated_text']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.add_input(Submit('submit', 'Submit'))
