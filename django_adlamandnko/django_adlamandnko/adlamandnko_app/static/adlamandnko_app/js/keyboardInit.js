document.addEventListener('DOMContentLoaded', function () {
    const adlamLayout = [
      ['𞤀', '𞤁', '𞤂', '𞤃', '𞤄', '𞤅', '𞤆', '𞤇', '𞤈', '𞤉'],
      ['𞤊', '𞤋', '𞤌', '𞤍', '𞤎', '𞤏', '𞤑', '𞤒', '𞤓'],
      ['𞤔', '𞤕', '𞤖', '𞤗', '𞤘', '𞤙', '𞤚', '𞤛', '𞤜', '𞤝'],
      ['𞤞', '𞤟', '𞤠', '𞤡', '𞤢', '𞤣', '𞤤', '𞤥', '𞤦', '𞤧']
    ];
  
    const nkoLayout = [
      ['߀', '߁', '߂', '߃', '߄', '߅', '߆', '߇', '߈', '߉'],
      ['ߊ', 'ߋ', 'ߌ', 'ߍ', 'ߎ', 'ߏ', 'ߐ', 'ߑ', 'ߒ', 'ߓ'],
      ['ߔ', 'ߕ', 'ߖ', 'ߗ', 'ߘ', 'ߙ', 'ߚ', 'ߛ', 'ߜ', 'ߝ'],
      ['ߞ', 'ߟ', 'ߠ', 'ߡ', 'ߢ', 'ߣ', 'ߤ', 'ߥ', 'ߦ', 'ߧ']
    ];
  
    const keyboard = new Keyboard({
      layout: adlamLayout  // Default layout, will change dynamically
    });
  
    function showKeyboardForField(inputField, layout) {
      clearMargins(); // Clear previous margins
      keyboard.setInputField(inputField);
      const container = document.getElementById('virtual-keyboard-container');
      container.style.display = 'block';
  
      // Position the keyboard below the input field
      const rect = inputField.getBoundingClientRect();
      container.style.position = 'absolute';
      container.style.top = `${rect.bottom + window.scrollY + 10}px`; // Add space below the field
      container.style.left = `${rect.left + window.scrollX}px`;
  
      // Add bottom margin to avoid overlap
      inputField.style.marginBottom = `${container.offsetHeight + 20}px`;
    }
  
    function clearMargins() {
      document.querySelectorAll('.form-group input').forEach(input => input.style.marginBottom = '');
    }
  
    function hideKeyboard(event) {
      const container = document.getElementById('virtual-keyboard-container');
      container.style.display = 'none';
      if (event) {
        event.target.style.marginBottom = '';
      }
    }
  
    const languageSelect = document.getElementById('language-select');
    const originalTextInput = document.getElementById('id_original_text');
    const latinTextInput = document.getElementById('id_latin_text');
    const translatedTextInput = document.getElementById('id_translated_text');
  
    function handleInputFocus(event) {
      clearMargins();
      const selectedLanguage = languageSelect.value;
      if (selectedLanguage === 'adlam') {
        keyboard.layout = adlamLayout;
        showKeyboardForField(event.target, adlamLayout);
      } else if (selectedLanguage === 'nko') {
        keyboard.layout = nkoLayout;
        showKeyboardForField(event.target, nkoLayout);
      }
    }
  
    originalTextInput.addEventListener('focus', handleInputFocus);
    latinTextInput.addEventListener('focus', handleInputFocus);
    translatedTextInput.addEventListener('focus', handleInputFocus);
  
    originalTextInput.addEventListener('blur', hideKeyboard);
    latinTextInput.addEventListener('blur', hideKeyboard);
    translatedTextInput.addEventListener('blur', hideKeyboard);
  
    languageSelect.addEventListener('change', function () {
      const selectedLanguage = languageSelect.value;
      const inputField = document.querySelector('input:focus');
      if (inputField && (selectedLanguage === 'adlam' || selectedLanguage === 'nko')) {
        handleInputFocus({ target: inputField });
      } else {
        hideKeyboard();
      }
    });
  });
  