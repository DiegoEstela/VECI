class TextManager {
  constructor() {
    this.texts = [];
    this.undoStack = [[]];
    this.selectedTextIndices = []; // Array to store selected indices
    this.initializeDOM();
  }

  initializeDOM() {
    this.addButton = document.getElementById("addButton");
    this.deleteButton = document.getElementById("deleteButton");
    this.undoButton = document.getElementById("undoButton");
    this.list = document.getElementById("list");
    this.modal = document.getElementById("modal");
    this.modalInput = document.getElementById("modalInput");
    this.modalAddButton = document.getElementById("modalAddButton");
    this.modalCancelButton = document.getElementById("modalCancelButton");

    this.addButton.addEventListener("click", () => this.openModal());
    this.deleteButton.addEventListener("click", () => this.deleteText());
    this.undoButton.addEventListener("click", () => this.undo());
    this.modalAddButton.addEventListener("click", () =>
      this.addTextFromModal()
    );
    this.modalCancelButton.addEventListener("click", () => this.closeModal());

    this.list.addEventListener("click", (event) => {
      if (event.target && event.target.nodeName === "LI") {
        const selectedIndex = event.target.dataset.index;
        this.handleRowSelection(selectedIndex);
      }
    });
  }

  openModal() {
    this.modal.style.display = "flex";
  }

  closeModal() {
    this.modal.style.display = "none";
    this.modalInput.value = "";
  }

  addTextFromModal() {
    const text = this.modalInput.value.trim();
    if (text !== "") {
      this.texts.push(text);
      this.showTexts();
      this.closeModal();
      this.updateUndoStack();
    }
  }

  handleRowSelection(selectedIndex) {
    // Toggle selection for the clicked index
    const index = parseInt(selectedIndex, 10);
    const indexInSelected = this.selectedTextIndices.indexOf(index);
    if (indexInSelected === -1) {
      this.selectedTextIndices.push(index);
    } else {
      this.selectedTextIndices.splice(indexInSelected, 1);
    }

    this.showTexts();
  }

  deleteText() {
    for (let i = this.selectedTextIndices.length - 1; i >= 0; i--) {
      const index = this.selectedTextIndices[i];
      this.texts.splice(index, 1);
    }
    this.selectedTextIndices = [];
    this.updateUndoStack();
    this.showTexts();
  }

  deleteTextByIndex(index) {
    this.texts.splice(index, 1);
    this.updateUndoStack();
    this.showTexts();
  }

  undo() {
    if (this.undoStack.length > 1) {
      this.undoStack.pop();
      this.texts = [...this.undoStack[this.undoStack.length - 1]];
      this.selectedTextIndices = [];
      this.showTexts();
    }
  }

  updateUndoStack() {
    this.undoStack.push([...this.texts]);
  }

  showTexts() {
    this.list.innerHTML = "";

    for (let i = 0; i < this.texts.length; i++) {
      const li = document.createElement("li");
      li.textContent = this.texts[i];
      li.classList.add("list__item");
      li.dataset.index = i;

      if (this.selectedTextIndices.includes(i)) {
        li.classList.add("selected");
      }

      this.list.appendChild(li);
    }
  }
}

const textManager = new TextManager();
