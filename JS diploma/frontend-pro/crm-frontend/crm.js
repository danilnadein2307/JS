document.addEventListener("DOMContentLoaded", async function() {
  const clientsArray = await getClients();
  const header = document.createElement("div");
  header.classList.add("header");
  const headerSearchInput = document.createElement("input");
  headerSearchInput.type = "text";
  headerSearchInput.placeholder = "Введите запрос";
  headerSearchInput.classList.add("header_input");
  const logo = document.createElement("img");
  logo.src = "img/skb.png";
  logo.classList.add("logo");
  const container = document.createElement("div");
  container.classList.add("container");
  const clientsHeadline = document.createElement("h1");
  clientsHeadline.innerHTML = "Клиенты";
  const clientsTable = document.createElement("table");
  clientsTable.classList.add("clientsTable");
  const clientsTableHead = document.createElement("thead"); // голова таблицы
  clientsTableHead.classList.add("clientsTable_head");
  const headRow = document.createElement("tr");
  headRow.classList.add("head_row");
  const clientIdCol = document.createElement("th");
  clientIdCol.innerHTML = "ID";
  clientIdCol.classList.add("id");
  const clientFullnameCol = document.createElement("th");
  clientFullnameCol.innerHTML = "Фамилия Имя Отчество";
  const clientTimeCreationCol = document.createElement("th");
  clientTimeCreationCol.innerHTML = "Дата и время создания клиента";
  const clientContactsCol = document.createElement("th");
  clientContactsCol.innerHTML = "Контакты";
  const clientChangeActionsCol = document.createElement("th");
  clientChangeActionsCol.innerHTML = "Действия";
  const clientsTableBody = document.createElement("tbody"); // тело таблицы

  const addClientButton = document.createElement("button");
  addClientButton.classList.add("add_client_button");
  const addClientImg = document.createElement("img");
  addClientImg.classList.add("client_img");
  addClientImg.src = "img/addClient.png";
  addClientButton.textContent = "Добавить клиента";

  header.append(logo, headerSearchInput);
  headRow.append(
    clientIdCol,
    clientFullnameCol,
    clientTimeCreationCol,
    clientContactsCol,
    clientChangeActionsCol
  );
  clientsTableHead.append(headRow);
  clientsTable.append(clientsTableHead, clientsTableBody);
  addClientButton.append(addClientImg);
  container.append(clientsHeadline, clientsTable, addClientButton);
  document.body.append(header, container);

  function addClient(clientObj) {
    const clientInformationRow = document.createElement("tr");
    clientInformationRow.classList.add("client_row");
    const clientIdCell = document.createElement("td");
    clientIdCell.classList.add("client_cell");
    const clientFullNameCell = document.createElement("td");
    clientFullNameCell.classList.add("client_cell");
    const clientCreationTimeCell = document.createElement("td");
    clientCreationTimeCell.classList.add("client_cell");
    const clientContactsCell = document.createElement("td");
    clientContactsCell.classList.add("client_cell");
    const clientActionsCell = document.createElement("td");
    clientActionsCell.classList.add("client_cell");
    const clientActionsButtonGroup = document.createElement("div");
    const clientDeleteButton = document.createElement("button");
    clientDeleteButton.textContent = "Удалить";
    clientDeleteButton.classList.add("clientAction_button");
    const clientDeleteImg = document.createElement("img");
    clientDeleteImg.classList.add("clientDelete_img");
    clientDeleteImg.src = "img/cancel.png";
    const clientEditButton = document.createElement("button");
    clientEditButton.textContent = "Изменить";
    clientEditButton.classList.add("clientAction_button");
    const clientEditImg = document.createElement("img");
    clientEditImg.src = "img/edit.png";
    clientEditImg.classList.add("clientEdit_img");

    clientIdCell.textContent = clientObj.id;
    clientFullNameCell.textContent = `${clientObj.surname} ${clientObj.name} ${clientObj.lastName}`.trim();
    clientCreationTimeCell.textContent = clientObj.createdAt;
    clientDeleteButton.addEventListener("click", function() {
      clientDelete(clientObj.id);
      clientInformationRow.remove();
    });
    // clientContactsCell.textContent = 'VK'

    clientEditButton.append(clientEditImg);
    clientDeleteButton.append(clientDeleteImg);
    clientActionsButtonGroup.append(clientEditButton, clientDeleteButton);
    clientActionsCell.append(clientActionsButtonGroup);
    clientInformationRow.append(
      clientIdCell,
      clientFullNameCell,
      clientCreationTimeCell,
      clientContactsCell,
      clientActionsCell
    );
    clientsTableBody.append(clientInformationRow);
  }

  async function clientPost(obj) {
    try {
      const response = await fetch("http://localhost:3000/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      const result = await response.json();
      return result;
    } catch {}
  }

  async function getClients() {
    try {
      const response = await fetch("http://localhost:3000/api/clients");
      const data = await response.json();
      return data;
    } catch {}
  }

  async function clientDelete(id) {
    await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: "DELETE",
    });
  }

  function createClientsTable(arr) {
    for (const newClient of arr) {
      addClient(newClient);
    }
  }

  createClientsTable(clientsArray);

  function createClientCreationModal() {
    const clientCreationModal = document.createElement("div");
    clientCreationModal.classList.add("client_creation_modal");
    const clientCreationModalContent = document.createElement("div");
    clientCreationModalContent.classList.add(
      "creation_modal_content_container"
    );
    const clientCreationModalHead = document.createElement("div");
    clientCreationModalHead.classList.add("creation-modal_head");
    const newClientHeadline = document.createElement("h2");
    newClientHeadline.innerHTML = "Новый клиент";
    const closeModalButton = document.createElement("button");
    closeModalButton.classList.add("close_modal_button");

    const closeImg = document.createElement("img");
    closeImg.classList.add("close_img");
    closeImg.src = "img/close.png";
    const addNewClientForm = document.createElement("form");
    addNewClientForm.classList.add("newClient_form");
    const surnameInput = document.createElement("input");
    surnameInput.placeholder = "Фамилия*";
    surnameInput.classList.add("newClient_form_input");
    const nameInput = document.createElement("input");
    nameInput.placeholder = "Имя*";
    nameInput.classList.add("newClient_form_input", "name_input");
    const lastNameInput = document.createElement("input");
    lastNameInput.placeholder = "Отчество";
    lastNameInput.classList.add("newClient_form_input");
    const addContactGroup = document.createElement("div");
    addContactGroup.classList.add("addContact_group");
    const addContactButton = document.createElement("button");
    addContactButton.innerHTML = "Добавить контакт";
    addContactButton.classList.add("addContact_button");
    const addContactImg = document.createElement("img");
    addContactImg.classList.add("addContact_img");
    addContactImg.src = "img/addContact.png";
    addContactButton.classList.add("addContact_button");
    const newClientFormButtonGroup = document.createElement("div");
    newClientFormButtonGroup.classList.add("newClientForm_button-group");
    const saveNewClientButton = document.createElement("input");
    saveNewClientButton.type = "submit";
    saveNewClientButton.classList.add("saveNewClient_button");
    saveNewClientButton.innerHTML = "Сохранить";
    const cancelNewClientInformationButton = document.createElement("button");
    cancelNewClientInformationButton.classList.add(
      "cancel-new-client-infromation_button"
    );
    cancelNewClientInformationButton.innerHTML = "Отмена";

    closeModalButton.append(closeImg);
    addContactButton.append(addContactImg);
    addContactGroup.append(addContactButton);
    newClientFormButtonGroup.append(
      saveNewClientButton,
      cancelNewClientInformationButton
    );
    addNewClientForm.append(
      surnameInput,
      nameInput,
      lastNameInput,
      addContactGroup,
      newClientFormButtonGroup
    );
    clientCreationModalHead.append(newClientHeadline, closeModalButton);
    clientCreationModalContent.append(
      clientCreationModalHead,
      addNewClientForm
    );
    clientCreationModal.append(clientCreationModalContent);
    addClientButton.addEventListener("click", function() {
      clientCreationModal.style.display = "flex";
      document.body.append(clientCreationModal);
    });
    closeModalButton.addEventListener("click", function() {
      clientCreationModal.style.display = "none";
    });

    window.onclick = function(event) {
      if (event.target == clientCreationModal) {
        clientCreationModal.style.display = "none";
      }
    };

    const dropdownOptions = ["Телефон", "Email", "Facebook", "VK", "Другое"];
    
    function dropdownCreate() {
      const contactInformationGroup = document.createElement("div");
      contactInformationGroup.classList.add("contactInformation_group");
      const dropdown = document.createElement("select");
      dropdown.classList.add("dropdown");
      const contactInfoInput = document.createElement("input");
      contactInfoInput.classList.add("contactInfo_input");
      contactInfoInput.placeholder = "Введите данные контакта";
      for (let i = 0; i < dropdownOptions.length; ++i) {
        const dropdownOption = document.createElement("option");
        dropdownOption.classList.add('dropdown_option')
        dropdownOption.textContent = dropdownOptions[i];
        dropdown.append(dropdownOption);
      }

      contactInformationGroup.append(dropdown, contactInfoInput);
      addContactGroup.append(contactInformationGroup);
    }
    let counter = 0;
    addContactButton.addEventListener("click", function(event) {
      event.preventDefault();
      dropdownCreate();
      counter += 1;
      if (counter === 10) {
        addContactButton.remove();
      }
    });
    saveNewClientButton.addEventListener("click", function(event) {
      event.preventDefault();
      const client = {
        name: nameInput.value,
        surname: surnameInput.value,
        lastName: lastNameInput.value,
        contacts: [],
      };
      
      console.log(client.contacts)
      const createClient = async () => {
        const newClient = await clientPost(client);
        clientsArray.push(newClient);
        addClient(newClient);
        clientCreationModal.style.display = "none";
      };
      createClient();
      console.log(clientsArray);
    });
  }
  createClientCreationModal();
});
