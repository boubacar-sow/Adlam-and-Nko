class Keyboard {
    constructor({ layout }) {
      this.layout = layout;
      this.currentInputField = null;
    }
  
    setInputField(inputField) {
      this.currentInputField = inputField;
      this.createKeyboard();
    }
  
    createKeyboard() {
      const keyboardContainer = document.getElementById('virtual-keyboard-container');
      keyboardContainer.innerHTML = ''; // Clear any existing keyboard
  
      this.layout.forEach(row => {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('keyboard-row');
  
        row.forEach(key => {
          const keyButton = document.createElement('button');
          keyButton.textContent = key;
          keyButton.classList.add('keyboard-key');
          keyButton.addEventListener('click', () => {
            if (this.currentInputField) {
              this.currentInputField.value += key;
            }
          });
          rowContainer.appendChild(keyButton);
        });
  
        keyboardContainer.appendChild(rowContainer);
      });
  
      // Add space and number keys
      const extraKeys = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['Space']
      ];
  
      extraKeys.forEach(row => {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('keyboard-row');
  
        row.forEach(key => {
          const keyButton = document.createElement('button');
          keyButton.textContent = key === 'Space' ? 'Espace' : key;
          keyButton.classList.add('keyboard-key');
          keyButton.addEventListener('click', () => {
            if (this.currentInputField) {
              this.currentInputField.value += key === 'Space' ? 'Espace' : key;
            }
          });
          rowContainer.appendChild(keyButton);
        });
  
        keyboardContainer.appendChild(rowContainer);
      });
    }
  }
  