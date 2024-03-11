Hooks.once('init', () => {
  console.log('Astral Globe Skills | Initializing');
});

Hooks.once('ready', () => {
  console.log('Astral Globe Skills | Ready');
});

Hooks.on('renderActorSheet', (app, html, data) => {
  // Path adjustment for icon.png if needed
  const iconPath = "modules/astral-globe-skills/icons/tab.png";

  // Create a new tab button with an icon
  const newTabButton = $(`<a class="item" data-tab="astral-globe" title="Astral Globe Skills"><img src="${iconPath}" alt="Astral Globe" style="width: 24px; height: 24px;"></a>`);

  // Create new tab content area
  const newTabContent = $(`<div class="tab" data-tab="astral-globe"></div>`);

  // Create the label and input for "Current Astral Progress"
  const astralProgressContent = $(`
    <div style="margin-top: 10px;">
      <label class="astral-progress-label" for="astral-progress-input">Current Astral Progress:</label>
      <input type="number" id="astral-progress-input" class="astral-progress-input" placeholder="Enter progress" style="width: 100%;">
    </div>
  `);

  // Append the custom tab button and content area to the actor sheet
  html.find('.tabs .item').last().after(newTabButton);
  html.find('.sheet-body').append(newTabContent);
  newTabContent.append(astralProgressContent);

  // Hide all other tabs when the new tab is clicked and show the associated content
  newTabButton.on('click', () => {
    app._tabs[0].activate("astral-globe");
  });
});
