function showCategories() {
    const container = document.querySelector(".categories");
    const title = document.createElement('div');
    title.innerHTML = `<h3>Категорії:</h3>`;
    container.appendChild(title);

    for (let i = 0; i < data.length; i++) {
        const element = document.createElement('div');
        element.innerHTML = data[i].name;
        element.setAttribute('data-category', i);
        element.addEventListener("click", showProductHandler);
        container.appendChild(element);
    }
}

function showProductHandler(event) {
    const container = document.querySelector(".products");
    container.innerHTML = "";

    const title = document.createElement('div');
    title.innerHTML = `<h3>Перелік товарів:</h3>`;
    container.appendChild(title);

    const element = event.target;
    const categoryIndex = element.getAttribute("data-category");
    const categoryProducts = data[categoryIndex].products;

    for(let i = 0; i < categoryProducts.length; i++) {
        const childElement = document.createElement('div');
        childElement.innerHTML = "";
        childElement.innerHTML = `Модель: ${categoryProducts[i].name}`;
        childElement.setAttribute("data-category", categoryIndex);
        childElement.setAttribute("data-product", i);
        childElement.addEventListener("click", showDetailsProductHadnler);
        container.appendChild(childElement);
    }
}

function showDetailsProductHadnler(event) {
    const container = document.querySelector(".details");
    container.innerHTML = "";

    const title = document.createElement('div');
    title.innerHTML = `<h3>Деталі товару:</h3>`;
    container.appendChild(title);
    
    const element = event.target;
    const categoryIndex = element.getAttribute("data-category");
    const productIndex = element.getAttribute("data-product");
    const categoryProducts = data[categoryIndex].products;

    const description = document.createElement('div');
    const price = document.createElement('div');

    description.innerHTML = `Опис: ${categoryProducts[productIndex].description}`;
    price.innerHTML = `Вартість: ${categoryProducts[productIndex].price}$`;
    container.appendChild(description);
    container.appendChild(price);


    const btn = document.createElement("button");
    btn.textContent = 'Сплатити';
    btn.classList.add("btn_style");
    btn.addEventListener("click", showMessageHandler);
    container.appendChild(btn);

}


function showMessageHandler() {
    const body = document.querySelector("body");
    const divContainer = document.createElement("div");
    divContainer.classList.add('divContainer');
    const form = document.createElement("form");

    const divContainerInitials = document.createElement("div");
    const divContainerCity = document.createElement("div");
    const divContainerNovaPoshta = document.createElement("div");
    const divContainerPayMethod = document.createElement("div");
    const divContainerCountProduct = document.createElement("div");
    const divContainerComments = document.createElement("div");

    //Частина ПІБ покупця
    const preInitialsText = document.createElement("p");
    preInitialsText.textContent = 'Введіть ПІБ';
    const initials = document.createElement("input");
    initials.classList.add("personInfo");

    //Частина вибору місця
    const preSelectCityText = document.createElement("p");
    preSelectCityText.textContent = 'Оберіть місто';
    const selectCity = document.createElement("select");
    selectCity.classList.add("selectCity");


    const emptyCity = document.createElement("option");
    const firstCity = document.createElement("option");
    const secondCity = document.createElement("option");
    const thirdCity = document.createElement("option");

    firstCity.textContent = 'Київ';
    secondCity.textContent = 'Дніпро';
    thirdCity.textContent = 'Полтава';

    selectCity.append(emptyCity, firstCity, secondCity, thirdCity);
    
     //Частина обрання відділення Нової Пошти
    const preSelectNovaPoshta = document.createElement("p");
    preSelectNovaPoshta.textContent = 'Оберіть склад';
    const selectNovaPoshta = document.createElement("select");
    selectNovaPoshta.classList.add("selectNovaPoshta");


    const emptyNovaPoshta = document.createElement("option");
    const firstNovaPoshta = document.createElement("option");
    const secondNovaPoshta = document.createElement("option");
    const thirdNovaPoshta = document.createElement("option");
    const fourthNovaPoshta = document.createElement("option");
    const fifthNovaPoshta = document.createElement("option");

    firstNovaPoshta.textContent = 'Нова Пошта №1';
    secondNovaPoshta.textContent = 'Нова Пошта №2';
    thirdNovaPoshta.textContent = 'Нова Пошта №3';
    fourthNovaPoshta.textContent = 'Нова Пошта №4';
    fifthNovaPoshta.textContent = 'Нова Пошта №5';

    selectNovaPoshta.append(emptyNovaPoshta, firstNovaPoshta, secondNovaPoshta, thirdNovaPoshta, fourthNovaPoshta, fifthNovaPoshta);

    // Частина обрання способу оплати
    const preSelectPayMethod = document.createElement("p");
    preSelectPayMethod.textContent = 'Оберіть метод оплати';
    const selectPayMethod = document.createElement("select");
    selectPayMethod.classList.add("selectPayMethod");


    const emptyPayMethod = document.createElement("option");
    const firstPayMethod = document.createElement("option");
    const secondPayMethod = document.createElement("option");

    firstPayMethod.textContent = 'Післяплата';
    secondPayMethod.textContent = 'Банківська картка';

    selectPayMethod.append(emptyPayMethod, firstPayMethod, secondPayMethod);

    //Частина обрання кількості товару
    const prerCountProduct = document.createElement("p");
    prerCountProduct.textContent = 'Введіть кількість продукції';
    const inputCountProduct = document.createElement("input");
    inputCountProduct.classList.add("inputCountProduct");

    inputCountProduct.type = 'number';
    inputCountProduct.min = "1";

    //Частина коментарів
    const preComments = document.createElement("p");
    preComments.textContent = 'Введіть коментар';
    const textCommentsArea = document.createElement("textarea");
    textCommentsArea.classList.add("textCommentsArea");


    //Кнопка
    const buttonElement = document.createElement("button");
    buttonElement.textContent = 'Підтвердити замовлення';
    buttonElement.addEventListener("click", showInfoAboutOrderHandler);



    body.appendChild(divContainer);
    divContainer.appendChild(form);
    divContainerInitials.append(preInitialsText, initials);
    divContainerCity.append(preSelectCityText, selectCity);
    divContainerNovaPoshta.append(preSelectNovaPoshta, selectNovaPoshta);
    divContainerPayMethod.append(preSelectPayMethod, selectPayMethod);
    divContainerCountProduct.append(prerCountProduct, inputCountProduct);
    divContainerComments.append(preComments, textCommentsArea);

    form.append(divContainerInitials, divContainerCity, divContainerNovaPoshta, divContainerPayMethod, divContainerCountProduct, divContainerComments, buttonElement);
}

