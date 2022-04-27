var elFormPizza = document.querySelector('.main-form__wrapper');
var elSelectSize = elFormPizza.querySelector('.js-selection__size');
var elRadioWidth = elFormPizza.querySelector('.js-radio__size-box');
var elProductsBox = elFormPizza.querySelector('.js-products__box');
var elAdditionsBox = elFormPizza.querySelector('.js-additions__box');
var elSelectSizeResult = elFormPizza.querySelector('.js-selection__size-result');
var elRadioWidthResult = elFormPizza.querySelector('.js-radio__size-box-result');
var elProductsResult = elFormPizza.querySelector('.js-poducts-result');
var elAdditionsResult = elFormPizza.querySelector('.js-additions-result');
var sizeOptions = [
  'Yupqa', 'O`rta', 'Qalin'
];
var widthOptions = [
  '25 cm', '30 cm', '35 cm', '40 cm'
];
var productOptions = [
  'Pomidor', 'Tuzlangan bodring', 'Qazi', 'Kurka go`shti', 'Zaytun', 'Qo`ziqorin', 'Pishloq', 'Qalampir'
];
var additonOptions = [
  'Achchiq', 'Sosiskali', "Tovuq go'shti", 'Souse'
];

for (var i = 0; i < sizeOptions.length; i++) {
  var elNewSelectOption = document.createElement('option');
  elNewSelectOption.setAttribute('value', sizeOptions[i]);
  elNewSelectOption.textContent = sizeOptions[i];
  elSelectSize.appendChild(elNewSelectOption);
};

elSelectSize.addEventListener('change', function (evt) {
  evt.preventDefault();

  var sizeChoosen = [];

  var selectSize = elSelectSize.value.trim();
  sizeChoosen.push(selectSize);
  elSelectSizeResult.textContent = selectSize;
});

for (var i = 0; i < widthOptions.length; i++) {

  var elNewWidthOptionLabel = document.createElement('label');
  elNewWidthOptionLabel.classList.add('d-flex', 'align-items-center', 'mr-5', 'px-2', 'py-4',
    'rounded-circle', 'border');
  elNewWidthOptionLabel.textContent = widthOptions[i];
  elRadioWidth.appendChild(elNewWidthOptionLabel);

  var elNewWidthOptionInput = document.createElement('input');
  elNewWidthOptionInput.setAttribute('value', widthOptions[i]);
  elNewWidthOptionInput.setAttribute('name', 'pizza_width');
  elNewWidthOptionInput.setAttribute('type', 'radio');
  elNewWidthOptionInput.classList.add('ml-1');
  elNewWidthOptionLabel.appendChild(elNewWidthOptionInput)

  elNewWidthOptionInput.addEventListener('change', function () {
    var widthChoosen = [];
    if (this.checked) {
      widthChoosen.push(this.value);
      elRadioWidthResult.textContent = this.value;
    }
  });

};

var productsChoosen = [];

for (var i = 0; i < productOptions.length; i++) {

  var elNewProductsLabel = document.createElement('label');
  elNewProductsLabel.classList.add('align-items-center', 'mr-3', 'p-1', 'border');
  elNewProductsLabel.textContent = productOptions[i];
  elProductsBox.appendChild(elNewProductsLabel);

  var elNewProductsInput = document.createElement('input');
  elNewProductsInput.setAttribute('value', productOptions[i]);
  elNewProductsInput.setAttribute('name', 'products');
  elNewProductsInput.setAttribute('type', 'checkbox');
  elNewProductsInput.classList.add('ml-1');
  elNewProductsLabel.appendChild(elNewProductsInput);

  elNewProductsInput.addEventListener('change', function () {

    if (productsChoosen.includes(this.value)) {
      var productIndex = productsChoosen.indexOf(this.value);
      productsChoosen.splice(productIndex, 1);
    } else {
      productsChoosen.push(this.value);
    }

    elProductsResult.textContent = productsChoosen.join(', ');
  });

};

var additionsChoosen = [];

for (var i = 0; i < additonOptions.length; i++) {

  var elAdditionsLabel = document.createElement('label');
  elAdditionsLabel.classList.add('align-items-center', 'mr-3', 'p-1', 'border');
  elAdditionsLabel.textContent = additonOptions[i];
  elAdditionsBox.appendChild(elAdditionsLabel);
  
  var elAdditionsInput = document.createElement('input');
  elAdditionsInput.setAttribute('value', additonOptions[i]);
  elAdditionsInput.setAttribute('name', 'products');
  elAdditionsInput.setAttribute('type', 'checkbox');
  elAdditionsInput.classList.add('ml-1');
  elAdditionsLabel.appendChild(elAdditionsInput);

  elAdditionsInput.addEventListener('change', function () {

    if (additionsChoosen.includes(this.value)) {
      var additionIndex = additionsChoosen.indexOf(this.value);
      additionsChoosen.splice(additionIndex, 1);
    } else {
      additionsChoosen.push(this.value);
    }

    elAdditionsResult.textContent = additionsChoosen.join(', ');
  });

};