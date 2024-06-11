const dailyBtn = document.getElementById('daily-button');
const weeklyBtn = document.getElementById('weekly-button');
const monthlyBtn = document.getElementById('monthly-button');
const toggleBtn = document.getElementById('toggle1');
const values = document.getElementsByClassName('values');

fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    someDataArr = data;   
  })
  .catch((err) => {
    console.error(`There was an error: ${err}`);
  });

  const displayTitle = (title) => {
    title.forEach(({ title, timeframes }, index) => {

    });
  };


dailyBtn.addEventListener('click', () => {
    selectDaily();
    dailyValues();
})

weeklyBtn.addEventListener('click', () => {
    selectWeekly();
    weeklyValues();
})

monthlyBtn.addEventListener('click', () => {
    selectMonthly();
    monthlyValues();
})

function selectDaily() {
    dailyBtn.classList.remove('deselected');
    dailyBtn.classList.add('selected');
    weeklyBtn.classList.remove('selected');
    weeklyBtn.classList.add('deselected');
    monthlyBtn.classList.remove('selected');
    monthlyBtn.classList.add('deselected');
}

function selectWeekly() {
    dailyBtn.classList.remove('selected');
    dailyBtn.classList.add('deselected');
    weeklyBtn.classList.remove('deselected');
    weeklyBtn.classList.add('selected');
    monthlyBtn.classList.remove('selected');
    monthlyBtn.classList.add('deselected');
}

function selectMonthly() {
    dailyBtn.classList.remove('selected');
    dailyBtn.classList.add('deselected');
    weeklyBtn.classList.remove('selected');
    weeklyBtn.classList.add('deselected');
    monthlyBtn.classList.remove('deselected');
    monthlyBtn.classList.add('selected');
}

function dailyValues(i) {
    for (i in values) {
        values[i].innerHTML = `
        <h1 class="light currentvalue">${someDataArr[i].timeframes.daily.current}hrs</h1>
        <p class="previous" id="previous">Last day - ${someDataArr[i].timeframes.daily.previous}hrs</p>
        `;
    }
}

function weeklyValues(i) {
    for (i in values) {
        values[i].innerHTML = `
        <h1 class="light currentvalue">${someDataArr[i].timeframes.weekly.current}hrs</h1>
        <p class="previous" id="previous">Last week - ${someDataArr[i].timeframes.weekly.previous}hrs</p>
        `;
    }
}

function monthlyValues(i) {
    for (i in values) {
        values[i].innerHTML = `
        <h1 class="light currentvalue">${someDataArr[i].timeframes.monthly.current}hrs</h1>
        <p class="previous" id="previous">Last month - ${someDataArr[i].timeframes.monthly.previous}hrs</p>
        `;
    }
}