function showInfoAboutOrderHandler(event) {
    event.preventDefault();
    
    const divContainer = document.querySelector('.divContainer');

    const personInfoValue = document.querySelector('.personInfo').value;
    const selectCityValue = document.querySelector('.selectCity').value;
    const selectNovaPoshtaValue = document.querySelector('.selectNovaPoshta').value;
    const selectPayMethodValue = document.querySelector('.selectPayMethod').value;
    const inputCountProductValue = document.querySelector('.inputCountProduct').value;
    const textCommentsAreaValue = document.querySelector('.textCommentsArea').value;

    if (isFormValid(personInfoValue, selectCityValue, selectNovaPoshtaValue, selectPayMethodValue, inputCountProductValue)) {
        alert('Будь-ласка, заповніть усі поля для вводу!');
        return;
    } 
    

    const divContainerPersonInfo = document.createElement('div');
    const divContainerCityInfo = document.createElement('div');
    const divContainerNovaPoshtaInfo = document.createElement('div');
    const divContainerPayMethodInfo = document.createElement('div');
    const divContainerProductInfo = document.createElement('div');
    const divContainerCommentInfo = document.createElement('div');


    const titleH1 = document.createElement("h1");
    titleH1.textContent = 'Результати замовлення';

    const prePersonInfoText = document.createElement('span');
    prePersonInfoText.textContent = 'ПІБ: ';
    const spanPersonInfoText = document.createElement('span');
    spanPersonInfoText.textContent = personInfoValue;


    const preCityInfoText = document.createElement('span');
    preCityInfoText.textContent = 'Місто: ';
    const spanCityInfoText = document.createElement('span');
    spanCityInfoText.textContent = selectCityValue;


    const preNovaPoshtaInfoText = document.createElement('span');
    preNovaPoshtaInfoText.textContent = 'Місце доставки: ';
    const spanNovaPoshtaInfoText = document.createElement('span');
    spanNovaPoshtaInfoText.textContent = selectNovaPoshtaValue;


    const prePayMethodInfoText = document.createElement('span');
    prePayMethodInfoText.textContent = 'Спосіб оплати: ';
    const spanPayMethodInfoText = document.createElement('span');
    spanPayMethodInfoText.textContent = selectPayMethodValue;


    const preProductInfoText = document.createElement('span');
    preProductInfoText.textContent = 'Кількість продукції: ';
    const spanProductInfoText = document.createElement('span');
    spanProductInfoText.textContent = inputCountProductValue;


    const preCommentsAreaInfoText = document.createElement('span');
    preCommentsAreaInfoText.textContent = 'Коментар: ';
    const spanCommentsAreaInfoText = document.createElement('span');
    spanCommentsAreaInfoText.textContent = textCommentsAreaValue === null || textCommentsAreaValue === '' ? 'Коментар відсутній' : textCommentsAreaValue;

    divContainerPersonInfo.append(prePersonInfoText, spanPersonInfoText);
    divContainerCityInfo.append(preCityInfoText, spanCityInfoText);
    divContainerNovaPoshtaInfo.append(preNovaPoshtaInfoText, spanNovaPoshtaInfoText);
    divContainerPayMethodInfo.append(prePayMethodInfoText, spanPayMethodInfoText);
    divContainerProductInfo.append(preProductInfoText, spanProductInfoText);
    divContainerCommentInfo.append(preCommentsAreaInfoText, spanCommentsAreaInfoText);

    const resetButton = document.createElement("button");
    resetButton.textContent = "До магазину";

    resetButton.addEventListener("click", () => {
        location.reload();
    });

    divContainer.append(titleH1, divContainerPersonInfo, divContainerCityInfo, divContainerNovaPoshtaInfo, divContainerPayMethodInfo, divContainerProductInfo, divContainerCommentInfo, resetButton);

    document.querySelector('form').remove();
}

function isFormValid(personInfoValue, selectCityValue, selectNovaPoshtaValue, selectPayMethodValue, inputCountProductValue) {
    return personInfoValue === null || personInfoValue === '' ||
          selectCityValue === null || selectCityValue === '' ||
          selectNovaPoshtaValue === null || selectNovaPoshtaValue === '' ||
          selectPayMethodValue === null || selectPayMethodValue === '' ||
          inputCountProductValue === null || inputCountProductValue === '';
}




showCategories();