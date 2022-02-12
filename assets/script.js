const form = document.querySelector('[data-form="content"]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const gender = getSelectedValue('gender');
  const age = +document.querySelector('[data-form="age"]').value
  const weight = +document.querySelector('[data-form="weight"]').value;
  const height = +document.querySelector('[data-form="height"]').value;
  const activityLevel = +getSelectedValue('activity-level');

  const tmb = Math.round(
    
    gender === 'female' 
    ? (665 +(9.6 * weight) + (1.8 * height) - (4.7 * age)) 
    : (66 +(13.7 * weight) + (5 * height) - (6.8 * age)) 
  )

  const maintenance = Math.round(tmb * activityLevel);
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  const showLayout = `
    
    <h2>Aqui está o resultado:</h2>

      <div class="result-content">
        <ul>
          <li>
            Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
          </li>
          <li>
            Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
          </li>
          <li>
            Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
          </li>
          <li>
            Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
          </li>
        </ul>
      </div>
 
 `
  const resultLayout = document.querySelector('[data-result="layout"]');
  resultLayout.innerHTML = showLayout;
}

function getSelectedValue (id) {
  const select = document.getElementById(id)

  return select.options[select.selectedIndex].value;
}
