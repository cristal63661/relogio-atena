const clock = document.querySelector('.clock');
const dateEl = document.querySelector('.date');
const toggleThemeBtn = document.getElementById('toggleTheme');
const celebrateBtn = document.getElementById('btnCelebrate');

const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

function updateTime() {
  const now = new Date();

    const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');

          clock.textContent = `${h}:${m}:${s}`;

            const dayName = days[now.getDay()];
              const dayNum = now.getDate();
                const monthName = months[now.getMonth()];
                  const year = now.getFullYear();

                    dateEl.textContent = `${dayName}, ${dayNum} ${monthName} ${year}`;
                    }

                    updateTime();
                    setInterval(updateTime, 1000);

                    toggleThemeBtn.addEventListener('click', () => {
                      document.body.classList.toggle('dark');
                        if(document.body.classList.contains('dark')){
                            toggleThemeBtn.textContent = 'Modo Claro';
                              } else {
                                  toggleThemeBtn.textContent = 'Modo Escuro';
                                    }
                                    });

                                    celebrateBtn.addEventListener('click', () => {
                                      document.body.classList.add('celebrate');
                                        setTimeout(() => {
                                            document.body.classList.remove('celebrate');
                                              }, 5000);
                                              });