document.addEventListener('DOMContentLoaded', async function() {
const header = document.createElement('div')
header.classList.add('header')
const headerSearchInput = document.createElement('input')
headerSearchInput.type = 'text'
headerSearchInput.placeholder = 'Введите запрос'
headerSearchInput.classList.add('header_input')
const logo = document.createElement('img');
logo.src = 'img/skb.png'
logo.classList.add('logo');
const container = document.createElement('div')
container.classList.add('container');
const clientsHeadline = document.createElement('h1');
clientsHeadline.innerHTML = 'Клиенты'
const clientsTable = document.createElement('table')
const clientsTableHead = document.createElement('thead') // голова таблицы
const headRow = document.createElement('tr');
headRow.classList.add('head_row')
const clientIdCol = document.createElement('th');
clientIdCol.innerHTML = 'ID';
clientIdCol.classList.add('id')
const clientFullnameCol = document.createElement('th');
clientFullnameCol.innerHTML = 'Фамилия Имя Отчество';
const clientTimeCreationCol = document.createElement('th');
clientTimeCreationCol.innerHTML = 'Дата и время создания клиента';
const clientContactsCol = document.createElement('th');
clientContactsCol.innerHTML = 'Контакты';
const clientChangeActionsCol = document.createElement('th');
clientChangeActionsCol.innerHTML = 'Действия';
const clientsTableBody = document.createElement('tbody') // тело таблицы

const addClientButton = document.createElement('button');
addClientButton.classList.add('add_client_button')
const addClientImg = document.createElement('img');
addClientImg.classList.add('client_img');
addClientImg.src = 'img/addClient.png';
addClientButton.textContent = 'Добавить клиента'

function createClientCreationModal() {
    const clientCreationModal = document.createElement('div')
    clientCreationModal.classList.add('client_creation_modal')
    const clientCreationModalContent = document.createElement('div')
    clientCreationModalContent.classList.add('creation_modal_content_container');
    const newClientHeadline = document.createElement('h2')
    newClientHeadline.innerHTML = 'Новый клиент'
    const closeModalButton = document.createElement('button');
    closeModalButton.classList.add('close_modal_button')

    const closeImg = document.createElement('img');
    closeImg.classList.add('close_img')
    closeImg.src = 'img/close.png'
    const addNewClientForm = document.createElement('form');
    const surnameInput = document.createElement('input')
    surnameInput.placeholder = 'Фамилия*'
    surnameInput.classList.add('new-client_input')
    const nameInput = document.createElement('input')
    nameInput.placeholder = 'Имя*'
    nameInput.classList.add('new-client_input')
    const lastNameInput = document.createElement('input')
    lastNameInput.placeholder = 'Отчество'
    lastNameInput.classList.add('new-client_input')
    const addContactButton = document.createElement('button')
    addContactButton.innerHTML = 'Добавить контакт';
    const addContactImg = document.createElement('img');
    addContactImg.classList.add('addContact_img');
    addContactImg.src = 'img/addContact.png'
    addContactButton.classList.add('addContact_button')
    const saveNewClientButton = document.createElement('input')
    saveNewClientButton.type = 'submit'
    saveNewClientButton.classList.add('save-new-client_button');
    saveNewClientButton.innerHTML = 'Сохранить';
    const cancelNewClientInformationButton = document.createElement('button');
    cancelNewClientInformationButton.classList.add('cancel-new-client-infromation_button')
    cancelNewClientInformationButton.innerHTML = 'Отмена';



    




    closeModalButton.append(closeImg);
    addContactButton.append(addContactImg);
    addNewClientForm.append(surnameInput, nameInput, lastNameInput, addContactButton, saveNewClientButton, cancelNewClientInformationButton)
    clientCreationModalContent.append(newClientHeadline, closeModalButton, addNewClientForm)
    clientCreationModal.append(clientCreationModalContent)
    addClientButton.addEventListener('click', function() {
        clientCreationModal.style.display = 'block'
        document.body.append(clientCreationModal)
        })
        closeModalButton.addEventListener('click', function() {
            clientCreationModal.style.display = 'none'
        })
    
        window.onclick = function(event) {
            if (event.target == clientCreationModal) {
              clientCreationModal.style.display = "none";
              
            }
          }
    
}
createClientCreationModal()











header.append(logo, headerSearchInput);
clientsTableHead.append(clientIdCol, clientFullnameCol, clientTimeCreationCol, clientContactsCol, clientChangeActionsCol)
clientsTable.append(clientsTableHead, clientsTableBody)
addClientButton.append(addClientImg)
container.append(clientsHeadline, clientsTable, addClientButton)
document.body.append(header, container)
})