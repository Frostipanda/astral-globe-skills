Hooks.once('init', () => {
  console.log('Astral Globe Skills | Initializing');
});

Hooks.once('ready', () => {
  console.log('Astral Globe Skills | Ready');
});

Hooks.on('renderActorSheet', (app, html, data) => {
  const newTabButton = $('<a class="item" data-tab="astral-globe">Astral Globe Skills</a>');
  const newTabContent = $(`<div class="tab" data-tab="astral-globe"><p>This is where your skill tree will go.</p></div>`);

  html.find('.tabs .item').last().after(newTabButton);
  html.find('.sheet-body').append(newTabContent);

  newTabButton.on('click', () => {
    html.find('.tab').hide();
    html.find('[data-tab="astral-globe"]').show();
  });
});

